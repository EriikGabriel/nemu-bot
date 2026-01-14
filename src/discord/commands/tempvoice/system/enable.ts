import {
  createSystemAlreadyEnabledContainer,
  createSystemEnabledContainer,
  createSystemNotFoundContainer,
} from "#components"
import { prisma } from "#database"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "enable",
  description: "Habilitar um sistema de canais temporários",
  options: [
    {
      name: "name",
      description: "Nome do sistema de canais temporários a ser habilitado.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const systemName = options.getString("name", true)
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

    if (system.enabled) {
      const container = createSystemAlreadyEnabledContainer(systemName)

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })
      return
    }

    await prisma.tempVoiceSystem.update({
      where: {
        id: system.id,
      },
      data: {
        enabled: true,
      },
    })

    const container = createSystemEnabledContainer(systemName)

    await interaction.reply({
      flags: ["IsComponentsV2", "Ephemeral"],
      components: [container],
    })

    return
  },
})
