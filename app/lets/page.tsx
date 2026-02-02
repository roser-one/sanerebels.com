"use client"

import { useEffect } from "react"
import Link from "next/link"
import { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin, Calendar, ExternalLink } from "lucide-react"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/lets", label: "Let's Talk" },
]

export default function LetsPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "sanerebels" })
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  const openCalPopup = () => {
    (async function () {
      const cal = await getCalApi({ namespace: "sanerebels" })
      cal("modal", {
        calLink: "sroser/knus-intro",
        config: { layout: "month_view", theme: "light" },
      })
    })()
  }

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
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Let's talk.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Ready to turn your expertise into a scalable system? Start with a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#f5f0eb] rounded-xl p-8 md:p-10"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Book a discovery call
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                30 minutes to explore what you're building, where you're stuck, and whether we're the right partner.
              </p>
              <button
                onClick={openCalPopup}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-all"
              >
                Schedule Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#f5f0eb] rounded-xl p-8 md:p-10"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Send a message
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prefer to write? Tell us about your business and what you're trying to build. We'll respond within 48 hours.
              </p>
              <a
                href="mailto:hi@sanerebels.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground font-medium rounded-md hover:bg-foreground hover:text-background transition-all"
              >
                hi@sanerebels.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-16 bg-[#f5f0eb]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center">
              What to expect
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "We'll understand your methodology, your business model, and where the bottleneck actually is."
                },
                {
                  num: "02",
                  title: "Clarity",
                  desc: "You'll leave knowing if this is the right path—even if we don't work together. No pressure."
                },
                {
                  num: "03",
                  title: "Partnership",
                  desc: "If there's a fit, we work alongside you as co-builders, not vendors. Skin in the game."
                }
              ].map((step) => (
                <div key={step.num}>
                  <p className="text-accent font-medium mb-3">{step.num}</p>
                  <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Good Fit Section */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-2xl text-foreground mb-8">
              You might be a good fit if...
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "You're an expert, coach, or consultant who's hit a ceiling",
                "Your methodology is proven but you can't scale yourself",
                "You want a partner, not a vendor—someone with skin in the game",
                "You're ready to move fast and iterate together",
                "You're based in or serving the EU market"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-[#f5f0eb]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-xl text-foreground mb-6">
              Connect another way
            </h2>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/simon-roser"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 rounded-xl bg-background border border-border hover:border-accent/30 transition-all"
              >
                <div className="p-3 rounded-full bg-muted group-hover:bg-accent/10 transition-colors mr-4">
                  <Linkedin className="w-5 h-5 text-foreground group-hover:text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <p className="text-xs text-muted-foreground">linkedin.com/in/simon-roser</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-all" />
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Already productized?</p>
              <a
                href="https://roser-growth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                Looking for scale instead?
                <span className="underline decoration-accent/50 group-hover:decoration-accent underline-offset-4">
                  roser-growth.com
                </span>
                <ExternalLink className="w-3 h-3" />
              </a>
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
