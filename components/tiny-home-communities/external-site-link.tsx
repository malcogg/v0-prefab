import type { ComponentPropsWithoutRef } from "react"

type Props = Omit<ComponentPropsWithoutRef<"a">, "target" | "rel"> & {
  href: string
}

export function ExternalSiteLink({ className, children, href, ...rest }: Props) {
  return (
    <a {...rest} href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
