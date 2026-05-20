import fs from "fs"
import path from "path"

import type { BlogFrontmatter, BlogPost } from "./types"
import { TSX_BLOG_PAGES } from "./tsx-posts"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

function parseFrontmatter(raw: string): { meta: Partial<BlogFrontmatter>; body: string } {
  if (!raw.startsWith("---\n")) {
    return { meta: {}, body: raw.trim() }
  }
  const close = raw.indexOf("\n---\n", 4)
  if (close === -1) {
    return { meta: {}, body: raw.trim() }
  }
  const fmBlock = raw.slice(4, close).trim()
  const body = raw.slice(close + 5).trim()
  const meta: Partial<BlogFrontmatter> = {}
  for (const line of fmBlock.split("\n")) {
    const idx = line.indexOf(":")
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (key === "title") meta.title = value
    else if (key === "description") meta.description = value
    else if (key === "date") meta.date = value
    else if (key === "category") meta.category = value
    else if (key === "readTime") meta.readTime = value
  }
  return { meta, body }
}

export function getMarkdownBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

export function getBlogSlugs(): string[] {
  const md = getMarkdownBlogSlugs()
  const tsx = TSX_BLOG_PAGES.map((p) => p.slug)
  return [...new Set([...md, ...tsx])]
}

export function getAllPosts(): BlogPost[] {
  const mdPosts = getMarkdownBlogSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p != null)
  const tsxPosts: BlogPost[] = TSX_BLOG_PAGES.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    body: "",
  }))
  return [...mdPosts, ...tsxPosts].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const file = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, "utf8")
  const { meta, body } = parseFrontmatter(raw)
  if (!meta.title || !meta.description || !meta.date) return null
  return {
    slug,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    category: meta.category,
    readTime: meta.readTime,
    body,
  }
}
