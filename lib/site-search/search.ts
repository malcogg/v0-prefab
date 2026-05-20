import { buildSiteSearchIndex } from "./build-index"
import type { SiteSearchHit } from "./types"

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim()
}

export function searchSiteIndex(rawQuery: string, index?: SiteSearchHit[]): SiteSearchHit[] {
  const query = normalize(rawQuery)
  const items = index ?? buildSiteSearchIndex()
  if (!query) return items.slice(0, 24)

  const tokens = query.split(" ").filter(Boolean)
  const scored = items
    .map((item) => {
      const haystack = normalize(
        [item.title, item.description, item.kindLabel, item.href.replace(/\//g, " ")].join(" "),
      )
      const matchesAll = tokens.every((token) => haystack.includes(token))
      if (!matchesAll) return null
      const titleNorm = normalize(item.title)
      let score = 0
      if (titleNorm.includes(query)) score += 10
      for (const token of tokens) {
        if (titleNorm.startsWith(token)) score += 3
        else if (titleNorm.includes(token)) score += 1
      }
      return { item, score }
    })
    .filter((row): row is { item: SiteSearchHit; score: number } => row != null)
    .sort((a, b) => b.score - a.score)

  return scored.map((row) => row.item)
}
