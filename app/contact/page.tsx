import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Zenvest Wealth",
  description:
    "Get in touch with Zenvest Wealth. Book a free consultation, ask a question, or find our Dhanbad office."
};

export default function ContactPage() {
  return (
    <div className="relative bg-radial-navy">
      {/* Header */}
      <section className="relative pt-16 pb-10 md:pt-24 md:pb-16">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-navy [background-size:36px_36px] opacity-40"
        />
        <Container className="relative text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-500">
            Contact us
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-navy-900 md:text-6xl">
            Let&apos;s start a{" "}
            <span className="text-gold-500">conversation</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-navy-700 md:text-lg">
            Whether you have a specific question or just want to explore, our team
            would love to hear from you. We respond within one business day.
          </p>
        </Container>
      </section>

      {/* Info tiles */}
      <Container className="relative">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: Mail,
              title: "Email us",
              value: site.email,
              href: `mailto:${site.email}`
            },
            {
              icon: MapPin,
              title: "Visit us",
              value: site.address
            },
            {
              icon: Clock,
              title: "Working hours",
              value: "Mon – Sat, 10:00 AM – 6:30 PM IST"
            }
          ].map((info) => (
            <div
              key={info.title}
              className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-500">
                <info.icon size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">
                  {info.title}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm font-semibold text-navy-900 hover:text-gold-500"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-navy-900">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Form + Map */}
      <section className="relative py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-navy-700">
                Share a little about your goals and we&apos;ll get back with a
                tailored response.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
                Find us on the map
              </h2>
              <p className="mt-2 text-navy-700">{site.address}</p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
                <iframe
                  title="Zenvest Wealth on Google Maps"
                  src={site.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[520px] w-full"
                />
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-navy-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 text-navy-800">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">
                      Zenvest Wealth Office
                    </p>
                    <p className="text-xs text-navy-600">
                      Joraphokhar, Dhanbad, Jharkhand
                    </p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    site.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-navy-800 px-4 py-2 text-xs font-semibold text-white hover:bg-navy-700"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
