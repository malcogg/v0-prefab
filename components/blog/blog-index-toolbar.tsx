"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

import { Input } from "@/components/ui/input"
import { BLOG_PILLARS } from "@/lib/blog/pillars"
import type { BlogPillar } from "@/lib/blog/cta-types"
import { cn } from "@/lib/utils"

type BlogIndexToolbarProps = {
  /** Pre-filled search query on search results page */
  initialQuery?: string
  /** Highlight active category pill */
  activePillar?: BlogPillar
}

export function BlogIndexToolbar({ initialQuery = "", activePillar }: BlogIndexToolbarProps) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) {
      router.push("/blog")
      return
    }
    router.push(`/blog/search?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <div className="mb-10 space-y-5">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl" role="search">
        <label htmlFor="blog-search" className="sr-only">
          Search blog articles
        </label>
        <Input
          id="blog-search"
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by topic, keyword, or pillar…"
          className="h-11 flex-1 bg-background"
          autoComplete="off"
        />
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.58_0.13_192)]"
        >
          Search
        </button>
      </form>

      <div className="flex flex-wrap gap-2" aria-label="Browse by category">
        <Link
          href="/blog"
          className={cn(
            "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
            !activePillar
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
          )}
        >
          All
        </Link>
        {BLOG_PILLARS.map((pillar) => (
          <Link
            key={pillar.id}
            href={`/blog/category/${pillar.id}`}
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
              activePillar === pillar.id
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {pillar.shortLabel}
          </Link>
        ))}
      </div>
    </div>
  )
}
