"use client"

import Link from "next/link"
import { useState } from "react"
import { CheckCircle2, Download, Loader2 } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

const PDF_PATH = "/downloads/florida-rainwater-resilience-guide.pdf"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function RainwaterGuideDownloadForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage(null)
    setFormState("submitting")

    try {
      const res = await fetch("/api/rainwater-guide-downloads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          source: "blog-rainwater-harvesting",
        }),
      })

      if (!res.ok) {
        setFormState("error")
        setErrorMessage("Please enter your name and a valid email address.")
        return
      }

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Lead Magnet",
          event_label: "Florida Rainwater Resilience Guide",
        })
      }

      setFormState("success")
    } catch {
      setFormState("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8">
        <div className="flex gap-3 items-start">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden />
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-2">Your guide is ready.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              We also emailed you the download link. Open the PDF for the full Florida rainwater resilience
              reference—system layout, staging, and integration notes.
            </p>
            <a
              href={PDF_PATH}
              download="Florida-Rainwater-Resilience-Guide.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              <Download className="w-4 h-4" aria-hidden />
              Download PDF guide
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-secondary/30 p-6 md:p-8"
      id="rainwater-guide-download"
    >
      <h3 className="font-serif text-2xl text-foreground mb-2">Get the Florida Rainwater Resilience guide (PDF)</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        Enter your name and email to unlock the full reference PDF—system diagram, catchment math, first-flush
        staging, filtration tiers, overflow routing, and permitted-integration notes for Florida lots. Information
        only; not engineering or legal advice.
      </p>
      {formState === "error" && errorMessage ? (
        <div className="rounded border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive mb-4">
          {errorMessage}
        </div>
      ) : null}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rainwater-guide-name" className="text-xs font-semibold text-foreground uppercase tracking-wide">
            Full name
          </label>
          <input
            id="rainwater-guide-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="mt-1.5 w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
          />
        </div>
        <div>
          <label htmlFor="rainwater-guide-email" className="text-xs font-semibold text-foreground uppercase tracking-wide">
            Email
          </label>
          <input
            id="rainwater-guide-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className="mt-1.5 w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
            Unlocking…
          </>
        ) : (
          "Unlock PDF download"
        )}
      </button>
      <p className="text-center text-xs text-muted-foreground mt-3">
        By submitting, you agree to be contacted by Prefabricated.co about property evaluation and eco-living
        resources. See our{" "}
        <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
          privacy policy
        </Link>
        .
      </p>
    </form>
  )
}
