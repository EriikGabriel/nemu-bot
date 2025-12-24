import { createCommand } from "#base"
import { prisma } from "#database"
import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js"
import { months } from "../../types/index.js"

createCommand({
  name: "birthday",
  description: "Gerencia as configurações de aniversário do servidor.",
  defaultMemberPermissions: ["Administrator"],
  dmPermission: false,
  options: [
    {
      name: "set",
      description: "Registra ou atualiza um aniversário",
      type: ApplicationCommandOptionType.Subcommand,
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
          choices: Object.entries(months).map(([index, month]) => ({
            name: `${index} | ${month}`,
            value: Number(index),
          })),
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
    },
    {
      name: "list",
      description: "Lista os aniversários registrados",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "month",
          description: "Filtra os aniversários por mês",
          choices: Object.entries(months).map(([index, month]) => ({
            name: `${index} | ${month}`,
            value: Number(index),
          })),
          type: ApplicationCommandOptionType.Integer,
          minValue: 1,
          maxValue: 12,
          required: false,
        },
      ],
    },
    {
      name: "remove",
      description: "Remove o aniversário registrado",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "user",
          description: "Usuário que terá o aniversário removido",
          type: ApplicationCommandOptionType.User,
          required: false,
        },
      ],
    },
    {
      name: "channel",
      description: "Define o canal para anúncios de aniversário",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "channel",
          description: "Canal onde os anúncios de aniversário serão enviados",
          type: ApplicationCommandOptionType.Channel,
          required: true,
        },
      ],
    },
  ],

  async run(interaction) {
    const { options } = interaction
    const subcommand = options.getSubcommand()

    switch (subcommand) {
      case "set": {
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
        }

        const isSelf = user.id === interaction.user.id
        const subject = isSelf ? "Seu aniversário" : `O aniversário de ${user}`

        const oldDate = previousBirthday
          ? `${previousBirthday.day} de ${months[previousBirthday.month]}${
              previousBirthday.year ? ` de ${previousBirthday.year}` : ""
            }`
          : null
        const newDate = `${day} de ${months[month]}${year ? ` de ${year}` : ""}`

        let message: string[]
        if (previousBirthday) {
          message = [
            "**Aniversário atualizado!**",
            `${subject} foi atualizado com sucesso.`,
            "",
            "**Antes**",
            oldDate ?? "-",
            "",
            "**Agora**",
            newDate,
          ]
        } else {
          message = [
            "**Aniversário registrado!**",
            `${subject} foi registrado com sucesso.`,
            "",
            "**Data**",
            newDate,
          ]
        }

        const embed = new EmbedBuilder()
          .setColor(constants.colors.pumping as `#${string}`)
          .setTitle("Aniversário")
          .setDescription(message.join("\n"))
          .setThumbnail(constants.images.cake)

        await interaction.reply({
          flags: ["Ephemeral"],
          embeds: [embed],
          allowedMentions: { parse: [] },
        })
        break
      }
      case "list": {
        const monthFilter = options.getInteger("month")
        const birthdays = await prisma.birthday.findMany(
          monthFilter ? { where: { month: monthFilter } } : undefined
        )

        const grouped: Record<
          number,
          Array<{ userId: string; day: number; year: number | null }>
        > = {}

        for (const b of birthdays) {
          if (!grouped[b.month]) grouped[b.month] = []
          grouped[b.month].push({ userId: b.userId, day: b.day, year: b.year })
        }

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
              embedLines.push(
                `${mention} ${entry.day}, ${months[m]}${
                  entry.year ? ` de ${entry.year}` : ""
                }`
              )
            }
            embedLines.push("")
          }
        }

        const embed = new EmbedBuilder()
          .setColor(constants.colors.pumping as `#${string}`)
          .setTitle(
            `Lista de Aniversários - ${interaction.guild?.name ?? "Servidor"}`
          )
          .setDescription(embedLines.join("\n"))
          .setThumbnail(constants.images.cake)

        await interaction.reply({
          flags: ["Ephemeral"],
          embeds: [embed],
          allowedMentions: { parse: [] },
        })
        break
      }
      case "remove": {
        const user = options.getUser("user") ?? interaction.user

        let deleted = false
        try {
          const result = await prisma.birthday.deleteMany({
            where: { userId: user.id },
          })
          deleted = result.count > 0
        } catch (error) {
          console.error(error)
        }

        const isSelf = user.id === interaction.user.id
        const subject = isSelf ? "Seu aniversário" : `O aniversário de ${user}`

        let message: string[]

        message = [
          deleted
            ? "**Aniversário removido!**\n" +
              `${subject} foi removido com sucesso.`
            : "**Nenhum aniversário encontrado!**\n" +
              `${subject} não está registrado.`,
        ]

        const embedColor = deleted
          ? (constants.colors.pumping as `#${string}`)
          : (constants.colors.danger as `#${string}`)

        const embed = new EmbedBuilder()
          .setColor(embedColor)
          .setTitle("Aniversário")
          .setDescription(message.join("\n"))
          .setThumbnail(constants.images.cake)

        await interaction.reply({
          embeds: [embed],
          flags: ["Ephemeral"],
        })

        break
      }
      case "channel": {
        const channel = options.getChannel("channel", true)

        if (!interaction.guild) {
          await interaction.reply({
            content: "Este comando só pode ser usado em servidores.",
            flags: ["Ephemeral"],
          })
          return
        }

        if (!channel.isTextBased()) {
          await interaction.reply({
            content: "Por favor, selecione um canal de texto válido.",
            flags: ["Ephemeral"],
          })
          return
        }

        await prisma.guildConfig.upsert({
          where: { guildId: interaction.guild.id },
          update: { birthdayChannelId: channel.id },
          create: {
            guildId: interaction.guild.id,
            birthdayChannelId: channel.id,
          },
        })

        const embed = new EmbedBuilder()
          .setColor(constants.colors.pumping as `#${string}`)
          .setTitle("Canal de anúncios de aniversário definido")
          .setDescription(
            `Os anúncios de aniversário serão enviados em ${channel}.`
          )
          .setThumbnail(constants.images.cake)

        await interaction.reply({
          embeds: [embed],
          flags: ["Ephemeral"],
        })
        break
      }
    }
  },
})
