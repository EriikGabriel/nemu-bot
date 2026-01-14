import { createResponder } from "#base"
import {
  isValidNumber,
  parseDelay,
} from "#commands/tempvoice/system/helpers.js"
import {
  createSystemCreatedContainer,
  createSystemEditedContainer,
  createSystemIdNotFoundContainer,
} from "#components"
import { prisma } from "#database"
import { SelectInputModalData } from "#types"
import { ResponderType } from "@constatic/base"
import { brBuilder, createContainer, createSection } from "@magicyan/discord"
import { ModalSubmitInteraction } from "discord.js"

type FormData = {
  name: string
  category: string
  delayValue: string
}

type ActionHandler = (
  interaction: ModalSubmitInteraction,
  data: FormData,
  systemId?: string
) => Promise<void>

const handleCreate: ActionHandler = async (interaction, data) => {
  await prisma.tempVoiceSystem.create({
    data: {
      guildId: interaction.guild!.id,
      name: data.name,
      categoryId: data.category,
      deleteDelay: parseDelay(data.delayValue),
    },
  })

  const container = createSystemCreatedContainer(
    data.name,
    `<#${data.category}>`,
    data.delayValue || "0 segundos (padrão)"
  )

  await interaction.reply({
    flags: ["IsComponentsV2", "Ephemeral"],
    components: [container],
  })
}

const handleEdit: ActionHandler = async (interaction, data, systemId) => {
  if (!systemId) {
    const container = createSystemIdNotFoundContainer()

    await interaction.reply({
      flags: ["IsComponentsV2", "Ephemeral"],
      components: [container],
    })
    return
  }

  await prisma.tempVoiceSystem.update({
    where: {
      id: systemId,
    },
    data: {
      name: data.name,
      categoryId: data.category,
      deleteDelay: parseDelay(data.delayValue),
    },
  })

  const container = createSystemEditedContainer(
    data.name,
    `<#${data.category}>`,
    data.delayValue || "0 segundos (padrão)"
  )

  await interaction.reply({
    flags: ["IsComponentsV2", "Ephemeral"],
    components: [container],
  })
}

const actionHandlers: Record<string, ActionHandler> = {
  create: handleCreate,
  edit: handleEdit,
}

createResponder({
  customId: "tempvoice/system/:action/:systemId",
  types: [ResponderType.Modal],

  async run(interaction: ModalSubmitInteraction, { action, systemId }) {
    const fields = interaction.fields

    const formData: FormData = {
      name: fields.getTextInputValue("name"),
      category: (fields.getField("category") as SelectInputModalData).values[0],
      delayValue: fields.getTextInputValue("delete_delay"),
    }

    if (formData.delayValue && !isValidNumber(formData.delayValue)) {
      const container = createContainer(
        "#e74c3c",
        createSection({
          content: brBuilder(
            "## ❌ Erro de Validação",
            "O campo de delay deve ser um número válido.",
            "",
            "Exemplo: `5` para 5 segundos"
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

    const handler = actionHandlers[action]

    if (!handler) {
      const container = createContainer(
        "#e74c3c",
        createSection({
          content: brBuilder(
            "## ❌ Erro Interno",
            `Ação \`${action}\` não reconhecida.`,
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
      return
    }

    await handler(interaction, formData, systemId)
  },
})
