import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"

export default function WhyPage() {
    return (
        <PageWrapper title="Manifest">
            <p className="text-lg">
                We built incredible technology to save time. Then we spent that time acting like the technology.
            </p>

            <p>
                We optimized for speed but lost the direction. Most founders try to scale a vision on top of manual labor.
                They hire more people to solve process problems. That is not scaling. That is bloating.
            </p>

            <p className="text-lg text-foreground mt-8">
                Authenticity without infrastructure is just noise.
            </p>

            <p>
                To scale a human story, you need a machine backbone. We do not sell hustle. We sell architecture.
                We build the Exoskeleton that carries the weight of the business. We replace the chaos of operations with the precision of code.
            </p>

            <p className="mt-8">
                The enemy is not AI. The enemy is inefficiency. The enemy is a founder buried in spreadsheets instead of strategy.
            </p>

            <p>
                Machines do machine work. We automate the admin. We engineer the routine.
                Your authentic voice is the only competitive advantage left. It is the only thing that cannot be copied.
                But it cannot be heard if you are drowning.
            </p>

            <p className="text-lg text-foreground mt-8">
                A business that runs. A founder that sleeps.
                <br />
                Scale the revenue. Keep the soul.
            </p>

            <p className="mt-10 font-mono text-sm text-foreground/60 italic">
                Sane enough to build it. Rebel enough to ship it.
            </p>

            <div className="mt-12 text-center">
                <Link href="/what" className="text-sm text-accent hover:underline decoration-accent/50 underline-offset-4 transition-all">
                    Show me how &rarr;
                </Link>
            </div>
        </PageWrapper>
    )
}
