import { env } from "#env"
import { bootstrap } from "@constatic/base"
import { Client } from "discord.js"
import { startBirthdayAnnounceJob } from "./discord/jobs/birthdayAnnounce.js"

await bootstrap({
  meta: import.meta,
  beforeLoad: async (client: Client<boolean>) => {
    if (env.BIRTHDAY_CHANNEL_ID) {
      startBirthdayAnnounceJob(client)
    }
  },
  env,
})
