import { prisma } from "#database"
import { brBuilder } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"
import { createBirthdayEmbed } from "./helpers.js"

group.subcommand({
  name: "channel",
  description: "Define o canal para anúncios de aniversário",
  options: [
    {
      name: "channel",
      description: "Canal onde os anúncios de aniversário serão enviados",
      type: ApplicationCommandOptionType.Channel,
      required: true,
    },
  ],

  async run(interaction) {
    const { options } = interaction

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

    try {
      await prisma.guildConfig.upsert({
        where: { guildId: interaction.guild.id },
        update: { birthdayChannelId: channel.id },
        create: {
          guildId: interaction.guild.id,
          birthdayChannelId: channel.id,
        },
      })
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content: "❌ Erro ao definir o canal de anúncios.",
        flags: ["Ephemeral"],
      })
      return
    }

    const description = brBuilder(
      "**Canal de anúncios de aniversário definido**",
      `Os anúncios de aniversário serão enviados em ${channel}.`
    )

    const embed = createBirthdayEmbed("Canal Configurado", description)

    await interaction.reply({
      embeds: [embed],
      flags: ["Ephemeral"],
    })
  },
})
