import { floridaRawCommunities } from "@/data/tiny-home-communities/florida"
import type { TinyHomeCommunity } from "./schema"

let _florida: TinyHomeCommunity[] | null = null

function floridaParsed(): TinyHomeCommunity[] {
  if (!_florida) _florida = floridaRawCommunities()
  return _florida
}

export function getFloridaCommunities(): TinyHomeCommunity[] {
  return floridaParsed()
}

export function getFloridaCommunityBySlug(slug: string): TinyHomeCommunity | undefined {
  return floridaParsed().find((c) => c.slug === slug)
}

export function getFloridaSlugParams(): { slug: string }[] {
  return floridaParsed().map((c) => ({ slug: c.slug }))
}
