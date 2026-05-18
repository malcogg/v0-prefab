import type { AmenityFlags } from "@/lib/tiny-home-communities/schema"

export const emptyFlags: AmenityFlags = {
  lakefront: false,
  waterfront: false,
  petFriendly: false,
  gated: false,
  ownershipPossible: false,
  communityGarden: false,
  pool: false,
  clubhouse: false,
  pickleballOrSports: false,
  dockOrMarina: false,
  fitnessCenter: false,
  rvHookups: false,
  coworkSpace: false,
  laundry: false,
}

export function flags(p: Partial<AmenityFlags>): AmenityFlags {
  return { ...emptyFlags, ...p }
}

export const ph = (seed: string, alt: string) => ({
  url: `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1400&q=75`,
  alt,
})
