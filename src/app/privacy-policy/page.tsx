import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Keystone Systems",
  description: "How Keystone Systems Limited collects, uses, and protects your personal information under the New Zealand Privacy Act 2020.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "Who We Are",
    content: (
      <>
        <p>
          Keystone Systems Limited (&ldquo;Keystone Systems&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a New Zealand registered company providing AI automation and systems integration consulting services. Our registered office is in New Zealand.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect personal information in accordance with the <strong>New Zealand Privacy Act 2020</strong> and its Information Privacy Principles (IPPs).
        </p>
        <p>
          By using our website (keystonesystems.co.nz) or engaging our services, you agree to the practices described in this policy.
        </p>
      </>
    ),
  },
  {
    heading: "Information We Collect",
    content: (
      <>
        <p>We collect personal information in the following ways:</p>
        <p><strong>Information you provide directly:</strong></p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Name, email address, and phone number when you book a discovery call via our scheduling tool</li>
          <li>Business name, size, and operational details you share during discovery calls or consultations</li>
          <li>Any information you provide in emails or other correspondence with us</li>
        </ul>
        <p className="mt-3"><strong>Information collected automatically:</strong></p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Website usage data (pages visited, time on site, referral source) via Google Analytics</li>
          <li>Technical data such as IP address, browser type, and device type — collected anonymously</li>
          <li>Cookies set by Google Analytics and Cal.com for session tracking and scheduling functionality</li>
        </ul>
        <p className="mt-3">
          We do not collect sensitive information (as defined by the Privacy Act 2020) unless it is directly relevant to a specific engagement and you have consented to its collection.
        </p>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    content: (
      <>
        <p>We use personal information only for the purposes for which it was collected or a directly related purpose:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>To schedule and manage discovery calls and client meetings</li>
          <li>To deliver consulting services and communicate project progress</li>
          <li>To send relevant follow-up information after enquiries</li>
          <li>To understand how our website is used and improve it</li>
          <li>To comply with our legal and regulatory obligations in New Zealand</li>
        </ul>
        <p className="mt-3">
          We do not use your personal information for unsolicited marketing. If you receive communications from us, it is because you initiated contact or opted in to updates.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Services",
    content: (
      <>
        <p>
          We use the following third-party services that may process your personal information. Each operates under their own privacy policy:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
          <li>
            <strong>Cal.com</strong> — our booking and scheduling tool. When you book a call, your name, email, and any notes you provide are stored by Cal.com. See{" "}
            <a href="https://cal.com/privacy" className="text-[#CD5C36] hover:underline" target="_blank" rel="noopener noreferrer">cal.com/privacy</a>.
          </li>
          <li>
            <strong>Google Analytics</strong> — website analytics. We use Google Analytics with IP anonymisation enabled. See{" "}
            <a href="https://policies.google.com/privacy" className="text-[#CD5C36] hover:underline" target="_blank" rel="noopener noreferrer">Google&rsquo;s Privacy Policy</a>.
          </li>
          <li>
            <strong>Vercel</strong> — our website is hosted on Vercel. Server logs may include IP addresses and request metadata. See{" "}
            <a href="https://vercel.com/legal/privacy-policy" className="text-[#CD5C36] hover:underline" target="_blank" rel="noopener noreferrer">Vercel&rsquo;s Privacy Policy</a>.
          </li>
          <li>
            <strong>AI and automation platforms</strong> — Where we deliver AI or automation services to clients, work may involve data being processed through commercial APIs including Anthropic (Claude) and OpenAI. Under their commercial API agreements, client data is not used to train AI models. Data is processed on their secure infrastructure and is subject to their respective privacy policies: see{" "}
            <a href="https://www.anthropic.com/legal/privacy" className="text-[#CD5C36] hover:underline" target="_blank" rel="noopener noreferrer">Anthropic&rsquo;s Privacy Policy</a>
            {" "}and{" "}
            <a href="https://openai.com/policies/privacy-policy" className="text-[#CD5C36] hover:underline" target="_blank" rel="noopener noreferrer">OpenAI&rsquo;s Privacy Policy</a>.
          </li>
        </ul>
        <p className="mt-3">
          We do not sell, rent, or share your personal information with any other third parties for their own marketing purposes.
        </p>
      </>
    ),
  },
  {
    heading: "Cookies",
    content: (
      <>
        <p>
          Our website uses cookies — small text files stored on your device — to support analytics and scheduling functionality. Cookies we use include:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li><strong>Google Analytics cookies</strong> — track website usage anonymously (e.g. _ga, _gid)</li>
          <li><strong>Cal.com cookies</strong> — support booking widget functionality</li>
        </ul>
        <p className="mt-3">
          You can disable cookies in your browser settings. Disabling analytics cookies will not affect your ability to use the website. Disabling Cal.com cookies may prevent the booking widget from functioning correctly.
        </p>
      </>
    ),
  },
  {
    heading: "Storage and Security",
    content: (
      <>
        <p>
          Personal information we hold is stored securely. We take reasonable steps to protect information from loss, misuse, unauthorised access, disclosure, alteration, or destruction. These steps include:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>Using reputable, security-certified third-party platforms (Vercel, Cal.com)</li>
          <li>Limiting access to personal information to personnel who need it to do their job</li>
          <li>Using encrypted communications (HTTPS) for all website traffic</li>
        </ul>
        <p className="mt-3">
          No data transmission over the internet is completely secure. While we take all reasonable steps, we cannot guarantee the absolute security of information transmitted to us.
        </p>
      </>
    ),
  },
  {
    heading: "Retention",
    content: (
      <p>
        We retain personal information only for as long as it is needed for the purpose it was collected, or as required by law. Client engagement records are typically retained for seven years in accordance with NZ business record-keeping requirements. Website analytics data is retained in accordance with Google Analytics&rsquo; default retention periods. Booking records are retained in accordance with Cal.com&rsquo;s data policies.
      </p>
    ),
  },
  {
    heading: "Your Rights Under the Privacy Act 2020",
    content: (
      <>
        <p>Under the New Zealand Privacy Act 2020, you have the right to:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li><strong>Access</strong> personal information we hold about you</li>
          <li><strong>Correct</strong> personal information we hold about you if it is inaccurate</li>
          <li><strong>Request deletion</strong> of personal information where we have no lawful reason to retain it</li>
          <li><strong>Complain</strong> to the Office of the Privacy Commissioner if you believe we have not handled your information appropriately</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:info@keystonesystems.co.nz" className="text-[#CD5C36] hover:underline">
            info@keystonesystems.co.nz
          </a>
          . We will respond within 20 working days as required by the Privacy Act 2020.
        </p>
        <p className="mt-3">
          If you are not satisfied with our response, you can contact the Office of the Privacy Commissioner at{" "}
          <a href="https://www.privacy.org.nz" className="text-[#CD5C36] hover:underline" target="_blank" rel="noopener noreferrer">
            privacy.org.nz
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. If changes are material, we will take reasonable steps to notify affected individuals. Continued use of our website or services after changes are posted constitutes acceptance of the updated policy.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Keystone Systems Limited — how we handle your personal information."
      effectiveDate="19 May 2026"
      sections={sections}
    />
  );
}
