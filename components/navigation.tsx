"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const primaryLinks = [
    { label: "ADUs", href: "/#what-is-adu" },
    { label: "EarthNest", href: "/earthnest-living-systems" },
    { label: "Models", href: "/#design-options" },
    { label: "Calculator", href: "/adu-calculator" },
    { label: "Florida Rules", href: "/adu-rules" },
  ]

  const exploreLinks = [
    { label: "Free ADU Course", href: "/free-adu-course" },
    { label: "Build Process", href: "/#process" },
    { label: "Eco Upgrades", href: "/eco-upgrades" },
    { label: "Florida Tiny Living Guide", href: "/florida-tiny-living-guide" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
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
          Florida-ready prefab ADUs · Foundation-Built · Code-Aware · Eco-Conscious
        </p>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
            Prefabricated.co
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setExploreOpen((prev) => !prev)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-expanded={exploreOpen}
              aria-haspopup="menu"
            >
              Resources
            </button>
            {exploreOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 bg-background border border-border rounded-lg shadow-lg p-3 z-50">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground px-2 pb-2">
                  Explore The Platform
                </p>
                <div className="flex flex-col gap-1">
                  {exploreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-2 py-2 rounded text-sm text-foreground hover:bg-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/build"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Build Yours
          </Link>
          <Link
            href="/#qualify"
            className="inline-flex items-center px-5 py-2.5 border border-border text-foreground text-sm font-semibold rounded transition-all hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-border">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Explore</p>
            <div className="flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/build"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-colors hover:bg-[oklch(0.58_0.13_192)]"
          >
            Build Yours
          </Link>
          <Link
            href="/#qualify"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
          >
            Get Free Evaluation
          </Link>
        </div>
      )}
    </header>
  )
}
