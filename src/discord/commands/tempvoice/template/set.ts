import { prisma } from "#database"
import {
  createBitrateInput,
  createNameTemplateInput,
  createUserLimitInput,
} from "@commands/tempvoice/template/helpers.js"
import { createEmbed, createModalFields } from "@magicyan/discord"
import { ApplicationCommandOptionType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "set",
  description: "Define ou atualiza um template de canal temporário",
  options: [
    {
      name: "system",
      description: "Nome do sistema de canais temporários.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "type",
      description: "Tipo do template.",
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
    const templateType = options.getString("type", true)

    const system = await prisma.tempVoiceSystem.findUnique({
      where: {
        guildId: guild.id,
        name: systemName,
      },
      include: {
        templates: {
          where: {
            type: templateType as "GAMES" | "QUARTINHOS",
          },
        },
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

    const existingTemplate = system.templates[0]

    await interaction.showModal({
      title: `Definir template ${templateType}`,
      customId: `tempvoice/template/set/${system.id}/${templateType}`,
      components: createModalFields(
        createNameTemplateInput(
          existingTemplate?.nameTemplate,
          templateType === "GAMES"
        ),
        createUserLimitInput(existingTemplate?.userLimit?.toString()),
        createBitrateInput(existingTemplate?.bitrate?.toString())
      ),
    })

    return
  },
})
