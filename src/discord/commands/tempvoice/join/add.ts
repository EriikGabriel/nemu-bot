import { prisma } from "#database"
import { createEmbed } from "@magicyan/discord"
import { ApplicationCommandOptionType, ChannelType } from "discord.js"
import group from "./group.js"

group.subcommand({
  name: "add",
  description:
    "Adicionar um canal de voz como canal de entrada para canais temporários",
  options: [
    {
      name: "system",
      description:
        "Nome do sistema de canais temporários ao qual adicionar o canal de entrada.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "channel",
      description: "Canal de voz a ser adicionado como canal de entrada.",
      type: ApplicationCommandOptionType.Channel,

      required: true,
      channelTypes: [ChannelType.GuildVoice],
    },
    {
      name: "type",
      description: "Tipo de template que será usado quando entrar neste canal.",
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
    const joinChannel = options.getChannel("channel", true)
    const templateType = options.getString("type", true) as
      | "GAMES"
      | "QUARTINHOS"

    const system = await prisma.tempVoiceSystem.findUnique({
      where: {
        guildId: guild.id,
        name: systemName,
      },
      include: {
        templates: {
          where: {
            type: templateType,
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

    if (system.templates.length === 0) {
      const embed = createEmbed({
        description: [
          `❌ O sistema \`${systemName}\` não possui um template do tipo \`${templateType}\`.`,
          `Use \`/tempvoice template set\` para criar um template antes.`,
        ],
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })

      return
    }

    const alreadyLinked = await prisma.tempVoiceJoinChannel.findUnique({
      where: {
        channelId: joinChannel.id,
      },
      include: {
        system: true,
      },
    })

    if (alreadyLinked) {
      const icon = templateType === "GAMES" ? "🎮" : "🏠"
      const alreadyIcon = alreadyLinked.templateType === "GAMES" ? "🎮" : "🏠"

      // Se já está no mesmo sistema, apenas atualizar o tipo
      if (alreadyLinked.systemId === system.id) {
        if (alreadyLinked.templateType === templateType) {
          const embed = createEmbed({
            description: [
              `⚠️ O canal ${joinChannel} já está configurado exatamente assim:`,
              `${icon} **Tipo:** ${templateType}`,
              `**Sistema:** ${systemName}`,
            ],
            color: constants.colors.warning,
          })

          await interaction.reply({ embeds: [embed], ephemeral: true })
          return
        }

        // Atualizar o tipo
        await prisma.tempVoiceJoinChannel.update({
          where: { channelId: joinChannel.id },
          data: { templateType },
        })

        const embed = createEmbed({
          description: [
            `✅ Canal ${joinChannel} atualizado!`,
            `${alreadyIcon} ${alreadyLinked.templateType} → ${icon} ${templateType}`,
            `**Sistema:** ${systemName}`,
          ],
          color: constants.colors.success,
        })

        await interaction.reply({ embeds: [embed], ephemeral: true })
        return
      }

      // Está vinculado a outro sistema
      const embed = createEmbed({
        description: `❌ O canal ${joinChannel} já está vinculado ao sistema \`${alreadyLinked.system.name}\`. Remova-o primeiro.`,
        color: constants.colors.danger,
      })

      await interaction.reply({ embeds: [embed], ephemeral: true })

      return
    }

    await prisma.tempVoiceJoinChannel.create({
      data: {
        systemId: system.id,
        channelId: joinChannel.id,
        templateType,
      },
    })

    const icon = templateType === "GAMES" ? "🎮" : "🏠"
    const embed = createEmbed({
      description: [
        `✅ Canal ${joinChannel} adicionado como canal de entrada!`,
        `${icon} **Tipo:** ${templateType}`,
        `**Sistema:** ${systemName}`,
      ],
      color: constants.colors.success,
    })

    await interaction.reply({ embeds: [embed], ephemeral: true })
  },
})
