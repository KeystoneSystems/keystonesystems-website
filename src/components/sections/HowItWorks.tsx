"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Section";
import { PROCESS_STEPS } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#1A1A1B] py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.div variants={item}>
            <Eyebrow>The process</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-heading text-3xl sm:text-4xl font-black text-white max-w-xl leading-tight mt-2"
          >
            How our automation consulting process works.
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-[#C4BDB5] max-w-lg leading-relaxed">
            We don&apos;t start building until we understand the problem. Every engagement
            follows the same structured sequence — and once you&apos;re a client, the cycle
            keeps delivering.
          </motion.p>

          <motion.div variants={item} className="mt-14">

            {/* ── Desktop: horizontal cards with chevron separators ── */}
            <div className="hidden md:block">
              <div className="flex items-stretch">
                {PROCESS_STEPS.map(({ step, title, description, duration }, i) => (
                  <Fragment key={step}>
                    <div className="flex-1 min-w-0 border border-white/[0.09] rounded-2xl p-6 flex flex-col gap-4 bg-white/[0.04]">
                      {/* Step number + duration in same row */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-heading text-4xl font-black text-[#CD5C36]/20 leading-none select-none">
                          {String(step).padStart(2, "0")}
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#CD5C36]/60 border border-[#CD5C36]/20 rounded-full px-2.5 py-1 whitespace-nowrap">
                          {duration}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-heading text-sm font-bold text-white mb-2 leading-snug">
                          {title}
                        </h3>
                        <p className="text-sm text-[#C4BDB5] leading-relaxed">{description}</p>
                      </div>
                    </div>

                    {i < 3 && (
                      <div className="flex-shrink-0 w-8 flex items-center justify-center">
                        <ChevronRight className="w-5 h-5 text-[#CD5C36]/50" strokeWidth={1.5} />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>

              {/* Return loop — step 4 back to step 2 */}
              <div className="relative mt-2 overflow-visible" style={{ height: "60px" }}>
                {/*
                  Pure CSS half-ellipse arc. border-radius: 0 0 100% 100% on a div that spans
                  from step-2 centre (≈37%) to step-4 centre (≈88%) draws a smooth curved arc
                  with no SVG distortion. The pill label sits at the bottom of the curve.
                */}
                <div
                  className="absolute border-b border-l border-r border-[#CD5C36]/35"
                  style={{
                    left: "62.5%",
                    right: "12%",
                    top: 0,
                    bottom: 0,
                    borderRadius: "0 0 100% 100%",
                  }}
                />

                {/* Arrowhead pointing up at step 3 */}
                <div
                  className="absolute"
                  style={{
                    top: "-4px",
                    left: "calc(62.5% - 4px)",
                    width: 0,
                    height: 0,
                    borderLeft: "4px solid transparent",
                    borderRight: "4px solid transparent",
                    borderBottom: "7px solid rgba(205,92,54,0.45)",
                  }}
                />

                {/* Pill label sitting at the base of the arc */}
                <span
                  className="absolute bg-[#1A1A1B] border border-[#CD5C36]/30 rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase text-[#CD5C36]/65 whitespace-nowrap z-10"
                  style={{
                    left: "75%",
                    transform: "translate(-50%, 50%)",
                    bottom: 0,
                  }}
                >
                  ↻ Back to Build
                </span>
              </div>
            </div>

            {/* ── Mobile: vertical timeline ── */}
            <div className="md:hidden">
              {PROCESS_STEPS.map(({ step, title, description, duration }, i) => (
                <div key={step} className="flex gap-4">
                  {/* Left column: number circle + connecting line */}
                  <div className="flex flex-col items-center flex-shrink-0 w-9">
                    <div className="w-9 h-9 rounded-xl bg-[#CD5C36]/10 border border-[#CD5C36]/25 flex items-center justify-center">
                      <span className="font-heading text-sm font-black text-[#CD5C36]">{step}</span>
                    </div>
                    {i < 3 && (
                      <div className="w-px flex-1 bg-[#CD5C36]/15 my-2 min-h-[24px]" />
                    )}
                  </div>

                  {/* Right column: content */}
                  <div className={`flex-1 ${i < 3 ? "pb-6" : ""}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-heading text-base font-bold text-white">{title}</h3>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#CD5C36]/60 border border-[#CD5C36]/20 rounded-full px-2 py-0.5">
                        {duration}
                      </span>
                    </div>
                    <p className="text-sm text-[#C4BDB5] leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
