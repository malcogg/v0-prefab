export type BlogFrontmatter = {
  title: string
  description: string
  /** ISO date YYYY-MM-DD */
  date: string
  /** Optional eyebrow, e.g. "ADU basics · Florida" */
  category?: string
  /** Optional, e.g. "12 min read" */
  readTime?: string
}

export type BlogPost = BlogFrontmatter & {
  slug: string
  body: string
}
