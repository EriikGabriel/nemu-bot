import { prisma } from "#database"
import { brBuilder, createEmbed } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "list",
  description: "Lista os templates configurados de um sistema",
  options: [
    {
      name: "system",
      description: "Nome do sistema de canais temporários.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const systemName = options.getString("system", true)

    const system = await prisma.tempVoiceSystem.findUnique({
      where: {
        guildId: guild.id,
        name: systemName,
      },
      include: {
        templates: {
          orderBy: {
            type: "asc",
          },
        },
      },
    })

    if (!system) {
      const embed = createEmbed({
        description: [
          `❌ Sistema de canais temporários \`${systemName}\` não encontrado.`,
          "Para ver a lista de sistemas, use o comando `/tempvoice system list`.",
        ],
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })

      return
    }

    if (system.templates.length === 0) {
      const embed = createEmbed({
        description: `❌ Nenhum template configurado no sistema \`${systemName}\`.`,
        color: constants.colors.warning,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })

      return
    }

    const embed = createEmbed({
      title: `📋 Templates do Sistema: ${system.name}`,
      description: brBuilder(
        ...system.templates.map((template, index) => {
          const icon = template.type === "GAMES" ? "🎮" : "🏠"
          const userLimit = template.userLimit
            ? `${template.userLimit} usuários`
            : "Sem limite"
          const bitrate = template.bitrate
            ? `${template.bitrate / 1000}kbps`
            : "Padrão"
          const separator =
            index < system.templates.length - 1
              ? "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
              : ""

          return brBuilder(
            `${icon} **${template.type}**`,
            `└📝 Nome: ${template.nameTemplate}`,
            `└👥 Limite: ${userLimit}`,
            `└🎵 Bitrate: ${bitrate}`,
            separator
          )
        })
      ),
      color: constants.colors.pumping,
      timestamp: new Date(),
      footer: {
        text: `Total: ${system.templates.length} template${
          system.templates.length !== 1 ? "s" : ""
        }`,
      },
    })

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    })

    return
  },
})
