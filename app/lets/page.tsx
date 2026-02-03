"use client"

import { useEffect } from "react"
import Link from "next/link"
import { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"

export default function LetsPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "sanerebels" })
      cal("ui", {
        theme: "dark",
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
        config: { layout: "month_view", theme: "dark" },
      })
    })()
  }

  return (
    <main className="relative min-h-screen w-full">
      <AnimatedNav />

      {/* Hero - Dark & Bold */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] opacity-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8ff00]/10 border border-[#c8ff00]/30 rounded-full text-[#c8ff00] text-sm font-medium">
              <Zap className="w-4 h-4" />
              Ready to rebel?
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Sane enough to build it.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#c8ff00] italic mb-12"
          >
            Rebel enough to ship it.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            Your methodology is the asset. Not your time. Let's build systems that sound like you, help like you, guide like you.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={openCalPopup}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c8ff00] text-black font-bold text-lg rounded-xl hover:bg-[#d4ff33] transition-all hover:scale-105"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="mailto:hi@sanerebels.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-medium text-lg rounded-xl hover:border-white/40 hover:bg-white/5 transition-all"
            >
              hi@sanerebels.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* What We Build - Split Section */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Build systems that{" "}
                <span className="relative">
                  Sound like you.
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#c8ff00]/40 -skew-x-3" />
                </span>
                <br />
                Help like you. Guide like you.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We don't just build AI tools. We extract your methodology, your voice, your frameworks - and turn them into systems that scale your presence without diluting your authenticity.
              </p>
            </motion.div>
            
            {/* Right - Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { label: "Extract", desc: "Your methodology, distilled" },
                { label: "Architect", desc: "Your digital mind, configured" },
                { label: "Deploy", desc: "Your presence, scaled" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#c8ff00]/30 transition-colors"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-[#c8ff00] text-black font-bold rounded-lg flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-bold text-white">{item.label}</p>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* You're a Rebel If... */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              You're a <span className="text-[#c8ff00]">rebel</span> if...
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "You're an expert who's hit a ceiling - your calendar is full but your impact is capped",
              "Your methodology is proven but you can't clone yourself (yet)",
              "You want a partner with skin in the game, not another vendor",
              "You're ready to move fast, break things, and iterate together",
              "You believe your frameworks should outlive your calendar",
              "You're done trading time for money"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-[#c8ff00] rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-black rounded-full" />
                </span>
                <p className="text-white/80 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-accent/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#c8ff00] font-medium mb-6">30 minutes. No fluff. Just clarity.</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Let's see if we're a fit.
            </h2>
            <button
              onClick={openCalPopup}
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#c8ff00] text-black font-bold text-xl rounded-xl hover:bg-[#d4ff33] transition-all hover:scale-105"
            >
              Book Your Discovery Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer with dark theme override */}
      <div className="bg-[#0a0a0a]">
        <AnimatedFooter />
      </div>
    </main>
  )
}
