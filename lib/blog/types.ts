export type BlogFrontmatter = {
  title: string
  description: string
  /** ISO date YYYY-MM-DD */
  date: string
}

export type BlogPost = BlogFrontmatter & {
  slug: string
  body: string
}
