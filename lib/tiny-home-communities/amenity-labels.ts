import type { AmenityFlagKey, AmenityFlags } from "./schema"
import { AMENITY_FLAG_KEYS } from "./schema"

export const AMENITY_FLAG_LABELS: Record<AmenityFlagKey, string> = {
  lakefront: "Lakefront",
  waterfront: "Waterfront / marina",
  petFriendly: "Pet-friendly",
  gated: "Gated",
  ownershipPossible: "Ownership path",
  communityGarden: "Community garden",
  pool: "Pool",
  clubhouse: "Clubhouse",
  pickleballOrSports: "Pickleball / sports",
  dockOrMarina: "Dock / marina access",
  fitnessCenter: "Fitness",
  rvHookups: "RV-style hookups",
  coworkSpace: "Cowork / shared workspace",
  laundry: "Laundry",
}

export function amenityLabelsForLodging(flags: AmenityFlags): string[] {
  return AMENITY_FLAG_KEYS.filter((key) => flags[key]).map((key) => AMENITY_FLAG_LABELS[key])
}

export function activeAmenityEntries(flags: AmenityFlags): { key: AmenityFlagKey; label: string }[] {
  return AMENITY_FLAG_KEYS.filter((key) => flags[key]).map((key) => ({
    key,
    label: AMENITY_FLAG_LABELS[key],
  }))
}
