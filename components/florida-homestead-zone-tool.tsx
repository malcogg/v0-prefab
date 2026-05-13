"use client"

import { useMemo, useState } from "react"
import {
  ArrowRight,
  CalendarDays,
  Home,
  Leaf,
  MapPin,
  Recycle,
  Search,
  Sprout,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FLORIDA_ZONES_OVERVIEW,
  type FloridaZoneCode,
  frostGuidanceForZone,
  homesteadReportForZone,
  resolveFloridaZoneFromInput,
  type ZoneResolution,
} from "@/lib/florida-homestead-zones"

function ZoneBadge({ code }: { code: FloridaZoneCode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
      Zone {code}
    </span>
  )
}

export function FloridaHomesteadZoneTool() {
  const [query, setQuery] = useState("")
  const [resolution, setResolution] = useState<ZoneResolution | null>(null)
  const [submittedEmpty, setSubmittedEmpty] = useState(false)
  const [lookupMiss, setLookupMiss] = useState(false)

  const report = useMemo(() => {
    if (!resolution) return null
    return homesteadReportForZone(resolution.zone)
  }, [resolution])

  const frost = useMemo(() => {
    if (!resolution) return null
    return frostGuidanceForZone(resolution.zone)
  }, [resolution])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) {
      setSubmittedEmpty(true)
      setLookupMiss(false)
      setResolution(null)
      return
    }
    setSubmittedEmpty(false)
    const next = resolveFloridaZoneFromInput(trimmed)
    setResolution(next)
    setLookupMiss(!next)
  }

  return (
    <div className="space-y-12">
      <div className="rounded-xl border border-border bg-gradient-to-b from-secondary to-background p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
              Interactive zone finder
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground text-balance">
              Enter your address or ZIP code to find your USDA growing zone
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
              This tool estimates your Florida USDA plant hardiness zone from a ZIP code or city
              cue—useful for tiny homes, regenerative homesteads, and community-scale food planning.
              For official maps and the latest revisions, cross-check with USDA Agricultural Research
              Service hardiness data for your property.
            </p>
          </div>
          <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sprout className="h-6 w-6" aria-hidden />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <label className="sr-only" htmlFor="zone-search">
            Enter your address or zip code to find your USDA growing zone
          </label>
          <Input
            id="zone-search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setLookupMiss(false)
            }}
            placeholder="e.g., 32801, Orlando FL, or Miami 33132"
            className="h-11 sm:flex-1"
            autoComplete="postal-code"
            aria-invalid={submittedEmpty}
          />
          <Button type="submit" size="lg" className="h-11 shrink-0 gap-2">
            <Search className="h-4 w-4" aria-hidden />
            Find my zone
          </Button>
        </form>

        {submittedEmpty && (
          <p className="mt-3 text-sm text-destructive" role="alert">
            Add a Florida ZIP or city so we can estimate your hardiness zone.
          </p>
        )}

        {lookupMiss && !submittedEmpty && (
          <p className="mt-3 text-sm text-amber-900 dark:text-amber-100" role="status">
            We couldn&apos;t match that input yet. Try a 5-digit Florida ZIP (320xx–349xx) or a city
            name like Orlando, Tampa, or Key West.
          </p>
        )}

        {resolution && frost && report && (
          <div className="mt-8 space-y-8 border-t border-border pt-8">
            <div className="rounded-lg border border-border bg-background p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
                <p className="text-sm font-medium text-foreground">Lookup result</p>
                <ZoneBadge code={resolution.zone} />
                {resolution.source === "demo" && (
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    demo / approximate
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Matched from: <span className="text-foreground font-medium">{resolution.matchedLabel}</span>
              </p>
              {!resolution.isFloridaZip && (
                <p className="mt-2 text-xs text-amber-800 dark:text-amber-200">
                  Outside Florida ZIP ranges—we&apos;re showing sample guidance for Zone 10a. Enter a FL
                  ZIP (320xx–349xx) for a tighter match.
                </p>
              )}

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-md border border-border/80 bg-secondary/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Last frost</p>
                  <p className="mt-1 font-serif text-lg text-foreground">{frost.lastFrostLabel}</p>
                </div>
                <div className="rounded-md border border-border/80 bg-secondary/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">First frost</p>
                  <p className="mt-1 font-serif text-lg text-foreground">{frost.firstFrostLabel}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{frost.narrative}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-foreground">Your personalized homestead report</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Written for Zone {resolution.zone} with Florida humidity, storms, and sandy soils in
                mind—especially helpful for tiny-home clusters sharing tool sheds, compost, and
                vertical growing space.
              </p>
            </div>

            <section className="rounded-lg border border-border bg-background p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Leaf className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="font-serif text-xl text-foreground">Recommended crops for your zone</h4>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {report.recommendedCrops.map((line) => (
                  <li key={line} className="flex gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg border border-border bg-background p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Recycle className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="font-serif text-xl text-foreground">Permaculture & closed-loop ideas</h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{report.closedLoop}</p>
              <div className="mt-5 rounded-md border border-dashed border-primary/30 bg-secondary/40 p-4 text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Micro-cycle: </span>
                Banana peels → duck forage along a mulch path → litter to compost → compost to feeder
                roots → fruit back to the table.
              </div>
            </section>

            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-lg border border-border bg-background p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-primary" aria-hidden />
                  <h4 className="font-serif text-lg text-foreground">Exterior & climbing plants</h4>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Vertical strategies for tight footprints—shade the wall, feed people, buffer wind.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {report.exteriorClimbing.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="rounded-lg border border-border bg-background p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Sprout className="h-5 w-5 text-primary" aria-hidden />
                  <h4 className="font-serif text-lg text-foreground">Key tubers & calorie crops</h4>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {report.tubers.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="rounded-lg border border-border bg-background p-5 md:p-6">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-primary" aria-hidden />
                <h4 className="font-serif text-xl text-foreground">Seasonal planting calendar highlights</h4>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {report.seasonalHighlights.map((line) => (
                  <li key={line} className="flex gap-2 rounded-md bg-secondary/50 px-3 py-2">
                    <span className="text-primary font-medium">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg border border-border bg-background p-5 md:p-6">
              <h4 className="font-serif text-xl text-foreground">Regenerative tips for Zone {resolution.zone}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {report.regenerative.map((line) => (
                  <li key={line} className="flex gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {resolution === null && !submittedEmpty && !lookupMiss && (
          <p className="mt-6 text-sm text-muted-foreground">
            Tip: Florida ZIP codes run roughly 320xx–349xx. City names like &quot;Tampa&quot; or
            &quot;Key West&quot; also nudge the estimator.
          </p>
        )}
      </div>

      <div className="rounded-xl border border-border bg-secondary/70 p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
              Full Florida reference
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
              USDA zones across Florida
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Florida spans multiple hardiness bands; coasts, urban heat islands, and water bodies
              create real-world microclimates beyond a single ZIP. Use this table as a planning
              compass, then validate with local observations and USDA references.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-border bg-background">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-secondary text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Zone
                </th>
                <th scope="col" className="px-4 py-3">
                  Typical lows
                </th>
                <th scope="col" className="px-4 py-3 min-w-[200px]">
                  General Florida footprint
                </th>
                <th scope="col" className="px-4 py-3 min-w-[260px]">
                  Growing advantages
                </th>
              </tr>
            </thead>
            <tbody>
              {FLORIDA_ZONES_OVERVIEW.map((row) => (
                <tr key={row.code} className="border-t border-border align-top">
                  <th scope="row" className="px-4 py-4 font-semibold text-foreground whitespace-nowrap">
                    {row.code}
                  </th>
                  <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">{row.tempRangeF}</td>
                  <td className="px-4 py-4 text-foreground">{row.region}</td>
                  <td className="px-4 py-4 text-muted-foreground leading-relaxed">{row.advantages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
