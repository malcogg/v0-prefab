import { getAllPosts } from "@/lib/blog/load-posts"
import { ESCAPE_CATALOG_PATH, ESCAPE_TINY_HOME_MODELS } from "@/lib/escape-tiny-homes-data"
import { getAllCommunities } from "@/lib/tiny-home-communities/repo"

import type { SiteSearchHit, SiteSearchKind } from "./types"

const KIND_LABELS: Record<SiteSearchKind, string> = {
  blog: "Blog",
  guide: "Guide",
  tool: "Tool",
  community: "Community",
  catalog: "Escape catalog",
}

const SITE_PAGES: Array<{
  title: string
  description: string
  href: string
  kind: SiteSearchKind
  keywords?: string[]
}> = [
  {
    title: "See if my property qualifies",
    description: "Free property evaluation for Florida ADU feasibility, setbacks, and build lane.",
    href: "/qualify",
    kind: "tool",
    keywords: ["qualify", "evaluation", "feasibility", "adu"],
  },
  {
    title: "ADU Rules by County",
    description: "Central Florida ADU rules, size limits, setbacks, and jurisdiction notes.",
    href: "/adu-rules",
    kind: "guide",
    keywords: ["zoning", "permitting", "orange county", "orlando"],
  },
  {
    title: "ADU Investment Calculator",
    description: "Estimate rent, cash flow, cap rate, and 10-year return for Florida ADUs.",
    href: "/adu-calculator",
    kind: "tool",
    keywords: ["roi", "rental income", "budget"],
  },
  {
    title: "Free Florida ADU Course",
    description: "Property eligibility, costs, design, permitting, rental income, and EarthNest upgrades.",
    href: "/free-adu-course",
    kind: "guide",
    keywords: ["course", "starter kit", "education"],
  },
  {
    title: "Florida ADU Starter Kit",
    description: "Printable workbook with feasibility prompts, budget worksheets, and builder questions.",
    href: "/free-adu-course#starter-kit",
    kind: "guide",
    keywords: ["checklist", "download", "workbook"],
  },
  {
    title: "ADU Feasibility Checklist",
    description: "Practical property questions before plans, pricing, or permitting.",
    href: "/adu-checklist",
    kind: "guide",
  },
  {
    title: "Florida Tiny Living Guide",
    description: "ADUs vs prefab vs modular vs tiny homes on wheels in Florida.",
    href: "/florida-tiny-living-guide",
    kind: "guide",
    keywords: ["thow", "rv", "modular"],
  },
  {
    title: "Florida Growing Zones & Homestead Planning",
    description: "USDA zone finder, frost guidance, lunar rhythm prompts, and homestead reports.",
    href: "/florida-growing-zones-homestead-planning",
    kind: "tool",
    keywords: ["zones", "lunar", "planting", "homestead"],
  },
  {
    title: "Closed-Loop Homestead Guide",
    description: "Food cards, solar-to-soil systems, and nutrient loops for small Florida lots.",
    href: "/closed-loop-homestead",
    kind: "guide",
    keywords: ["permaculture", "food forest", "compost"],
  },
  {
    title: "EarthNest Living Systems",
    description: "Eco-conscious homes integrating shelter, energy, water, food, and automation.",
    href: "/earthnest-living-systems",
    kind: "guide",
    keywords: ["earthnest", "modular", "prefab adu"],
  },
  {
    title: "Eco Upgrades",
    description: "Solar-ready, water, landscape, passive cooling, and smart monitoring layers.",
    href: "/eco-upgrades",
    kind: "guide",
  },
  {
    title: "Resources Hub",
    description: "Courses, calculators, county rules, tiny living guides, and homestead tools.",
    href: "/resources",
    kind: "guide",
  },
  {
    title: "Blog",
    description: "Florida ADU, tiny living, regenerative homestead, and community directory articles.",
    href: "/blog",
    kind: "blog",
  },
  {
    title: "Tiny Home Communities Directory",
    description: "Curated Florida and national tiny-home villages with official operator links.",
    href: "/tiny-home-communities",
    kind: "community",
    keywords: ["villages", "parks", "rv spam"],
  },
  {
    title: "Browse Florida Communities",
    description: "Florida tiny-home communities by region—Tiny Town Orlando, Peacewind, Escape Tampa Bay, and more.",
    href: "/tiny-home-communities/florida",
    kind: "community",
    keywords: ["florida", "orlando", "tampa"],
  },
  {
    title: "Escape Tiny Homes Catalog",
    description: "2026 Escape factory-built tiny home models—Traveler, Vista, ONE XL, and more.",
    href: ESCAPE_CATALOG_PATH,
    kind: "catalog",
    keywords: ["escape", "factory", "rvia"],
  },
  {
    title: "Build Your Backyard Home",
    description: "Configure and price EarthNest and site-built ADU lanes.",
    href: "/build",
    kind: "tool",
  },
  {
    title: "FAQ",
    description: "Common questions about Florida ADUs, tiny homes, and Prefabricated.co services.",
    href: "/faq",
    kind: "guide",
  },
  {
    title: "Contact",
    description: "Reach the Prefabricated.co team for property and product questions.",
    href: "/contact",
    kind: "guide",
  },
]

function withKindLabel(hit: Omit<SiteSearchHit, "kindLabel">): SiteSearchHit {
  return { ...hit, kindLabel: KIND_LABELS[hit.kind] }
}

export function buildSiteSearchIndex(): SiteSearchHit[] {
  const blogHits = getAllPosts().map((post) =>
    withKindLabel({
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      kind: "blog",
    }),
  )

  const pageHits = SITE_PAGES.map((page) =>
    withKindLabel({
      title: page.title,
      description: page.description,
      href: page.href,
      kind: page.kind,
    }),
  )

  const communityHits = getAllCommunities().map((c) =>
    withKindLabel({
      title: c.name,
      description: c.description,
      href: `/tiny-home-communities/${c.stateSlug}/${c.slug}`,
      kind: "community",
    }),
  )

  const escapeHits = ESCAPE_TINY_HOME_MODELS.map((m) =>
    withKindLabel({
      title: m.fullName,
      description: m.description,
      href: `${ESCAPE_CATALOG_PATH}/${m.slug}`,
      kind: "catalog",
    }),
  )

  // Pages first (curated), then communities, catalog, blog — dedupe by href
  const seen = new Set<string>()
  const merged = [...pageHits, ...communityHits, ...escapeHits, ...blogHits]
  return merged.filter((hit) => {
    if (seen.has(hit.href)) return false
    seen.add(hit.href)
    return true
  })
}
