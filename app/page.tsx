"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, MessageCircle, Headphones, Radio, BookOpen, Users, Heart } from "lucide-react"
import { ShaderBackground } from "@/components/shader-background"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/lets", label: "Let's Talk" },
]

const useCases = [
  {
    id: "coaches",
    label: "Coaches",
    headline: "Be Present, Even When You're Not",
    subheadline: "And practitioners, healers, and therapists.",
    description: "You're at capacity. Every client gets you, which is why they keep coming. But you can't help more people without losing what makes the work effective.",
    benefits: [
      "Scale your practice without diluting your methodology",
      "Support clients between sessions, authentically",
      "Reach people you'll never meet in person",
    ],
  },
  {
    id: "consultants",
    label: "Consultants",
    headline: "Your Methodology, Multiplied",
    subheadline: "And advisors, strategists, and fractional leaders.",
    description: "Your work is too nuanced to productize. That's what you've told yourself. But the nuance IS the product. We just need to capture it properly.",
    benefits: [
      "Architect methodologies that scale without becoming generic",
      "Qualify leads with your actual framework",
      "Deliver your approach at enterprise scale",
    ],
  },
  {
    id: "experts",
    label: "Experts",
    headline: "Frameworks That Work Without You",
    subheadline: "And specialists, authors, and thought leaders.",
    description: "You see patterns others miss. You've built frameworks that actually work. But explaining them takes too long, and nobody else can deliver them like you can.",
    benefits: [
      "Engineer delivery systems for your intellectual property",
      "Monetize expertise without trading more hours",
      "Create personalized, interactive experiences at scale",
    ],
  },
]

// Evolution of Expertise Timeline based on your diagram
const evolutionTimeline = [
  {
    stage: "Individuality",
    era: "Verbal Communication",
    year: "100,000 B.C.",
    outcome: "Sound, Local Reach",
    premium: "Knowledge was premium",
    icon: Users,
    style: "neutral",
  },
  {
    stage: "Access",
    era: "Printing Press",
    year: "1455",
    outcome: "Books, Duplication",
    premium: "Reach was premium",
    icon: BookOpen,
    style: "neutral",
  },
  {
    stage: "Immediacy",
    era: "Radio / Television",
    year: "1910-1929",
    outcome: "Mass Media, Audiences",
    premium: "Speed was premium",
    icon: Radio,
    style: "neutral",
  },
  {
    stage: "On-Demand",
    era: "Podcast / Digital",
    year: "2003+",
    outcome: "Content, Platforms",
    premium: "Personality was premium",
    icon: Headphones,
    style: "neutral",
  },
  {
    stage: "Interaction",
    era: "Conversational AI",
    year: "2024+",
    outcome: "Answers, Personalization",
    premium: "Responsiveness is premium",
    icon: MessageCircle,
    style: "gold",
  },
  {
    stage: "Embodiment",
    era: "AI + Real Presence",
    year: "Today",
    outcome: "Answers, Experience, Trust",
    premium: "Your authentic energy is premium",
    icon: Heart,
    style: "accent",
  },
]

