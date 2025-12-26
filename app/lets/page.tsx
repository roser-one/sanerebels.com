"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { PageWrapper } from "@/components/page-wrapper"

export default function LetsPage() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "sanerebels" })
            cal("ui", {
                theme: "dark",
                hideEventTypeDetails: false,
                layout: "month_view",
            })
        })()
    }, [])

    const openCalPopup = () => {
        (async function () {
            const cal = await getCalApi({ namespace: "sanerebels" })
            cal("modal", {
                calLink: "sroser/knus-intro",
                config: { layout: "month_view", theme: "dark" },
            })
        })()
    }

    return (
        <PageWrapper title="Let's">
            <p className="text-xl text-foreground">
                Build something that scales. Get back to being <span className="text-accent">human</span>.
            </p>

            <div className="mt-8">
                <button
                    onClick={openCalPopup}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                    Start the Conversation
                </button>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Direct Contact</h2>
            <div className="space-y-3">
                <p>
                    Email:{" "}
                    <a href="mailto:hi@sanerebels.com" className="text-accent hover:underline">
                        hi@sanerebels.com
                    </a>
                </p>
                <p>
                    LinkedIn:{" "}
                    <a
                        href="https://linkedin.com/in/simonroser"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                    >
                        linkedin.com/in/simonroser
                    </a>
                </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Already Productized?</h2>
            <p className="text-foreground/70">
                Looking for scale instead?{" "}
                <a
                    href="https://roser-growth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                >
                    roser-growth.com →
                </a>
            </p>
        </PageWrapper>
    )
}
