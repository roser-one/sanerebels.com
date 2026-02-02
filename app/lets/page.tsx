"use client"

import { useEffect } from "react"
import Link from "next/link"
import { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Calendar } from "lucide-react"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"

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
      <AnimatedNav />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground mb-4"
          >
            Let's talk.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg mx-auto"
          >
            Ready to turn your expertise into a scalable system? Start with a conversation.
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-serif text-xl text-foreground mb-3">Book a discovery call</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                30 minutes to explore what you're building, where you're stuck, and whether we're the right fit.
              </p>
              <button
                onClick={openCalPopup}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Schedule Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Send a Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-serif text-xl text-foreground mb-3">Send a message</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Prefer to write? Tell us about your business and what you're trying to build. We respond within 48 hours.
              </p>
              <a
                href="mailto:hi@sanerebels.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted transition-colors"
              >
                hi@sanerebels.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 border-t border-border mt-8">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl text-foreground text-center mb-12"
          >
            What to expect
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We understand your methodology, your business model, and where the bottleneck actually is."
              },
              {
                num: "02",
                title: "Clarity",
                desc: "You leave knowing if this is the right path, even if we don't work together. No pressure."
              },
              {
                num: "03",
                title: "Partnership",
                desc: "If there's a fit, we work alongside you as co-builders, not vendors. Skin in the game."
              }
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <p className="text-accent font-bold text-sm mb-3">{step.num}</p>
                <h3 className="font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Good Fit Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="font-serif text-xl text-foreground mb-6">You might be a good fit if...</h2>
            <ul className="space-y-3">
              {[
                "You're an expert, coach, or consultant who's hit a ceiling",
                "Your methodology is proven but you can't scale yourself",
                "You want a partner, not a vendor. Someone with skin in the game.",
                "You're ready to move fast and iterate together"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="text-accent mt-0.5">-</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <AnimatedFooter />
    </main>
  )
}
