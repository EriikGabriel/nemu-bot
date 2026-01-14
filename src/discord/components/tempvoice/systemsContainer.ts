import {
  brBuilder,
  createContainer,
  createEmbed,
  createSection,
} from "@magicyan/discord"

/**
 * Container para lista de sistemas
 */
export function createSystemListContainer(
  systemsInfo: string,
  totalSystems: number
) {
  return createEmbed({
    title: "📋 Sistemas de Canais Temporários",
    description: systemsInfo,
    color: constants.colors.pumping,
    thumbnail: {
      url: "https://i.imgur.com/GjNu2Gv.png",
    },
    footer: {
      text: `Total: ${totalSystems} sistema${totalSystems !== 1 ? "s" : ""}`,
    },
  })
}

/**
 * Container para nenhum sistema encontrado
 */
export function createNoSystemsFoundContainer() {
  return createContainer(
    "#e74c3c",
    createSection({
      content: brBuilder(
        "## ❌ Nenhum Sistema Encontrado",
        "Não há sistemas de canais temporários configurados.",
        "",
        "Crie um com `/tempvoice system create`."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema criado
 */
export function createSystemCreatedContainer(
  systemName: string,
  categoryMention: string,
  delay: string
) {
  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Sistema Criado",
        `O sistema \`${systemName}\` foi criado com sucesso!`,
        "",
        "**Configurações**",
        `📁 Categoria: ${categoryMention}`,
        `⏱️ Delay de exclusão: ${delay}`,
        "",
        "Configure templates com `/tempvoice template set` e canais de join com `/tempvoice join add`."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema editado
 */
export function createSystemEditedContainer(
  systemName: string,
  categoryMention: string,
  delay: string
) {
  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Sistema Atualizado",
        `O sistema \`${systemName}\` foi atualizado com sucesso!`,
        "",
        "**Novas Configurações**",
        `📁 Categoria: ${categoryMention}`,
        `⏱️ Delay de exclusão: ${delay}`,
        "",
        "As mudanças serão aplicadas aos novos canais criados."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema deletado
 */
export function createSystemDeletedContainer(systemName: string) {
  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Sistema Deletado",
        `O sistema \`${systemName}\` foi deletado com sucesso!`,
        "",
        "Todos os canais temporários, templates e canais de join associados foram removidos.",
        "",
        "Os canais de voz criados continuarão existindo normalmente."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema habilitado
 */
export function createSystemEnabledContainer(systemName: string) {
  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Sistema Habilitado",
        `O sistema \`${systemName}\` foi habilitado!`,
        "",
        "Os canais temporários voltarão a ser criados quando alguém entrar nos canais de join."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema desabilitado
 */
export function createSystemDisabledContainer(systemName: string) {
  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Sistema Desabilitado",
        `O sistema \`${systemName}\` foi desabilitado.`,
        "",
        "Não serão criados novos canais temporários até você habilitar novamente.",
        "",
        "Os canais já existentes continuarão funcionando normalmente."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema já habilitado
 */
export function createSystemAlreadyEnabledContainer(systemName: string) {
  return createContainer(
    "#f39c12",
    createSection({
      content: brBuilder(
        "## ⚠️ Sistema Já Habilitado",
        `O sistema \`${systemName}\` já está habilitado.`,
        "",
        "Não é necessário fazer nenhuma ação."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema já desabilitado
 */
export function createSystemAlreadyDisabledContainer(systemName: string) {
  return createContainer(
    "#f39c12",
    createSection({
      content: brBuilder(
        "## ⚠️ Sistema Já Desabilitado",
        `O sistema \`${systemName}\` já está desabilitado.`,
        "",
        "Não é necessário fazer nenhuma ação."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para erro de ID do sistema
 */
export function createSystemIdNotFoundContainer() {
  return createContainer(
    "#e74c3c",
    createSection({
      content: brBuilder(
        "## ❌ Erro Interno",
        "ID do sistema não encontrado.",
        "",
        "Por favor, tente novamente."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}
