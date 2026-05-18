import { floridaRawCommunities } from "@/data/tiny-home-communities/florida"
import { nationalCommunities } from "@/data/tiny-home-communities/national"
import { texasCommunities } from "@/data/tiny-home-communities/texas"
import { expansionCommunities } from "@/data/tiny-home-communities/expansion-communities"
import { DIRECTORY_STATES } from "@/lib/tiny-home-communities/states-registry"
import type { TinyHomeCommunity } from "./schema"

let _florida: TinyHomeCommunity[] | null = null
let _national: TinyHomeCommunity[] | null = null
let _all: TinyHomeCommunity[] | null = null

function floridaParsed(): TinyHomeCommunity[] {
  if (!_florida) _florida = floridaRawCommunities()
  return _florida
}

function nationalParsed(): TinyHomeCommunity[] {
  if (!_national) _national = nationalCommunities()
  return _national
}

function allCommunities(): TinyHomeCommunity[] {
  if (!_all)
    _all = [...floridaParsed(), ...nationalParsed(), ...texasCommunities(), ...expansionCommunities()]
  return _all
}

export function getFloridaCommunities(): TinyHomeCommunity[] {
  return floridaParsed()
}

/** All curated listings across launched states. */
export function getAllCommunities(): TinyHomeCommunity[] {
  return allCommunities()
}

export function getCommunitiesByStateSlug(stateSlug: string): TinyHomeCommunity[] {
  return allCommunities().filter((c) => c.stateSlug === stateSlug)
}

export function getCommunityByStateAndSlug(stateSlug: string, slug: string): TinyHomeCommunity | undefined {
  return allCommunities().find((c) => c.stateSlug === stateSlug && c.slug === slug)
}

export function getFloridaCommunityBySlug(slug: string): TinyHomeCommunity | undefined {
  return getCommunityByStateAndSlug("florida", slug)
}

export function getAllCommunitySlugParams(): { state: string; slug: string }[] {
  return allCommunities().map((c) => ({ state: c.stateSlug, slug: c.slug }))
}

/** Static params for `app/tiny-home-communities/[state]`. */
export function getDirectoryStateParams(): { state: string }[] {
  const active = new Set(allCommunities().map((c) => c.stateSlug))
  return DIRECTORY_STATES.filter((s) => active.has(s.slug)).map((s) => ({ state: s.slug }))
}

