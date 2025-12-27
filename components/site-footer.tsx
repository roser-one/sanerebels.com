import Link from "next/link"

export function SiteFooter() {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4 text-xs font-mono text-foreground/40 uppercase tracking-wider">
                <Link href="/imprint" className="hover:text-accent transition-colors">
                    Imprint
                </Link>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                    Privacy
                </Link>
                <Link href="/terms" className="hover:text-accent transition-colors">
                    Terms
                </Link>
            </div>
            <p className="font-mono text-[10px] text-foreground/20">
                © {new Date().getFullYear()} SANE/REBELS
            </p>
        </div>
    )
}
