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
            follows the same structured sequence — so you always know what&apos;s next.
          </motion.p>

          {/* Steps */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#CD5C36]/30 to-transparent" />

            {PROCESS_STEPS.map(({ step, title, description, duration }) => (
              <motion.div key={step} variants={item} className="relative flex flex-col gap-4">
                {/* Step number */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#CD5C36]/10 border border-[#CD5C36]/20 flex items-center justify-center">
                    <span className="font-heading text-xl font-black text-[#CD5C36]">
                      {step}
                    </span>
                  </div>
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
        </motion.div>
      </div>
    </section>
  );
}
