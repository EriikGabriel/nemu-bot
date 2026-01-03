import { prisma } from "#database"
import { ApplicationCommandOptionType, ChannelType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "remove",
  description: "Remover um canal de entrada para canais temporários",
  options: [
    {
      name: "channel",
      description: "Canal de entrada a ser removido.",
      type: ApplicationCommandOptionType.Channel,
      required: true,
      channelTypes: [ChannelType.GuildVoice],
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const joinChannel = options.getChannel("channel", true)

    const tempJoinVoice = await prisma.tempVoiceJoinChannel.findUnique({
      where: {
        channelId: joinChannel.id,
      },
      include: {
        system: true,
      },
    })

    if (!tempJoinVoice || tempJoinVoice.system.guildId !== guild.id) {
      await interaction.reply({
        content: `❌ | O canal <#${joinChannel.id}> não está configurado como canal de entrada para canais temporários neste servidor.`,
        ephemeral: true,
      })
      return
    }

    const systemName = tempJoinVoice.system.name

    await prisma.tempVoiceJoinChannel.delete({
      where: {
        channelId: joinChannel.id,
      },
    })

    await interaction.reply({
      content: `✅ | Canal <#${joinChannel.id}> removido como canal de entrada do sistema de canais temporários \`${systemName}\`.`,
      ephemeral: true,
    })

    return
  },
})
