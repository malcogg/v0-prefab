import type { MetadataRoute } from "next"
import { LOCAL_SEO_PAGES } from "@/lib/local-pages-data"

const SITE_URL = "https://www.prefabricated.co"

function priorityForPath(path: string, tier?: number, isHub?: boolean) {
  if (path === "/") return 1.0
  if (path === "/adu-rules" || path === "/earthnest-living-systems" || isHub) return 0.9
  if (path === "/adu-calculator" || path === "/florida-tiny-living-guide" || path === "/resources" || path === "/faq") return 0.8
  if (path === "/adu-checklist") return 0.7
  if (tier === 1) return 0.8
  if (tier === 2) return 0.7
  return 0.6
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const corePaths = [
    "/",
    "/adu-rules",
    "/earthnest-living-systems",
    "/eco-upgrades",
    "/florida-tiny-living-guide",
    "/resources",
    "/adu-calculator",
    "/faq",
    "/about",
    "/contact",
    "/adu-checklist",
  ]

  const core = corePaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: priorityForPath(path),
  }))

  const local = LOCAL_SEO_PAGES.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: priorityForPath(`/${page.slug}`, page.tier, page.isHub),
  }))

  return [...core, ...local]
}
