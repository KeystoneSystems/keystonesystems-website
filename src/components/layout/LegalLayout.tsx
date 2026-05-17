import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface Section {
  heading: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: Section[];
}

export function LegalLayout({ title, subtitle, effectiveDate, sections }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#F7F4F0]">
        {/* Header */}
        <div className="bg-[#1A1A1B] pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#C4BDB5] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
            <h1 className="font-montserrat font-extrabold text-4xl text-white mb-3">{title}</h1>
            <p className="text-[#C4BDB5] text-base mb-2">{subtitle}</p>
            <p className="text-[#6B6B6C] text-sm">Effective date: {effectiveDate}</p>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-sm border border-[#E8E3DC] p-8 md:p-12">
            {sections.map((section, i) => (
              <div key={i} className={i > 0 ? "mt-10 pt-10 border-t border-[#E8E3DC]" : ""}>
                <h2 className="font-montserrat font-bold text-xl text-[#1A1A1B] mb-4">
                  {i + 1}. {section.heading}
                </h2>
                <div className="text-[#6B6B6C] text-sm leading-relaxed space-y-3">
                  {section.content}
                </div>
              </div>
            ))}

            <div className="mt-10 pt-10 border-t border-[#E8E3DC]">
              <p className="text-[#6B6B6C] text-sm">
                Questions about this document? Contact us at{" "}
                <a
                  href="mailto:info@keystonesystems.co.nz"
                  className="text-[#CD5C36] hover:underline"
                >
                  info@keystonesystems.co.nz
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
