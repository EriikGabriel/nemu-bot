import { createResponder } from "#base"
import { parseOptionalNumber } from "#commands/tempvoice/template/helpers.js"
import { prisma } from "#database"
import { ResponderType } from "@constatic/base"
import { createEmbed } from "@magicyan/discord"
import { ModalSubmitInteraction } from "discord.js"

createResponder({
  customId: "tempvoice/template/set/:systemId/:type",
  types: [ResponderType.Modal],

  async run(interaction: ModalSubmitInteraction, { systemId, type }) {
    const fields = interaction.fields

    const templateType = type as "GAMES" | "QUARTINHOS"
    let nameTemplate = fields.getTextInputValue("name_template").trim()

    // Se for GAMES e não tiver template, usar padrão que mostra o jogo
    if (templateType === "GAMES" && !nameTemplate) {
      nameTemplate = "🎮 {user} - {game}"
    }

    const userLimitValue = fields.getTextInputValue("user_limit")
    const bitrateValue = fields.getTextInputValue("bitrate")

    const userLimit = parseOptionalNumber(userLimitValue)
    const bitrate = parseOptionalNumber(bitrateValue)

    // Validações
    if (userLimit !== undefined && (userLimit < 0 || userLimit > 99)) {
      const embed = createEmbed({
        description: "❌ O limite de usuários deve estar entre 0 e 99.",
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })
      return
    }

    if (bitrate !== undefined && (bitrate < 8000 || bitrate > 384000)) {
      const embed = createEmbed({
        description: "❌ O bitrate deve estar entre 8000 e 384000.",
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })
      return
    }

    try {
      const template = await prisma.tempVoiceTemplate.upsert({
        where: {
          systemId_type: {
            systemId,
            type: templateType,
          },
        },
        update: {
          nameTemplate,
          userLimit,
          bitrate,
        },
        create: {
          systemId,
          type: templateType,
          nameTemplate,
          userLimit,
          bitrate,
        },
        include: {
          system: true,
        },
      })

      const icon = templateType === "GAMES" ? "🎮" : "🏠"
      const userLimitText = userLimit ? `${userLimit} usuários` : "Sem limite"
      const bitrateText = bitrate ? `${bitrate / 1000}kbps` : "Padrão"
      const nameInfo =
        templateType === "GAMES" && nameTemplate === "🎮 {user} - {game}"
          ? "${nameTemplate} (usará o jogo atual)"
          : nameTemplate

      const embed = createEmbed({
        title: "✅ Template configurado com sucesso!",
        description: [
          `**Sistema:** ${template.system.name}`,
          `${icon} **Tipo:** ${templateType}`,
          `📝 **Nome:** ${nameInfo}`,
          `👥 **Limite:** ${userLimitText}`,
          `🎵 **Bitrate:** ${bitrateText}`,
        ],
        color: constants.colors.success,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })
    } catch (error) {
      console.error("[TempVoice Template] Erro ao salvar template:", error)

      const embed = createEmbed({
        description: "❌ Erro ao salvar o template. Tente novamente.",
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })
    }
  },
})
