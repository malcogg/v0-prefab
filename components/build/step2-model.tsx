"use client"

import { CheckCircle2 } from "lucide-react"
import { HOME_MODELS } from "@/lib/build/models"
import { formatCurrency } from "@/lib/build/pricing"
import { cn } from "@/lib/utils"

type Step2ModelProps = {
  selectedModelId: string | null
  onSelectModel: (id: (typeof HOME_MODELS)[number]["id"]) => void
}

export function Step2Model({ selectedModelId, onSelectModel }: Step2ModelProps) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
          Choose your EarthNest model.
        </h2>
        <p className="text-muted-foreground mb-8">
          Compare compact prefab concepts and the traditional site-built ADU path for larger,
          fully custom backyard homes.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {HOME_MODELS.map((model) => {
            const selected = selectedModelId === model.id
            return (
              <article
                key={model.id}
                className={cn(
                  "relative rounded-lg border bg-card overflow-hidden transition-all",
                  selected ? "border-primary ring-2 ring-primary/40" : "border-border hover:shadow-sm"
                )}
              >
                {model.isPopular ? (
                  <span className="absolute top-3 left-3 z-10 rounded bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold">
                    Most Popular
                  </span>
                ) : null}
                {selected ? <CheckCircle2 className="absolute top-3 right-3 z-10 w-5 h-5 text-primary" /> : null}
                <img src={model.image} alt={model.name} className="w-full h-52 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-foreground">{model.name}</h3>
                  <p
                    className={cn(
                      "inline-flex mt-2 rounded-full px-2.5 py-1 text-xs font-medium",
                      model.badgeTone === "green" ? "bg-primary/15 text-primary" : "bg-amber-100 text-amber-800"
                    )}
                  >
                    {model.badge}
                  </p>
                  <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    <p>Size: {model.size}</p>
                    <p>Layout: {model.layout}</p>
                    <p>Lead time: {model.leadTime}</p>
                    <p>Best for: {model.bestFor}</p>
                  </div>
                  <p className="mt-4 font-serif text-2xl text-foreground">Starting at {formatCurrency(model.startingAt)}</p>
                  <button
                    type="button"
                    onClick={() => onSelectModel(model.id)}
                    className={cn(
                      "mt-4 w-full px-4 py-2.5 rounded text-sm font-semibold",
                      selected ? "bg-primary/15 text-primary" : "bg-primary text-primary-foreground"
                    )}
                  >
                    {selected ? "Selected ✓" : "Select This Home →"}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
