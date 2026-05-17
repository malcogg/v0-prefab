import Image from "next/image"
import Link from "next/link"
import type { TinyHomeCommunity } from "@/lib/tiny-home-communities/schema"
import { STATUS_LABELS } from "@/lib/tiny-home-communities/display"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { CommunityAmenityBadges } from "@/components/tiny-home-communities/community-amenity-badges"

type Props = { community: TinyHomeCommunity }

export function CommunityCard({ community }: Props) {
  const href = `/tiny-home-communities/${community.stateSlug}/${community.slug}`

  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-colors hover:border-primary/35">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={community.image.url}
          alt={community.image.alt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-14">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/75">{community.macroRegion}</p>
          <p className="text-[11px] font-medium text-white/85 line-clamp-1">{community.regionLabel}</p>
          <h2 className="font-serif text-xl text-white text-balance leading-snug">{community.name}</h2>
        </div>
      </Link>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="secondary">{STATUS_LABELS[community.status]}</Badge>
          {community.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-muted-foreground font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <CommunityAmenityBadges flags={community.amenityFlags} variant="compact" limit={6} />
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{community.description}</p>
        <div className="flex items-start gap-2 text-sm text-foreground mt-auto pt-2">
          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
          <span>
            {community.city} · {community.county}
          </span>
        </div>
        <Link
          href={href}
          className="inline-flex text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          View listing
        </Link>
      </div>
    </article>
  )
}
