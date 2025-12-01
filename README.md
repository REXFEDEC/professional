# Sameer Mann — Personal Portfolio

A dark, futuristic, minimalistic personal portfolio website built with Next.js 15, Tailwind CSS v4, and shadcn/ui.

## 🚀 Live Site

[https://sameer.goneto.space](https://sameer.goneto.space)

## ✨ Features

- **Dark Futuristic Design** — Deep black background with subtle grid textures and radial glows
- **Glassmorphic UI** — Semi-transparent cards with backdrop blur effects
- **Smooth Animations** — Fade-ins, hover effects, and floating elements
- **AI Chatbot Widget** — Integrated chatbot with customizable backend endpoint
- **Fully Responsive** — Mobile-first design that works on all devices
- **SEO Optimized** — Proper meta tags, Open Graph, and Twitter cards

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Typography:** Space Grotesk
- **Deployment:** Cloudflare Pages

## 📦 Installation

### Option 1: Using npm (Recommended)

\`\`\`bash
# Clone the repository
git clone https://github.com/REXFEDEC/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

### Option 2: Using shadcn CLI

\`\`\`bash
npx shadcn@latest init
\`\`\`

## 🔧 Development

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
\`\`\`

## 🚀 Deployment to Cloudflare Pages

### Method 1: Direct Upload

1. Build your project:
   \`\`\`bash
   npm run build
   \`\`\`

2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/?to=/:account/pages)

3. Create a new project → Direct Upload

4. Upload the `out` folder (or `.next` for SSR)

### Method 2: Git Integration

1. Push your code to GitHub

2. Go to Cloudflare Pages Dashboard

3. Create a new project → Connect to Git

4. Select your repository

5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Node version:** 18+

6. Deploy!

### Environment Variables

If using the chatbot feature, set:
- `NEXT_PUBLIC_CHATBOT_URL` — Your Cloudflare Worker endpoint

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css      # Global styles and design tokens
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── navbar.tsx       # Navigation bar
│   ├── hero-section.tsx # Hero section
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   └── chatbot-widget.tsx
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
\`\`\`

## 🎨 Customization

### Chatbot Endpoint

Update the chatbot API endpoint in `components/chatbot-widget.tsx`:

\`\`\`tsx
const response = await fetch("https://sameer.goneto.space/your-worker-url", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMessage.content }),
})
\`\`\`

### Project Images

Replace placeholder images in `components/projects-section.tsx` with your actual project screenshots.

### Colors

Modify the design tokens in `app/globals.css` to change the color scheme.

## 📄 License

MIT License — feel free to use this template for your own portfolio!

## 👤 Author

**Sameer Mann**
- GitHub: [@REXFEDEC](https://github.com/REXFEDEC)
- LinkedIn: [sameer-mann](https://www.linkedin.com/in/sameer-mann)
- Instagram: [@sameer.mkv](https://www.instagram.com/sameer.mkv)

---

*Crafted with curiosity, caffeine, and Cloudflare Workers.*
