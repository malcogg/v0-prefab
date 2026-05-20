"use client"

import Link from "next/link"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BUILDING_REQUIREMENTS_STATES,
  DEFAULT_BUILDING_REQUIREMENTS_STATE_ID,
} from "@/lib/building-requirements/states-registry"

export function BuildingRequirementsByState() {
  return (
    <div className="mt-16 pt-12 border-t border-border">
      <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
        Multi-state roadmap
      </p>
      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Building requirements by state</h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mb-8">
        Florida content is live today. Additional states use the same accordion architecture—expand a state
        tab to preview planned jurisdictions without cluttering the homepage for local visitors.
      </p>

      <Tabs defaultValue={DEFAULT_BUILDING_REQUIREMENTS_STATE_ID} className="gap-6">
        <TabsList className="flex h-auto w-full max-w-2xl flex-wrap justify-start gap-1 bg-muted/80 p-1">
          {BUILDING_REQUIREMENTS_STATES.map((state) => (
            <TabsTrigger
              key={state.id}
              value={state.id}
              className="text-xs sm:text-sm data-[state=active]:bg-background px-3 py-2"
            >
              {state.name}
              {state.status === "coming_soon" ? (
                <span className="ml-1.5 text-[10px] uppercase tracking-wide text-muted-foreground">Soon</span>
              ) : null}
            </TabsTrigger>
          ))}
        </TabsList>

        {BUILDING_REQUIREMENTS_STATES.map((state) => (
          <TabsContent key={state.id} value={state.id} className="mt-2">
            {state.status === "active" ? (
              <div className="rounded-lg border border-border bg-secondary/50 p-6 md:p-8">
                <p className="text-sm text-muted-foreground mb-6">
                  <span className="font-medium text-foreground">{state.name}</span> — active jurisdictions
                  below. Orange County requirements are expanded above; other Florida hubs link to county
                  SEO pages as they roll out.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {state.jurisdictions.map((j) => (
                    <li
                      key={j.id}
                      className="rounded-lg border border-border bg-background px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                    >
                      <span className="text-sm font-medium text-foreground">{j.name}</span>
                      {j.status === "active" ? (
                        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                          Live above
                        </span>
                      ) : j.hubPath ? (
                        <Link
                          href={j.hubPath}
                          className="text-xs font-medium text-primary underline-offset-4 hover:underline"
                        >
                          County hub →
                        </Link>
                      ) : (
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Coming soon</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border bg-muted/30 p-6 md:p-8">
                <p className="text-sm font-medium text-foreground mb-2">{state.name} — coming soon</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {state.comingSoonMessage ??
                    "Requirement modules for this state will publish here using the same Type 1 / Type 2 / Type 3 accordion pattern."}
                </p>
                {state.jurisdictions.length > 0 ? (
                  <ul className="flex flex-wrap gap-2">
                    {state.jurisdictions.map((j) => (
                      <li
                        key={j.id}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {j.name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
