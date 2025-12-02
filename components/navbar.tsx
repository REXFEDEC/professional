"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#3d-work", label: "3D Work" },
  { href: "#chatbot", label: "Chatbot" },
  { href: "#connect", label: "Connect" },
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
      <nav className="fixed z-50 hidden md:flex justify-center top-0 left-0 right-0 pt-6 pointer-events-none">
        <div
          className={cn(
            "pointer-events-auto glass-card border border-border/50 shadow-lg shadow-primary/5 transition-all duration-500 w-full max-w-5xl px-8 py-4 rounded-2xl",
            isScrolled && "bg-background/80 backdrop-blur-xl"
          )}
        >
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/sm.png"
                alt="Sameer Mann"
                className="rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"
                width={36}
                height={36}
              />
              <span className="font-bold text-lg text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
                Sameer Mann
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground font-medium rounded-full hover:bg-secondary/60 px-4 py-2 whitespace-nowrap transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
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
