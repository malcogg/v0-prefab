"use client"

import { useMemo, useState } from "react"
import type { BuildSession } from "@/lib/build/session"
import { calculateOptionsTotal, getSelectedModel } from "@/lib/build/session"
import { formatCurrency } from "@/lib/build/pricing"

type Step4InquiryProps = {
  session: BuildSession
  onSubmitted: (email: string) => void
}

export function Step4Inquiry({ session, onSubmitted }: Step4InquiryProps) {
  const lot = session.selectedLot
  const model = getSelectedModel(session.selectedModelId)
  const optionsTotal = calculateOptionsTotal(session)
  const [state, setState] = useState<"idle" | "submitting" | "error">("idle")
  const [message, setMessage] = useState("")

  const defaultMessage = useMemo(() => {
    if (!lot || !model) return ""
    const c = session.customizations
    return `I'm interested in the lot at ${lot.address}, ${lot.city} and the ${model.name} with ${c.exterior.siding ?? "selected"} siding, ${c.interior.flooring ?? "selected"} flooring, and ${c.interior.cabinets ?? "selected"} cabinets.`
  }, [lot, model, session.customizations])

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

  if (!lot || !model) return null

  return (
    <section className="py-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-border bg-card p-5">
          <h3 className="font-serif text-2xl mb-4">Your Build Summary</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Your Selected Lot</p>
              <p>{lot.address}, {lot.city}</p>
              <p className="text-muted-foreground">
                {lot.county} · {lot.lotSizeAcres.toFixed(2)} acres · {lot.zoning}
              </p>
              <p>MLS# {lot.mlsNumber}</p>
            </div>
            <div>
              <p className="font-semibold">Your Home</p>
              <p>{model.name}</p>
              <p className="text-muted-foreground">{model.badge}</p>
            </div>
            <div>
              <p className="font-semibold">Estimated Investment</p>
              <p>Land (asking): {formatCurrency(lot.askingPrice)}</p>
              <p>Home (base): {formatCurrency(model.startingAt)}</p>
              <p>Selected options: {formatCurrency(optionsTotal)}</p>
              <p className="font-semibold mt-1">
                Est. Total Starting At: {formatCurrency(lot.askingPrice + model.startingAt + optionsTotal)}+
              </p>
            </div>
          </div>
          <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
            Land inquiries are handled through a licensed Florida REALTOR®. Purchasing land is a real estate transaction separate from any construction agreement with PreFabricated.co. Home pricing shown is an estimate only and is subject to change based on site conditions, material availability, and final design. PreFabricated.co does not provide legal, financial, or investment advice.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-background p-5">
          <h3 className="font-serif text-2xl mb-2">Let's make this happen.</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We will review your selections, run a zoning check on the lot, and contact you within 1 business day.
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
            By submitting, I agree to be contacted by PreFabricated.co regarding my land and build selections. Land inquiries are handled through a licensed Florida REALTOR®. Home pricing is estimated and confirmed after a free site evaluation.
          </p>
        </div>
      </div>
    </section>
  )
}
