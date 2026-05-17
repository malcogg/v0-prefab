"use client"

import { useState, type FormEvent } from "react"

import { cn } from "@/lib/utils"
import { ESCAPE_PRICE_SHIPPING_NOTE } from "@/lib/escape-tiny-homes-data"
import { US_STATE_OPTIONS } from "@/lib/us-states"

type EscapeCheckoutButtonProps = {
  slug: string
  /** Full catalog label e.g. "5/ TRAVELER XL" */
  modelLabel: string
  className?: string
}

export function EscapeCheckoutButton({ slug, modelLabel, className }: EscapeCheckoutButtonProps) {
  const [email, setEmail] = useState("")
  const [stateCode, setStateCode] = useState("")
  const [landSituation, setLandSituation] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/escape-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          modelSlug: slug,
          modelLabel,
          stateCode,
          landSituation: landSituation.trim(),
          name: name.trim(),
          phone: phone.trim(),
        }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok) {
        setError(data.error ?? "Could not save your request. Try again or contact us.")
        return
      }
      setDone(true)
      setEmail("")
      setStateCode("")
      setLandSituation("")
      setName("")
      setPhone("")
    } catch {
      setError("Network error. Check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("space-y-4 max-w-md", className)}>
      <div className="rounded-xl border border-border bg-muted/30 px-4 py-3.5">
        <p className="text-sm font-semibold text-foreground">Purchase checkout — coming soon</p>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
          Stripe checkout is not live yet. Leave your email and where you want to place the unit — we&apos;ll confirm
          what&apos;s possible in your state and follow up when purchasing opens.
        </p>
      </div>

      <button
        type="button"
        disabled
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary/35 px-8 py-4 text-base font-semibold text-primary-foreground/90 cursor-not-allowed border border-primary/25"
        aria-disabled="true"
      >
        Buy now — Stripe checkout (coming soon)
      </button>

      {done ? (
        <p className="text-sm text-primary font-medium leading-relaxed" role="status">
          You&apos;re on the list. We&apos;ll reach out about <span className="text-foreground">{modelLabel}</span>{" "}
          when checkout is ready for your area. Check your inbox for a confirmation email.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3 pt-1">
          <div className="space-y-1.5">
            <label htmlFor={`escape-intent-email-${slug}`} className="text-xs font-medium text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id={`escape-intent-email-${slug}`}
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor={`escape-intent-state-${slug}`} className="text-xs font-medium text-foreground">
              State you&apos;ll place the home <span className="text-destructive">*</span>
            </label>
            <select
              id={`escape-intent-state-${slug}`}
              required
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select state</option>
              {US_STATE_OPTIONS.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor={`escape-intent-land-${slug}`} className="text-xs font-medium text-foreground">
              Land / placement <span className="text-destructive">*</span>
            </label>
            <textarea
              id={`escape-intent-land-${slug}`}
              required
              rows={4}
              value={landSituation}
              onChange={(e) => setLandSituation(e.target.value)}
              placeholder="e.g. Owned backyard in Orlando, FL · RV park slot in TX · shopping for land in CO — access, HOA, utilities, etc."
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y min-h-[100px]"
            />
            <p className="text-[11px] text-muted-foreground leading-snug">
              We use this to sanity-check state rules, access, and feasibility before we take payment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label htmlFor={`escape-intent-name-${slug}`} className="text-xs font-medium text-muted-foreground">
                Name (optional)
              </label>
              <input
                id={`escape-intent-name-${slug}`}
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor={`escape-intent-phone-${slug}`} className="text-xs font-medium text-muted-foreground">
                Phone (optional)
              </label>
              <input
                id={`escape-intent-phone-${slug}`}
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.58_0.13_192)] disabled:opacity-60 disabled:pointer-events-none"
          >
            {loading ? "Saving…" : "Notify me — save my interest"}
          </button>
        </form>
      )}

      <p className="text-xs text-muted-foreground leading-relaxed">
        {ESCAPE_PRICE_SHIPPING_NOTE} Factory-built RVIA units are often regulated like RVs; local zoning still varies —{" "}
        <a
          href="https://www.escapetraveler.net/faq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
          see Escape&apos;s FAQ for general background
        </a>
        . We&apos;ll still verify your situation before purchase.
      </p>
    </div>
  )
}
