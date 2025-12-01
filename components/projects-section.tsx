"use client"

import { ExternalLink, Github, Instagram, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  image?: string
  video?: string
  links: {
    label: string
    href: string
    icon: "external" | "github" | "instagram"
  }[]
  tags?: string[]
}

const projects: Project[] = [
  {
    id: "factorsphere",
    title: "FactorSphere",
    description:
      "Open-source SaaS platform democratizing journal metrics. Built with Cloudflare Workers + Pinecone + AI analytics. Used by researchers worldwide.",
    image: "/analytics-dashboard-dark-theme-with-charts-and-met.jpg",
    links: [
      { label: "View Project", href: "#", icon: "external" },
      { label: "GitHub", href: "https://github.com/REXFEDEC", icon: "github" },
    ],
    tags: ["Cloudflare Workers", "Pinecone", "AI Analytics"],
  },
  {
    id: "scanweb",
    title: "ScanWeb",
    description: "AI-powered vulnerability scanner with comprehensive reports, user management, Supabase backend.",
    image: "/security-scanner-interface-dark-theme-with-vulnera.jpg",
    links: [
      { label: "Try ScanWeb", href: "#", icon: "external" },
      { label: "GitHub", href: "https://github.com/REXFEDEC", icon: "github" },
    ],
    tags: ["Security", "AI", "Supabase"],
  },
  {
    id: "musik",
    title: "MusiK",
    description: "Cross-platform Flutter music app powered by YouTube Music API. Real shuffle, clean UI.",
    image: "/music-player-app-dark-theme-with-album-art-and-con.jpg",
    links: [{ label: "GitHub Repo", href: "https://github.com/REXFEDEC", icon: "github" }],
    tags: ["Flutter", "YouTube API", "Cross-platform"],
  },
  {
    id: "3d-work",
    title: "3D Work",
    description: "Blender animations, character renders, creative experimental VFX reels.",
    video: "/3d-rendered-character-animation-dark-background-ci.jpg",
    links: [{ label: "@sam33dr", href: "https://www.instagram.com/sam33dr", icon: "instagram" }],
    tags: ["Blender", "3D Animation", "VFX"],
  },
]

const iconMap = {
  external: ExternalLink,
  github: Github,
  instagram: Instagram,
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] radial-glow opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of things I've built — from open-source tools to creative experiments.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      id={project.id === "3d-work" ? "3d-work" : undefined}
      className="glass-card rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Media Container */}
      <div className="relative aspect-video overflow-hidden bg-secondary/20">
        {project.video ? (
          <div className="relative w-full h-full">
            <img
              src={project.video || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </div>
            <p className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
              Video placeholder — replace with your 3D reel
            </p>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <p className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
              Image placeholder — replace with project screenshot
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-secondary-foreground border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <Button
                key={link.label}
                asChild
                variant={link.icon === "external" ? "default" : "outline"}
                className={`rounded-full text-sm ${
                  link.icon === "external"
                    ? "glow-button bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                    : "border-border/50 hover:bg-secondary/50 text-foreground"
                }`}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="w-4 h-4 mr-2" />
                  {link.label}
                </a>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
