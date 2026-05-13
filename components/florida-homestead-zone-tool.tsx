"use client"

import { useMemo, useState } from "react"
import {
  ArrowRight,
  CalendarDays,
  Home,
  Leaf,
  MapPin,
  Moon,
  Recycle,
  Search,
  Sparkles,
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
import {
  getLunarPlantingContextForZone,
  LUNAR_ASTROLOGICAL_PLANTING_GUIDE,
  lunarRhythmHighlightsForReport,
} from "@/lib/lunar-planting"
import {
  USDA_PLANT_HARDINESS,
  USDA_ZONE_DEFINITION_SHORT,
} from "@/lib/usda-hardiness-citations"

function ZoneBadge({ code }: { code: FloridaZoneCode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
      Zone {code}
    </span>
  )
}

function MoonSignBadge({
  sign,
  tradition,
}: {
  sign: string
  tradition: "fruitful" | "semi-fruitful" | "barren-leaning"
}) {
  const label =
    tradition === "fruitful"
      ? "Fruitful sign"
      : tradition === "semi-fruitful"
        ? "Semi-fruitful sign"
        : "Barren-leaning sign"
  return (
    <span className="inline-flex flex-col gap-0.5 rounded-md border border-[oklch(0.72_0.07_145)]/40 bg-[oklch(0.72_0.07_145)]/12 px-3 py-1.5 text-xs text-foreground">
      <span className="font-semibold tracking-wide">{sign}</span>
      <span className="text-[11px] text-muted-foreground">{label}</span>
    </span>
  )
}

export function FloridaHomesteadZoneTool() {
  const [query, setQuery] = useState("")
  const [resolution, setResolution] = useState<ZoneResolution | null>(null)
  const [submittedEmpty, setSubmittedEmpty] = useState(false)
  const [lookupMiss, setLookupMiss] = useState(false)
  const [lunarSnapshotAt, setLunarSnapshotAt] = useState<Date | null>(null)

  const report = useMemo(() => {
    if (!resolution) return null
    return homesteadReportForZone(resolution.zone)
  }, [resolution])

  const frost = useMemo(() => {
    if (!resolution) return null
    return frostGuidanceForZone(resolution.zone)
  }, [resolution])

  const lunar = useMemo(() => {
    if (!resolution || !lunarSnapshotAt) return null
    return getLunarPlantingContextForZone(resolution.zone, lunarSnapshotAt)
  }, [resolution, lunarSnapshotAt])

  const seasonalAndLunarLines = useMemo(() => {
    if (!report || !resolution || !lunar) return []
    return [...report.seasonalHighlights, ...lunarRhythmHighlightsForReport(resolution.zone, lunar)]
  }, [report, resolution, lunar])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) {
      setSubmittedEmpty(true)
      setLookupMiss(false)
      setResolution(null)
      setLunarSnapshotAt(null)
      return
    }
    setSubmittedEmpty(false)
    const next = resolveFloridaZoneFromInput(trimmed)
    setResolution(next)
    setLookupMiss(!next)
    if (next) setLunarSnapshotAt(new Date())
    else setLunarSnapshotAt(null)
  }

  return (
    <div className="space-y-12">
      <div className="rounded-xl border border-border bg-gradient-to-b from-secondary to-background p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
              Zone &amp; lunar rhythm
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground text-balance">
              Enter your address or ZIP code to find your USDA growing zone and current lunar guidance
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
              {USDA_ZONE_DEFINITION_SHORT} Use this tool for Florida-oriented schedules, moon rhythm,
              and closed-loop ideas—then{" "}
              <a
                href={USDA_PLANT_HARDINESS.mapHomeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                confirm your half-zone on the official ARS map
              </a>{" "}
              (ZIP search or click your pin). Moon rhythm is an almanac-style layer: helpful for
              pacing, not a substitute for irrigation, heat indexes, or extension advice.
            </p>
          </div>
          <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Moon className="h-6 w-6" aria-hidden />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <label className="sr-only" htmlFor="zone-search">
            Enter your address or zip code to find your USDA growing zone and current lunar guidance
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
            Find zone &amp; Moon rhythm
          </Button>
        </form>

        {submittedEmpty && (
          <p className="mt-3 text-sm text-destructive" role="alert">
            Add a Florida ZIP or city so we can estimate your hardiness zone and lunar pacing.
          </p>
        )}

        {lookupMiss && !submittedEmpty && (
          <p className="mt-3 text-sm text-amber-900 dark:text-amber-100" role="status">
            We couldn&apos;t match that input yet. Try a 5-digit Florida ZIP (320xx–349xx) or a city
            name like Orlando, Tampa, or Key West.
          </p>
        )}

        {resolution && frost && report && lunar && (
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
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                Authoritative half-zone:{" "}
                <a
                  href={USDA_PLANT_HARDINESS.mapHomeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline-offset-4 hover:underline"
                >
                  USDA ARS interactive map (2023 edition)
                </a>
                —ZIP quick search or click your property. Updates vs. the 2012 map:{" "}
                <a
                  href={USDA_PLANT_HARDINESS.mapCreationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline-offset-4 hover:underline"
                >
                  Map Creation (ARS)
                </a>
                .
              </p>
            </div>

            <div className="rounded-lg border border-[oklch(0.62_0.11_55)]/35 bg-gradient-to-br from-[oklch(0.96_0.02_85)] to-[oklch(0.72_0.07_145)]/15 p-5 md:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span
                    className="text-4xl leading-none"
                    role="img"
                    aria-label={`Current moon phase visual: ${lunar.phaseLabel}`}
                  >
                    {lunar.phaseGlyph}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Moon className="h-5 w-5 text-primary shrink-0" aria-hidden />
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Current moon phase &amp; pacing
                      </p>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-foreground">{lunar.phaseLabel}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      ~{lunar.illuminationPercent}% illuminated · {lunar.waxing ? "Waxing" : "Waning"} cycle ·
                      Next full ~{lunar.daysToNextFullMoon.toFixed(1)}d · Next new ~{lunar.daysToNextNewMoon.toFixed(1)}
                      d (synodic model, UTC)
                    </p>
                  </div>
                </div>
                <MoonSignBadge sign={lunar.moonSign} tradition={lunar.moonSignTradition} />
              </div>

              <div className="mt-5 rounded-md border border-border/70 bg-background/80 p-4">
                <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                  <Sparkles className="h-4 w-4 text-primary" aria-hidden />
                  Best activities for this window
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {lunar.suggestedActivities.map((line) => (
                    <li key={line} className="flex gap-2 leading-relaxed">
                      <span className="text-primary mt-0.5" aria-hidden>
                        ✶
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/90">{lunar.guidanceParagraph}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-foreground">Personalized regenerative homestead report</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Written for Zone {resolution.zone} with Florida humidity, hurricanes, and sandy soils
                in mind—especially helpful for tiny-home communities sharing compost, birds, and
                vertical grow space.
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
                  <Sparkles className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="font-serif text-xl text-foreground">Lunar &amp; astrological planting guide</h4>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{LUNAR_ASTROLOGICAL_PLANTING_GUIDE.intro}</p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-md border border-border/80 bg-secondary/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    {LUNAR_ASTROLOGICAL_PLANTING_GUIDE.waxing.title}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {LUNAR_ASTROLOGICAL_PLANTING_GUIDE.waxing.bullets.map((b) => (
                      <li key={b} className="flex gap-2 leading-relaxed">
                        <span className="text-primary">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-border/80 bg-secondary/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    {LUNAR_ASTROLOGICAL_PLANTING_GUIDE.waning.title}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {LUNAR_ASTROLOGICAL_PLANTING_GUIDE.waning.bullets.map((b) => (
                      <li key={b} className="flex gap-2 leading-relaxed">
                        <span className="text-primary">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 rounded-md border border-dashed border-primary/30 bg-secondary/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                  {LUNAR_ASTROLOGICAL_PLANTING_GUIDE.signs.title}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {LUNAR_ASTROLOGICAL_PLANTING_GUIDE.signs.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-md border border-primary/20 bg-primary/5 p-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Right now for you</p>
                <p className="text-sm text-foreground leading-relaxed">
                  Moon in <span className="font-semibold">{lunar.moonSign}</span> during{" "}
                  <span className="font-semibold">{lunar.phaseLabel}</span>—pair the rhythm above with your Zone{" "}
                  {resolution.zone} heat and frost notes before moving fragile transplants.
                </p>
              </div>
            </section>

            <section className="rounded-lg border border-border bg-background p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Recycle className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="font-serif text-xl text-foreground">Closed-loop zero-waste permaculture</h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{report.closedLoop}</p>
              <div className="mt-5 flex flex-col gap-3 rounded-md border border-dashed border-primary/30 bg-secondary/40 p-4 text-sm text-muted-foreground leading-relaxed">
                <p className="flex items-start gap-2">
                  <Recycle className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                  <span>
                    <span className="font-semibold text-foreground">Full cycle: </span>
                    Kitchen scraps &amp; banana peels → ducks/chickens on rotation → manure &amp; litter
                    → compost &amp; worm castings → feeds banana circles, sweet potato berms, salad
                    beds, passionfruit, and climbers → more calories &amp; greens &amp; fallen fruit
                    looped back to birds and compost (not the landfill).
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Stack niches: sweet potato vines smother weeds, leafy perennial greens fill summer
                  gaps, fallen fruit becomes animal forage or black-soldier-fly feed (where
                  appropriate), and every rinse can route through mulch basins when codes allow.
                </p>
              </div>
            </section>

            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-lg border border-border bg-background p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-primary" aria-hidden />
                  <h4 className="font-serif text-lg text-foreground">Exterior &amp; vertical growing</h4>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Vertical strategies for tiny homes—shade the wall, feed people, buffer wind.
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
                  <h4 className="font-serif text-lg text-foreground">Key tubers &amp; calorie crops</h4>
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
                <h4 className="font-serif text-xl text-foreground">Seasonal &amp; lunar calendar highlights</h4>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {seasonalAndLunarLines.map((line) => (
                  <li key={line} className="flex gap-2 rounded-md bg-secondary/50 px-3 py-2 leading-relaxed">
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
            &quot;Key West&quot; also nudge the estimator. Moon phase restacks every time you submit a new
            lookup so the guidance matches your moment.
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
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-3xl">
          Temperature ranges in the table follow USDA half-zone definitions aligned with the{" "}
          <a
            href={USDA_PLANT_HARDINESS.mapHomeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            {USDA_PLANT_HARDINESS.editionLabel}
          </a>
          . Half-zones represent 5°F bands within the broader 10°F USDA zones.
        </p>
      </div>
    </div>
  )
}
