import Link from "next/link"

import type { SiteSearchHit } from "@/lib/site-search/types"

const KIND_STYLES: Record<SiteSearchHit["kind"], string> = {
  blog: "text-teal-800",
  guide: "text-primary",
  tool: "text-[oklch(0.38_0.1_265)]",
  community: "text-[oklch(0.38_0.1_265)]",
  catalog: "text-foreground/80",
}

type SiteSearchResultsProps = {
  results: SiteSearchHit[]
  emptyMessage?: string
}

export function SiteSearchResults({
  results,
  emptyMessage = "No results matched your search. Try ADU, communities, rainwater, or zoning.",
}: SiteSearchResultsProps) {
  if (results.length === 0) {
    return <p className="text-muted-foreground">{emptyMessage}</p>
  }

  return (
    <ul className="flex flex-col gap-4 max-w-3xl">
      {results.map((hit) => (
        <li key={hit.href}>
          <article className="rounded-xl border border-border bg-background p-6 md:p-7 shadow-sm transition-colors hover:border-primary/30">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <span
                className={`text-xs font-semibold tracking-wide uppercase ${KIND_STYLES[hit.kind]}`}
              >
                {hit.kindLabel}
              </span>
            </div>
            <h2 className="font-serif text-xl md:text-2xl text-foreground mb-2">
              <Link href={hit.href} className="hover:text-primary transition-colors">
                {hit.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{hit.description}</p>
            <Link
              href={hit.href}
              className="inline-flex mt-4 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Open →
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}
