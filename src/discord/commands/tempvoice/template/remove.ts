import { prisma } from "#database"
import { createEmbed } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "remove",
  description: "Remove um template de canal temporário",
  options: [
    {
      name: "system",
      description: "Nome do sistema de canais temporários.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "type",
      description: "Tipo do template a ser removido.",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        { name: "GAMES 🎮", value: "GAMES" },
        { name: "QUARTINHOS 🏠", value: "QUARTINHOS" },
      ],
    },
  ],

  async run(interaction) {
    const { options, guild } = interaction

    const systemName = options.getString("system", true)
    const templateType = options.getString("type", true) as
      | "GAMES"
      | "QUARTINHOS"

    const system = await prisma.tempVoiceSystem.findUnique({
      where: {
        guildId: guild.id,
        name: systemName,
      },
    })

    if (!system) {
      const embed = createEmbed({
        description: [
          `❌ Sistema de canais temporários \`${systemName}\` não encontrado.`,
          "Para ver a lista de sistemas, use o comando `/tempvoice system list`.",
        ],
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })

      return
    }

    const template = await prisma.tempVoiceTemplate.findUnique({
      where: {
        systemId_type: {
          systemId: system.id,
          type: templateType,
        },
      },
    })

    if (!template) {
      const embed = createEmbed({
        description: `❌ Template do tipo \`${templateType}\` não encontrado no sistema \`${systemName}\`.`,
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })

      return
    }

    await prisma.tempVoiceTemplate.delete({
      where: {
        systemId_type: {
          systemId: system.id,
          type: templateType,
        },
      },
    })

    const embed = createEmbed({
      description: `✅ Template \`${templateType}\` removido do sistema \`${systemName}\` com sucesso!`,
      color: constants.colors.success,
    })

    await interaction.reply({ embeds: [embed], ephemeral: true })

    return
  },
})
