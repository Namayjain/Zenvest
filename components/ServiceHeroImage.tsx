"use client";

import { motion } from "framer-motion";
import FallbackImage from "./FallbackImage";

export default function ServiceHeroImage({
  src,
  alt,
  icon
}: {
  src: string;
  alt: string;
  icon: string;
}) {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-navy-100 bg-white shadow-soft"
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-full w-full"
      >
        <FallbackImage src={src} alt={alt} className="h-full w-full object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent"
      />

    </motion.div>
  );
}
