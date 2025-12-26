import { PageWrapper } from "@/components/page-wrapper"

export default function WhatPage() {
    return (
        <PageWrapper title="What">
            <p className="text-lg text-foreground">
                We turn your chaos into code.
            </p>
            <p>
                You have a service. It relies on you being in the room. That is a trap.
                We isolate the genius in your business, strip away the manual labor, and build it into a scalable asset.
                We do it in 90 days. And we pay for part of it.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">How We Work</h2>

            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">01. Skin in the Game</h3>
                    <p>
                        We do not do "hit-and-run" consulting. If the math makes sense, we co-invest.
                        We take the risk because we trust the build. If you lose, we lose. That keeps us honest.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">02. The Exoskeleton</h3>
                    <p>
                        We don&apos;t sell templates. We build infrastructure. We use AI to handle the grunt work
                        and automation to handle the logic. This isn&apos;t "AI Slop". It is adult supervision for your operations.
                        The result is a product that carries your fingerprint, without needing your hands.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">03. 90 Days. Hard Stop.</h3>
                    <p>
                        We are allergic to 18-month roadmaps. We define the MVP. We build it. We ship it to real users.
                        Speed is the only way to find the truth.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">The Process</h2>

            <div className="space-y-6">
                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Audit</p>
                    <p className="text-foreground/70">
                        We strip the business down to the studs. What is the core value? What is just noise?
                        We find the piece of your business that can scale without you.
                    </p>
                </div>

                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Build</p>
                    <p className="text-foreground/70">
                        From concept to code. We deploy the tech stack—databases, automation, interface—that
                        turns a manual service into a digital product.
                    </p>
                </div>

                <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="font-semibold text-foreground">Deal</p>
                    <p className="text-foreground/70">
                        Partnership, not vendor management. We align incentives via profit share or equity.
                        We don&apos;t want your hourly rate. We want the upside.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}
