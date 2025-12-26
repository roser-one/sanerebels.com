import { PageWrapper } from "@/components/page-wrapper"

export default function WhyPage() {
    return (
        <PageWrapper title="Why">
            <blockquote className="border-l-2 border-accent pl-4 my-6">
                <p className="text-xl md:text-2xl font-medium text-foreground">
                    You have a Ferrari engine. You are driving it with bicycle brakes.
                </p>
            </blockquote>

            <p className="text-lg">
                We built incredible technology to save time. Then we spent that time acting like the technology.
            </p>

            <p>
                We optimized for speed but lost the direction. Most founders try to scale a vision on top of manual labor.
                They hire more people to solve process problems. That is not scaling. That is bloating.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Truth</h2>
            <p className="text-lg text-foreground">
                Authenticity without infrastructure is just noise.
            </p>
            <p>
                To scale a human story, you need a machine backbone. We do not sell hustle. We sell architecture.
                We build the Exoskeleton that carries the weight of the business. We replace the chaos of operations with the precision of code.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Enemy</h2>
            <p>
                The enemy is not AI. The enemy is inefficiency. The enemy is a founder buried in spreadsheets instead of strategy.
            </p>
            <p>
                Machines do machine work. We automate the admin. We engineer the routine.
                Your authentic voice is the only competitive advantage left. It is the only thing that cannot be copied.
                But it cannot be heard if you are drowning.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Promise</h2>
            <p className="text-lg text-foreground">
                A business that runs. A founder that sleeps.
                <br />
                Scale the revenue. Keep the soul.
            </p>

            <p className="mt-10 font-mono text-sm text-foreground/60 italic">
                Sane enough to build it. Rebel enough to ship it.
            </p>
        </PageWrapper>
    )
}
