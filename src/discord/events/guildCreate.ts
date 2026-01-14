import { createEvent } from "#base"
import { prisma } from "#database"
import { Events, Guild } from "discord.js"

export default createEvent({
  name: "guildCreate",
  event: Events.GuildCreate,

  async run(guild: Guild) {
    // Cria as configurações da guilda automaticamente quando o bot entra no servidor
    await prisma.guildConfig.upsert({
      where: { guildId: guild.id },
      create: { guildId: guild.id },
      update: {},
    })

    console.log(
      `✓ Configurações criadas para a guilda: ${guild.name} (${guild.id})`
    )
  },
})
