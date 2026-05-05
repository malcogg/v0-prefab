"use client"

import { Leaf } from "lucide-react"
import { EARTHNEST_ECO_MODULES } from "@/lib/build/eco-modules"
import { INCLUDED_BADGES, EXTERIOR_OPTIONS, INTERIOR_OPTIONS, SYSTEM_OPTIONS } from "@/lib/build/options"
import { formatCurrency } from "@/lib/build/pricing"
import type { BuildSession } from "@/lib/build/session"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type Step3CustomizeProps = {
  session: BuildSession
  basePrice: number
  optionsTotal: number
  onSelectSingle: (path: string, optionId: string) => void
  onToggleAddon: (optionId: string) => void
  onToggleEarthnestEco: (optionId: string) => void
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
              <span className="text-xs text-muted-foreground mt-1 block">
                {option.price > 0 ? `+${formatCurrency(option.price)}` : "Included / from base"}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ecoPriceCaption(price: number) {
  if (price > 0) return `+${formatCurrency(price)} est.`
  return "Interest · scoped at evaluation"
}

export function Step3Customize({
  session,
  basePrice,
  optionsTotal,
  onSelectSingle,
  onToggleAddon,
  onToggleEarthnestEco,
}: Step3CustomizeProps) {
  const est = basePrice + optionsTotal
  const addOns = session.customizations.systems.addOns
  const earthnestEco = session.customizations.earthnestEco ?? []

  return (
    <section className="py-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-5 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
          Base price: <strong>{formatCurrency(basePrice)}</strong> + Selected options:{" "}
          <strong>{formatCurrency(optionsTotal)}</strong> = Est. starting at: <strong>{formatCurrency(est)}</strong>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-lg border border-border overflow-hidden lg:sticky lg:top-[200px]">
            <img src="/images/earthnest-model.jpg" alt="Selected model preview" className="w-full h-[420px] object-cover" />
          </div>

          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <Tabs defaultValue="finishes" className="gap-4">
              <TabsList className="w-full flex-wrap h-auto min-h-9 py-1">
                <TabsTrigger value="finishes" className="flex-1 min-w-[140px]">
                  Finishes & systems
                </TabsTrigger>
                <TabsTrigger value="earthnest" className="flex-1 min-w-[140px] gap-1.5">
                  <Leaf className="w-3.5 h-3.5" />
                  EarthNest & site
                </TabsTrigger>
              </TabsList>

              <TabsContent value="finishes" className="space-y-6 mt-4">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl">Exterior options</h3>
                  <SingleSelectGroup
                    title="Siding material"
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
                    title="Exterior color"
                    value={session.customizations.exterior.colorPalette}
                    options={EXTERIOR_OPTIONS.colorPalette}
                    onSelect={(id) => onSelectSingle("exterior.colorPalette", id)}
                    swatches
                  />
                  <SingleSelectGroup
                    title="Entry door"
                    value={session.customizations.exterior.door}
                    options={EXTERIOR_OPTIONS.door}
                    onSelect={(id) => onSelectSingle("exterior.door", id)}
                  />
                  <SingleSelectGroup
                    title="Window frame finish"
                    value={session.customizations.exterior.windowFrame}
                    options={EXTERIOR_OPTIONS.windowFrame}
                    onSelect={(id) => onSelectSingle("exterior.windowFrame", id)}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl">Interior options</h3>
                  <SingleSelectGroup
                    title="Flooring"
                    value={session.customizations.interior.flooring}
                    options={INTERIOR_OPTIONS.flooring}
                    onSelect={(id) => onSelectSingle("interior.flooring", id)}
                  />
                  <SingleSelectGroup
                    title="Cabinet finish"
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
                    title="Interior wall finish"
                    value={session.customizations.interior.wallAccent}
                    options={INTERIOR_OPTIONS.wallAccent}
                    onSelect={(id) => onSelectSingle("interior.wallAccent", id)}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl">Systems and upgrades</h3>
                  <SingleSelectGroup
                    title="HVAC"
                    value={session.customizations.systems.hvac}
                    options={SYSTEM_OPTIONS.hvac}
                    onSelect={(id) => onSelectSingle("systems.hvac", id)}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Add-ons</p>
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
                            <span className="text-xs text-muted-foreground mt-1 block">
                              {option.price > 0 ? `+${formatCurrency(option.price)}` : "Included / from base"}
                            </span>
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
              </TabsContent>

              <TabsContent value="earthnest" className="space-y-8 mt-4">
                <div className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground mb-1">EarthNest & permaculture scope</p>
                  Select everything you want us to study with your property. Many items are{" "}
                  <strong>permit- and site-dependent</strong> (especially water, stormwater, and outdoor structures).{" "}
                  Zero-dollar lines are <strong>interest flags</strong> for consultation—not a promise that every option is
                  allowed on your lot.
                </div>

                {EARTHNEST_ECO_MODULES.map((mod) => (
                  <div key={mod.id} className="space-y-3 border-b border-border pb-6 last:border-0">
                    <div>
                      <h4 className="font-serif text-xl text-foreground">{mod.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{mod.note}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {mod.options.map((option) => {
                        const selected = earthnestEco.includes(option.id)
                        return (
                          <button
                            type="button"
                            key={option.id}
                            onClick={() => onToggleEarthnestEco(option.id)}
                            className={cn(
                              "rounded border p-3 text-left text-sm transition-colors",
                              selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"
                            )}
                          >
                            <span className="font-medium leading-snug">{option.label}</span>
                            <span className="text-xs text-muted-foreground mt-1 block">{ecoPriceCaption(option.price)}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mirrors the working list in{" "}
                  <code className="text-[11px] bg-muted px-1 py-0.5 rounded">docs/earthnest-permaculture-master-client-list.md</code>
                  . Option IDs and pricing live in{" "}
                  <code className="text-[11px] bg-muted px-1 py-0.5 rounded">lib/build/eco-modules.ts</code>.
                </p>
              </TabsContent>
            </Tabs>

            <p className="text-xs text-muted-foreground leading-relaxed pt-2">
              All pricing is illustrative and subject to change based on site conditions, material availability, and design
              finalization. Final pricing is confirmed after a free site evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
