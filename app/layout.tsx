import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "SANE/REBELS — Scale Your Insight. Solve for Presence.",
    template: "%s | SANE/REBELS",
  },
  description:
    "Undivided, prolonged, human presence is the rarest thing in modern life. Turn your expertise into an always-on presence. We help you scale your methodology without sacrificing authenticity.",
  openGraph: {
    title: "SANE/REBELS — Scale Your Insight. Solve for Presence.",
    description:
      "Undivided, prolonged, human presence is the rarest thing in modern life. Turn your expertise into an always-on presence. We help you scale your methodology without sacrificing authenticity.",
    url: "https://sanerebels.com",
    siteName: "SANE/REBELS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANE/REBELS — Scale Your Insight. Solve for Presence.",
    description:
      "Undivided, prolonged, human presence is the rarest thing in modern life. Turn your expertise into an always-on presence. We help you scale your methodology without sacrificing authenticity.",
  },
  metadataBase: new URL("https://sanerebels.com"),
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sanerebels.com/#organization",
        name: "SANE/REBELS",
        legalName: "KNUS GmbH",

        url: "https://sanerebels.com",
        logo: "https://sanerebels.com/logo-light.svg",
        slogan: "Done trading time? Let's build something.",
        description:
          "The 'Exoskeleton' for expert businesses. We seek to productize human authenticity using GenAI infrastructure, moving founders from manual service delivery to scalable assets.",
        knowsAbout: [
          "RevOps",
          "GenAI Productization",
          "Profit Share Models",
          "B2B Growth Architecture",
          "SEA",
          "Productization",
        ],
        location: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Berlin",
            addressCountry: "DE",
          },
        },
        founder: {
          "@type": "Person",
          name: "Simon Roser",
          jobTitle: "Managing Director",
          url: "https://simonroser.com",
          sameAs: ["https://www.linkedin.com/in/simon-roser"],
        },
      },
      {
        "@type": "Service",
        "@id": "https://sanerebels.com/#service",
        name: "The Productization Engine",
        provider: { "@id": "https://sanerebels.com/#organization" },
        description:
          "We build the digital infrastructure that scales your expert knowledge globally without burning you out. Authenticity preserved.",
        serviceType: "GenAI Productization",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is SANE/REBELS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SANE/REBELS (KNUS GmbH) builds digital infrastructure for expert businesses. We scale human authenticity using GenAI, moving founders from manual service delivery to scalable systems.",
            },
          },
          {
            "@type": "Question",
            name: "How does the process work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We serve as a 'Venture Lab' that co-invests. We strip your business to the signal, build the machine (MVP) in 30-90 days, and scale it globally.",
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "The SANE/REBELS Productization Process",
        step: [
          {
            "@type": "HowToStep",
            name: "Discover",
            text: "We strip the business to the studs to find the 'Signal' (Unique Value).",
          },
          {
            "@type": "HowToStep",
            name: "Design",
            text: "We architect the 'Sane' machine logic vs. the 'Rebel' human magic.",
          },
          {
            "@type": "HowToStep",
            name: "Build",
            text: "We code the MVP (Next.js, Supabase, n8n, Python) in sprints.",
          },
          {
            "@type": "HowToStep",
            name: "Scale",
            text: "We launch, co-invest (Shared Risk), and iterate based on data.",
          },
        ],
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="help" href="/llms.txt" type="text/markdown" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <h1>SANE/REBELS - The Productization Engine</h1>
          <p>
            Done trading time? Let&apos;s build something. SANE/REBELS (KNUS GmbH) builds digital
            infrastructure for expert businesses. We scale human authenticity using GenAI,
            moving founders from manual service delivery to scalable systems.
          </p>
          <p>
            The Solution: We build the digital architecture that allows the human story
            to scale without burning out the founder.
          </p>
          <a href="/llms.txt">View AI Summary</a>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
