export type BlogFrontmatter = {
  title: string
  description: string
  /** ISO date YYYY-MM-DD */
  date: string
  /** Optional eyebrow, e.g. "ADU basics · Florida" */
  category?: string
  /** Optional, e.g. "12 min read" */
  readTime?: string
  /** Mid + default end CTA variant */
  cta?: string
  /** Override end CTA variant */
  endCta?: string
  /** Optional bottom lead magnet embed */
  leadMagnet?: string
  /** legal | regenerative | investment | communities */
  pillar?: string
  /** Slugs for related reads footer (max 3 shown) */
  related?: string[]
}

export type BlogPost = BlogFrontmatter & {
  slug: string
  body: string
}
