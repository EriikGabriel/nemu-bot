import { bootstrap } from "#base"
import { startBirthdayAnnounceJob } from "./discord/jobs/birthdayAnnounce.js"

import { env } from "./env.js"

await bootstrap({
  meta: import.meta,
  beforeLoad: async (client) => {
    if (env.BIRTHDAY_CHANNEL_ID) {
      startBirthdayAnnounceJob(client)
    }
  },
})
