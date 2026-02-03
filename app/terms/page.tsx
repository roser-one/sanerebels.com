'use client'

import { PageWrapper } from '@/components/page-wrapper'
import { useState, useEffect } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['section-1', 'section-2']))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66% 0px' }
    )

    document.querySelectorAll('[id^="section-"]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const sections = [
    { id: 'section-1', title: '§ 1 Geltungsbereich und Vertragsparteien' },
    { id: 'section-2', title: '§ 2 Leistungen und Vertragsart' },
    { id: 'section-3', title: '§ 3 Vertragsschluss' },
    { id: 'section-4', title: '§ 4 Laufzeit und Kündigung' },
    { id: 'section-5', title: '§ 5 Art und Weise der Leistungserbringung' },
    { id: 'section-6', title: '§ 6 Softwareentwicklung' },
    { id: 'section-7', title: '§ 7 Vergütung und Zahlung' },
    { id: 'section-7a', title: '§ 7A Erfolgsabhängige Vergütung' },
    { id: 'section-8', title: '§ 8 Anpassung von Entgelten' },
    { id: 'section-9', title: '§ 9 Änderungsanträge und Scope-Management' },
    { id: 'section-10', title: '§ 10 Mitwirkungspflichten' },
    { id: 'section-11', title: '§ 11 Rechtliche Prüfung' },
    { id: 'section-12', title: '§ 12 Termine' },
    { id: 'section-13', title: '§ 13 Abnahme' },
    { id: 'section-14', title: '§ 14 Mängel und Gewährleistung' },
    { id: 'section-15', title: '§ 15 Haftung' },
    { id: 'section-16', title: '§ 16 Freistellung' },
    { id: 'section-17', title: '§ 17 Höhere Gewalt' },
    { id: 'section-18', title: '§ 18 Geistiges Eigentum' },
    { id: 'section-19', title: '§ 19 Vertraulichkeit' },
    { id: 'section-20', title: '§ 20 Vertragsbeendigung' },
    { id: 'section-21', title: '§ 21 Schutz von Mitarbeitern' },
    { id: 'section-22', title: '§ 22 Referenznennung' },
    { id: 'section-23', title: '§ 23 Datenschutz' },
    { id: 'section-24', title: '§ 24 Aufrechnung' },
    { id: 'section-25', title: '§ 25 Abtretung' },
    { id: 'section-26', title: '§ 26 Änderung der AGB' },
    { id: 'section-27', title: '§ 27 Schlussbestimmungen' },
    { id: 'section-28', title: '§ 28 Kontakt' },
  ]

  return (
    <PageWrapper title="Allgemeine Geschäftsbedingungen" subtitle="Legal">
      <div className="min-h-screen bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            {/* Sticky Side Navigation */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto py-4 pr-4">
                <h2 className="text-xs font-bold text-accent uppercase tracking-wider mb-4">Inhalt</h2>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left text-xs py-2 px-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="max-w-4xl">
              <div className="mb-12">
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  Allgemeine Geschäftsbedingungen
                </h1>
                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <p className="text-lg text-muted-foreground mb-2">KNUS GmbH</p>
                  <p className="text-sm text-muted-foreground">(handelnd unter den Marken SANE/REBELS und ROSER & REBELS)</p>
                  <p className="text-sm text-muted-foreground mt-4">Stand: Januar 2026</p>
                </div>
              </div>

              <div className="space-y-12">
                {/* § 1 */}
                <section id="section-1" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 1 GELTUNGSBEREICH UND VERTRAGSPARTEIEN
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">1.1 Vertragsparteien</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Diese Allgemeinen Geschäftsbedingungen (AGB) regeln das Vertragsverhältnis zwischen der:</p>
                        <div className="bg-muted/30 border border-border rounded-lg p-5 my-4">
                          <p className="font-medium text-foreground mb-2">KNUS GmbH</p>
                          <p className="text-sm">Geschäftsführer: Simon Roser</p>
                          <p className="text-sm">Sitz: Renkenweg 7, 78464 Konstanz, Deutschland</p>
                          <p className="text-sm">Korrespondenzanschrift: Oderberger Str. 2, 10435 Berlin (c/o ROAM Holding GmbH)</p>
                          <p className="text-sm">E-Mail: hi@sanerebels.com</p>
                          <p className="text-sm">Handelsregister: Amtsgericht Freiburg i. Br., HRB 724642</p>
                          <p className="text-sm">USt-IdNr.: DE344225955</p>
                        </div>
                        <p>– nachfolgend „Auftragnehmer" oder „wir" –</p>
                        <p>und dem Auftraggeber (nachfolgend „Auftraggeber" oder „Kunde").</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">1.2 Geltungsbereich</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne von § 14 BGB, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen.</p>
                        <p>(2) Diese AGB gelten nicht nur für das Vertragsverhältnis, in das sie einbezogen wurden, sondern auch für alle zukünftigen Geschäftsbeziehungen zwischen den Parteien, sofern nicht ausdrücklich andere Bedingungen vereinbart werden.</p>
                        <p>(3) Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des Auftraggebers werden, selbst bei Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt. Diese AGB gelten auch, wenn wir in Kenntnis entgegenstehender Bedingungen des Auftraggebers den Vertrag vorbehaltlos durchführen.</p>
                        <p>(4) Im Einzelfall getroffene, individuelle Vereinbarungen mit dem Auftraggeber (einschließlich Nebenabreden, Ergänzungen und Änderungen in separaten Verträgen, SOWs oder Side Letters) haben in jedem Fall Vorrang vor diesen AGB. Für den Inhalt derartiger Vereinbarungen ist ein schriftlicher Vertrag bzw. die schriftliche Bestätigung des Auftragnehmers maßgebend.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">1.3 Form rechtserheblicher Erklärungen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Rechtserhebliche Erklärungen und Anzeigen des Auftraggebers in Bezug auf den Vertrag (z.B. Fristsetzung, Mängelanzeige, Kündigung, Rücktritt oder Minderung) sind in Textform (z.B. Brief, E-Mail) abzugeben. Gesetzliche Formvorschriften und weitere Nachweise, insbesondere bei Zweifeln über die Legitimation des Erklärenden, bleiben unberührt.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 2 */}
                <section id="section-2" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 2 LEISTUNGEN UND VERTRAGSART
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">2.1 Leistungsumfang</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer bietet ein hybrides Portfolio von Dienstleistungen an, das insbesondere umfasst:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) <strong>Beratung:</strong> Strategische Beratung, Audits, Workshops, Strategiesitzungen.</li>
                          <li>(b) <strong>Technologie & Automatisierung:</strong> Entwicklung maßgeschneiderter Software, Automatisierungs-Workflows (z.B. n8n-Blueprints), Bereitstellung proprietärer Tools, Custom Dashboards.</li>
                          <li>(c) <strong>Agenturdienstleistungen:</strong> Verwaltung von Werbekampagnen (Google Ads, Bing Ads, Meta, LinkedIn, TikTok etc.), Performance Marketing, kreative Leitung, Content-Erstellung.</li>
                          <li>(d) <strong>Revenue Operations (RevOps):</strong> Technische Automatisierung, Reporting, Dateninfrastruktur, CRM-Integration.</li>
                        </ul>
                        <p>Der konkrete Umfang wird im Einzelvertrag, Statement of Work (SOW) oder angenommenen Angebot definiert. Dort nicht aufgeführte Leistungen werden nicht Vertragsbestandteil.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">2.2 Rechtliche Einordnung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Sofern in der SOW nicht ausdrücklich anders angegeben, werden die Leistungen nach deutschem Recht wie folgt eingeordnet:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) <strong>Beratungs- & Agenturdienstleistungen (Dienstvertrag, § 611 BGB):</strong> Leistungen wie Strategiesitzungen, Audits, laufende Werbekontoverwaltung und Performance Marketing werden als Dienstverträge erbracht. Wir schulden die sorgfältige Erbringung der Leistung nach Best Practices (das „Bemühen"), nicht einen bestimmten wirtschaftlichen Erfolg.</li>
                          <li>(b) <strong>Softwareentwicklung (Werkvertrag, § 631 BGB):</strong> Die maßgeschneiderte Entwicklung spezifischer, fertiger Softwareanwendungen oder Codebasen wird als Werkvertrag erbracht. Der Erfolg ist als Lieferung funktionsfähiger Software gemäß den technischen Spezifikationen definiert.</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">2.3 Keine Erfolgsgarantie bei Marketing- und SEO-Leistungen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Gegenstand einer jeden Vereinbarung im Bereich Marketing, Social Media oder SEO ist das Erbringen der vereinbarten Leistung, nicht hingegen ein bestimmter, durch den Auftraggeber erhoffter Erfolg.</p>
                        <p>(2) Insbesondere bei Werbemaßnahmen, Social-Media-Betreuung und Suchmaschinenoptimierung kann ein bestimmter Erfolg nicht garantiert werden. Platzierungen in Suchergebnissen und die Anzeige von Werbung liegen im Ermessen der jeweiligen Plattformbetreiber und können sich durch Änderungen von Algorithmen oder Rankingfaktoren jederzeit ändern.</p>
                        <p>(3) Der Auftragnehmer wird die ihm bekannten Faktoren für die Gewichtung von Suchergebnissen oder Werbeanzeigen berücksichtigen, kann jedoch nicht ausschließen, dass es durch Änderungen seitens der Plattformbetreiber zu Veränderungen der Ergebnisse kommt.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">2.4 Künstliche Intelligenz (KI) und Automatisierung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftraggeber erkennt an, dass der Auftragnehmer fortschrittliche KI-Tools (z.B. LLMs, Generative KI) und Automatisierungsplattformen einsetzt, um Dienstleistungen effizient zu erbringen.</p>
                        <p>(2) <strong>Keine Garantie der Einzigartigkeit für KI-Inhalte:</strong> Der Auftraggeber versteht, dass rein KI-generierte Elemente (z.B. Rohtexte, generierte Bilder) nach geltender Gesetzgebung möglicherweise nicht urheberrechtlich geschützt sind und „wie besehen" bereitgestellt werden.</p>
                        <p>(3) <strong>Menschliche Überprüfung:</strong> Obwohl wir als „Erwachsenenaufsicht" für KI-Outputs fungieren, ist der Auftraggeber für die abschließende rechtliche Compliance-Prüfung aller veröffentlichten Inhalte verantwortlich. Dies gilt insbesondere für die Prüfung von Sachaussagen (Fakten, technische Daten, Preise) in KI-generierten Texten.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 3 */}
                <section id="section-3" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 3 VERTRAGSSCHLUSS
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">3.1 Angebot und Annahme</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Unsere Angebote sind freibleibend. Die Darstellung von Leistungen auf unserer Website ist nur eine Einladung zur Abgabe eines Angebots.</p>
                        <p>(2) Mit der Annahme eines Angebotes erklärt der Auftraggeber verbindlich, die ausgewiesenen Leistungen beauftragen zu wollen.</p>
                        <p>(3) Wir sind berechtigt, das Vertragsangebot des Auftraggebers innerhalb von zwei Wochen nach Zugang anzunehmen. Die Annahme kann ausdrücklich oder durch Beginn der Leistungserbringung erklärt werden.</p>
                        <p>(4) Verträge kommen durch schriftliche Vereinbarung (E-Mail ist ausreichend) oder durch Annahme eines schriftlichen Angebots/SOW durch den Auftraggeber zustande.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">3.2 Mündliche Aufträge</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Soweit der Auftraggeber Aufträge mündlich erteilt, sind diese bindend. Der Auftragnehmer hat Anspruch darauf, dass mündlich erteilte Aufträge unverzüglich in Textform bestätigt werden.</p>
                        <p>(2) Bis zur schriftlichen Bestätigung kann der Auftragnehmer mit der Leistungserbringung warten, ohne dass hieraus ein Anspruch des Auftraggebers entsteht.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 4 */}
                <section id="section-4" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 4 LAUFZEIT UND KÜNDIGUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">4.1 Vertragslaufzeit</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(a) <strong>Einmalige Projekte:</strong> Enden mit Abschluss der vereinbarten Leistung bzw. mit Abnahme des Werks.</p>
                        <p>(b) <strong>Retainer/Laufende Engagements:</strong> Sofern nicht anders vereinbart, laufen laufende Verträge auf unbestimmte Zeit und können von beiden Parteien mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.</p>
                        <p>(c) <strong>Befristete Verträge:</strong> Verträge mit fester Laufzeit (z.B. 3-Monats-Sprints) können nicht vorzeitig ordentlich gekündigt werden.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">4.2 Außerordentliche Kündigung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor bei:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) wesentlicher Vertragsverletzung, die nicht innerhalb von 14 Tagen nach Abmahnung behoben wird,</li>
                          <li>(b) Insolvenzantrag oder Zahlungseinstellung einer Partei,</li>
                          <li>(c) Zahlungsverzug des Auftraggebers von mehr als 30 Tagen.</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">4.3 Kündigung von Werkverträgen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Bei Kündigung eines Werkvertrages durch den Auftraggeber steht uns die Vergütung für bereits erbrachte Leistungen in voller Höhe zu. Für noch nicht erbrachte Leistungen steht uns 30% der ausstehenden Vergütung zu (§ 648 BGB).</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">4.4 Fortgeltung bei Kündigung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Bestimmungen zu Vertraulichkeit (§ 19), geistigem Eigentum (§ 18), Haftung (§ 15), Abwerbeverbot (§ 21) und Datenschutz (§ 23) gelten auch nach Beendigung des Vertragsverhältnisses fort.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 5 */}
                <section id="section-5" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 5 ART UND WEISE DER LEISTUNGSERBRINGUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">5.1 Freie Gestaltung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftragnehmer bestimmt die Art und Weise der Leistungserbringung nach eigenem Ermessen, sofern nicht ausdrücklich etwas anderes vereinbart ist.</p>
                        <p>(2) Der Auftragnehmer ist berechtigt, Leistungen durch qualifizierte Mitarbeiter, Freelancer oder Subunternehmer erbringen zu lassen. Der Auftragnehmer bleibt gegenüber dem Auftraggeber für die ordnungsgemäße Erfüllung verantwortlich.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">5.2 Arbeitsort und -zeit</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftragnehmer erbringt seine Leistungen grundsätzlich remote von einem Ort seiner Wahl.</p>
                        <p>(2) Soweit Vor-Ort-Termine erforderlich sind, werden diese gesondert vereinbart. Reisekosten und -zeiten werden nach Aufwand berechnet, sofern nicht anders vereinbart.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">5.3 Kommunikation</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Die primäre Kommunikation erfolgt per E-Mail, Slack oder über vereinbarte Projektmanagement-Tools.</p>
                        <p>(2) Regelmäßige Status-Meetings können vereinbart werden; deren Häufigkeit richtet sich nach dem Projektumfang.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 6 */}
                <section id="section-6" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 6 SOFTWAREENTWICKLUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">6.1 Spezifikationen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Die Grundlage für Softwareentwicklungsprojekte bilden die im Angebot, der SOW oder einem separaten Pflichtenheft definierten Spezifikationen.</p>
                        <p>(2) Änderungen oder Erweiterungen der Spezifikationen während der Entwicklung bedürfen der schriftlichen Vereinbarung und können zu Anpassungen von Zeitplan und Vergütung führen (siehe § 9).</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">6.2 Entwicklungsprozess</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Die Entwicklung erfolgt in iterativen Zyklen (Sprints), sofern nicht anders vereinbart.</p>
                        <p>(2) Der Auftraggeber erhält regelmäßig Zugang zu Entwicklungsständen (Staging-Umgebungen) zur Prüfung und Feedback.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">6.3 Dokumentation</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer stellt eine angemessene technische Dokumentation bereit, die den Betrieb und die Wartung der Software ermöglicht. Der Umfang der Dokumentation wird in der SOW spezifiziert.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">6.4 Quellcode</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Die Übergabe von Quellcode erfolgt nur, wenn dies ausdrücklich vereinbart ist.</p>
                        <p>(2) Soweit Quellcode übergeben wird, gelten die Regelungen des § 18 (Geistiges Eigentum).</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 7 */}
                <section id="section-7" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 7 VERGÜTUNG UND ZAHLUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7.1 Vergütung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Für die Leistungen fallen die mit dem Auftraggeber vereinbarten Entgelte an.</p>
                        <p>(2) Alle Preise sind Nettopreise zuzüglich der zum Zeitpunkt der Rechnungsstellung geltenden gesetzlichen Mehrwertsteuer (derzeit 19%).</p>
                        <p>(3) Eine Pauschale reicht immer nur soweit, wie die dafür angebotenen Leistungen detailliert aus dem Angebot ersichtlich sind.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7.2 Abrechnungsmodalitäten</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) <strong>Retainer:</strong> Vereinbarte Pauschalen werden monatlich im Voraus in Rechnung gestellt.</p>
                        <p>(2) <strong>Zeitaufwand:</strong> Abrechnung auf Basis effektiv geleisteter Zeit in Einheiten von 15 Minuten. Monatlich nachträglich.</p>
                        <p>(3) <strong>Projekte:</strong> Angemessene Vorschüsse oder Meilensteinzahlungen können vereinbart werden.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7.3 Zahlungsbedingungen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Rechnungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig, sofern nichts anderes vereinbart ist.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7.4 Zahlungsverzug</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Mit Ablauf der Zahlungsfrist kommt der Auftraggeber in Verzug.</p>
                        <p>(2) Im Falle des Verzugs behält sich der Auftragnehmer das Recht vor:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) gesetzliche Verzugszinsen (9 Prozentpunkte über dem Basiszinssatz) zu berechnen,</li>
                          <li>(b) alle Leistungen (einschließlich des Pausierens von Werbekampagnen oder der Einschränkung des Zugangs zu Software-Dashboards) <strong>nach vorheriger Androhung in Textform mit einer Frist von fünf (5) Werktagen</strong> auszusetzen, bis die Zahlung vollständig eingegangen ist.</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7.5 Reaktivierungsgebühr</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Nach einer Leistungsaussetzung gemäß § 7.4 wird für die Wiederaufnahme der Leistungen eine einmalige Reaktivierungsgebühr erhoben. Diese wird nach dem Stundenaufwand berechnet. Diese Gebühr deckt den administrativen und operativen Aufwand für die Wiederherstellung der Leistungsbereitschaft ab und ist zusätzlich zu allen ausstehenden Beträgen zu entrichten.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7.6 Kosten Dritter</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftraggeber ist direkt verantwortlich für alle Medienkosten Dritter (z.B. Werbeausgaben, die direkt an Google/Meta gezahlt werden) und Softwarelizenzen Dritter, die für seine spezifische Infrastruktur erforderlich sind (z.B. sein eigenes Shopify- oder CRM-Abonnement), sofern diese nicht ausdrücklich in der Vergütung des Auftragnehmers enthalten sind.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 7A */}
                <section id="section-7a" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 7A BESONDERE BESTIMMUNGEN FÜR ERFOLGSABHÄNGIGE VERGÜTUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7A.1 Anwendungsbereich</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Dieser Paragraph findet Anwendung, wenn eine erfolgsabhängige Vergütung (z.B. Revenue Share, Profit Share, Umsatzbeteiligung) vereinbart wurde. Die spezifischen Konditionen werden in einem separaten Side Letter geregelt.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7A.2 Definitionen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) <strong>Bruttoumsatz:</strong> Alle durch das Produkt/die Dienstleistung generierten Einnahmen vor Abzügen.</p>
                        <p>(2) <strong>Nettoumsatz:</strong> Bruttoumsatz abzüglich:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) Zahlungsabwicklungsgebühren (Stripe, PayPal etc.)</li>
                          <li>(b) Plattformgebühren und Provisionen</li>
                          <li>(c) Erstattungen und Rückbuchungen</li>
                          <li>(d) Gesetzlich erforderliche Steuern (MwSt., Umsatzsteuer)</li>
                        </ul>
                        <p>(3) Der für die Beteiligung relevante Umsatz wird im Side Letter definiert.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7A.3 Tracking und Reporting</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftraggeber gewährt dem Auftragnehmer Zugang zu relevanten Umsatzdaten (z.B. Stripe Dashboard, Buchhaltungssystem).</p>
                        <p>(2) Monatliche Umsatzberichte werden bis zum 5. des Folgemonats erstellt und beiden Parteien zugänglich gemacht.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7A.4 Auszahlung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Die erfolgsabhängige Vergütung wird monatlich abgerechnet.</p>
                        <p>(2) Auszahlung erfolgt innerhalb von 15 Werktagen nach Monatsende.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7A.5 Prüfungsrecht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer ist berechtigt, einmal jährlich auf eigene Kosten die Umsatzdaten durch einen unabhängigen Wirtschaftsprüfer prüfen zu lassen. Bei Abweichungen von mehr als 5% trägt der Auftraggeber die Prüfungskosten.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7A.6 Mindestlaufzeit</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Erfolgsabhängige Vergütungsmodelle haben eine Mindestlaufzeit von 6 Monaten ab Go-Live, sofern im Side Letter nicht anders vereinbart.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">7A.7 Klarstellung zum Dienstvertragscharakter</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Vereinbarung einer erfolgsabhängigen Vergütungskomponente ändert nichts an der rechtlichen Einordnung der laufenden Betreuungsleistungen als Dienstvertrag (§ 611 BGB). Ein bestimmter Erfolg wird honoriert, aber – soweit nicht anders im Einzelauftrag geregelt – nicht geschuldet.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 8 */}
                <section id="section-8" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 8 ANPASSUNG VON ENTGELTEN
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">8.1 Jährliche Anpassung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Bei Verträgen mit einer Laufzeit von mehr als 12 Monaten ist der Auftragnehmer berechtigt, die vereinbarten Entgelte einmal jährlich anzupassen.</p>
                        <p>(2) Eine Anpassung wird dem Auftraggeber mindestens 30 Tage vor Inkrafttreten schriftlich mitgeteilt.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">8.2 Anpassungsrahmen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Die Anpassung orientiert sich an der allgemeinen Kostenentwicklung (Personalkosten, Softwarelizenzen, Infrastruktur).</p>
                        <p>(2) Erhöhungen von mehr als 10% pro Jahr bedürfen der Zustimmung des Auftraggebers. Wird die Zustimmung verweigert, kann jede Partei den Vertrag mit einer Frist von 60 Tagen kündigen.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 9 */}
                <section id="section-9" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 9 ÄNDERUNGSANTRÄGE UND SCOPE-MANAGEMENT
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">9.1 Änderungsanträge (Change Requests)</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Wünscht der Auftraggeber Änderungen am vereinbarten Leistungsumfang, so sind diese schriftlich als Änderungsantrag (Change Request) einzureichen. Der Auftragnehmer wird innerhalb von fünf (5) Werktagen die Auswirkungen auf Zeitplan und Kosten bewerten und ein entsprechendes Änderungsangebot unterbreiten.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">9.2 Scope-Abgrenzung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der in der SOW definierte Leistungsumfang ist verbindlich. Leistungen, die nicht ausdrücklich in der SOW aufgeführt sind, gelten als außerhalb des Leistungsumfangs (Out-of-Scope) und werden gesondert nach Aufwand gemäß dem vereinbarten Stundensatz oder einem separaten Angebot berechnet.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">9.3 Freigabeverfahren</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Mehraufwand außerhalb des vereinbarten Leistungsumfangs wird nur nach vorheriger schriftlicher Freigabe durch den Auftraggeber erbracht und berechnet. Als schriftliche Freigabe gilt auch die Bestätigung per E-Mail oder über ein vereinbartes Projektmanagement-Tool.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 10 */}
                <section id="section-10" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 10 MITWIRKUNGSPFLICHTEN DES AUFTRAGGEBERS
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">10.1 Kooperation und Zugang</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftraggeber muss alle notwendigen Informationen, Assets und Zugangsdaten (z.B. Google Ads ID, API-Keys, CRM-Zugänge) bereitstellen, die zur Erbringung der Leistungen erforderlich sind.</p>
                        <p>(2) Verzögerungen durch fehlende Informationen seitens des Auftraggebers verlängern die Lieferfristen entsprechend.</p>
                        <p>(3) Der Auftraggeber benennt einen Ansprechpartner, der für Rückfragen und Freigaben zur Verfügung steht.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">10.2 Freigaben und Feedback</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftraggeber hat Entwürfe, Konzepte und Arbeitsergebnisse innerhalb von 5 Werktagen zu prüfen und Feedback zu geben, sofern nicht anders vereinbart.</p>
                        <p>(2) Erfolgt innerhalb der Frist keine Rückmeldung und wurde eine Freigabefiktion vereinbart, gilt die Freigabe als erteilt.</p>
                        <p>(3) Feedback ist konsolidiert in einem Dokument oder einer E-Mail zu übermitteln.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">10.3 Umsetzung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Bei Beratungsleistungen bleibt die Umsetzung der Empfehlungen in alleiniger Verantwortung des Auftraggebers, sofern der Auftragnehmer nicht separat mit der Durchführung beauftragt wird.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 11 */}
                <section id="section-11" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 11 RECHTLICHE PRÜFUNG DER LEISTUNGEN
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">11.1 Verantwortung des Auftraggebers</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftraggeber ist für die rechtliche Prüfung aller Werbematerialien, Texte und Inhalte verantwortlich, bevor diese veröffentlicht werden.</p>
                        <p>(2) Dies umfasst insbesondere die Prüfung auf:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) Wettbewerbsrechtliche Zulässigkeit</li>
                          <li>(b) Marken- und Kennzeichenrechte</li>
                          <li>(c) Urheberrechte</li>
                          <li>(d) Datenschutzrechtliche Anforderungen</li>
                          <li>(e) Branchenspezifische Werbevorschriften</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">11.2 Hinweispflicht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer wird auf erkennbare rechtliche Risiken hinweisen, übernimmt jedoch keine Rechtsberatung.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">11.3 Freigabe</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Mit der Freigabe von Materialien durch den Auftraggeber übernimmt dieser die Verantwortung für deren rechtliche Zulässigkeit.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 12 */}
                <section id="section-12" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 12 TERMINE
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">12.1 Verbindlichkeit</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich als verbindlich bezeichnet wurden.</p>
                        <p>(2) Andernfalls handelt es sich um unverbindliche Schätzungen, die nach bestem Wissen erstellt wurden.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">12.2 Verzögerungen durch den Auftraggeber</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Verzögerungen, die durch verspätete Mitwirkung, fehlendes Feedback oder nicht rechtzeitig bereitgestellte Materialien des Auftraggebers entstehen, verlängern vereinbarte Fristen entsprechend.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">12.3 Mitteilungspflicht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer wird den Auftraggeber unverzüglich informieren, wenn absehbar ist, dass ein vereinbarter Termin nicht eingehalten werden kann, und einen neuen Termin vorschlagen.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 13 */}
                <section id="section-13" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 13 ABNAHME (WERKVERTRÄGE)
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">13.1 Abnahmeverfahren</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Für Leistungen, die als Werkvertrag (§ 2.2b) eingeordnet werden, gilt folgendes Abnahmeverfahren: Nach Fertigstellung des Werks stellt der Auftragnehmer dieses dem Auftraggeber zur Abnahme bereit. Der Auftraggeber hat das Werk innerhalb von vierzehn (14) Werktagen zu prüfen und etwaige Mängel schriftlich zu rügen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">13.2 Fiktion der Abnahme</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Das Werk gilt als abgenommen, wenn der Auftraggeber (a) die Abnahme ausdrücklich erklärt, (b) nach Ablauf der Prüffrist keine Mängel gerügt hat, oder (c) das Werk produktiv nutzt. Die Nutzung in einer Produktivumgebung gilt als konkludente Abnahme.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">13.3 Teilabnahmen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Bei umfangreichen Projekten können Teilabnahmen für definierte Meilensteine oder Module vereinbart werden. Jede Teilabnahme gilt als eigenständige Abnahme für den jeweiligen Leistungsteil.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 14 */}
                <section id="section-14" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 14 MÄNGEL UND GEWÄHRLEISTUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.1 Mängelbegriff</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Ein Mangel liegt vor, wenn die Leistung nicht die vereinbarte Beschaffenheit aufweist oder sich nicht für die nach dem Vertrag vorausgesetzte Verwendung eignet.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.2 Mängelanzeige</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftraggeber hat offensichtliche Mängel unverzüglich, spätestens innerhalb von 14 Werktagen nach Abnahme, schriftlich anzuzeigen.</p>
                        <p>(2) Verdeckte Mängel sind unverzüglich nach Entdeckung anzuzeigen.</p>
                        <p>(3) Die Mängelanzeige muss eine nachvollziehbare Beschreibung des Mangels enthalten.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.3 Nacherfüllung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Bei berechtigten Mängelrügen ist der Auftragnehmer zur Nacherfüllung berechtigt und verpflichtet.</p>
                        <p>(2) Der Auftragnehmer kann nach seiner Wahl den Mangel beseitigen oder eine neue mangelfreie Leistung erbringen.</p>
                        <p>(3) Der Auftraggeber hat dem Auftragnehmer angemessene Zeit und Gelegenheit zur Nacherfüllung zu gewähren.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.4 Fehlgeschlagene Nacherfüllung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Schlägt die Nacherfüllung nach zwei Versuchen fehl, kann der Auftraggeber nach seiner Wahl Minderung verlangen oder vom Vertrag zurücktreten. Schadensersatzansprüche richten sich nach § 15.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.5 Zurückbehaltung bei Zahlungsverzug</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Befindet sich der Auftraggeber im Zeitpunkt der Mängelrüge im Zahlungsverzug, können wir die Nacherfüllung verweigern, bis der Auftraggeber die fällige Vergütung abzüglich eines der wirtschaftlichen Bedeutung des Mangels entsprechenden Betrages entrichtet hat.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.6 Ausschluss bei Änderungen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Änderungen an der betroffenen Leistung durch den Auftraggeber oder Dritte führen zum Ausschluss der Mängelrechte, es sei denn, der Auftraggeber kann nachweisen, dass die Änderungen den Mangel nicht verursacht haben und keine unzumutbaren Auswirkungen auf die Analyse und Beseitigung des Mangels haben.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.7 Ausschluss bei Kundenzugang zu Systemen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Sofern der Auftraggeber einen Administrator- oder Editorzugang zu CMS, Dashboards oder anderen vom Auftragnehmer eingerichteten Systemen erhält, entfällt die Gewährleistung für Fehler, die durch vom Auftraggeber oder Dritten vorgenommene Änderungen entstehen (z.B. Updates, eigene Code-Änderungen, Plugin-Installationen, Konfigurationsänderungen).</p>
                        <p>(2) Fehler, die der Auftraggeber innerhalb von vier Wochen nach Übergabe nachweislich nicht zu verschulden hat, werden vom Auftragnehmer beseitigt.</p>
                        <p>(3) Fehler, die durch Arbeiten dritter Parteien entstehen, sind ebenfalls nicht vom Auftragnehmer zu beseitigen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.8 Verjährung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Für Mängelansprüche bei Werkverträgen (Softwareentwicklung) ist eine Verjährungsfrist von zwölf (12) Monaten ab Abnahme vereinbart.</p>
                        <p>(2) Dies gilt nicht für die Haftung für Schäden wegen Mängeln; insoweit gelten die Regelungen des § 15. Für Schadensersatzansprüche, die auf einer verweigerten Nacherfüllung beruhen, gelten die gesetzlichen Verjährungsfristen nur dann, wenn die Nacherfüllung innerhalb der verkürzten Frist verlangt wurde.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.9 Beta- und Pilotsoftware</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Gewährt der Auftragnehmer Zugang zu Software oder Tools, die ausdrücklich als „Beta", „Alpha", „Pilot" oder „Tech Demo" gekennzeichnet sind:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) werden diese „wie besehen" ohne Gewährleistung für unterbrechungsfreie Funktionalität bereitgestellt,</li>
                          <li>(b) ist die Haftung für Datenverlust oder Betriebsfehler, die aus der Nutzung resultieren, ausgeschlossen, außer bei Vorsatz.</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">14.10 Nur unwesentliche Anfangsmängel</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Haftung für nur unwesentliche Anfangsmängel ist ausgeschlossen. Das Recht zum Rücktritt vom Vertrag bleibt hiervon unberührt.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 15 */}
                <section id="section-15" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 15 HAFTUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">15.1 Unbeschränkte Haftung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer haftet unbeschränkt für:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) Vorsatz und grobe Fahrlässigkeit,</li>
                          <li>(b) Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit,</li>
                          <li>(c) arglistiges Handeln,</li>
                          <li>(d) Übernahme einer Garantie,</li>
                          <li>(e) Ansprüche nach dem Produkthaftungsgesetz.</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">15.2 Beschränkte Haftung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Bei einfach fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung der Höhe nach beschränkt auf:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) vorhersehbare und vertragstypische Schäden, sowie</li>
                          <li>(b) die Gesamtvergütung, die der Auftraggeber in den zwölf (12) Monaten vor dem schadensbegründenden Ereignis gezahlt hat, mindestens jedoch 1.000 EUR.</li>
                        </ul>
                        <p>(2) Wesentliche Vertragspflichten (Kardinalpflichten) sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">15.3 Haftungsausschlüsse</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer haftet nicht für:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) entgangenen Gewinn oder entgangene Einsparungen,</li>
                          <li>(b) die Erreichung bestimmter wirtschaftlicher Kennzahlen (z.B. ROAS, Umsatzziele, Rankings, Conversion Rates),</li>
                          <li>(c) Kontosperrungen oder -einschränkungen durch Drittplattformen (Google, Meta etc.) aufgrund des Geschäftsmodells, der Landingpage-Inhalte oder sonstiger Umstände in der Sphäre des Auftraggebers,</li>
                          <li>(d) Rechtsverstöße in Werbematerialien, die vom Auftraggeber freigegeben wurden,</li>
                          <li>(e) die in den Werbemaßnahmen enthaltenen Sachaussagen über Produkte und Leistungen des Auftraggebers,</li>
                          <li>(f) die wettbewerbs-, kennzeichen- oder markenrechtliche Zulässigkeit oder Eintragungsfähigkeit der Leistungen.</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">15.4 Datenverlust</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Haftung für den Verlust von Daten ist ausgeschlossen, sofern und soweit der Schaden durch eine ordnungsgemäße Datensicherung des Auftraggebers hätte vermieden werden können. Dies gilt nicht bei Vorsatz oder grober Fahrlässigkeit unsererseits oder wenn die Datensicherung von uns geschuldet war.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">15.5 Mitarbeiter und Erfüllungsgehilfen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die vorstehenden Haftungsbeschränkungen und -ausschlüsse gelten auch zugunsten unserer Mitarbeiter, Vertreter, Organe und Erfüllungsgehilfen.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 16 */}
                <section id="section-16" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 16 FREISTELLUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">16.1 Freistellungspflicht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftraggeber stellt den Auftragnehmer von allen Ansprüchen Dritter frei, die aufgrund von:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) Inhalten, Materialien oder Informationen entstehen, die der Auftraggeber bereitgestellt hat,</li>
                          <li>(b) der Nutzung der Leistungen durch den Auftraggeber in einer Weise, die gegen geltendes Recht verstößt,</li>
                          <li>(c) Verletzungen von Rechten Dritter (insbesondere Urheber-, Marken-, Persönlichkeitsrechte) durch vom Auftraggeber freigegebene Materialien.</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">16.2 Mitwirkung bei der Abwehr</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftragnehmer wird den Auftraggeber unverzüglich über geltend gemachte Ansprüche informieren.</p>
                        <p>(2) Der Auftraggeber wird den Auftragnehmer bei der Abwehr der Ansprüche unterstützen und die erforderlichen Informationen bereitstellen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">16.3 Umfang der Freistellung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Freistellung umfasst auch die dem Auftragnehmer entstehenden angemessenen Kosten der Rechtsverteidigung.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 17 */}
                <section id="section-17" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 17 HÖHERE GEWALT (FORCE MAJEURE)
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">17.1 Definition</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Keine Partei haftet für die Nichterfüllung oder verspätete Erfüllung ihrer Verpflichtungen, soweit diese Nichterfüllung auf Umständen beruht, die außerhalb ihrer zumutbaren Kontrolle liegen, einschließlich, aber nicht beschränkt auf: Naturkatastrophen, Pandemien, Epidemien, Krieg, Terrorismus, Aufruhr, Embargo, Handlungen von Zivil- oder Militärbehörden, Feuer, Überschwemmungen, Unfälle, Streiks, Aussperrungen, oder Ausfall von Kommunikations- oder Energieversorgungssystemen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">17.2 Mitteilungspflicht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die betroffene Partei hat die andere Partei unverzüglich über den Eintritt und die voraussichtliche Dauer des Force-Majeure-Ereignisses zu informieren.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">17.3 Schadensbegrenzung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Beide Parteien sind verpflichtet, alle zumutbaren Anstrengungen zu unternehmen, um die Auswirkungen des Force-Majeure-Ereignisses zu minimieren.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">17.4 Aussetzung der Verpflichtungen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Für die Dauer des Force-Majeure-Ereignisses ruhen die betroffenen vertraglichen Verpflichtungen. Fristen verlängern sich entsprechend.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">17.5 Langanhaltende Force Majeure</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Führt ein Force-Majeure-Ereignis zu einem Leistungsaufschub von mehr als zwei Monaten oder fällt das Interesse des Auftraggebers an der Vertragserfüllung objektiv weg, kann jede Partei den betroffenen Vertrag mit sofortiger Wirkung kündigen. Bereits erbrachte Leistungen sind zu vergüten.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 18 */}
                <section id="section-18" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 18 GEISTIGES EIGENTUM
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">18.1 Daten und vorbestehendes IP des Auftraggebers</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftraggeber behält das volle Eigentum an:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) seinen Rohdaten und Kundendaten,</li>
                          <li>(b) seinen Marken-Assets und Brand-Materialien,</li>
                          <li>(c) seinen direkten Konten (z.B. Google Ads Account-Historie, CRM-Daten).</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">18.2 Background IP des Auftragnehmers</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Der Auftragnehmer behält das ausschließliche Eigentum an allen Methoden, Frameworks, Code-Bibliotheken, Automatisierungs-Blueprints (z.B. n8n-Workflows), System-Prompts und proprietären Software-Tools, die vom Auftragnehmer allgemein entwickelt wurden oder zur Erbringung der Leistungen verwendet werden (��Background IP" oder „Core IP").</p>
                        <p>(2) <strong>Lizenzerteilung:</strong> Bei vollständiger Zahlung aller Vergütungen und ohne ausstehende Forderungen erhält der Auftraggeber eine zeitlich unbefristete, nicht-exklusive, nicht übertragbare Lizenz zur Nutzung der spezifisch in seine Systeme integrierten Background IP für eigene interne Geschäftszwecke. Im Zweifel erfüllt der Auftragnehmer seine Verpflichtung durch Einräumung nicht ausschließlicher Nutzungsrechte im Gebiet der Bundesrepublik Deutschland.</p>
                        <p>(3) <strong>Lizenzbedingung:</strong> Die Lizenz steht unter der aufschiebenden Bedingung der vollständigen Erfüllung aller Zahlungsverpflichtungen. Bei Zahlungsverzug von mehr als 30 Tagen ruht die Lizenz bis zum vollständigen Ausgleich aller Forderungen.</p>
                        <p>(4) <strong>Einschränkung:</strong> Der Auftraggeber darf den Code, die Blueprints oder die Infrastruktur des Auftragnehmers nicht weiterverkaufen, White-Labeln, an Dritte unterlizenzieren oder Reverse Engineering betreiben. Eine Weitergabe der Nutzungsrechte an Dritte bedarf der vorherigen schriftlichen Zustimmung des Auftragnehmers.</p>
                        <p>(5) <strong>Verbesserungen:</strong> Soweit der Auftragnehmer im Rahmen der individuellen Entwicklung generische Verbesserungen an seiner eigenen Software-Architektur, Methoden, System-Prompts oder Bibliotheken vornimmt („Generic Improvements"), verbleiben die Rechte an diesen generischen Verbesserungen beim Auftragnehmer, auch wenn sie während des Kundenprojekts entstanden sind.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">18.3 Arbeitsergebnisse (Spezifische Liefergegenstände)</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Sämtliche für den Auftraggeber individuell erstellten Inhalte (z.B. spezifische Werbetexte, Grafiken, Kampagnenstrukturen, individueller Website-Code) gehen mit vollständiger Bezahlung in das Eigentum des Auftraggebers über.</p>
                        <p>(2) Der Auftraggeber erhält an diesen Arbeitsergebnissen die nicht-exklusiven, nicht übertragbaren Rechte zur Nutzung für eigene geschäftliche Zwecke.</p>
                        <p>(3) Für rein KI-generierte Inhalte gelten die Einschränkungen des § 2.4.</p>
                        <p>(4) Nutzungsrechte an Arbeiten, die bei Beendigung des Vertrages noch nicht voll bezahlt sind, verbleiben beim Auftragnehmer.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">18.4 Gewerbliche Schutzrechte</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Soweit für den Auftraggeber entwickelte Arbeitsergebnisse Gegenstand gewerblicher Schutzrechte sind oder sein können (z.B. Marken, Designs, Patente), ist der Auftraggeber berechtigt, eine entsprechende Anmeldung im eigenen Namen und auf eigene Kosten vorzunehmen.</p>
                        <p>(2) Der Auftragnehmer wird eine Anmeldung im eigenen Namen unterlassen und auf Anforderung alle erforderlichen Dokumente unterzeichnen und Maßnahmen treffen, um eine umfassende Rechtsübertragung zu ermöglichen.</p>
                        <p>(3) Der Auftragnehmer haftet nicht für die urheber-, geschmacksmuster- oder markenrechtliche Schutz- oder Eintragungsfähigkeit der Arbeitsergebnisse. Entsprechende Recherchen hat der Auftraggeber selbst und auf eigene Rechnung durchzuführen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">18.5 Änderungen durch den Auftraggeber</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Änderungen und Bearbeitungen der Inhalte (insbesondere Aktualisierungen von Texten, Bildern, Grafiken) dürfen vom Auftraggeber oder beauftragten Dritten auch ohne Zustimmung des Auftragnehmers vorgenommen werden. Die Änderung der grafischen Grundgestaltung oder des Quellcodes bedarf dagegen der Zustimmung des Auftragnehmers.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 19 */}
                <section id="section-19" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 19 VERTRAULICHKEIT
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">19.1 Geheimhaltungspflicht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen, Geschäfts- und Betriebsgeheimnisse der jeweils anderen Partei streng vertraulich zu behandeln und nicht an Dritte weiterzugeben.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">19.2 Erstreckung auf Erfüllungsgehilfen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Diese Verpflichtung erstreckt sich auch auf Mitarbeiter, Freelancer und Subunternehmer der Parteien, die entsprechend zu verpflichten sind.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">19.3 Dauer</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Vertraulichkeitsverpflichtung besteht für einen Zeitraum von drei (3) Jahren nach Beendigung des Vertragsverhältnisses fort. Für Geschäftsgeheimnisse im Sinne des GeschGehG gilt die Verpflichtung zeitlich unbegrenzt.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">19.4 Ausnahmen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Vertraulichkeitspflicht gilt nicht für Informationen, die:</p>
                        <ul className="list-none space-y-2 pl-4">
                          <li>(a) zum Zeitpunkt der Offenlegung bereits öffentlich bekannt waren,</li>
                          <li>(b) ohne Verschulden der empfangenden Partei öffentlich bekannt werden,</li>
                          <li>(c) der empfangenden Partei bereits vor der Offenlegung bekannt waren,</li>
                          <li>(d) der empfangenden Partei rechtmäßig von Dritten ohne Vertraulichkeitsverpflichtung mitgeteilt wurden,</li>
                          <li>(e) aufgrund gesetzlicher Verpflichtung offengelegt werden müssen.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 20 */}
                <section id="section-20" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 20 VERTRAGSBEENDIGUNG UND DATENÜBERGABE
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">20.1 Ordnungsgemäße Beendigung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Bei ordnungsgemäßer Beendigung des Vertragsverhältnisses wird der Auftragnehmer dem Auftraggeber innerhalb von vierzehn (14) Werktagen alle im Eigentum des Auftraggebers stehenden Daten, Dokumentationen und Assets in einem gängigen, maschinenlesbaren Format übergeben.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">20.2 Zugangsentzug</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Nach Beendigung des Vertragsverhältnisses werden alle Zugänge des Auftraggebers zu Dashboards, Softwaretools und internen Systemen des Auftragnehmers innerhalb von sieben (7) Werktagen deaktiviert. Der Auftraggeber ist verpflichtet, alle ihm zur Verfügung gestellten Zugangsdaten zu Systemen des Auftragnehmers zu löschen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">20.3 Datenlöschung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer wird personenbezogene Daten des Auftraggebers gemäß den Anforderungen der DSGVO löschen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen. Auf Anfrage wird der Auftragnehmer eine Löschbestätigung ausstellen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">20.4 Übergangsunterstützung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Auf Wunsch und gegen gesonderte Vergütung nach Aufwand unterstützt der Auftragnehmer den Auftraggeber bei der Übergabe an einen Nachfolgedienstleister (Transition Services).</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 21 */}
                <section id="section-21" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 21 SCHUTZ VON MITARBEITERN (ABWERBEVERBOT)
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">21.1 Abwerbeverbot</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftraggeber verpflichtet sich, während der Vertragslaufzeit und für <strong>zwölf (12) Monate</strong> nach Vertragsende keine Mitarbeiter oder regelmäßig eingesetzten Freelancer des Auftragnehmers abzuwerben oder abwerben zu lassen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">21.2 Umfang</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Dieses Verbot umfasst sowohl das direkte Abwerben als auch das Abwerben durch Dritte auf Veranlassung des Auftraggebers.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">21.3 Ausnahme</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Das Verbot gilt nicht, wenn der betreffende Mitarbeiter oder Freelancer sich aufgrund einer allgemeinen Stellenausschreibung des Auftraggebers bewirbt, die nicht gezielt auf Mitarbeiter des Auftragnehmers ausgerichtet war.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">21.4 Vertragsstrafe</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Für jeden Verstoß gegen diese Verpflichtung zahlt der Auftraggeber eine Vertragsstrafe, deren Höhe in unserem billigen Ermessen steht und im Streitfall der gerichtlichen Überprüfung unterliegt. Die Vertragsstrafe beträgt mindestens das Sechsfache des letzten monatlichen Bruttogehalts des abgeworbenen Mitarbeiters bzw. des durchschnittlichen monatlichen Honorars des Freelancers.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 22 */}
                <section id="section-22" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 22 REFERENZNENNUNG UND ÖFFENTLICHKEITSARBEIT
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">22.1 Referenzrecht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer ist berechtigt, den Auftraggeber namentlich und unter Verwendung des Markenlogos als Referenz zu nennen, insbesondere auf der eigenen Website, in Präsentationen und in Pitch-Dokumenten.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">22.2 Case Studies</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer darf anonymisierte oder mit Zustimmung des Auftraggebers personalisierte Case Studies über die Zusammenarbeit erstellen und veröffentlichen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">22.3 Widerspruch</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftraggeber kann der Referenznennung jederzeit schriftlich widersprechen. In diesem Fall wird der Auftragnehmer die entsprechenden Nennungen innerhalb von 30 Tagen entfernen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">22.4 Vertrauliche Projekte</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Wurde ausdrücklich eine Vertraulichkeitsvereinbarung für das Projekt geschlossen, die eine Referenznennung ausschließt, findet dieser Paragraph keine Anwendung.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 23 */}
                <section id="section-23" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 23 DATENSCHUTZ
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">23.1 DSGVO-Compliance</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Beide Parteien verpflichten sich, die Vorschriften der DSGVO sowie die jeweils geltenden Datenschutzbestimmungen einzuhalten. Der Auftragnehmer verarbeitet personenbezogene Daten ausschließlich zum Zweck der Vertragserfüllung.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">23.2 Auftragsverarbeitung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>(1) Sofern der Auftragnehmer im Rahmen der Leistungserbringung personenbezogene Daten im Auftrag des Auftraggebers verarbeitet, schließen die Parteien einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO ab.</p>
                        <p>(2) Der Auftragnehmer stellt einen standardisierten AVV zur Verfügung.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">23.3 Technische und organisatorische Maßnahmen</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer trifft angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten. Details sind der Datenschutzerklärung unter sanerebels.com/privacy zu entnehmen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">23.4 Unterauftragnehmer</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer ist berechtigt, Unterauftragnehmer zur Datenverarbeitung einzusetzen, sofern diese vertraglich auf die Einhaltung der Datenschutzvorschriften verpflichtet werden.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 24 */}
                <section id="section-24" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 24 AUFRECHNUNG UND ZURÜCKBEHALTUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">24.1 Aufrechnung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftraggeber kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">24.2 Zurückbehaltungsrecht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Ein Zurückbehaltungsrecht kann der Auftraggeber nur geltend machen, soweit es auf Ansprüchen aus demselben Vertragsverhältnis beruht.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 25 */}
                <section id="section-25" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 25 ABTRETUNG
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">25.1 Abtretungsverbot</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Abtretung von Rechten aus dem Vertragsverhältnis durch den Auftraggeber bedarf der vorherigen schriftlichen Zustimmung des Auftragnehmers.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">25.2 Ausnahme</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer ist berechtigt, Forderungen aus dem Vertragsverhältnis ohne Zustimmung des Auftraggebers an Dritte abzutreten.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 26 */}
                <section id="section-26" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 26 ÄNDERUNG DER AGB
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">26.1 Änderungsrecht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Der Auftragnehmer behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">26.2 Mitteilung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Änderungen werden dem Auftraggeber in Textform mitgeteilt.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">26.3 Zustimmungsfiktion</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Änderungen gelten als genehmigt, wenn der Auftraggeber nicht innerhalb von 30 Tagen nach Zugang der Änderungsmitteilung schriftlich widerspricht. Der Auftragnehmer wird in der Änderungsmitteilung auf diese Rechtsfolge hinweisen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">26.4 Widerspruch</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Widerspricht der Auftraggeber fristgemäß, gelten die bisherigen AGB fort. Der Auftragnehmer ist in diesem Fall berechtigt, das Vertragsverhältnis mit einer Frist von 60 Tagen zum Monatsende zu kündigen.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 27 */}
                <section id="section-27" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 27 SCHLUSSBESTIMMUNGEN
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">27.1 Anwendbares Recht</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Diese AGB und alle daraus entstehenden Vertragsverhältnisse unterliegen dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">27.2 Gerichtsstand</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Ausschließlicher Gerichtsstand für alle Streitigkeiten ist Berlin, Deutschland, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">27.3 Alternative Streitbeilegung</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/odr. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">27.4 Salvatorische Klausel</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Sollte eine Bestimmung dieser AGB unwirksam oder undurchführbar sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Anstelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-3">27.5 Schriftform</h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        <p>Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses. Die elektronische Form (E-Mail) genügt der Schriftform.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* § 28 */}
                <section id="section-28" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                    § 28 KONTAKT
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen kontaktieren Sie bitte:</p>
                    <div className="bg-muted/30 border border-border rounded-lg p-6 my-4">
                      <p className="font-medium text-foreground mb-2">KNUS GmbH</p>
                      <p>Simon Roser, Geschäftsführer</p>
                      <p>E-Mail: hi@sanerebels.com</p>
                      <p>Website: sanerebels.com</p>
                      <p className="mt-4">Renkenweg 7</p>
                      <p>78464 Konstanz</p>
                      <p>Deutschland</p>
                      <p className="mt-4 font-medium text-foreground">Korrespondenzanschrift:</p>
                      <p>c/o ROAM HOLDING, Oderberger Str. 2</p>
                      <p>10435 Berlin</p>
                      <p>Deutschland</p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="mt-24 pt-8 border-t border-border text-center text-muted-foreground">
                <p>ENDE DER ALLGEMEINEN GESCHÄFTSBEDINGUNGEN</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
