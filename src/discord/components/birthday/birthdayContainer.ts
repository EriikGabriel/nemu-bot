import { brBuilder, createContainer, createSection } from "@magicyan/discord"

/**
 * Container para confirmação de configuração de canal de aniversário
 */
export function createBirthdayChannelConfiguredContainer(
  channelMention: string
) {
  return createContainer(
    constants.colors.pumping,
    createSection({
      content: brBuilder(
        "## 🎂 Canal de Aniversários Configurado",
        "O canal de anúncios foi definido com sucesso!",
        "",
        `**Canal selecionado:** ${channelMention}`,
        "",
        "Os anúncios de aniversário serão enviados automaticamente neste canal."
      ),
      thumbnail: constants.images.cake,
    })
  )
}

/**
 * Container para confirmação de registro de aniversário
 */
export function createBirthdaySetContainer(desc: string) {
  return createContainer(
    constants.colors.pumping,
    createSection({
      content: brBuilder("## 🎉 Aniversário", desc),
      thumbnail: constants.images.cake,
    })
  )
}

/**
 * Container para lista de aniversários
 */
export function createBirthdayListContainer(
  guildName: string,
  birthdayList: string
) {
  return createContainer(
    constants.colors.pumping,
    createSection({
      content: brBuilder(
        `## 🎂 Lista de Aniversários - ${guildName}`,
        "Confira todos os aniversariantes registrados:",
        "",
        birthdayList
      ),
      thumbnail: constants.images.cake,
    })
  )
}

/**
 * Container para remoção de aniversário (sucesso)
 */
export function createBirthdayRemovedContainer(subject: string) {
  return createContainer(
    constants.colors.pumping,
    createSection({
      content: brBuilder(
        "## ✅ Aniversário Removido",
        `${subject} foi removido com sucesso dos registros.`,
        "",
        "O aniversário não será mais anunciado automaticamente."
      ),
      thumbnail: constants.images.cake,
    })
  )
}

/**
 * Container para remoção de aniversário (não encontrado)
 */
export function createBirthdayNotFoundContainer(subject: string) {
  return createContainer(
    "#FF0000",
    createSection({
      content: brBuilder(
        "## ❌ Aniversário Não Encontrado",
        `${subject} não está registrado no sistema.`,
        "",
        "Use `/birthday set` para registrar um aniversário."
      ),
      thumbnail: constants.images.cake,
    })
  )
}
