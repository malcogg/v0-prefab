import type { BlogPillar } from "./cta-types"
import { parsePillarFromQuery } from "./pillars"
import type { BlogPost } from "./types"

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim()
}

export function filterPostsByPillar(posts: BlogPost[], pillar: BlogPillar): BlogPost[] {
  return posts.filter((post) => post.pillar === pillar)
}

export function searchBlogPosts(posts: BlogPost[], rawQuery: string): BlogPost[] {
  const query = normalize(rawQuery)
  if (!query) return posts

  const pillarMatch = parsePillarFromQuery(query)
  if (pillarMatch) {
    const pillarPosts = filterPostsByPillar(posts, pillarMatch)
    if (pillarPosts.length > 0) return pillarPosts
  }

  const tokens = query.split(" ").filter(Boolean)
  return posts.filter((post) => {
    const haystack = normalize(
      [post.title, post.description, post.category ?? "", post.pillar ?? "", post.slug.replace(/-/g, " ")].join(" "),
    )
    return tokens.every((token) => haystack.includes(token))
  })
}
