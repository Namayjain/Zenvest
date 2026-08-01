"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import Container from "./Container";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-navy">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-navy [background-size:36px_36px] opacity-[0.55]"
      />
      {/* Floating decorative orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-moss-100/60 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/70 px-3 py-1.5 text-xs font-medium text-navy-700 shadow-sm backdrop-blur"
          >
            <Sparkles size={14} className="text-gold-500" />
            AMFI Registered &middot; ARN-365239
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
          >
            Crafting{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-500">Wealth</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="absolute -bottom-1 left-0 h-2 w-full origin-left rounded-full bg-gold-200/70"
              />
            </span>
            <br />
            for Generations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-700"
          >
            Zenvest Wealth builds goal-first investment plans for Indian families
            &mdash; spanning mutual funds, fixed deposits, bonds, tax-saving,
            PMS/AIF and child-future planning. Transparent, disciplined, and always
            aligned to <em>your</em> outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-700"
            >
              Book a free consult
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-300 hover:bg-navy-50"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Feature bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {[
              { icon: ShieldCheck, text: "SEBI-regulated instruments only" },
              { icon: TrendingUp, text: "Data-backed, disciplined reviews" }
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white/70 px-4 py-3 text-sm text-navy-800 backdrop-blur"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-50 text-gold-500">
                  <Icon size={18} />
                </span>
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: layered card visual */}
        <div className="relative lg:col-span-5">
          <HeroVisual />
        </div>
      </Container>

    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      {/* Backdrop cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 shadow-soft"
      />
      <motion.div
        initial={{ opacity: 0, rotate: -6, y: 20 }}
        animate={{ opacity: 1, rotate: -6, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute inset-6 rounded-[1.5rem] bg-gradient-to-br from-gold-200 via-gold-100 to-white shadow-soft"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 3, y: 30 }}
        animate={{ opacity: 1, rotate: 3, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-10 overflow-hidden rounded-[1.25rem] bg-white shadow-soft ring-1 ring-navy-100"
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-navy-500">
                Portfolio Snapshot
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-navy-900">
                &#8377; 42,18,540
              </p>
            </div>
            <span className="rounded-full bg-moss-50 px-2.5 py-1 text-xs font-semibold text-moss-500">
              +18.4%
            </span>
          </div>

          {/* Sparkline */}
          <svg viewBox="0 0 200 80" className="mt-4 h-24 w-full">
            <defs>
              <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#228b37" stopOpacity="0.35" />
                <stop offset="1" stopColor="#228b37" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C20,55 30,58 45,45 C60,32 80,42 100,30 C120,18 140,25 160,15 C175,8 190,10 200,5 L200,80 L0,80 Z"
              fill="url(#hg)"
            />
            <path
              d="M0,60 C20,55 30,58 45,45 C60,32 80,42 100,30 C120,18 140,25 160,15 C175,8 190,10 200,5"
              fill="none"
              stroke="#228b37"
              strokeWidth="2"
            />
          </svg>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              { label: "Equity", value: "62%", color: "bg-navy-800" },
              { label: "Debt", value: "26%", color: "bg-gold-400" },
              { label: "Gold", value: "7%", color: "bg-gold-200" },
              { label: "Cash", value: "5%", color: "bg-moss-300" }
            ].map((a) => (
              <div
                key={a.label}
                className="flex items-center justify-between rounded-lg border border-navy-100 bg-white px-3 py-2 text-xs"
              >
                <span className="flex items-center gap-2">
                  <span className={`inline-block h-2 w-2 rounded-full ${a.color}`} />
                  {a.label}
                </span>
                <span className="font-semibold text-navy-800">{a.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto rounded-xl bg-navy-800 p-3 text-xs text-white/90">
            <p className="font-semibold text-white">Next Review</p>
            <p className="text-white/70">Quarterly &middot; Scheduled 12 Aug</p>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-10 hidden rounded-2xl bg-white p-3 shadow-soft ring-1 ring-navy-100 sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-moss-50 text-moss-500">
            <TrendingUp size={16} />
          </span>
          <div>
            <p className="text-[10px] text-navy-500">SIP XIRR</p>
            <p className="text-sm font-bold text-navy-900">14.8%</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-10 hidden rounded-2xl bg-white p-3 shadow-soft ring-1 ring-navy-100 sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold-50 text-gold-500">
            <ShieldCheck size={16} />
          </span>
          <div>
            <p className="text-[10px] text-navy-500">Goals on track</p>
            <p className="text-sm font-bold text-navy-900">6 of 7</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
