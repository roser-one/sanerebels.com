"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"

export default function TermsPage() {
  const [language, setLanguage] = useState<"en" | "de">("en")

  return (
    <PageWrapper title="Terms &amp; Conditions">
      {/* Language Toggle */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded-lg transition-colors ${language === "en"
            ? "bg-accent text-background font-semibold"
            : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20"
            }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("de")}
          className={`px-4 py-2 rounded-lg transition-colors ${language === "de"
            ? "bg-accent text-background font-semibold"
            : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20"
            }`}
        >
          Deutsch
        </button>
      </div>

      {language === "en" ? <EnglishTerms /> : <GermanTerms />}
    </PageWrapper>
  )
}

function EnglishTerms() {
  return (
    <div className="space-y-8">
      <p className="text-amber-400 bg-amber-400/10 px-4 py-3 rounded-lg text-sm">
        ⚠️ Automatic translation - no guarantee for correctness. The German version is legally binding.
      </p>

      {/* § 1 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 1 Scope and Contracting Parties</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">1.1 Contracting Parties</h3>
        <p className="text-foreground/80 mb-4">
          These General Terms and Conditions (GTC) govern the contractual relationship between KNUS GmbH, operating under the brands SANE REBELS and ROSER &amp; REBELS (hereinafter &quot;Contractor&quot; or &quot;we&quot;), and the Client (hereinafter &quot;Client&quot; or &quot;you&quot;). They apply to all services including, but not limited to, strategic consulting, custom software development, process automation, and digital agency services (Performance Marketing).
        </p>
        <div className="text-foreground/80 mb-4">
          <p className="font-semibold text-foreground">Contractor Information:</p>
          <p>KNUS GmbH</p>
          <p>Managing Director: Simon Roser</p>
          <p>Renkenweg 7, 78464 Konstanz, Germany</p>
          <p>Email: hi@sanerebels.com</p>
          <p>Commercial Register: Freiburg i. Br. District Court, HRB 724642</p>
          <p>VAT ID: DE344225955</p>
        </div>

        <h3 className="font-semibold text-foreground mt-4 mb-2">1.2 Scope</h3>
        <p className="text-foreground/80">
          These GTC apply exclusively to business customers (B2B). Conflicting or deviating terms of the Client do not apply unless the Contractor has expressly agreed to them in writing.
        </p>
      </section>

      {/* § 2 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 2 Services and Contract Type</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.1 Scope of Services</h3>
        <p className="text-foreground/80 mb-2">
          The Contractor offers a hybrid portfolio of services designed to build the &quot;exoskeleton&quot; for the Client&apos;s business. This includes:
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1 mb-4">
          <li><strong>Consulting:</strong> Strategic consulting (e.g., &quot;The Naked Strategy Session&quot;, &quot;The Sanity Audit&quot;).</li>
          <li><strong>Technology &amp; Automation:</strong> Development of custom software, automation workflows (e.g., n8n blueprints), and provision of proprietary tools.</li>
          <li><strong>Agency Services:</strong> Management of advertising campaigns (Google Ads, Bing Ads, Meta) and creative direction.</li>
        </ul>
        <p className="text-foreground/80">
          The specific scope is defined in the individual contract, Statement of Work (SOW), or accepted offer.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.2 Legal Classification</h3>
        <p className="text-foreground/80 mb-2">
          Unless expressly stated otherwise in the SOW, services are classified under German law as follows:
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li><strong>Consulting &amp; Agency Services (Service Contract):</strong> Services such as strategy sessions, audits, and ongoing advertising account management are provided as service contracts. We owe careful performance according to best practices, not a specific economic result (e.g., specific ROAS or revenue targets).</li>
          <li><strong>Software Development (Work Contract):</strong> The custom development of specific, finished software applications or codebases is provided as a work contract. Success is defined as delivery of functional software according to technical specifications.</li>
        </ul>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.3 Artificial Intelligence (AI) and Automation</h3>
        <p className="text-foreground/80 mb-2">
          The Client acknowledges that the Contractor uses advanced AI tools (e.g., LLMs, Generative AI) and automation platforms to deliver services efficiently.
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li><strong>No Guarantee of Uniqueness for AI Content:</strong> The Client understands that purely AI-generated elements (e.g., raw texts or images generated by Midjourney/Gemini) may not be copyright protected under applicable law and are provided &quot;as is&quot;.</li>
          <li><strong>Human Review:</strong> Although we act as &quot;adult supervision&quot; for AI outputs, the Client is responsible for final legal compliance review of all published content.</li>
        </ul>
      </section>

      {/* § 3 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 3 Contract Formation and Duration</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">3.1 Contract Formation</h3>
        <p className="text-foreground/80">
          Contracts are formed through written agreement (email is sufficient) or by acceptance of a written offer/SOW by the Client.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">3.2 Duration and Termination</h3>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li><strong>One-time Projects:</strong> End upon completion of the agreed service.</li>
          <li><strong>Retainer/Ongoing Engagements:</strong> Unless otherwise agreed, ongoing contracts run for an indefinite period and may be terminated by either party with 30 days&apos; notice to the end of the month.</li>
          <li><strong>Fixed-term Contracts:</strong> Contracts with a fixed term (e.g., 3-month sprints) cannot be terminated early except for important reasons.</li>
        </ul>
      </section>

      {/* § 4 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 4 Remuneration and Payment</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.1 Remuneration</h3>
        <p className="text-foreground/80">
          All remuneration is net prices plus the statutory value-added tax (VAT) applicable at the time of invoicing.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.2 Payment Terms</h3>
        <p className="text-foreground/80">
          Invoices are due for payment within 14 days of the invoice date without deduction.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.3 Payment Default</h3>
        <p className="text-foreground/80">
          In case of default, the Contractor reserves the right to charge statutory default interest and to suspend all services (including pausing advertising campaigns or restricting access to software dashboards) until payment is received in full.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.4 Reactivation Fee</h3>
        <p className="text-foreground/80">
          After a service suspension pursuant to § 4.3, a one-time reactivation fee will be charged for resuming services. This fee is calculated based on hourly effort. This fee covers the administrative and operational effort to restore service readiness and is payable in addition to all outstanding amounts.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.5 Alternative Remuneration Models</h3>
        <p className="text-foreground/80 mb-2">
          In addition to regular remuneration models, the Contractor and Client may agree on alternative remuneration structures, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li>(a) Profit sharing based on defined KPIs or revenue increases</li>
          <li>(b) Equity or token-based remuneration</li>
          <li>(c) Hybrid models combining retainer and performance-based components</li>
        </ul>
        <p className="text-foreground/80 mt-2">
          Such alternative remuneration models require a separate written agreement (Side Letter) that regulates the specific conditions, calculation bases, payment modalities, and durations. In case of conflict, the provisions of the Side Letter take precedence over these GTC.
        </p>
      </section>

      {/* § 5 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 5 Change Requests and Scope Management</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">5.1 Change Requests</h3>
        <p className="text-foreground/80">
          If the Client wishes to change the agreed scope of services, these must be submitted in writing as a change request. The Contractor will evaluate the impact on schedule and costs within five (5) business days and submit a corresponding change offer.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">5.2 Scope Delimitation</h3>
        <p className="text-foreground/80">
          The scope of services defined in the SOW is binding. Services not expressly listed in the SOW are considered outside the scope (Out-of-Scope) and will be billed separately based on effort according to the agreed hourly rate or a separate offer.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">5.3 Approval Procedure</h3>
        <p className="text-foreground/80">
          Additional effort outside the agreed scope of services will only be provided and billed after prior written approval by the Client. Written approval also includes confirmation by email or through an agreed project management tool.
        </p>
      </section>

      {/* § 6 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 6 Client Cooperation Obligations</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">6.1 Cooperation and Access</h3>
        <p className="text-foreground/80">
          The Client must provide all necessary information, assets, and access credentials (e.g., Google Ads ID, API keys) required for the provision of services. Delays due to missing information on the part of the Client extend delivery deadlines accordingly.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">6.2 Third-Party Costs</h3>
        <p className="text-foreground/80">
          The Client is directly responsible for all third-party media costs (e.g., advertising expenses paid directly to Google/Meta) and third-party software licenses required for their specific infrastructure (e.g., their own Shopify or CRM subscription), unless these are expressly included in the Contractor&apos;s remuneration.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">6.3 Implementation</h3>
        <p className="text-foreground/80">
          For consulting services, implementation of recommendations remains the sole responsibility of the Client, unless the Contractor is separately commissioned to carry out the implementation.
        </p>
      </section>

      {/* § 7 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 7 Acceptance (Work Contracts)</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">7.1 Acceptance Procedure</h3>
        <p className="text-foreground/80">
          For services classified as work contracts (§ 2.2), the following acceptance procedure applies: After completion of the work, the Contractor makes it available to the Client for acceptance. The Client must inspect the work within fourteen (14) business days and report any defects in writing.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">7.2 Fictional Acceptance</h3>
        <p className="text-foreground/80">
          The work is deemed accepted if the Client (a) expressly declares acceptance, (b) has not reported any defects after the inspection period has expired, or (c) uses the work productively. Use in a production environment constitutes implied acceptance.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">7.3 Partial Acceptance</h3>
        <p className="text-foreground/80">
          For extensive projects, partial acceptances for defined milestones or modules may be agreed. Each partial acceptance counts as an independent acceptance for the respective service part.
        </p>
      </section>

      {/* § 8 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 8 Confidentiality</h2>
        <p className="text-foreground/80">
          Both parties undertake to treat all business secrets and confidential information obtained during the collaboration as strictly confidential. This obligation continues for a period of three (3) years after termination of the contract.
        </p>
      </section>

      {/* § 9 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 9 Intellectual Property</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">9.1 Data and Pre-existing IP of the Client</h3>
        <p className="text-foreground/80">
          The Client retains full ownership of their raw data, brand assets, and direct accounts (e.g., the history of the Google Ads account).
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">9.2 &quot;Background IP&quot; of the Contractor</h3>
        <p className="text-foreground/80 mb-2">
          The Contractor retains exclusive ownership of all methods, frameworks, code libraries, automation blueprints (e.g., n8n workflows), and proprietary software tools that were developed generally by the Contractor or used to provide the services (&quot;Background IP&quot;).
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li><strong>License Grant:</strong> Upon full payment of all remuneration and without outstanding claims, the Client receives a perpetual, non-exclusive, non-transferable license to use the Background IP specifically integrated into their systems for their own internal business purposes.</li>
          <li><strong>License Condition:</strong> The license is subject to the suspensive condition of full fulfillment of all payment obligations. In case of payment default of more than 30 days, the license is suspended until all claims are fully settled.</li>
          <li><strong>Restriction:</strong> The Client may not resell, white-label, or sublicense the Contractor&apos;s code, blueprints, or infrastructure to third parties.</li>
        </ul>

        <h3 className="font-semibold text-foreground mt-4 mb-2">9.3 Work Results (Specific Deliverables)</h3>
        <p className="text-foreground/80 mb-2">
          Upon full payment, the Contractor transfers to the Client the non-exclusive, non-transferable rights to use specific creative assets created uniquely for the Client (e.g., specific advertising texts, specific graphic designs), subject to the restrictions for AI-generated content (see § 2.3).
        </p>
        <p className="text-foreground/80">
          <strong>Portfolio Reservation:</strong> The Contractor reserves the right to use all created work results for its own marketing and portfolio purposes, unless a written confidentiality agreement prevents this.
        </p>
      </section>

      {/* § 10 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 10 Liability and Warranty</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">10.1 General Limitation of Liability</h3>
        <p className="text-foreground/80">
          The Contractor is liable for damages - regardless of legal grounds - only in cases of intent and gross negligence. In cases of slight negligence, liability is limited to the breach of essential contractual obligations (cardinal obligations) and capped at the total remuneration paid by the Client in the twelve (12) months preceding the event giving rise to liability.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">10.2 Software Defects (Warranty)</h3>
        <p className="text-foreground/80">
          For services classified as work contracts (software development), the statutory warranty period for defects is limited to twelve (12) months from acceptance.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">10.3 Beta and Pilot Software</h3>
        <p className="text-foreground/80 mb-2">
          If the Contractor grants access to software or tools expressly marked as &quot;Beta&quot;, &quot;Alpha&quot;, &quot;Pilot&quot;, or &quot;Tech Demo&quot;:
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li>(a) These are provided &quot;as is&quot; without warranty for uninterrupted functionality.</li>
          <li>(b) Liability for data loss or operational errors resulting from the use of beta software is excluded, except in cases of intent.</li>
        </ul>

        <h3 className="font-semibold text-foreground mt-4 mb-2">10.4 Exclusions</h3>
        <p className="text-foreground/80 mb-2">The Contractor is not liable for:</p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li>(a) Account suspensions or restrictions by third-party platforms (Google, Meta) due to the Client&apos;s business model or landing page content.</li>
          <li>(b) Lost profit or lost savings.</li>
          <li>(c) Legal violations in advertising materials approved by the Client.</li>
        </ul>
      </section>

      {/* § 11 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 11 Force Majeure</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">11.1 Definition</h3>
        <p className="text-foreground/80">
          No party is liable for non-performance or delayed performance of its obligations to the extent that such non-performance is based on circumstances beyond its reasonable control, including but not limited to: natural disasters, pandemics, epidemics, war, terrorism, riots, embargo, acts of civil or military authorities, fire, floods, accidents, strikes, lockouts, or failure of communication or energy supply systems.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">11.2 Obligations in Case of Force Majeure</h3>
        <p className="text-foreground/80">
          The affected party must immediately inform the other party about the occurrence and expected duration of the force majeure event and make all reasonable efforts to minimize the effects. If the force majeure event lasts longer than ninety (90) days, either party may terminate the affected contract with immediate effect.
        </p>
      </section>

      {/* § 12 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 12 Contract Termination and Data Transfer</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">12.1 Proper Termination</h3>
        <p className="text-foreground/80">
          Upon proper termination of the contractual relationship, the Contractor will transfer to the Client within fourteen (14) business days all data, documentation, and assets owned by the Client in a common, machine-readable format.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">12.2 Access Revocation</h3>
        <p className="text-foreground/80">
          After termination of the contractual relationship, all Client access to dashboards, software tools, and internal systems of the Contractor will be deactivated within seven (7) business days. The Client is obliged to delete all access credentials provided to them for the Contractor&apos;s systems.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">12.3 Data Deletion</h3>
        <p className="text-foreground/80">
          The Contractor will delete personal data of the Client in accordance with GDPR requirements, unless legal retention obligations exist. Upon request, the Contractor will issue a deletion confirmation.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">12.4 Transition Support</h3>
        <p className="text-foreground/80">
          Upon request and against separate remuneration based on effort, the Contractor supports the Client in the handover to a successor service provider (Transition Services).
        </p>
      </section>

      {/* § 13 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 13 Data Protection</h2>
        <p className="text-foreground/80">
          Both parties undertake to comply with the provisions of the GDPR or the applicable data protection regulations in the Client&apos;s legal system. The Contractor processes personal data solely for the purpose of contract fulfillment. Further details are regulated in the privacy policy at{" "}
          <a href="/privacy" className="text-accent hover:underline">sanerebels.com/privacy</a>.
        </p>
      </section>

      {/* § 14 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 14 Final Provisions</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">14.1 Applicable Law and Jurisdiction</h3>
        <p className="text-foreground/80">
          These GTC and all contractual relationships arising therefrom are governed by the laws of the Federal Republic of Germany. The exclusive place of jurisdiction for all disputes is Berlin, Germany.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">14.2 Alternative Dispute Resolution</h3>
        <p className="text-foreground/80">
          The European Commission provides a platform for online dispute resolution (ODR):{" "}
          <a
            href="https://ec.europa.eu/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            https://ec.europa.eu/odr
          </a>. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">14.3 Severability Clause</h3>
        <p className="text-foreground/80">
          Should any provision of these GTC be or become invalid or unenforceable, this does not affect the validity of the remaining provisions. Instead of the invalid provision, a valid provision is deemed agreed that comes closest to the economic purpose of the invalid provision.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">14.4 Written Form</h3>
        <p className="text-foreground/80">
          Amendments and supplements to these GTC require written form. This also applies to the waiver of this written form requirement. Electronic form (email) satisfies the written form requirement.
        </p>
      </section>

      {/* § 15 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 15 Contact</h2>
        <p className="text-foreground/80 mb-4">
          For questions regarding these General Terms and Conditions, please contact:
        </p>
        <div className="text-foreground/80">
          <p className="font-semibold text-foreground">KNUS GmbH</p>
          <p>Simon Roser</p>
          <p>
            Email:{" "}
            <a href="mailto:hi@sanerebels.com" className="text-accent hover:underline">
              hi@sanerebels.com
            </a>
          </p>
        </div>
        <p className="text-foreground/60 mt-6 text-sm">Last updated: December 2024</p>
      </section>
    </div>
  )
}

function GermanTerms() {
  return (
    <div className="space-y-8">
      {/* § 1 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 1 Geltungsbereich und Vertragsparteien</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">1.1 Vertragsparteien</h3>
        <p className="text-foreground/80 mb-4">
          Diese Allgemeinen Geschäftsbedingungen (AGB) regeln das Vertragsverhältnis zwischen der KNUS GmbH, handelnd unter den Marken SANE REBELS und ROSER & REBELS (nachfolgend „Auftragnehmer“ oder „wir“), und dem Auftraggeber (nachfolgend „Auftraggeber“ oder „Sie“). Sie gelten für sämtliche Leistungen einschließlich, aber nicht beschränkt auf, strategische Beratung, maßgeschneiderte Softwareentwicklung, Prozessautomatisierung und digitale Agenturdienstleistungen (Performance Marketing).
        </p>
        <div className="text-foreground/80 mb-4">
          <p className="font-semibold text-foreground">Angaben zum Auftragnehmer:</p>
          <p>KNUS GmbH</p>
          <p>Geschäftsführer: Simon Roser</p>
          <p>Renkenweg 7, 78464 Konstanz, Deutschland</p>
          <p>E-Mail: hi@sanerebels.com</p>
          <p>Handelsregister: Amtsgericht Freiburg i. Br., HRB 724642</p>
          <p>USt-IdNr.: DE344225955</p>
        </div>

        <h3 className="font-semibold text-foreground mt-4 mb-2">1.2 Geltungsbereich</h3>
        <p className="text-foreground/80">
          Diese AGB gelten ausschließlich für Geschäftskunden (B2B). Entgegenstehende oder abweichende Bedingungen des Auftraggebers finden keine Anwendung, es sei denn, der Auftragnehmer hat diesen ausdrücklich schriftlich zugestimmt.
        </p>
      </section>

      {/* § 2 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 2 Leistungen und Vertragsart</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.1 Leistungsumfang</h3>
        <p className="text-foreground/80 mb-2">
          Der Auftragnehmer bietet ein hybrides Portfolio von Dienstleistungen an, das darauf ausgelegt ist, das „Exoskelett“ für das Geschäft des Auftraggebers zu bauen. Dies umfasst:
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1 mb-4">
          <li><strong>Beratung:</strong> Strategische Beratung (z.B. „The Naked Strategy Session“, „The Sanity Audit“).</li>
          <li><strong>Technologie & Automatisierung:</strong> Entwicklung maßgeschneiderter Software, Automatisierungs-Workflows (z.B. n8n-Blueprints) und Bereitstellung proprietärer Tools.</li>
          <li><strong>Agenturdienstleistungen:</strong> Verwaltung von Werbekampagnen (Google Ads, Bing Ads, Meta) und kreative Leitung.</li>
        </ul>
        <p className="text-foreground/80">
          Der konkrete Umfang wird im Einzelvertrag, Statement of Work (SOW) oder angenommenen Angebot definiert.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.2 Rechtliche Einordnung</h3>
        <p className="text-foreground/80 mb-2">
          Sofern in der SOW nicht ausdrücklich anders angegeben, werden die Leistungen nach deutschem Recht wie folgt eingeordnet:
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li><strong>Beratungs- & Agenturdienstleistungen (Dienstvertrag):</strong> Leistungen wie Strategiesitzungen, Audits und laufende Werbekontoverwaltung werden als Dienstverträge erbracht. Wir schulden die sorgfältige Erbringung der Leistung nach Best Practices, nicht einen bestimmten wirtschaftlichen Erfolg (z.B. bestimmte ROAS- oder Umsatzziele).</li>
          <li><strong>Softwareentwicklung (Werkvertrag):</strong> Die maßgeschneiderte Entwicklung spezifischer, fertiger Softwareanwendungen oder Codebasen wird als Werkvertrag erbracht. Der Erfolg ist als Lieferung funktionsfähiger Software gemäß den technischen Spezifikationen definiert.</li>
        </ul>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.3 Künstliche Intelligenz (KI) und Automatisierung</h3>
        <p className="text-foreground/80 mb-2">
          Der Auftraggeber erkennt an, dass der Auftragnehmer fortschrittliche KI-Tools (z.B. LLMs, Generative KI) und Automatisierungsplattformen einsetzt, um Dienstleistungen effizient zu erbringen.
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li><strong>Keine Garantie der Einzigartigkeit für KI-Inhalte:</strong> Der Auftraggeber versteht, dass rein KI-generierte Elemente (z.B. Rohtexte oder von Midjourney/Gemini generierte Bilder) nach geltender Gesetzgebung möglicherweise nicht urheberrechtlich geschützt sind und „wie besehen“ bereitgestellt werden.</li>
          <li><strong>Menschliche Überprüfung:</strong> Obwohl wir als „Erwachsenenaufsicht“ für KI-Outputs fungieren, ist der Auftraggeber für die abschließende rechtliche Compliance-Prüfung aller veröffentlichten Inhalte verantwortlich.</li>
        </ul>
      </section>

      {/* § 3 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 3 Vertragsschluss und Laufzeit</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">3.1 Vertragsschluss</h3>
        <p className="text-foreground/80">
          Verträge kommen durch schriftliche Vereinbarung (E-Mail ist ausreichend) oder durch Annahme eines schriftlichen Angebots/SOW durch den Auftraggeber zustande.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">3.2 Laufzeit und Kündigung</h3>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li><strong>Einmalige Projekte:</strong> Enden mit Abschluss der vereinbarten Leistung.</li>
          <li><strong>Retainer/Laufende Engagements:</strong> Sofern nicht anders vereinbart, laufen laufende Verträge auf unbestimmte Zeit und können von beiden Parteien mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.</li>
          <li><strong>Befristete Verträge:</strong> Verträge mit fester Laufzeit (z.B. 3-Monats-Sprints) können nicht vorzeitig gekündigt werden, außer aus wichtigem Grund.</li>
        </ul>
      </section>

      {/* § 4 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 4 Vergütung und Zahlung</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.1 Vergütung</h3>
        <p className="text-foreground/80">
          Alle Vergütungen sind Nettopreise zuzüglich der zum Zeitpunkt der Rechnungsstellung geltenden gesetzlichen Mehrwertsteuer (MwSt.).
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.2 Zahlungsbedingungen</h3>
        <p className="text-foreground/80">
          Rechnungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.3 Zahlungsverzug</h3>
        <p className="text-foreground/80">
          Im Falle des Verzugs behält sich der Auftragnehmer das Recht vor, gesetzliche Verzugszinsen zu berechnen und alle Leistungen (einschließlich des Pausierens von Werbekampagnen oder der Einschränkung des Zugangs zu Software-Dashboards) auszusetzen, bis die Zahlung vollständig eingegangen ist.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.4 Reaktivierungsgebühr</h3>
        <p className="text-foreground/80">
          Nach einer Leistungsaussetzung gemäß § 4.3 wird für die Wiederaufnahme der Leistungen eine einmalige Reaktivierungsgebühr erhoben. Diese wird nach dem Stundenaufwand berechnet. Diese Gebühr deckt den administrativen und operativen Aufwand für die Wiederherstellung der Leistungsbereitschaft ab und ist zusätzlich zu allen ausstehenden Beträgen zu entrichten.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.5 Alternative Vergütungsmodelle</h3>
        <p className="text-foreground/80 mb-2">
          Neben den regulären Vergütungsmodellen können Auftragnehmer und Auftraggeber alternative Vergütungsstrukturen vereinbaren, einschließlich, aber nicht beschränkt auf:
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li>(a) Erfolgsbeteiligungen (Profit Share) basierend auf definierten KPIs oder Umsatzsteigerungen</li>
          <li>(b) Equity- oder Token-basierte Vergütungen</li>
          <li>(c) Hybride Modelle aus Retainer und erfolgsabhängiger Komponente</li>
        </ul>
        <p className="text-foreground/80 mt-2">
          Solche alternativen Vergütungsmodelle bedürfen einer gesonderten schriftlichen Vereinbarung (Side Letter), die die spezifischen Konditionen, Berechnungsgrundlagen, Auszahlungsmodalitäten und Laufzeiten regelt. Im Konfliktfall haben die Bestimmungen des Side Letters Vorrang vor diesen AGB.
        </p>
      </section>

      {/* § 5 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 5 Änderungsanträge und Scope-Management</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">5.1 Änderungsanträge (Change Requests)</h3>
        <p className="text-foreground/80">
          Wünscht der Auftraggeber Änderungen am vereinbarten Leistungsumfang, so sind diese schriftlich als Änderungsantrag (Change Request) einzureichen. Der Auftragnehmer wird innerhalb von fünf (5) Werktagen die Auswirkungen auf Zeitplan und Kosten bewerten und ein entsprechendes Änderungsangebot unterbreiten.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">5.2 Scope-Abgrenzung</h3>
        <p className="text-foreground/80">
          Der in der SOW definierte Leistungsumfang ist verbindlich. Leistungen, die nicht ausdrücklich in der SOW aufgeführt sind, gelten als außerhalb des Leistungsumfangs (Out-of-Scope) und werden gesondert nach Aufwand gemäß dem vereinbarten Stundensatz oder einem separaten Angebot berechnet.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">5.3 Freigabeverfahren</h3>
        <p className="text-foreground/80">
          Mehraufwand außerhalb des vereinbarten Leistungsumfangs wird nur nach vorheriger schriftlicher Freigabe durch den Auftraggeber erbracht und berechnet. Als schriftliche Freigabe gilt auch die Bestätigung per E-Mail oder über ein vereinbartes Projektmanagement-Tool.
        </p>
      </section>

      {/* § 6 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 6 Mitwirkungspflichten des Auftraggebers</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">6.1 Kooperation und Zugang</h3>
        <p className="text-foreground/80">
          Der Auftraggeber muss alle notwendigen Informationen, Assets und Zugangsdaten (z.B. Google Ads ID, API-Keys) bereitstellen, die zur Erbringung der Leistungen erforderlich sind. Verzögerungen durch fehlende Informationen seitens des Auftraggebers verlängern die Lieferfristen entsprechend.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">6.2 Kosten Dritter</h3>
        <p className="text-foreground/80">
          Der Auftraggeber ist direkt verantwortlich für alle Medienkosten Dritter (z.B. Werbeausgaben, die direkt an Google/Meta gezahlt werden) und Softwarelizenzen Dritter, die für seine spezifische Infrastruktur erforderlich sind (z.B. sein eigenes Shopify- oder CRM-Abonnement), sofern diese nicht ausdrücklich in der Vergütung des Auftragnehmers enthalten sind.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">6.3 Umsetzung</h3>
        <p className="text-foreground/80">
          Bei Beratungsleistungen bleibt die Umsetzung der Empfehlungen in alleiniger Verantwortung des Auftraggebers, sofern der Auftragnehmer nicht separat mit der Durchführung beauftragt wird.
        </p>
      </section>

      {/* § 7 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 7 Abnahme (Werkverträge)</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">7.1 Abnahmeverfahren</h3>
        <p className="text-foreground/80">
          Für Leistungen, die als Werkvertrag (§ 2.2) eingeordnet werden, gilt folgendes Abnahmeverfahren: Nach Fertigstellung des Werks stellt der Auftragnehmer dieses dem Auftraggeber zur Abnahme bereit. Der Auftraggeber hat das Werk innerhalb von vierzehn (14) Werktagen zu prüfen und etwaige Mängel schriftlich zu rügen.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">7.2 Fiktion der Abnahme</h3>
        <p className="text-foreground/80">
          Das Werk gilt als abgenommen, wenn der Auftraggeber (a) die Abnahme ausdrücklich erklärt, (b) nach Ablauf der Prüffrist keine Mängel gerügt hat, oder (c) das Werk produktiv nutzt. Die Nutzung in einer Produktivumgebung gilt als konkludente Abnahme.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">7.3 Teilabnahmen</h3>
        <p className="text-foreground/80">
          Bei umfangreichen Projekten können Teilabnahmen für definierte Meilensteine oder Module vereinbart werden. Jede Teilabnahme gilt als eigenständige Abnahme für den jeweiligen Leistungsteil.
        </p>
      </section>

      {/* § 8 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 8 Vertraulichkeit</h2>
        <p className="text-foreground/80">
          Beide Parteien verpflichten sich, alle Geschäftsgeheimnisse und vertraulichen Informationen, die während der Zusammenarbeit erlangt wurden, streng vertraulich zu behandeln. Diese Verpflichtung besteht für einen Zeitraum von drei (3) Jahren nach Beendigung des Vertrages fort.
        </p>
      </section>

      {/* § 9 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 9 Geistiges Eigentum</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">9.1 Daten und vorbestehendes IP des Auftraggebers</h3>
        <p className="text-foreground/80">
          Der Auftraggeber behält das volle Eigentum an seinen Rohdaten, Marken-Assets und direkten Konten (z.B. der Verlauf des Google Ads-Kontos).
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">9.2 „Background IP“ des Auftragnehmers</h3>
        <p className="text-foreground/80 mb-2">
          Der Auftragnehmer behält das ausschließliche Eigentum an allen Methoden, Frameworks, Code-Bibliotheken, Automatisierungs-Blueprints (z.B. n8n-Workflows) und proprietären Software Tools, die vom Auftragnehmer allgemein entwickelt wurden oder zur Erbringung der Leistungen verwendet werden („Background IP“).
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li><strong>Lizenzerteilung:</strong> Bei vollständiger Zahlung aller Vergütungen und ohne ausstehende Forderungen erhält der Auftraggeber eine zeitlich unbefristete, nicht-exklusive, nicht übertragbare Lizenz zur Nutzung der spezifisch in seine Systeme integrierten Background IP für eigene interne Geschäftszwecke.</li>
          <li><strong>Lizenzbedingung:</strong> Die Lizenz steht unter der aufschiebenden Bedingung der vollständigen Erfüllung aller Zahlungsverpflichtungen. Bei Zahlungsverzug von mehr als 30 Tagen ruht die Lizenz bis zum vollständigen Ausgleich aller Forderungen.</li>
          <li><strong>Einschränkung:</strong> Der Auftraggeber darf den Code, die Blueprints oder die Infrastruktur des Auftragnehmers nicht weiterverkaufen, White-Labeln oder an Dritte unterlizenzieren.</li>
        </ul>

        <h3 className="font-semibold text-foreground mt-4 mb-2">9.3 Arbeitsergebnisse (Spezifische Liefergegenstände)</h3>
        <p className="text-foreground/80 mb-2">
          Bei vollständiger Zahlung überträgt der Auftragnehmer dem Auftraggeber die nicht-exklusiven, nicht übertragbaren Rechte zur Nutzung spezifischer kreativer Assets, die einzigartig für den Auftraggeber erstellt wurden (z.B. spezifische Werbetexte, spezifische Grafikdesigns), vorbehaltlich der Einschränkungen bei KI-generierten Inhalten (siehe § 2.3).
        </p>
        <p className="text-foreground/80">
          <strong>Portfolio-Vorbehalt:</strong> Der Auftragnehmer behält sich das Recht vor, alle erstellten Arbeitsergebnisse für eigene Marketing- und Portfoliozwecke zu verwenden, sofern keine schriftliche Vertraulichkeitsvereinbarung dem entgegensteht.
        </p>
      </section>

      {/* § 10 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 10 Haftung und Gewährleistung</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">10.1 Allgemeine Haftungsbeschränkung</h3>
        <p className="text-foreground/80">
          Der Auftragnehmer haftet für Schäden – unabhängig vom Rechtsgrund – nur bei Vorsatz und grober Fahrlässigkeit. Bei leichter Fahrlässigkeit ist die Haftung auf die Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) beschränkt und auf die Gesamtvergütung begrenzt, die der Auftraggeber in den zwölf (12) Monaten vor dem schadensbegründenden Ereignis gezahlt hat.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">10.2 Softwaremängel (Gewährleistung)</h3>
        <p className="text-foreground/80">
          Für Leistungen, die als Werkvertrag (Softwareentwicklung) eingeordnet werden, ist die gesetzliche Gewährleistungsfrist für Mängel auf zwölf (12) Monate ab Abnahme beschränkt.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">10.3 Beta- und Pilotsoftware</h3>
        <p className="text-foreground/80 mb-2">
          Gewährt der Auftragnehmer Zugang zu Software oder Tools, die ausdrücklich als „Beta“, „Alpha“, „Pilot“ oder „Tech Demo“ gekennzeichnet sind:
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li>(a) Diese werden „wie besehen“ ohne Gewährleistung für unterbrechungsfreie Funktionalität bereitgestellt.</li>
          <li>(b) Die Haftung für Datenverlust oder Betriebsfehler, die aus der Nutzung von Beta-Software resultieren, ist ausgeschlossen, außer bei Vorsatz.</li>
        </ul>

        <h3 className="font-semibold text-foreground mt-4 mb-2">10.4 Ausschlüsse</h3>
        <p className="text-foreground/80 mb-2">Der Auftragnehmer haftet nicht für:</p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1">
          <li>(a) Kontosperrungen oder -einschränkungen durch Drittplattformen (Google, Meta) aufgrund des Geschäftsmodells oder der Landingpage-Inhalte des Auftraggebers.</li>
          <li>(b) Entgangenen Gewinn oder entgangene Einsparungen.</li>
          <li>(c) Rechtsverstöße in Werbematerialien, die vom Auftraggeber freigegeben wurden.</li>
        </ul>
      </section>

      {/* § 11 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 11 Höhere Gewalt (Force Majeure)</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">11.1 Definition</h3>
        <p className="text-foreground/80">
          Keine Partei haftet für die Nichterfüllung oder verspätete Erfüllung ihrer Verpflichtungen, soweit diese Nichterfüllung auf Umständen beruht, die außerhalb ihrer zumutbaren Kontrolle liegen, einschließlich, aber nicht beschränkt auf: Naturkatastrophen, Pandemien, Epidemien, Krieg, Terrorismus, Aufruhr, Embargo, Handlungen von Zivil- oder Militärbehörden, Feuer, Überschwemmungen, Unfälle, Streiks, Aussperrungen, oder Ausfall von Kommunikations- oder Energieversorgungssystemen.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">11.2 Pflichten bei Force Majeure</h3>
        <p className="text-foreground/80">
          Die betroffene Partei hat die andere Partei unverzüglich über den Eintritt und die voraussichtliche Dauer des Force-Majeure-Ereignisses zu informieren und alle zumutbaren Anstrengungen zu unternehmen, um die Auswirkungen zu minimieren. Dauert das Force-Majeure-Ereignis länger als neunzig (90) Tage an, kann jede Partei den betroffenen Vertrag mit sofortiger Wirkung kündigen.
        </p>
      </section>

      {/* § 12 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 12 Vertragsbeendigung und Datenübergabe</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">12.1 Ordnungsgemäße Beendigung</h3>
        <p className="text-foreground/80">
          Bei ordnungsgemäßer Beendigung des Vertragsverhältnisses wird der Auftragnehmer dem Auftraggeber innerhalb von vierzehn (14) Werktagen alle im Eigentum des Auftraggebers stehenden Daten, Dokumentationen und Assets in einem gängigen, maschinenlesbaren Format übergeben.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">12.2 Zugangsentzug</h3>
        <p className="text-foreground/80">
          Nach Beendigung des Vertragsverhältnisses werden alle Zugänge des Auftraggebers zu Dashboards, Softwaretools und internen Systemen des Auftragnehmers innerhalb von sieben (7) Werktagen deaktiviert. Der Auftraggeber ist verpflichtet, alle ihm zur Verfügung gestellten Zugangsdaten zu Systemen des Auftragnehmers zu löschen.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">12.3 Datenlöschung</h3>
        <p className="text-foreground/80">
          Der Auftragnehmer wird personenbezogene Daten des Auftraggebers gemäß den Anforderungen der DSGVO löschen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen. Auf Anfrage wird der Auftragnehmer eine Löschbestätigung ausstellen.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">12.4 Übergangsunterstützung</h3>
        <p className="text-foreground/80">
          Auf Wunsch und gegen gesonderte Vergütung nach Aufwand unterstützt der Auftragnehmer den Auftraggeber bei der Übergabe an einen Nachfolgedienstleister (Transition Services).
        </p>
      </section>

      {/* § 13 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 13 Datenschutz</h2>
        <p className="text-foreground/80">
          Beide Parteien verpflichten sich, die Vorschriften der DSGVO bzw. die jeweils geltenden Datenschutzbestimmungen in der Rechtsordnung des Auftraggebers einzuhalten. Der Auftragnehmer verarbeitet personenbezogene Daten ausschließlich zum Zweck der Vertragserfüllung. Weitere Einzelheiten sind in der Datenschutzerklärung unter <a href="/privacy" className="text-accent hover:underline">sanerebels.com/privacy</a> geregelt.
        </p>
      </section>

      {/* § 14 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 14 Schlussbestimmungen</h2>

        <h3 className="font-semibold text-foreground mt-4 mb-2">14.1 Anwendbares Recht und Gerichtsstand</h3>
        <p className="text-foreground/80">
          Diese AGB und alle daraus entstehenden Vertragsverhältnisse unterliegen dem Recht der Bundesrepublik Deutschland. Ausschließlicher Gerichtsstand für alle Streitigkeiten ist Berlin, Deutschland.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">14.2 Alternative Streitbeilegung</h3>
        <p className="text-foreground/80">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://ec.europa.eu/odr</a>. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">14.3 Salvatorische Klausel</h3>
        <p className="text-foreground/80">
          Sollte eine Bestimmung dieser AGB unwirksam oder undurchführbar sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Anstelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">14.4 Schriftform</h3>
        <p className="text-foreground/80">
          Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses. Die elektronische Form (E-Mail) genügt der Schriftform.
        </p>
      </section>

      {/* § 15 */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">§ 15 Kontakt</h2>
        <p className="text-foreground/80 mb-4">
          Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen kontaktieren Sie bitte:
        </p>
        <div className="text-foreground/80">
          <p className="font-semibold text-foreground">KNUS GmbH</p>
          <p>Simon Roser</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:hi@sanerebels.com" className="text-accent hover:underline">
              hi@sanerebels.com
            </a>
          </p>
        </div>
        <p className="text-foreground/60 mt-6 text-sm">Stand: Dezember 2024</p>
      </section>
    </div>
  )
}
