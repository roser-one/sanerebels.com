"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-background">
      <AnimatedNav />

      {/* Hero Section */}
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
            Solve for presence.
          </motion.h2>
        </div>
      </section>

      {/* Founder Image - Large Hero using Simon's actual image */}
      <section className="pb-6">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-[16/9]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-senza-background-8rz3nvKOI7iB8cFqwJl8FnNAidvxvK.png"
              alt="Simon Roser"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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

      {/* Manifest Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            {/* Section I - Twins */}
            <div className="mb-16">
              <p className="text-accent font-bold text-center mb-8">SANE<span className="text-accent/50">/</span>REBELS</p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                I. Twins
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  At Google, we used data to find people who think like you, decide like you, buy like you. Clients loved it. I was fascinated by it.
                </p>
                <p>
                  But we were using it to sell ads. To make people... click.
                </p>
                <p>
                  I kept wondering: what if you could use this for something that actually mattered?
                </p>
              </div>
            </div>

            {/* Section II - Transformer */}
            <div className="mb-16">
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                II. Transformer
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>2022. I'd quit Google, spent months wandering Southeast Asia, landed in Tbilisi, Georgia. The streets smelled like flowers. Strawberries and fresh bread everywhere. Hills hugging the city in green.</p>
                <p>The first real LLMs had just emerged. I was tinkering with vector databases, breaking things constantly.</p>
                <p>I decided to build a digital twin of myself. Not for a client. Just to see how close it could get.</p>
                <p>I fed it years of my writing. Notes, journals, half-finished essays. Everything I'd thought carefully about, now queryable.</p>
                <p className="text-foreground font-medium">Then I started talking to it.</p>
              </div>
            </div>

            {/* Section III - Words */}
            <div className="mb-16">
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                III. Words
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Here's what I didn't expect: reading my own words reflected back was powerful enough to make me want to change.</p>
                <p>The things I'd written about who I wanted to become? It remembered better than I did. The patterns I'd never noticed? Visible. The contradictions between what I said I valued and how I actually behaved? Exposed.</p>
                <p>We're only ever one decision away from change. But most of us can't see the decision clearly. We're too close. Too distracted.</p>
                <p className="text-foreground font-medium">What if technology could help people see themselves more clearly?</p>
              </div>
            </div>

            {/* Section IV - Presence */}
            <div className="mb-16">
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                IV. Presence
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Information used to be scarce. Then access. Then attention.</p>
                <p className="text-foreground font-medium">Now? Presence.</p>
                <p>Undivided, prolonged, human presence is the rarest thing in modern life.</p>
                <p>80% of Gen Z feels lonely. People who spend 2+ hours on social media are twice as likely to feel isolated. We built tools that promised connection and delivered comparison. That optimized for engagement, not meaning.</p>
                <p>The world is starved for a calm moment. For someone who's actually there. For expertise that doesn't feel like content.</p>
                <p className="text-foreground font-medium">That's what scales now. Not reach. Presence.</p>
              </div>
            </div>

            {/* Section V - O2O */}
            <div className="mb-16">
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                V. O2O
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Real growth doesn't happen on LinkedIn.</p>
                <p>It happens at the dinner table. When you're telling someone about an idea that shifted something. A conversation you can't stop thinking about.</p>
                <p>I don't care about technology that makes people perform their growth for an audience. I care about growth that shows up in how you live.</p>
                <p className="text-foreground font-medium">Online to offline. That's the direction that matters.</p>
              </div>
            </div>

            {/* Section VI - Time */}
            <div className="mb-16">
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                VI. Time
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Expert systems for people who actually help people.</p>
                <p>The ones whose work is too nuanced for a course. Who've spent years developing methodologies that work. Who are tired of trading hours for money but refuse to become generic.</p>
                <p>We capture their thinking. Their frameworks. Their way of seeing. And we build systems that extend their presence without diluting it.</p>
                <p>The repetitive stuff? Handled. The work that matters? Still them.</p>
                <p className="text-foreground font-medium">We don't remove the human. We remove the bottleneck so the human can be more present where it counts.</p>
              </div>
            </div>

            {/* Section VII - Sane/Rebels */}
            <div className="mb-16">
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                VII. Sane/Rebels
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p><span className="text-foreground font-medium">SANE</span> because the world is drowning in noise. We build for clarity. For calm. For technology that helps you see clearly instead of scroll endlessly.</p>
                <p><span className="text-foreground font-medium">REBELS</span> because we refuse to build what everyone else is building. Technology that replaces humans. That optimizes for engagement. That turns people into content. We reject the premise.</p>
                <p>The <span className="text-accent font-bold">/</span> is the tension. Clarity without conformity. Calm without complacency.</p>
              </div>
            </div>

            {/* Section VIII - Let's */}
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                VIII. Let's
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>The infrastructure for scaling expertise is being built right now. Most of it wrong. Designed to replace humans, not enable them. To add noise, not create presence.</p>
                <p>We're building something different.</p>
                <p>For people who believe their methodology deserves to reach further than their calendar allows. Who refuse to become generic. Who want technology that makes humans more human, not less.</p>
                <p className="text-foreground font-medium">If that's you, let's build something.</p>
                <p className="text-foreground font-serif italic text-lg pt-4 text-center border-t border-border mt-8">
                  Your expertise. Our engineering. Your presence, amplified.
                </p>
                <p className="text-foreground font-bold text-sm text-center mt-4">
                  SANE/REBELS<br /><span className="font-normal text-muted-foreground">Berlin</span>
                </p>
              </div>
            </div>
          </motion.div>
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
                  label: "Google", 
                  desc: "4 years. 500+ high-growth companies. Saw the blueprint."
                },
                { 
                  label: "Founder", 
                  desc: "5 years. Bootstrapped. Learned reality of shipping."
                },
                { 
                  label: "Fractional CMO", 
                  desc: "2 years. Solved growth problems. Hit ceiling of time-for-money."
                },
                { 
                  label: "Now", 
                  desc: "SANE/REBELS. Multiplying impact through systems."
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
