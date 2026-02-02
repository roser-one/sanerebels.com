"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/lets", label: "Let's Talk" },
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
            Get Started
          </Link>
        </div>
      </div>
      <div className="border-b border-border" />
    </motion.nav>
  )
}

export function AnimatedFooter() {
  return (
    <footer className="py-14 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Animated Footer Logo */}
          <Link href="/" className="flex items-center gap-1 font-medium text-sm">
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
            KNUS GmbH · Germany
          </p>
        </div>
        
        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            EU-hosted · GDPR-native · Your methodology stays yours
          </p>
          <p className="text-xs text-muted-foreground font-serif italic">
            Sane enough to build it. Rebel enough to ship it.
          </p>
        </div>
      </div>
    </footer>
  )
}
