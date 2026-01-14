import { months } from "#types"

/**
 * Formata uma data de aniversário
 */
export function formatBirthdayDate(
  day: number,
  month: number,
  year?: number | null
): string {
  return `${day} de ${months[month]}${year ? ` de ${year}` : ""}`
}

/**
 * Agrupa aniversários por mês
 */
export function groupBirthdaysByMonth(
  birthdays: Array<{
    userId: string
    day: number
    month: number
    year: number | null
  }>
): Record<number, Array<{ userId: string; day: number; year: number | null }>> {
  const grouped: Record<
    number,
    Array<{ userId: string; day: number; year: number | null }>
  > = {}

  for (const b of birthdays) {
    if (!grouped[b.month]) grouped[b.month] = []
    grouped[b.month].push({ userId: b.userId, day: b.day, year: b.year })
  }

  return grouped
}

/**
 * Cria as opções de mês para o select
 */
export function createMonthChoices() {
  return Object.entries(months).map(([index, month]) => ({
    name: `${index} | ${month}`,
    value: Number(index),
  }))
}
