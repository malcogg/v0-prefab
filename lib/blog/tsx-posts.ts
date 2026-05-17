/** Blog posts implemented as `app/blog/<slug>/page.tsx` (not markdown). */
export type TsxBlogPageMeta = {
  slug: string
  title: string
  description: string
  /** ISO date YYYY-MM-DD */
  date: string
}

export const TSX_BLOG_PAGES: TsxBlogPageMeta[] = [
  {
    slug: "small-space-food-florida-backyard",
    title: "Small-Space Food in a Florida Backyard (or ADU Pad)",
    description:
      "Practical guide to sun, soil, water, and vertical growing on tight lots, ADUs, and rental-friendly setups in Florida.",
    date: "2026-05-17",
  },
  {
    slug: "rainwater-harvesting-low-footprint-resilience",
    title: "Rainwater Harvesting & Low-Footprint Water Resilience",
    description:
      "Practical systems for collecting, filtering, and using rainwater on small lots, ADUs, and tiny homes in Florida.",
    date: "2026-05-17",
  },
]

const TSX_SLUG_SET = new Set(TSX_BLOG_PAGES.map((p) => p.slug))

export function isTsxBlogSlug(slug: string): boolean {
  return TSX_SLUG_SET.has(slug)
}
