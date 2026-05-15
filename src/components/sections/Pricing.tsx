"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Section";
import { PRICING_TIERS } from "@/lib/constants";
import { CalPopupButton } from "@/components/ui/CalPopupButton";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#1A1A1B] py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.div variants={item}>
            <Eyebrow>Transparent pricing</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-heading text-3xl sm:text-4xl font-black text-white max-w-xl leading-tight"
          >
            No mystery. No open-ended billing.
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-[#C4BDB5] max-w-xl leading-relaxed">
            Every project is scoped and priced before work begins. You know exactly what
            you&apos;re getting and what it costs.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map(({ name, price, priceNote, description, includes, cta, highlight }) => (
              <motion.div
                key={name}
                variants={item}
                className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-200 ${
                  highlight
                    ? "bg-[#CD5C36] shadow-xl shadow-[#CD5C36]/20"
                    : "bg-white/5 border border-white/8 hover:border-white/15"
                }`}
              >
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-[#CD5C36] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full font-heading">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <p className={`text-[10px] font-bold tracking-widest uppercase font-heading mb-3 ${highlight ? "text-white/70" : "text-[#C4BDB5]"}`}>
                    {name}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-heading text-3xl font-black ${highlight ? "text-white" : "text-white"}`}>
                      {price}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${highlight ? "text-white/60" : "text-[#6B6B6C]"}`}>
                    {priceNote}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed ${highlight ? "text-white/80" : "text-[#C4BDB5]"}`}>
                  {description}
                </p>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {includes.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className={`flex-shrink-0 mt-0.5 ${highlight ? "text-white" : "text-[#CD5C36]"}`}
                      />
                      <span className={`text-sm ${highlight ? "text-white/80" : "text-[#C4BDB5]"}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <CalPopupButton
                  className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-xl py-3 px-5 text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    highlight
                      ? "bg-white text-[#CD5C36] hover:bg-[#F7F4F0]"
                      : "bg-white/8 text-white border border-white/15 hover:bg-white/12 hover:border-white/25"
                  }`}
                >
                  {cta}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </CalPopupButton>
              </motion.div>
            ))}
          </div>

          <motion.p variants={item} className="mt-8 text-center text-xs text-[#6B6B6C]">
            All prices in NZD. Discovery audit pricing will move to $1,500 NZD (credited toward Phase 1) once three engagements are complete.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
