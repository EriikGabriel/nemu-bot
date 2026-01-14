import {
  createCategorySelect,
  createDeleteDelayInput,
  createNameInput,
} from "#commands/tempvoice/system/helpers.js"
import { createModalFields } from "@magicyan/discord"
import group from "./group.js"

group.subcommand({
  name: "create",
  description: "Criar um novo sistema de canais temporários",

  async run(interaction) {
    const { guild } = interaction

    await interaction.showModal({
      title: "Criar canal de voz temporário",
      customId: "tempvoice/system/create/_",
      components: createModalFields(
        createNameInput(),
        createCategorySelect(guild),
        createDeleteDelayInput()
      ),
    })

    return
  },
})
