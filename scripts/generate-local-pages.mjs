import fs from "node:fs"
import path from "node:path"

const ROOT = "/Users/lank/v0-prefab"
const APP_DIR = path.join(ROOT, "app")
const LIB_DIR = path.join(ROOT, "lib")

const GROUPS = [
  {
    group: "Orange County Municipalities",
    county: "Orange County",
    jurisdiction:
      "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    tier: {
      1: [
        ["Orlando", "adu-orlando"],
        ["Apopka", "adu-apopka"],
        ["Ocoee", "adu-ocoee"],
        ["Winter Garden", "adu-winter-garden"],
        ["Winter Park", "adu-winter-park"],
        ["Maitland", "adu-maitland"],
        ["Windermere", "adu-windermere"],
      ],
      2: [
        ["Belle Isle", "adu-belle-isle"],
        ["Eatonville", "adu-eatonville"],
        ["Oakland", "adu-oakland"],
      ],
      3: [
        ["Edgewood", "adu-edgewood"],
        ["Bay Lake", "adu-bay-lake"],
        ["Lake Buena Vista", "adu-lake-buena-vista"],
      ],
    },
  },
  {
    group: "Orange County Unincorporated Communities",
    county: "Orange County",
    jurisdiction:
      "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    tier: {
      1: [
        ["Dr. Phillips", "adu-dr-phillips"],
        ["Horizon West", "adu-horizon-west"],
        ["Lake Nona", "adu-lake-nona"],
        ["Hunter's Creek", "adu-hunters-creek"],
        ["Pine Hills", "adu-pine-hills"],
        ["Alafaya", "adu-alafaya"],
        ["Meadow Woods", "adu-meadow-woods"],
        ["Goldenrod", "adu-goldenrod"],
        ["Lockhart", "adu-lockhart"],
        ["Oak Ridge", "adu-oak-ridge"],
      ],
      2: [
        ["Conway", "adu-conway"],
        ["Southchase", "adu-southchase"],
        ["University (UCF area)", "adu-university-orlando"],
        ["Azalea Park", "adu-azalea-park"],
        ["Fairview Shores", "adu-fairview-shores"],
        ["Union Park", "adu-union-park"],
        ["Bay Hill", "adu-bay-hill"],
        ["Four Corners", "adu-four-corners"],
        ["Williamsburg", "adu-williamsburg-orlando"],
        ["Sky Lake", "adu-sky-lake"],
        ["Pine Castle", "adu-pine-castle"],
        ["Gotha", "adu-gotha"],
        ["Clarcona", "adu-clarcona"],
        ["South Apopka", "adu-south-apopka"],
      ],
      3: [
        ["Wedgefield", "adu-wedgefield"],
        ["Bithlo", "adu-bithlo"],
        ["Orlo Vista", "adu-orlo-vista"],
        ["Holden Heights", "adu-holden-heights"],
        ["Tangelo Park", "adu-tangelo-park"],
        ["Taft", "adu-taft"],
        ["Lake Butler", "adu-lake-butler"],
        ["Rio Pinar", "adu-rio-pinar"],
        ["Lake Hart", "adu-lake-hart"],
        ["Zellwood", "adu-zellwood"],
        ["Tangerine", "adu-tangerine"],
        ["Tildenville", "adu-tildenville"],
        ["Christmas", "adu-christmas"],
        ["Lake Mary Jane", "adu-lake-mary-jane"],
      ],
    },
  },
  {
    group: "City of Orlando Neighborhoods",
    county: "Orange County",
    jurisdiction:
      "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    tier: {
      1: [
        ["Baldwin Park", "adu-baldwin-park"],
        ["Lake Nona Orlando", "adu-lake-nona-orlando"],
        ["College Park Orlando", "adu-college-park-orlando"],
        ["MetroWest", "adu-metrowest"],
        ["Audubon Park", "adu-audubon-park"],
      ],
      2: [
        ["Thornton Park", "adu-thornton-park"],
        ["Delaney Park", "adu-delaney-park"],
        ["Lake Eola Heights", "adu-lake-eola-heights"],
        ["Mills 50", "adu-mills-50"],
        ["SoDo Orlando", "adu-sodo-orlando"],
        ["Downtown Orlando", "adu-downtown-orlando"],
      ],
      3: [],
    },
  },
  {
    group: "Seminole County Municipalities",
    county: "Seminole County",
    jurisdiction:
      "Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning.",
    tier: {
      1: [
        ["Altamonte Springs", "adu-altamonte-springs"],
        ["Oviedo", "adu-oviedo"],
        ["Lake Mary", "adu-lake-mary"],
        ["Sanford", "adu-sanford"],
        ["Longwood", "adu-longwood"],
        ["Casselberry", "adu-casselberry"],
        ["Winter Springs", "adu-winter-springs"],
      ],
      2: [],
      3: [],
    },
  },
  {
    group: "Seminole County Unincorporated",
    county: "Seminole County",
    jurisdiction:
      "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    tier: {
      1: [["Heathrow", "adu-heathrow"]],
      2: [
        ["Tuskawilla", "adu-tuskawilla"],
        ["Wekiva Springs", "adu-wekiva-springs"],
        ["Fern Park", "adu-fern-park"],
        ["Forest City", "adu-forest-city"],
        ["Sanlando Springs", "adu-sanlando-springs"],
      ],
      3: [
        ["Geneva", "adu-geneva"],
        ["Lake Monroe", "adu-lake-monroe"],
        ["Midway (Seminole)", "adu-midway-seminole"],
        ["Slavia", "adu-slavia"],
      ],
    },
  },
  {
    group: "Osceola County Municipalities",
    county: "Osceola County",
    jurisdiction:
      "Municipal zoning applies in incorporated Osceola cities, with county overlays in some contexts.",
    tier: {
      1: [
        ["Kissimmee", "adu-kissimmee"],
        ["St. Cloud", "adu-st-cloud"],
      ],
      2: [],
      3: [],
    },
  },
  {
    group: "Osceola County Unincorporated",
    county: "Osceola County",
    jurisdiction:
      "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    tier: {
      1: [
        ["Celebration", "adu-celebration"],
        ["Poinciana", "adu-poinciana"],
        ["Buenaventura Lakes", "adu-buenaventura-lakes"],
      ],
      2: [
        ["Harmony", "adu-harmony"],
        ["Narcoossee", "adu-narcoossee"],
      ],
      3: [
        ["Intercession City", "adu-intercession-city"],
        ["Campbell", "adu-campbell"],
        ["Loughman", "adu-loughman"],
        ["Yeehaw Junction", "adu-yeehaw-junction"],
      ],
    },
  },
  {
    group: "Lake County Municipalities",
    county: "Lake County",
    jurisdiction:
      "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    tier: {
      1: [
        ["Clermont", "adu-clermont"],
        ["Minneola", "adu-minneola"],
        ["Groveland", "adu-groveland"],
      ],
      2: [
        ["Mount Dora", "adu-mount-dora"],
        ["Eustis", "adu-eustis"],
        ["Leesburg", "adu-leesburg"],
        ["Tavares", "adu-tavares"],
        ["Lady Lake", "adu-lady-lake"],
        ["Fruitland Park", "adu-fruitland-park"],
        ["Mascotte", "adu-mascotte"],
        ["Montverde", "adu-montverde"],
      ],
      3: [
        ["Howey-in-the-Hills", "adu-howey-in-the-hills"],
        ["Umatilla", "adu-umatilla"],
        ["Astatula", "adu-astatula"],
      ],
    },
  },
  {
    group: "Lake County Unincorporated",
    county: "Lake County",
    jurisdiction:
      "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    tier: {
      1: [],
      2: [
        ["Sorrento", "adu-sorrento"],
        ["Mount Plymouth", "adu-mount-plymouth"],
      ],
      3: [
        ["Ferndale", "adu-ferndale"],
        ["Yalaha", "adu-yalaha"],
        ["Okahumpka", "adu-okahumpka"],
        ["Paisley", "adu-paisley"],
        ["Altoona", "adu-altoona"],
        ["Astor", "adu-astor"],
      ],
    },
  },
  {
    group: "Polk County Extended Service Area",
    county: "Polk County",
    jurisdiction:
      "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    tier: {
      1: [],
      2: [
        ["Davenport", "adu-davenport"],
        ["Haines City", "adu-haines-city"],
        ["Dundee", "adu-dundee"],
      ],
      3: [
        ["Lake Alfred", "adu-lake-alfred"],
        ["Auburndale", "adu-auburndale"],
        ["Lake Wales", "adu-lake-wales"],
        // Added to reach 127-target rollout while keeping extended-service coverage.
        ["Lakeland", "adu-lakeland"],
        ["Winter Haven", "adu-winter-haven"],
        ["Bartow", "adu-bartow"],
        ["Polk City", "adu-polk-city"],
      ],
    },
  },
]

