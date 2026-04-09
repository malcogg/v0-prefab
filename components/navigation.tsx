"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "What is an ADU?", href: "#what-is-adu" },
    { label: "ADU Rules by County", href: "/adu-rules" },
    { label: "ADU Calculator", href: "/adu-calculator" },
    { label: "The Opportunity", href: "#opportunity" },
    { label: "Our Process", href: "#process" },
    { label: "EarthNest Model", href: "#earthnest" },
    { label: "Our Team", href: "#team" },
    { label: "Partners", href: "#partners" },
    { label: "FAQ", href: "/faq" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/96 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/88 backdrop-blur-sm border-b border-border/70"
      }`}
    >
      <div className="bg-primary/90 border-b border-primary/50 px-4 py-2">
        <p className="text-center text-primary-foreground text-[11px] font-medium tracking-wide uppercase">
          All ADUs are Foundation-Built · Fully Permitted · Florida Building Code Compliant
        </p>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
            prefabricated.co
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="#qualify"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-accent-foreground hover:bg-[oklch(0.58_0.13_192)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get Free Evaluation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#qualify"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-colors hover:bg-[oklch(0.58_0.13_192)]"
          >
            Get Free Evaluation
          </Link>
        </div>
      )}
    </header>
  )
}
