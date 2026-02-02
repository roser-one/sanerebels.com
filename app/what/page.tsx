"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { PageWrapper } from "@/components/page-wrapper"

const processSteps = [
    {
        num: "01",
        title: "Uncover",
        phase: "Discovery — 10%",
        description: "What makes your work actually work",
        details: [
            "We extract the methodology you've never written down",
            "The patterns you see that others miss",
            "The questions you ask that change everything",
            "Separate strategic value from operational noise",
        ],
    },
    {
        num: "02",
        title: "Architect",
        phase: "Design — 10%",
        description: "The productized version",
        details: [
            "Not a course. Not a chatbot.",
            "A system that delivers your approach without diluting what makes it valuable",
            "We design the machine backbone while preserving your fingerprint",
            "Sane machine logic meets Rebel human magic",
        ],
    },
    {
        num: "03",
        title: "Build",
        phase: "Engineering — 30%",
        description: "Infrastructure, not templates",
        details: [
            "Custom software (Next.js, Supabase, n8n, Python)",
            "RevOps integration from day one",
            "AI and automation handle administration",
            "Your methodology becomes a machine that works while you sleep",
        ],
    },
    {
        num: "04",
        title: "Scale",
        phase: "Growth — 50%",
        description: "Revenue operations, not just marketing",
        details: [
            "Launch in 30-90 day sprints",
            "Lead qualification and client onboarding",
            "Watch data. Refine. Repeat.",
            "No 18-month roadmaps. Learn by shipping.",
        ],
    },
]

export default function WhatPage() {
    return (
        <PageWrapper title="How It Works">
            {/* Intro */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
                    We don't change what you do. We change how it travels.
                </p>

                <p className="mb-4">
                    You have a methodology that works. We take that expert knowledge and build digital infrastructure around it.
                </p>

                <p className="mb-4">
                    Service turns into product. It travels to a thousand places at once. You stay in one.
                </p>

                <p className="text-lg text-foreground">
                    Not replacing the human. Letting human do human work. <span className="text-accent">System handles the rest.</span>
                </p>
            </motion.div>

            <div className="border-t border-white/10 my-12" />

            {/* The Exoskeleton */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    What We Build
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    The Exoskeleton
                </h2>
                <p className="text-foreground/70">
                    Your expertise. Our engineering. Something that scales your way.
                </p>
            </motion.div>

            {/* Process Steps */}
            <div className="space-y-12">
                {processSteps.map((step, i) => (
                    <motion.div
                        key={step.num}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        className="relative"
                    >
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <span className="font-mono text-3xl font-bold text-accent/30">{step.num}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-baseline gap-4 mb-2">
                                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                    <span className="text-xs font-mono uppercase tracking-wider text-accent">{step.phase}</span>
                                </div>
                                <p className="text-foreground/80 mb-4">{step.description}</p>
                                <ul className="space-y-2">
                                    {step.details.map((detail, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-foreground/60">
                                            <span className="text-accent/50 mt-1">—</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="border-t border-white/10 my-12" />

            {/* Shared Risk Model */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    The Partnership
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Shared risk. Shared upside.
                </h2>

                <p className="mb-4">
                    We believe in what we build. No interest in "hit-and-run" consulting or hourly billing.
                </p>

                <p className="mb-4">
                    If potential exists, we co-invest. Lower upfront risk. Shared upside. Partners. Not vendors.
                </p>

                <p className="text-lg text-foreground">
                    You win. <span className="text-accent">We win.</span>
                </p>

                <div className="mt-8 p-6 rounded-xl bg-accent/5 border border-accent/20">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50 mb-1">You Invest</p>
                            <p className="text-foreground font-medium">Your expertise</p>
                        </div>
                        <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50 mb-1">We Invest</p>
                            <p className="text-foreground font-medium">Our engineering</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="border-t border-white/10 my-12" />

            {/* Momentum */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    Speed Matters
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    30-90 day sprints. Not 18-month roadmaps.
                </h2>

                <p className="mb-4">
                    Define core value. Build it. Put it in hands of real users.
                </p>

                <p className="mb-4">
                    Learn by shipping. Not by planning.
                </p>

                <p className="text-foreground/70">
                    Work happens fast because we stay focused. We manage tech. You manage vision. Partnership begins at launch.
                </p>
            </motion.div>

            <div className="mt-16 text-center">
                <Link href="/who" className="text-sm text-accent hover:underline decoration-accent/50 underline-offset-4 transition-all">
                    Who builds this? &rarr;
                </Link>
            </div>
        </PageWrapper>
    )
}
