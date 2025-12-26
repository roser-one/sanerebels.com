import { PageWrapper } from "@/components/page-wrapper"

export default function WhatPage() {
    return (
        <PageWrapper title="What">
            <p className="text-xl text-foreground">
                We productize your service. You stay <span className="text-accent">human</span>.
            </p>
            <p>
                We find the productizable gold in your service business, build it in 30-90 days,
                and co-invest to share the risk.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How We Work</h2>

            <h3 className="text-lg font-semibold text-accent mt-8 mb-2">01: We Co-invest</h3>
            <p>
                Skin in the game. Our money's in it too. If it doesn't work, we both feel it.
                No consultants who vanish after the invoice.
            </p>

            <h3 className="text-lg font-semibold text-accent mt-8 mb-2">02: AI-powered, Human-fingerprinted</h3>
            <p>
                AI handles the mundane so the product can carry your voice, your soul, your fingerprint.
                Not slop. Not templates. <span className="text-accent">You</span>.
            </p>

            <h3 className="text-lg font-semibold text-accent mt-8 mb-2">03: 30-90 Days</h3>
            <p>
                Not 18 months. Allergic to bloated roadmaps. Find the MVP that matters, build it fast,
                ship it to real users. Then iterate.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Process</h2>

            <div className="space-y-6 mt-6">
                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Find the Gold</p>
                    <p className="text-foreground/70">What do you do better than anyone? Where's the scalable piece hiding?</p>
                </div>

                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Build It</p>
                    <p className="text-foreground/70">From concept to clickable in weeks. AI does grunt work, you keep the soul.</p>
                </div>

                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Win Together</p>
                    <p className="text-foreground/70">Partnership, not handoff. Ongoing sparring. Aligned incentives.</p>
                </div>
            </div>
        </PageWrapper>
    )
}
