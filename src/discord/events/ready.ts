import { createEvent } from "#base"
import { prisma } from "#database"
import { Client, Events } from "discord.js"

export default createEvent({
  name: "ready",
  event: Events.ClientReady,
  once: true,

  async run(client: Client<true>) {
    // Sincroniza as configurações de todas as guildas quando o bot inicia
    const guilds = client.guilds.cache

    console.log(`🔄 Sincronizando configurações de ${guilds.size} guildas...`)

    for (const [guildId, _] of guilds) {
      await prisma.guildConfig.upsert({
        where: { guildId },
        create: { guildId },
        update: {},
      })
    }

    console.log(`✓ Configurações sincronizadas para todas as guildas`)
  },
})
