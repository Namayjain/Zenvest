"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FallbackImage from "./FallbackImage";
import { services } from "@/lib/services";

const colorMap: Record<string, { ring: string; tag: string; hover: string }> = {
  navy: {
    ring: "ring-navy-100",
    tag: "bg-navy-50 text-navy-700",
    hover: "group-hover:border-navy-300"
  },
  gold: {
    ring: "ring-gold-100",
    tag: "bg-gold-50 text-gold-500",
    hover: "group-hover:border-gold-300"
  },
  moss: {
    ring: "ring-moss-100",
    tag: "bg-moss-50 text-moss-500",
    hover: "group-hover:border-moss-300"
  }
};

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title={
            <>
              A complete toolkit for{" "}
              <span className="text-gold-500">disciplined wealth</span>.
            </>
          }
          description="Every product we recommend is regulated, transparent, and mapped to a goal in your plan. Explore the categories below to learn how each one fits into your journey."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-2 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft ${c.hover}`}
                >
                  {/* Image */}
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[16/10] w-full bg-gradient-to-br from-navy-50 to-gold-50 overflow-hidden">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.12, rotate: 2 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="h-full w-full origin-center"
                      >
                        <FallbackImage
                          src={s.cardImage}
                          alt={s.title}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" 
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${c.tag}`}
                    >
                      {s.icon}
                    </span>
                    <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-800 shadow-sm transition-transform group-hover:rotate-12">
                      <ArrowUpRight size={16} />
                    </span>
                  </motion.div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-2xl font-bold text-navy-900">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gold-500">
                      {s.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-navy-700">
                      {s.short}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800">
                      Learn more
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
