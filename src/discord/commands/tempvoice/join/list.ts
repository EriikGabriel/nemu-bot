import {
  createJoinChannelListContainer,
  createJoinSystemNotFoundContainer,
  createNoJoinChannelsInSystemContainer,
} from "#components"
import { prisma } from "#database"
import { brBuilder } from "@magicyan/discord"
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
    await interaction.deferReply({ flags: ["Ephemeral"] })

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
      const container = systemName
        ? createJoinSystemNotFoundContainer()
        : createNoJoinChannelsInSystemContainer()

      await interaction.editReply({
        flags: ["IsComponentsV2"],
        components: [container],
      })
      return
    }

    const systemsWithChannels = systems.filter(
      (system) => system.joins.length > 0
    )

    if (systemsWithChannels.length === 0) {
      const container = createNoJoinChannelsInSystemContainer(
        systemName ?? undefined
      )

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })
      return
    }

    const totalChannels = systemsWithChannels.reduce(
      (total, system) => total + system.joins.length,
      0
    )

    const systemsInfo = systemsWithChannels
      .map((system, index) => {
        const channels = system.joins
          .map((jc) => {
            const icon = jc.templateType === "GAMES" ? "🎮" : "🏠"
            return `  └ ${icon} <#${jc.channelId}> - ${jc.templateType}`
          })
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
      .join("\n")

    const embed = createJoinChannelListContainer(
      systemsInfo,
      totalChannels,
      systemsWithChannels.length
    )

    await interaction.editReply({
      embeds: [embed],
    })
  },
})
