"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { ChevronRight } from "lucide-react"

const sections = [
  { id: "1", title: "Geltungsbereich", subsections: [] },
  { id: "2", title: "Vertragsschluss", subsections: [] },
  { id: "3", title: "Leistungsbeschreibung", subsections: [] },
  { id: "4", title: "Mitwirkungspflichten", subsections: [] },
  { id: "5", title: "Vergütung", subsections: [] },
  { id: "6", title: "Leistungszeit", subsections: [] },
  { id: "7", title: "Abnahme", subsections: [] },
  { id: "8", title: "Gewährleistung", subsections: [] },
  { id: "9", title: "Haftung", subsections: [] },
  { id: "10", title: "Urheberrechte", subsections: [] },
  { id: "11", title: "Geheimhaltung", subsections: [] },
  { id: "12", title: "Datenschutz", subsections: [] },
  { id: "13", title: "Änderungen", subsections: [] },
  { id: "14", title: "Höhere Gewalt", subsections: [] },
  { id: "15", title: "Abtretungsverbot", subsections: [] },
  { id: "16", title: "Gerichtsstand", subsections: [] },
  { id: "17", title: "Anwendbares Recht", subsections: [] },
  { id: "18", title: "Salvatorische Klausel", subsections: [] },
  { id: "19", title: "Kündigung", subsections: [] },
  { id: "20", title: "Rechnungsstellung", subsections: [] },
  { id: "21", title: "Beauftragung Dritter", subsections: [] },
  { id: "22", title: "Referenzen", subsections: [] },
  { id: "23", title: "Mängelbeseitigung", subsections: [] },
  { id: "24", title: "Auftragsänderungen", subsections: [] },
  { id: "25", title: "Fremdleistungen", subsections: [] },
  { id: "26", title: "Wertersatz", subsections: [] },
  { id: "27", title: "Kommunikation", subsections: [] },
  { id: "28", title: "Schlussbestimmungen", subsections: [] },
]

