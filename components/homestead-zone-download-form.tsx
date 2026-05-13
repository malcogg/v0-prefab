"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { FloridaZoneCode, ZoneLookupSource } from "@/lib/florida-homestead-zones"

export type HomesteadZoneDownloadSnapshot = {
  zone: FloridaZoneCode
  lookupSource: ZoneLookupSource
  matchedLabel: string
  isFloridaZip: boolean
  addressQuery: string
  lunarSnapshotIso: string
}

type Status = "idle" | "loading" | "success" | "error"

export function HomesteadZoneDownloadForm({ snapshot }: { snapshot: HomesteadZoneDownloadSnapshot }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMessage(null)
    try {
      const res = await fetch("/api/homestead-zone-report", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          zone: snapshot.zone,
          lookupSource: snapshot.lookupSource,
          matchedLabel: snapshot.matchedLabel,
          isFloridaZip: snapshot.isFloridaZip,
          addressQuery: snapshot.addressQuery,
          lunarSnapshotIso: snapshot.lunarSnapshotIso,
        }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string; emailSent?: boolean }
      if (!res.ok || !data.ok) {
        setStatus("error")
        setMessage(data.error ?? "Something went wrong. Please try again.")
        return
      }
      setStatus("success")
      setMessage(
        data.emailSent === false
          ? "You’re on the list—we saved your request but email delivery may be delayed. Email us at prefabflorida@gmail.com if the PDF doesn’t arrive."
          : "Check your inbox for your personalized PDF (and spam/promotions if needed).",
      )
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <section className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/5 to-secondary/40 p-6 md:p-8">
      <h4 className="font-serif text-2xl text-foreground">Download your zone report (PDF)</h4>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
        Enter your details to receive a <strong className="text-foreground">personalized PDF</strong> with
        your Zone {snapshot.zone} crops, closed-loop pattern, seasonal notes, and the lunar snapshot from
        when you ran this tool. We store your request to improve the guides (see our privacy policy on the
        contact page). <strong className="text-foreground">Dashboard / saved results are coming later.</strong>
      </p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2 max-w-xl">
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="hz-name">
            Name
          </label>
          <Input
            id="hz-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className="mt-1.5"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="hz-phone">
            Phone
          </label>
          <Input
            id="hz-phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            autoComplete="tel"
            className="mt-1.5"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="hz-email">
            Email
          </label>
          <Input
            id="hz-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="mt-1.5"
          />
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" size="lg" className="gap-2" disabled={status === "loading" || status === "success"}>
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Sending…
              </>
            ) : status === "success" ? (
              "PDF requested"
            ) : (
              "Email me the PDF"
            )}
          </Button>
        </div>
      </form>
      {message && (
        <p
          className={`mt-4 text-sm leading-relaxed ${status === "error" ? "text-destructive" : "text-foreground"}`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      )}
    </section>
  )
}
