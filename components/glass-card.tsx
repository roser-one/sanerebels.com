"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
    { href: "/why", label: "Manifest" },
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
            <div className="flex items-center justify-center gap-1 mb-6 md:mb-8">
                <span className="font-bold text-base md:text-lg tracking-tight animate-logo-pulse-sane">
                    SANE
                </span>
                <span className="text-accent font-bold text-base md:text-lg">/</span>
                <span className="font-bold text-base md:text-lg tracking-tight animate-logo-pulse-rebels">
                    REBELS
                </span>
            </div>

            {/* Tagline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 md:mb-10 leading-tight px-2">
                Done trading time?
                <br />
                <span className="text-accent">Let&apos;s build something.</span>
            </h1>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
                {navLinks.map((link, index) => (
                    <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                        <Link
                            href={link.href}
                            className="nav-link"
                        >
                            {link.label}
                        </Link>
                    </motion.div>
                ))}

                {/* Legal links moved to footer */}
            </nav>
        </motion.div>
    )
}

