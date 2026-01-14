import { createEvent } from "#base"
import { createTempVoiceWelcomeContainer } from "#components"
import { prisma } from "#database"
import console from "console"
import {
  ActivityType,
  ChannelType,
  Guild,
  GuildMember,
  VoiceBasedChannel,
  VoiceChannel,
} from "discord.js"

/**
 * Processa quando um usuário sai de um canal de voz temporário
 */
async function handleChannelLeave(
  guild: Guild,
  leftChannel: VoiceBasedChannel
): Promise<void> {
  try {
    // Buscar se o canal que o usuário saiu é um canal temporário
    const tempChannel = await prisma.tempVoiceChannel.findUnique({
      where: {
        channelId: leftChannel.id,
      },
      include: {
        system: true,
      },
    })

    if (!tempChannel) return

    // Verificar se o canal ainda existe no Discord
    const voiceChannel = guild.channels.cache.get(leftChannel.id) as
      | VoiceChannel
      | undefined

    if (!voiceChannel) {
      // Se o canal não existe mais, remover do banco de dados
      await prisma.tempVoiceChannel.deleteMany({
        where: { id: tempChannel.id },
      })
      return
    }

    // Se o canal ainda tem membros, apenas atualizar lastActiveAt
    if (voiceChannel.members.size > 0) {
      await prisma.tempVoiceChannel.update({
        where: { id: tempChannel.id },
        data: {
          lastActiveAt: new Date(),
        },
      })
      return
    }

    // Canal está vazio, deletar após o delay
    const deleteDelay = tempChannel.system.deleteDelay * 1000

    if (deleteDelay > 0) {
      setTimeout(async () => {
        try {
          const updatedChannel = guild.channels.cache.get(voiceChannel.id) as
            | VoiceChannel
            | undefined

          if (!updatedChannel) {
            await prisma.tempVoiceChannel.deleteMany({
              where: { id: tempChannel.id },
            })
            return
          }

          if (updatedChannel.members.size === 0) {
            await Promise.all([
              updatedChannel.delete(),
              prisma.tempVoiceChannel.deleteMany({
                where: { id: tempChannel.id },
              }),
            ])
            console.log(
              `[TempVoice] Canal temporário deletado: ${voiceChannel.name} (${voiceChannel.id}) após ${tempChannel.system.deleteDelay}s de inatividade`
            )
          }
        } catch (error) {
          console.error(
            "[TempVoice] Erro ao deletar canal temporário após delay:",
            error
          )
        }
      }, deleteDelay)
    } else {
      // Deletar imediatamente se não houver delay
      await Promise.all([
        voiceChannel.delete(),
        prisma.tempVoiceChannel.deleteMany({
          where: { id: tempChannel.id },
        }),
      ])
      console.log(
        `[TempVoice] Canal temporário deletado: ${voiceChannel.name} (${voiceChannel.id})`
      )
    }
  } catch (error) {
    console.error("[TempVoice] Erro ao processar saída de canal:", error)
  }
}

/**
 * Processa quando um usuário entra em um canal de join
 */
async function handleChannelJoin(
  member: GuildMember,
  guild: Guild,
  joinedChannel: VoiceBasedChannel
): Promise<void> {
  try {
    // Buscar se o canal que o usuário entrou é um canal de join
    const joinChannel = await prisma.tempVoiceJoinChannel.findUnique({
      where: {
        channelId: joinedChannel.id,
      },
      include: {
        system: true,
      },
    })

    // Se não for um canal de join ou o sistema estiver desabilitado, retornar
    if (!joinChannel || !joinChannel.system.enabled) return

    const { system, templateType } = joinChannel

    // Buscar o template específico do tipo deste canal de join
    const template = await prisma.tempVoiceTemplate.findUnique({
      where: {
        systemId_type: {
          systemId: system.id,
          type: templateType,
        },
      },
    })

    if (!template) {
      console.warn(
        `[TempVoice] Template ${templateType} não encontrado para o sistema ${system.name}`
      )
      return
    }

    // Verificar se o usuário já possui um canal temporário ativo neste sistema
    const existingChannel = await prisma.tempVoiceChannel.findFirst({
      where: {
        systemId: system.id,
        ownerId: member.id,
      },
    })

    // Se o usuário já tem um canal temporário, mover ele para lá
    if (existingChannel) {
      const existingVoiceChannel = guild.channels.cache.get(
        existingChannel.channelId
      ) as VoiceChannel | undefined

      if (existingVoiceChannel) {
        await member.voice.setChannel(existingVoiceChannel)
        return
      }
      // Se o canal não existe mais, remover do banco de dados
      await prisma.tempVoiceChannel.deleteMany({
        where: { id: existingChannel.id },
      })
    }

    // Gerar o nome do canal
    let channelName = template.nameTemplate

    if (channelName.includes("{game}")) {
      const game = member.presence?.activities.find(
        (activity) => activity.type === ActivityType.Playing
      )
      const gameName = game?.name || "Jogando"
      channelName = channelName.replace("{game}", gameName)
    }

    channelName = channelName.replace("{user}", member.displayName)

    // Criar o canal de voz na categoria do sistema
    const newChannel = await guild.channels.create({
      name: channelName,
      type: ChannelType.GuildVoice,
      parent: system.categoryId,
      userLimit: template.userLimit ?? undefined,
      bitrate: template.bitrate ?? undefined,
    })

    const container = createTempVoiceWelcomeContainer(newChannel, member)

    // Salvar o canal no banco de dados
    await prisma.tempVoiceChannel.create({
      data: {
        channelId: newChannel.id,
        ownerId: member.id,
        systemId: system.id,
        templateType: template.type,
      },
    })

    // Mover o usuário para o novo canal
    await member.voice.setChannel(newChannel)

    try {
      await newChannel.send({
        flags: ["IsComponentsV2"],
        components: [container],
      })
    } catch (error) {
      console.error("[TempVoice] Erro ao enviar embed de boas-vindas:", error)
    }

    console.log(
      `[TempVoice] Canal temporário criado: ${newChannel.name} (${newChannel.id}) para ${member.displayName} no sistema ${system.name}`
    )
  } catch (error) {
    console.error("[TempVoice] Erro ao criar canal temporário:", error)
  }
}

export default createEvent({
  name: "voiceStateUpdate",
  event: "voiceStateUpdate",
  async run(oldState, newState) {
    const { member, guild } = newState

    if (!member || !guild) return

    const joinedChannel = newState.channel
    const leftChannel = oldState.channel

    // Processar saída de canal
    if (leftChannel && leftChannel.id !== joinedChannel?.id) {
      await handleChannelLeave(guild, leftChannel)
    }

    // Processar entrada em canal
    // Não processar se estiver saindo de um canal de join para outro canal
    // (isso acontece quando o bot move o usuário para o canal temporário)
    if (joinedChannel && joinedChannel.id !== leftChannel?.id) {
      // Verificar se o canal anterior era um canal de join
      const wasInJoinChannel = leftChannel
        ? await prisma.tempVoiceJoinChannel.findUnique({
            where: { channelId: leftChannel.id },
          })
        : null

      // Se estava em um canal de join, não processar a entrada no novo canal
      // (o usuário foi movido automaticamente pelo bot)
      if (wasInJoinChannel) return

      await handleChannelJoin(member, guild, joinedChannel)
    }
  },
})