export default function TermsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`section-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-12">
            {/* Sticky Side Navigation */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h2 className="text-xs font-bold text-accent uppercase tracking-wider mb-4">Inhalt</h2>
                <nav className="space-y-1 max-h-[calc(100vh-10rem)] overflow-y-auto pr-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full flex items-center text-left text-sm py-2 px-3 rounded-lg hover:bg-card transition-colors group"
                    >
                      <span className="text-muted-foreground group-hover:text-foreground">
                        §{section.id} {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-3xl">
              <div className="mb-12">
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  Allgemeine Geschäftsbedingungen
                </h1>
                <p className="text-sm text-muted-foreground mb-2">Stand: Januar 2026</p>
                <p className="text-sm text-muted-foreground">Verbindliche Fassung: Deutsch</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 mb-12">
                <p className="text-lg text-muted-foreground mb-2">KNUS GmbH</p>
                <p className="text-sm text-muted-foreground">(handelnd unter der Marke SANE/REBELS)</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Wrangelstraße 88<br />
                  10997 Berlin<br />
                  Deutschland
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  E-Mail: hi@sanerebels.com<br />
                  Telefon: +49 178 3467 904
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Handelsregister: Amtsgericht Berlin (Charlottenburg)<br />
                  HRB 257796 B<br />
                  USt-IdNr.: DE369207774
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Geschäftsführer: Simon Roser
                </p>
              </div>

              <div className="space-y-12">
                {/* All 28 sections with complete German text */}
                
                <section id="section-1" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§1 Geltungsbereich</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen der KNUS GmbH, handelnd unter der Marke SANE/REBELS (nachfolgend „Auftragnehmer"), und ihren Auftraggebern (nachfolgend „Auftraggeber") über die Erbringung von Beratungs- und Dienstleistungen im Bereich Expert Systems, Künstlicher Intelligenz und digitaler Transformation.</p>
                    <p>Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
                    <p>Diese AGB gelten auch für alle zukünftigen Geschäftsbeziehungen, selbst wenn sie nicht nochmals ausdrücklich vereinbart werden.</p>
                  </div>
                </section>

                <section id="section-2" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§2 Vertragsschluss</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.</p>
                    <p>Die Beauftragung durch den Auftraggeber gilt als verbindliches Vertragsangebot. Der Auftragnehmer kann dieses Angebot innerhalb von 14 Tagen nach Zugang annehmen, entweder durch eine schriftliche Auftragsbestätigung oder durch Beginn der Leistungserbringung.</p>
                    <p>Der Vertrag kommt mit Zugang der Annahmeerklärung des Auftragnehmers oder mit Beginn der Leistungserbringung zustande.</p>
                    <p>Alle Vereinbarungen, die zwischen dem Auftragnehmer und dem Auftraggeber zwecks Ausführung eines Vertrages getroffen werden, sind in der Auftragsbestätigung bzw. im Projektvertrag schriftlich niederzulegen.</p>
                  </div>
                </section>

                <section id="section-3" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§3 Leistungsbeschreibung</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der Auftragnehmer erbringt Beratungs- und Dienstleistungen im Bereich Expert Systems, Künstlicher Intelligenz und digitaler Transformation. Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Auftragsbestätigung oder dem individuellen Projektvertrag.</p>
                    <p>Die Leistungen können insbesondere umfassen:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Strategieberatung und Methodenentwicklung</li>
                      <li>Entwicklung und Implementierung von Expert Systems</li>
                      <li>Schulungen und Workshops</li>
                      <li>Technische Beratung und Support</li>
                      <li>Projektbegleitung und Change Management</li>
                    </ul>
                    <p>Projekte werden in der Regel in folgenden Phasen durchgeführt:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Analyse:</strong> Bestandsaufnahme und Anforderungsanalyse</li>
                      <li><strong>Konzeption:</strong> Entwicklung von Strategien und Lösungsansätzen</li>
                      <li><strong>Umsetzung:</strong> Implementierung der vereinbarten Lösungen</li>
                      <li><strong>Optimierung:</strong> Feintuning und kontinuierliche Verbesserung</li>
                    </ul>
                    <p>Der konkrete Projektablauf und die Dauer der einzelnen Phasen werden individuell vereinbart.</p>
                  </div>
                </section>

                <section id="section-4" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§4 Mitwirkungspflichten des Auftraggebers</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der Auftraggeber verpflichtet sich, den Auftragnehmer bei der Leistungserbringung in angemessenem Umfang zu unterstützen. Insbesondere wird der Auftraggeber:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>alle erforderlichen Informationen, Unterlagen und Zugänge rechtzeitig und vollständig zur Verfügung stellen</li>
                      <li>qualifizierte Ansprechpartner benennen und deren Verfügbarkeit sicherstellen</li>
                      <li>notwendige Entscheidungen zeitnah treffen</li>
                      <li>die für die Leistungserbringung erforderliche technische Infrastruktur bereitstellen</li>
                    </ul>
                    <p>Kommt der Auftraggeber seinen Mitwirkungspflichten nicht oder nicht rechtzeitig nach, verlängern sich vereinbarte Fristen angemessen. Der Auftragnehmer ist berechtigt, die aus der Verzögerung resultierenden Mehraufwendungen gesondert in Rechnung zu stellen.</p>
                  </div>
                </section>

                <section id="section-5" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§5 Vergütung und Zahlungsbedingungen</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Die Vergütung richtet sich nach der jeweiligen Auftragsbestätigung oder dem individuellen Projektvertrag. Sofern nichts anderes vereinbart wurde, erfolgt die Abrechnung nach Aufwand (Zeit und Material) zu den jeweils gültigen Stundensätzen des Auftragnehmers.</p>
                    <p>Alle Preise verstehen sich zuzüglich der jeweils gültigen gesetzlichen Umsatzsteuer.</p>
                    <p>Auslagen (wie Reise-, Übernachtungs- und sonstige projektbezogene Kosten) werden zusätzlich in Rechnung gestellt, sofern nicht anders vereinbart.</p>
                    <p>Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig, sofern nicht anders vereinbart.</p>
                    <p>Bei Projekten mit einer Laufzeit von mehr als zwei Monaten ist der Auftragnehmer berechtigt, monatliche Abschlagszahlungen entsprechend dem Projektfortschritt zu verlangen.</p>
                    <p>Die Zahlung hat per Überweisung auf das in der Rechnung angegebene Konto zu erfolgen.</p>
                    <p>Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz zu berechnen. Die Geltendmachung eines höheren Verzugsschadens bleibt vorbehalten.</p>
                    <p>Bei Zahlungsverzug ist der Auftragnehmer ferner berechtigt, die weitere Leistungserbringung bis zur vollständigen Begleichung aller offenen Forderungen einzustellen und erteilte Nutzungsrechte zu widerrufen.</p>
                  </div>
                </section>

                <section id="section-6" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§6 Leistungszeit und Verzug</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Termine und Fristen sind nur dann verbindlich, wenn sie ausdrücklich schriftlich als verbindlich vereinbart wurden.</p>
                    <p>Bei der Vereinbarung von Terminen und Fristen wird von der Voraussetzung ausgegangen, dass der Auftraggeber seinen Mitwirkungspflichten vollständig und rechtzeitig nachkommt. Verzögerungen durch den Auftraggeber führen zu einer entsprechenden Verschiebung der Termine und Fristen.</p>
                    <p>Der Auftragnehmer gerät mit seiner Leistung erst in Verzug, wenn er nach Eintritt der Fälligkeit vom Auftraggeber schriftlich gemahnt wurde und die Leistung nicht innerhalb einer angemessenen, mindestens zweiwöchigen Nachfrist erbracht hat.</p>
                  </div>
                </section>

                <section id="section-7" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§7 Abnahme</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Soweit eine Abnahme vereinbart ist, hat der Auftraggeber die Leistung nach Fertigstellung unverzüglich zu prüfen und schriftlich abzunehmen.</p>
                    <p>Die Abnahme gilt als erfolgt, wenn:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>der Auftraggeber die Abnahme nicht innerhalb von 14 Tagen nach Mitteilung über die Fertigstellung unter Angabe konkreter Mängel verweigert oder</li>
                      <li>der Auftraggeber mit der Nutzung der Leistung begonnen hat</li>
                    </ul>
                    <p>Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme.</p>
                  </div>
                </section>

                <section id="section-8" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§8 Gewährleistung</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen zum Zeitpunkt der Abnahme die vereinbarte Beschaffenheit aufweisen und frei von Rechtsmängeln sind.</p>
                    <p>Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme, sofern nicht gesetzlich zwingend längere Fristen vorgeschrieben sind.</p>
                    <p>Bei berechtigten Mängelrügen hat der Auftragnehmer nach seiner Wahl das Recht zur Nachbesserung oder Ersatzlieferung. Schlägt die Nacherfüllung zweimal fehl, kann der Auftraggeber nach seiner Wahl Minderung verlangen oder vom Vertrag zurücktreten.</p>
                    <p>Gewährleistungsansprüche bestehen nicht bei:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>unerheblichen Abweichungen von der vereinbarten Beschaffenheit</li>
                      <li>Mängeln, die auf unsachgemäße Behandlung, übermäßige Beanspruchung oder ungeeignete Betriebsmittel zurückzuführen sind</li>
                      <li>Mängeln, die durch Eingriffe des Auftraggebers oder Dritter entstanden sind</li>
                      <li>natürlichem Verschleiß</li>
                    </ul>
                  </div>
                </section>

                <section id="section-9" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§9 Haftung</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für die fahrlässige Verletzung von Leben, Körper oder Gesundheit.</p>
                    <p>Bei einfacher Fahrlässigkeit haftet der Auftragnehmer nur bei der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Die Haftung ist pro Schadensfall auf die Höhe der vereinbarten Vergütung, maximal jedoch auf 50.000 EUR begrenzt.</p>
                    <p>Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>
                    <p>Die vorstehenden Haftungsbeschränkungen gelten auch für die persönliche Haftung der Mitarbeiter, Vertreter und Erfüllungsgehilfen des Auftragnehmers.</p>
                  </div>
                </section>

                <section id="section-10" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§10 Urheberrechte und Nutzungsrechte</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Alle im Rahmen der Leistungserbringung entstehenden Arbeitsergebnisse, insbesondere Konzepte, Strategien, Dokumentationen, Codes, Designs und sonstige Werke, unterliegen dem Urheberrecht und bleiben geistiges Eigentum des Auftragnehmers.</p>
                    <p>Der Auftraggeber erhält nach vollständiger Bezahlung der vereinbarten Vergütung ein nicht ausschließliches, zeitlich und räumlich unbegrenztes Nutzungsrecht an den für ihn erstellten Arbeitsergebnissen für die vereinbarten Zwecke.</p>
                    <p>Eine Weitergabe oder Unterlizenzierung an Dritte bedarf der vorherigen schriftlichen Zustimmung des Auftragnehmers.</p>
                    <p>Die Übertragung weitergehender Rechte kann gesondert vereinbart werden und erfordert eine angemessene zusätzliche Vergütung.</p>
                    <p>Der Auftragnehmer behält sich das Recht vor, die Nutzungsrechte zu widerrufen und die weitere Nutzung der Arbeitsergebnisse zu untersagen, wenn der Auftraggeber mit der Zahlung der Vergütung in Verzug ist.</p>
                  </div>
                </section>

                <section id="section-11" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§11 Geheimhaltung</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Beide Parteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung bekannt gewordenen vertraulichen Informationen der anderen Partei geheim zu halten und nur für die Zwecke der Vertragserfüllung zu verwenden.</p>
                    <p>Als vertraulich gelten alle Informationen, die als solche gekennzeichnet sind oder deren Vertraulichkeit sich aus der Natur der Information oder den Umständen der Offenlegung ergibt.</p>
                    <p>Die Geheimhaltungsverpflichtung besteht auch nach Beendigung des Vertragsverhältnisses für die Dauer von 3 Jahren fort.</p>
                    <p>Ausgenommen von der Geheimhaltungsverpflichtung sind Informationen, die:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>bei Offenlegung bereits öffentlich bekannt waren oder nachträglich ohne Verstoß gegen diese Vereinbarung öffentlich bekannt werden</li>
                      <li>dem Empfänger bei Offenlegung bereits bekannt waren</li>
                      <li>von einem Dritten rechtmäßig und ohne Geheimhaltungsverpflichtung übermittelt wurden</li>
                      <li>aufgrund gesetzlicher Verpflichtungen oder behördlicher oder gerichtlicher Anordnung offengelegt werden müssen</li>
                    </ul>
                  </div>
                </section>

                <section id="section-12" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§12 Datenschutz</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der Auftragnehmer verpflichtet sich, bei der Verarbeitung personenbezogener Daten die Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG) einzuhalten.</p>
                    <p>Sofern der Auftragnehmer im Rahmen der Leistungserbringung personenbezogene Daten im Auftrag des Auftraggebers verarbeitet, wird ein separater Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO geschlossen.</p>
                    <p>Der Auftragnehmer wird geeignete technische und organisatorische Maßnahmen treffen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                  </div>
                </section>

                <section id="section-13" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§13 Änderungen und Ergänzungen</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Änderungen und Ergänzungen dieser AGB sowie des Vertrages bedürfen zu ihrer Wirksamkeit der Schriftform. Dies gilt auch für die Änderung dieser Schriftformklausel.</p>
                    <p>Nebenabreden, Zusicherungen oder Vereinbarungen, die über den Vertragsinhalt hinausgehen oder diesen ändern, bedürfen ebenfalls der Schriftform.</p>
                    <p>E-Mail-Kommunikation genügt der Schriftform, sofern nicht im Einzelfall eine qualifizierte elektronische Signatur erforderlich ist.</p>
                  </div>
                </section>

                <section id="section-14" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§14 Höhere Gewalt</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Ereignisse höherer Gewalt befreien die Parteien für die Dauer der Störung und im Umfang ihrer Wirkung von den Leistungsverpflichtungen.</p>
                    <p>Als höhere Gewalt gelten alle unvorhersehbaren Ereignisse oder solche Ereignisse, deren Auswirkungen auf die Vertragserfüllung von den Parteien nicht verschuldet sind, wie z.B. Naturkatastrophen, Krieg, Terrorismus, schwere Epidemien, behördliche Maßnahmen, Streik, Aussperrung.</p>
                    <p>Die Parteien verpflichten sich, im Rahmen des Zumutbaren die erforderlichen Informationen unverzüglich zu geben und ihre Verpflichtungen den veränderten Verhältnissen nach Treu und Glauben anzupassen.</p>
                  </div>
                </section>

                <section id="section-15" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§15 Abtretungsverbot</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Die Abtretung von Rechten und Pflichten aus dem Vertragsverhältnis durch den Auftraggeber bedarf der vorherigen schriftlichen Zustimmung des Auftragnehmers.</p>
                    <p>Der Auftragnehmer ist berechtigt, seine Rechte und Pflichten aus dem Vertrag ganz oder teilweise an verbundene Unternehmen oder qualifizierte Nachunternehmer abzutreten.</p>
                  </div>
                </section>

                <section id="section-16" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§16 Erfüllungsort und Gerichtsstand</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Erfüllungsort für alle Leistungen aus dem Vertragsverhältnis ist der Sitz des Auftragnehmers in Berlin.</p>
                    <p>Ist der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle sich aus dem Vertragsverhältnis unmittelbar oder mittelbar ergebenden Streitigkeiten Berlin.</p>
                    <p>Der Auftragnehmer ist jedoch auch berechtigt, am allgemeinen Gerichtsstand des Auftraggebers zu klagen.</p>
                  </div>
                </section>

                <section id="section-17" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§17 Anwendbares Recht</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Für alle Rechtsbeziehungen zwischen dem Auftragnehmer und dem Auftraggeber gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</p>
                  </div>
                </section>

                <section id="section-18" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§18 Salvatorische Klausel</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Sollten einzelne Bestimmungen dieser AGB oder des Vertrages ganz oder teilweise unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.</p>
                    <p>Anstelle der unwirksamen Bestimmung gilt eine wirksame Regelung als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt. Gleiches gilt für etwaige Regelungslücken.</p>
                  </div>
                </section>

                <section id="section-19" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§19 Vertragsbeendigung und Kündigung</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Beide Parteien können Dauerschuldverhältnisse mit einer Frist von drei Monaten zum Monatsende ordentlich kündigen, sofern nicht im Einzelvertrag eine andere Kündigungsfrist vereinbart wurde.</p>
                    <p>Bei Projekten mit fest definiertem Umfang ist eine ordentliche Kündigung ausgeschlossen.</p>
                    <p>Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>eine Partei wesentliche Vertragspflichten verletzt und diese Verletzung trotz Abmahnung nicht innerhalb einer angemessenen Frist abstellt</li>
                      <li>über das Vermögen einer Partei das Insolvenzverfahren eröffnet oder die Eröffnung mangels Masse abgelehnt wird</li>
                      <li>die Fortsetzung des Vertragsverhältnisses aus anderen Gründen unzumutbar ist</li>
                    </ul>
                    <p>Bei Beendigung des Vertragsverhältnisses hat der Auftraggeber alle bis dahin entstandenen Kosten und erbrachten Leistungen des Auftragnehmers zu vergüten.</p>
                    <p>Der Auftraggeber ist verpflichtet, alle vom Auftragnehmer zur Verfügung gestellten Unterlagen, Daten und Materialien zurückzugeben oder auf Verlangen zu vernichten.</p>
                    <p>Bereits eingeräumte Nutzungsrechte bleiben von einer Vertragsbeendigung unberührt, sofern die Vergütung vollständig gezahlt wurde.</p>
                  </div>
                </section>

                <section id="section-20" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§20 Rechnungsstellung und Zahlungsmodalitäten</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Rechnungen werden elektronisch per E-Mail im PDF-Format übermittelt. Der Auftraggeber kann jederzeit eine Rechnung in Papierform anfordern.</p>
                    <p>Bei laufenden Projekten erfolgt die Rechnungsstellung in der Regel monatlich zum Monatsende. Bei kleineren Projekten kann auch eine Gesamtrechnung nach Projektabschluss erstellt werden.</p>
                    <p>Zahlungen sind ausschließlich per Überweisung auf das in der Rechnung angegebene Bankkonto zu leisten.</p>
                    <p>Als Zeitpunkt der Zahlung gilt der Eingang des Betrages auf dem Konto des Auftragnehmers.</p>
                  </div>
                </section>

                <section id="section-21" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§21 Beauftragung Dritter</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der Auftragnehmer ist berechtigt, zur Erfüllung seiner vertraglichen Pflichten qualifizierte Dritte (Subunternehmer) einzusetzen.</p>
                    <p>Bei der Auswahl der Subunternehmer wird der Auftragnehmer die gebotene Sorgfalt walten lassen und nur solche Dritte einsetzen, die über die erforderliche Qualifikation und Zuverlässigkeit verfügen.</p>
                    <p>Der Auftragnehmer haftet für die Leistungen der Subunternehmer wie für eigenes Handeln.</p>
                    <p>Alle eingesetzten Subunternehmer werden auf die Einhaltung der Vertraulichkeits- und Datenschutzbestimmungen verpflichtet.</p>
                  </div>
                </section>

                <section id="section-22" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§22 Referenzen</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der Auftragnehmer ist berechtigt, den Auftraggeber nach Abschluss des Projekts als Referenzkunden zu benennen und den Namen sowie das Logo des Auftraggebers auf seiner Website und in Präsentationsmaterialien zu verwenden.</p>
                    <p>Die Darstellung erfolgt ausschließlich in Form einer Nennung ohne detaillierte Beschreibung der erbrachten Leistungen, sofern der Auftraggeber nicht ausdrücklich einer weitergehenden Darstellung zustimmt.</p>
                    <p>Der Auftraggeber kann der Verwendung als Referenz jederzeit schriftlich widersprechen. In diesem Fall wird der Auftragnehmer die Referenz umgehend von seiner Website und aus seinen Materialien entfernen.</p>
                  </div>
                </section>

                <section id="section-23" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§23 Mängelbeseitigung</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Mängel sind unverzüglich nach Entdeckung schriftlich unter genauer Beschreibung des Mangels anzuzeigen.</p>
                    <p>Der Auftragnehmer wird gemeldete Mängel mit angemessener Priorität behandeln. Die Dringlichkeit der Mängelbeseitigung richtet sich nach der Schwere der Beeinträchtigung und den Auswirkungen auf die Nutzbarkeit.</p>
                    <p>Soweit erforderlich, wird der Auftraggeber dem Auftragnehmer einen Zugang zu den betroffenen Systemen gewähren und bei der Fehleranalyse unterstützen.</p>
                  </div>
                </section>

                <section id="section-24" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§24 Auftragsänderungen</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Änderungen und Erweiterungen des vereinbarten Leistungsumfangs (Change Requests) bedürfen der schriftlichen Bestätigung durch beide Parteien.</p>
                    <p>Der Auftragnehmer wird die Auswirkungen der gewünschten Änderung auf Termine, Kosten und andere Projektparameter prüfen und dem Auftraggeber ein entsprechendes Änderungsangebot unterbreiten.</p>
                    <p>Änderungen werden erst nach schriftlicher Beauftragung durch den Auftraggeber umgesetzt. Die zusätzlichen Leistungen werden entsprechend den gültigen Konditionen vergütet.</p>
                    <p>Sofern sich durch die Änderung Verzögerungen ergeben, werden vereinbarte Termine entsprechend angepasst.</p>
                  </div>
                </section>

                <section id="section-25" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§25 Fremdleistungen</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Soweit für die Vertragserfüllung Fremdleistungen (z.B. Software-Lizenzen, Cloud-Dienste, externe Tools) erforderlich sind, wird der Auftragnehmer den Auftraggeber hierüber informieren.</p>
                    <p>Die Beschaffung solcher Fremdleistungen kann entweder durch den Auftraggeber oder im Namen des Auftraggebers durch den Auftragnehmer erfolgen.</p>
                    <p>Bei Beschaffung durch den Auftragnehmer werden die Kosten als durchlaufender Posten an den Auftraggeber weitergegeben. Der Auftragnehmer übernimmt keine Haftung für Leistungen und Mängel der Drittanbieter über die gesetzliche Haftung bei Geschäftsbesorgung hinaus.</p>
                  </div>
                </section>

                <section id="section-26" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§26 Wertersatz</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Bei Rücktritt vom Vertrag oder Widerruf hat der Auftraggeber Wertersatz für die bis zum Zeitpunkt des Rücktritts bzw. Widerrufs erbrachten Leistungen zu zahlen, sofern der Rücktritt bzw. Widerruf nicht auf einem vom Auftragnehmer zu vertretenden Umstand beruht.</p>
                    <p>Der Wertersatz bemisst sich nach dem Anteil der bis zum Rücktritt bzw. Widerruf erbrachten Leistungen an der Gesamtleistung und dem vereinbarten Gesamtpreis.</p>
                  </div>
                </section>

                <section id="section-27" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§27 Kommunikation</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Die Kommunikation zwischen den Parteien erfolgt primär per E-Mail und über vereinbarte Projektmanagement-Tools.</p>
                    <p>Beide Parteien verpflichten sich, auf projektrelevante Anfragen innerhalb von zwei Werktagen zu reagieren.</p>
                    <p>Für die Projektabwicklung werden feste Ansprechpartner auf beiden Seiten benannt, die als primäre Kommunikationskanäle dienen.</p>
                    <p>Regelmäßige Status-Updates und Abstimmungen werden in einem zu Projektbeginn festzulegenden Rhythmus durchgeführt.</p>
                  </div>
                </section>

                <section id="section-28" className="scroll-mt-24">
                  <h2 className="font-serif text-2xl text-foreground mb-4">§28 Schlussbestimmungen</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Diese AGB sind in deutscher Sprache abgefasst. Soweit zusätzlich Übersetzungen in anderen Sprachen zur Verfügung gestellt werden, ist im Zweifel die deutsche Fassung maßgeblich.</p>
                    <p>Mündliche Nebenabreden zu diesen AGB oder zum Vertrag bestehen nicht. Änderungen und Ergänzungen bedürfen zu ihrer Wirksamkeit der Schriftform.</p>
                    <p>Der Auftragnehmer behält sich das Recht vor, diese AGB mit einer Ankündigungsfrist von sechs Wochen zu ändern. Die geänderten AGB werden dem Auftraggeber per E-Mail zugesandt. Widerspricht der Auftraggeber der Geltung der neuen AGB nicht innerhalb von sechs Wochen nach Zugang der E-Mail, gelten die geänderten AGB als angenommen. Auf diese Folge wird der Auftraggeber in der E-Mail besonders hingewiesen.</p>
                  </div>
                </section>
              </div>

              <div className="mt-16 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  Letzte Aktualisierung: Januar 2026
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
