import {
  createNoTemplatesInSystemContainer,
  createSystemNotFoundContainer,
  createTemplateListContainer,
} from "#components"
import { prisma } from "#database"
import { brBuilder } from "@magicyan/discord"
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
    await interaction.deferReply({ flags: ["Ephemeral"] })

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
      const container = createSystemNotFoundContainer(systemName)

      await interaction.editReply({
        flags: ["IsComponentsV2"],
        components: [container],
      })

      return
    }

    if (system.templates.length === 0) {
      const container = createNoTemplatesInSystemContainer(systemName)

      await interaction.editReply({
        flags: ["IsComponentsV2"],
        components: [container],
      })

      return
    }

    const templatesInfo = system.templates
      .map((template, index) => {
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
      .join("\n")

    const embed = createTemplateListContainer(
      system.name,
      templatesInfo,
      system.templates.length
    )

    await interaction.editReply({
      embeds: [embed],
    })

    return
  },
})