const fears = [
  {
    question: "Will this replace me?",
    answer: "No. It frees you to do what only you can do. Your presence becomes 100% focused on transformation, not logistics.",
  },
  {
    question: "Will this make me inauthentic?",
    answer: "No. It makes your presence more powerful. Every interaction uses your words, your frameworks, your voice.",
  },
  {
    question: "What if it says something not-me?",
    answer: "You have direct editing and control constraints. Nothing goes out that you haven't approved.",
  },
  {
    question: "Will clients feel impersonal?",
    answer: "The opposite. They're pre-educated for your sessions, which increases intimacy and depth when you do show up.",
  },
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

      {/* Hero Section - Animated Shader Gradient */}
      <section className="relative pt-20 overflow-hidden min-h-[80vh] flex items-center">
        <ShaderBackground className="absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated Logo in Hero */}
            <div className="flex items-center justify-center gap-1 font-medium text-sm text-white/80 mb-6">
              <span className="relative">
                <span className="text-[#c084fc] animate-logo-pulse-sane-base">SANE</span>
                <span className="absolute inset-0 text-white animate-logo-pulse-sane-overlay">SANE</span>
              </span>
              <span className="text-[#c084fc]">/</span>
              <span className="relative">
                <span className="text-white animate-logo-pulse-rebels-base">REBELS</span>
                <span className="absolute inset-0 text-[#c084fc] animate-logo-pulse-rebels-overlay">REBELS</span>
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-4">
              Scale Your Impact.
            </h1>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white/80 italic leading-[1.1] mb-8">
              Stay Yourself.
            </h1>
            
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              The bottleneck is your time, not your thinking. We systematize one and free up the other so your energy goes to the 20% that transforms people.
            </p>
            
            <Link
              href="/lets"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 text-white font-medium rounded-md hover:bg-white/25 transition-all border border-white/30 backdrop-blur-sm"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">
              The Philosophy
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-8">
              "As AI becomes abundant, human energy becomes premium. Information is no longer the bottleneck. Connection, curation, trust, and energy are."
            </blockquote>
            <p className="text-muted-foreground">
              Your presence becomes 100% focused on transformation, not logistics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evolution Timeline Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              From Information to Presence:
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              The Evolution of Expertise
            </h2>
          </motion.div>

          {/* Timeline with connector line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline connector line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border hidden lg:block" />
            <div className="absolute top-12 right-0 w-1/6 h-0.5 bg-gradient-to-r from-border via-accent to-accent hidden lg:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {evolutionTimeline.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.stage}
                    className={`relative rounded-xl p-5 flex flex-col items-center text-center transition-all ${
                      item.style === "gold"
                        ? "bg-gradient-to-b from-[#d4a574] to-[#c99a64] text-[#2a2520] shadow-lg"
                        : item.style === "accent"
                        ? "bg-accent text-accent-foreground shadow-lg ring-2 ring-accent/50"
                        : "bg-card border border-border shadow-sm"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 hidden lg:block ${
                      item.style === "gold" ? "bg-[#d4a574] border-[#c99a64]" :
                      item.style === "accent" ? "bg-accent border-accent" : "bg-card border-border"
                    }`} />
                    
                    <p className={`text-xs font-medium mb-4 ${
                      item.style === "gold" ? "text-[#2a2520]/70" : 
                      item.style === "accent" ? "text-accent-foreground/70" : "text-accent"
                    }`}>
                      {item.stage}
                    </p>
                    
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                      item.style === "gold" ? "bg-[#2a2520]/10" :
                      item.style === "accent" ? "bg-accent-foreground/10" : "bg-accent/10"
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        item.style === "gold" ? "text-[#2a2520]" :
                        item.style === "accent" ? "text-accent-foreground" : "text-accent"
                      }`} />
                    </div>
                    
                    <p className={`text-sm font-medium mb-1 ${
                      item.style === "gold" ? "text-[#2a2520]" :
                      item.style === "accent" ? "text-accent-foreground" : "text-foreground"
                    }`}>
                      {item.era}
                    </p>
                    
                    <div className={`w-8 h-px my-3 ${
                      item.style === "gold" ? "bg-[#2a2520]/20" :
                      item.style === "accent" ? "bg-accent-foreground/20" : "bg-border"
                    }`} />
                    
                    <p className={`text-xs mb-2 ${
                      item.style === "gold" ? "text-[#2a2520]/70" :
                      item.style === "accent" ? "text-accent-foreground/70" : "text-muted-foreground"
                    }`}>
                      {item.year}
                    </p>
                    
                    <p className={`text-xs leading-relaxed ${
                      item.style === "gold" ? "text-[#2a2520]/80" :
                      item.style === "accent" ? "text-accent-foreground/80" : "text-muted-foreground"
                    }`}>
                      {item.outcome}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground">
              When Knowledge is Abundant,
            </p>
            <p className="font-serif text-2xl md:text-3xl">
              Presence Becomes <span className="text-accent italic">Premium.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Outcomes Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">
              What We Enable
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              We work towards a world where
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              expertise scales without sacrifice.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Capacity Without Burnout",
                desc: "Work 30 hrs/week instead of 60, serve 10x more clients, same depth.",
                detail: "Your system handles the repetition. You show up for the breakthrough moments.",
              },
              {
                title: "Monetization You Control",
                desc: "Layer recurring revenue without trading more hours.",
                detail: "Digital access tiers, premium 1:1, everything in between. Your methodology, your pricing.",
              },
              {
                title: "Impact Without Dilution",
                desc: "Your digital mind increases depth. It does not replace you.",
                detail: "Clients arrive pre-educated. Sessions go deeper. Your presence means more.",
              },
            ].map((outcome, i) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-secondary border border-border rounded-xl p-8"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {outcome.title}
                </h3>
                <p className="text-foreground font-medium mb-4">
                  {outcome.desc}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {outcome.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground mb-6">
              Who We Work With
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              Built for people who
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              actually know their stuff.
            </h2>
          </motion.div>

          {/* Use Case Tabs */}
          <div className="flex justify-center gap-10 mb-14">
            {useCases.map((useCase, i) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(i)}
                className={`text-sm transition-colors pb-2 ${
                  activeUseCase === i
                    ? "text-accent border-b-2 border-accent font-medium"
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
              className="grid md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image Side - Purple gradient instead of orange */}
              <div className="relative aspect-[4/5] md:aspect-auto bg-gradient-to-br from-accent via-[#7c3aed] to-[#4c1d95] flex items-center justify-center min-h-[400px]">
                <div className="text-center text-white p-10">
                  <p className="text-sm text-white/70 mb-3">{useCases[activeUseCase].label}</p>
                  <p className="font-serif text-3xl leading-tight">{useCases[activeUseCase].headline}</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="bg-card border border-border p-10 md:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {useCases[activeUseCase].headline}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {useCases[activeUseCase].subheadline}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {useCases[activeUseCase].description}
                </p>
                
                <div className="space-y-4 mb-10">
                  {useCases[activeUseCase].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border border-accent/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/lets"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  SANE/REBELS for {useCases[activeUseCase].label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Fears/Objections Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">
              Real Concerns, Real Answers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              The market is already moving.
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              Better to lead than follow.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {fears.map((fear, i) => (
              <motion.div
                key={fear.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary border border-border rounded-xl p-8"
              >
                <p className="font-serif text-lg text-foreground mb-4">
                  "{fear.question}"
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {fear.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* European Advantage Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">
              The European Advantage
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Your mind is yours.
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl text-muted-foreground italic">
              Always.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "GDPR-Native", desc: "Not an afterthought. Built from the ground up for European privacy standards." },
              { title: "EU Data Residency", desc: "Your data never leaves Europe. Hosted in Germany, processed in Germany." },
              { title: "Complete Ownership", desc: "Export anytime. No lock-in. Your methodology and data stay yours." },
              { title: "No Training on Your Data", desc: "Your IP is protected. We never use your content to train other models." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Purple Gradient */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-[#7c3aed] to-[#4c1d95]" />
            <div className="relative z-10 p-14 md:p-20 text-center">
              {/* Animated Logo */}
              <div className="inline-flex items-center gap-1 font-medium text-sm text-white/80 mb-6">
                <span className="relative">
                  <span className="text-[#c084fc] animate-logo-pulse-sane-base">SANE</span>
                  <span className="absolute inset-0 text-white animate-logo-pulse-sane-overlay">SANE</span>
                </span>
                <span className="text-[#c084fc]">/</span>
                <span className="relative">
                  <span className="text-white animate-logo-pulse-rebels-base">REBELS</span>
                  <span className="absolute inset-0 text-[#c084fc] animate-logo-pulse-rebels-overlay">REBELS</span>
                </span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Build Your Productized System
              </h2>
              
              <p className="text-white/85 max-w-xl mx-auto mb-10 leading-relaxed">
                Ready to turn your expertise into a scalable system? Join the experts building transformational businesses without sacrificing authenticity.
              </p>
              
              <Link
                href="/lets"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-medium rounded-md hover:bg-white/95 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Process Steps - 4-Step Timeline */}
          <div className="grid md:grid-cols-4 gap-8 mt-14">
            {[
              { num: "01", title: "Extract", timing: "Weeks 1-2", desc: "Your methodology codified. We uncover what makes your work actually work." },
              { num: "02", title: "Architect", timing: "Weeks 2-3", desc: "Your digital mind trained and configured. Systems designed to scale your way." },
              { num: "03", title: "Deploy", timing: "Week 3-4", desc: "Live across your channels. Website, community, wherever it matters." },
              { num: "04", title: "Amplify", timing: "Ongoing", desc: "Every conversation makes it smarter. Continuous learning, continuous improvement." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="text-accent font-medium mb-2">{step.num}</p>
                <h3 className="font-serif text-lg text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-accent/70 mb-3">{step.timing}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
              KNUS GmbH · Berlin
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
    </main>
  )
}
