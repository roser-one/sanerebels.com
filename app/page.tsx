"use client"

import { useState, useEffect, useRef } from "react"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { GrainOverlay } from "@/components/grain-overlay"
import { GlassCard } from "@/components/glass-card"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)

  // Check when shader is ready
  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const interval = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(interval)
      }
    }, 100)

    // Fallback: show after 2 seconds regardless
    const timeout = setTimeout(() => {
      setIsLoaded(true)
      clearInterval(interval)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-4 md:p-6">
      <GrainOverlay />

      {/* Shader Background */}
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#9333ea"
            colorB="#c2410c"
            speed={0.5}
            detail={0.8}
            blend={40}
            coarseX={30}
            coarseY={30}
            mediumX={30}
            mediumY={30}
            fineX={30}
            fineY={30}
          />
          <ChromaFlow
            baseColor="#1e1b4b"
            upColor="#7c3aed"
            downColor="#ea580c"
            leftColor="#4c1d95"
            rightColor="#c2410c"
            intensity={0.7}
            radius={1.8}
            momentum={18}
            maskType="alpha"
            opacity={0.85}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Centered Glass Card */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-3xl">
        <GlassCard />
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-10 text-center">
        <SiteFooter />
      </div>
    </main>
  )
}
