"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react"
import { useMemo, useState } from "react"
import { LOCAL_SEO_PAGES_BY_COUNTY, LOCAL_SEO_PAGES } from "@/lib/local-pages-data"
import {
  getAllRulesPageCounties,
  type RuleIcon,
  type RulesPageCountyData,
} from "@/lib/regulatory/rules-page-adapter"

const RULES_PAGE_COUNTIES = getAllRulesPageCounties()

function RuleIconDisplay({ icon }: { icon: RuleIcon }) {
  if (icon === "check") return <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
  if (icon === "x") return <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
  return <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
}

export function AduRulesPageClient() {
  const [activeCounty, setActiveCounty] = useState(RULES_PAGE_COUNTIES[0]?.key ?? "orange-county")
  const [directorySearch, setDirectorySearch] = useState("")
  const [directoryCounty, setDirectoryCounty] = useState("All counties")

  const county: RulesPageCountyData =
    RULES_PAGE_COUNTIES.find((item) => item.key === activeCounty) ?? RULES_PAGE_COUNTIES[0]

  const countyHubs = LOCAL_SEO_PAGES.filter((page) => page.isHub).sort((a, b) =>
    a.locationName.localeCompare(b.locationName),
  )
  const countyLocalPages = Object.entries(LOCAL_SEO_PAGES_BY_COUNTY).map(([countyName, pages]) => [
    countyName,
    pages
      .filter((page) => !page.isHub)
      .sort((a, b) => a.locationName.localeCompare(b.locationName)),
  ] as const)
  const directoryCountyOptions = ["All counties", ...countyLocalPages.map(([countyName]) => countyName)]
  const filteredDirectory = useMemo(() => {
    const q = directorySearch.trim().toLowerCase()
    return countyLocalPages
      .filter(([countyName]) => directoryCounty === "All counties" || countyName === directoryCounty)
      .map(([countyName, pages]) => [
        countyName,
        pages.filter((page) =>
          q.length === 0
            ? true
            : page.locationName.toLowerCase().includes(q) ||
              page.slug.toLowerCase().includes(q) ||
              page.group.toLowerCase().includes(q),
        ),
      ] as const)
      .filter(([, pages]) => pages.length > 0)
  }, [countyLocalPages, directoryCounty, directorySearch])

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-44 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
              ADU Rules by County — Central Florida
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Every county has different rules. Here&apos;s what each one requires, allows, and
              prohibits — so you know exactly where you stand before you build.
            </p>
          </div>

          <div className="mb-8 border-b border-border overflow-x-auto">
            <div className="inline-flex min-w-full sm:min-w-0 gap-1">
              {RULES_PAGE_COUNTIES.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveCounty(item.key)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeCounty === item.key
                      ? "text-foreground border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-secondary border border-border rounded-lg p-6">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full ${
                  county.status === "live"
                    ? "bg-primary/15 text-primary"
                    : "bg-amber-100 text-amber-800 border border-amber-300/70"
                }`}
              >
                {county.statusLabel}
              </span>
              <span className="text-xs text-muted-foreground">
                Last verified: {county.lastVerifiedDisplay}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Minimum ADU size", value: county.stats.minSize },
                { label: "Maximum ADU size", value: county.stats.maxSize },
                { label: "Owner-occupancy required?", value: county.stats.ownerOccupancy },
                { label: "Special exception required?", value: county.stats.specialException },
              ].map((card) => (
                <div key={card.label} className="bg-background border border-border rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{card.label}</p>
                  <p className="font-semibold text-foreground mt-2 text-sm leading-relaxed">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="font-serif text-2xl text-foreground mb-4">What&apos;s Allowed at a Glance</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {county.rules.map((rule) => (
                  <div key={rule.title} className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <RuleIconDisplay icon={rule.icon} />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{rule.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{rule.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-serif text-2xl text-foreground mb-4">Setbacks</h2>
              <div className="overflow-x-auto bg-background border border-border rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold text-foreground">Setback Type</th>
                      <th className="text-left p-4 font-semibold text-foreground">Measurement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {county.setbacks.map((setback) => (
                      <tr key={setback.type} className="border-b border-border last:border-b-0">
                        <td className="p-4 text-foreground">{setback.type}</td>
                        <td className="p-4 text-muted-foreground">{setback.measurement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-background border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-3">Contact</h3>
                <ul className="space-y-2">
                  {county.contact.map((line) => (
                    <li key={line} className="text-sm text-muted-foreground">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-3">Local Pages</h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm mb-4">
                  {countyHubs.map((page) => (
                    <li key={page.slug}>
                      <Link href={`/${page.slug}`} className="text-primary hover:underline">
                        ADU Specialists in {page.locationName}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use the full local directory below to search by city, neighborhood, or county.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mb-6">
              Source: {county.source}. Citation: {county.citation}. Requirements subject to change.
              Always verify directly with the county before starting any project.
            </p>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-foreground font-medium">
                  Not sure which county your property falls under? We run the zoning check — free.
                </p>
                <Link
                  href="/qualify"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
                >
                  Check My Property
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/adu-calculator" className="text-primary hover:underline">
                Use the ADU Income Calculator
              </Link>
              <Link href="/#what-is-adu" className="text-primary hover:underline">
                Learn ADU Basics
              </Link>
              <Link href="/qualify" className="text-primary hover:underline">
                Start Free Evaluation
              </Link>
            </div>
          </div>

          <section id="local-directory" className="mt-14 pt-8 border-t border-border">
            <h2 className="font-serif text-3xl text-foreground mb-3">Full Local Directory</h2>
            <p className="text-muted-foreground mb-6">
              Find your municipality, neighborhood, or county page below. If you are unsure where
              your parcel falls, start with a free zoning check.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground block mb-2">
                  Search location
                </label>
                <input
                  value={directorySearch}
                  onChange={(e) => setDirectorySearch(e.target.value)}
                  placeholder="Search by city, neighborhood, or slug..."
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground block mb-2">
                  County
                </label>
                <select
                  value={directoryCounty}
                  onChange={(e) => setDirectoryCounty(e.target.value)}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  {directoryCountyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-6">
              {filteredDirectory.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No locations matched your search. Try a broader county or fewer keywords.
                </p>
              ) : (
                filteredDirectory.map(([countyName, pages]) => (
                  <div key={countyName}>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                      {countyName}
                    </h3>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 text-sm">
                      {pages.map((page) => (
                        <li key={page.slug}>
                          <Link href={`/${page.slug}`} className="text-foreground hover:text-primary transition-colors">
                            ADU Specialists in {page.locationName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </section>

          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              All information on this page is sourced from official county and city records and is
              believed to be accurate as of the date listed per jurisdiction. ADU regulations are
              subject to change without notice. Requirements vary by zoning district, parcel
              conditions, and local amendments. Prefabricated.co strongly recommends verifying all
              requirements directly with the relevant county or city before beginning any project.
              This page does not constitute legal or zoning advice.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Active tab last verified: {county.lastVerifiedDisplay} ({county.statusLabel})
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
