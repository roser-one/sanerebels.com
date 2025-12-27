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
                But impact is limited by physics. You can only be in one room at a time.
                That is the limit. <strong className="text-foreground">You can&apos;t scale a human.</strong>
            </p>

            <p>
                To scale a human story, you need a machine backbone. We do not sell hustle. We sell <strong className="text-foreground">architecture</strong>.
                <br />
                Workflows. Agents. Data pipes. A single operating system that turns your scattered tools into a business that flows.
                We build the Machine that carries the weight of the business. We replace the chaos of operations with the precision of code.
            </p>

            <p className="mt-8">
                The enemy is not AI. The enemy is an expert rewriting the same email for the 47th time.
            </p>

            <p>
                <strong className="text-foreground">Machines do machine work.</strong> We automate the admin and engineer the routine so your story actually gets heard.
                Your authentic voice is the only part of your advantage no one else can directly copy.
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
