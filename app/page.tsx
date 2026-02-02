"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Shield, Server, Lock, Users } from "lucide-react"

const navLinks = [
  { href: "/why", label: "Why" },
  { href: "/what", label: "How" },
  { href: "/who", label: "About" },
  { href: "/lets", label: "Let's" },
]

const useCases = [
  {
    id: "coaches",
    label: "Coaches",
    headline: "Be Present, Even When You're Not",
    subheadline: "And practitioners & healers too.",
    description: "You're at capacity. Every client gets you, which is why they keep coming. But you can't help more people without losing what makes the work effective.",
    benefits: [
      "Scale your practice without diluting your methodology",
      "Support clients between sessions, authentically",
      "Reach people you'll never meet in person",
    ],
    cta: "Build for Coaches",
  },
  {
    id: "consultants",
    label: "Consultants",
    headline: "Your Methodology, Multiplied",
    subheadline: "And advisors & strategists.",
    description: "Your work is too nuanced to productize. That's what you've told yourself. But the nuance IS the product. We just need to capture it properly.",
    benefits: [
      "Architect methodologies that scale without becoming generic",
      "Qualify leads with your actual framework",
      "Deliver your approach at enterprise scale",
    ],
    cta: "Build for Consultants",
  },
  {
    id: "experts",
    label: "Experts",
    headline: "Frameworks That Work Without You",
    subheadline: "And specialists & thought leaders.",
    description: "You see patterns others miss. You've built frameworks that actually work. But explaining them takes too long, and nobody else can deliver them like you can.",
    benefits: [
      "Engineer delivery systems for your intellectual property",
      "Monetize expertise without extra effort",
      "Create personalized, interactive learning experiences",
    ],
    cta: "Build for Experts",
  },
]

const trustPillars = [
  {
    title: "Built to protect your methodology",
    description: "Your intellectual property maintains integrity over time. Your authenticity stays intact, trusted by your audience now—and forever.",
    icon: Shield,
  },
  {
    title: "Complete ownership",
    description: "We believe your methodology is your most precious asset. It's securely stored, fully documented, and never shared or sold.",
    icon: Lock,
  },
  {
    title: "Privacy first, always",
    description: "We uphold strict privacy standards. GDPR-native infrastructure keeps your business private and your clients protected.",
    icon: Server,
  },
  {
    title: "You're in control",
    description: "Your productized system speaks only your methodology. It never improvises without your consent. You stay in the loop.",
    icon: Users,
  },
]

const stats = [
  { value: "57%", label: "of small businesses investing in AI now" },
  { value: "5.6h", label: "saved weekly by workers using AI" },
  { value: "6%", label: "of companies see real returns" },
]

