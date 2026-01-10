"use client"

import type React from "react"
import { useState } from "react"
import { Github, Linkedin, Instagram, Coffee, Mail, ArrowUpRight, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/REXFEDEC",
    label: "GitHub",
    username: "@REXFEDEC",
    description: "Where the code lives",
    color: "group-hover:text-white",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sameer-mann",
    label: "LinkedIn",
    username: "sameer-mann",
    description: "Professional stuff",
    color: "group-hover:text-blue-400",
  },
  {
    icon: Coffee,
    href: "https://buymeacoffee.com/sameermann",
    label: "Buy Me a Coffee",
    username: "sameermann",
    description: "Fuel the caffeine addiction",
    color: "group-hover:text-yellow-400",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })

    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="connect" className="relative py-32 px-6" data-animate-on-scroll>
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto" data-animate-on-scroll>
        {/* Section Header */}
        <div className="text-center mb-16" data-animate-on-scroll>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pick your preferred way to reach out. I'm always happy to chat about projects, ideas, or just geek out about
            tech.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card hover-lift rounded-2xl p-6 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              data-animate-on-scroll
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 radial-glow-strong pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 ${link.color}`}
                  >
                    <link.icon className="w-6 h-6 text-primary transition-colors duration-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">{link.label}</h3>
                <p className="text-sm text-primary font-medium mb-2">{link.username}</p>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Extra CTA */}
        <div className="mt-16" data-animate-on-scroll>
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto flex flex-col items-center text-center">
            <p className="text-lg text-muted-foreground mb-2">Prefer a quick email?</p>
            <a
              href="mailto:sameermann5335@gmail.com"
              className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors break-words"
            >
              sameermann5335@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
