import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-navy-100 bg-gradient-to-b from-white to-navy-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
      />
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-navy-700">
            {site.tagline}. AMFI-registered mutual fund distributors serving Indian
            families since inception with a goal-first, transparent approach.
          </p>
          <div className="rounded-xl bg-white p-3 text-xs shadow-sm ring-1 ring-navy-100">
            <span className="font-semibold text-navy-800">{site.arn}</span>
            <span className="ml-2 text-navy-600">AMFI Registered</span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-700">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-navy-600 transition-colors hover:text-navy-900"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-700">
            What We Offer
          </h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-navy-600 transition-colors hover:text-navy-900"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-700">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm text-navy-700">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-gold-500" />
              <a href={`mailto:${site.email}`} className="hover:text-navy-900">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold-500" />
              <span>{site.address}</span>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-2">
            {[
              { icon: Facebook, href: site.social.facebook, label: "Facebook" },
              { icon: Instagram, href: site.social.instagram, label: "Instagram" },
              { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: site.social.twitter, label: "Twitter" },
              { icon: Youtube, href: site.social.youtube, label: "YouTube" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-700 transition-colors hover:border-gold-300 hover:text-navy-900"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-navy-100 bg-white/60">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-600 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Zenvest Wealth. All rights reserved. |{" "}
            <span className="font-semibold text-navy-800">{site.arn}</span>
          </p>
          <p className="text-navy-500">
            Mutual fund investments are subject to market risks. Read all scheme
            related documents carefully.
          </p>
        </Container>
      </div>
    </footer>
  );
}
