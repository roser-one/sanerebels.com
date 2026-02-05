import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "SANE/REBELS — Solve for presence."
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = "image/png"

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom right, #1e1b4b, #4c1d95)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "serif",
                }}
            >
                {/* S/R Logo Icon */}
                <div style={{ display: "flex", marginBottom: 20 }}>
                    <svg
                        width="256"
                        height="256"
                        viewBox="0 0 512 512"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="512" height="512" rx="64" fill="#0a0a0a" />
                        <text
                            x="256"
                            y="320"
                            font-family="sans-serif"
                            font-size="220"
                            font-weight="900"
                            text-anchor="middle"
                            letter-spacing="-15"
                        >
                            <tspan fill="#fafafa">S</tspan>
                            <tspan fill="#c084fc">/</tspan>
                            <tspan fill="#fafafa">R</tspan>
                        </text>
                    </svg>
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: 60,
                        color: "white",
                        fontWeight: "bold",
                        marginTop: 40,
                        letterSpacing: "-0.02em",
                        textAlign: "center",
                    }}
                >
                    Solve for presence.
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
