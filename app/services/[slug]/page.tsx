import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import { services, getService } from "@/lib/services";
import ServiceContent from "@/components/ServiceContent";
import ServiceHeroImage from "@/components/ServiceHeroImage";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getService(params.slug);
  if (!s) return { title: "Service not found" };
  return {
    title: `${s.title} — Zenvest Wealth`,
    description: s.short
  };
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.slug === service.slug);
  const next = services[(idx + 1) % services.length];
  const prev = services[(idx - 1 + services.length) % services.length];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden bg-radial-navy">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-navy [background-size:36px_36px] opacity-40"
        />
        <Container className="relative grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-navy-900"
            >
              <ArrowLeft size={14} />
              All services
            </Link>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-500">
              {service.tagline}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-navy-900 md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-navy-700 md:text-lg">
              {service.short}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-navy-700"
              >
                Talk to an expert
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-800 hover:bg-navy-50"
              >
                Explore other services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ServiceHeroImage
              src={service.heroImage}
              alt={service.title}
              icon={service.icon}
            />
          </div>
        </Container>
      </section>

      {/* Content */}
      <ServiceContent service={service} />

      {/* Prev / Next */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link
              href={`/services/${prev.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-sm hover:border-gold-200 hover:shadow-soft"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">
                  Previous
                </p>
                <p className="mt-1 font-display text-xl font-bold text-navy-900">
                  {prev.title}
                </p>
              </div>
              <ArrowLeft
                className="text-navy-500 transition-transform group-hover:-translate-x-1"
                size={20}
              />
            </Link>
            <Link
              href={`/services/${next.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-navy-100 bg-white p-6 text-right shadow-sm hover:border-gold-200 hover:shadow-soft"
            >
              <ArrowRight
                className="text-navy-500 transition-transform group-hover:translate-x-1"
                size={20}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">
                  Next
                </p>
                <p className="mt-1 font-display text-xl font-bold text-navy-900">
                  {next.title}
                </p>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
