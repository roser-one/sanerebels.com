import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"

export default function WhatPage() {
    return (
        <PageWrapper title="How it works">
            <div>

                <p className="mb-4">
                    We don&apos;t change what you do. We change how it travels.
                </p>
                <p className="mb-4">
                    You have a methodology that works. We take that expert knowledge and build digital infrastructure around it.
                    Service turns into product. It travels to a thousand places at once. You stay in one.
                </p>
                <p className="font-medium text-foreground/80">
                    Not replacing the human. Letting human do human work. System handles the rest.
                </p>
            </div>

            <div className="mt-12 space-y-12">
                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">01. System</h3>
                    <p className="mb-4">
                        Authenticity, at scale, needs infrastructure. We build the machine backbone. AI and automation handle administration.
                        Data. Routine logic. Service delivery becomes precise. Every time. It carries your fingerprint.
                        Even when you aren&apos;t touching the keyboard.
                    </p>
                    <div className="border-l-2 border-foreground/20 pl-4">
                        <p className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Distill</p>
                        <p className="text-foreground/70 text-sm">
                            We look at your craft. Identify the magic. Frameworks. Decisions. Intuition.
                            Separate strategic value from operational noise.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">02. Shared Risk</h3>
                    <p className="mb-4">
                        We believe in what we build. No interest in "hit-and-run" consulting or hourly billing.
                        If potential exists, we co-invest. Lower upfront risk. Shared upside. Partners. Not vendors. You win. We win.
                    </p>
                    <div className="border-l-2 border-foreground/20 pl-4">
                        <p className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Build</p>
                        <p className="text-foreground/70 text-sm">
                            Concepts turn into code. Deployment of custom software. GrowthOS. Automation workflows.
                            Manual service becomes scalable asset.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">03. Momentum</h3>
                    <p className="mb-4">
                        No 18-month roadmaps. Work happens in 30-90 day sprints. Define core value. Build it.
                        Put it in hands of real users. Learn by shipping. Not by planning.
                    </p>
                    <div className="border-l-2 border-foreground/20 pl-4">
                        <p className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Scale</p>
                        <p className="text-foreground/70 text-sm">
                            Launch. Watch data. Refine. Partnership begins here. We manage tech. You manage vision.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Link href="/who" className="text-sm text-accent hover:underline decoration-accent/50 underline-offset-4 transition-all">
                    What&apos;s your experience? &rarr;
                </Link>
            </div>
        </PageWrapper>
    )
}
