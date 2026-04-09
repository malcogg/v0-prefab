"use client"

import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function LeadFormSection() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [ownsProperty, setOwnsProperty] = useState<string>("")
  const [modelInterest, setModelInterest] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage(null)

    if (!ownsProperty || !modelInterest) {
      setFormState("error")
      setErrorMessage("Please answer the two selection questions before submitting.")
      return
    }

    setFormState("submitting")
    try {
      const form = new FormData(e.currentTarget)
      form.set("owns_property", ownsProperty)
      form.set("model_interest", modelInterest)

      const payload = Object.fromEntries(form.entries())
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        setFormState("error")
        setErrorMessage("Something went wrong. Please try again.")
        return
      }

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Form",
          event_label: "Free Property Evaluation",
        })
      }
      setFormState("success")
    } catch {
      setFormState("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  const modelOptions = [
    { value: "20ft-studio", label: "20ft Studio (~$80K–$120K)" },
    { value: "40ft-1bed", label: "40ft 1-Bedroom (~$120K–$175K)" },
    { value: "traditional", label: "Traditional Site-Built (~$130K–$200K+)" },
    { value: "not-sure", label: "Not Sure Yet" },
  ]

  return (
    <section id="qualify" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className="lg:sticky lg:top-24">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Get Started
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-6">
              See If Your Property Qualifies
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Fill out the form and we'll review your property details, run a zoning check, and
              reach out within one business day to schedule your free site evaluation.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "No obligation — 100% free evaluation",
                "We cover Orange County and surrounding areas",
                "All evaluations include zoning & setback review",
                "We run a zoning check BEFORE your first call",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Pricing summary */}
            <div className="mt-8 p-5 bg-background rounded-lg border border-border">
              <h4 className="font-semibold text-foreground text-sm mb-3">Quick Pricing Reference</h4>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">20ft Studio</span>
                  <span className="text-foreground font-medium">$80K – $120K+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">40ft 1-Bedroom</span>
                  <span className="text-foreground font-medium">$120K – $175K+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Traditional Site-Built</span>
                  <span className="text-foreground font-medium">$130K – $200K+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-background border border-border rounded-lg p-8">
            {formState === "success" ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  Thanks — We'll Be In Touch!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  We've received your information and will run a zoning check on your property
                  before reaching out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-semibold text-foreground mb-1">Free Property Evaluation</h3>
                <p className="text-muted-foreground text-sm -mt-2 mb-2">
                  All fields required
                </p>
                {formState === "error" && errorMessage && (
                  <div className="rounded border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                    {errorMessage}
                  </div>
                )}

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(407) 555-0100"
                    className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>

                {/* Property Address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="address" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Property Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    placeholder="123 Maple St, Orlando, FL 32801"
                    className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>

                {/* Own Property */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Do You Own This Property?
                  </span>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setOwnsProperty(option)}
                        className={`flex-1 py-3 rounded border text-sm font-medium transition-all ${
                          ownsProperty === option
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="owns_property" value={ownsProperty} />
                </div>

                {/* Model Interest */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Which Model Interests You?
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {modelOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setModelInterest(option.value)}
                        className={`py-3 px-3 rounded border text-sm font-medium transition-all text-left ${
                          modelInterest === option.value
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="model_interest" value={modelInterest} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="mt-2 w-full flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "See If My Property Qualifies"
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by EarthNest Florida regarding your
                  property evaluation. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
