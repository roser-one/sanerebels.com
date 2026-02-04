"use client"
// SANE/REBELS Homepage
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, MessageCircle, Headphones, Radio, BookOpen, Users, Heart } from "lucide-react"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"

const ShaderBackground = dynamic(() => import("@/components/shader-background").then(mod => mod.ShaderBackground), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#9333ea] to-[#c2410c]" />
})

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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Person%20in%20Glasses%20Photo-hRHfmN8In2CWRcl0f3CrW90jPgBuVG.jpg",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portrait%20Business%20Picture-YxJoh6xpiBlRGMzyk0ZZaGM95gdQ1f.jpg",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Man%20with%20Beard%20Blue%20Shirt-AVVZM84SX3k5i43lzUYNb7VMxOWZt3.jpg",
  },
]

// Evolution of Expertise Timeline
const evolutionTimeline = [
  {
    stage: "Individuality",
    era: "Verbal Communication",
    year: "100,000 B.C.",
    outcome: "Sound, Local Reach",
    icon: Users,
    style: "neutral",
  },
  {
    stage: "Access",
    era: "Printing Press",
    year: "1455",
    outcome: "Books, Duplication",
    icon: BookOpen,
    style: "neutral",
  },
  {
    stage: "Immediacy",
    era: "Radio / Television",
    year: "1910-1929",
    outcome: "Mass Media, Audiences",
    icon: Radio,
    style: "neutral",
  },
  {
    stage: "On-Demand",
    era: "Podcast / Digital",
    year: "2003+",
    outcome: "Content, Platforms",
    icon: Headphones,
    style: "neutral",
  },
  {
    stage: "Interaction",
    era: "Conversational AI",
    year: "2024+",
    outcome: "Answers, Personalization",
    icon: MessageCircle,
    style: "gold",
  },
  {
    stage: "Embodiment",
    era: "AI + Real Presence",
    year: "Today",
    outcome: "Answers, Experience, Trust",
    icon: Heart,
    style: "accent",
  },
]

const fears = [
  {
    question: "Will this replace me?",
    answer: "No. It frees you to do what only you can do. Your time shifts to the conversations that actually transform people.",
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
    answer: "The opposite. They arrive pre-educated, which increases intimacy and depth when you do show up.",
  },
]

