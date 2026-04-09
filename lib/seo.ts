export const SITE_URL = "https://www.prefabricated.co"

export const DEFAULT_SEO = {
  title: "EarthNest Florida — Permitted ADU Specialists in Central Florida",
  description:
    "Central Florida's eco-conscious ADU specialists. We build legal, permitted, foundation-built ADUs in Orange County, Orlando, and surrounding areas. Free property evaluation.",
}

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "EarthNest Florida",
  alternateName: "EarthNest Florida ADU",
  description:
    "Central Florida's eco-conscious ADU specialists. We help homeowners and investors add legal, permitted, foundation-built accessory dwelling units that generate income and build long-term wealth.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/og/homepage.jpg`,
  telephone: "+14075550100",
  email: "info@earthnestflorida.com",
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
  ],
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: [
    "https://www.instagram.com/earthnestflorida",
    "https://www.facebook.com/earthnestflorida",
    "https://www.youtube.com/@earthnestflorida",
  ],
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
