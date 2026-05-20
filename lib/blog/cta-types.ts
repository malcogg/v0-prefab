export type BlogCtaVariant =
  | "starter-kit"
  | "qualify"
  | "communities"
  | "rainwater-guide"
  | "calculator"
  | "zones-tool"

export type BlogLeadMagnet = "starter-kit" | "rainwater-guide"

export type BlogPillar = "legal" | "regenerative" | "investment" | "communities" | "lifestyle"

export const BLOG_CTA_MARKER = "<!-- blog-cta -->"

export function parseCtaVariant(value: string | undefined): BlogCtaVariant | undefined {
  const allowed: BlogCtaVariant[] = [
    "starter-kit",
    "qualify",
    "communities",
    "rainwater-guide",
    "calculator",
    "zones-tool",
  ]
  return allowed.includes(value as BlogCtaVariant) ? (value as BlogCtaVariant) : undefined
}

export function parseLeadMagnet(value: string | undefined): BlogLeadMagnet | undefined {
  return value === "starter-kit" || value === "rainwater-guide" ? value : undefined
}

export function parsePillar(value: string | undefined): BlogPillar | undefined {
  const allowed: BlogPillar[] = ["legal", "regenerative", "investment", "communities", "lifestyle"]
  return allowed.includes(value as BlogPillar) ? (value as BlogPillar) : undefined
}
