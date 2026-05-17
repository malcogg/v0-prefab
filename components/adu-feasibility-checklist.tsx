"use client"

import { useCallback, useEffect, useId, useMemo, useState } from "react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "prefab_adu_checklist_v1"

export const ADU_FEASIBILITY_ITEMS = [
  {
    id: "jurisdiction",
    label: "Zoning & ADU allowance",
    detail:
      "Confirm your parcel’s zoning (and any municipal ADU program) allows an accessory dwelling on your lot type. Cross-check your county hub and /adu-rules — city and unincorporated rules differ.",
  },
  {
    id: "hoa",
    label: "HOA & deed restrictions",
    detail:
      "Read recorded covenants before you size a unit. Private deed restrictions can prohibit a detached ADU even when local zoning allows one.",
  },
  {
    id: "isr",
    label: "Impervious surface & lot coverage",
    detail:
      "Total roofs, driveways, patios, pool decks, and walks against local ISR or lot-coverage caps. New footprint must fit what’s left under the limit.",
  },
  {
    id: "setbacks",
    label: "Setbacks & structure separation",
    detail:
      "Verify side and rear setbacks, easement lines, and minimum spacing between the primary home and a detached ADU. Flag any applicable county separation rules.",
  },
  {
    id: "utilities",
    label: "Utilities & septic",
    detail:
      "Confirm municipal sewer connection or adequately sized septic and drain field for added bedrooms and fixtures. Undersized systems are a common permit stop.",
  },
  {
    id: "flood",
    label: "Flood zone & finished floor",
    detail:
      "Check FEMA flood maps and local elevation or floodplain rules so finished floor and openings meet current requirements.",
  },
  {
    id: "easements",
    label: "Easements & buildable envelope",
    detail:
      "Locate utility, drainage, conservation, and access easements on the survey or GIS — they shrink where foundations and utilities may go.",
  },
  {
    id: "trees",
    label: "Trees, canopy & site access",
    detail:
      "Identify protected, historic, or specimen trees and root protection zones. Confirm crane or module delivery paths and staging won’t violate tree code.",
  },
  {
    id: "parking",
    label: "Parking & emergency access",
    detail:
      "Meet off-street parking and fire-access requirements. Some overlays waive parking for smaller units — confirm against your jurisdiction.",
  },
  {
    id: "ownership",
    label: "Ownership, occupancy & rental intent",
    detail:
      "Align with homestead, single-ownership, or occupancy rules where they apply. Decide long-term vs short-term rental up front — many Florida jurisdictions restrict STR for ADUs.",
  },
] as const

function loadChecked(): Set<string> {
  if (typeof window === "undefined") return new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return new Set()
    return new Set(parsed.filter((x): x is string => typeof x === "string"))
  } catch {
    return new Set()
  }
}

function saveChecked(ids: Set<string>) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
  } catch {
    /* ignore quota */
  }
}

export function ADUFeasibilityChecklist({ className }: { className?: string }) {
  const baseId = useId()
  const [checked, setChecked] = useState<Set<string>>(() => new Set())
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setChecked(loadChecked())
    setHydrated(true)
  }, [])

  const toggle = useCallback((id: string, next: boolean) => {
    setChecked((prev) => {
      const s = new Set(prev)
      if (next) s.add(id)
      else s.delete(id)
      saveChecked(s)
      return s
    })
  }, [])

  const total = ADU_FEASIBILITY_ITEMS.length
  const count = checked.size
  const progressLabel = useMemo(() => `${count} of ${total} verified`, [count, total])

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-[oklch(0.992_0.006_88)] p-6 md:p-8 print:border-foreground/20 print:bg-white",
        className,
      )}
    >
      <h2 className="font-serif text-xl md:text-2xl text-foreground mb-2">10-point ADU feasibility checklist</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-3xl">
        Work top to bottom before you lock a floor plan or deposit. Frame this as a <strong className="text-foreground/90">systemized guide</strong> to what to verify on your parcel — not a definitive statement of what is allowed in your jurisdiction.
      </p>
      <p className="rounded-lg border border-border/80 bg-background/90 px-3 py-2.5 text-xs text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        <strong className="text-foreground/90">Disclaimer:</strong> This checklist is educational only. It does not replace a survey, engineered plans, formal zoning determination, or advice from a land-use attorney. Outcomes depend on maps, overlays, HOAs, and staff interpretation.
      </p>
      <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
        <span
          className="inline-flex rounded-full border border-primary/25 bg-primary/5 px-3 py-1 font-medium text-primary"
          aria-live="polite"
        >
          {hydrated ? progressLabel : "Loading progress…"}
        </span>
        <Link href="/adu-rules" className="text-primary font-medium hover:underline text-sm">
          County rules directory
        </Link>
        <span className="text-muted-foreground hidden sm:inline">·</span>
        <Link href="/qualify" className="text-primary font-medium hover:underline text-sm">
          Full qualification
        </Link>
      </div>

      <ol className="space-y-4 list-none m-0 p-0">
        {ADU_FEASIBILITY_ITEMS.map((item, index) => {
          const cid = `${baseId}-${item.id}`
          const isChecked = checked.has(item.id)
          return (
            <li
              key={item.id}
              className="flex gap-3 md:gap-4 rounded-xl border border-border/80 bg-card p-4 md:p-5 shadow-[0_1px_2px_oklch(0_0_0/0.03)] print:break-inside-avoid"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-xs font-semibold text-foreground"
                aria-hidden
              >
                {index + 1}
              </span>
              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex flex-wrap items-start gap-3">
                  <div className="flex items-center gap-2 min-h-8">
                    <Checkbox
                      id={cid}
                      checked={isChecked}
                      onCheckedChange={(v) => toggle(item.id, v === true)}
                      aria-describedby={`${cid}-detail`}
                    />
                    <Label htmlFor={cid} className="text-sm font-semibold text-foreground cursor-pointer leading-snug">
                      {item.label}
                    </Label>
                  </div>
                </div>
                <p id={`${cid}-detail`} className="text-sm text-muted-foreground leading-relaxed pl-[1.75rem] md:pl-0">
                  {item.detail}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
