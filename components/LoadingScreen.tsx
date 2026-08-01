"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finish = () => setIsLoading(false);

    if (document.readyState === "complete") {
      const timeout = window.setTimeout(finish, 900);
      return () => window.clearTimeout(timeout);
    }

    const handleLoad = () => {
      window.setTimeout(finish, 850);
    };

    window.addEventListener("load", handleLoad);
    const fallback = window.setTimeout(finish, 2200);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-[#0e2447]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,165,33,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,139,55,0.16),_transparent_32%)]" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
              <img
                src="/images/logo.png"
                alt="Zenvest Wealth logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            <div className="relative mb-6 h-1 w-56 overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-moss-400"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="text-sm font-semibold uppercase tracking-[0.35em] text-gold-300"
            >
              Crafting wealth
            </motion.p>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute h-[120vw] w-[120vw] rounded-full border border-white/10 md:h-[80vw] md:w-[80vw]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute h-[140vw] w-[140vw] rounded-full border border-white/5 md:h-[95vw] md:w-[95vw]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
