export function getClientLevelBySpend(
  totalSpend: number
): "New Client" | "Regular Client" | "VIP Client" {
  if (totalSpend >= 1000) return "VIP Client";
  if (totalSpend >= 100) return "Regular Client";
  return "New Client";
}
