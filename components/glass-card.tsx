"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
    { href: "/why", label: "Wait, but why?" },
    { href: "/what", label: "How" },
    { href: "/who", label: "About" },
    { href: "/lets", label: "Let's" },
]

export function GlassCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card"
        >
            {/* Logo */}
            <div className="flex items-center justify-center gap-1 mb-6 md:mb-8 text-base md:text-lg font-bold tracking-tight">
                <div className="relative">
                    <span className="opacity-0">SANE</span>
                    <span className="absolute inset-0 text-accent animate-logo-pulse-sane-base">SANE</span>
                    <span className="absolute inset-0 text-foreground animate-logo-pulse-sane-overlay">SANE</span>
                </div>
                <span className="text-accent">/</span>
                <div className="relative">
                    <span className="opacity-0">REBELS</span>
                    <span className="absolute inset-0 text-foreground animate-logo-pulse-rebels-base">REBELS</span>
                    <span className="absolute inset-0 text-accent animate-logo-pulse-rebels-overlay">REBELS</span>
                </div>
            </div>

            {/* Tagline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 md:mb-10 leading-tight px-2">
                Done trading time?
                <br />
                <span className="text-accent">Let&apos;s build something.</span>
            </h1>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center">
                {navLinks.map((link, index) => (
                    <div key={link.href} className="flex items-center">
                        {index > 0 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                className="text-accent/30 font-mono text-[0.6rem] mx-2 sm:mx-3 select-none"
                            >
                                /
                            </motion.span>
                        )}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "nav-link",
                                    index === 0 ? "font-bold text-foreground/90" : "text-foreground/50 font-normal"
                                )}
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    </div>
                ))}

                {/* Legal links moved to footer */}
            </nav>
        </motion.div>
    )
}

