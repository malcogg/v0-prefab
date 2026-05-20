import Link from "next/link"
import type { SiteFaqSegment } from "@/lib/site-faq-data"

export function SiteFaqAnswer({ segments }: { segments: SiteFaqSegment[] }) {
  return (
    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
      {segments.map((segment, index) =>
        typeof segment === "string" ? (
          <span key={index}>{segment}</span>
        ) : (
          <Link key={index} href={segment.href} className="text-primary hover:underline">
            {segment.link}
          </Link>
        ),
      )}
    </p>
  )
}
