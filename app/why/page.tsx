"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"

export default function WhyPage() {
  return (
    <PageWrapper 
      title="Everyone is talking about AI." 
      subtitle="Manifesto"
      currentPath="/why"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          57% of small businesses are investing in it now. Up from 36% two years ago. And the average worker using AI saves 5.6 hours a week.
        </p>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          But most people are running in circles. Trying every tool. Committing to nothing. 45% worry that too much AI will hurt their reputation.
        </p>
        
        <p className="text-lg text-foreground leading-relaxed">
          The people actually winning aren't loud about it. They figured out something simple: their methodology is the asset. Not their time.
        </p>
      </motion.div>

      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          <span className="text-accent">01.</span> The gold rush is real. Most people are digging where there's nothing.
        </p>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Only <span className="text-foreground font-medium">6% of companies</span> see real returns from AI. The difference isn't the tools. It's knowing what to automate.
          </p>
          <p>
            71% of creators earn under $30,000 a year. Less than 5% break $100K. Customer acquisition costs jumped 400-600%. What used to cost $50 per lead now costs $300.
          </p>
          <p>
            The "passive income" playbook is a graveyard. Courses nobody finishes. Funnels that don't convert. Content that sounds like everyone else.
          </p>
          <p className="text-foreground">
            What's missing isn't technology. It's architecture. A system that captures what makes your work actually work.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          <span className="text-accent">02.</span> Technology fails when it tries to replace you.
        </p>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            80% of Gen Z felt lonely this year. The most connected generation in history.
          </p>
          <p>
            People who spend 2+ hours a day on social media are twice as likely to feel isolated as those who spend less than 30 minutes.
          </p>
          <p>
            We built tools that promised closeness and delivered comparison. Platforms that strip nuance out of everything. That turn experts into content machines.
          </p>
          <p className="text-foreground">
            But there's another way to use technology. Not to replace the human expert with something generic. To extend your reach while preserving your voice.
          </p>
          <p>
            That's what we build. Systems that sound like you. Help like you would. Guide people the way you would guide them. So you can reach people you'll never meet, without losing what makes your work matter.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <p className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          <span className="text-accent">03.</span> You need a partner who's both curious and grounded.
        </p>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            This space is moving faster than best practices. The playbook hasn't been written yet.
          </p>
          <p>
            That's terrifying if you want guarantees. That's exciting if you've got the right partner building alongside you.
          </p>
          <p>
            We're obsessed with where technology meets human behavior. What makes people tick. What makes systems scale without losing soul.
          </p>
          <p>
            We don't chase hype. We've seen cycles come and go. But we stay curious enough to experiment at the edge. To ship before it's perfect. To learn by building.
          </p>
        </div>
      </motion.div>

      {/* Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          This is SANE/REBELS.
        </h2>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            We co-build productized systems with service providers who are done being the bottleneck in their own business.
          </p>
          <p className="text-foreground">
            Your expertise. Our engineering. Something that scales your way.
          </p>
        </div>

        <div className="mt-10 p-8 rounded-2xl bg-card border border-border text-center">
          <p className="font-serif text-xl md:text-2xl text-foreground">
            Sane enough to build it.
            <br />
            <span className="text-accent italic">Rebel enough to ship it.</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/lets"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Start the Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/what"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </motion.div>
    </PageWrapper>
  )
}
