"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, MapPin } from "lucide-react";
import { CAL_LINK } from "@/lib/constants";

export function BookingCTA() {
  return (
    <section id="booking" className="bg-[#CD5C36] py-24 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1A1A1B 1px, transparent 1px), linear-gradient(90deg, #1A1A1B 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-white/70 text-xs font-bold tracking-widest uppercase font-heading mb-4"
          >
            Ready to start?
          </motion.p>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="font-heading text-4xl sm:text-5xl font-black text-white leading-tight"
          >
            Find out in 30 minutes if automation is right for your business.
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="mt-6 text-white/80 max-w-xl mx-auto leading-relaxed"
          >
            We&apos;ll map your current operations, identify the biggest opportunities, and
            give you a clear picture of what&apos;s realistic — whether or not we end up
            working together.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="mt-10"
          >
            <a
              href={`https://cal.com/${CAL_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#1A1A1B] text-white rounded-xl px-8 py-4 text-base font-semibold hover:bg-[#1A1A1B]/90 transition-all duration-150 shadow-xl shadow-black/20"
            >
              Book a Free Discovery Call
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Reassurance chips */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } } }}
            className="mt-6 flex flex-wrap justify-center gap-6 text-white/60 text-xs"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={12} /> 30 minutes
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={12} /> No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} /> NZ-based team
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
