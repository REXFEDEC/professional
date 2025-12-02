# Sameer Mann — Portfolio

A futuristic personal site showcasing Sameer Mann’s software projects, experiments, and interactive AI assistant. Think glassmorphism, glowing accents, and storytelling designed for recruiters, collaborators, and fellow builders who stumble onto the repo.

## 🌐 Quick Links

- **Live site:** [sameer.goneto.space](https://sameer.goneto.space)
- **Resume:** [Download PDF](/res.pdf)
- **Flagship projects:**
  - [FactorSphere](https://lander.factorsphere.org) – AI-powered research metrics
  - [ScanWeb](https://scan.goneto.space) – security scanner with intelligent reporting
  - [MusiK](https://github.com/REXFEDEC/musik) – cross-platform music app
- **Email:** [sameermann5335@gmail.com](mailto:sameermann5335@gmail.com)

## ✨ Highlights

- **Cohesive brand system** built around the new `sm.png` mark, custom favicons, and social preview art (`meta.png`).
- **Rich project cards** featuring custom imagery (`scan.png`, `musik.png`, `factor.png`) and a hover-to-play 3D reel (`exp.mp4`).
- **Chatbot experience** powered by a Cloudflare Worker, complete with bespoke avatars (`human.png`, `robo.png`) and keyboard-friendly interactions.
- **Responsive glassmorphism**: desktop gets a Vercel-inspired navbar, mobile keeps a minimalist hamburger + CTA duo.
- **SEO & PWA ready** through tailored metadata, manifest, and icon set.

## 🧱 Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS v4 with custom tokens/effects
- **UI Kit:** shadcn/ui (Radix primitives with theme styling)
- **Fonts:** Space Grotesk & Geist Mono
- **Hosting:** Cloudflare Pages (`sameer.goneto.space`, fallback `sameerm.pages.dev`)
- **Chatbot backend:** Cloudflare Workers (`adhdbackend.sameermann5335.workers.dev`)

## 🗺️ Page Tour

- **Hero:** Animated intro with CTA and highlight stats.
- **Projects:** Four spotlight cards (FactorSphere, ScanWeb, MusiK, 3D Work) with external links and tech badges.
- **Experience sections:** About snapshot, timeline, testimonials, and contact grid.
- **Chatbot:** “Sameer’s AI assistant” featuring robo avatar, typing indicator, and real responses from the Worker.
- **Footer:** Glass card with social links (GitHub, LinkedIn, Email, Resume) and a playful sign-off.

## 🤖 Chatbot Notes

- Frontend: [components/chatbot-section.tsx](cci:7://file:///c:/Users/samee/Downloads/portfolio-website-design/components/chatbot-section.tsx:0:0-0:0)
- Endpoint: `https://adhdbackend.sameermann5335.workers.dev/`
- Response parsing covers both `response` and `reply` keys
- Avatars: `/human.png` (user) & `/robo.png` (assistant), plus `/robo.png` in the header and typing indicator

## 🖼️ Branding & Assets

| Asset | Purpose |
| --- | --- |
| `sm.png` | Primary logo, favicon source, manifest icons |
| `meta.png` | Open Graph & Twitter cards |
| `factor.png`, `scan.png`, `musik.png`, `exp.mp4` | Project visuals |
| `robo.png`, `human.png` | Chatbot avatars |
| `res.pdf` | Latest résumé |

All assets live in [/public](cci:7://file:///c:/Users/samee/Downloads/portfolio-website-design/public:0:0-0:0), so Cloudflare can serve them straight from the CDN edge.

## 📦 Build & Deploy Snapshot

- Static export is enabled via [next.config.mjs](cci:7://file:///c:/Users/samee/Downloads/portfolio-website-design/next.config.mjs:0:0-0:0) (`output: "export"`).
- `pnpm build` compiles the site and writes the bundle into [/out](cci:7://file:///c:/Users/samee/Downloads/portfolio-website-design/out:0:0-0:0).
- Cloudflare Pages runs `pnpm install && pnpm build`, then serves [/out](cci:7://file:///c:/Users/samee/Downloads/portfolio-website-design/out:0:0-0:0).
- `_redirects` + a client-side check nudge visitors from `sameerm.pages.dev` to `sameer.goneto.space`.

## 🤝 Connect

- GitHub: [@REXFEDEC](https://github.com/REXFEDEC)
- LinkedIn: [sameer-mann](https://www.linkedin.com/in/sameer-mann)
- Email: [sameermann5335@gmail.com](mailto:sameermann5335@gmail.com)

---

Crafted with curiosity, caffeine, Cloudflare Workers — and a soft spot for polished interfaces.