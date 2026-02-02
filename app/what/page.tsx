"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
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
    <PageWrapper 
      title="We don't change what you do. We change how it travels."
      subtitle="How It Works"
      currentPath="/what"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          You have a methodology that works. We take that expert knowledge and build digital infrastructure around it.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Service turns into product. It travels to a thousand places at once. You stay in one.
        </p>
        <p className="text-lg text-foreground">
          Not replacing the human. Letting human do human work. System handles the rest.
        </p>
      </motion.div>

      {/* The Exoskeleton */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
          What We Build
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
          The Exoskeleton
        </h2>
        <p className="text-muted-foreground">
          Your expertise. Our engineering. Something that scales your way.
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="mt-12 space-y-12">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-serif text-3xl text-accent/40">{step.num}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-4 mb-2">
                  <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">{step.phase}</span>
                </div>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
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

      {/* Shared Risk Model */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
          The Partnership
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          Shared risk. Shared upside.
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            We believe in what we build. No interest in "hit-and-run" consulting or hourly billing.
          </p>
          <p>
            If potential exists, we co-invest. Lower upfront risk. Shared upside. Partners. Not vendors.
          </p>
          <p className="text-foreground">
            You win. We win.
          </p>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">You Invest</p>
              <p className="text-foreground font-medium">Your expertise</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">We Invest</p>
              <p className="text-foreground font-medium">Our engineering</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Speed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
          Speed Matters
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          30-90 day sprints. Not 18-month roadmaps.
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Define core value. Build it. Put it in hands of real users.
          </p>
          <p>
            Learn by shipping. Not by planning.
          </p>
          <p>
            Work happens fast because we stay focused. We manage tech. You manage vision. Partnership begins at launch.
          </p>
        </div>
      </motion.div>

      {/* CTAs */}
      <div className="mt-16 flex flex-col sm:flex-row gap-4">
        <Link
          href="/lets"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
        >
          Start the Conversation
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/who"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
        >
          Who Builds This?
        </Link>
      </div>
    </PageWrapper>
  )
}
