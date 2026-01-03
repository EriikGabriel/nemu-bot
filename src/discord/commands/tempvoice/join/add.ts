import { prisma } from "#database"
import { createEmbed } from "@magicyan/discord"
import { ApplicationCommandOptionType, ChannelType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "add",
  description:
    "Adicionar um canal de voz como canal de entrada para canais temporários",
  options: [
    {
      name: "system",
      description:
        "Nome do sistema de canais temporários ao qual adicionar o canal de entrada.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "channel",
      description: "Canal de voz a ser adicionado como canal de entrada.",
      type: ApplicationCommandOptionType.Channel,
      
      required: true,
      channelTypes: [ChannelType.GuildVoice],
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const systemName = options.getString("system", true)
    const joinChannel = options.getChannel("channel", true)

    const system = await prisma.tempVoiceSystem.findUnique({
      where: {
        guildId: guild.id,
        name: systemName,
      },
    })

    if (!system) {
      const embed = createEmbed({
        description: [
          `❌ Sistema de canais temporários \`${systemName}\` não encontrado.`,
          "Para ver a lista de sistemas, use o comando `/tempvoice system list`.",
        ],
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })

      return
    }

    const alreadyLinked = await prisma.tempVoiceJoinChannel.findUnique({
      where: {
        channelId: joinChannel.id,
      },
      include: {
        system: true,
      },
    })

    if (alreadyLinked) {
      const embed = createEmbed({
        description: `❌ O canal ${joinChannel} já está vinculado ao sistema \`${alreadyLinked.system.name}\`.`,
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })

      return
    }

    await prisma.tempVoiceJoinChannel.create({
      data: {
        systemId: system.id,
        channelId: joinChannel.id,
      },
    })

    await interaction.reply({
      content: `✅ | Canal de voz ${joinChannel} adicionado como canal de entrada para canais temporários.`,
      ephemeral: true,
    })
  },
})
