# Zenvest Wealth — Images To Provide

Please drop the following image files into this `/public/images/` folder,
using the **exact filenames and paths** listed below. The site references
these paths directly and will fall back to gradients if they are missing.

Recommended sizes are guidelines — any close aspect ratio will work.

---

## 1. Brand / Logo

Path: `/public/images/`

| Filename          | Purpose                          | Suggested size |
|-------------------|----------------------------------|----------------|
| `logo.png`        | Full Zenvest Wealth logo (dark)  | 800 × 320      |
| `logo-white.png`  | Same logo but on dark background | 800 × 320      |
| `favicon.png`     | Square icon (just the mark)      | 512 × 512      |

> The site currently uses a stylised inline SVG mark in `components/Logo.tsx`.
> Once you drop the real logo files here, we can swap that SVG for `<Image src="/images/logo.png"/>`.

---

## 2. Service card & hero images

Path: `/public/images/services/`

Each service needs:
- **Card image** – shown on the "What We Offer" grid (aspect 16:10).
- **Hero image** – shown on the individual service page (square 1:1).
- **Body image 1** – appears next to the first paragraph (aspect 4:3).
- **Body image 2** – appears further down the page (aspect 4:3).

Prefer clean, editorial photos — Indian context is a plus (Indian rupee,
Indian families, offices, skylines, etc.).

### Mutual Funds
- `mutual-funds-card.jpg` — 1600 × 1000. Diversified graph/portfolio visual.
- `mutual-funds-hero.jpg` — 1200 × 1200. Advisor discussing portfolio.
- `mutual-funds-body-1.jpg` — 1200 × 900. Diversification / basket concept.
- `mutual-funds-body-2.jpg` — 1200 × 900. Advisor reviewing fund performance.

### Fixed Deposits
- `fixed-deposits-card.jpg` — 1600 × 1000. Passbook / rupee stacks.
- `fixed-deposits-hero.jpg` — 1200 × 1200. Bank counter / secure vault feel.
- `fixed-deposits-body-1.jpg` — 1200 × 900. Rupee coins & passbook.
- `fixed-deposits-body-2.jpg` — 1200 × 900. Investor on laptop reviewing FDs.

### Bonds
- `bonds-card.jpg` — 1600 × 1000. Yield-curve / financial chart.
- `bonds-hero.jpg` — 1200 × 1200. Government bond / Indian tricolour tastefully.
- `bonds-body-1.jpg` — 1200 × 900. Bond certificate close-up.
- `bonds-body-2.jpg` — 1200 × 900. Trading screen / yield curve.

### Tax Saving
- `tax-saving-card.jpg` — 1600 × 1000. Calculator, forms, tax visual.
- `tax-saving-hero.jpg` — 1200 × 1200. Advisor + client at desk.
- `tax-saving-body-1.jpg` — 1200 × 900. Tax forms + coffee flat lay.
- `tax-saving-body-2.jpg` — 1200 × 900. Whiteboard / strategy discussion.

### PMS / AIF
- `pms-aif-card.jpg` — 1600 × 1000. Premium boardroom / portfolio visual.
- `pms-aif-hero.jpg` — 1200 × 1200. Executive analysing data.
- `pms-aif-body-1.jpg` — 1200 × 900. Boardroom with analytics on screens.
- `pms-aif-body-2.jpg` — 1200 × 900. Detailed portfolio report on a tablet.

### Child Future Saving
- `child-future-card.jpg` — 1600 × 1000. Parent + child + goal visual.
- `child-future-hero.jpg` — 1200 × 1200. Parent guiding child.
- `child-future-body-1.jpg` — 1200 × 900. Graduation cap / education idea.
- `child-future-body-2.jpg` — 1200 × 900. Piggy bank + graduation cap.

---

## 3. Optional hero / testimonial imagery

- `/public/images/hero-bg.jpg` — optional background photograph for the
  landing hero (if you'd like a photographic hero later).

The site is designed to look beautiful even before these images are added
— fallbacks show as brand-colour gradients — but adding them will make
the site production-ready.
