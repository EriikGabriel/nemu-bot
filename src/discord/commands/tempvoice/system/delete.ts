import { createSystemDeletedContainer } from "#components"
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

    await prisma.tempVoiceSystem.delete({
      where: {
        guildId: guild.id,
        name: systemName,
      },
    })

    const container = createSystemDeletedContainer(systemName)

    await interaction.reply({
      flags: ["IsComponentsV2", "Ephemeral"],
      components: [container],
    })

    return
  },
})
