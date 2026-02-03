"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"

interface PageWrapperProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function PageWrapper({ title, subtitle, children }: PageWrapperProps) {
  return (
    <main className="relative min-h-screen w-full bg-background overflow-x-hidden">
      <AnimatedNav />

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

        <AnimatedFooter />
      </div>
    </main>
  )
}