const HUBS = [
  ["Orange County", "adu-orange-county", "Orange County"],
  ["Seminole County", "adu-seminole-county", "Seminole County"],
  ["Osceola County", "adu-osceola-county", "Osceola County"],
  ["Lake County", "adu-lake-county", "Lake County"],
  ["Polk County", "adu-polk-county", "Polk County"],
]

const FLAGGED = new Set([
  "adu-windermere",
  "adu-goldenrod",
  "adu-four-corners",
  "adu-poinciana",
  "adu-celebration",
  "adu-hunters-creek",
])

function byTierWording(tier) {
  if (tier === 1) return { minWords: 200, maxWords: 300 }
  if (tier === 2) return { minWords: 100, maxWords: 150 }
  return { minWords: 50, maxWords: 75 }
}

function introFor(page) {
  const common1 = `Homeowners and investors in ${page.locationName} are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.`
  const common2 = `For properties in this area, jurisdiction matters first: ${page.jurisdiction}.`
  const common3 = `EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.`
  const common4 = `In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.`
  const common5 = `Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.`
  const common6 = `Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there.`

  if (page.tier === 1) return [common1, common2, common3, common4, common5, common6]
  if (page.tier === 2) return [common1, common2, common3, common6]
  return [common1, common2, common3]
}

function rulesFor(page) {
  const isOrlandoNeighborhood = page.group === "City of Orlando Neighborhoods" || page.locationName === "Orlando"
  if (isOrlandoNeighborhood) {
    return [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately.",
    ]
  }
  if (page.county === "Orange County") {
    return [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout.",
    ]
  }
  return [
    `${page.county} requirements vary by municipality, zoning district, and parcel conditions.`,
    "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
    "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
    "Use the county directory and parcel review to confirm exact standards before permitting.",
  ]
}

