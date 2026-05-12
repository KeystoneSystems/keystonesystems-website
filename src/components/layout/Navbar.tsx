"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, CAL_LINK } from "@/lib/constants";

const SECTION_IDS = ["hero", "pain-points", "how-it-works", "services", "why-keystone", "pricing", "booking", "faq"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Set<string>();

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
          // Pick topmost visible section
          const first = SECTION_IDS.find((s) => visible.has(s));
          if (first) setActiveSection(first);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1A1B]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={() => handleAnchorClick("#hero")}
          className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity"
        >
          <Image
            src="/logos/Logo_Inverted_Colours.png"
            alt="Keystone Systems"
            width={148}
            height={44}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleAnchorClick(link.href)}
                  className={`relative px-3 py-2 text-sm transition-colors duration-150 rounded-lg cursor-pointer ${
                    isActive ? "text-white" : "text-[#C4BDB5] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/8 rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={`https://cal.com/${CAL_LINK}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#CD5C36] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#A8432A] transition-colors duration-150 shadow-md shadow-[#CD5C36]/20"
          >
            Book a Call
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/8 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[#1A1A1B]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="text-left px-3 py-3 text-sm text-[#C4BDB5] hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`https://cal.com/${CAL_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#CD5C36] text-white text-sm font-semibold px-4 py-3 rounded-xl hover:bg-[#A8432A] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book a Free Discovery Call
              <ArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
