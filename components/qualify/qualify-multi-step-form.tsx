"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { BUDGET_OPTIONS, MODEL_TAG_OPTIONS, PROJECT_TYPE_OPTIONS, type UiProjectType } from "@/lib/qualify/form-options"
import { qualifyFullSubmissionSchema, type QualifyFullSubmission, utilitySchema } from "@/lib/qualify/schema"
import type { QualifyReport } from "@/lib/qualify/types"

type Draft = {
  fullName: string
  email: string
  phone: string
  zip: string
  city: string
  state: string
  floridaResidence: "yes" | "no" | "not_sure" | ""
  projectTypes: UiProjectType[]
  landStatus: "yes" | "no" | "looking" | ""
  propertyInFlorida: "yes" | "no" | "not_sure" | ""
  zoning: string
  floodZone: "yes" | "no" | "not_sure" | ""
  hoa: "yes" | "no" | "not_sure" | ""
  utilities: string[]
  desiredUse: QualifyFullSubmission["desiredUse"] | ""
  budgetRange: QualifyFullSubmission["budgetRange"] | ""
  timeline: string
  modelInterest: string
  offGrid: QualifyFullSubmission["offGrid"] | ""
  bedrooms: QualifyFullSubmission["bedrooms"] | ""
  notes: string
}

const emptyDraft: Draft = {
  fullName: "",
  email: "",
  phone: "",
  zip: "",
  city: "",
  state: "",
  floridaResidence: "",
  projectTypes: [],
  landStatus: "",
  propertyInFlorida: "",
  zoning: "",
  floodZone: "",
  hoa: "",
  utilities: [],
  desiredUse: "",
  budgetRange: "",
  timeline: "",
  modelInterest: "",
  offGrid: "",
  bedrooms: "",
  notes: "",
}

const STEP_LABELS = ["You", "Project", "Property", "Budget", "Details"]

