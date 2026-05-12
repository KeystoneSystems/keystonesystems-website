import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
  openGraph: {
    title: "Keystone Systems — AI & Automation Consulting for NZ Small Business",
    description:
      "We help NZ SMEs recover hours lost to manual processes. Fixed-fee projects, clean handover, you own everything we build.",
    url: "https://keystonesystems.co.nz",
    siteName: "Keystone Systems",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone Systems — AI & Automation for NZ SMEs",
    description: "Fixed-fee automation projects. Clean handover. You own everything we build.",
  },
  metadataBase: new URL("https://keystonesystems.co.nz"),
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
