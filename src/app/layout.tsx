import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { JsonLd } from "@/components/ui/JsonLd";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keystone Systems — AI & Automation Consulting for NZ Small Business",
  description:
    "We help NZ SMEs recover hours lost to manual processes. Fixed-fee projects, clean handover, you own everything we build. Book a free discovery call.",
  keywords: [
    "AI automation consulting New Zealand",
    "workflow automation NZ",
    "n8n automation New Zealand",
    "GoHighLevel CRM setup NZ",
    "small business automation New Zealand",
    "AI chatbot New Zealand",
    "business process automation NZ",
    "systems integration New Zealand",
    "automation consultant Auckland",
    "NZ SME automation",
  ],
  openGraph: {
    title: "Keystone Systems — AI & Automation Consulting for NZ Small Business",
    description:
      "We help NZ SMEs recover hours lost to manual processes. Fixed-fee projects, clean handover, you own everything we build.",
    url: "https://keystonesystems.co.nz",
    siteName: "Keystone Systems",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Keystone Systems — AI & Automation Consulting for NZ Small Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone Systems — AI & Automation for NZ SMEs",
    description: "Fixed-fee automation projects. Clean handover. You own everything we build.",
    images: ["/opengraph-image"],
  },
  metadataBase: new URL("https://keystonesystems.co.nz"),
  alternates: {
    canonical: "https://keystonesystems.co.nz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JEW4SR68Z8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JEW4SR68Z8');
          `}
        </Script>
      </body>
    </html>
  );
}
