import Image from "next/image"
import Link from "next/link"
import { Fragment, type ReactNode } from "react"

import { BlogInlineCta } from "@/components/blog/blog-inline-cta"
import { externalLinkRel } from "@/lib/affiliate-url"
import { BLOG_CTA_MARKER, type BlogCtaVariant } from "@/lib/blog/cta-types"

function isListLine(line: string): boolean {
  const t = line.trim()
  return t.startsWith("- ") || t.startsWith("* ") || /^\d+\.\s/.test(t)
}

function listItemText(line: string): string {
  const t = line.trim()
  if (t.startsWith("- ") || t.startsWith("* ")) return t.slice(2).trim()
  return t.replace(/^\d+\.\s*/, "").trim()
}

function isOrderedListLine(line: string): boolean {
  return /^\d+\.\s/.test(line.trim())
}

function isSpecialLine(line: string): boolean {
  const t = line.trim()
  return (
    t.startsWith("## ") ||
    t.startsWith("### ") ||
    isListLine(line) ||
    t.startsWith(":::product") ||
    t === ":::" ||
    /^!\[[^\]]*\]\([^)]+\)$/.test(t) ||
    t === BLOG_CTA_MARKER
  )
}

function inlineNodes(text: string, keyPrefix: string): ReactNode {
  const bits = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return bits.map((bit, idx) => {
    const link = bit.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const label = link[1]
      const href = link[2]
      const isExternal = /^https?:\/\//i.test(href)
      if (isExternal) {
        return (
          <a
            key={`${keyPrefix}-${idx}`}
            href={href}
            target="_blank"
            rel={externalLinkRel(href)}
            className="font-medium text-primary underline underline-offset-4 hover:no-underline"
          >
            {label}
          </a>
        )
      }
      return (
        <Link
          key={`${keyPrefix}-${idx}`}
          href={href}
          className="font-medium text-primary underline underline-offset-4 hover:no-underline"
        >
          {label}
        </Link>
      )
    }
    const bold = bit.match(/^\*\*([^*]+)\*\*$/)
    if (bold) {
      return (
        <strong key={`${keyPrefix}-${idx}`} className="font-semibold text-foreground">
          {bold[1]}
        </strong>
      )
    }
    const italic = bit.match(/^\*([^*]+)\*$/)
    if (italic) {
      return <em key={`${keyPrefix}-${idx}`}>{italic[1]}</em>
    }
    return <Fragment key={`${keyPrefix}-${idx}`}>{bit}</Fragment>
  })
}

function insertMidpointCtaMarker(source: string): string {
  if (source.includes(BLOG_CTA_MARKER)) return source
  const lines = source.replace(/\r\n/g, "\n").split("\n")
  const h2LineIndices: number[] = []
  lines.forEach((line, idx) => {
    if (line.startsWith("## ")) h2LineIndices.push(idx)
  })
  if (h2LineIndices.length < 2) return source
  const insertBefore = h2LineIndices[Math.ceil(h2LineIndices.length / 2)]
  const next = [...lines]
  next.splice(insertBefore, 0, "", BLOG_CTA_MARKER, "")
  return next.join("\n")
}

function parseBlocks(source: string): ReactNode[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n")
  const blocks: ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === "" || line.trim() === BLOG_CTA_MARKER) {
      i++
      continue
    }

    const imageMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (imageMatch) {
      const alt = imageMatch[1]
      const src = imageMatch[2]
      blocks.push(
        <figure key={key++} className="my-8 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50">
          <Image src={src} alt={alt || ""} width={1200} height={675} className="w-full h-auto" />
          {alt ? (
            <figcaption className="px-4 py-3 text-xs text-neutral-600 leading-relaxed border-t border-neutral-200">
              {alt}
            </figcaption>
          ) : null}
        </figure>,
      )
      i++
      continue
    }

    if (line.trim() === ":::product") {
      i++
      const productLines: string[] = []
      while (i < lines.length && lines[i].trim() !== ":::") {
        productLines.push(lines[i].trim())
        i++
      }
      if (i < lines.length) i++
      const label = productLines[0] ?? "Recommended product"
      const href = productLines[1] ?? ""
      if (href) {
        blocks.push(
          <div key={key++} className="my-8 p-6 border border-neutral-200 rounded-xl bg-neutral-50">
            <h4 className="font-bold text-neutral-900">{label}</h4>
            <a
              href={href}
              target="_blank"
              rel={externalLinkRel(href)}
              className="text-teal-700 hover:underline"
            >
              → Shop / view product
            </a>
          </div>,
        )
      }
      continue
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="font-serif text-2xl md:text-3xl text-foreground mt-10 mb-4 scroll-mt-28">
          {inlineNodes(line.slice(3).trim(), `h2-${key}`)}
        </h2>,
      )
      i++
      continue
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={key++} className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-3">
          {inlineNodes(line.slice(4).trim(), `h3-${key}`)}
        </h3>,
      )
      i++
      continue
    }

    if (isListLine(line)) {
      const ordered = isOrderedListLine(line)
      const items: string[] = []
      while (i < lines.length && isListLine(lines[i])) {
        items.push(listItemText(lines[i]))
        i++
      }
      const ListTag = ordered ? "ol" : "ul"
      blocks.push(
        <ListTag
          key={key++}
          className={`my-4 space-y-2 pl-6 text-muted-foreground leading-relaxed ${ordered ? "list-decimal" : "list-disc"}`}
        >
          {items.map((item, j) => (
            <li key={j} className="text-foreground/90">
              {inlineNodes(item, `li-${key}-${j}`)}
            </li>
          ))}
        </ListTag>,
      )
      continue
    }

    const para: string[] = [line]
    i++
    while (i < lines.length && lines[i].trim() !== "" && !isSpecialLine(lines[i])) {
      para.push(lines[i])
      i++
    }
    const text = para.join(" ").trim()
    if (text) {
      blocks.push(
        <p key={key++} className="text-base md:text-lg text-muted-foreground leading-[1.75] text-pretty mb-5">
          {inlineNodes(text, `p-${key}`)}
        </p>,
      )
    }
  }

  return blocks
}

type BlogMarkdownBodyProps = {
  source: string
  ctaVariant?: BlogCtaVariant
}

export function BlogMarkdownBody({ source, ctaVariant }: BlogMarkdownBodyProps) {
  const prepared = ctaVariant ? insertMidpointCtaMarker(source) : source
  const segments = prepared.split(BLOG_CTA_MARKER)

  return (
    <div className="blog-md">
      {segments.map((segment, idx) => (
        <Fragment key={idx}>
          {parseBlocks(segment.trim())}
          {ctaVariant && idx < segments.length - 1 ? <BlogInlineCta variant={ctaVariant} /> : null}
        </Fragment>
      ))}
    </div>
  )
}
