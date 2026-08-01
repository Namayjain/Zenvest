"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, LineChart, Sparkles } from "lucide-react";
import Container from "./Container";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    text: "No hidden fees, no product-push. Every recommendation is explained in plain language with all charges disclosed upfront."
  },
  {
    icon: LineChart,
    title: "Data-backed",
    text: "Portfolios are stress-tested across cycles, benchmarks, and taxation before they reach your plan."
  },
  {
    icon: HeartHandshake,
    title: "Long-term relationships",
    text: "We measure success by families served across generations — not commissions earned this quarter."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-navy-50/40 to-white"
      />
      <Container className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left: heading + arrow */}
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-500"
          >
            <Sparkles size={12} className="text-gold-500" />
            Why choose us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.05] text-navy-900 md:text-5xl"
          >
            The{" "}
            <span className="relative inline-block">
              <span className="italic text-gold-500">why</span>
              <svg
                aria-hidden
                viewBox="0 0 100 12"
                className="absolute left-0 -bottom-2 w-full text-gold-300"
              >
                <path
                  d="M2 10 Q 50 -4 98 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            behind your money.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-md text-navy-700"
          >
            We don't just execute trades — we build a philosophy around your
            family's financial life. Three commitments shape everything we do.
          </motion.p>

          {/* Curly arrow pointing to the cards on the right */}
          <motion.svg
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewBox="0 0 220 120"
            className="mt-8 hidden h-28 w-56 text-gold-400 lg:block"
            fill="none"
          >
            <path
              d="M10 90 C 60 90, 90 30, 160 40 C 190 45, 195 60, 200 55"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 6"
            />
            <path
              d="M198 48 L210 55 L200 65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>

        {/* Right: 3 horizontal cards, stacked on mobile */}
        <div className="space-y-5 lg:col-span-7">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex items-start gap-5 rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-200 hover:shadow-soft md:p-7"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-100 to-gold-50 text-gold-500 ring-1 ring-gold-200/60">
                <r.icon size={26} />
              </span>
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-bold text-navy-100 md:text-4xl">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy-900 md:text-2xl">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-2 leading-relaxed text-navy-700">{r.text}</p>
              </div>
              <span
                aria-hidden
                className="absolute right-6 top-6 h-2 w-2 rounded-full bg-gold-300 transition-transform group-hover:scale-150"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
