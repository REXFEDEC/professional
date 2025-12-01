"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sparkles } from "lucide-react"
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
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop navbar */}
      <nav className="fixed z-50 hidden md:flex justify-center top-0 left-0 right-0 pt-4 pointer-events-none">
        <div
          className={cn(
            "pointer-events-auto glass-card border border-border/50 shadow-lg shadow-primary/5",
            "transition-[border-radius,padding,max-width] duration-500 ease-out",
            isScrolled ? "rounded-full py-2 px-2 max-w-fit" : "rounded-2xl py-3 px-4 max-w-4xl w-[90%]",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group px-2">
              <div
                className={cn(
                  "rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30",
                  "transition-all duration-500 ease-out",
                  isScrolled ? "w-7 h-7" : "w-8 h-8",
                )}
              >
                <Sparkles
                  className={cn(
                    "text-primary transition-all duration-500 ease-out",
                    isScrolled ? "w-3.5 h-3.5" : "w-4 h-4",
                  )}
                />
              </div>
              <span
                className={cn(
                  "font-bold text-foreground whitespace-nowrap transition-all duration-500 ease-out",
                  isScrolled ? "text-sm" : "text-lg",
                )}
              >
                Sameer Mann
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="flex items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground font-medium rounded-full hover:bg-secondary/50 whitespace-nowrap",
                    "transition-all duration-500 ease-out",
                    isScrolled ? "text-xs px-3 py-1.5" : "text-sm px-4 py-2",
                  )}
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
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
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
