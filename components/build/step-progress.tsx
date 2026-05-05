"use client"

import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

/** Visible steps only (Choose Home → Customize → Inquiry); bracket labels stay [2][3][4]. */
export type BuildWizardStep = 1 | 2 | 3

const STEPS: Array<{ step: BuildWizardStep; displayIndex: number; label: string }> = [
  { step: 1, displayIndex: 2, label: "Choose Home" },
  { step: 2, displayIndex: 3, label: "Customize" },
  { step: 3, displayIndex: 4, label: "Inquiry" },
]

type StepProgressProps = {
  step: BuildWizardStep
  onStepClick: (next: BuildWizardStep) => void
  canVisitStep: (target: BuildWizardStep) => boolean
}

export function StepProgress({ step, onStepClick, canVisitStep }: StepProgressProps) {
  return (
    <div className="border-b border-border bg-background/95 backdrop-blur sticky top-[92px] z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <ol className="flex flex-wrap items-center gap-3 md:gap-6">
          {STEPS.map((item) => {
            const complete = item.step < step
            const active = item.step === step
            const enabled = canVisitStep(item.step)
            return (
              <li key={item.step} className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={!enabled}
                  onClick={() => onStepClick(item.step)}
                  className={cn(
                    "text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    active ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="inline-flex items-center gap-1">
                    {complete ? (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    ) : (
                      <span>[{item.displayIndex}]</span>
                    )}
                    {item.label}
                  </span>
                </button>
                {item.step < STEPS.length && <span className="text-muted-foreground">→</span>}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
