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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {/* Forward connector line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#CD5C36]/30 to-transparent" />

            {PROCESS_STEPS.map(({ step, title, description, duration, badge }) => (
              <motion.div key={step} variants={item} className="relative flex flex-col gap-4">
                {/* Step number + badge */}
                <div className="flex flex-col items-start gap-1.5">
                  <div className="w-14 h-14 rounded-2xl bg-[#CD5C36]/10 border border-[#CD5C36]/20 flex items-center justify-center">
                    <span className="font-heading text-xl font-black text-[#CD5C36]">
                      {step}
                    </span>
                  </div>
                  {badge === "one-time" && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/30">
                      One-time
                    </span>
                  )}
                  {badge === "repeating" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#CD5C36]/10 border border-[#CD5C36]/30 text-[#CD5C36]/70">
                      ↻ Repeating
                    </span>
                  )}
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

          {/* Return arc — desktop only */}
          <motion.div variants={item} className="hidden md:block mt-1">
            <svg
              viewBox="0 0 1000 68"
              preserveAspectRatio="none"
              className="w-full"
              height="68"
            >
              <defs>
                <marker
                  id="loop-arrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="2"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path
                    d="M 7 0 L 0 4 L 7 8"
                    fill="none"
                    stroke="#CD5C36"
                    strokeOpacity="0.65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>
              {/* Arc from step 4 centre (87.5%) back to step 2 centre (37.5%) */}
              <path
                d="M 875 10 C 875 58, 375 58, 375 10"
                fill="none"
                stroke="#CD5C36"
                strokeWidth="1.5"
                strokeDasharray="8 5"
                strokeOpacity="0.45"
                markerEnd="url(#loop-arrow)"
              />
              <text
                x="625"
                y="64"
                textAnchor="middle"
                fill="#CD5C36"
                fontSize="9"
                letterSpacing="3"
                opacity="0.55"
                fontWeight="700"
              >
                BACK TO AUDIT
              </text>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
