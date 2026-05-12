"use client";

import { motion } from "framer-motion";
import { GitMerge, Bell, TrendingDown, Users } from "lucide-react";
import { Eyebrow } from "@/components/ui/Section";

const icons = { GitMerge, Bell, TrendingDown, Users };

const PAIN_POINTS = [
  {
    icon: "GitMerge" as const,
    text: "Your team copies data between tools that should talk to each other.",
  },
  {
    icon: "Bell" as const,
    text: "Leads come in and the follow-up depends on someone remembering.",
  },
  {
    icon: "TrendingDown" as const,
    text: "You added more tools but the admin somehow keeps growing.",
  },
  {
    icon: "Users" as const,
    text: "Growth keeps stalling because your best people are always full.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PainPoints() {
  return (
    <section id="pain-points" className="bg-[#F7F4F0] py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.div variants={item}>
            <Eyebrow>Sound familiar?</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-heading text-3xl sm:text-4xl font-black text-[#1A1A1B] max-w-2xl leading-tight"
          >
            The problems we hear on every first call.
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-[#6B6B6C] max-w-xl leading-relaxed"
          >
            If two of these hit close to home, it&apos;s worth a 30-minute conversation.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PAIN_POINTS.map(({ icon, text }) => {
              const Icon = icons[icon];
              return (
                <motion.div
                  key={text}
                  variants={item}
                  className="group bg-white rounded-2xl border border-[#E8E4DF] p-7 flex gap-5 hover:border-[#CD5C36]/30 hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#CD5C36]/8 flex items-center justify-center group-hover:bg-[#CD5C36]/15 transition-colors">
                    <Icon size={18} className="text-[#CD5C36]" />
                  </div>
                  <p className="text-[#1A1A1B] text-base leading-relaxed font-medium">{text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
