"use client";

import { motion } from "framer-motion";
import { Cpu, ClipboardList, ShieldCheck, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/ui/Section";
import { DIFFERENTIATORS } from "@/lib/constants";

const icons = { Cpu, ClipboardList, ShieldCheck, MapPin };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyKeystone() {
  return (
    <section id="why-keystone" className="bg-[#F7F4F0] py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
          >
            <motion.div variants={item}>
              <Eyebrow>Why Keystone</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              className="font-heading text-3xl sm:text-4xl font-black text-[#1A1A1B] leading-tight"
            >
              Not another IT vendor with a tool to sell.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[#6B6B6C] leading-relaxed">
              Most automation vendors come from a software or IT background — they understand
              the tools, but not always the operation. Will&apos;s background is mechatronics
              engineering. Before recommending any tool, he maps how the whole system fits
              together.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-[#6B6B6C] leading-relaxed">
              The PMP qualification adds structured delivery: defined scope, clear milestones,
              written documentation, and a proper close at the end. No scope drift. No rough
              handovers.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-8 pl-5 border-l-2 border-[#CD5C36]"
            >
              <p className="text-[#1A1A1B] font-medium italic leading-relaxed">
                &ldquo;We are not building dependency. Every engagement ends with you owning
                what was built, documented, and trained to use.&rdquo;
              </p>
              <p className="mt-2 text-sm text-[#6B6B6C]">— Will Ferguson, Founder</p>
            </motion.div>
          </motion.div>

          {/* Right: differentiator cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {DIFFERENTIATORS.map(({ icon, title, description }) => {
              const Icon = icons[icon as keyof typeof icons];
              return (
                <motion.div
                  key={title}
                  variants={item}
                  className="bg-white rounded-2xl border border-[#E8E4DF] p-6 hover:border-[#CD5C36]/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#CD5C36]/8 flex items-center justify-center mb-4">
                    <Icon size={16} className="text-[#CD5C36]" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-[#1A1A1B] mb-2">{title}</h3>
                  <p className="text-sm text-[#6B6B6C] leading-relaxed">{description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
