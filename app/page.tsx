"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Shield, Server, Lock, ChevronDown } from "lucide-react"

const ShaderBackground = dynamic(
  () => import("@/components/shader-background").then((mod) => mod.ShaderBackground),
  { ssr: false }
)

import { GrainOverlay } from "@/components/grain-overlay"

const navLinks = [
  { href: "/why", label: "Why" },
  { href: "/what", label: "How" },
  { href: "/who", label: "About" },
  { href: "/lets", label: "Let's" },
]

const useCases = [
  {
    title: "Coaches & Practitioners",
    description: "You're at capacity. Every client gets you, which is why they keep coming. But you can't help more people without losing what makes the work effective.",
    outcome: "Build the system that preserves your approach while reaching people you'll never meet in person.",
  },
  {
    title: "Consultants & Advisors",
    description: "Your work is too nuanced to productize. That's what you've told yourself. But the nuance IS the product. We just need to capture it properly.",
    outcome: "Architect methodologies that scale without becoming generic frameworks.",
  },
  {
    title: "Experts & Specialists",
    description: "You see patterns others miss. You've built frameworks that actually work. But explaining them takes too long, and nobody else can deliver them like you can.",
    outcome: "Engineer the delivery system so your frameworks work without you.",
  },
]

const stats = [
  { value: "57%", label: "of small businesses investing in AI now" },
  { value: "5.6h", label: "saved weekly by workers using AI" },
  { value: "6%", label: "of companies see real returns" },
]

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeUseCase, setActiveUseCase] = useState(0)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const interval = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(interval)
      }
    }, 100)

    const timeout = setTimeout(() => {
      setIsLoaded(true)
      clearInterval(interval)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="relative min-h-screen w-full bg-background">
      <GrainOverlay />

      {/* Fixed Shader Background for Hero */}
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <ShaderBackground className="h-full w-full" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 font-bold text-sm tracking-tight">
            <span className="text-foreground">SANE</span>
            <span className="text-accent">/</span>
            <span className="text-foreground">REBELS</span>
          </Link>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-foreground/60 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-4xl"
        >
          {/* Eyebrow */}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
            The Productization Engine
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Done trading time?
            <br />
            <span className="text-accent">Let's build something.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            We co-build productized systems with service providers who are done being the bottleneck in their own business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lets"
              className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/why"
              className="flex items-center gap-2 px-8 py-4 border border-foreground/20 text-foreground/80 font-medium rounded-xl hover:border-accent/50 hover:text-accent transition-all"
            >
              Read the Manifesto
            </Link>
          </div>

          {/* Trust Signal */}
          <p className="mt-10 text-xs font-mono text-foreground/40 uppercase tracking-wider">
            EU-hosted · GDPR-native · Your methodology stays yours
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-foreground/30" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Problem Section */}
      <section className="relative z-20 bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-8">
              The Reality
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Everyone is talking about AI.
            </h2>

            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                <span className="text-foreground font-medium">57% of small businesses</span> are investing in it now. Up from 36% two years ago. And the average worker using AI saves <span className="text-foreground font-medium">5.6 hours a week</span>.
              </p>
              <p>
                But most people are running in circles. Trying every tool. Committing to nothing. <span className="text-foreground font-medium">45% worry</span> that too much AI will hurt their reputation.
              </p>
              <p className="text-xl text-foreground font-medium">
                The people actually winning aren't loud about it. They figured out something simple: their methodology is the asset. Not their time.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-foreground/10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-foreground/50 font-mono uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Fork Section */}
      <section className="relative z-20 bg-card py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Two Paths
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Technology fails when it tries to replace you.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Clone Path */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-background/50 border border-foreground/10"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-foreground/40 mb-4">The Clone Path</p>
              <h3 className="text-xl font-semibold text-foreground/60 mb-6">"Let AI replace you"</h3>
              <ul className="space-y-3 text-foreground/50">
                <li>Your face on a chatbot</li>
                <li>Trained on your content</li>
                <li>Available 24/7</li>
                <li>You disappear from delivery</li>
              </ul>
              <p className="mt-8 text-sm text-foreground/40 italic">
                Works for celebrities with millions of followers. Does it work for you?
              </p>
            </motion.div>

            {/* Architecture Path */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-accent/5 border border-accent/20 ring-1 ring-accent/10"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">The Architecture Path</p>
              <h3 className="text-xl font-semibold text-foreground mb-6">"Let systems amplify you"</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>Your methodology, engineered</li>
                <li>Your voice, preserved</li>
                <li>Your presence, multiplied</li>
                <li>You stay in the loop where it matters</li>
              </ul>
              <p className="mt-8 text-sm text-accent font-medium">
                Works for experts who refuse to be genericized.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12 text-lg text-foreground/60"
          >
            We build on the right side.
          </motion.p>
        </div>
      </section>

      {/* The Exoskeleton Section */}
      <section className="relative z-20 bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
              What We Build
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Exoskeleton
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Your expertise. Our engineering. Something that scales your way.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-12">
            {[
              {
                num: "01",
                title: "Uncover",
                subtitle: "What makes your work actually work",
                description: "We extract the methodology you've never written down. The patterns you see that others miss. The questions you ask that change everything. Separate strategic value from operational noise.",
              },
              {
                num: "02",
                title: "Architect",
                subtitle: "The productized version",
                description: "Not a course. Not a chatbot. A system that delivers your approach without diluting what makes it valuable. We design the machine backbone while preserving your fingerprint.",
              },
              {
                num: "03",
                title: "Build",
                subtitle: "Engineering, not templates",
                description: "Custom infrastructure. RevOps integration. AI and automation handle administration. Your methodology becomes a machine that works while you sleep. Every time. Your way.",
              },
              {
                num: "04",
                title: "Scale",
                subtitle: "Revenue operations, not just marketing",
                description: "Lead qualification. Client onboarding. Delivery systems. We launch in 30-90 day sprints, watch data, refine. No 18-month roadmaps. Learn by shipping.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 md:gap-10"
              >
                <div className="flex-shrink-0">
                  <span className="font-mono text-3xl md:text-4xl font-bold text-accent/30">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm font-mono uppercase tracking-wider text-accent mb-4">{step.subtitle}</p>
                  <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-20 bg-card py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Who We Work With
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Is this you?
            </h2>
          </motion.div>

          {/* Use Case Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {useCases.map((useCase, i) => (
              <button
                key={i}
                onClick={() => setActiveUseCase(i)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                  activeUseCase === i
                    ? "bg-accent text-background"
                    : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10"
                }`}
              >
                {useCase.title}
              </button>
            ))}
          </div>

          {/* Active Use Case Content */}
          <motion.div
            key={activeUseCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
              {useCases[activeUseCase].description}
            </p>
            <p className="text-lg text-accent font-medium">
              {useCases[activeUseCase].outcome}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/lets"
              className="inline-flex items-center gap-2 text-accent hover:underline decoration-accent/50 underline-offset-4 transition-all"
            >
              Which one are you? Let's find out
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Not Clone Section */}
      <section className="relative z-20 bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
              Why not just clone yourself?
            </h2>

            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                There are platforms that will create a chatbot version of you. Upload your content. Train an AI. Let it answer questions 24/7.
              </p>
              <p>
                For some people, that works.
              </p>
              <p>
                For you? Probably not.
              </p>
              <p>
                Because your value isn't just information. It's how you see problems. It's the questions you ask. It's the way you guide someone to their own answer.
              </p>
              <p>
                A clone can parrot your words. <span className="text-foreground font-medium">It can't think like you think.</span>
              </p>
              <p>
                We don't build clones. We architect systems. Systems that preserve the human decision points. Systems that scale the repetitive while protecting the irreplaceable. Systems where <span className="text-accent font-medium">YOU stay in the loop</span>—just not in every loop.
              </p>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-accent/5 border border-accent/20">
              <p className="text-xl md:text-2xl text-foreground font-semibold text-center">
                Delphi clones you. <span className="text-accent">We extend you.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-20 bg-card py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Built Different
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built for European standards
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Server, label: "EU-hosted", desc: "Infrastructure in Europe" },
              { icon: Shield, label: "GDPR-native", desc: "Not just compliant" },
              { icon: Lock, label: "German company", desc: "KNUS GmbH, Berlin" },
              { icon: Shield, label: "Your methodology", desc: "Never leaves Europe" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-background/50 border border-foreground/10 text-center">
                <item.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-foreground/50">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10 text-foreground/60"
          >
            We're not a US platform checking a compliance box. We built this from the ground up for how European businesses actually work.
          </motion.p>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="relative z-20 bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              We're co-founders, not vendors
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              We don't sell templates. We don't charge hourly. We build alongside you and share in what we create together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { phase: "Discovery", weight: "10%", desc: "Uncover what makes your methodology actually work" },
              { phase: "Architecture", weight: "10%", desc: "Design the productized system" },
              { phase: "Build", weight: "30%", desc: "Engineer the infrastructure" },
              { phase: "Scale", weight: "50%", desc: "Revenue operations and growth" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-foreground/10">
                <div className="flex items-baseline justify-between mb-3">
                  <p className="font-semibold text-foreground">{item.phase}</p>
                  <p className="text-accent font-mono text-sm">{item.weight}</p>
                </div>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10 text-foreground/60"
          >
            We invest our time. You invest your expertise. When it works, we both win.
          </motion.p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-20 bg-card py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to build?
            </h2>
            <p className="text-lg text-foreground/60 mb-10 max-w-xl mx-auto">
              Start the conversation. No pitch deck required. Just clarity about what you're trying to build.
            </p>

            <Link
              href="/lets"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background text-lg font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Start the Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="mt-8 text-sm text-foreground/40">
              No email required. No sales call. Just clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-background py-12 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-1 font-bold text-sm tracking-tight">
              <span className="text-foreground">SANE</span>
              <span className="text-accent">/</span>
              <span className="text-foreground">REBELS</span>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-foreground/40 uppercase tracking-wider">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-foreground/40 uppercase tracking-wider">
              <Link href="/imprint" className="hover:text-accent transition-colors">Imprint</Link>
              <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-foreground/5 text-center">
            <p className="font-mono text-xs text-foreground/30 italic">
              Sane enough to build it. Rebel enough to ship it.
            </p>
            <p className="font-mono text-[10px] text-foreground/20 mt-2">
              © {new Date().getFullYear()} KNUS GmbH · Berlin
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
