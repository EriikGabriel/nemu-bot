import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./prisma/client.js"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL não definida!")
}

export const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
})
