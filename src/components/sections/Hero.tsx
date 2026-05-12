"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CAL_LINK, TRUST_SIGNALS } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh bg-[#1A1A1B] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#CD5C36 1px, transparent 1px), linear-gradient(90deg, #CD5C36 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Terracotta glow — top right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#CD5C36] opacity-[0.06] blur-[120px] pointer-events-none" />
      {/* Terracotta glow — bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#CD5C36] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-6">
          <span className="block w-0.5 h-4 bg-[#CD5C36] rounded-full" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#CD5C36] font-heading">
            AI & Automation Consulting · New Zealand
          </span>
          <span className="block w-0.5 h-4 bg-[#CD5C36] rounded-full" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.12)}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl"
        >
          Your team shouldn&apos;t be the glue{" "}
          <span className="text-[#CD5C36]">between your systems.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.24)}
          className="mt-6 text-lg sm:text-xl text-[#C4BDB5] max-w-2xl leading-relaxed"
        >
          We identify where your business is losing time to manual work — and build
          the automation that removes it. Fixed scope. Clean handover.{" "}
          <span className="text-white font-medium">You own everything we build.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.36)}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            href={`https://cal.com/${CAL_LINK}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            className="group w-full sm:w-auto shadow-lg shadow-[#CD5C36]/20 hover:shadow-[#CD5C36]/40 transition-all"
          >
            Book a Free Discovery Call
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg" className="w-full sm:w-auto">
            See How It Works
          </Button>
        </motion.div>

        {/* Micro-copy */}
        <motion.p {...fadeUp(0.44)} className="mt-4 text-xs text-[#6B6B6C]">
          30 minutes · No obligation · No pitch deck · NZ-based team
        </motion.p>

        {/* Trust signals */}
        <motion.div
          {...fadeUp(0.52)}
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#CD5C36]" />
              <span className="text-xs text-[#C4BDB5] tracking-wide">{signal}</span>
            </div>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div {...fadeUp(0.6)} className="mt-16 opacity-40">
          <Image
            src="/logos/Logo_Inverted_Colours.png"
            alt="Keystone Systems"
            width={140}
            height={42}
            className="h-8 w-auto object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#pain-points"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6B6B6C] hover:text-[#CD5C36] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
