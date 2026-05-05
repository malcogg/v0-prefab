"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, Loader2 } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function StarterKitDownloadForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage(null)
    setFormState("submitting")

    try {
      const res = await fetch("/api/starter-kit-downloads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, source: "free-adu-course" }),
      })

      if (!res.ok) {
        setFormState("error")
        setErrorMessage("Please enter your name and a valid email address.")
        return
      }

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Lead Magnet",
          event_label: "Florida ADU Starter Kit",
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
      <div className="rounded-lg border border-primary/30 bg-primary/10 p-6">
        <div className="flex gap-3 items-start">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-2">Your starter kit is ready.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              We also sent the link to your email. Open the printable page and choose "Save as PDF"
              from your browser&apos;s print dialog.
            </p>
            <Link
              href="/free-adu-course/starter-kit"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Open Printable Starter Kit
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-background p-6">
      <h3 className="font-serif text-2xl text-foreground mb-2">Get the printable starter kit</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        Enter your name and email to unlock the printable workbook. No payment required.
      </p>
      {formState === "error" && errorMessage ? (
        <div className="rounded border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive mb-4">
          {errorMessage}
        </div>
      ) : null}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="starter-kit-name" className="text-xs font-semibold text-foreground uppercase tracking-wide">
            Full Name
          </label>
          <input
            id="starter-kit-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Jane Smith"
            className="mt-1.5 w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
          />
        </div>
        <div>
          <label htmlFor="starter-kit-email" className="text-xs font-semibold text-foreground uppercase tracking-wide">
            Email Address
          </label>
          <input
            id="starter-kit-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            <Loader2 className="w-4 h-4 animate-spin" />
            Unlocking...
          </>
        ) : (
          "Unlock Printable Starter Kit"
        )}
      </button>
      <p className="text-center text-xs text-muted-foreground mt-3">
        By submitting, you agree to be contacted by Prefabricated.co about ADU education and
        property evaluation resources. No spam.
      </p>
    </form>
  )
}
