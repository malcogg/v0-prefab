"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { LOCAL_SEO_PAGES_BY_COUNTY, LOCAL_SEO_PAGES } from "@/lib/local-pages-data"

type RuleIcon = "check" | "x" | "warning"

type CountyData = {
  key: string
  label: string
  status: "verified" | "pending"
  stats: {
    minSize: string
    maxSize: string
    ownerOccupancy: string
    specialException: string
  }
  rules: { icon: RuleIcon; title: string; note: string }[]
  setbacks: { type: string; measurement: string }[]
  contact: string[]
  source: string
}

const COUNTY_DATA: CountyData[] = [
  {
    key: "orange",
    label: "Orange County (unincorporated)",
    status: "verified",
    stats: {
      minSize: "400 sq ft",
      maxSize:
        "1,000 sq ft (or 45% of primary home, whichever is less; 1,500 sq ft for lots 2+ acres)",
      ownerOccupancy: "YES — property must be homesteaded",
      specialException: "YES — separate zoning approval before building permit",
    },
    rules: [
      {
        icon: "x",
        title: "Owner Occupancy",
        note: "Owner must occupy primary home OR ADU — cannot rent both units if living elsewhere",
      },
      {
        icon: "x",
        title: "Special Exception",
        note: "Special exception approval required before building permit application",
      },
      {
        icon: "x",
        title: "Short-Term Rental",
        note: "Short-term rentals prohibited — 30+ day leases only (no Airbnb/VRBO)",
      },
      {
        icon: "check",
        title: "Detached ADUs",
        note: "Detached ADUs permitted — subject to lot size and setback requirements",
      },
      {
        icon: "check",
        title: "Container/Modular",
        note: "Foundation-built container/modular units allowed — DBPR state review may apply",
      },
      { icon: "x", title: "Bedroom Limit", note: "Max 2 bedrooms per ADU" },
      {
        icon: "check",
        title: "Appraisal Impact",
        note: "ADU adds to property value — permitted and inspected units are appraised",
      },
      {
        icon: "warning",
        title: "Lot Size Threshold",
        note: "Lot must be 1.5x minimum zoning lot size for a detached ADU",
      },
    ],
    setbacks: [
      { type: "Rear property line (1-story)", measurement: "5 ft minimum" },
      { type: "Rear property line (2-story)", measurement: "15 ft minimum" },
      { type: "From primary dwelling", measurement: "10 ft minimum" },
      { type: "Side yard", measurement: "Matches principal structure minimums for zoning district" },
    ],
    contact: [
      "Zoning questions: (407) 836-3111 | Zoning@ocfl.net",
      "Building inspections / permit status: (407) 836-5550",
      "Fast Track portal: orangecountyfl.net",
    ],
    source:
      "Orange County Zoning Code § 38-1426 | orangecountyfl.net/PermitsLicenses/Permits/ResidentialAccessoryDwellingUnit.aspx",
  },
  {
    key: "orlando",
    label: "City of Orlando",
    status: "verified",
    stats: {
      minSize: "Varies by zoning district",
      maxSize: "500–1,000 sq ft (depends on lot size and zoning)",
      ownerOccupancy: "NO — city does not require owner to live on property",
      specialException: "No — ADUs permitted by right in most R-zoned districts",
    },
    rules: [
      {
        icon: "check",
        title: "Owner Occupancy",
        note: "No owner-occupancy requirement — investors can rent both units",
      },
      {
        icon: "check",
        title: "Permitting Path",
        note: "ADUs permitted by right in most residential (R) zoning districts",
      },
      {
        icon: "check",
        title: "Detached Placement",
        note: "Detached ADUs allowed — must be at side or rear of primary dwelling",
      },
      {
        icon: "warning",
        title: "Short-Term Rentals",
        note: "Short-term rentals restricted — visit orlando.gov/homeshare for full rules",
      },
      {
        icon: "warning",
        title: "Design Compatibility",
        note: "Design compatibility required — ADU must match primary home or have approved distinct identity",
      },
      {
        icon: "warning",
        title: "Container Guidance",
        note: "Container/shipping container ADUs — contact Planning Division for specific requirements",
      },
      {
        icon: "x",
        title: "Front Yard Placement",
        note: "ADU cannot be placed in front of primary dwelling",
      },
      {
        icon: "x",
        title: "Size Relationship",
        note: "ADU cannot be larger than the main house (including garage, porch, balconies)",
      },
    ],
    setbacks: [
      { type: "Front yard", measurement: "Not permitted" },
      { type: "Side and rear", measurement: "Varies by zoning district" },
      { type: "Common (R-1A)", measurement: "Side 7.5 ft, Street side 15 ft, Rear 25 ft" },
      { type: "Max height", measurement: "Typically 30–35 ft depending on district" },
    ],
    contact: [
      "Planning / zoning: cityplanning@orlando.gov",
      "Permitting: permittingservices@orlando.gov",
    ],
    source: "City of Orlando Code Ch. 58 Part 3A | orlando.gov",
  },
  {
    key: "osceola",
    label: "Osceola County",
    status: "pending",
    stats: {
      minSize: "Verify with county",
      maxSize: "Verify with county",
      ownerOccupancy: "Verify with county",
      specialException: "Verify with county",
    },
    rules: [
      {
        icon: "warning",
        title: "ADU Eligibility",
        note: "ADU eligibility varies by zoning — verify your parcel's classification",
      },
      {
        icon: "warning",
        title: "Owner Occupancy",
        note: "Owner-occupancy requirement — not yet confirmed, check current ordinance",
      },
      {
        icon: "warning",
        title: "Detached Standards",
        note: "Detached ADU rules — contact county for current standards",
      },
      {
        icon: "warning",
        title: "Short-Term Rental",
        note: "Short-term rental policy — verify current status before planning",
      },
      {
        icon: "warning",
        title: "Container/Modular",
        note: "Container/modular units — no confirmed approval data; contact building dept.",
      },
      {
        icon: "warning",
        title: "Setbacks",
        note: "Setbacks — vary by zoning district, verify before designing",
      },
    ],
    setbacks: [
      { type: "Rear property line", measurement: "Verify with Osceola Zoning" },
      { type: "From primary dwelling", measurement: "Verify with Osceola Zoning" },
      { type: "Side yard", measurement: "Verify with Osceola Zoning" },
      { type: "Height", measurement: "Verify with Osceola Zoning" },
    ],
    contact: [
      "Phone: (407) 742-0200",
      "Email: planninginfo@osceolafl.org",
      "Website: osceola.org",
    ],
    source: "Verify directly with Osceola County Planning & Zoning before making any project decisions.",
  },
  {
    key: "seminole",
    label: "Seminole County",
    status: "pending",
    stats: {
      minSize: "Verify with county",
      maxSize: "Verify with county",
      ownerOccupancy: "Verify with county",
      specialException: "Verify with county",
    },
    rules: [
      {
        icon: "warning",
        title: "ADU Eligibility",
        note: "ADU eligibility varies by zoning — verify your parcel's classification",
      },
      {
        icon: "warning",
        title: "Owner Occupancy",
        note: "Owner-occupancy requirement — not yet confirmed, check current ordinance",
      },
      {
        icon: "warning",
        title: "Detached Standards",
        note: "Detached ADU rules — lot size requirements unconfirmed",
      },
      {
        icon: "warning",
        title: "Short-Term Rental",
        note: "Short-term rental policy — verify current status",
      },
      {
        icon: "warning",
        title: "Container/Modular",
        note: "Container/modular units — check with Seminole building department",
      },
      {
        icon: "warning",
        title: "Setbacks",
        note: "Setbacks — vary by zoning district",
      },
    ],
    setbacks: [
      { type: "Rear property line", measurement: "Verify with Seminole Zoning" },
      { type: "From primary dwelling", measurement: "Verify with Seminole Zoning" },
      { type: "Side yard", measurement: "Verify with Seminole Zoning" },
      { type: "Height", measurement: "Verify with Seminole Zoning" },
    ],
    contact: [
      "Phone: (407) 665-7444",
      "Email: zoning@seminolecountyfl.gov",
      "Website: seminolecountyfl.gov",
    ],
    source: "Verify directly with Seminole County Zoning before making any project decisions.",
  },
  {
    key: "lake",
    label: "Lake County",
    status: "pending",
    stats: {
      minSize: "Verify with county",
      maxSize: "Verify with county",
      ownerOccupancy: "Verify with county",
      specialException: "Verify with county",
    },
    rules: [
      {
        icon: "warning",
        title: "ADU Eligibility",
        note: "ADU eligibility varies by zoning — verify your parcel's classification",
      },
      {
        icon: "warning",
        title: "Acreage Flexibility",
        note: "ADUs may have more flexibility on acreage lots — verify with county",
      },
      {
        icon: "warning",
        title: "Owner Occupancy",
        note: "Owner-occupancy requirement — not yet confirmed",
      },
      {
        icon: "warning",
        title: "Short-Term Rental",
        note: "Short-term rental policy — verify current status",
      },
      {
        icon: "warning",
        title: "Container/Modular",
        note: "Container/modular units — check with Lake County building department",
      },
      {
        icon: "warning",
        title: "Setbacks",
        note: "Setbacks — vary by zoning district",
      },
    ],
    setbacks: [
      { type: "Rear property line", measurement: "Verify with Lake County Zoning" },
      { type: "From primary dwelling", measurement: "Verify with Lake County Zoning" },
      { type: "Side yard", measurement: "Verify with Lake County Zoning" },
      { type: "Height", measurement: "Verify with Lake County Zoning" },
    ],
    contact: [
      "Phone: (352) 343-9801",
      "Email: building@mylakelnd.com",
      "Website: lakecountyfl.gov",
    ],
    source: "Verify directly with Lake County Growth Management before making any project decisions.",
  },
]

