"use client";

import { motion } from "framer-motion";
import { Workflow, Users2, MessageSquare, Search, Wrench } from "lucide-react";
import { Eyebrow } from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";

const icons = { Workflow, Users2, MessageSquare, Search, Wrench };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.div variants={item}>
            <Eyebrow>What we build</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-heading text-3xl sm:text-4xl font-black text-[#1A1A1B] max-w-xl leading-tight"
          >
            AI &amp; automation services for NZ businesses.
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-[#6B6B6C] max-w-xl leading-relaxed">
            We don&apos;t sell tools — we design the outcome and build whatever gets you there.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon, title, service, description }) => {
              const Icon = icons[icon as keyof typeof icons];
              return (
                <motion.div
                  key={service}
                  variants={item}
                  className="group rounded-2xl border border-[#E8E4DF] p-7 hover:border-[#CD5C36]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default bg-[#F7F4F0]/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#CD5C36]/8 flex items-center justify-center mb-5 group-hover:bg-[#CD5C36]/15 transition-colors">
                    <Icon size={18} className="text-[#CD5C36]" />
                  </div>
                  <p className="text-[8px] font-bold tracking-[0.18em] uppercase text-[#C4BDB5] mb-2 font-heading">
                    {service}
                  </p>
                  <h3 className="font-heading text-base font-bold text-[#1A1A1B] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-[#6B6B6C] leading-relaxed">{description}</p>
                </motion.div>
              );
            })}

            {/* CTA card */}
            <motion.div
              variants={item}
              className="rounded-2xl bg-[#1A1A1B] border border-[#1A1A1B] p-7 flex flex-col justify-between"
            >
              <div>
                <p className="text-[8px] font-bold tracking-[0.18em] uppercase text-[#CD5C36] mb-2 font-heading">
                  Not sure which?
                </p>
                <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                  We&apos;ll tell you what fits.
                </h3>
                <p className="text-sm text-[#C4BDB5] leading-relaxed">
                  The discovery call maps your operation and tells you exactly where the
                  biggest leverage is. No obligation.
                </p>
              </div>
              <a
                href="#booking"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#CD5C36] hover:text-[#E07A58] transition-colors group"
              >
                Book a free call
                <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
