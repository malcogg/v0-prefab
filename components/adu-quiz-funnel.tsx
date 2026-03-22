"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizState {
  step: number
  county?: string
  propertyType?: string
  lotSize?: string
  hoa?: string
  floodZone?: string
  goal?: string
  modelInterest?: string
}

export function ADUQuizFunnel() {
  const [state, setState] = useState<QuizState>({ step: 1 })
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [waitlistData, setWaitlistData] = useState({ name: "", email: "", county: "" })

  const handleNext = (key: string, value: string) => {
    if (key === "county" && value !== "Orange County" && value !== "City of Orlando") {
      setWaitlistData({ ...waitlistData, county: value })
      setShowWaitlist(true)
      return
    }
    setState({ ...state, [key]: value, step: state.step + 1 })
  }

  const handleBack = () => {
    if (state.step > 1) {
      setState({ ...state, step: state.step - 1 })
    }
  }

  const handleWaitlistSubmit = () => {
    console.log("Waitlist:", waitlistData)
    setShowWaitlist(false)
    setState({ step: 1 })
  }

  const progressPercent = (state.step / 8) * 100

  if (showWaitlist) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
            <h2 className="font-serif text-3xl text-foreground mb-4">Coming Soon to Your Area</h2>
            <p className="text-muted-foreground mb-8">
              We're mapping ADU rules county by county. Drop your info below and we'll notify you
              when your area goes live.
            </p>
            <div className="flex flex-col gap-4 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={waitlistData.name}
                onChange={(e) => setWaitlistData({ ...waitlistData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={waitlistData.email}
                onChange={(e) => setWaitlistData({ ...waitlistData, email: e.target.value })}
              />
              <p className="text-sm text-muted-foreground">
                County: <strong>{waitlistData.county}</strong>
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowWaitlist(false)}>
                Back
              </Button>
              <Button onClick={handleWaitlistSubmit} className="flex-1 bg-primary">
                Notify Me When My County Is Live
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-muted-foreground">
                Step {state.step} of 8
              </span>
              {state.step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition text-sm font-medium"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              )}
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Step 1: County */}
          {state.step === 1 && (
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-2">
                Find out if your property qualifies for an EarthNest ADU.
              </h2>
              <p className="text-muted-foreground mb-6">
                Answer 8 quick questions. We'll show you your recommended path, estimated cost
                range, and next steps — in under 2 minutes.
              </p>
              <label className="block text-sm font-semibold text-foreground mb-4">
                Where is your property located?
              </label>
              <div className="grid gap-3">
                {[
                  "Orange County (unincorporated)",
                  "City of Orlando",
                  "Osceola County",
                  "Seminole County",
                  "Other Central Florida area",
                  "Not sure",
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleNext("county", option)}
                    className="p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-foreground font-medium"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Property Type */}
          {state.step === 2 && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">
                What type of property is this?
              </label>
              <div className="grid gap-3">
                {[
                  { label: "Single-family home I already own", value: "owner-occupied" },
                  { label: "Single-family home I'm looking to purchase", value: "purchase" },
                  { label: "Vacant land I own", value: "vacant-land" },
                  { label: "Condo or townhome", value: "condo" },
                  { label: "Not sure", value: "not-sure" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleNext("propertyType", option.value)}
                    className="p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-foreground font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Lot Size */}
          {state.step === 3 && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Do you know roughly how large your lot is?
              </label>
              <p className="text-sm text-muted-foreground mb-4">
                This helps us estimate if a detached ADU will fit. You can find your lot size on
                your property tax record or Zillow listing.
              </p>
              <div className="grid gap-3">
                {[
                  { label: "Under 5,000 sq ft", value: "under-5k" },
                  { label: "5,000 – 7,500 sq ft", value: "5k-7.5k" },
                  { label: "7,500 – 10,000 sq ft", value: "7.5k-10k" },
                  { label: "Over 10,000 sq ft", value: "over-10k" },
                  { label: "Not sure", value: "not-sure" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleNext("lotSize", option.value)}
                    className="p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-foreground font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: HOA */}
          {state.step === 4 && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Is your property part of a Homeowners Association (HOA)?
              </label>
              <p className="text-sm text-muted-foreground mb-4">
                HOA rules can affect ADU eligibility even when the county allows them. We'll verify
                this on your call.
              </p>
              <div className="grid gap-3">
                {[
                  { label: "No HOA", value: "no-hoa" },
                  { label: "Yes, I have an HOA", value: "yes-hoa" },
                  { label: "Not sure", value: "not-sure" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleNext("hoa", option.value)}
                    className="p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-foreground font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Flood Zone */}
          {state.step === 5 && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Do you know if your property is in a FEMA flood zone?
              </label>
              <p className="text-sm text-muted-foreground mb-4">
                Flood zones can add foundation and permitting requirements. We check this as part
                of every property evaluation.
              </p>
              <div className="grid gap-3">
                {[
                  { label: "No — I'm not in a flood zone", value: "no-flood" },
                  { label: "Yes — I am in a flood zone", value: "yes-flood" },
                  { label: "Not sure", value: "not-sure" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleNext("floodZone", option.value)}
                    className="p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-foreground font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Goal */}
          {state.step === 6 && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">
                What's your main goal for adding an ADU?
              </label>
              <div className="grid gap-3">
                {[
                  { label: "Generate rental income (long-term tenant)", value: "rental-income" },
                  { label: "House a family member (multigenerational living)", value: "family" },
                  { label: "Increase property value before selling", value: "equity" },
                  { label: "Add an ADU to a property I'm buying", value: "new-property" },
                  { label: "Still exploring my options", value: "exploring" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleNext("goal", option.value)}
                    className="p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-foreground font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Model Interest */}
          {state.step === 7 && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">
                Which EarthNest model fits your budget and goals?
              </label>
              <div className="grid gap-4">
                {[
                  {
                    title: "Model 1: 20ft Studio",
                    specs: "Installed: $80K–$120K+ | Rent: $900–$1,400/mo",
                    value: "model-1",
                  },
                  {
                    title: "Model 2: 40ft One-Bedroom",
                    specs: "Installed: $120K–$175K+ | Rent: $1,200–$1,800/mo",
                    value: "model-2",
                  },
                  {
                    title: "Model 3: Traditional Site-Built",
                    specs: "Installed: $130K–$200K+ | Rent: $1,400–$2,500/mo",
                    value: "model-3",
                  },
                  { title: "Not sure yet", specs: "We'll help you decide", value: "unsure" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleNext("modelInterest", option.value)}
                    className="p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition"
                  >
                    <div className="font-semibold text-foreground">{option.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{option.specs}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 8: Contact Info */}
          {state.step === 8 && (
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                One last thing — let's get your contact info.
              </h3>
              <p className="text-muted-foreground mb-6">
                We'll reach out with your personalized evaluation and recommended next steps.
              </p>
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full bg-primary py-3 text-base">Get My Free Evaluation</Button>
                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 24 hours with your personalized assessment.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
