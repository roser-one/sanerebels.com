import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"

export default function AboutPage() {
    return (
        <PageWrapper title="About">
            {/* Top Quote & Logo */}
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                    &ldquo;We don&apos;t just advise. We are at our best when we co-create. Build. Work on challenges worth solving.&rdquo;
                </blockquote>

                <div className="flex items-center justify-center gap-1 mt-8 opacity-90 scale-110">
                    <span className="font-bold text-xl tracking-tight">SANE</span>
                    <span className="text-accent font-bold text-xl">/</span>
                    <span className="font-bold text-xl tracking-tight">REBELS</span>
                </div>
            </div>

            <div className="border-t border-white/10 my-12 w-full max-w-xs mx-auto" />

            {/* Meet the Founder */}
            <h2 className="text-sm font-mono text-accent mb-8 text-center uppercase tracking-widest">Meet the Founder</h2>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Photo - Styled more elegantly */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-xl" />
                    <Image
                        src="/founder.jpeg"
                        alt="Simon Roser"
                        width={160}
                        height={160}
                        className="rounded-full w-full h-full object-cover border-2 border-white/10 shadow-2xl relative z-10"
                    />
                </div>

                {/* Bio */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-1 text-center md:text-left">Simon Roser</h2>
                    <p className="text-foreground/60 font-mono text-xs uppercase tracking-wider mb-6 text-center md:text-left">Founder & Systems Architect</p>

                    <p>
                        Four years at Google. 500+ companies. Saw the patterns. Left to build.
                        Ran my own company for 5 years. Learned shipping matters more than slides (and so much more).
                    </p>
                    <p>
                        Then Fractional CMO. Loved the work. Solving problems is addictive. But I ran into physics.
                        I could only be in one room at a time. I was selling hours.
                        But we wanted to share know-how with more than just one board room.
                    </p>
                    <p>
                        We thrive in high speed. Abstractions. Principles. Systems. We build infrastructure because we need it.
                        To turn complex ideas into reality. To handle speed without losing direction.
                        Now we build those systems for others. Making authenticity scalable.
                    </p>
                </div>
            </div>

            <h2 className="text-xl font-bold text-foreground mt-12 mb-6 uppercase tracking-wider text-sm">Experience</h2>
            <div className="space-y-6">
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-mono text-xs text-accent uppercase py-1">Google</span>
                    <p className="text-sm"><strong className="text-foreground">4 years.</strong> 500+ high-growth companies. Saw the blueprint.</p>
                </div>

                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-mono text-xs text-accent uppercase py-1">Founder</span>
                    <p className="text-sm"><strong className="text-foreground">5 years.</strong> Bootstrapped. Learned reality of shipping.</p>
                </div>

                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-mono text-xs text-accent uppercase py-1">Fractional CMO</span>
                    <p className="text-sm"><strong className="text-foreground">2 years.</strong> Solved growth problems. Hit ceiling of time-for-money. (more at <a href="https://roser-growth.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">roser-growth.com</a>)</p>
                </div>

                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-mono text-xs text-accent uppercase py-1">Now</span>
                    <p className="text-sm"><strong className="text-foreground">SANE/REBELS.</strong> Multiplying impact through systems.</p>
                </div>
            </div>
        </PageWrapper>
    )
}