export default function Home() {
  const [activeUseCase, setActiveUseCase] = useState(0)

  return (
    <main className="relative min-h-screen w-full bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
      >
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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
      </motion.nav>

      {/* Hero Section - Warm Gradient */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.70_0.14_50)] via-[oklch(0.65_0.15_45)] to-[oklch(0.60_0.16_40)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 mb-8">
              <span className="text-white/70">SANE/REBELS</span>
            </p>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] mb-6 text-balance">
              Your Expertise, Amplified
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              We co-build productized systems with service providers who are done being the bottleneck. Your methodology becomes a machine that scales—without losing what makes it work.
            </p>
            
            <Link
              href="/lets"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 text-[oklch(0.35_0.05_50)] font-medium rounded-lg hover:bg-white transition-all shadow-lg"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Multiply your
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              expert impact.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              With SANE/REBELS, you'll be able to serve clients at scale, maintain consistent support between sessions, and gain valuable insights into your community's needs.
            </p>
          </motion.div>

          {/* Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-card border border-border"
          >
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Scale your practice
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Offer the gift of conversation to your customers. Let them turn to your system for advice, tips, and clarifications on material covered during your sessions. All responses are delivered in your authentic voice, drawing exclusively from content you've authored—ensuring every insight truly comes from you.
              </p>
              <Link
                href="/lets"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative bg-gradient-to-br from-[oklch(0.70_0.14_50)] to-[oklch(0.60_0.16_40)] p-8 md:p-12 flex items-end justify-end min-h-[300px]">
              <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                {["Books", "Notes", "Substack", "YouTube", "Slack"].map((source) => (
                  <span key={source} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">
              The Reality
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Everyone is talking about AI.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">57% of small businesses</span> are investing in it now. Up from 36% two years ago. And the average worker using AI saves <span className="text-foreground font-medium">5.6 hours a week</span>.
              </p>
              <p>
                But most people are running in circles. Trying every tool. Committing to nothing. <span className="text-foreground font-medium">45% worry</span> that too much AI will hurt their reputation.
              </p>
              <p className="text-xl text-foreground">
                The people actually winning aren't loud about it. They figured out something simple: their methodology is the asset. Not their time.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-serif text-accent mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section - Delphi Style Tabs */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="inline-flex items-center px-4 py-2 rounded-full border border-border text-sm text-muted-foreground mb-6">
              Use Cases
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              Experts on call.
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              And coaches, consultants & more.
            </h2>
          </motion.div>

          {/* Use Case Tabs */}
          <div className="flex justify-center gap-8 mb-12">
            {useCases.map((useCase, i) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(i)}
                className={`text-sm font-medium transition-colors ${
                  activeUseCase === i
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {useCase.label}
              </button>
            ))}
          </div>

          {/* Active Use Case Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image Side */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.70_0.14_50)] to-[oklch(0.60_0.16_40)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <p className="text-sm text-white/70 mb-2">{useCases[activeUseCase].label}</p>
                    <p className="font-serif text-2xl">{useCases[activeUseCase].headline}</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {useCases[activeUseCase].headline}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {useCases[activeUseCase].description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {useCases[activeUseCase].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/lets"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground font-medium rounded-lg hover:bg-foreground hover:text-background transition-all"
                >
                  {useCases[activeUseCase].cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why Not Clone Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="inline-flex items-center px-4 py-2 rounded-full border border-border text-sm text-muted-foreground mb-6">
              Why SANE/REBELS
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Never miss a question.
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic mb-12">
              Never miss a connection.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">
                Never Repeat Yourself Again
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your productized system answers the questions you've already answered, so you don't have to. That means less repetition, more impact, and time back for what matters most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">
                Keep Every Relationship Alive
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Never ghost anyone again. With your system, you can recognize loyal clients, follow up with intent, and make sure the right people always feel heard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section - Delphi Style */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="inline-flex items-center px-4 py-2 rounded-full border border-border text-sm text-muted-foreground mb-6">
              Trust
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              Your methodology
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              is Yours.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <pillar.icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.70_0.14_50)] via-[oklch(0.65_0.15_45)] to-[oklch(0.60_0.16_40)]" />
            <div className="relative z-10 p-12 md:p-16 text-center">
              <Link href="/" className="inline-flex items-center gap-1 font-semibold text-sm text-white/80 mb-6">
                <span>SANE</span>
                <span className="text-white/60">/</span>
                <span>REBELS</span>
              </Link>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Build your Productized System
              </h2>
              
              <p className="text-white/80 max-w-xl mx-auto mb-10">
                Ready to turn your expertise into a scalable product? Join the exclusive community of experts building transformational businesses.
              </p>
              
              <Link
                href="/lets"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.35_0.05_50)] font-medium rounded-lg hover:bg-white/90 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { num: "01", title: "Uncover your methodology", desc: "We extract what makes your work actually work—the patterns you see that others miss." },
              { num: "02", title: "Architect the system", desc: "We design the productized version that scales without diluting your value." },
              { num: "03", title: "Scale everywhere", desc: "Deploy across your business—on your site, in your community, wherever it matters." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="text-accent font-medium mb-2">{step.num}</p>
                <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </main>
  )
}