function makePages() {
  const pages = []

  for (const groupDef of GROUPS) {
    for (const tier of [1, 2, 3]) {
      const rows = groupDef.tier[tier] || []
      for (const [locationName, slug] of rows) {
        pages.push({
          slug,
          locationName,
          tier,
          county: groupDef.county,
          group: groupDef.group,
          isHub: false,
          hubSlug: `adu-${groupDef.county.toLowerCase().replace(/\s+/g, "-")}`,
          jurisdiction: groupDef.jurisdiction,
          isFlagged: FLAGGED.has(slug),
          warning:
            FLAGGED.has(slug)
              ? `${locationName} spans multiple jurisdictions. The zoning rules that apply to your property depend on your exact parcel location. EarthNest Florida runs a zoning check as the first step of every free evaluation — before any other work begins.`
              : "",
          introParagraphs: introFor({
            locationName,
            jurisdiction: groupDef.jurisdiction,
            tier,
          }),
          quickRules: rulesFor({
            county: groupDef.county,
            locationName,
            group: groupDef.group,
          }),
          metaTitle: `ADU Specialists in ${locationName}, FL | EarthNest Florida`,
          metaDescription: `Build a legal, permitted ADU in ${locationName}, ${groupDef.county}. EarthNest Florida handles zoning, design, permitting & construction. Free property evaluation — no obligation.`,
          wordBand: byTierWording(tier),
        })
      }
    }
  }

  for (const [locationName, slug, county] of HUBS) {
    pages.push({
      slug,
      locationName,
      tier: 1,
      county,
      group: "County Hub",
      isHub: true,
      hubSlug: slug,
      jurisdiction: `${county} includes both incorporated municipalities and unincorporated areas. Applicable rules vary by parcel.`,
      isFlagged: false,
      warning: "",
      introParagraphs: [
        `${locationName} is one of EarthNest Florida's primary ADU service hubs, with meaningful demand across homeowners and investors looking for permitted, long-term value-add housing options.`,
        `Because parcels in ${locationName} may fall under municipal standards or unincorporated county code, a zoning-first process is essential before any design or cost assumptions are made.`,
        `This county hub connects you to local city and neighborhood pages so you can review location-specific context, then confirm your exact parcel requirements through a free EarthNest evaluation.`,
        "Projects in this county typically perform best when feasibility is validated up front, utility and setback conditions are mapped early, and the build strategy is selected based on long-term compliance and rental durability.",
      ],
      quickRules: [
        "County hub pages summarize local markets; final zoning authority still depends on parcel jurisdiction.",
        "Municipal pages may differ significantly from unincorporated county standards.",
        "Setback, owner-occupancy, and special-exception expectations vary across the county map.",
        "Use the county directory and parcel-level review before selecting a final ADU plan.",
      ],
      metaTitle: `ADU Specialists in ${locationName}, FL | EarthNest Florida`,
      metaDescription: `Build a legal, permitted ADU in ${locationName}, ${county}. EarthNest Florida handles zoning, design, permitting & construction. Free property evaluation — no obligation.`,
      wordBand: { minWords: 200, maxWords: 300 },
    })
  }

  pages.sort((a, b) => a.slug.localeCompare(b.slug))
  return pages
}

