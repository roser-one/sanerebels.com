"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"
import { PageWrapper } from "@/components/page-wrapper"
import { ArrowRight, Mail, Linkedin, Calendar, ExternalLink } from "lucide-react"

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
        <PageWrapper title="Let's">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                    Build something that scales.
                    <br />
                    Get back to being <span className="text-accent font-medium">human</span>.
                </p>

                <p className="text-foreground/60">
                    No pitch deck required. No sales call. Just clarity about what you're trying to build and whether we can help.
                </p>
            </motion.div>

            {/* Main CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <button
                    onClick={openCalPopup}
                    className="group relative w-full flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background text-lg font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-12"
                >
                    <Calendar className="w-5 h-5" />
                    <span>Start the Conversation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>

            <div className="border-t border-white/10 my-8" />

            {/* What to Expect */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
                    What to Expect
                </p>

                <div className="space-y-4">
                    <div className="flex gap-4">
                        <span className="text-accent font-mono">01</span>
                        <div>
                            <p className="text-foreground font-medium">30-minute conversation</p>
                            <p className="text-sm text-foreground/60">We'll explore what you're building and whether there's a fit.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-accent font-mono">02</span>
                        <div>
                            <p className="text-foreground font-medium">No pressure</p>
                            <p className="text-sm text-foreground/60">This is discovery for both of us. We say no to 80% of projects.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-accent font-mono">03</span>
                        <div>
                            <p className="text-foreground font-medium">Clarity, either way</p>
                            <p className="text-sm text-foreground/60">You'll leave knowing if this is the right path, even if we don't work together.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="border-t border-white/10 my-8" />

            {/* Alternative Contact */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
                    Prefer Another Way?
                </p>

                <div className="space-y-3">
                    <a
                        href="mailto:hi@sanerebels.com"
                        className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
                    >
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors mr-4">
                            <Mail className="w-5 h-5 text-foreground group-hover:text-accent" />
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] text-foreground/40 uppercase tracking-widest mb-0.5">Email</p>
                            <p className="text-base font-medium text-foreground">hi@sanerebels.com</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </a>

                    <a
                        href="https://linkedin.com/in/simon-roser"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
                    >
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors mr-4">
                            <Linkedin className="w-5 h-5 text-foreground group-hover:text-accent" />
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] text-foreground/40 uppercase tracking-widest mb-0.5">LinkedIn</p>
                            <p className="text-base font-medium text-foreground">linkedin.com/in/simon-roser</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-foreground/20 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                </div>
            </motion.div>

            <div className="border-t border-white/10 my-8" />

            {/* Already Productized */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p className="text-sm text-foreground/50 mb-2">Already productized?</p>
                <a
                    href="https://roser-growth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                    Looking for scale instead?
                    <span className="underline decoration-accent/50 group-hover:decoration-accent underline-offset-4 transition-all">
                        roser-growth.com
                    </span>
                    <ExternalLink className="w-3 h-3 group-hover:text-accent transition-colors" />
                </a>
            </motion.div>
        </PageWrapper>
    )
}
