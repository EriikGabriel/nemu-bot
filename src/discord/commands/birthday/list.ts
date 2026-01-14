import { prisma } from "#database"
import { months } from "#types"
import { ApplicationCommandOptionType } from "discord.js"
import { command } from "./command.js"
import {
  createBirthdayEmbed,
  createMonthChoices,
  formatBirthdayDate,
  groupBirthdaysByMonth,
} from "./helpers.js"

command.subcommand({
  name: "list",
  description: "Lista os aniversários registrados",
  options: [
    {
      name: "month",
      description: "Filtra os aniversários por mês",
      choices: createMonthChoices(),
      type: ApplicationCommandOptionType.Integer,
      minValue: 1,
      maxValue: 12,
      required: false,
    },
  ],

  async run(interaction) {
    const { options } = interaction

    const monthFilter = options.getInteger("month")
    const birthdays = await prisma.birthday.findMany(
      monthFilter ? { where: { month: monthFilter } } : undefined
    )

    const grouped = groupBirthdaysByMonth(birthdays)

    const embedLines: string[] = [
      "» Registre seu aniversário com o comando:",
      "`/birthday set <day> <month> [year]`",
      "",
    ]

    for (let m = 1; m <= 12; m++) {
      if (grouped[m]) {
        embedLines.push(`**__${months[m]}__**`)
        for (const entry of grouped[m]) {
          const mention = `<@${entry.userId}>`
          const date = formatBirthdayDate(entry.day, m, entry.year)
          embedLines.push(`${mention} - ${date}`)
        }
        embedLines.push("")
      }
    }

    const embed = createBirthdayEmbed(
      `Lista de Aniversários - ${interaction.guild?.name ?? "Servidor"}`,
      embedLines.join("\n")
    )

    await interaction.reply({
      flags: ["Ephemeral"],
      embeds: [embed],
      allowedMentions: { parse: [] },
    })
  },
})
