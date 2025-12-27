import { PageWrapper } from "@/components/page-wrapper"

export default function WhatPage() {
    return (
        <PageWrapper title="How it works">
            <div>

                <p className="mb-4">
                    You have a methodology that works. You help businesses and individuals through meaningful offers. Solve problems. Create impact.
                    But impact is limited by physics. You can only be in one room at a time.
                </p>
                <p className="mb-4">
                    We don&apos;t change what you do. We change how it travels. We take expert knowledge.
                    Build digital infrastructure around it. Service turns into product.
                    It travels to a thousand places at once. You stay in one.
                </p>
                <p className="font-medium text-foreground/80">
                    Not replacing the human. Letting human do human work. System handles the rest.
                </p>
            </div>

            <div className="mt-12 space-y-8">
                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">01. System</h3>
                    <p>
                        Authenticity, at scale, needs infrastructure. We build machine backbone. AI and automation handle administration.
                        Data. Routine logic. Service delivery becomes precise. Every time. It carries your fingerprint.
                        Even when you aren&apos;t touching the keyboard.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">02. Shared Risk</h3>
                    <p>
                        We believe in what we build. No interest in "hit-and-run" consulting or hourly billing.
                        If potential exists, we co-invest. Lower upfront risk. Shared upside. Partners. Not vendors. You win. We win.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">03. Momentum</h3>
                    <p>
                        No 18-month roadmaps. Work happens in 30-90 day sprints. Define core value. Build it.
                        Put it in hands of real users. Learn by shipping. Not by planning.
                    </p>
                </div>
            </div>

            <div className="mt-12 space-y-6">
                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Distill</p>
                    <p className="text-foreground/70">
                        We look at your craft. Identify the magic. Frameworks. Decisions. Intuition.
                        Separate strategic value from operational noise.
                    </p>
                </div>

                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Build</p>
                    <p className="text-foreground/70">
                        Concepts turn into code. Deployment of custom software. GrowthOS. Automation workflows.
                        Manual service becomes scalable asset.
                    </p>
                </div>

                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Scale</p>
                    <p className="text-foreground/70">
                        Launch. Watch data. Refine. Partnership begins here. We manage tech. You manage vision.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}
