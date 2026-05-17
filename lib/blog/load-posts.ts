import fs from "fs"
import path from "path"

import type { BlogFrontmatter, BlogPost } from "./types"

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
  }
  return { meta, body }
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

export function getAllPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p != null)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
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
    body,
  }
}
