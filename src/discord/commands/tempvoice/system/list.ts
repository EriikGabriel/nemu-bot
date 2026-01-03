import { prisma } from "#database"
import { brBuilder, createEmbed } from "@magicyan/discord"
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
      await interaction.reply({
        content: "❌ Nenhum sistema de canais temporários encontrado.",
        ephemeral: true,
      })
      return
    }

    const embed = createEmbed({
      title: "📋 Sistemas de Canais Temporários",
      description: brBuilder(
        ...systems.map((system, index) => {
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
      ),
      color: constants.colors.pumping,
      timestamp: new Date(),
      footer: {
        text: `Total: ${systems.length} sistema${
          systems.length !== 1 ? "s" : ""
        }`,
      },
    })

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    })

    return
  },
})