function triButton(current: string, onPick: (v: string) => void, options: { id: string; label: string }[]) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onPick(o.id)}
          className={cn(
            "rounded-lg border px-4 py-2.5 text-sm font-medium transition-all",
            current === o.id
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary/35",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function QualifyMultiStepForm() {
  const searchParams = useSearchParams()
  const attributionSource = useMemo(() => {
    const raw = searchParams.get("source")?.trim() ?? ""
    if (!raw || raw.length > 80) return "direct"
    if (!/^[a-zA-Z0-9_-]+$/.test(raw)) return "direct"
    return raw
  }, [searchParams])

  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<Draft>(emptyDraft)
  const [submitting, setSubmitting] = useState(false)
  const [clientError, setClientError] = useState<string | null>(null)
  const [report, setReport] = useState<QualifyReport | null>(null)

  const utilityToggle = (id: string) => {
    setDraft((d) => {
      const u = d.utilities.includes(id) ? d.utilities.filter((x) => x !== id) : [...d.utilities, id]
      return { ...d, utilities: u }
    })
  }

  const toggleProject = (id: UiProjectType) => {
    setDraft((d) => ({
      ...d,
      projectTypes: d.projectTypes.includes(id) ? d.projectTypes.filter((p) => p !== id) : [...d.projectTypes, id],
    }))
  }

  const toPayload = (): unknown => ({
    fullName: draft.fullName.trim(),
    email: draft.email.trim(),
    phone: draft.phone.trim(),
    zip: draft.zip.trim(),
    city: draft.city.trim(),
    state: draft.state.trim(),
    floridaResidence: draft.floridaResidence,
    projectTypes: draft.projectTypes,
    landStatus: draft.landStatus,
    propertyInFlorida: draft.landStatus === "yes" ? draft.propertyInFlorida || undefined : undefined,
    zoning: draft.landStatus === "yes" ? draft.zoning.trim() : "",
    floodZone: draft.landStatus === "yes" ? draft.floodZone || undefined : undefined,
    hoa: draft.landStatus === "yes" ? draft.hoa || undefined : undefined,
    utilities: draft.landStatus === "yes" ? draft.utilities.filter((u) => utilitySchema.safeParse(u).success) : [],
    desiredUse: draft.desiredUse || undefined,
    budgetRange: draft.budgetRange,
    timeline: draft.timeline.trim(),
    modelInterest: draft.modelInterest.trim(),
    offGrid: draft.offGrid || undefined,
    bedrooms: draft.bedrooms || undefined,
    notes: draft.notes.trim(),
    source: attributionSource,
  })

  const validateStep = (s: number): string | null => {
    if (s === 0) {
      if (!draft.fullName.trim()) return "Name is required."
      if (!draft.email.trim()) return "Email is required."
      if (!draft.phone.trim()) return "Phone is required."
      if (!/^\d{5}(-\d{4})?$/.test(draft.zip.trim())) return "Enter a valid U.S. ZIP."
      if (!draft.floridaResidence) return "Let us know if you are in Florida."
    }
    if (s === 1) {
      if (draft.projectTypes.length === 0) return "Pick at least one project type."
    }
    if (s === 2) {
      if (!draft.landStatus) return "Select your land situation."
      if (draft.landStatus === "yes") {
        if (!draft.propertyInFlorida) return "Is the property in Florida?"
        if (!draft.zoning.trim()) return "Zoning (or choose “I don’t know”)."
        if (!draft.floodZone) return "Flood zone helps us guide you."
        if (!draft.hoa) return "HOA question is required."
      }
      if (!draft.desiredUse) return "Select intended use."
    }
    if (s === 3) {
      if (!draft.budgetRange) return "Select a budget range."
      if (!draft.timeline.trim()) return "Share your timeline."
    }
    return null
  }

  const goNext = () => {
    setClientError(null)
    const err = validateStep(step)
    if (err) {
      setClientError(err)
      return
    }
    setStep((x) => Math.min(x + 1, STEP_LABELS.length - 1))
  }

  const goBack = () => {
    setClientError(null)
    setStep((x) => Math.max(x - 1, 0))
  }

  const submit = async () => {
    setClientError(null)
    const raw = toPayload()
    const parsed = qualifyFullSubmissionSchema.safeParse(raw)
    if (!parsed.success) {
      const first = parsed.error.flatten()
      const msg =
        first.fieldErrors &&
        Object.values(first.fieldErrors).flat()[0]
          ? String(Object.values(first.fieldErrors).flat()[0])
          : parsed.error.errors[0]?.message ?? "Check your answers and try again."
      setClientError(msg)
      const path = parsed.error.errors[0]?.path[0]
      if (path === "fullName" || path === "email" || path === "phone" || path === "zip" || path === "floridaResidence")
        setStep(0)
      else if (path === "projectTypes") setStep(1)
      else if (
        path === "landStatus" ||
        path === "propertyInFlorida" ||
        path === "zoning" ||
        path === "floodZone" ||
        path === "hoa" ||
        path === "desiredUse"
      )
        setStep(2)
      else if (path === "budgetRange" || path === "timeline") setStep(3)
      else setStep(4)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch("/api/qualify-leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => null)
        setClientError(typeof j?.error === "string" ? j.error : "Submission failed. Try again.")
        setSubmitting(false)
        return
      }
      const j = (await res.json()) as { ok: boolean; report: QualifyReport }
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Qualify",
          event_label: "Full qualification",
          source: parsed.data.source,
        })
      }
      setReport(j.report)
    } catch {
      setClientError("Network error. Try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const progress = useMemo(() => ((step + 1) / STEP_LABELS.length) * 100, [step])

  if (report) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground text-balance">{report.headline}</h2>
          <p className="mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
            We emailed you this summary. A specialist will follow up within one business day with zoning-aware next steps.
          </p>
        </div>

        <ul className="space-y-2 text-sm text-foreground/90 leading-relaxed mb-8">
          {report.summaryBullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {report.models.length > 0 ? (
          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">Models to explore</h3>
            <div className="space-y-3">
              {report.models.map((m) => (
                <div key={m.href} className="rounded-xl border border-border/80 bg-secondary/30 p-4">
                  <p className="font-medium text-foreground">{m.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{m.reason}</p>
                  <Link
                    href={(() => {
                      try {
                        return new URL(m.href).pathname
                      } catch {
                        return m.href
                      }
                    })()}
                    className="text-sm font-medium text-primary mt-2 inline-block hover:underline"
                  >
                    View model →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {report.floridaNotes ? (
          <div className="mb-8 rounded-xl border border-border/70 bg-[oklch(0.985_0.012_85)] p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">Florida & site notes</h3>
            <ul className="space-y-2 text-sm text-foreground/85">
              {report.floridaNotes.map((n) => (
                <li key={n}>• {n}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <p className="text-sm text-muted-foreground mb-6">{report.timelineSummary}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/escape-tiny-homes"
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
          >
            Browse Escape lineup
          </Link>
          <Link
            href="/adu-calculator"
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary/80"
          >
            ADU calculator
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <div className="mb-8">
        <div className="flex justify-between text-xs font-medium text-muted-foreground mb-2">
          <span>
            Step {step + 1} of {STEP_LABELS.length}
          </span>
          <span>{STEP_LABELS[step]}</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {clientError ? (
        <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {clientError}
        </div>
      ) : null}

      {step === 0 ? (
        <div className="space-y-5">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Start with how we can reach you. ZIP helps us prep locality-aware recommendations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Full name</label>
              <input
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
                value={draft.fullName}
                onChange={(e) => setDraft((d) => ({ ...d, fullName: e.target.value }))}
                autoComplete="name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Email</label>
              <input
                type="email"
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
                value={draft.email}
                onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                autoComplete="email"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Phone</label>
              <input
                type="tel"
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
                value={draft.phone}
                onChange={(e) => setDraft((d) => ({ ...d, phone: e.target.value }))}
                autoComplete="tel"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-foreground">ZIP code *</label>
              <input
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
                value={draft.zip}
                onChange={(e) => setDraft((d) => ({ ...d, zip: e.target.value }))}
                autoComplete="postal-code"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-foreground">City (optional)</label>
              <input
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
                value={draft.city}
                onChange={(e) => setDraft((d) => ({ ...d, city: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-foreground">State (optional)</label>
              <input
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm uppercase max-w-[120px]"
                value={draft.state}
                onChange={(e) => setDraft((d) => ({ ...d, state: e.target.value.slice(0, 2) }))}
                placeholder="FL"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">
              Are you in Florida?
            </label>
            {triButton(draft.floridaResidence, (v) => setDraft((d) => ({ ...d, floridaResidence: v as Draft["floridaResidence"] })), [
              { id: "yes", label: "Yes" },
              { id: "no", label: "No" },
              { id: "not_sure", label: "Not sure" },
            ])}
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">Select everything that fits — we will personalize from there.</p>
          <div className="grid gap-3">
            {PROJECT_TYPE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleProject(opt.id)}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left transition-all",
                  draft.projectTypes.includes(opt.id)
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/30",
                )}
              >
                <p className="font-medium text-foreground text-sm">{opt.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{opt.hint}</p>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">
              Land / property today?
            </label>
            {triButton(draft.landStatus, (v) => setDraft((d) => ({ ...d, landStatus: v as Draft["landStatus"] })), [
              { id: "yes", label: "I own property" },
              { id: "looking", label: "Looking for land" },
              { id: "no", label: "Not yet" },
            ])}
          </div>

          {draft.landStatus === "yes" ? (
            <>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">
                  Property in Florida?
                </label>
                {triButton(
                  draft.propertyInFlorida,
                  (v) => setDraft((d) => ({ ...d, propertyInFlorida: v as Draft["propertyInFlorida"] })),
                  [
                    { id: "yes", label: "Yes" },
                    { id: "no", label: "No" },
                    { id: "not_sure", label: "Not sure" },
                  ],
                )}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Zoning</label>
                <select
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
                  value={draft.zoning}
                  onChange={(e) => setDraft((d) => ({ ...d, zoning: e.target.value }))}
                >
                  <option value="">Select…</option>
                  <option value="dont_know">I don’t know</option>
                  <option value="residential">Residential / single-family</option>
                  <option value="ag">Agricultural / rural</option>
                  <option value="mixed">Mixed / other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">
                  Flood zone
                </label>
                {triButton(draft.floodZone, (v) => setDraft((d) => ({ ...d, floodZone: v as Draft["floodZone"] })), [
                  { id: "yes", label: "Yes" },
                  { id: "no", label: "No" },
                  { id: "not_sure", label: "Not sure" },
                ])}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">HOA rules</label>
                {triButton(draft.hoa, (v) => setDraft((d) => ({ ...d, hoa: v as Draft["hoa"] })), [
                  { id: "yes", label: "Yes" },
                  { id: "no", label: "No" },
                  { id: "not_sure", label: "Not sure" },
                ])}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">
                  Utilities on-site
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "power", label: "Power" },
                    { id: "water", label: "Water" },
                    { id: "sewer", label: "Sewer" },
                    { id: "septic", label: "Septic" },
                    { id: "none", label: "None yet" },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => utilityToggle(u.id)}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-xs font-medium transition-all",
                        draft.utilities.includes(u.id)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">
              Desired use
            </label>
            <select
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
              value={draft.desiredUse}
              onChange={(e) => setDraft((d) => ({ ...d, desiredUse: e.target.value as Draft["desiredUse"] }))}
            >
              <option value="">Select…</option>
              <option value="primary">Primary residence</option>
              <option value="guest_adu">Guest house / ADU</option>
              <option value="airbnb">Airbnb / rental (where allowed)</option>
              <option value="retreat_office">Retreat / office</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">
              Budget range (installed / all-in rough sense)
            </label>
            <div className="grid gap-2">
              {BUDGET_OPTIONS.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setDraft((d) => ({ ...d, budgetRange: b.id }))}
                  className={cn(
                    "rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all",
                    draft.budgetRange === b.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/35",
                  )}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Timeline goals</label>
            <textarea
              className="mt-1.5 w-full min-h-[100px] rounded-lg border border-border bg-background px-4 py-3 text-sm"
              placeholder="e.g. hoping to start in 6–12 months after permits…"
              value={draft.timeline}
              onChange={(e) => setDraft((d) => ({ ...d, timeline: e.target.value }))}
            />
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Escape model interest</label>
            <select
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
              value={draft.modelInterest}
              onChange={(e) => setDraft((d) => ({ ...d, modelInterest: e.target.value }))}
            >
              <option value="">No preference / multiple</option>
              {MODEL_TAG_OPTIONS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 block">
              Off-grid interest
            </label>
            {triButton(draft.offGrid, (v) => setDraft((d) => ({ ...d, offGrid: v as Draft["offGrid"] })), [
              { id: "yes", label: "Yes" },
              { id: "somewhat", label: "Somewhat" },
              { id: "no", label: "No" },
            ])}
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Bedrooms</label>
            <select
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
              value={draft.bedrooms}
              onChange={(e) => setDraft((d) => ({ ...d, bedrooms: e.target.value as Draft["bedrooms"] }))}
            >
              <option value="">Flexible / unsure</option>
              <option value="studio">Studio / loft</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4plus">4+</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Notes</label>
            <textarea
              className="mt-1.5 w-full min-h-[88px] rounded-lg border border-border bg-background px-4 py-3 text-sm"
              placeholder="HOA name, septic constraints, architectural style, anything else…"
              value={draft.notes}
              onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
            />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We respect your privacy — your information is used only to prepare recommendations and follow up. No spam.
          </p>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0 || submitting}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        {step < STEP_LABELS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => void submit()}
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95 disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Get my snapshot
                <CheckCircle className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
