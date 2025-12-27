import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"

export default function WhyPage() {
    return (
        <PageWrapper title="Manifest">
            <p className="text-lg">
                You are good at what you do.
            </p>

            <p>
                People pay you well. They should. You spent years getting here.
            </p>

            <p>
                Yet, you can only help so many people in your time. The others are on a waitlist. Or they cannot afford you. Or they never found you. Your wisdom sits in a folder somewhere, locked behind a calendar and a meeting link.
            </p>

            <p>
                You have tried courses. Templates. Webinars. Maybe even written a book or recorded a podcast. Tricky to nail it, tricky to scale it. And for you it is not all about &quot;passive&quot; income. You are interested in impact.
            </p>

            <div className="border-t border-white/10 my-10" />

            <p className="text-lg text-foreground">
                We are sane enough to use technology as a bridge, not a wall. To make authenticity scalable.
            </p>

            <p>
                We are rebel enough to use technology for what it should serve: real connection, real impact, real people.
            </p>

            <p>
                Not to replace you, but to free you.
                <br />
                Not to automate humanity, but to amplify it.
            </p>

            <p>
                In a world that glorifies scale at all costs, we choose both: scale with soul, growth with grace.
            </p>

            <p>
                We automate the routine so you can stay present. We use technology to bring your frameworks to life, not to bury them under spreadsheets and bots.
            </p>

            <p className="text-foreground">
                We work towards a future where machines serve humans, not replace them.
            </p>

            <p className="mt-8">
                The rebellion? Refusing to lose authenticity, even as we scale.
                <br />
                The sanity? Being deliberate enough to work on what matters, using the means the modern world provides.
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
