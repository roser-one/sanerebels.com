// @ts-nocheck
"use client"

import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { forwardRef } from "react"

export const ShaderBackground = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    return (
      <div ref={ref} className={className}>
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
      </div>
    )
  }
)

ShaderBackground.displayName = "ShaderBackground"
