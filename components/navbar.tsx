"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#chatbot", label: "Chatbot" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden md:block border-b border-border/60 transition-colors",
          isScrolled ? "bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75" : "bg-background/70"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/sm.png"
              alt="Sameer Mann"
              className="hidden aspect-square w-9 rounded-full border border-border/50 bg-primary/20 md:block"
            />
            <span className="text-base font-semibold text-foreground">Sameer Mann</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="#connect"
            className="hidden items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10 md:inline-flex"
          >
            Let’s connect
          </Link>
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <img 
                src="/sm.png"
                alt="Sameer Mann"
                className="w-8 h-8 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors"
              />
              <span className="text-lg font-bold text-foreground">Sameer Mann</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="#connect"
                className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10"
              >
                Let’s connect
              </Link>
              <button
                className="relative w-6 h-6 flex flex-col items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    "absolute w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out",
                    isMobileMenuOpen ? "rotate-45 top-[11px]" : "rotate-0 top-[6px]",
                  )}
                />
                <span
                  className={cn(
                    "absolute w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out top-[11px]",
                    isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out",
                    isMobileMenuOpen ? "-rotate-45 top-[11px]" : "rotate-0 top-[16px]",
                  )}
                />
              </button>
            </div>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-out",
              isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0",
            )}
          >
            <div className="pb-4 border-t border-border/50 pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium",
                      isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                    )}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
