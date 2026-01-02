import { ChannelType } from "discord.js"
import { command } from "../command.js"

export const guildChannelTypes = [
  ChannelType.GuildAnnouncement,
  ChannelType.GuildForum,
  ChannelType.GuildText,
  ChannelType.GuildVoice,
] as const

export default command.group({
  name: "system",
  description: "Gerenciar os sistemas de canais de voz temporários.",
})
