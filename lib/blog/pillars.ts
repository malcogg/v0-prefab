import type { BlogPillar } from "./cta-types"

export type BlogPillarMeta = {
  id: BlogPillar
  label: string
  shortLabel: string
  description: string
}

export const BLOG_PILLARS: BlogPillarMeta[] = [
  {
    id: "legal",
    label: "Legal & Permitting",
    shortLabel: "Legal",
    description: "Florida ADU rules, zoning, special exceptions, and the step-by-step path to a permitted backyard home.",
  },
  {
    id: "investment",
    label: "Investment & ROI",
    shortLabel: "Investment",
    description: "Rental income, budget worksheets, appraisals, and equity mechanics for backyard housing in Florida.",
  },
  {
    id: "regenerative",
    label: "Regenerative Living",
    shortLabel: "EarthNest",
    description: "Closed-loop food forests, rainwater, efficiency, growing zones, and EarthNest-style homestead upgrades.",
  },
  {
    id: "communities",
    label: "Tiny Home Communities",
    shortLabel: "Communities",
    description: "Community-focused tiny living, directory spotlights, and long-term-lease villages across Florida.",
  },
]

export function getPillarMeta(pillar: BlogPillar): BlogPillarMeta {
  return BLOG_PILLARS.find((p) => p.id === pillar) ?? BLOG_PILLARS[0]
}

export function parsePillarFromQuery(query: string): BlogPillar | undefined {
  const q = query.trim().toLowerCase()
  if (!q) return undefined
  const byId = BLOG_PILLARS.find((p) => p.id === q)
  if (byId) return byId.id
  const byLabel = BLOG_PILLARS.find(
    (p) =>
      p.label.toLowerCase().includes(q) ||
      p.shortLabel.toLowerCase() === q ||
      p.description.toLowerCase().includes(q),
  )
  return byLabel?.id
}
