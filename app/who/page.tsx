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
                        4 years at Google. 500+ companies. I saw the patterns. But I wanted to make things,
                        not just recommend them.
                    </p>
                    <p>
                        So I left. Built a company. Ran it for 5 years. Learned what actually ships vs.
                        what sounds smart in a deck.
                    </p>
                    <p className="text-foreground/70">
                        Then: fractional CMO gigs. Trading time for money. I experienced the ceiling.
                        So I went deep on automation, AI, systems. Not to become a machine.
                        To stop acting like one.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Journey</h2>
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
                    <p><strong className="text-foreground">Fractional CMO</strong> | 2 years, pre-Series B startups</p>
                </div>
                <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-accent mt-1">04</span>
                    <p><strong className="text-foreground">Now: SANE/REBELS</strong> | Helping others escape the same trap</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Credentials</h2>
            <ul className="space-y-2 text-foreground/80">
                <li>• MSc Management, ESCP Europe (Entrepreneurship)</li>
                <li>• Automation: n8n, AI, systems that scale</li>
                <li>• Offline: Flow, storytelling, real presence</li>
            </ul>
        </PageWrapper>
    )
}
