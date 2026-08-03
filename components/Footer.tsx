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

      <div className="bg-navy-900 py-10 mt-16 border-t border-navy-800">
        <Container className="flex flex-col items-center text-center gap-6 text-sm">
          <p className="text-white/90">
            Zenvest Wealth is an AMFI Registered Mutual Fund Distributor. ARN - 365239, ARN-366062 EUIN - E698784, E689306
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-white/80">
            <Link href="/privacy-policy" className="hover:text-gold-400">Privacy Policy</Link>
            <span className="hidden text-white/40 md:inline">|</span>
            <Link href="/commission-disclosure" className="hover:text-gold-400">Commission Disclosure</Link>
            <span className="hidden text-white/40 md:inline">|</span>
            <Link href="/terms-and-conditions" className="hover:text-gold-400">Terms &amp; Conditions</Link>
            <span className="hidden text-white/40 md:inline">|</span>
            <Link href="/admin" className="hover:text-gold-400">Admin Login</Link>
          </div>

          <p className="mt-2 max-w-6xl text-justify text-[11px] leading-relaxed text-white/60">
            Disclaimer: Mutual Fund investments are subject to market risks, read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. The Mutual Fund is not guaranteeing or assuring any dividend under any of the schemes and the same is subject to the availability and adequacy distributable surplus.
          </p>

          <p className="max-w-6xl text-justify text-[11px] leading-relaxed text-white/60">
            Zenvest Wealth makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however, caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions of the website are applicable. Investments in Securities markets are subject to market risks, read all the related documents carefully before investing.
          </p>

          <div className="mt-4 flex w-full max-w-4xl flex-col items-center justify-center gap-6 rounded-lg bg-white p-4 shadow-md md:flex-row">
            <div className="flex items-center gap-4 border-b border-navy-100 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
              <img src="/images/amfi-logo.png" alt="AMFI Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col text-left text-[11px] font-semibold text-navy-900">
                <span>ARN-365239 | EUIN - E698784</span>
                <span>ARN-366062 | EUIN - E689306</span>
              </div>
            </div>
            <div className="pl-0 md:pl-2">
              <img src="/images/mf-sahi-hai.png" alt="Mutual Funds Sahi Hai" className="h-12 w-auto object-contain" />
            </div>
          </div>
          
          <div className="mt-4 flex w-full max-w-6xl flex-col items-center justify-between border-t border-white/10 pt-6 text-[11px] text-white/50 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Zenvest Wealth. All Rights Reserved.</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
