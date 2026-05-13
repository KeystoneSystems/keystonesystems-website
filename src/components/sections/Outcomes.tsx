"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { Eyebrow } from "@/components/ui/Section";
import { OUTCOMES } from "@/lib/constants";

function StatCard({
  value,
  suffix,
  label,
  context,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  context: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { count, start } = useCountUp(value, 1600);

  useEffect(() => {
    if (inView) start();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="flex items-end gap-1">
        <span className="font-heading text-6xl sm:text-7xl font-black text-white leading-none tabular-nums">
          {count}
        </span>
        <span className="font-heading text-3xl font-black text-[#CD5C36] mb-1">{suffix}</span>
      </div>
      <p className="mt-3 font-heading text-sm font-bold text-white uppercase tracking-widest">
        {label}
      </p>
      <p className="mt-1 text-xs text-[#6B6B6C]">{context}</p>
    </motion.div>
  );
}

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-[#1A1A1B] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#CD5C36]/3" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CD5C36]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CD5C36]/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Eyebrow>The numbers</Eyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mt-2">
            What working with us looks like.
          </h2>
          <p className="mt-3 text-[#C4BDB5] max-w-md mx-auto text-sm leading-relaxed">
            Based on comparable NZ and AU automation engagements. We&apos;ll publish our
            own client data as engagements complete.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          {OUTCOMES.map(({ value, suffix, label, context }, i) => (
            <StatCard
              key={label}
              value={value}
              suffix={suffix}
              label={label}
              context={context}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