function writeLocalPagesData(pages) {
  const outPath = path.join(LIB_DIR, "local-pages-data.ts")
  const source = `export type LocalSeoPage = {
  slug: string
  locationName: string
  tier: 1 | 2 | 3
  county: string
  group: string
  isHub: boolean
  hubSlug: string
  jurisdiction: string
  isFlagged: boolean
  warning: string
  introParagraphs: string[]
  quickRules: string[]
  metaTitle: string
  metaDescription: string
  wordBand: { minWords: number; maxWords: number }
}

export const LOCAL_SEO_PAGES: LocalSeoPage[] = ${JSON.stringify(pages, null, 2)} as LocalSeoPage[]

export const LOCAL_SEO_PAGES_BY_SLUG = new Map(LOCAL_SEO_PAGES.map((page) => [page.slug, page]))

export function getLocalPageBySlug(slug: string) {
  return LOCAL_SEO_PAGES_BY_SLUG.get(slug)
}

export const LOCAL_SEO_PAGES_BY_COUNTY = LOCAL_SEO_PAGES.reduce<Record<string, LocalSeoPage[]>>(
  (acc, page) => {
    if (!acc[page.county]) acc[page.county] = []
    acc[page.county].push(page)
    return acc
  },
  {}
)
`
  fs.mkdirSync(LIB_DIR, { recursive: true })
  fs.writeFileSync(outPath, source)
}

function routeFileSource(slug) {
  return `import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"
import { getLocalPageBySlug } from "@/lib/local-pages-data"

const pageData = getLocalPageBySlug("${slug}")

export const metadata: Metadata = {
  title: pageData?.metaTitle,
  description: pageData?.metaDescription,
  alternates: { canonical: pageData ? \`/\${pageData.slug}\` : "/" },
  openGraph: {
    title: pageData?.metaTitle,
    description: pageData?.metaDescription,
    url: pageData ? \`/\${pageData.slug}\` : "/",
    images: [
      {
        url: "/og/local-page-default.jpg",
        width: 1200,
        height: 630,
        alt: "ADU Specialists in Central Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@earthnestfl",
    title: pageData?.metaTitle,
    description: pageData?.metaDescription,
    images: ["/og/local-page-default.jpg"],
  },
}

export default function Page() {
  if (!pageData) return null
  return <LocalLandingPage page={pageData} />
}
`
}

function writeRouteFiles(pages) {
  for (const page of pages) {
    const dir = path.join(APP_DIR, page.slug)
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(path.join(dir, "page.tsx"), routeFileSource(page.slug))
  }
}

function main() {
  const pages = makePages()
  writeLocalPagesData(pages)
  writeRouteFiles(pages)
  console.log(`Generated ${pages.length} local SEO pages and data source.`)
}

main()
