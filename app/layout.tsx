import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SANE/REBELS — Done trading time? Let's build something.",
  description:
    "The 'Exoskeleton' for expert businesses. We productize human authenticity using GenAI infrastructure. Scale your business, keep your soul. Operated by KNUS GmbH.",
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
        alternateName: ["ROSER & REBELS"],
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
          "We build the 'Exoskeleton' that scales your expert knowledge globally without burning you out. Authenticity engineered.",
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
              text: "SANE/REBELS (KNUS GmbH) is the commercial 'Exoskeleton' for expert businesses. We productize human authenticity using GenAI infrastructure.",
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
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <h1>SANE/REBELS - The Productization Engine</h1>
          <p>
            Done trading time? Let&apos;s build something. SANE/REBELS (KNUS GmbH) is the commercial
            &quot;Exoskeleton&quot; for expert businesses. We seek to productize human authenticity
            using GenAI infrastructure, moving founders from manual service delivery to scalable
            assets.
          </p>
          <p>
            The Solution: We build the &quot;Exoskeleton&quot; (RevOps, Automation, AI) that
            allows the human story to scale without burning out the founder.
          </p>
          <a href="/llms.txt">View AI Summary</a>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
