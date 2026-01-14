import {
  createBirthdayNotFoundContainer,
  createBirthdayRemovedContainer,
} from "#components"
import { prisma } from "#database"
import { ApplicationCommandOptionType } from "discord.js"
import { command } from "./command.js"

command.subcommand({
  name: "remove",
  description: "Remove o aniversário registrado",
  options: [
    {
      name: "user",
      description: "Usuário que terá o aniversário removido",
      type: ApplicationCommandOptionType.User,
      required: false,
    },
  ],

  async run(interaction) {
    const { options } = interaction

    const user = options.getUser("user") ?? interaction.user

    let deleted = false
    try {
      const result = await prisma.birthday.deleteMany({
        where: { userId: user.id },
      })
      deleted = result.count > 0
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content: "❌ Erro ao remover o aniversário.",
        flags: ["Ephemeral"],
      })
      return
    }

    const isSelf = user.id === interaction.user.id
    const subject = isSelf ? "Seu aniversário" : `O aniversário de ${user}`

    const container = deleted
      ? createBirthdayRemovedContainer(subject)
      : createBirthdayNotFoundContainer(subject)

    await interaction.reply({
      flags: ["IsComponentsV2", "Ephemeral"],
      components: [container],
    })
  },
})
