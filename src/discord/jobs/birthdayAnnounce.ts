import { prisma } from "#database"
import { Client, TextChannel } from "discord.js"
import cron from "node-cron"

export function startBirthdayAnnounceJob(client: Client) {
  cron.schedule("00 23 * * *", async () => {
    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth() + 1

    const birthdays = await prisma.birthday.findMany({
      where: { day, month },
    })

    if (!birthdays.length) return

    const { birthdayChannelId: channelId } =
      (await prisma.guildConfig.findFirst({
        where: { guildId: client.guilds.cache.first()?.id || "" },
        select: { birthdayChannelId: true },
      })) || {}

    const channel = client.channels.cache.get(channelId ?? "") as TextChannel
    if (!channel) return

    const mentions = birthdays.map((b) => `<@${b.userId}>`).join(", ")
    await channel.send(
      `🎉 Feliz aniversário ${mentions}! Parabéns pelo seu dia! 🎂`
    )
  })
}
