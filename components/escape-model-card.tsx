import Image from "next/image"
import Link from "next/link"

import { formatUsd, type EscapeTinyHomeModel } from "@/lib/escape-tiny-homes-data"

export function EscapeModelCard({
  model,
  priorityImage,
}: {
  model: EscapeTinyHomeModel
  priorityImage?: boolean
}) {
  return (
    <Link
      href={`/tiny-homes/${model.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all hover:border-primary/35 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={model.heroImage}
          alt={model.fullName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priorityImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
            Escape 2026
          </p>
          <p className="font-serif text-xl text-white text-balance leading-tight">{model.shortLabel}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{model.fullName}</p>
        <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3 mb-4">{model.description}</p>
        <div className="mt-auto pt-4 border-t border-border flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
              Your price
            </p>
            <p className="text-lg font-semibold text-primary tabular-nums">{formatUsd(model.sellingPriceUsd)}</p>
            <p className="text-xs text-muted-foreground line-through tabular-nums">
              MSRP {formatUsd(model.basePriceUsd)}
            </p>
          </div>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            View details →
          </span>
        </div>
      </div>
    </Link>
  )
}
