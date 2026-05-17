import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Keystone Systems",
  description: "Terms governing your use of the Keystone Systems website and engagement of our AI automation and consulting services.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "About These Terms",
    content: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Keystone Systems website at keystonesystems.co.nz and your engagement of services provided by Keystone Systems Limited (&ldquo;Keystone Systems&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in New Zealand.
        </p>
        <p>
          By using our website or engaging our services, you agree to these Terms. If you do not agree, please do not use our website or services.
        </p>
        <p>
          For client engagements, a separate Statement of Work or Service Agreement will be provided that governs the specific terms of delivery, pricing, and scope. In the event of a conflict between these Terms and a signed service agreement, the signed agreement takes precedence.
        </p>
      </>
    ),
  },
  {
    heading: "Use of Our Website",
    content: (
      <>
        <p>You may use our website for lawful purposes only. You agree not to:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>Use the website in any way that violates applicable New Zealand law or regulation</li>
          <li>Transmit any unsolicited commercial communications or spam</li>
          <li>Attempt to gain unauthorised access to any part of the website or its infrastructure</li>
          <li>Use automated tools to scrape, crawl, or extract content from the website without our written consent</li>
          <li>Impersonate us or misrepresent your affiliation with us</li>
        </ul>
        <p className="mt-3">
          We reserve the right to restrict or terminate access to the website for any user who violates these Terms.
        </p>
      </>
    ),
  },
  {
    heading: "Our Services",
    content: (
      <>
        <p>
          Keystone Systems provides AI automation consulting, workflow automation implementation, CRM setup, and related systems integration services to New Zealand small and medium businesses.
        </p>
        <p>
          All services are delivered under a defined scope agreed in writing prior to commencement of any paid work. We do not begin billable work without a signed or written acceptance of a proposal or Statement of Work.
        </p>
        <p>
          Discovery calls and initial audits are provided free of charge as described on our website. We reserve the right to modify the terms of this offer at any time, but will honour the terms applicable at the time of booking.
        </p>
      </>
    ),
  },
  {
    heading: "Intellectual Property",
    content: (
      <>
        <p><strong>Your deliverables:</strong></p>
        <p>
          Intellectual property rights in all custom automations, integrations, configurations, documentation, and other deliverables created specifically for you in the course of a paid engagement are assigned to you upon receipt of full payment. This means you own what we build for you.
        </p>
        <p className="mt-3"><strong>Our pre-existing materials:</strong></p>
        <p>
          We retain ownership of our pre-existing methodologies, templates, frameworks, tools, and general know-how. Where we incorporate these into your deliverables, we grant you a perpetual, royalty-free licence to use them for your own business purposes.
        </p>
        <p className="mt-3"><strong>Website content:</strong></p>
        <p>
          All content on this website — including text, images, logos, and design — is owned by or licenced to Keystone Systems Limited. You may not reproduce, distribute, or use any website content without our prior written consent.
        </p>
      </>
    ),
  },
  {
    heading: "Payment Terms",
    content: (
      <>
        <p>
          Payment terms for engagements are set out in the relevant proposal or service agreement. Unless otherwise agreed in writing:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>Invoices are issued in New Zealand Dollars (NZD) and are exclusive of GST where applicable</li>
          <li>Payment is due within 14 days of invoice date unless otherwise specified</li>
          <li>We reserve the right to pause or suspend work if payment is overdue by more than 14 days</li>
          <li>Retainer fees are billed monthly in advance</li>
        </ul>
        <p className="mt-3">
          For fixed-fee projects, payment is typically structured as a deposit before work commences and a final payment upon delivery, as agreed in the proposal.
        </p>
      </>
    ),
  },
  {
    heading: "Confidentiality",
    content: (
      <>
        <p>
          We treat all information shared with us in the course of an engagement as confidential. We will not disclose your business information, operational details, or client data to any third party without your consent, except as required by law.
        </p>
        <p>
          We may reference the nature of work undertaken for you (e.g. &ldquo;workflow automation for a trades business&rdquo;) in marketing or case study materials unless you request otherwise in writing.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Tools and Platforms",
    content: (
      <>
        <p>
          Many of our services involve configuring or implementing third-party platforms (such as n8n, Make, Zapier, GoHighLevel, or Claude API) on your behalf. By engaging us to implement these tools, you acknowledge:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>You are responsible for maintaining your own accounts and licences with these platforms</li>
          <li>Third-party platforms operate under their own terms of service and pricing, which are subject to change</li>
          <li>We are not responsible for outages, feature changes, or pricing changes by third-party platforms</li>
          <li>Any API usage costs incurred via third-party platforms are your responsibility unless explicitly included in your quoted scope</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by New Zealand law (including the Consumer Guarantees Act 1993 and the Fair Trading Act 1986 where applicable):
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
          <li>
            Our total liability to you for any claim arising out of or relating to our services or these Terms will not exceed the total fees paid by you for the specific service giving rise to the claim in the preceding three months.
          </li>
          <li>
            We are not liable for any indirect, consequential, incidental, or special loss or damage — including loss of revenue, loss of profit, or business interruption — even if we have been advised of the possibility of such loss.
          </li>
          <li>
            We are not liable for outcomes resulting from your business decisions made based on our recommendations, or for the performance of third-party platforms we implement on your behalf.
          </li>
        </ul>
        <p className="mt-3">
          Nothing in these Terms excludes liability for fraud, wilful misconduct, or any liability that cannot lawfully be excluded under New Zealand consumer protection legislation.
        </p>
      </>
    ),
  },
  {
    heading: "Termination",
    content: (
      <>
        <p>
          Either party may terminate a service engagement by providing written notice as specified in the relevant service agreement. In the absence of a specific agreement:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>Either party may terminate with 14 days&rsquo; written notice</li>
          <li>You are responsible for fees for work completed up to the date of termination</li>
          <li>Upon termination, we will provide you with all deliverables completed to that point</li>
        </ul>
        <p className="mt-3">
          We reserve the right to terminate a service engagement immediately if you breach these Terms or your payment obligations and do not remedy the breach within 7 days of written notice.
        </p>
      </>
    ),
  },
  {
    heading: "Governing Law and Disputes",
    content: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the laws of New Zealand. Both parties submit to the exclusive jurisdiction of the New Zealand courts for any dispute arising out of or in connection with these Terms.
        </p>
        <p>
          Before initiating any formal legal proceedings, both parties agree to attempt to resolve disputes through good faith negotiation for a period of at least 20 working days.
        </p>
      </>
    ),
  },
  {
    heading: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. When we do, we will update the effective date at the top of this page. Material changes will be communicated to active clients. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms. We recommend reviewing this page periodically.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Keystone Systems Limited — terms governing our website and services."
      effectiveDate="17 May 2025"
      sections={sections}
    />
  );
}
