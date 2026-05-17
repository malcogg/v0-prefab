"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, Loader2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type UiInterest = "tiny_homes" | "adu" | "earthnest" | "village" | "not_sure"

const INTERESTS: { id: UiInterest; label: string }[] = [
  { id: "tiny_homes", label: "Tiny homes" },
  { id: "adu", label: "ADU / backyard" },
  { id: "earthnest", label: "EarthNest" },
  { id: "village", label: "Village / rental" },
  { id: "not_sure", label: "Not sure yet" },
]

export function HomeInterestSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [picked, setPicked] = useState<UiInterest[]>([])
  const [state, setState] = useState<"idle" | "loading" | "done" | "err">("idle")
  const [err, setErr] = useState<string | null>(null)

  const toggle = (id: UiInterest) => {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErr(null)
    if (picked.length === 0) {
      setErr("Pick at least one interest.")
      return
    }
    if (!marketingConsent) {
      setErr("Please confirm you agree to receive email from us.")
      return
    }
    setState("loading")
    try {
      const res = await fetch("/api/home-interest", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          zip: zip.trim(),
          phone: phone.trim(),
          message: message.trim(),
          interests: picked,
          marketingConsent: true,
        }),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => null)
        setErr(typeof j?.error === "string" ? j.error : "Something went wrong.")
        setState("idle")
        return
      }
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { source: "homepage_contact_section" })
      }
      setState("done")
    } catch {
      setErr("Network error.")
      setState("idle")
    }
  }

  return (
    <section id="get-in-touch" className="py-20 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Get started</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance leading-tight mb-4">
              Tell us what you&apos;re exploring
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-xl">
              A short note is enough for a first reply. When you&apos;re ready for zoning-aware recommendations and model
              matching, complete the full qualification — it takes a few minutes and helps us prep before we call.
            </p>
            <Link
              href="/qualify"
              className="inline-flex text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              Full property &amp; project qualification →
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            {state === "done" ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">Thanks — we&apos;ll be in touch</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Check your inbox for a quick confirmation. Want a deeper pass?{" "}
                  <Link href="/qualify" className="text-primary font-medium hover:underline">
                    Finish the full qualify flow
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => void submit(e)} className="space-y-5">
                <h3 className="font-semibold text-foreground">Quick contact</h3>
                <p className="text-xs text-muted-foreground -mt-2">We respect your privacy — no unrelated spam.</p>
                {err ? (
                  <div className="rounded-lg border border-destructive/25 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                    {err}
                  </div>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((i) => (
                    <button
                      key={i.id}
                      type="button"
                      onClick={() => toggle(i.id)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                        picked.includes(i.id)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/35",
                      )}
                    >
                      {i.label}
                    </button>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Name</label>
                    <input
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Email</label>
                    <input
                      required
                      type="email"
                      className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground">ZIP</label>
                    <input
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      autoComplete="postal-code"
                      pattern="^\d{5}(-\d{4})?$"
                      title="U.S. ZIP"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Phone</label>
                    <input
                      type="tel"
                      className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground">
                      Message <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <textarea
                      className="mt-1 w-full min-h-[72px] rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      placeholder="City, timing, anything we should know…"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-3 items-start rounded-lg border border-border bg-secondary/40 p-3">
                  <Checkbox
                    id="home-interest-marketing"
                    checked={marketingConsent}
                    onCheckedChange={(v) => setMarketingConsent(v === true)}
                    className="mt-0.5"
                    aria-required
                  />
                  <Label
                    htmlFor="home-interest-marketing"
                    className="text-xs text-muted-foreground leading-relaxed font-normal cursor-pointer"
                  >
                    I agree to receive email from Prefabricated.co about this inquiry, project updates, and related
                    offers. I can unsubscribe anytime.
                  </Label>
                </div>
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-95 disabled:opacity-60 inline-flex items-center justify-center gap-2"
                >
                  {state === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
