import Link from "next/link"
import { Fragment, type ReactNode } from "react"

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
            rel="noopener noreferrer"
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

/**
 * Minimal markdown: ## / ### headings, paragraphs, bullet and numbered lists.
 * Inline: **bold**, *italic*, [label](url).
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
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !isListLine(lines[i])) {
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

  return <div className="blog-md">{blocks}</div>
}
