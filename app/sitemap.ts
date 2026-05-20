import type { MetadataRoute } from "next"
import { ESCAPE_CATALOG_PATH, escapeModelSlugs } from "@/lib/escape-tiny-homes-data"
import { LOCAL_SEO_PAGES } from "@/lib/local-pages-data"
import { getBlogSlugs, getAllPosts } from "@/lib/blog/load-posts"
import { BLOG_PILLARS } from "@/lib/blog/pillars"
import { getAllCommunitySlugParams, getDirectoryStateParams } from "@/lib/tiny-home-communities/repo"

const SITE_URL = "https://www.prefabricated.co"

function priorityForPath(path: string, tier?: number, isHub?: boolean) {
  if (path === "/") return 1.0
  if (
    path === "/adu-rules" ||
    path === "/earthnest-living-systems" ||
    path === "/free-adu-course" ||
    path === "/free-adu-course/starter-kit" ||
    isHub
  )
    return 0.9
  if (
    path === "/adu-calculator" ||
    path === "/escape-tiny-homes" ||
    path === "/qualify" ||
    path === "/florida-tiny-living-guide" ||
    path === "/florida-growing-zones-homestead-planning" ||
    path === "/closed-loop-homestead" ||
    path === "/tiny-home-communities" ||
    path === "/resources" ||
    path === "/blog" ||
    path === "/affiliate-disclosure" ||
    path === "/privacy" ||
    path === "/faq"
  )
    return 0.8
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
    "/free-adu-course",
    "/free-adu-course/starter-kit",
    "/earthnest-living-systems",
    "/eco-upgrades",
    "/florida-tiny-living-guide",
    "/florida-growing-zones-homestead-planning",
    "/closed-loop-homestead",
    "/tiny-home-communities",
    "/resources",
    "/blog",
    "/affiliate-disclosure",
    "/privacy",
    ESCAPE_CATALOG_PATH,
    `${ESCAPE_CATALOG_PATH}/success`,
    "/adu-calculator",
    "/faq",
    "/about",
    "/contact",
    "/qualify",
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

  const escapeHomes = escapeModelSlugs().map((slug) => ({
    url: `${SITE_URL}${ESCAPE_CATALOG_PATH}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }))

  const tinyStateHubs = getDirectoryStateParams().map(({ state }) => {
    const path = `/tiny-home-communities/${state}`
    return {
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    }
  })

  const tinyListings = getAllCommunitySlugParams().map(({ state, slug }) => {
    const path = `/tiny-home-communities/${state}/${slug}`
    return {
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.62,
    }
  })

  const blogPosts = getBlogSlugs().map((slug) => {
    const post = getAllPosts().find((p) => p.slug === slug)
    return {
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: post?.date ? new Date(post.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.64,
    }
  })

  const blogCategories = BLOG_PILLARS.map((pillar) => ({
    url: `${SITE_URL}/blog/category/${pillar.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }))

  const blogSearch = {
    url: `${SITE_URL}/blog/search`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.66,
  }

  return [...core, ...local, ...escapeHomes, ...tinyStateHubs, ...tinyListings, blogSearch, ...blogCategories, ...blogPosts]
}
