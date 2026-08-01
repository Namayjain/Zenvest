"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/faq";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="Investment FAQ"
            title={
              <>
                Answers before you{" "}
                <span className="text-gold-500">ask</span>.
              </>
            }
            description="A quick primer on how we work and what to expect. Have something specific in mind? Reach out and we'll respond within one business day."
          />

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-500">
              <HelpCircle size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-800">
                Still curious?
              </p>
              <p className="text-xs text-navy-600">
                Book a free 30-minute call, no strings attached.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={f.q}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white shadow-sm transition-all",
                    isOpen
                      ? "border-gold-300 shadow-soft"
                      : "border-navy-100 hover:border-navy-200"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors",
                          isOpen
                            ? "bg-navy-800 text-white"
                            : "bg-navy-50 text-navy-700"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold text-navy-900">
                        {f.q}
                      </span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        "shrink-0 text-navy-500 transition-transform",
                        isOpen && "rotate-180 text-gold-500"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-16 text-sm leading-relaxed text-navy-700">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
