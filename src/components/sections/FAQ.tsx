"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Eyebrow } from "@/components/ui/Section";
import { FAQS } from "@/lib/constants";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border-b border-[#E8E4DF] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="font-heading text-sm sm:text-base font-bold text-[#1A1A1B] group-hover:text-[#CD5C36] transition-colors leading-snug">
          {question}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${open ? "bg-[#CD5C36] border-[#CD5C36]" : "border-[#E8E4DF] group-hover:border-[#CD5C36]"}`}>
          {open
            ? <Minus size={13} className="text-white" />
            : <Plus size={13} className="text-[#CD5C36]" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#6B6B6C] leading-relaxed max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1A1A1B] leading-tight mt-1">
              Common questions.
            </h2>
            <p className="mt-4 text-[#6B6B6C] leading-relaxed text-sm">
              If your question isn&apos;t here, the discovery call is the best place to ask.
              No question too basic.
            </p>
            <a
              href="#booking"
              className="mt-6 inline-flex items-center text-sm font-semibold text-[#CD5C36] hover:text-[#A8432A] transition-colors group"
            >
              Book a call instead
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            {FAQS.map(({ question, answer }, i) => (
              <FAQItem key={question} question={question} answer={answer} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
