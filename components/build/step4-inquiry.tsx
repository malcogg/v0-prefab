"use client"

import { useMemo, useState } from "react"
import { summarizeEarthnestEcoSelection } from "@/lib/build/eco-modules"
import type { BuildSession } from "@/lib/build/session"
import { calculateEstimatedTotal, calculateOptionsTotal, getSelectedModel } from "@/lib/build/session"
import { formatCurrency } from "@/lib/build/pricing"

type Step4InquiryProps = {
  session: BuildSession
  onSubmitted: (email: string) => void
}

export function Step4Inquiry({ session, onSubmitted }: Step4InquiryProps) {
  const model = getSelectedModel(session.selectedModelId)
  const optionsTotal = calculateOptionsTotal(session)
  const buildTotal = calculateEstimatedTotal(session)
  const [state, setState] = useState<"idle" | "submitting" | "error">("idle")
  const [message, setMessage] = useState("")

  const defaultMessage = useMemo(() => {
    if (!model) return ""
    const c = session.customizations
    const addOnLabels = c.systems.addOns.length ? c.systems.addOns.join(", ") : "none selected"
    const eco = c.earthnestEco ?? []
    const ecoLine = eco.length
      ? ` EarthNest / site modules of interest: ${summarizeEarthnestEcoSelection(eco)}.`
      : ""
    return `I'm interested in the ${model.name} with ${c.exterior.siding ?? "selected"} siding, ${c.interior.flooring ?? "selected"} flooring, ${c.interior.cabinets ?? "selected"} cabinets, HVAC ${c.systems.hvac}, add-ons: ${addOnLabels}.${ecoLine} I'd like to discuss site-specific feasibility for my property.`
  }, [model, session.customizations])

  async function handleSubmit(formData: FormData) {
    const email = String(formData.get("email") || "").trim()
    setState("submitting")
    try {
      const payload = {
        name: String(formData.get("name") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        email,
        hearAbout: String(formData.get("hearAbout") ?? ""),
        message: String(formData.get("message") ?? "").trim() || defaultMessage,
        session,
      }
      const res = await fetch("/api/build-inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        let detail = "Submission failed. Please try again."
        try {
          const body = (await res.json()) as {
            error?: string
            details?: Record<string, string[]>
          }
          if (body.details && Object.keys(body.details).length > 0) {
            const first = Object.values(body.details)[0]?.[0]
            if (first) detail = first
          } else if (body.error) {
            detail = body.error
          }
        } catch {
          // ignore non-JSON error bodies
        }
        setState("error")
        setMessage(detail)
        return
      }
      onSubmitted(email)
    } catch {
      setState("error")
      setMessage("Submission failed. Please try again.")
    }
  }

  if (!model) return null

  return (
    <section className="py-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-border bg-card p-5">
          <h3 className="font-serif text-2xl mb-4">Your Build Summary</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Your Home</p>
              <p>{model.name}</p>
              <p className="text-muted-foreground">{model.badge}</p>
            </div>
            <div>
              <p className="font-semibold">Estimated Investment</p>
              <p>Home (base): {formatCurrency(model.startingAt)}</p>
              <p>Selected options: {formatCurrency(optionsTotal)}</p>
              <p className="font-semibold mt-1">Est. starting at: {formatCurrency(buildTotal)}+</p>
              <p className="text-xs text-muted-foreground mt-1">
                Site work, permits, utilities, and foundation are not included until we review your property.
              </p>
            </div>
            <div>
              <p className="font-semibold">EarthNest / site interests</p>
              {(session.customizations.earthnestEco ?? []).length ? (
                <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
                  {summarizeEarthnestEcoSelection(session.customizations.earthnestEco ?? [])
                    .split("; ")
                    .filter(Boolean)
                    .map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">None selected — add items under Customize → EarthNest & site.</p>
              )}
            </div>
          </div>
          <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
            Pricing shown is an estimate only and is subject to change based on site conditions, code requirements,
            material availability, and final design. PreFabricated.co does not provide legal, financial, or investment
            advice. A free property evaluation confirms what is feasible on your parcel.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-background p-5">
          <h3 className="font-serif text-2xl mb-2">Let&apos;s make this happen.</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We will review your model and customization selections and contact you within one business day to plan next
            steps and, when you&apos;re ready, schedule a free site evaluation.
          </p>
          <form
            action={(formData) => {
              void handleSubmit(formData)
            }}
            className="space-y-3"
          >
            <input required name="name" placeholder="Full Name" className="w-full rounded border border-border px-3 py-2 text-sm" />
            <input required name="phone" placeholder="(321) 747-3778" className="w-full rounded border border-border px-3 py-2 text-sm" />
            <input required name="email" type="email" placeholder="Email Address" className="w-full rounded border border-border px-3 py-2 text-sm" />
            <select name="hearAbout" className="w-full rounded border border-border px-3 py-2 text-sm" defaultValue="Google">
              {["Google", "Instagram", "Facebook", "Referral", "Zillow", "Other"].map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              defaultValue={defaultMessage}
              placeholder="Message"
              className="w-full min-h-28 rounded border border-border px-3 py-2 text-sm"
            />
            {state === "error" ? <p className="text-sm text-destructive">{message}</p> : null}
            <button
              type="submit"
              disabled={state === "submitting"}
              className="w-full rounded bg-primary text-primary-foreground py-2.5 text-sm font-semibold disabled:opacity-50"
            >
              {state === "submitting" ? "Submitting..." : "Submit My Build Inquiry"}
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            By submitting, I agree to be contacted by PreFabricated.co regarding my build configuration. Home pricing
            is estimated and confirmed after a free site evaluation.
          </p>
        </div>
      </div>
    </section>
  )
}
