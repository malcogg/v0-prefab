import type { BlogPost } from "@/lib/blog/types"

export function resolveRelatedPosts(current: BlogPost, all: BlogPost[], limit = 3): BlogPost[] {
  if (current.related?.length) {
    const bySlug = new Map(all.map((p) => [p.slug, p]))
    return current.related
      .map((s) => bySlug.get(s))
      .filter((p): p is BlogPost => p != null && p.slug !== current.slug)
      .slice(0, limit)
  }

  if (current.pillar) {
    const matches = all.filter((p) => p.slug !== current.slug && p.pillar === current.pillar)
    if (matches.length >= limit) return matches.slice(0, limit)
  }

  const categoryPrefix = current.category?.split("·")[0]?.trim().toLowerCase()
  if (categoryPrefix) {
    const matches = all.filter(
      (p) =>
        p.slug !== current.slug &&
        p.category?.toLowerCase().startsWith(categoryPrefix),
    )
    if (matches.length > 0) return matches.slice(0, limit)
  }

  return all.filter((p) => p.slug !== current.slug && p.body).slice(0, limit)
}
