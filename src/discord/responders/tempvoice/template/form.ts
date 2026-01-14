import { createResponder } from "#base"
import { parseOptionalNumber } from "#commands/tempvoice/template/helpers.js"
import { createTemplateSetContainer } from "#components"
import { prisma } from "#database"
import { ResponderType } from "@constatic/base"
import { brBuilder, createContainer, createSection } from "@magicyan/discord"
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
      const container = createContainer(
        "#e74c3c",
        createSection({
          content: brBuilder(
            "## ❌ Erro de Validação",
            "O limite de usuários deve estar entre **0 e 99**.",
            "",
            "Tente novamente com um valor válido."
          ),
          thumbnail: "https://i.imgur.com/GjNu2Gv.png",
        })
      )

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })
      return
    }

    if (bitrate !== undefined && (bitrate < 8000 || bitrate > 384000)) {
      const container = createContainer(
        "#e74c3c",
        createSection({
          content: brBuilder(
            "## ❌ Erro de Validação",
            "O bitrate deve estar entre **8000 e 384000**.",
            "",
            "Tente novamente com um valor válido."
          ),
          thumbnail: "https://i.imgur.com/GjNu2Gv.png",
        })
      )

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })
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

      const container = createTemplateSetContainer(
        templateType,
        template.system.name,
        nameTemplate,
        userLimit ?? null,
        bitrate ?? null
      )

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })
    } catch (error) {
      console.error("[TempVoice Template] Erro ao salvar template:", error)

      const container = createContainer(
        "#e74c3c",
        createSection({
          content: brBuilder(
            "## ❌ Erro ao Salvar",
            "Ocorreu um erro ao salvar o template.",
            "",
            "Por favor, tente novamente."
          ),
          thumbnail: "https://i.imgur.com/GjNu2Gv.png",
        })
      )

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })
    }
  },
})
