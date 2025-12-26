import { PageWrapper } from "@/components/page-wrapper"

export default function WhyPage() {
    return (
        <PageWrapper title="Why">
            <blockquote className="border-l-2 border-accent pl-4 my-6">
                <p className="text-xl md:text-2xl font-medium text-foreground">
                    Machines got powerful. Time to be more human.
                </p>
            </blockquote>

            <p className="text-lg">
                We built tools to save time. Then we spent that time acting like the tools.
            </p>

            <p>
                Always connected. Rarely present. Optimizing for efficiency, we optimized away the humanity.
                Somewhere along the way, we became the machine.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Flip</h2>
            <p>
                AI can handle the mundane. So you can handle the <span className="text-accent">meaningful</span>.
            </p>
            <p>
                Let machines do machine work. Automate the admin. Scale without losing yourself.
                Get back to flow, to storytelling, to the craft that made you start in the first place.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Promise</h2>
            <p className="text-lg text-foreground">
                The rebellion? Going <span className="text-accent">home</span> on time.
                <br />
                The sanity? Being <span className="text-accent">present</span> when you get there.
            </p>

            <p className="mt-10 font-mono text-sm text-foreground/60 italic">
                Sane enough to build it. Rebel enough to ship it.
            </p>
        </PageWrapper>
    )
}
