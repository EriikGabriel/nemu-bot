import { createCommand } from "#base"
import { ApplicationCommandType } from "discord.js"

export const command = createCommand({
  name: "tempvoice",
  description: "Gerenciar canais de voz temporários",
  type: ApplicationCommandType.ChatInput,
})
