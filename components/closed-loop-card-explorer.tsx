"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import type { ClosedLoopCard } from "@/lib/closed-loop-guide-data"

type ClosedLoopCardExplorerProps = {
  cards: ClosedLoopCard[]
  ariaLabel: string
}

export function ClosedLoopCardExplorer({ cards, ariaLabel }: ClosedLoopCardExplorerProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const active = openId ? (cards.find((c) => c.id === openId) ?? null) : null

  return (
    <>
      <div className="flex flex-wrap gap-2.5 md:gap-3" aria-label={ariaLabel}>
        {cards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => setOpenId(card.id)}
            className="group flex min-w-[4.75rem] flex-col items-center rounded-lg border border-border/80 bg-background px-2.5 py-2.5 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/45 hover:bg-[oklch(0.99_0.01_85)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
          >
            <span
              className="text-2xl leading-none transition-transform duration-200 group-hover:scale-[1.12]"
              aria-hidden
            >
              {card.emoji}
            </span>
            <span className="mt-1.5 text-center text-[10px] font-medium leading-tight text-muted-foreground transition-colors duration-200 group-hover:text-foreground md:text-[11px]">
              {card.label}
            </span>
          </button>
        ))}
      </div>

      <Dialog
        open={openId !== null}
        onOpenChange={(open) => {
          if (!open) setOpenId(null)
        }}
      >
        <DialogContent className="gap-0 overflow-hidden border-border bg-background p-0 sm:max-w-md">
          {active ? (
            <>
              <div className="flex items-start gap-4 border-b border-border/60 bg-[oklch(0.97_0.02_155)] px-6 pt-6 pb-4">
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.9_0.07_155)] text-4xl shadow-inner"
                  aria-hidden
                >
                  {active.emoji}
                </div>
                <div className="min-w-0 pt-0.5">
                  <DialogTitle className="font-serif text-left text-xl text-foreground">
                    {active.label}
                  </DialogTitle>
                  <p className="mt-1 text-sm font-medium text-primary">{active.role}</p>
                </div>
              </div>
              <div className="max-h-[min(70vh,32rem)] space-y-4 overflow-y-auto px-6 py-5">
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {active.summary}
                </DialogDescription>
                <div className="rounded-lg border border-dashed border-primary/25 bg-primary/[0.06] px-3 py-2.5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    In the loop
                  </p>
                  <p className="text-sm leading-snug text-foreground/90">{active.flowCaption}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    What you can do
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {active.practices.map((line) => (
                      <li key={line} className="flex gap-2 leading-relaxed">
                        <span className="mt-0.5 text-primary" aria-hidden>
                          •
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
