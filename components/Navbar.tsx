"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(14,36,71,0.06)]"
          : "bg-white/60 backdrop-blur"
      )}
    >
      <Container className="flex h-24 md:h-28 lg:h-32 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:text-navy-900"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-navy-50 opacity-0 transition-all duration-200 hover:opacity-100 group-hover:scale-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="https://play.google.com/store/apps/details?id=com.fiinfrazenvestwelth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-navy-700"
          >
            Start Investing
            <span className="text-gold-300">&rarr;</span>
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-navy-100 bg-white p-2 text-navy-800 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-navy-100 bg-white lg:hidden"
          >
            <Container className="flex flex-col py-4">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-navy-800 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://play.google.com/store/apps/details?id=com.fiinfrazenvestwelth"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-navy-800 px-5 py-3 text-sm font-semibold text-white"
              >
                Start Investing
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
