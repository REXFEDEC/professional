import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const footerLinks = [
  { icon: Github, href: "https://github.com/REXFEDEC", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sameer-mann", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sameermann5335@gmail.com", label: "Email" },
  { icon: FileText, href: "#", label: "Resume" },
]

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Sameer Mann — Crafted with curiosity, caffeine, and Cloudflare Workers.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-secondary/50 transition-colors group"
              >
                <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="sr-only">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
