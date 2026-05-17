"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "prefab_mobile_drawer_dismissed"
const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000
const CTA_COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000

type DrawerStorage = {
  dismissedAt?: number
  ctaClickedAt?: number
}

function readStorage(): DrawerStorage {
  if (typeof window === "undefined") return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as DrawerStorage
  } catch {
    return {}
  }
}

function writeStorage(patch: Partial<DrawerStorage>) {
  const prev = readStorage()
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prev, ...patch }))
}

function isDrawerCoolingDown(): boolean {
  const { dismissedAt, ctaClickedAt } = readStorage()
  const now = Date.now()
  if (ctaClickedAt && now - ctaClickedAt < CTA_COOLDOWN_MS) return true
  if (dismissedAt && now - dismissedAt < DISMISS_COOLDOWN_MS) return true
  return false
}

function useIsMobileMaxMd(): boolean {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const set = () => setMatches(mq.matches)
    set()
    mq.addEventListener("change", set)
    return () => mq.removeEventListener("change", set)
  }, [])
  return matches
}

const RESOURCE_PREFIXES = [
  "/resources",
  "/county-guide",
  "/free-adu-course",
  "/florida-tiny-living-guide",
]

function isAduLocalPath(pathname: string): boolean {
  return /^\/adu-/.test(pathname)
}

function isResourcePath(pathname: string): boolean {
  return RESOURCE_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))
}

function isEligiblePath(pathname: string): boolean {
  if (pathname.startsWith("/qualify")) return false
  if (pathname === "/adu-calculator") return false
  return isAduLocalPath(pathname) || isResourcePath(pathname)
}

function scheduleAfterIdle(fn: () => void): { cancel: () => void } {
  if (typeof window === "undefined") return { cancel: () => {} }
  let idleId: number | undefined
  const run = () => {
    fn()
  }
  if ("requestIdleCallback" in window) {
    idleId = window.requestIdleCallback(run, { timeout: 2500 })
    return {
      cancel: () => {
        if (idleId !== undefined) window.cancelIdleCallback(idleId)
      },
    }
  }
  const t = window.setTimeout(run, 0)
  return { cancel: () => clearTimeout(t) }
}

function scrollDepthPassed(): boolean {
  const el = document.documentElement
  const scrollable = el.scrollHeight - window.innerHeight
  if (scrollable <= 0) return true
  return window.scrollY / scrollable >= 0.5
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function MobileConversionDrawer() {
  const pathname = usePathname() ?? ""
  const isMobile = useIsMobileMaxMd()
  const [open, setOpen] = useState(false)
  const openedRef = useRef(false)

  const eligible = isEligiblePath(pathname)

  const dismiss = useCallback(() => {
    writeStorage({ dismissedAt: Date.now() })
    setOpen(false)
  }, [])

  const tryOpen = useCallback(() => {
    if (!isMobile || !eligible || openedRef.current) return
    if (isDrawerCoolingDown()) return
    openedRef.current = true
    setOpen(true)
  }, [eligible, isMobile])

  useEffect(() => {
    openedRef.current = false
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobile || !eligible) return
    if (isDrawerCoolingDown()) return

    const onScroll = () => {
      if (!isAduLocalPath(pathname)) return
      if (scrollDepthPassed()) tryOpen()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    let timeoutId: ReturnType<typeof setTimeout> | undefined
    const idleCancel = scheduleAfterIdle(() => {
      timeoutId = window.setTimeout(() => {
        tryOpen()
      }, 45_000)
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
      idleCancel.cancel()
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }, [eligible, isMobile, pathname, tryOpen])

  const onCtaClick = useCallback(() => {
    writeStorage({ ctaClickedAt: Date.now() })
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", { source: "mobile_conversion_drawer" })
    }
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!isMobile || !eligible) return null

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[90] bg-black/40 transition-opacity duration-200 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
        onClick={dismiss}
      />
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-[91] md:hidden max-h-[85vh] overflow-y-auto rounded-t-2xl border-t-2 border-primary/35 bg-[oklch(0.992_0.006_88)] shadow-[0_-8px_32px_oklch(0_0_0/0.12)] transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "translate-y-full pointer-events-none",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-drawer-title"
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-lg px-5 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border" aria-hidden />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={dismiss}
              className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Dismiss"
            >
              <XIcon className="size-5" />
            </button>
          </div>
          <h2 id="mobile-drawer-title" className="font-serif text-xl text-foreground pr-8 -mt-2 text-balance">
            Run a Free Pre-Flight Property Map Check
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Instantly see if your specific Central Florida lot passes local 2026 county zoning setbacks, HOA
            restrictions, and utility infrastructure requirements.
          </p>
          <Link
            href="/qualify?source=mobile_drawer"
            onClick={onCtaClick}
            className="mt-6 flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 active:opacity-90"
          >
            Check My Property Eligibility
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="mt-4 w-full text-center text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Dismiss
          </button>
        </div>
      </div>
    </>
  )
}
