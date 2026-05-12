import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1B] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logos/Logo_Horizontal.png"
              alt="Keystone Systems"
              width={160}
              height={48}
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm text-[#C4BDB5] leading-relaxed max-w-xs">
              {SITE.tagline}
            </p>
            <p className="text-xs text-[#6B6B6C]">
              Keystone Systems Limited — Registered in New Zealand
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#6B6B6C] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#C4BDB5] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#6B6B6C] mb-4">
              Get in Touch
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-[#C4BDB5] hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-[#CD5C36] flex-shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-[#C4BDB5] hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-[#CD5C36] flex-shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#C4BDB5] hover:text-white transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#CD5C36] flex-shrink-0">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#6B6B6C]">
            © {new Date().getFullYear()} Keystone Systems Limited · New Zealand
          </p>
          <p className="text-xs text-[#6B6B6C]">
            AI & Automation Consulting for NZ Small Business
          </p>
        </div>
      </div>
    </footer>
  );
}
