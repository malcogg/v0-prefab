"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type { BuildSession, BuildStep } from "@/lib/build/session"
import { calculateEstimatedTotal, calculateOptionsTotal, getSelectedModel } from "@/lib/build/session"
import { formatCurrency } from "@/lib/build/pricing"

type SummaryBarProps = {
  session: BuildSession
  step: BuildStep
  canGoNext: boolean
  onBack: () => void
  onNext: () => void
  nextLabel?: string
}

export function SummaryBar({ session, step, canGoNext, onBack, onNext, nextLabel }: SummaryBarProps) {
  const lot = session.selectedLot
  const model = getSelectedModel(session.selectedModelId)
  const optionsTotal = calculateOptionsTotal(session)
  const estimatedTotal = calculateEstimatedTotal(session)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/98 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="hidden md:grid grid-cols-4 gap-3 items-center">
          <div className="text-xs text-muted-foreground">
            Lot: {lot ? `${lot.address}, ${lot.city} — ${formatCurrency(lot.askingPrice)}` : "—"}
          </div>
          <div className="text-xs text-muted-foreground">
            Home: {model ? `${model.name} — from ${formatCurrency(model.startingAt)}` : "—"}
          </div>
          <div className="text-xs font-semibold text-foreground">
            Est. Total: {estimatedTotal > 0 ? `${formatCurrency(estimatedTotal)}+` : "—"}
            {optionsTotal > 0 ? <span className="text-muted-foreground font-normal"> (options: {formatCurrency(optionsTotal)})</span> : null}
          </div>
          <div className="justify-self-end flex items-center gap-2">
            <button
              type="button"
              onClick={onBack}
              disabled={step <= 1}
              className="inline-flex items-center px-3 py-2 border border-border text-sm rounded disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!canGoNext}
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded disabled:opacity-40"
            >
              {nextLabel ?? "Next Step"}
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between gap-3">
          <div className="text-xs">
            <p className="text-muted-foreground">Estimated Total</p>
            <p className="font-semibold text-foreground">{estimatedTotal > 0 ? `${formatCurrency(estimatedTotal)}+` : "—"}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onBack}
              disabled={step <= 1}
              className="px-3 py-2 border border-border text-sm rounded disabled:opacity-40"
            >
              Back
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!canGoNext}
              className="px-3 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
