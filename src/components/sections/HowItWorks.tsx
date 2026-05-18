"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Section";
import { PROCESS_STEPS } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
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
            className="font-heading text-3xl sm:text-4xl font-black text-white max-w-xl leading-tight"
          >
            How our automation consulting process works.
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-[#C4BDB5] max-w-lg leading-relaxed">
            We don&apos;t start building until we understand the problem. Every engagement
            follows the same structured sequence — and once you&apos;re a client, the cycle
            keeps delivering.
          </motion.p>

          {/* Steps */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Solid connector line through step number centres — desktop only */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-[#CD5C36]/40" />

            {PROCESS_STEPS.map(({ step, title, description, duration }) => (
              <motion.div
                key={step}
                variants={item}
                className="relative bg-white/[0.05] border border-[#CD5C36]/20 rounded-2xl p-5 flex flex-col gap-4"
              >
                {/* Step number */}
                <div className="w-14 h-14 rounded-2xl bg-[#CD5C36]/10 border border-[#CD5C36]/25 flex items-center justify-center">
                  <span className="font-heading text-xl font-black text-[#CD5C36]">{step}</span>
                </div>

                {/* Duration pill */}
                <span className="inline-flex w-fit items-center px-2.5 py-1 rounded-full bg-[#CD5C36]/10 border border-[#CD5C36]/20 text-[10px] font-bold tracking-widest uppercase text-[#CD5C36]">
                  {duration}
                </span>

                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-[#C4BDB5] leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Return loop: step 4 → step 2 — desktop only */}
          <motion.div variants={item} className="hidden md:block mt-0 relative" style={{ height: "60px" }}>
            {/*
              Axis-aligned U-path from step 4 (87.5%) down, across, and up to step 2 (37.5%).
              vectorEffect="non-scaling-stroke" keeps the stroke 1.5px on screen even though
              preserveAspectRatio="none" stretches the coordinate system non-uniformly.
              Axis-aligned lines don't distort visually — no curves, no diagonals.
            */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 100 60"
              preserveAspectRatio="none"
            >
              <path
                d="M 87.5 2 L 87.5 48 L 37.5 48 L 37.5 2"
                fill="none"
                stroke="#CD5C36"
                strokeOpacity="0.45"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Arrowhead pointing up into step 2 — CSS triangle avoids SVG marker distortion */}
            <div
              className="absolute opacity-50"
              style={{
                top: "-3px",
                left: "calc(37.5% - 4px)",
                width: 0,
                height: 0,
                borderLeft: "4px solid transparent",
                borderRight: "4px solid transparent",
                borderBottom: "7px solid #CD5C36",
              }}
            />

            {/* Label centred between step 2 and step 4 */}
            <span
              className="absolute text-[9px] font-bold tracking-[0.18em] uppercase text-[#CD5C36] whitespace-nowrap opacity-50"
              style={{ left: "62.5%", transform: "translateX(-50%)", bottom: "6px" }}
            >
              Back to Audit
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
