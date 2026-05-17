"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { ESCAPE_PRICE_SHIPPING_NOTE } from "@/lib/escape-tiny-homes-data"

type EscapeCheckoutButtonProps = {
  slug: string
  label?: string
  className?: string
}

export function EscapeCheckoutButton({
  slug,
  label = "Buy now — Stripe checkout",
  className,
}: EscapeCheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onCheckout() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok) {
        setError(data.error ?? "Checkout could not start. Try again or contact us.")
        return
      }
      if (data.url) {
        window.location.href = data.url
        return
      }
      setError("No checkout URL returned.")
    } catch {
      setError("Network error. Check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={onCheckout}
        disabled={loading}
        className={cn(
          "w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.58_0.13_192)] disabled:opacity-60 disabled:pointer-events-none",
          className,
        )}
      >
        {loading ? "Redirecting to secure checkout…" : label}
      </button>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
        Secure payment via Stripe. {ESCAPE_PRICE_SHIPPING_NOTE} We follow up within one business day to coordinate next
        steps.
      </p>
    </div>
  )
}
