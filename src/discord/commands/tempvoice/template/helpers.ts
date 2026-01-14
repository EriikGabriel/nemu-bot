import { createLabel, createTextInput } from "@magicyan/discord"
import { TextInputStyle } from "discord.js"

/**
 * Cria um campo de entrada de texto para o template de nome do canal
 */
export function createNameTemplateInput(value?: string, isGames = false) {
  return createLabel(
    "Template do nome",
    isGames
      ? "Opcional: Deixe vazio para usar o jogo atual. Use {user} para o nome."
      : "Use {user} para o nome do usuário. Ex: 'Canal de {user}'",
    createTextInput({
      customId: "name_template",
      style: TextInputStyle.Short,
      placeholder: isGames ? "🎮 {user} - {game}" : "Canal de {user}",
      value,
      required: !isGames,
    })
  )
}

/**
 * Cria um campo de entrada de texto para o limite de usuários
 */
export function createUserLimitInput(value?: string) {
  return createLabel(
    "Limite de usuários",
    "Limite de usuários no canal (0 = sem limite)",
    createTextInput({
      customId: "user_limit",
      style: TextInputStyle.Short,
      placeholder: "0",
      value: value ?? "",
      required: false,
    })
  )
}

/**
 * Cria um campo de entrada de texto para o bitrate
 */
export function createBitrateInput(value?: string) {
  return createLabel(
    "Bitrate",
    "Bitrate do canal em kbps (8-384 para normais, até 128k para boost)",
    createTextInput({
      customId: "bitrate",
      style: TextInputStyle.Short,
      placeholder: "64000",
      value: value ?? "",
      required: false,
    })
  )
}

/**
 * Converte um valor para número ou retorna undefined
 */
export function parseOptionalNumber(value: string): number | undefined {
  if (!value || value.trim() === "") return undefined
  const num = Number(value)
  return Number.isNaN(num) ? undefined : num
}
