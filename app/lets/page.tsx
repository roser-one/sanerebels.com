"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"
import { Check, X } from "lucide-react"

export default function LetsPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "sanerebels-intro" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  const forYou = [
    "You've spent years building something that genuinely helps people, and you're ready to explore what's possible",
    "You're tired of trading hours for money",
    "You want a partner, not a vendor",
    "You move fast and iterate faster",
  ]

  const notForYou = [
    "You want a quick chatbot slapped together",
    "You're not ready to go deep on your methodology",
    "You need hand-holding on every decision",
    "You're looking for the cheapest option",
  ]

  return (
    <main className="min-h-screen bg-background">
      <AnimatedNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-accent mb-6 uppercase tracking-wider"
          >
            Let's Talk
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Your expertise.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-muted-foreground italic mb-8"
          >
            Our engineering.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            30 minutes. Real conversation. No pitch deck.
          </motion.p>
        </div>
      </section>

      {/* For You / Not For You */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* For You */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h3 className="font-serif text-xl text-foreground mb-6">
                This is for you if...
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not For You */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h3 className="font-serif text-xl text-foreground mb-6">
                Not for you if...
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cal.com Embed */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8 text-center"
          >
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Book a call
            </h3>
            <p className="text-muted-foreground mb-8">
              Pick a time that works for you.
            </p>

            <button
              data-cal-namespace="sanerebels-intro"
              data-cal-link="sroser/sanerebels-intro"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Schedule 30 min intro
            </button>

            <p className="text-sm text-muted-foreground mt-6">
              or email{" "}
              <a
                href="mailto:hi@sanerebels.com"
                className="text-accent hover:underline"
              >
                hi@sanerebels.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              What to Expect
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We'll talk about your methodology, your audience, and where you're stuck.
              If there's a fit, we'll map out what an expert system could look like for you.
              If not, we'll tell you straight.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedFooter />
    </main>
  )
}
