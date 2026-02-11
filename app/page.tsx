"use client"
// SANE/REBELS Homepage
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { motion, AnimatePresence, useScroll, useTransform, type MotionValue } from "framer-motion"
import { ArrowRight, Check, MessageCircle, Headphones, Radio, BookOpen, Users, Heart, AlertTriangle, Plus, Minus, GraduationCap } from "lucide-react"
import { AnimatedNav, AnimatedFooter } from "@/components/animated-nav"

const ShaderBackground = dynamic(() => import("@/components/shader-background").then(mod => mod.ShaderBackground), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#9333ea] to-[#c2410c]" />
})

const useCases = [
  {
    id: "coaches",
    label: "Coaches",
    headline: "Be Present, Even When You're Not",
    subheadline: "And practitioners, healers, and therapists.",
    description: "Your clients keep coming back because of you. There's a ceiling to how many rooms you can be in. If you're willing to explore what this new technology can do, we raise that ceiling. Together.",
    benefits: [
      "Scale your practice without diluting your methodology",
      "Support clients between sessions, authentically",
      "Reach people you'll never meet in person",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Person%20in%20Glasses%20Photo-hRHfmN8In2CWRcl0f3CrW90jPgBuVG.jpg",
  },
  {
    id: "consultants",
    label: "Consultants",
    headline: "Your Methodology, Multiplied",
    subheadline: "And advisors, strategists, and fractional leaders.",
    description: "Your work is too nuanced to productize. That's what you've told yourself. But the nuance IS the product. We just need to capture it properly.",
    benefits: [
      "Architect methodologies that scale without becoming generic",
      "Qualify leads with your actual framework",
      "Deliver your approach at enterprise scale",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portrait%20Business%20Picture-YxJoh6xpiBlRGMzyk0ZZaGM95gdQ1f.jpg",
  },
  {
    id: "experts",
    label: "Experts",
    headline: "Frameworks That Work Without You",
    subheadline: "And specialists, authors, and thought leaders.",
    description: "You've spent years spotting patterns and understanding nuances others miss. We know your core can't be replaced. But everyone has that one component that can be brought to life digitally, without sacrificing authenticity. That's where we come in.",
    benefits: [
      "Engineer delivery systems for your intellectual property",
      "Monetize expertise without trading more hours",
      "Create personalized, interactive experiences at scale",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Man%20with%20Beard%20Blue%20Shirt-AVVZM84SX3k5i43lzUYNb7VMxOWZt3.jpg",
  },
]

// Evolution of Expertise Timeline
const evolutionTimeline = [
  {
    stage: "Individuality",
    era: "Verbal Communication",
    year: "100,000 B.C.",
    outcome: "Sound, Local Reach",
    icon: Users,
    style: "neutral",
  },
  {
    stage: "Access",
    era: "Printing Press",
    year: "1455",
    outcome: "Books, Duplication",
    icon: BookOpen,
    style: "neutral",
  },
  {
    stage: "Immediacy",
    era: "Radio / Television",
    year: "1910-1929",
    outcome: "Mass Media, Audiences",
    icon: Radio,
    style: "neutral",
  },
  {
    stage: "On-Demand",
    era: "Podcast / Digital",
    year: "2003+",
    outcome: "Content, Platforms",
    icon: Headphones,
    style: "neutral",
  },
  {
    stage: "Validation",
    era: "MOOCs / Online Courses",
    year: "2012+",
    outcome: "Low completion, No presence",
    icon: GraduationCap,
    style: "neutral",
  },
  {
    stage: "⚠ Overload",
    era: "Social Media / Feeds",
    year: "2007-2020",
    outcome: "Addiction, Isolation, Noise",
    icon: AlertTriangle,
    style: "warning",
  },
  {
    stage: "⚠ Commoditization",
    era: "Generic AI / ChatGPT",
    year: "2023+",
    outcome: "Mass advice, No provenance",
    icon: MessageCircle,
    style: "warning",
  },
  {
    stage: "Embodiment",
    era: "Expert AI + Real Presence",
    year: "Today",
    outcome: "Branded answers, Trust, Methods preserved",
    icon: Heart,
    style: "accent",
  },
]

const fears = [
  {
    question: "Will this replace me?",
    answer: "No. It frees you to do what only you can do. Your time shifts to the conversations that actually transform people.",
  },
  {
    question: "Will this make me inauthentic?",
    answer: "The opposite. It makes you more you. Every output is trained on your actual thinking. Not a template. Not a generic chatbot. Your fingerprint on every response.",
  },
  {
    question: "What if it says something not-me?",
    answer: "That's a fair concern. We can't guarantee perfection. But we can show you what it does today, how close it gets, and you decide if it's good enough.",
  },
  {
    question: "How much of my time does this take?",
    answer: "Upfront, a few deep sessions where we extract your thinking. After that, you stay involved as much or as little as you want. The system does the heavy lifting.",
  },
  {
    question: "What if generic AI makes my work invisible?",
    answer: "Generic AI gives generic answers. Your methodology exists because generic isn't enough. We build something that carries your name and your thinking. Branded, recognizable, unmistakably yours.",
  },
  {
    question: "Is this therapy or medical advice?",
    answer: "No. We don't build medical products. Our systems serve people who'd otherwise take an online course, read a book, or watch a lecture about your methodology. AI handles the guidance and structure. You stay focused on the work that actually requires your expertise.",
  },
  {
    question: "Do I own my content?",
    answer: "Yes, completely. Your methodology is your most valuable asset. Export anytime. No lock-in. We never use your content to train other models.",
  },
]

// --- Scroll Timeline Components ---
// --- Scroll Timeline Components ---
function ScrollTimelineItem({
  item,
  index,
  scrollProgress,
  total,
}: {
  item: typeof evolutionTimeline[number]
  index: number
  scrollProgress: MotionValue<number>
  total: number
}) {
  const Icon = item.icon
  const isWarning = item.style === "warning"
  const isAccent = item.style === "accent"
  const isAbove = index % 2 === 0

  const scale = useTransform(scrollProgress, (p) => {
    const center = p * (total - 1)
    const dist = Math.abs(index - center)
    // User requested "Expert AI" (last item) to be 2x bigger
    if (index === total - 1) {
      return Math.max(1.0, 2.5 - dist * 0.25)
    }
    return Math.max(0.75, 1.2 - dist * 0.1)
  })

  const itemOpacity = useTransform(scrollProgress, (p) => {
    const center = p * (total - 1)
    const dist = Math.abs(index - center)
    return Math.max(0.35, 1 - dist * 0.12)
  })

  // Theme: Neutral/Accent only. Rose is ONLY for keywords.
  const stemColor = isAccent ? "bg-accent" : "bg-border"
  const dotColor = isAccent
    ? "bg-accent shadow-[0_0_12px_rgba(168,85,247,0.4)]"
    : "bg-muted-foreground/40"

  const labelColor = isAccent ? "text-accent" : "text-foreground"
  const subLabelColor = isAccent ? "text-accent/70" : "text-muted-foreground"

  // Keyword highlighting logic for warning items
  const renderOutcome = () => {
    if (isWarning) {
      const keywords = ["Addiction", "Isolation", "Noise", "Mass advice", "No provenance"]
      let text = item.outcome
      // We'll split by keywords to visually highlight them
      // This is a simple regex approach
      const pattern = new RegExp(`(${keywords.join("|")})`, "g")
      const parts = text.split(pattern)

      return (
        <span>
          {parts.map((part, i) =>
            keywords.includes(part)
              ? <span key={i} className="text-rose-500 font-medium">{part}</span>
              : <span key={i}>{part}</span>
          )}
        </span>
      )
    }
    return item.outcome
  }

  const label = (
    <div className="text-center min-h-[85px] flex flex-col justify-center">
      <div className="flex items-center justify-center gap-1.5 mb-1.5">
        <Icon className={`w-4 h-4 ${subLabelColor}`} />
        <p className={`text-sm font-medium ${labelColor}`}>
          {item.era}
        </p>
      </div>
      <p className={`text-xs font-mono mb-2 ${subLabelColor}`}>
        {item.year}
      </p>
      <p className="text-[11px] text-muted-foreground leading-snug px-2">
        {renderOutcome()}
      </p>
    </div>
  )

  return (
    <motion.div
      className="relative flex flex-col items-center flex-shrink-0"
      style={{
        scale,
        opacity: itemOpacity,
        width: "280px",
      }}
    >
      {/* Label area - above or below */}
      {isAbove ? (
        <>
          <div className="mb-4">{label}</div>
          <div className={`w-0.5 h-10 rounded-full ${stemColor}`} />
        </>
      ) : (
        <>
          <div className="min-h-[85px]" />
          <div className="h-10" />
        </>
      )}

      {/* Node on the line */}
      <div className="relative my-1">
        {isAccent && (
          <div className="absolute inset-[-4px] rounded-full bg-accent/20 animate-ping" style={{ animationDuration: "3s" }} />
        )}
        <div className={`w-3 h-3 rounded-full relative z-10 ${dotColor}`} />
      </div>

      {/* Below stem + label */}
      {!isAbove ? (
        <>
          <div className={`w-0.5 h-10 rounded-full ${stemColor}`} />
          <div className="mt-4">{label}</div>
        </>
      ) : (
        <>
          <div className="h-10" />
          <div className="min-h-[85px]" />
        </>
      )}
    </motion.div>
  )
}

function ScrollTimeline({ items }: { items: typeof evolutionTimeline }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Start with some padding, end shifted enough to center last item
  // 8 items * 280px = 2240px width
  // To center last item (at ~2100px), we need to shift left by ~2100px depending on viewport.
  // Using percentage for responsiveness: mostly shifting the whole track left.
  const x = useTransform(scrollYProgress, [0.15, 0.9], ["calc(40vw - 140px)", "calc(40vw - 2100px)"])

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header - Pinned inside the timeline section */}
        <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              WHY
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2 italic">
              From Information to Presence:
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              The Evolution of Expertise
            </h2>
          </motion.div>
        </div>

        {/* Timeline Track */}
        <motion.div
          className="flex items-center gap-0 pl-[10vw]"
          style={{ x }}
        >
          {/* Horizontal line behind all items */}
          <div className="absolute left-0 right-0 h-px bg-border" style={{ top: "50%" }} />

          {items.map((item, i) => (
            <ScrollTimelineItem
              key={item.stage}
              item={item}
              index={i}
              scrollProgress={scrollYProgress}
              total={items.length}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeUseCase, setActiveUseCase] = useState(0)
  const [expandedFear, setExpandedFear] = useState<number | null>(0)

  return (
    <main className="relative min-h-screen w-full bg-background">
      <AnimatedNav />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden min-h-[80vh] flex items-center">
        <ShaderBackground className="absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-1 font-medium text-sm text-white/80 mb-6">
              <span className="relative">
                <span className="text-[#c084fc] animate-logo-pulse-sane-base">SANE</span>
                <span className="absolute inset-0 text-white animate-logo-pulse-sane-overlay">SANE</span>
              </span>
              <span className="text-[#c084fc]">/</span>
              <span className="relative">
                <span className="text-white animate-logo-pulse-rebels-base">REBELS</span>
                <span className="absolute inset-0 text-[#c084fc] animate-logo-pulse-rebels-overlay">REBELS</span>
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-4">
              Scale Your Impact.
            </h1>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white/80 italic leading-[1.1] mb-8">
              Stay Yourself.
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your methodology works. It just can't be in two rooms at once. We build the infrastructure that carries it further, so you can be fully present where it matters most.
            </p>

            <Link
              href="/lets"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 text-white font-medium rounded-md hover:bg-white/25 transition-all border border-white/30 backdrop-blur-sm"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Evolution Timeline - Scroll-Driven Dock Style */}
      <section className="bg-background">


        {/* Desktop: Scroll-driven horizontal timeline */}
        <div className="hidden lg:block">
          <ScrollTimeline items={evolutionTimeline} />
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative px-6 py-16">
          <div className="absolute left-10 top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-transparent via-border to-accent/30" />
          </div>
          <div className="space-y-4">
            {evolutionTimeline.map((item, i) => {
              const Icon = item.icon
              const isWarning = item.style === "warning"
              const isAccent = item.style === "accent"
              return (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-16"
                >
                  <div className={`absolute left-10 top-2 -translate-x-1/2 z-10 ${isWarning ? "w-3 h-3" : isAccent ? "w-4 h-4" : "w-2.5 h-2.5"}`}>
                    <div className={`w-full h-full rounded-full ${isWarning ? "bg-rose-500" :
                      isAccent ? "bg-accent" :
                        "bg-muted-foreground/30 border border-border"
                      }`} />
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isWarning ? "text-rose-500" :
                      isAccent ? "text-accent" :
                        "text-muted-foreground"
                      }`} />
                    <p className={`text-sm font-medium ${isWarning ? "text-rose-700" :
                      isAccent ? "text-accent" :
                        "text-foreground"
                      }`}>{item.era}</p>
                    <span className={`text-xs font-mono ml-auto ${isWarning ? "text-rose-500" :
                      isAccent ? "text-accent/60" :
                        "text-muted-foreground"
                      }`}>{item.year}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-7xl mx-auto px-6 pb-0 md:pb-0">
          {/* Tagline removed */}
        </div>
      </section>

      {/* Philosophy Section (Moved) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              Philosophy
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-8">
              "As answers become abundant, human presence becomes premium. Information is no longer the bottleneck. Connection, curation, and trust are."
            </blockquote>
            <p className="text-muted-foreground">
              We handle the repetition. You show up for the breakthroughs.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Use Cases Section with face images */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              Who We Work With
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              Built for people whose methods
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              actually change lives.
            </h2>
          </motion.div>

          {/* Use Case Tabs */}
          <div className="flex justify-center gap-10 mb-14">
            {useCases.map((useCase, i) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(i)}
                className={`text-sm transition-colors pb-2 ${activeUseCase === i
                  ? "text-accent border-b-2 border-accent font-bold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {useCase.label}
              </button>
            ))}
          </div>

          {/* Active Use Case Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden border border-border"
            >
              {/* Image Side - Purple gradient with face filling container */}
              <div className="relative aspect-[4/5] md:aspect-auto bg-gradient-to-br from-accent via-[#7c3aed] to-[#4c1d95] min-h-[400px] overflow-hidden">
                {/* Person image overlay - fills container */}
                <Image
                  src={useCases[activeUseCase].image}
                  alt={useCases[activeUseCase].label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
                />
              </div>

              {/* Content Side */}
              <div className="bg-card p-10 md:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {useCases[activeUseCase].headline}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {useCases[activeUseCase].subheadline}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {useCases[activeUseCase].description}
                </p>

                <div className="space-y-4 mb-10">
                  {useCases[activeUseCase].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border border-accent/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/lets"
                  className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
                >
                  SANE/REBELS for {useCases[activeUseCase].label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section >

      {/* Three Outcomes Section (Moved) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              What We Enable
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              What changes when your methods
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              reach further than your calendar.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Reach Without Limits",
                description: "Two things used to be mutually exclusive: reaching more people and going deeper with each one. We dare to challenge that. Your system handles the repetition. You show up for the breakthrough moments."
              },
              {
                title: "Scale Without Compromise",
                description: "Your methodology becomes a living resource. Accessible always, specifically tailored, endlessly patient. Your knowledge compounds. Your calendar stays yours."
              },
              {
                title: "Impact Without Dilution",
                description: "Your methodology reaches thousands. And those who decide to work with you offline? They come prepared. Sessions start deeper. Your presence means more, not less."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-accent/40 transition-colors"
              >
                <div className="w-10 h-0.5 bg-accent mb-6" />
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fears/Objections - Interactive Accordion */}
      < section className="py-24 md:py-40 bg-background" >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold text-accent mb-6 uppercase tracking-wider">
              Honest Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              You're wondering.
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground italic">
              Good.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {fears.map((fear, i) => {
              const isOpen = expandedFear === i
              return (
                <motion.div
                  key={fear.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group"
                >
                  <button
                    onClick={() => setExpandedFear(isOpen ? null : i)}
                    className="w-full text-left py-6 flex items-start gap-4 border-t border-white/[0.06] transition-colors hover:border-white/[0.12] cursor-pointer"
                  >
                    <span className="text-xs font-mono text-muted-foreground/40 pt-1 w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-lg md:text-xl text-foreground flex-1 leading-snug">
                      {fear.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen
                      ? "border-accent/40 bg-accent/10"
                      : "border-white/[0.08] group-hover:border-white/[0.15]"
                      }`}>
                      {isOpen
                        ? <Minus className="w-3.5 h-3.5 text-accent" />
                        : <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      }
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-10 pb-8 pr-12">
                          <div className="relative pl-5 border-l-2 border-accent/30">
                            <p className="text-muted-foreground leading-relaxed">
                              {fear.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
            {/* Bottom border for last item */}
            <div className="border-t border-white/[0.06]" />
          </div>
        </div>
      </section >


      {/* CTA Section */}
      < section className="py-24 md:py-32 bg-background" >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-[#7c3aed] to-[#4c1d95]" />
            <div className="relative z-10 p-14 md:p-20 text-center">
              <div className="inline-flex items-center gap-1 font-medium text-sm text-white/80 mb-6">
                <span className="relative">
                  <span className="text-[#c084fc] animate-logo-pulse-sane-base">SANE</span>
                  <span className="absolute inset-0 text-white animate-logo-pulse-sane-overlay">SANE</span>
                </span>
                <span className="text-[#c084fc]">/</span>
                <span className="relative">
                  <span className="text-white animate-logo-pulse-rebels-base">REBELS</span>
                  <span className="absolute inset-0 text-[#c084fc] animate-logo-pulse-rebels-overlay">REBELS</span>
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                Your expertise deserves to outlive your calendar.
              </h2>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white/80 italic mb-10">
                Let's build the system.
              </h2>

              <Link
                href="/lets"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-medium rounded-md hover:bg-white/95 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section >



      <AnimatedFooter />
    </main >
  )
}
