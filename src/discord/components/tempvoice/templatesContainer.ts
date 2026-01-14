import {
  brBuilder,
  createContainer,
  createEmbed,
  createSection,
} from "@magicyan/discord"

/**
 * Container para lista de templates
 */
export function createTemplateListContainer(
  systemName: string,
  templatesInfo: string,
  totalTemplates: number
) {
  return createEmbed({
    title: `📋 Templates do Sistema: ${systemName}`,
    description: templatesInfo,
    color: "#9b59b6",
    thumbnail: {
      url: "https://i.imgur.com/GjNu2Gv.png",
    },
    footer: {
      text: `Total: ${totalTemplates} template${
        totalTemplates !== 1 ? "s" : ""
      }`,
    },
  })
}

/**
 * Container para nenhum template no sistema
 */
export function createNoTemplatesInSystemContainer(systemName: string) {
  return createContainer(
    "#f39c12",
    createSection({
      content: brBuilder(
        "## ⚠️ Nenhum Template Encontrado",
        `O sistema \`${systemName}\` não possui templates configurados.`,
        "",
        "Configure um template com `/tempvoice template set`."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para lista de canais de join
 */
export function createJoinChannelListContainer(
  systemsInfo: string,
  totalChannels: number,
  totalSystems: number
) {
  return createEmbed({
    title: "🎙️ Canais de Entrada para Canais Temporários",
    description: systemsInfo,
    color: constants.colors.pumping,
    thumbnail: {
      url: "https://i.imgur.com/GjNu2Gv.png",
    },
    footer: {
      text: `Total: ${totalChannels} canal${
        totalChannels !== 1 ? "is" : ""
      } em ${totalSystems} sistema${totalSystems !== 1 ? "s" : ""}`,
    },
  })
}

/**
 * Container para nenhum canal de join no sistema
 */
export function createNoJoinChannelsInSystemContainer(systemName?: string) {
  const message = systemName
    ? `Nenhum canal de entrada encontrado no sistema \`${systemName}\`.`
    : "Nenhum canal de entrada configurado ainda."

  return createContainer(
    "#f39c12",
    createSection({
      content: brBuilder(
        "## ⚠️ Nenhum Canal de Entrada",
        message,
        "",
        "Configure canais de entrada com `/tempvoice join add`."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema não encontrado (join)
 */
export function createJoinSystemNotFoundContainer() {
  return createContainer(
    "#e74c3c",
    createSection({
      content: brBuilder(
        "## ❌ Sistema Não Encontrado",
        "O sistema especificado não foi encontrado.",
        "",
        "Verifique o nome e tente novamente."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para sistema não encontrado
 */
export function createSystemNotFoundContainer(systemName: string) {
  return createContainer(
    "#e74c3c",
    createSection({
      content: brBuilder(
        "## ❌ Sistema Não Encontrado",
        `O sistema de canais temporários \`${systemName}\` não foi encontrado.`,
        "",
        "Para ver a lista de sistemas, use `/tempvoice system list`."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para template não encontrado
 */
export function createTemplateNotFoundContainer(
  templateType: string,
  systemName: string
) {
  return createContainer(
    "#e74c3c",
    createSection({
      content: brBuilder(
        "## ❌ Template Não Encontrado",
        `O template do tipo \`${templateType}\` não foi encontrado no sistema \`${systemName}\`.`,
        "",
        "Use `/tempvoice template set` para criar um novo template."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para template removido
 */
export function createTemplateRemovedContainer(
  templateType: string,
  systemName: string
) {
  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Template Removido",
        `O template \`${templateType}\` foi removido do sistema \`${systemName}\` com sucesso!`,
        "",
        "Os canais criados com este template continuarão funcionando normalmente."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para template criado/atualizado
 */
export function createTemplateSetContainer(
  templateType: string,
  systemName: string,
  nameTemplate: string,
  userLimit: number | null,
  bitrate: number | null
) {
  const limitText = userLimit
    ? `👥 Limite: ${userLimit} usuários`
    : "👥 Sem limite de usuários"
  const bitrateText = bitrate
    ? `🎵 Bitrate: ${bitrate / 1000}kbps`
    : "🎵 Bitrate padrão"

  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Template Configurado",
        `O template \`${templateType}\` foi configurado no sistema \`${systemName}\`!`,
        "",
        "**Configurações**",
        `📝 Nome: ${nameTemplate}`,
        limitText,
        bitrateText
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para canal de join adicionado
 */
export function createJoinChannelAddedContainer(
  channelMention: string,
  systemName: string,
  templateType: string
) {
  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Canal de Join Adicionado",
        `O canal ${channelMention} foi adicionado ao sistema \`${systemName}\`!`,
        "",
        `**Template:** ${templateType}`,
        "",
        "Quando alguém entrar neste canal, um novo canal temporário será criado automaticamente."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para canal de join já existe
 */
export function createJoinChannelAlreadyExistsContainer(
  channelMention: string
) {
  return createContainer(
    "#e74c3c",
    createSection({
      content: brBuilder(
        "## ❌ Canal Já Cadastrado",
        `O canal ${channelMention} já está cadastrado como canal de join.`,
        "",
        "Use `/tempvoice join remove` para removê-lo primeiro."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para canal de join removido
 */
export function createJoinChannelRemovedContainer(
  channelMention: string,
  systemName: string
) {
  return createContainer(
    "#2ecc71",
    createSection({
      content: brBuilder(
        "## ✅ Canal de Join Removido",
        `O canal ${channelMention} foi removido do sistema \`${systemName}\`!`,
        "",
        "Ele não criará mais canais temporários automaticamente."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}

/**
 * Container para canal de join não encontrado
 */
export function createJoinChannelNotFoundContainer(channelMention: string) {
  return createContainer(
    "#e74c3c",
    createSection({
      content: brBuilder(
        "## ❌ Canal Não Encontrado",
        `O canal ${channelMention} não está cadastrado como canal de join.`,
        "",
        "Use `/tempvoice join list` para ver os canais cadastrados."
      ),
      thumbnail: "https://i.imgur.com/GjNu2Gv.png",
    })
  )
}
