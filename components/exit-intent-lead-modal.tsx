"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CheckCircle, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "prefab_exit_intent_v1"
const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000
const SUBMIT_COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000
const SESSION_SHOWN_KEY = "prefab_exit_intent_shown"

/** Paths where exit capture is noisy or redundant */
const EXCLUDED_PATH_PREFIXES = ["/qualify"]

type Stored = { dismissedAt?: number; submittedAt?: number }

function readStored(): Stored {
  if (typeof window === "undefined") return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as Stored
  } catch {
    return {}
  }
}

function writeStored(patch: Stored) {
  const prev = readStored()
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prev, ...patch }))
}

function isCooldownActive(): boolean {
  const { dismissedAt, submittedAt } = readStored()
  const now = Date.now()
  if (submittedAt && now - submittedAt < SUBMIT_COOLDOWN_MS) return true
  if (dismissedAt && now - dismissedAt < DISMISS_COOLDOWN_MS) return true
  return false
}

type UiInterest = "tiny_homes" | "adu" | "earthnest" | "village" | "not_sure"

const INTERESTS: { id: UiInterest; label: string }[] = [
  { id: "adu", label: "ADU / backyard" },
  { id: "tiny_homes", label: "Tiny homes" },
  { id: "earthnest", label: "EarthNest" },
  { id: "village", label: "Village / rental" },
  { id: "not_sure", label: "Not sure yet" },
]

export function ExitIntentLeadModal() {
  const pathname = usePathname() ?? ""
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [zip, setZip] = useState("")
  const [picked, setPicked] = useState<UiInterest[]>(["adu"])
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [state, setState] = useState<"idle" | "loading" | "done" | "err">("idle")
  const [err, setErr] = useState<string | null>(null)

  const excluded = EXCLUDED_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))

  const tryOpen = useCallback(() => {
    if (excluded) return
    if (typeof window === "undefined") return
    if (isCooldownActive()) return
    if (sessionStorage.getItem(SESSION_SHOWN_KEY) === "1") return
    const coarse = window.matchMedia("(pointer: coarse)").matches
    if (coarse) return
    sessionStorage.setItem(SESSION_SHOWN_KEY, "1")
    setOpen(true)
  }, [excluded])

  useEffect(() => {
    if (excluded) return
    if (typeof window === "undefined") return
    if (isCooldownActive()) return

    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return
      tryOpen()
    }

    document.documentElement.addEventListener("mouseleave", onLeave)
    return () => document.documentElement.removeEventListener("mouseleave", onLeave)
  }, [excluded, tryOpen])

  const toggle = (id: UiInterest) => {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  }

  const onOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next && state !== "done" && state !== "loading") {
      writeStored({ dismissedAt: Date.now() })
    }
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
          phone: "",
          message: "Exit-intent modal",
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
        window.gtag("event", "generate_lead", {
          event_category: "Exit intent",
          event_label: "Exit modal",
        })
      }
      writeStored({ submittedAt: Date.now() })
      setState("done")
    } catch {
      setErr("Network error.")
      setState("idle")
    }
  }

  if (excluded) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" showCloseButton>
        {state === "done" ? (
          <div className="py-6 text-center space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-7 w-7 text-primary" />
            </div>
            <DialogHeader className="sm:text-center">
              <DialogTitle className="font-serif text-xl">You&apos;re on the list</DialogTitle>
              <DialogDescription>
                We&apos;ll follow up shortly. Want zoning-aware recommendations?{" "}
                <Link href="/qualify" className="text-primary font-medium hover:underline">
                  Complete full qualification
                </Link>
                .
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Before you go — quick save</DialogTitle>
              <DialogDescription>
                Leave your email and ZIP. We&apos;ll send a short note with next steps for Florida ADUs, tiny
                homes, or EarthNest paths (no spam).
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => void submit(e)} className="space-y-4">
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
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-foreground">Name</label>
                  <input
                    required
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </div>
                <div>
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
              </div>
              <div className="flex gap-3 items-start rounded-lg border border-border bg-secondary/40 p-3">
                <Checkbox
                  id="exit-intent-marketing"
                  checked={marketingConsent}
                  onCheckedChange={(v) => setMarketingConsent(v === true)}
                  className="mt-0.5"
                  aria-required
                />
                <Label
                  htmlFor="exit-intent-marketing"
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
                  "Send me next steps"
                )}
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                We respect your privacy.{" "}
                <button
                  type="button"
                  className="underline underline-offset-2"
                  onClick={() => onOpenChange(false)}
                >
                  No thanks
                </button>
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
