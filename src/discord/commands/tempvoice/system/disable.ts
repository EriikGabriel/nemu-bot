import { prisma } from "#database"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "disable",
  description: "Desabilitar um sistema de canais temporários",
  options: [
    {
      name: "name",
      description: "Nome do sistema de canais temporários a ser desabilitado.",
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
      await interaction.reply({
        content: `❌ Sistema de canais temporários \`${systemName}\` não encontrado.`,
        ephemeral: true,
      })
      return
    }

    if (!system.enabled) {
      await interaction.reply({
        content: `⚠️ O sistema \`${systemName}\` já está desabilitado.`,
        ephemeral: true,
      })
      return
    }

    await prisma.tempVoiceSystem.update({
      where: {
        id: system.id,
      },
      data: {
        enabled: false,
      },
    })

    await interaction.reply({
      content: `✅ Sistema \`${systemName}\` desabilitado com sucesso.`,
      ephemeral: true,
    })

    return
  },
})
