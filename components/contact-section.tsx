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
    icon: Instagram,
    href: "https://www.instagram.com/sameer.mkv",
    label: "Instagram",
    username: "@sameer.mkv",
    description: "Life in frames",
    color: "group-hover:text-pink-400",
  },
  {
    icon: Coffee,
    href: "https://buymeacoffee.com/sameermann",
    label: "Buy Me a Coffee",
    username: "sameermann",
    description: "Fuel the caffeine addiction",
    color: "group-hover:text-yellow-400",
  },
  {
    icon: Mail,
    href: "mailto:sameermann5335@gmail.com",
    label: "Email",
    username: "sameermann5335@gmail.com",
    description: "Old school works too",
    color: "group-hover:text-green-400",
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
    <section id="connect" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
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
              className="group relative glass-card rounded-2xl p-6 hover:bg-secondary/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
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

        {/* Contact Form */}
        <div className="glass-card rounded-2xl p-8 mt-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Your message..."
                required
                rows={5}
                className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full rounded-full py-6 text-base font-medium transition-all ${
                isSubmitted
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "glow-button bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Message Sent!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Extra CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-2">Prefer a quick email?</p>
            <a
              href="mailto:sameermann5335@gmail.com"
              className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors"
            >
              sameermann5335@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
