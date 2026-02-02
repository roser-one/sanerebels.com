"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"

// Manifest card data
const manifestCards = [
  {
    id: 1,
    title: "I. The Pattern I Kept Seeing",
    content: [
      "At Google, I watched the smartest people in the room hit a wall. Not because they lacked ideas. Because they lacked time. Every meeting, every email, every 'quick call' chipped away at the work that actually mattered.",
      "Then I went fractional. Worked with founders, coaches, consultants across 30+ companies. Different industries, same story: brilliant people trading hours for dollars, unable to scale what made them valuable in the first place.",
      "The conventional answer? 'Clone yourself.' Build a course. Hire a team. Franchise your brain.",
      "But cloning misses the point. People don't buy your knowledge. They buy your judgment. Your pattern recognition. The way you see around corners.",
    ],
  },
  {
    id: 2,
    title: "II. The Shift That Changes Everything",
    content: [
      "Information used to be scarce. Having knowledge was premium.",
      "Then access became scarce. Reach was premium.",
      "Then attention became scarce. Personality was premium.",
      "Now? Presence is scarce. Your authentic energy is premium.",
      "AI didn't create this shift. It accelerated it. When anyone can generate content, the person behind the content becomes the differentiator.",
      "This reframes every fear. 'Will AI replace me?' No, it frees you to do what only you can do. 'Will this feel inauthentic?' No, it makes your presence more powerful.",
    ],
  },
  {
    id: 3,
    title: "III. What We Actually Build",
    content: [
      "Not chatbots. Not courses. Not clones.",
      "We build expert systems. Digital architectures that capture your methodology, your frameworks, your way of thinking, and make them available at scale.",
      "The boring stuff? Handled. First-pass analysis, routine questions, onboarding, follow-ups.",
      "The work that matters? That's still you. The breakthrough conversations. The judgment calls. The moments where human presence is irreplaceable.",
      "We don't replace your presence. We protect it.",
    ],
  },
  {
    id: 4,
    title: "IV. Why The Name",
    content: [
      "SANE because we build things that work. No hype. No vaporware. Systems that solve real problems for real people.",
      "REBELS because we reject the premise. The idea that scaling means sacrificing quality. That growth requires burning out. That AI means losing your humanity.",
      "The '/' matters. It's the tension between rigor and rebellion. Between building carefully and shipping boldly.",
    ],
    closing: "Sane enough to build it right. Rebel enough to ship it anyway.",
  },
]

function ManifestCard({ card, index, totalCards }: { card: typeof manifestCards[0]; index: number; totalCards: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"]
  })
  
  const x = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])
  
  // Calculate z-index so later cards stack on top
  const zIndex = index + 1
  // Calculate offset for stacking effect - each card slightly visible
  const topOffset = index * 8
  
  return (
    <motion.div
      ref={cardRef}
      style={{ 
        x: index === 0 ? 0 : x, 
        opacity: index === 0 ? 1 : opacity,
        zIndex,
        marginTop: index === 0 ? 0 : -180,
      }}
      className="sticky top-32"
    >
      <div 
        className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
        style={{ 
          transform: `translateY(${topOffset}px)`,
        }}
      >
        <p className="text-accent font-bold mb-6">SANE<span className="animate-pulse">/</span>REBELS</p>
        
        <h3 className="font-serif text-xl md:text-2xl text-foreground mb-8">
          {card.title}
        </h3>
        
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          {card.content.map((paragraph, i) => (
            <p key={i} className={paragraph.startsWith("Now?") || paragraph.includes("We don't replace") ? "text-foreground font-medium" : ""}>
              {paragraph}
            </p>
          ))}
          {card.closing && (
            <p className="text-foreground italic font-serif text-lg pt-4">
              {card.closing}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-background">
      <AnimatedNav />

      {/* Hero - Delphi Style */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground mb-6"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-3"
          >
            One vision.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-muted-foreground italic"
          >
            Building expert systems.
          </motion.h2>
        </div>
      </section>

      {/* Founder Image - Large Hero Style like Delphi */}
      <section className="pb-6">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#c97b5d] via-[#d4876a] to-[#e8a088] aspect-[16/9]"
          >
            <div className="absolute inset-0 flex items-end p-8">
              <div className="text-white">
                <p className="text-xl font-medium mb-1">Simon Roser</p>
                <p className="text-white/70">Founder</p>
              </div>
            </div>
          </motion.div>
          
          {/* Founder Card Below Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 flex items-center justify-between bg-card border border-border rounded-xl p-4"
          >
            <div>
              <p className="font-medium text-foreground">Simon Roser</p>
              <p className="text-sm text-muted-foreground">Founder</p>
            </div>
            <Link
              href="/lets"
              className="px-4 py-2 text-sm border border-border rounded-full hover:bg-muted transition-colors"
            >
              Talk to Simon
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Manifest Section - Stacking Cards */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="relative">
            {manifestCards.map((card, index) => (
              <ManifestCard 
                key={card.id} 
                card={card} 
                index={index} 
                totalCards={manifestCards.length} 
              />
            ))}
          </div>
          {/* Spacer for scroll */}
          <div className="h-[50vh]" />
        </div>
      </section>

      {/* Background & Thinking - Moved below manifest */}
      <section className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[200px_1fr] gap-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-2xl text-foreground"
            >
              Background & Thinking
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { 
                  label: "Ex-Google", 
                  desc: "5+ years scaling products and growth teams across EMEA markets"
                },
                { 
                  label: "Fractional CMO", 
                  desc: "Helped 30+ startups and scaleups grow from zero to traction"
                },
                { 
                  label: "Product Builder", 
                  desc: "Shipped products used by millions. Failed at a few too. Both teach."
                },
                { 
                  label: "AI-Native Thinker", 
                  desc: "Building at the intersection of human expertise and machine scale"
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <p className="font-medium text-foreground mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Legal Entity", value: "KNUS GmbH" },
              { label: "Location", value: "Germany, EU" },
              { label: "Contact", value: "hi@sanerebels.com" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedFooter />
    </main>
  )
}
