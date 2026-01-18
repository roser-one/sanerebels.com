import { PageWrapper } from "@/components/page-wrapper"

export default function PrivacyPage() {
  return (
    <PageWrapper title="Privacy Policy">
      <div className="space-y-8">
        {/* 1. Data Controller */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">1. Data Controller</h2>
          <p className="text-foreground/80 mb-2">The data controller for this website is:</p>
          <div className="text-foreground/80">
            <p className="font-semibold text-foreground">KNUS GmbH</p>
            <p>Geschäftsführer: Simon Roser</p>
            <p>Renkenweg 7</p>
            <p>78464 Konstanz</p>
            <p>Deutschland</p>
            <p className="mt-2">
              E-Mail:{" "}
              <a href="mailto:hi@sanerebels.com" className="text-accent hover:underline">
                hi@sanerebels.com
              </a>
            </p>
            <p>UMSATZSTEUER-ID: DE344225955</p>
          </div>
        </section>

        {/* 2. General Information */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">2. General Information on Data Processing</h2>

          <h3 className="font-semibold text-foreground mt-4 mb-2">2.1 Scope of Personal Data Processing</h3>
          <p className="text-foreground/80">
            We process personal data of our users only to the extent necessary to provide a functional website and our content and services. The processing of personal data regularly takes place only with the consent of the user. An exception applies in cases where prior consent cannot be obtained for factual reasons and the processing of the data is permitted by law.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">2.2 Legal Basis for Processing Personal Data</h3>
          <p className="text-foreground/80">
            Insofar as we obtain consent from the data subject for the processing of personal data, Art. 6(1)(a) EU General Data Protection Regulation (GDPR) serves as the legal basis. When processing personal data that is necessary for the performance of a contract to which the data subject is a party, Art. 6(1)(b) GDPR serves as the legal basis. This also applies to processing operations that are necessary to carry out pre-contractual measures.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">2.3 Data Deletion and Storage Duration</h3>
          <p className="text-foreground/80">
            The personal data of the data subject will be deleted or blocked as soon as the purpose of storage no longer applies. Storage may also take place if this has been provided for by European or national legislators in EU regulations, laws or other provisions to which the controller is subject.
          </p>
        </section>

        {/* 3. Log Files */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">3. Provision of the Website and Creation of Log Files</h2>

          <h3 className="font-semibold text-foreground mt-4 mb-2">3.1 Description and Scope of Data Processing</h3>
          <p className="text-foreground/80 mb-2">
            Each time our website is accessed, our system automatically collects data and information from the computer system of the accessing computer. The following data is collected:
          </p>
          <ul className="list-disc list-inside text-foreground/80 space-y-1">
            <li>Information about the browser type and version used</li>
            <li>The user&apos;s operating system</li>
            <li>The user&apos;s Internet service provider</li>
            <li>The user&apos;s IP address</li>
            <li>Date and time of access</li>
            <li>Websites from which the user&apos;s system reaches our website</li>
            <li>Websites that are accessed by the user&apos;s system via our website</li>
          </ul>

          <h3 className="font-semibold text-foreground mt-4 mb-2">3.2 Legal Basis for Data Processing</h3>
          <p className="text-foreground/80">
            The legal basis for the temporary storage of data and log files is Art. 6(1)(f) GDPR.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">3.3 Purpose of Data Processing</h3>
          <p className="text-foreground/80">
            The temporary storage of the IP address by the system is necessary to enable delivery of the website to the user&apos;s computer. Storage in log files occurs to ensure the functionality of the website and to ensure the security of our information technology systems.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">3.4 Duration of Storage</h3>
          <p className="text-foreground/80">
            The data is deleted as soon as it is no longer necessary for the purpose for which it was collected. In the case of storage of data in log files, this is the case after seven days at the latest.
          </p>
        </section>

        {/* 4. Cal.com */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">4. Use of Cal.com</h2>
          <p className="text-foreground/80">
            We use Cal.com for appointment scheduling. When you book an appointment through our website, your data (name, email address, and other information you provide) will be processed by Cal.com. Please refer to Cal.com&apos;s privacy policy for information on how they handle your data:{" "}
            <a
              href="https://cal.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://cal.com/privacy
            </a>
          </p>
        </section>

        {/* 5. Rights */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">5. Rights of Data Subjects</h2>
          <p className="text-foreground/80 mb-4">
            If your personal data is processed, you are a data subject within the meaning of the GDPR and you have the following rights vis-à-vis the controller:
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">5.1 Right to Information</h3>
          <p className="text-foreground/80">
            You can request confirmation from the controller as to whether personal data concerning you is being processed by us.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">5.2 Right to Rectification</h3>
          <p className="text-foreground/80">
            You have the right to request the immediate rectification of incorrect personal data concerning you or to have incomplete personal data completed.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">5.3 Right to Restriction of Processing</h3>
          <p className="text-foreground/80">
            You may request the restriction of the processing of your personal data under certain conditions.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">5.4 Right to Erasure</h3>
          <p className="text-foreground/80">
            You have the right to request that the controller immediately delete personal data concerning you.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">5.5 Right to Data Portability</h3>
          <p className="text-foreground/80">
            You have the right to receive the personal data concerning you in a structured, commonly used and machine-readable format.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">5.6 Right to Object</h3>
          <p className="text-foreground/80">
            You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">5.7 Right to Withdraw Consent</h3>
          <p className="text-foreground/80">
            You have the right to withdraw your consent to data processing at any time.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">5.8 Right to Lodge a Complaint</h3>
          <p className="text-foreground/80">
            You have the right to lodge a complaint with a supervisory authority if you consider that the processing of personal data relating to you infringes the GDPR.
          </p>
        </section>

        {/* 6. Contact */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">6. Contact</h2>
          <p className="text-foreground/80 mb-4">
            If you have any questions about data protection or wish to exercise your rights as a data subject, please contact us at:
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
          <p className="text-foreground/60 mt-6 text-sm">Last updated: December 2025</p>
        </section>
      </div>
    </PageWrapper>
  )
}
