"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const navLinks = [
  { href: "/about", label: "About" },
]

interface AnimatedNavProps {
  variant?: "light" | "dark"
}

export function AnimatedNav({ variant = "light" }: AnimatedNavProps) {
  const isLight = variant === "light"
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Animated Logo */}
          <Link href="/" className="flex items-center gap-1 font-medium text-sm tracking-tight">
            <span className="relative">
              <span className="text-accent animate-logo-pulse-sane-base">SANE</span>
              <span className="absolute inset-0 text-foreground animate-logo-pulse-sane-overlay">SANE</span>
            </span>
            <span className="text-accent">/</span>
            <span className="relative">
              <span className="text-foreground animate-logo-pulse-rebels-base">REBELS</span>
              <span className="absolute inset-0 text-accent animate-logo-pulse-rebels-overlay">REBELS</span>
            </span>
          </Link>
        </div>
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
          <Link
            href="/lets"
            className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            Let's
          </Link>
        </div>
      </div>
      <div className="border-b border-border" />
    </motion.nav>
  )
}

export function AnimatedFooter() {
  return (
    <footer className="w-full py-16 border-t border-border bg-background">
      <div className="w-full px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-start">
            {/* Left - Logo, copyright, and legal links */}
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-1 font-medium text-sm mb-2">
                <span className="relative">
                  <span className="text-accent animate-logo-pulse-sane-base">SANE</span>
                  <span className="absolute inset-0 text-foreground animate-logo-pulse-sane-overlay">SANE</span>
                </span>
                <span className="text-accent">/</span>
                <span className="relative">
                  <span className="text-foreground animate-logo-pulse-rebels-base">REBELS</span>
                  <span className="absolute inset-0 text-accent animate-logo-pulse-rebels-overlay">REBELS</span>
                </span>
              </Link>
              <p className="text-xs text-muted-foreground mb-4">
                © 2026 KNUS GmbH
              </p>
              <div className="flex gap-4 text-xs text-muted-foreground md:hidden">
                <Link href="/imprint" className="hover:text-foreground transition-colors">Imprint</Link>
                <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              </div>
            </div>
            
            {/* Middle - Legal links (desktop only) */}
            <div className="hidden md:flex gap-6 text-xs text-muted-foreground justify-center">
              <Link href="/imprint" className="hover:text-foreground transition-colors">Imprint</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            </div>
            
            {/* Right - Tagline */}
            <div className="col-span-1 md:col-span-1 text-right">
              <p className="font-serif text-lg md:text-2xl text-foreground leading-snug">
                Scale your expertise.
                <br />
                <span className="text-muted-foreground italic">Stay yourself.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
