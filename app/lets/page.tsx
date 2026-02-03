"use client"

import { useEffect, useState } from "react"
import { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"

export default function LetsPage() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  const openCalPopup = () => {
    (async function () {
      const cal = await getCalApi()
      cal("modal", {
        calLink: "sroser/sane-rebels",
        config: { layout: "month_view", theme: "dark" },
      })
    })()
  }

  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Floating neon orbs */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-[#c8ff00]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-[150px]" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c8ff00]/5 rounded-full blur-[200px]" />

      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center">
        <a href="/" className="text-white/60 hover:text-white transition-colors text-sm">
          SANE<span className="text-accent">/</span>REBELS
        </a>
        <a href="mailto:hi@sanerebels.com" className="text-white/40 hover:text-[#c8ff00] transition-colors text-sm">
          hi@sanerebels.com
        </a>
      </nav>

      {/* Hero - Full screen statement */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-white leading-[1.1] tracking-tight mb-4">
              Sane enough
              <br />
              to build it.
            </h1>
            
            {/* Handwritten script line - using SVG for authentic brush feel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <p 
                className="text-[clamp(2rem,7vw,5rem)] text-[#c8ff00] leading-[1.2]"
                style={{ 
                  fontFamily: "'Caveat', 'Brush Script MT', cursive",
                  fontWeight: 700,
                  textShadow: '0 0 60px rgba(200, 255, 0, 0.5), 0 0 120px rgba(200, 255, 0, 0.3)'
                }}
              >
                Rebel enough to ship it.
              </p>
            </motion.div>
          </motion.div>

          {/* Provocative subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We build expert systems for people who refuse to trade time for money.
            <br />
            <span className="text-white/60">If that's not you, this isn't for you.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              onClick={openCalPopup}
              className="group relative px-12 py-5 bg-[#c8ff00] text-black font-bold text-lg rounded-none hover:rounded-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredWord("talk")}
              onMouseLeave={() => setHoveredWord(null)}
            >
              <span className={`transition-all duration-300 ${hoveredWord === "talk" ? "opacity-0" : "opacity-100"}`}>
                Let's Talk
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredWord === "talk" ? "opacity-100" : "opacity-0"}`}>
                30 min. No fluff.
              </span>
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* The Manifesto - Raw text */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
              Your methodology is the asset.
              <br />
              <span 
                className="text-[#c8ff00] inline-block"
                style={{ 
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1.3em',
                  textShadow: '0 0 40px rgba(200, 255, 0, 0.4)'
                }}
              >
                Not your time.
              </span>
            </p>

            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              We extract what makes you <em>you</em>. Your frameworks. Your voice. Your way of seeing around corners.
            </p>

            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              Then we build systems that{" "}
              <span className="relative inline-block">
                sound like you
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#c8ff00]/50 -skew-x-6" />
              </span>
              . Help like you. Guide like you.
            </p>

            <p className="text-lg text-white/40 pt-8 border-t border-white/10">
              Not chatbots. Not courses. Not clones.
              <br />
              <span className="text-white/60">Expert systems that protect your presence while scaling your impact.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Filter - Polarizing section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl text-[#c8ff00] mb-4"
              style={{ 
                fontFamily: "'Caveat', cursive",
                textShadow: '0 0 60px rgba(200, 255, 0, 0.4)'
              }}
            >
              This is for you if...
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - YES */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                "You're an expert who's hit a ceiling",
                "Your methodology is proven but trapped in your head",
                "You want a partner, not a vendor",
                "You move fast and iterate faster",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 mt-1.5 w-3 h-3 bg-[#c8ff00] rounded-full group-hover:scale-125 transition-transform" />
                  <p className="text-white/70 text-lg group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </motion.div>

            {/* Right - NO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-white/30 text-sm uppercase tracking-wider mb-4">Not for you if...</p>
              {[
                "You want a quick chatbot slapped together",
                "You're not ready to go deep on your methodology",
                "You need hand-holding on every decision",
                "You're looking for the cheapest option",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group opacity-50 hover:opacity-100 transition-opacity">
                  <span className="flex-shrink-0 mt-1.5 w-3 h-3 border border-white/30 rounded-full" />
                  <p className="text-white/50 text-lg line-through decoration-white/20">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full bleed */}
      <section className="relative py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-[#c8ff00]/10 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <p className="text-white/40 text-sm uppercase tracking-widest mb-8">30 minutes. Real talk. No pitch deck.</p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Still here?
          </h2>
          
          <p 
            className="text-3xl md:text-4xl text-[#c8ff00] mb-12"
            style={{ 
              fontFamily: "'Caveat', cursive",
              textShadow: '0 0 40px rgba(200, 255, 0, 0.4)'
            }}
          >
            Let's see if we click.
          </p>

          <button
            onClick={openCalPopup}
            className="px-16 py-6 bg-[#c8ff00] text-black font-bold text-xl hover:bg-white transition-colors"
          >
            Book a Call
          </button>

          <p className="text-white/30 text-sm mt-8">
            or email{" "}
            <a href="mailto:hi@sanerebels.com" className="text-white/50 hover:text-[#c8ff00] transition-colors underline">
              hi@sanerebels.com
            </a>
          </p>
        </motion.div>
      </section>

      {/* Minimal footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>SANE<span className="text-accent">/</span>REBELS</p>
          <div className="flex gap-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/imprint" className="hover:text-white transition-colors">Imprint</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Load Caveat font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
      `}</style>
    </main>
  )
}
