"use client"

import { useMemo, useState } from "react"
import type { TenancyMode, TinyHomeCommunity } from "@/lib/tiny-home-communities/schema"
import { CommunityCard } from "./community-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = { communities: TinyHomeCommunity[] }

function normalize(q: string) {
  return q.trim().toLowerCase()
}

export function FloridaDirectoryClient({ communities }: Props) {
  const [query, setQuery] = useState("")
  const [region, setRegion] = useState<string>("all")
  const [tenancy, setTenancy] = useState<string>("all")

  const regions = useMemo(() => {
    const set = new Set(communities.map((c) => c.regionLabel))
    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [communities])

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
      if (region !== "all" && c.regionLabel !== region) return false
      if (tenancy !== "all" && !(c.tenancyModes as readonly TenancyMode[]).includes(tenancy as TenancyMode)) return false
      if (!nq) return true
      const haystack = [
        c.name,
        c.city,
        c.county,
        c.regionLabel,
        c.description,
        ...c.amenities,
        ...c.tags,
      ]
        .join(" ")
        .toLowerCase()
      return haystack.includes(nq)
    })
  }, [communities, query, region, tenancy])

  return (
    <div className="space-y-10">
      <div className="rounded-xl border border-border bg-secondary/40 p-5 md:p-6 space-y-5">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="md:col-span-1 space-y-2">
            <Label htmlFor="thc-search" className="text-xs uppercase tracking-wide text-muted-foreground">
              Search
            </Label>
            <Input
              id="thc-search"
              placeholder="Lakefront · Tampa Bay · HOA…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="thc-region" className="text-xs uppercase tracking-wide text-muted-foreground">
              Region cluster
            </Label>
            <select
              id="thc-region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="all">All featured regions</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
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
        </div>
        <p className="text-xs text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span> curated communities
          {query || region !== "all" || tenancy !== "all" ? " matching your filters." : "."}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-background p-10 text-center text-muted-foreground">
          No listings match yet—try widening the region cluster or resetting ownership filters.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{filtered.map((c) => <CommunityCard key={c.slug} community={c} />)}</div>
      )}
    </div>
  )
}
