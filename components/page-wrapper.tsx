"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"
import { SiteFooter } from "@/components/site-footer"

interface PageWrapperProps {
    title: string
    children: React.ReactNode
}

export function PageWrapper({ title, children }: PageWrapperProps) {
    return (
        <main className="relative min-h-screen w-full bg-background overflow-x-hidden">
            <GrainOverlay />

            {/* Animated Gradient Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] animate-gradient-shift" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.25_295_/_0.4),_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.60_0.20_30_/_0.3),_transparent_50%)]" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col px-4 py-6 md:px-8 md:py-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors mb-8 md:mb-12"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Link>
                </motion.div>

                {/* Page Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 max-w-2xl mx-auto w-full"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-10">
                        {title}
                    </h1>
                    <div className="prose prose-invert prose-lg max-w-none space-y-6 text-foreground/80">
                        {children}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <SiteFooter />
                </motion.div>
            </div>
        </main>
    )
}
