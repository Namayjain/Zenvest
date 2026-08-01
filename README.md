# Zenvest Wealth — Next.js Website

A production-ready Next.js 14 (App Router) marketing site for **Zenvest Wealth**,
a mutual-fund distribution and wealth-advisory brand.

- **Framework:** Next.js 14 · React 18 · TypeScript
- **Styling:** Tailwind CSS (custom brand palette from your logo)
- **Animation:** Framer Motion
- **UI style:** Shadcn/Aceternity-inspired components (all hand-built, no external UI dep needed)
- **Icons:** lucide-react
- **Backend (later):** Supabase — contact form is wired but the client is loaded lazily; the site works fine without Supabase env vars set.

## Getting started

```bash
cd zenvest
npm install
npm run dev
# open http://localhost:3000
```

## Pages

- `/` — Animated landing page: Hero, Services, Why Us, FAQ, Testimonials, CTA
- `/services/[slug]` — Dedicated page per service (mutual-funds, fixed-deposits, bonds, tax-saving, pms-aif, child-future-saving)
- `/contact` — Contact form + Google Maps embed

## Configuring Supabase (later)

1. Create a table in Supabase:

```sql
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text not null,
  source text
);
alter table contact_messages enable row level security;
create policy "allow insert" on contact_messages for insert with check (true);
```

2. Copy `.env.local.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

The `ContactForm` component picks these up automatically. Until they're set,
the form simulates a successful submission so the UI is testable.

## Content

- Service data lives in `lib/services.ts` — edit copy, images, or add services here.
- FAQs live in `lib/faq.ts`.
- Testimonials live in `lib/testimonials.ts`.
- Brand metadata (ARN, email, address, nav) lives in `lib/site.ts`.

## Images

See `public/README.md` for the exact list of image files to drop into
`/public/images/`. The site uses graceful fallbacks so it looks good even
before images are added.

## Brand palette

Derived directly from your logo:

| Token   | Hex       | Used for                       |
|---------|-----------|--------------------------------|
| Navy    | `#0e2447` | Primary text, buttons, headers |
| Gold    | `#d9a521` | Accents, highlights            |
| Moss    | `#228b37` | Success, upside signals        |
| White   | `#ffffff` | Background                     |

## Responsive

Every section is fully responsive — mobile menu, single-column layouts on
narrow screens, adaptive typography, and touch-friendly hit targets.
