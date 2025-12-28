"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
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
            {/* Header Section */}
            <div className="text-left mb-10">
                <p className="text-xl md:text-3xl font-light text-foreground leading-relaxed">
                    Build something that scales.
                    <br />
                    Get back to being <span className="text-accent font-semibold">human</span>.
                </p>
            </div>

            {/* Main CTA */}
            <button
                onClick={openCalPopup}
                className="group relative w-full md:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background text-lg font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] mb-12"
            >
                <Calendar className="w-5 h-5" />
                <span>Start the Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Grid for Contacts */}
            <div className="grid grid-cols-1 gap-4 mb-12">
                <a href="mailto:hi@sanerebels.com" className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors mr-4">
                        <Mail className="w-5 h-5 text-foreground group-hover:text-accent" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] text-foreground/40 uppercase tracking-widest mb-0.5">Direct</p>
                        <p className="text-base font-medium text-foreground">hi@sanerebels.com</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                </a>

                <a href="https://linkedin.com/in/simon-roser" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors mr-4">
                        <Linkedin className="w-5 h-5 text-foreground group-hover:text-accent" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] text-foreground/40 uppercase tracking-widest mb-0.5">Connect</p>
                        <p className="text-base font-medium text-foreground">linkedin.com/in/simon-roser</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-foreground/20 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                </a>
            </div>

            {/* Footer Link */}
            <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-foreground/50 mb-2">Already productized?</p>
                <a
                    href="https://roser-growth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                    Looking for scale instead?
                    <span className="underline decoration-accent/50 group-hover:decoration-accent underline-offset-4 transition-all">roser-growth.com</span>
                    <ExternalLink className="w-3 h-3 group-hover:text-accent transition-colors" />
                </a>
            </div>
        </PageWrapper>
    )
}
