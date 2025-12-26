"use client"

import { GrainOverlay } from "@/components/grain-overlay"
import { GlassCard } from "@/components/glass-card"

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-4 md:p-6">
      <GrainOverlay />

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.25_295_/_0.4),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.60_0.20_30_/_0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Glass Card */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-3xl">
        <GlassCard />
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-10 text-center">
        <p className="font-mono text-xs text-foreground/30">
          © {new Date().getFullYear()} SANE/REBELS
        </p>
      </div>
    </main>
  )
}
