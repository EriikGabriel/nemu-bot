import { createLabel, createTextInput } from "@magicyan/discord"
import {
  ChannelType,
  Guild,
  StringSelectMenuBuilder,
  TextInputStyle,
} from "discord.js"

/**
 * Cria um campo de entrada de texto para o nome do sistema
 */
export function createNameInput(value?: string) {
  return createLabel(
    "Nome do sistema",
    "Forneça o nome do sistema de canais temporários.",
    createTextInput({
      customId: "name",
      style: TextInputStyle.Short,
      placeholder: "Nome do sistema",
      value,
      required: true,
    })
  )
}

/**
 * Cria um campo de seleção de categoria
 */
export function createCategorySelect(
  guild: Guild,
  selectedCategoryId?: string
) {
  const categories = guild.channels.cache
    .filter((channel) => channel.type === ChannelType.GuildCategory)
    .map((category) => ({
      label: category.name,
      value: category.id,
      default: selectedCategoryId ? category.id === selectedCategoryId : false,
    }))

  return createLabel(
    "Categoria",
    "Selecione a categoria onde os canais serão criados.",
    new StringSelectMenuBuilder({
      customId: "category",
      placeholder: "Selecione a categoria",
      options: categories,
      required: true,
    })
  )
}

/**
 * Cria um campo de entrada de texto para o delay de deleção
 */
export function createDeleteDelayInput(value?: string) {
  return createLabel(
    "Delay para deletar canal vazio",
    "Forneça o delay (em segundos) para deletar um canal vazio.",
    createTextInput({
      customId: "delete_delay",
      style: TextInputStyle.Short,
      placeholder: "Delay em segundos (opcional)",
      value: value ?? "",
      required: false,
    })
  )
}

/**
 * Valida se um valor é um número válido
 */
export function isValidNumber(value: string): boolean {
  return value !== "" && !isNaN(Number(value))
}

/**
 * Converte um valor de delay para número ou retorna o padrão
 */
export function parseDelay(
  delayValue: string,
  defaultValue: number = 0
): number {
  if (!delayValue) return defaultValue
  return isValidNumber(delayValue) ? Number(delayValue) : defaultValue
}
