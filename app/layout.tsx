import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Sameer Mann — Software Developer & CS Student",
  description:
    "A 21-year-old final-year Computer Science engineering student who loves building useful tools, experimenting with AI, exploring security, and creating 3D animations.",
  keywords: [
    "Sameer Mann",
    "Software Developer",
    "Computer Science",
    "AI",
    "Security",
    "Flutter",
    "3D Animation",
    "Blender",
  ],
  authors: [{ name: "Sameer Mann" }],
  creator: "Sameer Mann",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameer.goneto.space",
    title: "Sameer Mann — Software Developer & CS Student",
    description: "Building thoughtful software. Studying computer science. Experimenting with ideas.",
    siteName: "Sameer Mann Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Mann — Software Developer & CS Student",
    description: "Building thoughtful software. Studying computer science. Experimenting with ideas.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
