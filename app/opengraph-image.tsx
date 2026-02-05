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
                {/* S/R Logo Container - Recreated with pure CSS/Divs for stability */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "256px",
                        height: "256px",
                        background: "#0a0a0a",
                        borderRadius: "32px",
                        marginBottom: "20px",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                    }}
                >
                    {/* Logo Text "S/R" */}
                    <div
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "120px", // Adjusted for 256px container
                            fontWeight: 900,
                            color: "#fafafa",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "-8px",
                        }}
                    >
                        S<span style={{ color: "#c084fc", margin: "0 4px" }}>/</span>R
                    </div>
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
                        textShadow: "0 2px 10px rgba(0,0,0,0.3)",
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
