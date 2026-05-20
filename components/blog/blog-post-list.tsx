import Link from "next/link"
import { format, parseISO } from "date-fns"

import { getPillarMeta } from "@/lib/blog/pillars"
import type { BlogPost } from "@/lib/blog/types"
import { parsePillar } from "@/lib/blog/cta-types"

type BlogPostListProps = {
  posts: BlogPost[]
  emptyMessage?: string
}

export function BlogPostList({ posts, emptyMessage = "No articles match your search." }: BlogPostListProps) {
  if (posts.length === 0) {
    return <p className="text-muted-foreground">{emptyMessage}</p>
  }

  return (
    <ul className="flex flex-col gap-6 max-w-3xl">
      {posts.map((post) => {
        const pillar = parsePillar(post.pillar)
        const pillarMeta = pillar ? getPillarMeta(pillar) : null
        return (
          <li key={post.slug}>
            <article className="rounded-xl border border-border bg-background p-6 md:p-8 shadow-sm transition-colors hover:border-primary/30">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                <time dateTime={post.date} className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                  {format(parseISO(post.date), "MMMM d, yyyy")}
                </time>
                {pillarMeta ? (
                  <Link
                    href={`/blog/category/${pillarMeta.id}`}
                    className="text-xs font-semibold tracking-wide uppercase text-teal-800 hover:text-primary transition-colors"
                  >
                    {pillarMeta.shortLabel}
                  </Link>
                ) : post.category ? (
                  <span className="text-xs font-semibold tracking-wide uppercase text-teal-800">{post.category}</span>
                ) : null}
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-1 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex mt-4 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Read article →
              </Link>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
