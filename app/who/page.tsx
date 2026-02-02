"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"

const experience = [
  {
    role: "Google",
    duration: "4 years",
    description: "500+ high-growth companies. Saw the blueprint. Learned what scales.",
  },
  {
    role: "Founder",
    duration: "5 years",
    description: "Bootstrapped. Learned the reality of shipping. Solved problems nobody paid for.",
  },
  {
    role: "Fractional CMO",
    duration: "2 years",
    description: "Solved growth problems. Hit the ceiling of time-for-money.",
    link: { url: "https://roser-growth.com", label: "roser-growth.com" },
  },
  {
    role: "Now",
    duration: "SANE/REBELS",
    description: "Multiplying impact through systems. Building what I wish existed.",
  },
]

export default function AboutPage() {
  return (
    <PageWrapper 
      title="We don't just advise. We co-create."
      subtitle="About"
      currentPath="/who"
    >
      {/* Meet the Founder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Photo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.70_0.14_50)] to-[oklch(0.60_0.16_40)] blur-xl opacity-30" />
            <Image
              src="/founder.jpeg"
              alt="Simon Roser"
              width={160}
              height={160}
              className="rounded-full w-full h-full object-cover border-2 border-border shadow-2xl relative z-10"
            />
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h2 className="font-serif text-2xl text-foreground mb-1 text-center md:text-left">Simon Roser</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6 text-center md:text-left">
              Founder & Systems Architect
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Four years at Google. 500+ companies. Saw the patterns. Left to build.
              </p>
              <p>
                Ran my own company for 5 years. Learned shipping matters more than slides. Learned the hard way what doesn't scale.
              </p>
              <p>
                Then Fractional CMO. Loved the work. Solving problems is addictive. But I ran into physics. I could only be in one room at a time. I was selling hours. But we wanted to share know-how with more than just one room.
              </p>
              <p className="text-foreground">
                We thrive in high speed. Abstractions. Principles. Systems. We build infrastructure because we need it. To turn complex ideas into reality. To handle speed without losing direction.
              </p>
              <p>
                Now we build those systems for others. Making authenticity scalable.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="text-sm font-medium text-accent mb-8 uppercase tracking-wider">
          Experience
        </p>

        <div className="space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-28">
                <p className="font-medium text-accent">{item.role}</p>
                <p className="text-xs text-muted-foreground">{item.duration}</p>
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground">
                  {item.description}
                  {item.link && (
                    <>
                      {" "}
                      <a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline decoration-accent/50 underline-offset-4"
                      >
                        {item.link.label}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* The Name */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">
          Why SANE/REBELS?
        </p>

        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-medium">Sane</span> — deliberate enough to work on what matters. To use the means the modern world provides. To build infrastructure that actually works.
          </p>
          <p>
            <span className="text-foreground font-medium">Rebel</span> — refusing to lose authenticity, even as we scale. Shipping before it's perfect. Learning by building. Staying curious at the edge.
          </p>
          <p className="text-foreground">
            We automate the routine so you can stay present. We use technology to bring your frameworks to life, not to bury them under spreadsheets and bots.
          </p>
        </div>

        <div className="mt-10 p-8 rounded-2xl bg-card border border-border text-center">
          <p className="font-serif text-lg text-foreground">
            We work towards a future where machines serve humans, not replace them.
          </p>
        </div>
      </motion.div>

      {/* The Entity */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">
          The Entity
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Company</p>
            <p className="text-foreground">KNUS GmbH</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
            <p className="text-foreground">Berlin, Germany</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Infrastructure</p>
            <p className="text-foreground">EU-hosted</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Compliance</p>
            <p className="text-foreground">GDPR-native</p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="mt-16">
        <Link
          href="/lets"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
        >
          Let's Talk
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  )
}
