"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "./Container";
import FallbackImage from "./FallbackImage";
import type { Service, ServiceBlock } from "@/lib/services";

/**
 * Renders the service body in the alternating format:
 *  paragraph -> image -> heading -> bullets -> paragraph -> image -> ...
 * We group adjacent (paragraph + image) blocks into a two-column row and
 * alternate the image between right and left.
 */
export default function ServiceContent({ service }: { service: Service }) {
  // Pair paragraphs with adjacent images for a nicer "text-image" layout.
  const rows = buildRows(service.content);

  return (
    <section className="relative py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-4xl space-y-14">
          {rows.map((row, idx) => (
            <Row key={idx} row={row} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type Row =
  | { kind: "text-image"; text: ServiceBlock; image: ServiceBlock }
  | { kind: "heading"; block: ServiceBlock }
  | { kind: "bullets"; block: ServiceBlock }
  | { kind: "paragraph"; block: ServiceBlock }
  | { kind: "image"; block: ServiceBlock };

function buildRows(blocks: ServiceBlock[]): Row[] {
  const rows: Row[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    const nxt = blocks[i + 1];
    if (b.type === "paragraph" && nxt && nxt.type === "image") {
      rows.push({ kind: "text-image", text: b, image: nxt });
      i += 2;
      continue;
    }
    if (b.type === "image" && nxt && nxt.type === "paragraph") {
      // put text on the right by pairing image + paragraph but pass orientation
      rows.push({ kind: "text-image", text: nxt, image: b });
      i += 2;
      continue;
    }
    if (b.type === "heading") rows.push({ kind: "heading", block: b });
    else if (b.type === "bullets") rows.push({ kind: "bullets", block: b });
    else if (b.type === "paragraph") rows.push({ kind: "paragraph", block: b });
    else if (b.type === "image") rows.push({ kind: "image", block: b });
    i++;
  }
  return rows;
}

function Row({ row, index }: { row: Row; index: number }) {
  const flip = index % 2 === 1; // alternate image left/right

  if (row.kind === "text-image") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="prose-navy">
          <p className="text-base leading-relaxed text-navy-800 md:text-lg">
            {"text" in row.text ? (row.text as any).text : ""}
          </p>
        </div>
        <ImageBlock
          src={(row.image as any).src}
          alt={(row.image as any).alt}
          caption={(row.image as any).caption}
        />
      </motion.div>
    );
  }

  if (row.kind === "heading") {
    return (
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-display text-2xl font-bold text-navy-900 md:text-3xl"
      >
        <span className="mr-3 inline-block h-2 w-2 -translate-y-1 rounded-full bg-gold-400" />
        {(row.block as any).text}
      </motion.h2>
    );
  }

  if (row.kind === "bullets") {
    return (
      <motion.ul
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {(row.block as any).items.map((item: string) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm"
          >
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-moss-50 text-moss-500">
              <Check size={14} />
            </span>
            <span className="text-sm leading-relaxed text-navy-800">{item}</span>
          </li>
        ))}
      </motion.ul>
    );
  }

  if (row.kind === "paragraph") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-base leading-relaxed text-navy-800 md:text-lg"
      >
        {(row.block as any).text}
      </motion.p>
    );
  }

  // image alone
  return (
    <ImageBlock
      src={(row.block as any).src}
      alt={(row.block as any).alt}
      caption={(row.block as any).caption}
    />
  );
}

function ImageBlock({
  src,
  alt,
  caption
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <motion.figure 
      className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div 
        className="aspect-[4/3] w-full bg-gradient-to-br from-navy-50 to-gold-50 overflow-hidden"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FallbackImage src={src} alt={alt} className="h-full w-full object-cover" />
      </motion.div>
      {caption && (
        <figcaption className="border-t border-navy-100 px-4 py-2 text-xs text-navy-500">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
