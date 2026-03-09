import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical as Flask } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Peptide Planner",
  description: "How Peptide Planner collects, uses, and protects your personal information.",
};

const EFFECTIVE_DATE = "March 9, 2025";
const UPDATED_DATE = "March 9, 2025";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#020617] dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#020617]/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="size-8 grid place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 text-white">
              <Flask className="size-4" />
            </div>
            <span className="font-semibold text-base">Peptide Planner</span>
          </Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition">
            ← Back to home
          </Link>
        </div>
      </header>

      {/* Compliance banner */}
      <div className="bg-red-50 dark:bg-red-950/30 border-b border-red-200/60 dark:border-red-900/40 text-red-600 dark:text-red-400 text-center text-xs font-medium py-2.5 px-4">
        Research use only — peptides are not for human consumption.
      </div>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 lg:py-16">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
            <span>Effective date: {EFFECTIVE_DATE}</span>
            <span>Last updated: {UPDATED_DATE}</span>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-table:text-sm">

          <Section id="overview" title="1. Overview">
            <p>
              Peptide Planner ("we," "us," or "our") operates the Peptide Planner mobile application and web
              application (collectively, the "Service"). This Privacy Policy explains what personal information we
              collect, how we use it, and the rights available to you.
            </p>
            <Callout variant="warning">
              <strong>Research use only.</strong> Peptide Planner is a research planning and documentation tool.
              Nothing in this application constitutes medical advice. All compounds referenced within the Service
              are intended for legitimate research purposes only and are not for human consumption.
            </Callout>
            <p>
              By creating an account or using the Service you agree to the terms of this Privacy Policy.
            </p>
          </Section>

          <Section id="information-we-collect" title="2. Information We Collect">
            <h3>2.1 Account Information</h3>
            <p>When you register we collect:</p>
            <ul>
              <li>Email address</li>
              <li>Password (stored as a one-way cryptographic hash — we cannot read it)</li>
              <li>Date of account creation</li>
            </ul>
            <p>We do not collect your legal name or phone number.</p>

            <h3>2.2 User-Submitted Research Data</h3>
            <p>
              All data in this category is <strong>voluntarily entered by you</strong> for the purpose of
              documenting and planning research. It is not independently verified or validated by us. This includes:
            </p>
            <ul>
              <li>
                <strong>Protocol records</strong> — compound names, scheduled quantities, timing, and
                administration site annotations entered by the user as research documentation
              </li>
              <li>
                <strong>Inventory records</strong> — compound names, quantities, vial counts, and dilution
                calculations
              </li>
              <li>
                <strong>Body weight entries</strong> — numerical values and optional personal notes
              </li>
              <li>
                <strong>Scheduling and cycle data</strong> — on/off cycle dates, dose frequency, and protocol names
              </li>
            </ul>
            <Callout variant="info">
              The Service is a note-taking and planning tool. A logged protocol record reflects information{" "}
              <em>entered</em> by a user; it does not constitute evidence of any real-world act. The Service has no
              means of verifying whether any entry corresponds to an actual event.
            </Callout>

            <h3>2.3 Automatically Collected Technical Data</h3>
            <p>When you use the Service we may automatically collect:</p>
            <ul>
              <li>Device type, operating system version, and app version</li>
              <li>IP address, used solely for security and abuse prevention</li>
              <li>General usage patterns in aggregate, anonymized form</li>
            </ul>
            <p>
              We do not use session recording, keystroke logging, or behavioral surveillance of any kind.
            </p>
          </Section>

          <Section id="how-we-use" title="3. How We Use Your Information">
            <table>
              <thead>
                <tr><th>Purpose</th><th>Legal basis</th></tr>
              </thead>
              <tbody>
                <tr><td>Provide and operate the Service</td><td>Contract performance</td></tr>
                <tr><td>Authenticate your account and maintain security</td><td>Contract performance / legitimate interest</td></tr>
                <tr><td>Process subscription payments</td><td>Contract performance</td></tr>
                <tr><td>Respond to support requests</td><td>Contract performance</td></tr>
                <tr><td>Send transactional communications (password reset, billing notices)</td><td>Contract performance</td></tr>
                <tr><td>Improve the Service using anonymous, aggregate analytics</td><td>Legitimate interest</td></tr>
                <tr><td>Comply with legal obligations</td><td>Legal obligation</td></tr>
              </tbody>
            </table>
            <p>
              We do <strong>not</strong> use your data for targeted advertising, sale or rental to third parties,
              or training of AI or machine learning models.
            </p>
          </Section>

          <Section id="third-parties" title="4. Third-Party Service Providers">
            <p>
              We work with a small number of third-party service providers who assist us in operating the Service.
              We share only the minimum data necessary for each function, and each provider is bound by a data
              processing agreement.
            </p>
            <table>
              <thead>
                <tr><th>Category</th><th>Purpose</th><th>Data involved</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cloud infrastructure</td>
                  <td>Application hosting and data storage</td>
                  <td>All user data</td>
                </tr>
                <tr>
                  <td>Payment processing</td>
                  <td>Subscription billing (web, iOS, Android)</td>
                  <td>Email address, transaction records</td>
                </tr>
              </tbody>
            </table>
            <p>
              We do not use advertising networks, social media trackers, or analytics platforms that share data
              with third parties.
            </p>
          </Section>

          <Section id="payments" title="5. Payment Processing">
            <p>
              Subscription payments are processed by third-party payment providers depending on your platform. We
              never store your full payment card details. Billing disputes and receipts are handled directly
              through the relevant payment platform:
            </p>
            <ul>
              <li><strong>Web</strong> — processed by our web payment provider</li>
              <li><strong>iOS</strong> — processed by Apple through the App Store</li>
              <li><strong>Android</strong> — processed by Google through the Play Store</li>
            </ul>
            <p>
              Your payment information is governed by the privacy policy of the applicable payment provider.
            </p>
          </Section>

          <Section id="retention" title="6. Data Retention">
            <table>
              <thead>
                <tr><th>Data type</th><th>Retention period</th></tr>
              </thead>
              <tbody>
                <tr><td>Account information</td><td>Until account deletion, plus 30 days</td></tr>
                <tr><td>Research protocol records</td><td>Until deleted by you, or upon account deletion</td></tr>
                <tr><td>Body weight entries</td><td>Until deleted by you, or upon account deletion</td></tr>
                <tr><td>IP and security logs</td><td>90 days, rolling</td></tr>
                <tr><td>Anonymized aggregate analytics</td><td>Indefinite (not linked to you)</td></tr>
              </tbody>
            </table>
            <p>
              When you delete your account we permanently delete all personal data associated with it within 30
              days, unless we are required by applicable law to retain it longer.
            </p>
          </Section>

          <Section id="security" title="7. Data Security">
            <p>We employ industry-standard security practices including:</p>
            <ul>
              <li>Encryption in transit (TLS 1.2 or higher)</li>
              <li>Encryption at rest for all stored user data</li>
              <li>Passwords hashed using a modern one-way algorithm</li>
              <li>Access controls that limit who can reach production data</li>
            </ul>
            <p>
              No method of storage or transmission is 100% secure. In the event of a breach affecting your
              personal data we will notify you as required by applicable law.
            </p>
          </Section>

          <Section id="your-rights" title="8. Your Rights">
            <p>
              Depending on where you live, you may have the following rights regarding your personal data. To
              exercise any of them, contact us at the address in Section 12.
            </p>

            <h3>All users</h3>
            <ul>
              <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong>Correction</strong> — request that inaccurate data be corrected</li>
              <li><strong>Deletion</strong> — request deletion of your account and all associated data</li>
              <li><strong>Portability</strong> — request your data in a structured, machine-readable format</li>
            </ul>

            <h3>EU / UK / EEA residents (GDPR / UK GDPR)</h3>
            <p>All of the above, plus:</p>
            <ul>
              <li><strong>Restriction</strong> — request that we limit how we process your data</li>
              <li>
                <strong>Objection</strong> — object to processing carried out on the basis of legitimate interest
              </li>
              <li>
                <strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time
                without affecting the lawfulness of prior processing
              </li>
              <li>
                You have the right to lodge a complaint with your local supervisory authority (e.g., your national
                data protection authority)
              </li>
            </ul>

            <h3>California residents (CCPA / CPRA)</h3>
            <ul>
              <li>Right to know what personal information is collected and how it is used</li>
              <li>Right to delete personal information</li>
              <li>Right to correct inaccurate personal information</li>
              <li>
                Right to opt out of the sale or sharing of personal information —{" "}
                <strong>we do not sell or share personal information</strong>
              </li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>

            <p>
              We will endeavor to honor equivalent rights for users in other jurisdictions under their applicable
              local law. We will respond to all verified requests within 30 days, or within the period required by
              your local law.
            </p>
          </Section>

          <Section id="international" title="9. International Data Transfers">
            <p>
              Peptide Planner serves a worldwide user base. Your data may be stored or processed in countries
              other than your own, including the United States. Those countries may have different data protection
              laws than your home country.
            </p>
            <p>
              Where required by law, we rely on appropriate transfer mechanisms — such as Standard Contractual
              Clauses for EU/UK transfers — to ensure your data receives an adequate level of protection.
            </p>
          </Section>

          <Section id="children" title="10. Children's Privacy">
            <p>
              The Service is intended for users 18 years of age and older. We do not knowingly collect personal
              information from anyone under 18. If we learn that we have collected data from a minor we will
              delete it promptly. If you believe we may have collected data from a minor, please contact us.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we make material changes we will notify
              you by email or via an in-app notice before the changes take effect. The "Last updated" date at the
              top of this page will always reflect the most recent revision. Continued use of the Service after
              notice constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section id="contact" title="12. Contact">
            <p>For any privacy-related questions, requests, or concerns:</p>
            <div className="not-prose rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-5 text-sm space-y-1">
              <div className="font-medium">Peptide Planner</div>
              <div>
                Email:{" "}
                <a
                  href="mailto:peptideplanner@outlook.com"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  peptideplanner@outlook.com
                </a>
              </div>
            </div>
            <p>We aim to respond to all enquiries within 5 business days.</p>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div>© {new Date().getFullYear()} Peptide Planner. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-slate-800 dark:hover:text-slate-200 transition">Home</Link>
            <Link href="/privacy" className="hover:text-slate-800 dark:hover:text-slate-200 transition">Privacy</Link>
            <a href="mailto:peptideplanner@outlook.com" className="hover:text-slate-800 dark:hover:text-slate-200 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ── */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-10 scroll-mt-20">
      <h2 className="text-xl font-semibold tracking-tight mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Callout({ variant, children }: { variant: "warning" | "info"; children: React.ReactNode }) {
  const styles =
    variant === "warning"
      ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300"
      : "bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-900/50 text-sky-700 dark:text-sky-300";
  return (
    <div className={`not-prose my-4 rounded-xl border px-4 py-3 text-sm leading-relaxed ${styles}`}>
      {children}
    </div>
  );
}
