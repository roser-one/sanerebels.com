"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { PageWrapper } from "@/components/page-wrapper"

export default function WhyPage() {
    return (
        <PageWrapper title="Manifesto">
            {/* Section One: The Gold Rush */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                    Everyone is talking about AI.
                </p>

                <p>
                    <span className="text-foreground font-medium">57% of small businesses</span> are investing in it now. Up from 36% two years ago. And the average worker using AI saves <span className="text-foreground font-medium">5.6 hours a week</span>.
                </p>

                <p>
                    But most people are running in circles. Trying every tool. Committing to nothing. <span className="text-foreground font-medium">45% worry</span> that too much AI will hurt their reputation.
                </p>

                <p className="text-lg text-foreground mt-8">
                    The people actually winning aren't loud about it. They figured out something simple: <span className="text-accent">their methodology is the asset. Not their time.</span>
                </p>
            </motion.div>

            <div className="border-t border-white/10 my-12" />

            {/* Section Two: The Gold Rush is Real */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    One
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    The gold rush is real. Most people are digging where there's nothing.
                </h2>

                <p>
                    Only <span className="text-foreground font-medium">6% of companies</span> see real returns from AI. The difference isn't the tools. It's knowing what to automate.
                </p>

                <p>
                    71% of creators earn under $30,000 a year. Less than 5% break $100K. Customer acquisition costs jumped <span className="text-foreground font-medium">400-600%</span>. What used to cost $50 per lead now costs $300.
                </p>

                <p>
                    The "passive income" playbook is a graveyard. Courses nobody finishes. Funnels that don't convert. Content that sounds like everyone else.
                </p>

                <p className="text-lg text-foreground mt-6">
                    What's missing isn't technology. It's architecture. A system that captures what makes your work actually work.
                </p>
            </motion.div>

            <div className="border-t border-white/10 my-12" />

            {/* Section Three: Technology Fails */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    Two
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Technology fails when it tries to replace you.
                </h2>

                <p>
                    80% of Gen Z felt lonely this year. The most connected generation in history.
                </p>

                <p>
                    People who spend 2+ hours a day on social media are twice as likely to feel isolated as those who spend less than 30 minutes.
                </p>

                <p>
                    We built tools that promised closeness and delivered comparison. Platforms that strip nuance out of everything. That turn experts into content machines.
                </p>

                <p className="text-lg text-foreground mt-6">
                    But there's another way to use technology. Not to replace the human expert with something generic. To extend your reach while preserving your voice.
                </p>

                <p>
                    That's what we build. Systems that sound like you. Help like you would. Guide people the way you would guide them. So you can reach people you'll never meet, without losing what makes your work matter.
                </p>
            </motion.div>

            <div className="border-t border-white/10 my-12" />

            {/* Section Four: The Right Partner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    Three
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    You need a partner who's both curious and grounded.
                </h2>

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
            </motion.div>

            <div className="border-t border-white/10 my-12" />

            {/* Section Five: This is SANE/REBELS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    This is
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    SANE/REBELS.
                </h2>

                <p className="text-lg text-foreground mb-6">
                    We co-build productized systems with service providers who are done being the bottleneck in their own business.
                </p>

                <p>
                    Your expertise. Our engineering. Something that scales your way.
                </p>

                <div className="mt-12 p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
                    <p className="text-xl md:text-2xl text-foreground font-semibold">
                        Sane enough to build it.
                        <br />
                        <span className="text-accent">Rebel enough to ship it.</span>
                    </p>
                </div>
            </motion.div>

            <div className="mt-16 text-center">
                <Link href="/what" className="text-sm text-accent hover:underline decoration-accent/50 underline-offset-4 transition-all">
                    Show me how it works &rarr;
                </Link>
            </div>
        </PageWrapper>
    )
}
