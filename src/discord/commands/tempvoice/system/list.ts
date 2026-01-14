import {
  createNoSystemsFoundContainer,
  createSystemListContainer,
} from "#components"
import { prisma } from "#database"
import { brBuilder } from "@magicyan/discord"
import group from "./group.js"

group.subcommand({
  name: "list",
  description: "Listar todos os sistemas de canais temporários",

  async run(interaction) {
    const { guild } = interaction

    const systems = await prisma.tempVoiceSystem.findMany({
      where: {
        guildId: guild.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    })

    if (systems.length === 0) {
      const container = createNoSystemsFoundContainer()

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })
      return
    }

    const systemsInfo = systems
      .map((system, index) => {
        const status = system.enabled ? "✅ Ativo" : "❌ Inativo"
        const category = guild.channels.cache.get(system.categoryId)
        const categoryName = category?.name || "Categoria não encontrada"
        const separator =
          index < systems.length - 1 ? "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" : ""

        return brBuilder(
          `**${system.name}**:  ${status}`,
          `└📁 Categoria: ${categoryName}`,
          `└⏱️ Delay: ${system.deleteDelay}s`,
          separator
        )
      })
      .join("\n")

    const embed = createSystemListContainer(systemsInfo, systems.length)

    await interaction.reply({
      embeds: [embed],
      flags: ["Ephemeral"],
    })

    return
  },
})
