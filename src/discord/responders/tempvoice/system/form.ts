import { createResponder } from "#base"
import { prisma } from "#database"
import {
  isValidNumber,
  parseDelay,
} from "@commands/tempvoice/system/helpers.js"
import { ResponderType } from "@constatic/base"
import { SelectInputModalData } from "@types"
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

  await interaction.reply({
    content: `✅ Sistema criado com sucesso!\nNome: ${
      data.name
    }\nCategoria: <#${data.category}>\nDelay: ${
      data.delayValue || "Padrão (0 segundos)"
    }`,
    flags: ["Ephemeral"],
  })
}

const handleEdit: ActionHandler = async (interaction, data, systemId) => {
  if (!systemId) {
    await interaction.reply({
      content: "❌ ID do sistema não encontrado.",
      flags: ["Ephemeral"],
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

  await interaction.reply({
    content: `✅ Sistema atualizado com sucesso!\nNome: ${
      data.name
    }\nCategoria: <#${data.category}>\nDelay: ${
      data.delayValue || "Padrão (0 segundos)"
    }`,
    flags: ["Ephemeral"],
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
      await interaction.reply({
        content: "❌ O campo de delay deve ser um número válido.",
        flags: ["Ephemeral"],
      })
      return
    }

    const handler = actionHandlers[action]

    if (!handler) {
      await interaction.reply({
        content: `❌ Ação \`${action}\` não reconhecida.`,
        flags: ["Ephemeral"],
      })
      return
    }

    await handler(interaction, formData, systemId)
  },
})
