/**
 * Curated affiliate / partner URLs. Replace empty strings after programs approve.
 * Do not commit raw affiliate tags in env without disclosure pages live.
 *
 * Source plan: docs/affiliate-product-master-list.md
 */

export type AffiliateProgramId = "amazon" | "partner"

export interface AffiliateLinkRecord {
  id: string
  label: string
  program: AffiliateProgramId
  /** Full href including tracking params when live */
  href: string
  category: string
  notes?: string
}

/** Populate as you approve programs. Empty array until links are vetted. */
export const AFFILIATE_LINKS: AffiliateLinkRecord[] = []

/**
 * Example (replace with real tagged URLs):
 * {
 *   id: "shade-cloth-starter",
 *   label: "Shade cloth (example)",
 *   program: "amazon",
 *   href: "https://www.amazon.com/dp/XXXXXXXXXX?tag=YOURASSOCIATEID",
 *   category: "garden",
 *   notes: "40% shade; verify size",
 * },
 */

export function getAffiliateLinksByCategory(category: string): AffiliateLinkRecord[] {
  return AFFILIATE_LINKS.filter((r) => r.category === category)
}
