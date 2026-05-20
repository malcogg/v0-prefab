export const SITE_URL = "https://www.prefabricated.co"

/** Turn `/images/foo.png` or bare paths into `${SITE_URL}/...`; leave absolute http(s) URLs unchanged. */
export function absoluteSiteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_URL}${path}`
}

export const DEFAULT_SEO = {
  title: "Prefabricated.co — Florida Prefab ADUs & Eco Tiny Living",
  description:
    "Florida prefab home, ADU, backyard income unit, and eco-conscious tiny living specialists. Explore legal foundation-built options and EarthNest Living Systems.",
}

export type PageTitleSuffix = "local-adu" | "default"

const LOCAL_ADU_TITLE_SUFFIX = "Prefabricated.co — EarthNest Florida"

/**
 * Canonical title pattern for marketing pages.
 * Local ADU example: `Alafaya ADU | Prefabricated.co — EarthNest Florida`
 */
export function getPageTitle(opts: { primary: string; suffix?: PageTitleSuffix }): string {
  if (opts.suffix === "local-adu") {
    return `${opts.primary} | ${LOCAL_ADU_TITLE_SUFFIX}`
  }
  return opts.primary
}

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Prefabricated.co",
  alternateName: "Prefabricated.co — Florida Prefab Homes, Tiny Living, and ADUs",
  description:
    "Central Florida prefab home, tiny living, and eco-conscious ADU specialists. We help homeowners and investors explore legal, permitted, foundation-built accessory dwelling units, backyard income units, and EarthNest Living Systems.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/api/og?v=default`,
  email: "prefabflorida@gmail.com",
  telephone: "+13217473778",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5383,
    longitude: -81.3792,
  },
  areaServed: [
    { "@type": "State", name: "Florida" },
    { "@type": "County", name: "Orange County", addressRegion: "FL" },
    { "@type": "City", name: "Orlando", addressRegion: "FL" },
    { "@type": "County", name: "Seminole County", addressRegion: "FL" },
    { "@type": "County", name: "Osceola County", addressRegion: "FL" },
    { "@type": "County", name: "Lake County", addressRegion: "FL" },
  ],
  serviceType: [
    "ADU Construction",
    "Accessory Dwelling Unit Permitting",
    "ADU Design",
    "ADU Zoning Consultation",
    "ADU Site Evaluation",
    "Prefab Backyard Homes",
    "Tiny Home Education",
    "Eco-Conscious Living Systems",
    "Sustainable Home Upgrades",
  ],
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
