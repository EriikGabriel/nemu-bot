import { prisma } from "#database"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "delete",
  description: "Criar um novo sistema de canais temporários",
  options: [
    {
      name: "name",
      description: "Nome do sistema de canais temporários a ser deletado.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const systemName = options.getString("name", true)

    prisma.tempVoiceSystem.delete({
      where: {
        guildId: guild.id,
        name: systemName,
      },
    })

    await interaction.reply({
      content: `✅ | Sistema de canais temporários \`${systemName}\` deletado com sucesso.`,
      ephemeral: true,
    })

    return
  },
})
