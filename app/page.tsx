"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/lets", label: "Let's Talk" },
]

const useCases = [
  {
    id: "coaches",
    label: "Coaches",
    headline: "Be Present, Even When You're Not",
    subheadline: "And practitioners & healers.",
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
    subheadline: "And advisors & strategists.",
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
    subheadline: "And specialists & thought leaders.",
    description: "You see patterns others miss. You've built frameworks that actually work. But explaining them takes too long, and nobody else can deliver them like you can.",
    benefits: [
      "Engineer delivery systems for your intellectual property",
      "Monetize expertise without trading more hours",
      "Create personalized, interactive experiences at scale",
    ],
  },
]

const timelineEvents = [
  { year: "100,000 B.C.", label: "Verbal Communication", icon: "speech" },
  { year: "1455", label: "Printing Press", icon: "book" },
  { year: "1910", label: "Radio", icon: "radio" },
  { year: "2003", label: "Podcast", icon: "mic" },
  { year: "1929", label: "Television", icon: "tv" },
  { year: "Today", label: "SANE/REBELS", icon: "sparkle", highlight: true },
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
            <Link href="/" className="flex items-center gap-1 font-medium text-sm tracking-tight">
              <span className="text-foreground">SANE</span>
              <span className="text-accent">/</span>
              <span className="text-foreground">REBELS</span>
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
              className="px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="border-b border-border" />
      </motion.nav>

      {/* Hero Section - Warm Gradient like Delphi */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c97b5d] via-[#d4876a] to-[#e8a088]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-sm text-white/80 mb-6 tracking-wide">
              SANE/REBELS
            </p>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
              Your Expertise, Amplified
            </h1>
            
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              We co-build productized systems with service providers who are done being the bottleneck. Your methodology becomes architecture that scales—without losing what makes it work.
            </p>
            
            <Link
              href="/lets"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#d4876a] text-white font-medium rounded-md hover:bg-[#c97b5d] transition-all border border-white/20"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition - Multiply Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              Multiply your
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              expert impact.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              With SANE/REBELS, you can serve clients at scale, maintain consistent support between sessions, and gain valuable insights into your community's needs.
            </p>
          </motion.div>

          {/* Feature Card - Delphi Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden bg-[#f5f0eb]"
          >
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-5">
                Scale your practice
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Offer the gift of conversation to your customers. Let them turn to your system for advice, tips, and clarifications. All responses are delivered in your authentic voice, drawing exclusively from your methodology—ensuring every insight truly comes from you.
              </p>
              <Link
                href="/lets"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative bg-gradient-to-br from-[#c97b5d] to-[#d4876a] p-10 md:p-14 flex items-end justify-end min-h-[340px]">
              <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                {["Books", "Notes", "Substack", "YouTube", "Slack"].map((source) => (
                  <span key={source} className="px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-xs text-white/90">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Reality Section - Editorial */}
      <section className="py-24 md:py-32 bg-[#f5f0eb]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">
              The Reality
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-10">
              Everyone is talking about AI.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">57% of small businesses</span> are investing in it now. Up from 36% two years ago. And the average worker using AI saves <span className="text-foreground font-medium">5.6 hours a week</span>.
              </p>
              <p>
                But most people are running in circles. Trying every tool. Committing to nothing. <span className="text-foreground font-medium">45% worry</span> that too much AI will hurt their reputation.
              </p>
              <p className="text-xl text-foreground font-serif">
                The people actually winning aren't loud about it. They figured out something simple: their methodology is the asset. Not their time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section - Delphi Style */}
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
              className="grid md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden"
            >
              {/* Image Side */}
              <div className="relative aspect-[4/5] md:aspect-auto bg-gradient-to-br from-[#c97b5d] to-[#b86d4f] flex items-center justify-center min-h-[400px]">
                <div className="text-center text-white p-10">
                  <p className="text-sm text-white/70 mb-3">{useCases[activeUseCase].label}</p>
                  <p className="font-serif text-3xl leading-tight">{useCases[activeUseCase].headline}</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="bg-[#f5f0eb] p-10 md:p-12 flex flex-col justify-center">
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
                  className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
                >
                  SANE/REBELS for {useCases[activeUseCase].label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Timeline Section - Knowledge Transfer Evolution */}
      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              The Next Evolution of Knowledge Transfer
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              Conversational Systems
            </h2>
          </motion.div>

          {/* Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#f5f0eb] rounded-xl p-10 md:p-14"
          >
            <div className="relative">
              {/* Timeline bar */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
              
              {/* Timeline markers */}
              <div className="relative flex justify-between items-center">
                {timelineEvents.map((event, i) => (
                  <div key={i} className="flex flex-col items-center relative z-10">
                    <div className={`w-3 h-8 rounded-sm mb-4 ${
                      event.highlight 
                        ? "bg-accent" 
                        : i % 2 === 0 
                          ? "bg-accent/60" 
                          : "bg-accent/30"
                    }`} />
                    <p className={`text-xs font-medium mb-1 ${
                      event.highlight ? "text-accent" : "text-muted-foreground"
                    }`}>
                      {event.label}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {event.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-14">
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Instantaneous, personalized, and highly curated delivery of your expertise—without you being there.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground font-medium rounded-md hover:bg-foreground hover:text-background transition-all"
              >
                About SANE/REBELS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section - Two Cards */}
      <section className="py-24 md:py-32 bg-[#f5f0eb]">
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

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-xl p-8 border border-border"
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
              className="bg-background rounded-xl p-8 border border-border"
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

      {/* CTA Section - Gradient */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c97b5d] via-[#d4876a] to-[#e8a088]" />
            <div className="relative z-10 p-14 md:p-20 text-center">
              <Link href="/" className="inline-flex items-center gap-1 font-medium text-sm text-white/80 mb-6">
                <span>SANE</span>
                <span className="text-white/60">/</span>
                <span>REBELS</span>
              </Link>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Build your Productized System
              </h2>
              
              <p className="text-white/85 max-w-xl mx-auto mb-10 leading-relaxed">
                Ready to turn your expertise into a scalable system? Join the experts building transformational businesses without sacrificing authenticity.
              </p>
              
              <Link
                href="/lets"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8b5a42] font-medium rounded-md hover:bg-white/95 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-10 mt-14">
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
                <p className="text-accent font-medium mb-3">{step.num}</p>
                <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
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
            <Link href="/" className="flex items-center gap-1 font-medium text-sm">
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
