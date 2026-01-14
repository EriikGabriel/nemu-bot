import {
  createJoinChannelAddedContainer,
  createSystemNotFoundContainer,
  createTemplateNotFoundContainer,
} from "#components"
import { prisma } from "#database"
import { brBuilder, createContainer, createSection } from "@magicyan/discord"
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
      const container = createSystemNotFoundContainer(systemName)

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })

      return
    }

    if (system.templates.length === 0) {
      const container = createTemplateNotFoundContainer(
        templateType,
        systemName
      )

      await interaction.reply({
        flags: ["IsComponentsV2", "Ephemeral"],
        components: [container],
      })

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
      // Se já está no mesmo sistema, apenas atualizar o tipo
      if (alreadyLinked.systemId === system.id) {
        if (alreadyLinked.templateType === templateType) {
          const container = createContainer(
            "#f39c12",
            createSection({
              content: brBuilder(
                "## ⚠️ Canal Já Configurado",
                `O canal ${joinChannel} já está configurado exatamente assim.`,
                "",
                `**Sistema:** ${systemName}`,
                `**Template:** ${templateType}`,
                "",
                "Não é necessário fazer nenhuma alteração."
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

        // Atualizar o tipo
        await prisma.tempVoiceJoinChannel.update({
          where: { channelId: joinChannel.id },
          data: { templateType },
        })

        const container = createContainer(
          "#2ecc71",
          createSection({
            content: brBuilder(
              "## ✅ Canal Atualizado",
              `O canal ${joinChannel} foi atualizado com sucesso!`,
              "",
              `**Sistema:** ${systemName}`,
              `**Template:** ${alreadyLinked.templateType} → ${templateType}`,
              "",
              "O template será aplicado quando alguém entrar no canal."
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

      // Está vinculado a outro sistema
      const container = createContainer(
        "#e74c3c",
        createSection({
          content: brBuilder(
            "## ❌ Canal Já Vinculado",
            `O canal ${joinChannel} já está vinculado ao sistema \`${alreadyLinked.system.name}\`.`,
            "",
            "Use `/tempvoice join remove` para removê-lo primeiro."
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

    await prisma.tempVoiceJoinChannel.create({
      data: {
        systemId: system.id,
        channelId: joinChannel.id,
        templateType,
      },
    })

    const container = createJoinChannelAddedContainer(
      joinChannel.toString(),
      systemName,
      templateType
    )

    await interaction.reply({
      flags: ["IsComponentsV2", "Ephemeral"],
      components: [container],
    })
  },
})
