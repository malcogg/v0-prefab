"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type SiteSearchFormProps = {
  initialQuery?: string
  idPrefix?: string
  placeholder?: string
  className?: string
  inputClassName?: string
  /** Centered, full-width layout for homepage */
  centered?: boolean
}

export function SiteSearchForm({
  initialQuery = "",
  idPrefix = "site",
  placeholder = "Search ADUs, communities, guides, blog…",
  className,
  inputClassName,
  centered = false,
}: SiteSearchFormProps) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)
  const inputId = `${idPrefix}-search`

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    router.push(`/search?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col sm:flex-row gap-3",
        centered ? "max-w-xl mx-auto w-full" : "max-w-2xl",
        className,
      )}
      role="search"
    >
      <label htmlFor={inputId} className="sr-only">
        Search Prefabricated.co
      </label>
      <Input
        id={inputId}
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className={cn("h-11 flex-1 bg-background", inputClassName)}
        autoComplete="off"
      />
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.58_0.13_192)] shrink-0"
      >
        Search
      </button>
    </form>
  )
}
