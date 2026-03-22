"use client"

import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

export function LeadFormSection() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [ownsProperty, setOwnsProperty] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("submitting")
    // Simulate submission
    await new Promise((res) => setTimeout(res, 1500))
    setFormState("success")
  }

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
              Fill out the form and we'll review your property details and reach out within one
              business day to schedule your free site evaluation.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "No obligation — 100% free evaluation",
                "We cover Orange County and surrounding areas",
                "All evaluations include zoning & setback review",
                "Typical ADU build cost: $80K–$150K+",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
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
                  We've received your information and will review your property details within one
                  business day. Keep an eye on your phone and email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-semibold text-foreground mb-1">Free Property Evaluation</h3>
                <p className="text-muted-foreground text-sm -mt-2 mb-2">
                  All fields required
                </p>

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

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="mt-2 w-full flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
