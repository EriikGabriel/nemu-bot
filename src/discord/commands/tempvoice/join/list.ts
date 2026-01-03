import { prisma } from "#database"
import { brBuilder, createEmbed } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "list",
  description: "Listar todos os canais de entrada para canais temporários",
  options: [
    {
      name: "system",
      description: "Filtrar por sistema de canais temporários",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const systemName = options.getString("system")

    let systems = await prisma.tempVoiceSystem.findMany({
      where: {
        guildId: guild.id,
        ...(systemName ? { name: systemName } : {}),
      },
      include: {
        joins: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    })

    if (systems.length === 0) {
      const embed = createEmbed({
        description: systemName
          ? "❌ Sistema não encontrado."
          : "❌ Nenhum sistema de canais temporários encontrado.",
        color: constants.colors.danger,
      })

      await interaction.reply({
        embeds: [embed],
        ephemeral: true,
      })
      return
    }

    const systemsWithChannels = systems.filter(
      (system) => system.joins.length > 0
    )

    if (systemsWithChannels.length === 0) {
      const embed = createEmbed({
        description: systemName
          ? "❌ Nenhum canal de entrada encontrado para este sistema."
          : "❌ Nenhum canal de entrada configurado ainda.",
        color: constants.colors.danger,
      })

      await interaction.reply({
        embeds: [embed],
        ephemeral: true,
      })
      return
    }

    const totalChannels = systemsWithChannels.reduce(
      (total, system) => total + system.joins.length,
      0
    )

    const embed = createEmbed({
      title: "🎙️ Canais de Entrada para Canais Temporários",
      description: brBuilder(
        ...systemsWithChannels.map((system, index) => {
          const channels = system.joins
            .map((jc) => `  └ <#${jc.channelId}>`)
            .join("\n")

          const separator =
            index < systemsWithChannels.length - 1
              ? "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
              : ""

          return brBuilder(
            `**${system.name}**`,
            `📁 Categoria: <#${system.categoryId}>`,
            `⏱️ Delay de exclusão: ${system.deleteDelay}s`,
            `**Canais de entrada (${system.joins.length}):**`,
            channels,
            separator
          )
        })
      ),
      color: constants.colors.pumping,
      timestamp: new Date(),
      footer: {
        text: `Total: ${totalChannels} canal${
          totalChannels !== 1 ? "is" : ""
        } em ${systemsWithChannels.length} sistema${
          systemsWithChannels.length !== 1 ? "s" : ""
        }`,
      },
    })

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    })
  },
})
