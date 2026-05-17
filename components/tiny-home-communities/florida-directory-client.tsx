"use client"

import { useMemo, useState } from "react"
import type { MacroRegion, TenancyMode, TinyHomeCommunity } from "@/lib/tiny-home-communities/schema"
import { AMENITY_FLAG_KEYS } from "@/lib/tiny-home-communities/schema"
import { CommunityCard } from "./community-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AMENITY_FLAG_LABELS } from "@/lib/tiny-home-communities/amenity-labels"
import { MACRO_REGION_ORDER } from "@/lib/tiny-home-communities/display"

type Props = { communities: TinyHomeCommunity[] }

function normalize(q: string) {
  return q.trim().toLowerCase()
}

function toggleSet<T extends string>(set: Set<T>, id: T): Set<T> {
  const n = new Set(set)
  if (n.has(id)) n.delete(id)
  else n.add(id)
  return n
}

export function FloridaDirectoryClient({ communities }: Props) {
  const [query, setQuery] = useState("")
  const [selectedMacros, setSelectedMacros] = useState<Set<MacroRegion>>(new Set())
  const [selectedAmenities, setSelectedAmenities] = useState<Set<AmenityFlagKey>>(new Set())
  const [tenancy, setTenancy] = useState<string>("all")

  const macrosInDataset = useMemo(() => new Set(communities.map((c) => c.macroRegion)), [communities])
  const macrosOrdered = useMemo(() => {
    const labels = [...macrosInDataset]
    const priority = MACRO_REGION_ORDER.filter((m) => labels.includes(m))
    const rest = labels.filter((m) => !MACRO_REGION_ORDER.includes(m)).sort((a, b) => a.localeCompare(b))
    return [...priority, ...rest]
  }, [macrosInDataset])

  const tenancyOptions = [
    { value: "lease_land_own_home", label: "Own home · lease pad" },
    { value: "rent_home_or_lot", label: "Rentals / pad rent" },
    { value: "purchase_home_on_site", label: "Buy on-site home" },
    { value: "purchase_or_rent_mix", label: "Mixed purchase · rent" },
    { value: "unspecified", label: "Varies / unspecified" },
  ] as const

  const filtered = useMemo(() => {
    const nq = normalize(query)
    return communities.filter((c) => {
      if (selectedMacros.size > 0 && !selectedMacros.has(c.macroRegion)) return false
      if (tenancy !== "all" && !(c.tenancyModes as readonly TenancyMode[]).includes(tenancy as TenancyMode)) return false
      if (selectedAmenities.size > 0) {
        for (const flag of selectedAmenities) {
          if (!c.amenityFlags[flag]) return false
        }
      }
      if (!nq) return true
      const haystack = [
        c.name,
        c.city,
        c.county,
        c.macroRegion,
        c.regionLabel,
        c.description,
        ...c.tags,
      ]
        .join(" ")
        .toLowerCase()
      return haystack.includes(nq)
    })
  }, [communities, query, selectedMacros, tenancy, selectedAmenities])

  const hasActiveFilters =
    query.trim().length > 0 || selectedMacros.size > 0 || selectedAmenities.size > 0 || tenancy !== "all"

  function clearFilters() {
    setQuery("")
    setSelectedMacros(new Set())
    setSelectedAmenities(new Set())
    setTenancy("all")
  }

  return (
    <div className="space-y-10">
      <div className="rounded-xl border border-border bg-secondary/40 p-5 md:p-6 space-y-6">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-2 xl:col-span-1">
            <Label htmlFor="thc-search" className="text-xs uppercase tracking-wide text-muted-foreground">
              Search
            </Label>
            <Input
              id="thc-search"
              placeholder="Ocean, Sarasota, Cocoa…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="thc-tenancy" className="text-xs uppercase tracking-wide text-muted-foreground">
              Ownership style
            </Label>
            <select
              id="thc-tenancy"
              value={tenancy}
              onChange={(e) => setTenancy(e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="all">Any model</option>
              {tenancyOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="xl:col-span-2 flex items-end lg:justify-end">
            <button
              type="button"
              onClick={clearFilters}
              disabled={!hasActiveFilters}
              className="text-xs font-semibold text-primary underline-offset-2 hover:underline disabled:opacity-40 disabled:no-underline"
            >
              Clear all filters
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Macro region (multi-select)</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {macrosOrdered.map((macro) => {
              const checked = selectedMacros.has(macro)
              return (
                <label key={macro} className="flex items-center gap-2 text-sm text-foreground cursor-pointer select-none">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => setSelectedMacros(toggleSet(selectedMacros, macro))}
                  />
                  {macro}
                </label>
              )
            })}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Must have amenities (all selected)</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
            {AMENITY_FLAG_KEYS.map((key) => {
              const checked = selectedAmenities.has(key)
              return (
                <label key={key} className="flex items-center gap-2 text-sm text-foreground cursor-pointer select-none">
                  <Checkbox checked={checked} onCheckedChange={() => setSelectedAmenities(toggleSet(selectedAmenities, key))} />
                  {AMENITY_FLAG_LABELS[key]}
                </label>
              )
            })}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> curated communities
          {hasActiveFilters ? " matching your filters." : "."}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-background p-10 text-center text-muted-foreground">
          No listings match yet—uncheck amenities, widen macro regions, or reset ownership filters.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{filtered.map((c) => <CommunityCard key={c.slug} community={c} />)}</div>
      )}
    </div>
  )
}
