import { prisma } from "#database"
import {
  createCategorySelect,
  createDeleteDelayInput,
  createNameInput,
} from "#commands/tempvoice/system/helpers.js"
import { createModalFields } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

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
      await interaction.reply({
        content: `❌ | Sistema de canais temporários \`${systemName}\` não encontrado.`,
        ephemeral: true,
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
