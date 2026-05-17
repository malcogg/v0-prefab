import Link from "next/link"
import { Fragment, type ReactNode } from "react"

function inlineNodes(text: string, keyPrefix: string): ReactNode {
  const bits = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return bits.map((bit, idx) => {
    const m = bit.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (m) {
      const label = m[1]
      const href = m[2]
      const isExternal = /^https?:\/\//i.test(href)
      if (isExternal) {
        return (
          <a
            key={`${keyPrefix}-${idx}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4 hover:no-underline"
          >
            {label}
          </a>
        )
      }
      return (
        <Link key={`${keyPrefix}-${idx}`} href={href} className="font-medium text-primary underline underline-offset-4 hover:no-underline">
          {label}
        </Link>
      )
    }
    return <Fragment key={`${keyPrefix}-${idx}`}>{bit}</Fragment>
  })
}

/**
 * Minimal markdown: ## / ### headings, blank-line paragraphs, - bullet lists.
 * Inline: [label](url) — external http(s) opens in new tab.
 */
export function BlogMarkdownBody({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n")
  const blocks: ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === "") {
      i++
      continue
    }
    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="font-serif text-2xl md:text-3xl text-foreground mt-10 mb-4 scroll-mt-28">
          {inlineNodes(line.slice(3).trim(), `h2-${key}`)}
        </h2>
      )
      i++
      continue
    }
    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={key++} className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-3">
          {inlineNodes(line.slice(4).trim(), `h3-${key}`)}
        </h3>
      )
      i++
      continue
    }
    if (line.startsWith("- ")) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim())
        i++
      }
      blocks.push(
        <ul key={key++} className="my-4 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
          {items.map((item, j) => (
            <li key={j} className="text-foreground/90">
              {inlineNodes(item, `li-${key}-${j}`)}
            </li>
          ))}
        </ul>
      )
      continue
    }
    const para: string[] = [line]
    i++
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].startsWith("- ")) {
      para.push(lines[i])
      i++
    }
    const text = para.join(" ").trim()
    if (text) {
      blocks.push(
        <p key={key++} className="text-base md:text-lg text-muted-foreground leading-[1.75] text-pretty mb-5">
          {inlineNodes(text, `p-${key}`)}
        </p>
      )
    }
  }

  return <div className="blog-md">{blocks}</div>
}
