"use client"

import { Code, Heart, Sparkles } from "lucide-react"

const skills = ["Python", "Cloudflare Workers", "Linux", "JavaScript", "MySQL", "Git", "Blender"]

const exploring = ["Rust", "Homelabbing", "Distributed Systems"]

const interests = ["AI", "Security Tooling", "Backend Systems", "Flutter Apps", "3D Art"]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main About Card */}
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-border/40 bg-primary/15">
              <img src="/sm.png" alt="Sameer Mann logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Sameer Mann</h3>
              <p className="text-muted-foreground">21 years old • Final-year CS Student</p>
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I love building meaningful things. For me,{" "}
              <span className="text-foreground font-medium">creativity {">"} conformity</span>. I believe in doing work
              that matters, driven by kindness and curiosity.
            </p>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-secondary/50 rounded-full text-sm text-secondary-foreground border border-border/50"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Fluent With</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm text-primary border border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Exploring */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Currently Exploring</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {exploring.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-accent/10 rounded-full text-sm text-accent border border-accent/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                Values: <span className="text-foreground">kindness</span>,{" "}
                <span className="text-foreground">curiosity</span>, and{" "}
                <span className="text-foreground">doing work that matters</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
