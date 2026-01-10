"use client"

import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Radial Glow Background */}
      <div className="absolute inset-0 radial-glow-strong pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div data-animate-on-scroll className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
          Building thoughtful software.
          <br />
          <span className="text-muted-foreground">Studying computer science.</span>
          <br />
          <span className="text-primary">Experimenting with ideas.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          A 21-year-old final-year Computer Science engineering student who loves building useful tools, experimenting
          with AI, exploring security, and creating 3D animations.
        </p>

        {/* CTA Buttons */}
        <div data-animate-on-scroll className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base font-medium"
          >
            <Link href="#projects">
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-border/50 hover:bg-secondary/50 text-foreground rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base font-medium bg-transparent"
          >
            <Link href="#connect">Contact Me</Link>
          </Button>

          <Button asChild variant="ghost" className="hover:bg-secondary/50 text-foreground rounded-full p-3">
            <a href="https://github.com/REXFEDEC" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
