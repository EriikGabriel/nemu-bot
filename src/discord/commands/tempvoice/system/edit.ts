import {
  createCategorySelect,
  createDeleteDelayInput,
  createNameInput,
} from "#commands/tempvoice/system/helpers.js"
import { prisma } from "#database"
import { createModalFields } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"
import { createSystemNotFoundContainer } from "#components"

group.subcommand({
  name: "edit",
  description: "Editar um sistema de canais temporários",
  options: [
    {
      name: "name",
      description: "Nome do sistema de canais temporários a ser editado.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const systemName = options.getString("name", true)
    const system = await prisma.tempVoiceSystem.findUnique({
      where: {
        guildId: guild.id,
        name: systemName,
      },
    })

    if (!system) {
      const container = createSystemNotFoundContainer(systemName)

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })
      return
    }

    await interaction.showModal({
      title: "Editar canal de voz temporário",
      customId: `tempvoice/system/edit/${system.id}`,
      components: createModalFields(
        createNameInput(system.name),
        createCategorySelect(guild, system.categoryId),
        createDeleteDelayInput(system.deleteDelay?.toString())
      ),
    })

    return
  },
})
