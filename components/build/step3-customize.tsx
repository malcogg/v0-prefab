"use client"

import { INCLUDED_BADGES, EXTERIOR_OPTIONS, INTERIOR_OPTIONS, SYSTEM_OPTIONS } from "@/lib/build/options"
import { formatCurrency } from "@/lib/build/pricing"
import type { BuildSession } from "@/lib/build/session"
import { cn } from "@/lib/utils"

type Step3CustomizeProps = {
  session: BuildSession
  basePrice: number
  optionsTotal: number
  onSelectSingle: (path: string, optionId: string) => void
  onToggleAddon: (optionId: string) => void
}

function SingleSelectGroup({
  title,
  value,
  options,
  onSelect,
  swatches = false,
}: {
  title: string
  value: string | null
  options: Array<{ id: string; label: string; price: number; swatch?: string }>
  onSelect: (id: string) => void
  swatches?: boolean
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground mb-2">{title}</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((option) => {
          const selected = value === option.id
          return (
            <button
              type="button"
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                "rounded border p-3 text-left text-sm transition-colors",
                selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"
              )}
            >
              <span className="flex items-center gap-2">
                {swatches && option.swatch ? (
                  <span className="inline-block w-4 h-4 rounded-full border border-border" style={{ backgroundColor: option.swatch }} />
                ) : null}
                <span className="font-medium">{option.label}</span>
              </span>
              <span className="text-xs text-muted-foreground mt-1 block">+{formatCurrency(option.price)}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function Step3Customize({
  session,
  basePrice,
  optionsTotal,
  onSelectSingle,
  onToggleAddon,
}: Step3CustomizeProps) {
  const est = basePrice + optionsTotal
  const addOns = session.customizations.systems.addOns

  return (
    <section className="py-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-5 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
          Base price: <strong>{formatCurrency(basePrice)}</strong> + Selected options:{" "}
          <strong>{formatCurrency(optionsTotal)}</strong> = Est. Starting At: <strong>{formatCurrency(est)}</strong>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-lg border border-border overflow-hidden">
            <img src="/images/earthnest-model.jpg" alt="Selected model preview" className="w-full h-[420px] object-cover" />
          </div>
          <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-1">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Exterior Options</h3>
              <SingleSelectGroup
                title="Siding Material"
                value={session.customizations.exterior.siding}
                options={EXTERIOR_OPTIONS.siding}
                onSelect={(id) => onSelectSingle("exterior.siding", id)}
              />
              <SingleSelectGroup
                title="Roof"
                value={session.customizations.exterior.roof}
                options={EXTERIOR_OPTIONS.roof}
                onSelect={(id) => onSelectSingle("exterior.roof", id)}
              />
              <SingleSelectGroup
                title="Exterior Color"
                value={session.customizations.exterior.colorPalette}
                options={EXTERIOR_OPTIONS.colorPalette}
                onSelect={(id) => onSelectSingle("exterior.colorPalette", id)}
                swatches
              />
              <SingleSelectGroup
                title="Entry Door"
                value={session.customizations.exterior.door}
                options={EXTERIOR_OPTIONS.door}
                onSelect={(id) => onSelectSingle("exterior.door", id)}
              />
              <SingleSelectGroup
                title="Window Frame Finish"
                value={session.customizations.exterior.windowFrame}
                options={EXTERIOR_OPTIONS.windowFrame}
                onSelect={(id) => onSelectSingle("exterior.windowFrame", id)}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Interior Options</h3>
              <SingleSelectGroup
                title="Flooring"
                value={session.customizations.interior.flooring}
                options={INTERIOR_OPTIONS.flooring}
                onSelect={(id) => onSelectSingle("interior.flooring", id)}
              />
              <SingleSelectGroup
                title="Cabinet Finish"
                value={session.customizations.interior.cabinets}
                options={INTERIOR_OPTIONS.cabinets}
                onSelect={(id) => onSelectSingle("interior.cabinets", id)}
              />
              <SingleSelectGroup
                title="Countertop"
                value={session.customizations.interior.countertop}
                options={INTERIOR_OPTIONS.countertop}
                onSelect={(id) => onSelectSingle("interior.countertop", id)}
              />
              <SingleSelectGroup
                title="Fixtures"
                value={session.customizations.interior.fixtures}
                options={INTERIOR_OPTIONS.fixtures}
                onSelect={(id) => onSelectSingle("interior.fixtures", id)}
              />
              <SingleSelectGroup
                title="Interior Wall Finish"
                value={session.customizations.interior.wallAccent}
                options={INTERIOR_OPTIONS.wallAccent}
                onSelect={(id) => onSelectSingle("interior.wallAccent", id)}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Systems and Upgrades</h3>
              <SingleSelectGroup
                title="HVAC"
                value={session.customizations.systems.hvac}
                options={SYSTEM_OPTIONS.hvac}
                onSelect={(id) => onSelectSingle("systems.hvac", id)}
              />
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Add-Ons</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {SYSTEM_OPTIONS.addOns.map((option) => {
                    const selected = addOns.includes(option.id)
                    return (
                      <button
                        type="button"
                        key={option.id}
                        onClick={() => onToggleAddon(option.id)}
                        className={cn(
                          "rounded border p-3 text-left text-sm",
                          selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"
                        )}
                      >
                        <span className="font-medium">{option.label}</span>
                        <span className="text-xs text-muted-foreground mt-1 block">+{formatCurrency(option.price)}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Included in every build</h4>
              <div className="flex flex-wrap gap-2">
                {INCLUDED_BADGES.map((badge) => (
                  <span key={badge} className="rounded-full bg-secondary border border-border px-3 py-1 text-xs">
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              All pricing is illustrative and subject to change based on site conditions, material availability, and design finalization. Final pricing confirmed after free site evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
