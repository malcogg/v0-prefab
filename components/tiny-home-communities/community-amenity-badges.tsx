"use client"

import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Dumbbell,
  Flower2,
  Home,
  Laptop,
  PawPrint,
  PlugZap,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Trophy,
  WashingMachine,
  Waves,
} from "lucide-react"
import type { AmenityFlagKey, AmenityFlags } from "@/lib/tiny-home-communities/schema"
import { activeAmenityEntries } from "@/lib/tiny-home-communities/amenity-labels"
import { cn } from "@/lib/utils"

const AMENITY_ICONS: Record<AmenityFlagKey, LucideIcon> = {
  lakefront: Waves,
  waterfront: Waves,
  petFriendly: PawPrint,
  gated: ShieldCheck,
  ownershipPossible: Home,
  communityGarden: Flower2,
  pool: Sparkles,
  clubhouse: Building2,
  pickleballOrSports: Trophy,
  dockOrMarina: Sailboat,
  fitnessCenter: Dumbbell,
  rvHookups: PlugZap,
  coworkSpace: Laptop,
  laundry: WashingMachine,
}

type Variant = "compact" | "full"

export function CommunityAmenityBadges({
  flags,
  className,
  variant = "compact",
  limit = 8,
}: {
  flags: AmenityFlags
  className?: string
  variant?: Variant
  limit?: number
}) {
  const entries = activeAmenityEntries(flags)
  const visible = variant === "compact" ? entries.slice(0, limit) : entries
  const rest = variant === "compact" ? entries.length - visible.length : 0

  if (!visible.length) {
    return <p className="text-xs text-muted-foreground">Amenity flags pending enrichment.</p>
  }

  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label="Key amenities">
      {visible.map(({ key, label }) => {
        const Icon = AMENITY_ICONS[key]
        return (
          <li
            key={key}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground"
          >
            <Icon className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden />
            <span>{label}</span>
          </li>
        )
      })}
      {rest > 0 ? (
        <li className="inline-flex items-center px-2.5 py-1 text-[11px] text-muted-foreground">+{rest} more</li>
      ) : null}
    </ul>
  )
}
