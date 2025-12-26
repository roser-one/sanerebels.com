import { PageWrapper } from "@/components/page-wrapper"

export default function ImprintPage() {
  return (
    <PageWrapper title="Imprint">
      <div className="space-y-8">
        {/* Legal Information */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Legal Information</h2>
          <p className="text-foreground/80 mb-2">SANE REBELS is a brand of</p>
          <div className="text-foreground/80">
            <p className="font-semibold text-foreground">KNUS GmbH</p>
            <p>Geschäftsführer: Simon Roser</p>
            <p>Renkenweg 7</p>
            <p>78464 Konstanz</p>
            <p>Deutschland</p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-foreground/80">
            E-Mail:{" "}
            <a href="mailto:info@myknus.com" className="text-accent hover:underline">
              info@myknus.com
            </a>
          </p>
        </section>

        {/* Company Registration */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Company Registration</h2>
          <div className="text-foreground/80 space-y-1">
            <p>Umsatzsteuer-ID: DE344225955</p>
            <p>Handelsregisternummer: HRB 724642</p>
            <p>Eingetragen im Handelsregister des Amtsgerichts Freiburg i.Br.</p>
          </div>
        </section>

        {/* Responsible for Content */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Responsible for Content</h2>
          <div className="text-foreground/80">
            <p>Simon Roser</p>
            <p>Renkenweg 7</p>
            <p>78464 Konstanz</p>
            <p>Deutschland</p>
            <p className="mt-2">
              E-Mail:{" "}
              <a href="mailto:info@myknus.com" className="text-accent hover:underline">
                info@myknus.com
              </a>
            </p>
          </div>
        </section>

        {/* Alternative Dispute Resolution */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Alternative Dispute Resolution</h2>
          <div className="text-foreground/80 space-y-3">
            <p>Alternative Streitbeilegung gemäß Art. 14 (1) ODR-Verordnung und § 36 VSBG:</p>
            <p>
              Die Europäische Kommission stellt eine Plattform zur außergerichtlichen Online-Streitbeilegung (OS) bereit. Sie ist zu finden unter{" "}
              <a
                href="https://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/odr
              </a>
            </p>
            <p>
              Die Universalschlichtungsstelle des Bundes erreichen Sie unter:{" "}
              <a
                href="https://www.verbraucher-schlichter.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.verbraucher-schlichter.de/
              </a>
            </p>
            <p>Wir sind nicht verpflichtet oder bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
