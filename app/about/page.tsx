"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"
import { ShaderBackground } from "@/components/shader-background"

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
            <ShaderBackground className="absolute inset-0" />
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-senza-background-8rz3nvKOI7iB8cFqwJl8FnNAidvxvK.png"
                alt="Simon Roser"
                width={600}
                height={600}
                className="object-contain object-bottom h-[105%] w-auto translate-y-[5%]"
              />
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
                <p className="italic text-foreground">
                  What if you could use this for something that actually mattered?
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
                <p>There were moments where it confronted me. Rightfully so.</p>
                <p>It showed me patterns I hadn't noticed. Contradictions between what I said I valued and how I actually lived. Not judgmental. Just honest.</p>
                <p className="italic text-foreground">What if technology could help people see themselves more clearly?</p>
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
                <p>We built the most connected generation in history, and it's the loneliest one. Social media promised community and delivered comparison. Optimized for engagement, not meaning.</p>
                <p>80% of Gen Z feels lonely. People who spend 2+ hours on social media are twice as likely to feel isolated.</p>
                <p>The world is starved for a calm moment. For someone who's actually there. For expertise that doesn't feel like content.</p>
                <p className="text-foreground">That's what scales now. Not reach. Presence.</p>
              </div>
            </div>

            {/* Section IV½ - The Break */}
            <div className="mb-16">
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                IV½. The Break
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Generic AI is already helping and guiding hundreds of millions of people. Without much supervision. Without methodology. Without accountability.</p>
                <p>That's not necessarily bad. It's better than nothing. But your methodology is proven. Built over years of practice, failure, and care. We can do so much more with it.</p>
                <p className="text-foreground">The measure of great software isn't how long you stayed. It's how much clearer you <span className="font-medium">felt</span> when you left.</p>
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
                <p>I don't care about technology that makes people perform their growth for an audience. I care about growth that shows up in <span className="italic">how</span> you live.</p>
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
                <p className="text-foreground">If you have something powerful to teach, we help you do so with the scale you deserve.</p>
              </div>
            </div>

            {/* Section VII - Sane/Rebels */}
            <div className="mb-16">
              <h3 className="font-serif text-xl md:text-2xl text-foreground text-center mb-8">
                VII. Sane/Rebels
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p><span className="text-foreground font-medium">SANE</span> because the world is drowning in noise. We build for clarity. For calm. For technology that helps you see clearly instead of scroll endlessly.</p>
                <p><span className="text-foreground font-medium">REBELS</span> because we refuse to build what everyone else is building. Technology that replaces humans. Technology that measures your worth in screen time. That turns your attention into someone else's revenue. We reject the premise that connection requires a feed.</p>
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
                <p className="text-foreground">If that's you, <span className="font-medium">let's</span> build something.</p>
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


      <AnimatedFooter />
    </main >
  )
}
