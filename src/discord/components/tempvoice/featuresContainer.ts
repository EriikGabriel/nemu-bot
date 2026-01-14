import {
  brBuilder,
  createContainer,
  createRow,
  createSection,
  Separator,
} from "@magicyan/discord"
import {
  GuildMember,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  VoiceChannel,
} from "discord.js"

/**
 * Container de boas-vindas para canais de voz temporários
 */
export function createTempVoiceWelcomeContainer(
  channel: VoiceChannel,
  member: GuildMember
) {
  return createContainer(
    constants.colors.pumping,
    createSection({
      content: brBuilder(
        "## Bem-vindo ao seu canal de voz temporário!",
        `Olá <@${member.id}>! Controle seu canal usando os menus abaixo.`,
        "",
        "• Use os dropdowns para gerenciar as configurações e permissões",
        "• Alternativamente, você pode usar `/tempvoice owner` para gerenciar via comandos",
        "",
        "O canal será deletado automaticamente quando ficar vazio."
      ),
      thumbnail: member.displayAvatarURL({ size: 256 }),
    }),
    Separator.Default,
    brBuilder("### ⚙️ Configurações do canal"),
    createRow(
      new StringSelectMenuBuilder()
        .setCustomId(`tempvoice/channel/settings:${channel.id}`)
        .setPlaceholder("⚙️ Configurações do Canal")
        .setOptions(
          new StringSelectMenuOptionBuilder({
            label: "Renomear Canal",
            description: "Alterar o nome do seu canal",
            value: "rename",
            emoji: "✏️",
          }),
          new StringSelectMenuOptionBuilder({
            label: "Limite de Usuários",
            description: "Definir limite de membros no canal",
            value: "limit",
            emoji: "👥",
          }),
          new StringSelectMenuOptionBuilder({
            label: "Status do Canal",
            description: "Alterar o status do canal de voz",
            value: "status",
            emoji: "📢",
          })
        )
    ),
    Separator.Default,
    brBuilder("### 🔒 Gerenciamento de Permissões"),
    createRow(
      new StringSelectMenuBuilder()
        .setCustomId(`tempvoice/channel/permissions:${channel.id}`)
        .setPlaceholder("🔒 Permissões do Canal")
        .setOptions(
          new StringSelectMenuOptionBuilder({
            label: "Trancar Canal",
            description: "Bloquear a entrada de novos membros",
            value: "lock",
            emoji: "🔒",
          }),
          new StringSelectMenuOptionBuilder({
            label: "Destrancar Canal",
            description: "Permitir a entrada de novos membros",
            value: "unlock",
            emoji: "🔓",
          }),
          new StringSelectMenuOptionBuilder({
            label: "Permitir Usuário",
            description: "Dar permissão para um usuário acessar",
            value: "allow",
            emoji: "✅",
          }),
          new StringSelectMenuOptionBuilder({
            label: "Convidar Usuário",
            description: "Convidar um usuário para o canal",
            value: "invite",
            emoji: "📩",
          })
        )
    )
  )
}
