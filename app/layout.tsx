import type React from "react"
import { Suspense } from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { ClientRedirect } from "@/components/client-redirect"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sameer.goneto.space"),
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
  icons: {
    icon: "/sm.png",
    shortcut: "/sm.png",
    apple: "/sm.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Sameer Mann — Software Developer & CS Student",
    description: "Building thoughtful software. Studying computer science. Experimenting with ideas.",
    siteName: "Sameer Mann Portfolio",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Sameer Mann Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Mann — Software Developer & CS Student",
    description: "Building thoughtful software. Studying computer science. Experimenting with ideas.",
    images: ["/meta.png"],
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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://sameer.goneto.space" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CustomCursor />
        <Suspense fallback={null}>
          <ClientRedirect />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
