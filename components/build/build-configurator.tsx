"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { StepProgress, type BuildWizardStep } from "@/components/build/step-progress"
import { SummaryBar } from "@/components/build/summary-bar"
import { Step2Model } from "@/components/build/step2-model"
import { Step3Customize } from "@/components/build/step3-customize"
import { Step4Inquiry } from "@/components/build/step4-inquiry"
import { ThankYou } from "@/components/build/thank-you"
import {
  BUILD_SESSION_KEY,
  canContinueStep,
  calculateOptionsTotal,
  DEFAULT_BUILD_SESSION,
  getSelectedModel,
  type BuildSession,
  type BuildStep,
} from "@/lib/build/session"

function parseStep(raw: string | null): BuildStep {
  const n = Number(raw)
  if (n === 1 || n === 2 || n === 3 || n === 4) return n
  return 1
}

export function BuildConfigurator() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [session, setSession] = useState<BuildSession>(DEFAULT_BUILD_SESSION)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [animatedOptionsTotal, setAnimatedOptionsTotal] = useState(0)
  const rafRef = useRef<number | null>(null)

  const stepFromUrl = parseStep(searchParams.get("step"))
  const selectedModel = getSelectedModel(session.selectedModelId)
  const basePrice = selectedModel?.startingAt ?? 0
  const optionsTotal = calculateOptionsTotal(session)

  useEffect(() => {
    const fromStorage = sessionStorage.getItem(BUILD_SESSION_KEY)
    if (!fromStorage) return
    try {
      const parsed = JSON.parse(fromStorage) as BuildSession
      const c = parsed.customizations
      setSession({
        ...DEFAULT_BUILD_SESSION,
        ...parsed,
        step: stepFromUrl,
        customizations: {
          exterior: { ...DEFAULT_BUILD_SESSION.customizations.exterior, ...c?.exterior },
          interior: { ...DEFAULT_BUILD_SESSION.customizations.interior, ...c?.interior },
          systems: {
            ...DEFAULT_BUILD_SESSION.customizations.systems,
            ...c?.systems,
            addOns: c?.systems?.addOns ?? DEFAULT_BUILD_SESSION.customizations.systems.addOns,
          },
          earthnestEco: c?.earthnestEco ?? DEFAULT_BUILD_SESSION.customizations.earthnestEco,
        },
      })
    } catch {
      setSession((prev) => ({ ...prev, step: stepFromUrl }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setSession((prev) => ({ ...prev, step: stepFromUrl }))
  }, [stepFromUrl])

  useEffect(() => {
    sessionStorage.setItem(BUILD_SESSION_KEY, JSON.stringify(session))
  }, [session])

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const start = animatedOptionsTotal
    const end = optionsTotal
    const duration = 220
    const startedAt = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - startedAt) / duration, 1)
      const next = Math.round(start + (end - start) * p)
      setAnimatedOptionsTotal(next)
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsTotal])

  const updateStepInUrl = useCallback(
    (next: BuildStep) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set("step", String(next))
      router.replace(`${pathname}?${params.toString()}`)
    },
    [pathname, router, searchParams]
  )

  const setStep = useCallback(
    (next: BuildStep) => {
      setSession((prev) => ({ ...prev, step: next }))
      updateStepInUrl(next)
    },
    [updateStepInUrl]
  )

  const canVisitWizardStep = useCallback(
    (target: BuildWizardStep) => {
      if (target <= session.step) return true
      if (target === 2) return Boolean(session.selectedModelId)
      if (target === 3) return canContinueStep(session, 2)
      return false
    },
    [session]
  )

  const handleSelectModel = useCallback(
    (modelId: BuildSession["selectedModelId"]) => {
      if (!modelId) return
      setSession((prev) => ({ ...prev, selectedModelId: modelId, step: 2 }))
      updateStepInUrl(2)
    },
    [updateStepInUrl]
  )

  const handleSelectSingle = useCallback((path: string, optionId: string) => {
    setSession((prev) => {
      const next = structuredClone(prev)
      const [group, field] = path.split(".")
      if (group === "exterior") (next.customizations.exterior as Record<string, string | null>)[field] = optionId
      if (group === "interior") (next.customizations.interior as Record<string, string | null>)[field] = optionId
      if (group === "systems") (next.customizations.systems as Record<string, string | string[]>)[field] = optionId
      return next
    })
  }, [])

  const handleToggleAddon = useCallback((optionId: string) => {
    setSession((prev) => {
      const addOns = prev.customizations.systems.addOns
      const has = addOns.includes(optionId)
      return {
        ...prev,
        customizations: {
          ...prev.customizations,
          systems: {
            ...prev.customizations.systems,
            addOns: has ? addOns.filter((item) => item !== optionId) : [...addOns, optionId],
          },
        },
      }
    })
  }, [])

  const handleToggleEarthnestEco = useCallback((optionId: string) => {
    setSession((prev) => {
      const cur = prev.customizations.earthnestEco ?? []
      const has = cur.includes(optionId)
      return {
        ...prev,
        customizations: {
          ...prev.customizations,
          earthnestEco: has ? cur.filter((id) => id !== optionId) : [...cur, optionId],
        },
      }
    })
  }, [])

  const nextDisabled = useMemo(() => !canContinueStep(session, session.step), [session])
  const nextLabel =
    session.step === 2 ? "Review & Inquire" : session.step === 3 ? "Submit" : "Next Step"

  const onWizardClick = useCallback(
    (next: BuildWizardStep) => {
      setStep(next as BuildStep)
    },
    [setStep]
  )

  const content = (
    <div className="transition-opacity duration-300">
      {session.step === 1 ? (
        <Step2Model selectedModelId={session.selectedModelId} onSelectModel={handleSelectModel} />
      ) : null}
      {session.step === 2 ? (
        <Step3Customize
          session={session}
          basePrice={basePrice}
          optionsTotal={animatedOptionsTotal}
          onSelectSingle={handleSelectSingle}
          onToggleAddon={handleToggleAddon}
          onToggleEarthnestEco={handleToggleEarthnestEco}
        />
      ) : null}
      {session.step === 3 ? (
        <Step4Inquiry
          session={session}
          onSubmitted={(email) => {
            setSubmittedEmail(email)
            setStep(4)
          }}
        />
      ) : null}
      {session.step === 4 ? (
        <ThankYou modelName={selectedModel?.name} email={submittedEmail} />
      ) : null}
    </div>
  )

  const showProgressAndBar = session.step <= 3
  const wizardStep = (session.step <= 3 ? session.step : 3) as BuildWizardStep

  return (
    <div className="bg-[rgb(250,250,248)] min-h-screen pb-20">
      {showProgressAndBar ? (
        <StepProgress step={wizardStep} onStepClick={onWizardClick} canVisitStep={canVisitWizardStep} />
      ) : null}
      {content}
      {showProgressAndBar ? (
        <SummaryBar
          session={session}
          step={session.step}
          canGoNext={!nextDisabled}
          nextLabel={nextLabel}
          onBack={() => setStep(Math.max(1, session.step - 1) as BuildStep)}
          onNext={() => {
            if (session.step === 3) return
            if (nextDisabled) return
            setStep((session.step + 1) as BuildStep)
          }}
        />
      ) : null}
    </div>
  )
}
