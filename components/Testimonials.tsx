"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (delta: number) => {
    setDir(delta);
    setI((prev) => (prev + delta + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setI((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-50/60 via-white to-white"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by families across{" "}
              <span className="text-gold-500">India</span>.
            </>
          }
          description="Words from investors who have entrusted us with their goals — real names, edited for length."
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-navy-100 bg-white p-8 shadow-soft md:p-12">
            <Quote
              aria-hidden
              className="absolute -top-4 left-8 h-16 w-16 text-gold-200"
              strokeWidth={1.2}
            />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={t.name}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dir * 40 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <p className="font-display text-xl leading-relaxed text-navy-800 md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-600 font-display text-lg font-bold text-white ring-4 ring-gold-100">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-navy-900">
                      {t.name}
                    </p>
                    <p className="text-sm text-navy-600">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => {
                    setDir(idx > i ? 1 : -1);
                    setI(idx);
                  }}
                  className={
                    "h-2 rounded-full transition-all " +
                    (idx === i ? "w-8 bg-gold-500" : "w-2 bg-navy-200 hover:bg-navy-300")
                  }
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-700 shadow-sm transition-colors hover:border-navy-200 hover:text-navy-900"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white shadow-sm transition-colors hover:bg-navy-700"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
