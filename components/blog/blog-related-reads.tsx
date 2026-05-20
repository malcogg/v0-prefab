import Link from "next/link"
import type { BlogPost } from "@/lib/blog/types"

export function BlogRelatedReads({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  return (
    <footer className="mt-16 pt-8 border-t border-neutral-200">
      <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Related reads</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50 leading-snug"
          >
            <span className="text-primary font-medium">→ {post.title}</span>
          </Link>
        ))}
      </div>
    </footer>
  )
}
