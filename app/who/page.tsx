import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"

export default function WhoPage() {
    return (
        <PageWrapper title="Who">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Photo */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                    <Image
                        src="/founder.jpeg"
                        alt="Simon Roser"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bio */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Simon Roser</h2>
                    <p className="text-foreground/60 font-mono text-sm mb-6">Founder & Systems Architect</p>

                    <p>
                        Four years at Google. 500+ companies. Saw the patterns. Left to build.
                        Ran my own company for 5 years. Learned shipping matters more than slides.
                    </p>
                    <p>
                        Then: Fractional CMO. Loved the work. Solving problems is addictive.
                        But I hit a hard limit: Physics. I could only be in one room at a time.
                        I was selling hours, but the problems required scale.
                    </p>
                    <p>
                        I didn&apos;t want to stop helping. I wanted to multiply the impact.
                        So I built the Exoskeleton. Systems to clone the strategy. Automation to handle the execution.
                    </p>
                    <p>
                        This isn&apos;t theory. It&apos;s survival. My brain runs on a Ferrari engine. High speed. Abstract concepts.
                        I built these systems to handle my own chaos. Now I build them for founders who want to scale their mind,
                        not just their headcount.
                    </p>
                    <p className="text-lg text-foreground mt-4">
                        I don&apos;t just advise. I build.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">My Experiences</h2>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-accent mt-1">01</span>
                    <p><strong className="text-foreground">Google</strong> | 4 years, 500+ high-growth companies accelerated</p>
                </div>
                <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-accent mt-1">02</span>
                    <p><strong className="text-foreground">Founder & Operator</strong> | Built and ran own company for 5 years</p>
                </div>
                <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-accent mt-1">03</span>
                    <p><strong className="text-foreground">Fractional CMO</strong> | 2 years, start-ups and scale-ups (more at <a href="https://roser-growth.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">roser-growth.com</a>)</p>
                </div>
                <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-accent mt-1">04</span>
                    <p><strong className="text-foreground">Now: SANE/REBELS</strong> | Helping others escape the same trap</p>
                </div>
            </div>
        </PageWrapper>
    )
}
