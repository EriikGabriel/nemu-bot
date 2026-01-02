import { createCommand } from "#base"

export const command = createCommand({
  name: "birthday",
  description: "Gerencia as configurações de aniversário do servidor.",
  defaultMemberPermissions: ["Administrator"],
  dmPermission: false,
})
