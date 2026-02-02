"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

const navLinks = [
  { href: "/why", label: "Why" },
  { href: "/what", label: "How" },
  { href: "/who", label: "About" },
  { href: "/lets", label: "Let's" },
]

interface PageWrapperProps {
  title: string
  subtitle?: string
  currentPath?: string
  children: React.ReactNode
}

export function PageWrapper({ title, subtitle, currentPath, children }: PageWrapperProps) {
  return (
    <main className="relative min-h-screen w-full bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 font-semibold text-sm tracking-tight">
            <span className="text-foreground">SANE</span>
            <span className="text-accent">/</span>
            <span className="text-foreground">REBELS</span>
          </Link>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  link.href === currentPath ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/lets"
              className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              {subtitle && (
                <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
                  {subtitle}
                </p>
              )}

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15]">
                {title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 max-w-3xl mx-auto w-full px-6 pb-24"
        >
          <div className="prose prose-stone prose-lg max-w-none">
            {children}
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="py-12 border-t border-border bg-card">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link href="/" className="flex items-center gap-1 font-semibold text-sm">
                <span className="text-foreground">SANE</span>
                <span className="text-accent">/</span>
                <span className="text-foreground">REBELS</span>
              </Link>
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                KNUS GmbH · Berlin
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                EU-hosted · GDPR-native · Your methodology stays yours
              </p>
              <p className="text-xs text-muted-foreground italic">
                Sane enough to build it. Rebel enough to ship it.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