export default function Home() {
  const [activeUseCase, setActiveUseCase] = useState(0)

  return (
    <main className="relative min-h-screen w-full bg-background">
      <AnimatedNav />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden min-h-[80vh] flex items-center">
        <ShaderBackground className="absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
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
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              The Philosophy
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-8">
              "As AI becomes abundant, human energy becomes premium. Information is no longer the bottleneck. Connection, curation, trust, and energy are."
            </blockquote>
            <p className="text-muted-foreground">
              We help you reclaim time for the work that only you can do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evolution Timeline - TOP ALIGNED with arrow */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2 italic">
              From Information to Presence:
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              The Evolution of Expertise
            </h2>
          </motion.div>

          {/* Timeline Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Horizontal line with arrow - positioned at card tops */}
            <div className="absolute top-[54px] left-0 right-4 h-px bg-border hidden lg:block">
              <div className="absolute right-0 w-[35%] h-full bg-gradient-to-r from-transparent via-[#d4a574]/50 to-accent/50" />
              {/* Arrow at right end */}
              <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-accent" />
              </div>
            </div>

            {/* X-axis labels */}
            <div className="hidden lg:flex justify-between mb-2 px-4 text-[10px] text-muted-foreground uppercase tracking-wider">
              <span>Past</span>
              <span>Present</span>
            </div>

            {/* Desktop: Horizontal cards */}
            <div className="hidden lg:flex gap-3 items-start pt-4">
              {evolutionTimeline.map((item, i) => {
                const Icon = item.icon
                const isGold = item.style === "gold"
                const isAccent = item.style === "accent"
                const baseHeight = 200
                const increment = 25
                const cardHeight = baseHeight + (i * increment)

                return (
                  <div
                    key={item.stage}
                    className="relative flex flex-col flex-1"
                  >
                    {/* Top dot - aligned to the line */}
                    <div className="flex justify-center mb-3">
                      <div className={`w-3 h-3 rounded-full border-2 ${isGold ? "bg-[#d4a574] border-[#c99a64]" :
                        isAccent ? "bg-accent border-accent" : "bg-card border-border"
                        }`} />
                    </div>

                    {/* Card */}
                    <div
                      className={`rounded-xl p-4 flex flex-col text-center ${isGold
                        ? "bg-gradient-to-b from-[#d4a574] to-[#c99a64] text-[#2a2520]"
                        : isAccent
                          ? "bg-accent text-accent-foreground"
                          : "bg-card border border-border"
                        }`}
                      style={{ height: `${cardHeight}px` }}
                    >
                      <p className={`text-xs font-medium mb-3 ${isGold ? "text-[#2a2520]/70" :
                        isAccent ? "text-accent-foreground/70" : "text-accent font-bold"
                        }`}>
                        {item.stage}
                      </p>

                      <div className={`w-9 h-9 mx-auto rounded-full flex items-center justify-center mb-3 ${isGold ? "bg-[#2a2520]/10" :
                        isAccent ? "bg-accent-foreground/10" : "bg-accent/10"
                        }`}>
                        <Icon className={`w-4 h-4 ${isGold ? "text-[#2a2520]" :
                          isAccent ? "text-accent-foreground" : "text-accent"
                          }`} />
                      </div>

                      <p className={`text-sm font-medium mb-1 ${isGold ? "text-[#2a2520]" :
                        isAccent ? "text-accent-foreground" : "text-foreground"
                        }`}>
                        {item.era}
                      </p>

                      <div className={`w-6 h-px mx-auto my-2 ${isGold ? "bg-[#2a2520]/20" :
                        isAccent ? "bg-accent-foreground/20" : "bg-border"
                        }`} />

                      <p className={`text-xs mb-auto ${isGold ? "text-[#2a2520]/70" :
                        isAccent ? "text-accent-foreground/70" : "text-muted-foreground"
                        }`}>
                        {item.year}
                      </p>

                      <p className={`text-xs leading-relaxed mt-3 ${isGold ? "text-[#2a2520]/80" :
                        isAccent ? "text-accent-foreground/80" : "text-muted-foreground"
                        }`}>
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile: Vertical timeline with alternating cards */}
            <div className="lg:hidden relative pt-4">
              {/* Vertical line down center */}
              <div className="absolute left-1/2 top-4 bottom-0 w-px bg-border -translate-x-1/2" />

              <div className="space-y-6">
                {evolutionTimeline.map((item, i) => {
                  const Icon = item.icon
                  const isGold = item.style === "gold"
                  const isAccent = item.style === "accent"
                  const isLeft = i % 2 === 0

                  return (
                    <div
                      key={item.stage}
                      className="relative"
                    >
                      {/* Dot on center line */}
                      <div className={`absolute left-1/2 top-6 w-3 h-3 rounded-full -translate-x-1/2 z-10 border-2 ${isGold ? "bg-[#d4a574] border-[#c99a64]" :
                        isAccent ? "bg-accent border-accent" : "bg-card border-border"
                        }`} />

                      {/* Card - alternating left/right */}
                      <div className={`${isLeft ? 'pr-6 mr-auto' : 'pl-6 ml-auto'} w-[calc(50%-8px)]`}>
                        <div
                          className={`rounded-xl p-4 text-center ${isGold
                            ? "bg-gradient-to-b from-[#d4a574] to-[#c99a64] text-[#2a2520]"
                            : isAccent
                              ? "bg-accent text-accent-foreground"
                              : "bg-card border border-border"
                            }`}
                        >
                          <p className={`text-xs font-medium mb-2 ${isGold ? "text-[#2a2520]/70" :
                            isAccent ? "text-accent-foreground/70" : "text-accent font-bold"
                            }`}>
                            {item.stage}
                          </p>

                          <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${isGold ? "bg-[#2a2520]/10" :
                            isAccent ? "bg-accent-foreground/10" : "bg-accent/10"
                            }`}>
                            <Icon className={`w-4 h-4 ${isGold ? "text-[#2a2520]" :
                              isAccent ? "text-accent-foreground" : "text-accent"
                              }`} />
                          </div>

                          <p className={`text-sm font-medium mb-1 ${isGold ? "text-[#2a2520]" :
                            isAccent ? "text-accent-foreground" : "text-foreground"
                            }`}>
                            {item.era}
                          </p>

                          <div className={`w-6 h-px mx-auto my-2 ${isGold ? "bg-[#2a2520]/20" :
                            isAccent ? "bg-accent-foreground/20" : "bg-border"
                            }`} />

                          <p className={`text-xs ${isGold ? "text-[#2a2520]/70" :
                            isAccent ? "text-accent-foreground/70" : "text-muted-foreground"
                            }`}>
                            {item.year}
                          </p>

                          <p className={`text-xs leading-relaxed mt-2 ${isGold ? "text-[#2a2520]/80" :
                            isAccent ? "text-accent-foreground/80" : "text-muted-foreground"
                            }`}>
                            {item.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
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
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
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
                className="bg-card border border-border rounded-xl p-8"
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

      {/* Use Cases Section with face images */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
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
                className={`text-sm transition-colors pb-2 ${activeUseCase === i
                  ? "text-accent border-b-2 border-accent font-bold"
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
              className="grid md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden border border-border"
            >
              {/* Image Side - Purple gradient with face filling container */}
              <div className="relative aspect-[4/5] md:aspect-auto bg-gradient-to-br from-accent via-[#7c3aed] to-[#4c1d95] min-h-[400px] overflow-hidden">
                {/* Person image overlay - fills container */}
                <Image
                  src={useCases[activeUseCase].image}
                  alt={useCases[activeUseCase].label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
                />
              </div>

              {/* Content Side */}
              <div className="bg-card p-10 md:p-12 flex flex-col justify-center">
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
                  className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
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
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
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
                className="bg-card border border-border rounded-xl p-8"
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

      {/* Trust Section - with dotted lines to center */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              Trust
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              Your methodology
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              is Yours.
            </h2>
          </motion.div>

          {/* Trust Grid - 2x2 with center element and dotted lines */}
          <div className="relative grid md:grid-cols-3 gap-6 items-end">
            {/* Dotted lines pointing to center - visible on md+ */}
            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Top-left to center */}
              <line x1="33%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4 4" className="text-border" />
              {/* Bottom-left to center */}
              <line x1="33%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4 4" className="text-border" />
              {/* Top-right to center */}
              <line x1="67%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4 4" className="text-border" />
              {/* Bottom-right to center */}
              <line x1="67%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4 4" className="text-border" />
            </svg>

            {/* Left Column */}
            <div className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-serif text-lg text-foreground mb-3">Built to protect your IP</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your frameworks maintain integrity over time. Your authenticity stays intact, trusted by your audience now and always.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-serif text-lg text-foreground mb-3">Privacy first, always</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Privacy-native from day one. Your conversations stay private and your audience stays protected. No exceptions.
                </p>
              </motion.div>
            </div>

            {/* Center Portrait with face */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block relative z-10"
            >
              <div className="relative h-full min-h-[420px] rounded-xl overflow-hidden bg-gradient-to-b from-accent via-[#7c3aed] to-[#4c1d95]">
                {/* Header text */}
                <div className="absolute top-0 left-0 right-0 flex flex-col items-center text-white p-8 z-10">
                  <p className="text-lg font-medium mb-1">Your Expert System</p>
                  <p className="text-sm text-white/70">Protected</p>
                </div>

                {/* Face image - positioned at bottom */}
                <Image
                  src="/expert-system.jpg"
                  alt="Expert"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
                />

                {/* Encryption visual at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <div className="font-mono text-[10px] text-white/40 leading-loose text-center break-all">
                    C3V0B9FP2E4CL5C0DJ2EHNFT2LH0MM2C9YCE
                    2I0C<span className="text-[#c084fc]">7</span>CB2I9CP4FP3CL0CE0CT<span className="text-[#c084fc]">2</span>CH2CL0CT0CT4
                    CH9CG4CI0C0C2C7C<span className="text-[#c084fc]">B</span>0CN2CIC3P4V0ME2PFJD
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-serif text-lg text-foreground mb-3">Complete ownership</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your methodology is your most valuable asset. Export anytime. No lock-in. We never use your content to train other models.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-serif text-lg text-foreground mb-3">You're in control</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your system speaks only your words. It never improvises without your consent. Edit, constrain, and approve everything.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                Scale Your Expertise.
              </h2>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white/80 italic mb-10">
                Stay Yourself.
              </h2>

              <Link
                href="/lets"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-medium rounded-md hover:bg-white/95 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              Our Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              How We Work
            </h2>
          </div>

          <div className="relative">
            {/* Desktop: Horizontal with top dots and line */}
            <div className="hidden md:flex md:flex-nowrap gap-4 items-start">
              {[
                { num: "01", title: "Extract", timing: "Weeks 1-2", desc: "We uncover what makes your work actually work." },
                { num: "02", title: "Architect", timing: "Weeks 2-3", desc: "Your digital mind trained and configured." },
                { num: "03", title: "Deploy", timing: "Week 3-4", desc: "Live across your channels, or standalone new web-app." },
                { num: "04", title: "Amplify", timing: "Ongoing", desc: "Continuous learning, continuous improvement." },
              ].map((step, i, arr) => {
                const baseHeight = 160
                const increment = 20
                const cardHeight = baseHeight + (i * increment)
                const isLast = i === arr.length - 1

                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative flex-1"
                  >
                    {/* Dot with line */}
                    <div className="flex items-center justify-center relative mb-3">
                      <div className="w-3 h-3 rounded-full bg-accent z-10" />
                      {!isLast && (
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-px bg-border" />
                      )}
                      {isLast && (
                        <div className="absolute left-[calc(50%+8px)] top-1/2 -translate-y-1/2">
                          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-accent" />
                        </div>
                      )}
                    </div>

                    <div
                      className="bg-card border border-border rounded-xl p-6"
                      style={{ minHeight: `${cardHeight}px` }}
                    >
                      <p className="text-accent font-bold mb-2">{step.num}</p>
                      <h3 className="font-serif text-lg text-foreground mb-1">{step.title}</h3>
                      <p className="text-xs text-accent/70 font-medium mb-3">{step.timing}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile: Vertical timeline with alternating cards */}
            <div className="md:hidden relative">
              {/* Vertical line down center */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

              <div className="space-y-8">
                {[
                  { num: "01", title: "Extract", timing: "Weeks 1-2", desc: "We uncover what makes your work actually work." },
                  { num: "02", title: "Architect", timing: "Weeks 2-3", desc: "Your digital mind trained and configured." },
                  { num: "03", title: "Deploy", timing: "Week 3-4", desc: "Live across your channels, or standalone new web-app." },
                  { num: "04", title: "Amplify", timing: "Ongoing", desc: "Continuous learning, continuous improvement." },
                ].map((step, i) => {
                  const isLeft = i % 2 === 0

                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="relative"
                    >
                      {/* Dot on center line */}
                      <div className="absolute left-1/2 top-8 w-3 h-3 rounded-full bg-accent -translate-x-1/2 z-10" />

                      {/* Card - alternating left/right */}
                      <div className={`${isLeft ? 'pr-8' : 'pl-8 ml-auto'} w-[calc(50%-12px)]`}>
                        <div className="bg-card border border-border rounded-xl p-6">
                          <p className="text-accent font-bold mb-2">{step.num}</p>
                          <h3 className="font-serif text-lg text-foreground mb-1">{step.title}</h3>
                          <p className="text-xs text-accent/70 font-medium mb-3">{step.timing}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedFooter />
    </main>
  )
}
