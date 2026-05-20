/** Blog posts implemented as `app/blog/<slug>/page.tsx` (not markdown). */
export type TsxBlogPageMeta = {
  slug: string
  title: string
  description: string
  /** ISO date YYYY-MM-DD */
  date: string
  pillar?: string
  category?: string
}

export const TSX_BLOG_PAGES: TsxBlogPageMeta[] = [
  {
    slug: "small-space-food-florida-backyard",
    title: "Small-Space Food in a Florida Backyard (or ADU Pad)",
    description:
      "Practical guide to sun, soil, water, and vertical growing on tight lots, ADUs, and rental-friendly setups in Florida.",
    date: "2026-05-17",
    pillar: "regenerative",
    category: "Regenerative Living · Small-space food",
  },
]

const TSX_SLUG_SET = new Set(TSX_BLOG_PAGES.map((p) => p.slug))

export function isTsxBlogSlug(slug: string): boolean {
  return TSX_SLUG_SET.has(slug)
}
