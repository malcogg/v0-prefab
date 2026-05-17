import Image from "next/image"
import Link from "next/link"

import { ESCAPE_CATALOG_PATH, formatUsd, type EscapeTinyHomeModel } from "@/lib/escape-tiny-homes-data"

export function EscapeModelCard({
  model,
  priorityImage,
}: {
  model: EscapeTinyHomeModel
  priorityImage?: boolean
}) {
  return (
    <Link
      href={`${ESCAPE_CATALOG_PATH}/${model.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_2px_oklch(0_0_0/0.04)] ring-1 ring-foreground/[0.03] transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:ring-primary/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={model.heroImage}
          alt={model.fullName}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priorityImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
        <div className="absolute bottom-3.5 left-3.5 right-3.5">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
            Escape · 2026
          </p>
          <p className="font-serif text-[1.35rem] text-white text-balance leading-tight tracking-tight">
            {model.shortLabel}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.14em] mb-1.5">{model.fullName}</p>
        <p className="text-sm text-foreground/88 leading-relaxed line-clamp-3 mb-4">{model.description}</p>
        <div className="mt-auto pt-4 border-t border-border/80 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.16em] mb-0.5">Your price</p>
            <p className="text-xl font-semibold text-primary tabular-nums tracking-tight">
              {formatUsd(model.sellingPriceUsd)}
            </p>
            <p className="text-xs text-muted-foreground tabular-nums">
              <span className="line-through">{formatUsd(model.basePriceUsd)}</span>
              <span className="ml-1.5 text-[10px] uppercase tracking-wide">MSRP</span>
            </p>
          </div>
          <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors shrink-0">
            View details →
          </span>
        </div>
      </div>
    </Link>
  )
}
