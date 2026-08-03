"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function CTA() {
  return (
    <section className="relative py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-10 text-white shadow-soft md:p-16"
        >
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-moss-400/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-200 backdrop-blur">
                Ready when you are
              </p>
              <h3 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Let&apos;s build{" "}
                <span className="text-gold-300">your plan</span>.
              </h3>
              <p className="mt-3 text-white/80 md:text-lg">
                Book a free discovery call. We&apos;ll listen first, share a written
                plan, and let you decide.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-gold-100"
            >
              Talk to an expert
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
