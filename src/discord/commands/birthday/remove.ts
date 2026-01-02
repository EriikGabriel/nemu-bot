import { prisma } from "#database"
import { brBuilder } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"
import { createBirthdayEmbed } from "./helpers.js"

group.subcommand({
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

    const description = deleted
      ? brBuilder(
          "**Aniversário removido!**",
          `${subject} foi removido com sucesso.`
        )
      : brBuilder(
          "**Nenhum aniversário encontrado!**",
          `${subject} não está registrado.`
        )

    const color = deleted
      ? (constants.colors.pumping as `#${string}`)
      : (constants.colors.danger as `#${string}`)

    const embed = createBirthdayEmbed("Aniversário", description, color)

    await interaction.reply({
      embeds: [embed],
      flags: ["Ephemeral"],
    })
  },
})
