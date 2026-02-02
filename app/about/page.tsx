"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/lets", label: "Let's Talk" },
]

export default function AboutPage() {
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

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-sm text-muted-foreground mb-4">About</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Curious minds
            </h1>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-muted-foreground italic">
              Building expert systems.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            {/* Founder Card */}
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#c97b5d] to-[#b86d4f] aspect-[3/4]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <p className="text-lg font-medium mb-1">Simon Rosenberg</p>
                  <p className="text-sm text-white/70">Founder</p>
                </div>
              </div>
            </div>

            {/* Intro Text */}
            <div className="flex-1">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                I spent 15 years as a product leader and strategic advisor—at Siemens, BMW, and alongside startup founders building products people actually use.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Along the way, I kept running into the same wall: brilliant experts trapped in their own success. Their methodology was the moat. But they couldn't scale themselves. The more successful they got, the less time they had.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Sections - Delphi Style Numbered */}
      <section className="py-20 bg-[#f5f0eb]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Section I */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="font-serif text-lg text-accent mb-6">I. The Gold Rush</h3>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Everyone is talking about AI. <span className="font-medium">57% of small businesses</span> are investing in it now. Up from 36% two years ago. And the average worker using AI saves <span className="font-medium">5.6 hours a week</span>.
              </p>
              <p>
                But most people are running in circles. Trying every tool. Committing to nothing. 45% worry that too much AI will hurt their reputation.
              </p>
              <p>
                Only <span className="font-medium">6% of companies</span> see real returns from AI. The difference isn't the tools. It's knowing what to automate.
              </p>
              <p className="text-muted-foreground">
                71% of creators earn under $30,000 a year. Less than 5% break $100K. Customer acquisition costs jumped 400-600%. What used to cost $50 per lead now costs $300. The "passive income" playbook is a graveyard. Courses nobody finishes. Funnels that don't convert. Content that sounds like everyone else.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                What's missing isn't technology. It's architecture. A system that captures what makes your work actually work.
              </p>
            </div>
          </motion.div>

          {/* Section II */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="font-serif text-lg text-accent mb-6">II. Why Technology Fails</h3>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                <span className="font-medium">80% of Gen Z</span> felt lonely this year. The most connected generation in history.
              </p>
              <p>
                People who spend 2+ hours a day on social media are twice as likely to feel isolated as those who spend less than 30 minutes.
              </p>
              <p>
                We built tools that promised closeness and delivered comparison. Platforms that strip nuance out of everything. That turn experts into content machines.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                But there's another way to use technology. Not to replace the human expert with something generic. To extend your reach while preserving your voice.
              </p>
              <p className="text-muted-foreground">
                That's what we build. Systems that sound like you. Help like you would. Guide people the way you would guide them. So you can reach people you'll never meet, without losing what makes your work matter.
              </p>
            </div>
          </motion.div>

          {/* Section III */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="font-serif text-lg text-accent mb-6">III. The Right Partner</h3>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                This space is moving faster than best practices. The playbook hasn't been written yet.
              </p>
              <p>
                That's terrifying if you want guarantees. That's exciting if you've got the right partner building alongside you.
              </p>
              <p>
                We're obsessed with where technology meets human behavior. What makes people tick. What makes systems scale without losing soul.
              </p>
              <p className="text-muted-foreground">
                We don't chase hype. We've seen cycles come and go. But we stay curious enough to experiment at the edge. To ship before it's perfect. To learn by building.
              </p>
            </div>
          </motion.div>

          {/* Section IV */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-lg text-accent mb-6">IV. SANE/REBELS</h3>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                We co-build productized systems with service providers who are done being the bottleneck in their own business.
              </p>
              <p>
                Your expertise. Our engineering. Something that scales your way.
              </p>
              <div className="grid md:grid-cols-2 gap-8 py-8">
                <div>
                  <h4 className="font-medium text-foreground mb-2">SANE</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Grounded. Research-backed. We don't build on hype. We build on what works. Every system is architected with intention—designed to last, not just to launch.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">REBELS</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Bold. Experimental. We ship before it's perfect because that's how you learn. We question the playbook and write new pages when the old ones don't fit.
                  </p>
                </div>
              </div>
              <p className="font-serif text-xl italic text-center text-foreground pt-4">
                Sane enough to build it. Rebel enough to ship it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-10"
          >
            <div>
              <h4 className="font-serif text-lg text-foreground mb-3">Company</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                KNUS GmbH<br />
                Berlin, Germany
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-foreground mb-3">Experience</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                15+ years in product leadership<br />
                Siemens, BMW, startups
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-foreground mb-3">Infrastructure</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                EU-hosted · GDPR-native<br />
                Your methodology stays yours
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c97b5d] via-[#d4876a] to-[#e8a088]" />
            <div className="relative z-10 p-14 md:p-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Ready to build your system?
              </h2>
              <p className="text-white/85 max-w-lg mx-auto mb-10">
                Let's talk about what you're building and whether we're the right partner to help you scale it.
              </p>
              <Link
                href="/lets"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8b5a42] font-medium rounded-md hover:bg-white/95 transition-all"
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
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
