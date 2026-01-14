import { createBirthdaySetContainer } from "#components"
import { prisma } from "#database"
import { brBuilder } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import { command } from "./command.js"
import { createMonthChoices, formatBirthdayDate } from "./helpers.js"

command.subcommand({
  name: "set",
  description: "Registra ou atualiza um aniversário",
  options: [
    {
      name: "day",
      description: "Informe o dia do aniversário",
      type: ApplicationCommandOptionType.Integer,
      minValue: 1,
      maxValue: 31,
      required: true,
    },
    {
      name: "month",
      description: "Informe o mês do aniversário",
      choices: createMonthChoices(),
      type: ApplicationCommandOptionType.Integer,
      minValue: 1,
      maxValue: 12,
      required: true,
    },
    {
      name: "year",
      description: "Informe o ano do aniversário",
      type: ApplicationCommandOptionType.Integer,
      minValue: 1900,
      maxValue: new Date().getFullYear(),
      required: false,
    },
    {
      name: "user",
      description: "Usuário que terá o aniversário registrado",
      type: ApplicationCommandOptionType.User,
      required: false,
    },
  ],

  async run(interaction) {
    const { options } = interaction

    const day = options.getInteger("day", true)
    const month = options.getInteger("month", true)
    const year = options.getInteger("year")
    const user = options.getUser("user") ?? interaction.user

    let previousBirthday = null
    try {
      previousBirthday = await prisma.birthday.findUnique({
        where: { userId: user.id },
      })

      await prisma.birthday.upsert({
        where: { userId: user.id },
        update: { day, month, year },
        create: { userId: user.id, day, month, year },
      })
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content: "❌ Erro ao registrar o aniversário.",
        flags: ["Ephemeral"],
      })
      return
    }

    const isSelf = user.id === interaction.user.id
    const subject = isSelf ? "Seu aniversário" : `O aniversário de ${user}`
    const newDate = formatBirthdayDate(day, month, year)

    let description: string
    if (previousBirthday) {
      const oldDate = formatBirthdayDate(
        previousBirthday.day,
        previousBirthday.month,
        previousBirthday.year
      )
      description = brBuilder(
        "**Aniversário atualizado!**",
        `${subject} foi atualizado com sucesso.`,
        "",
        "**Antes**",
        oldDate,
        "",
        "**Agora**",
        newDate
      )
    } else {
      description = brBuilder(
        "**Aniversário registrado!**",
        `${subject} foi registrado com sucesso.`,
        "",
        "**Data**",
        newDate
      )
    }

    const container = createBirthdaySetContainer(description)

    await interaction.reply({
      flags: ["IsComponentsV2", "Ephemeral"],
      components: [container],
      allowedMentions: { parse: [] },
    })
  },
})
