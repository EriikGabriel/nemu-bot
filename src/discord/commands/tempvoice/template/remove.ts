import {
  createSystemNotFoundContainer,
  createTemplateNotFoundContainer,
  createTemplateRemovedContainer,
} from "#components"
import { prisma } from "#database"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "remove",
  description: "Remove um template de canal temporário",
  options: [
    {
      name: "system",
      description: "Nome do sistema de canais temporários.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "type",
      description: "Tipo do template a ser removido.",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        { name: "GAMES 🎮", value: "GAMES" },
        { name: "QUARTINHOS 🏠", value: "QUARTINHOS" },
      ],
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const systemName = options.getString("system", true)
    const templateType = options.getString("type", true) as
      | "GAMES"
      | "QUARTINHOS"

    const system = await prisma.tempVoiceSystem.findUnique({
      where: {
        guildId: guild.id,
        name: systemName,
      },
    })

    if (!system) {
      const container = createSystemNotFoundContainer(systemName)

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })

      return
    }

    const template = await prisma.tempVoiceTemplate.findUnique({
      where: {
        systemId_type: {
          systemId: system.id,
          type: templateType,
        },
      },
    })

    if (!template) {
      const container = createTemplateNotFoundContainer(
        templateType,
        systemName
      )

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })

      return
    }

    await prisma.tempVoiceTemplate.delete({
      where: {
        systemId_type: {
          systemId: system.id,
          type: templateType,
        },
      },
    })

    const container = createTemplateRemovedContainer(templateType, systemName)

    await interaction.reply({
      flags: ["IsComponentsV2", "Ephemeral"],
      components: [container],
    })

    return
  },
})