function RuleIconDisplay({ icon }: { icon: RuleIcon }) {
  if (icon === "check") return <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
  if (icon === "x") return <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
  return <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
}

export function AduRulesPageClient() {
  const [activeCounty, setActiveCounty] = useState(COUNTY_DATA[0].key)
  const [verifiedDate, setVerifiedDate] = useState("")
  const [directorySearch, setDirectorySearch] = useState("")
  const [directoryCounty, setDirectoryCounty] = useState("All counties")

  useEffect(() => {
    setVerifiedDate(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    )
  }, [])

  const county = COUNTY_DATA.find((item) => item.key === activeCounty) ?? COUNTY_DATA[0]
  const countyHubs = LOCAL_SEO_PAGES.filter((page) => page.isHub).sort((a, b) =>
    a.locationName.localeCompare(b.locationName)
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
              page.group.toLowerCase().includes(q)
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
              {COUNTY_DATA.map((item) => (
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
            <div className="mb-6">
              <span
                className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full ${
                  county.status === "verified"
                    ? "bg-primary/15 text-primary"
                    : "bg-amber-100 text-amber-800 border border-amber-300/70"
                }`}
              >
                {county.status === "verified"
                  ? "Data verified — sourced from official county records"
                  : "Pending verification — contact county before making decisions"}
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
              Source: {county.source}. Requirements subject to change. Always verify directly with
              the county before starting any project.
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
              believed to be accurate as of the date listed. ADU regulations are subject to change
              without notice. Requirements vary by zoning district, parcel conditions, and local
              amendments. EarthNest Florida strongly recommends verifying all requirements directly
              with the relevant county or city before beginning any project. This page does not
              constitute legal or zoning advice.
            </p>
            <p className="text-xs text-muted-foreground mt-2">Last verified: {verifiedDate || "—"}</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
