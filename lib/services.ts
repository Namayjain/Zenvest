export type ServiceBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "bullets"; items: string[] }
  | { type: "heading"; text: string };

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  icon: string; // emoji / short label used only as a fallback badge
  heroImage: string;
  cardImage: string;
  color: "navy" | "gold" | "moss";
  content: ServiceBlock[];
};

export const services: Service[] = [
  {
    slug: "mutual-funds",
    title: "Mutual Funds",
    tagline: "Grow steadily. Diversify smartly.",
    short:
      "Curated equity, debt, and hybrid mutual fund portfolios matched to your goals and risk profile.",
    icon: "MF",
    heroImage: "/images/services/mutual-funds-hero.jpg",
    cardImage: "/images/services/mutual-funds-card.jpg",
    color: "navy",
    content: [
      {
        type: "paragraph",
        text: "Mutual funds pool money from many investors to build a professionally managed, diversified portfolio of stocks, bonds, or other securities. They are one of the simplest ways to participate in the growth of the Indian economy without needing to pick individual securities yourself."
      },
      {
        type: "image",
        src: "/images/services/mutual-funds-body-1.jpg",
        alt: "Illustration of diversified mutual fund portfolio"
      },
      {
        type: "heading",
        text: "Why investors choose mutual funds"
      },
      {
        type: "bullets",
        items: [
          "Professionally managed by SEBI-registered fund managers.",
          "Diversification across sectors, market caps, and geographies.",
          "Start small — SIPs from as little as ₹500 per month.",
          "Highly liquid — most schemes redeemable in T+1 to T+3 days.",
          "Transparent — daily NAV, monthly factsheets, and portfolio disclosures."
        ]
      },
      {
        type: "paragraph",
        text: "At Zenvest Wealth, we do not sell products — we curate portfolios. Every recommendation is aligned to your goal timeline, risk tolerance, tax bracket, and liquidity needs, and is reviewed on a rolling calendar so you always know where you stand."
      },
      {
        type: "image",
        src: "/images/services/mutual-funds-body-2.jpg",
        alt: "Advisor reviewing mutual fund performance with a client"
      },
      {
        type: "heading",
        text: "Categories we work with"
      },
      {
        type: "bullets",
        items: [
          "Equity: Large-cap, Flexi-cap, Mid & Small-cap, Sectoral & Thematic.",
          "Hybrid: Balanced Advantage, Aggressive Hybrid, Multi-Asset.",
          "Debt: Liquid, Ultra-short, Short-duration, Corporate Bond, Gilt.",
          "Solution-oriented: Retirement, Children's Gift Funds.",
          "Passive: Index funds and ETFs across benchmarks."
        ]
      },
      {
        type: "paragraph",
        text: "Whether you are starting your first SIP or rebalancing a multi-crore portfolio, we bring the same disciplined, goal-first approach — backed by data, delivered with clarity."
      }
    ]
  },
  {
    slug: "fixed-deposits",
    title: "Fixed Deposits",
    tagline: "Stability you can plan around.",
    short:
      "Corporate and bank fixed deposits offering assured returns, laddered tenures, and predictable cash flows.",
    icon: "FD",
    heroImage: "/images/services/fixed-deposits-hero.jpg",
    cardImage: "/images/services/fixed-deposits-card.jpg",
    color: "gold",
    content: [
      {
        type: "paragraph",
        text: "Fixed deposits are the anchor of any well-built portfolio. They deliver assured returns, predictable maturity dates, and capital safety — making them ideal for emergency corpuses, short-term goals, and the debt allocation of retired investors."
      },
      {
        type: "image",
        src: "/images/services/fixed-deposits-body-1.jpg",
        alt: "Rupee coins stacked with a passbook"
      },
      {
        type: "heading",
        text: "Where Zenvest adds value"
      },
      {
        type: "bullets",
        items: [
          "Access to AAA-rated corporate FDs offering higher yields than banks.",
          "Ladder strategies to blend liquidity with rate optimisation.",
          "Cumulative and non-cumulative options mapped to income needs.",
          "Senior citizen and women investor rate benefits, wherever applicable.",
          "Digital onboarding — no branch visits, no paperwork chase."
        ]
      },
      {
        type: "paragraph",
        text: "We help you compare interest rates, credit ratings, and premature-withdrawal terms across issuers so that every rupee parked in an FD works as hard as it safely can."
      },
      {
        type: "image",
        src: "/images/services/fixed-deposits-body-2.jpg",
        alt: "Investor reviewing FD certificates on a laptop"
      },
      {
        type: "paragraph",
        text: "For families with an income-first goal — like a retiree living off interest — we structure FD ladders that release maturity amounts every quarter so that reinvestment risk is minimised and cash flow stays smooth."
      }
    ]
  },
  {
    slug: "bonds",
    title: "Bonds",
    tagline: "Fixed income, engineered.",
    short:
      "Government securities, PSU bonds, and high-quality corporate bonds for stable, tax-efficient income.",
    icon: "B",
    heroImage: "/images/services/bonds-hero.jpg",
    cardImage: "/images/services/bonds-card.jpg",
    color: "moss",
    content: [
      {
        type: "paragraph",
        text: "Bonds are loans you make to a government or a company in exchange for regular interest and return of principal at maturity. For Indian investors, bonds bring the twin benefits of stable income and portfolio ballast — particularly valuable when equity markets are volatile."
      },
      {
        type: "image",
        src: "/images/services/bonds-body-1.jpg",
        alt: "Bond certificate with an Indian flag in the background"
      },
      {
        type: "heading",
        text: "Types of bonds we cover"
      },
      {
        type: "bullets",
        items: [
          "Government Securities (G-Secs) and State Development Loans.",
          "PSU and AAA-rated corporate bonds.",
          "Tax-free bonds from notified public sector issuers.",
          "Sovereign Gold Bonds (SGBs) with sovereign backing.",
          "RBI Floating Rate Savings Bonds for retail investors."
        ]
      },
      {
        type: "paragraph",
        text: "We help investors assess yield-to-maturity, credit quality, duration risk, and taxation before allocating. For HNIs, we also structure bond portfolios that balance carry with capital-gains treatment."
      },
      {
        type: "image",
        src: "/images/services/bonds-body-2.jpg",
        alt: "Yield curve chart on a monitor"
      },
      {
        type: "paragraph",
        text: "The right bond allocation quietly stabilises returns across cycles — and Zenvest builds it thoughtfully into every long-term plan."
      }
    ]
  },
  {
    slug: "tax-saving",
    title: "Tax Saving",
    tagline: "Save tax. Build wealth. Both.",
    short:
      "Section 80C, 80D and beyond — ELSS, NPS, PPF, and insurance mapped to your tax and life goals.",
    icon: "TS",
    heroImage: "/images/services/tax-saving-hero.jpg",
    cardImage: "/images/services/tax-saving-card.jpg",
    color: "gold",
    content: [
      {
        type: "paragraph",
        text: "Tax saving should never be a March-end scramble. When done well, it becomes a byproduct of a disciplined investment plan — letting you save tax under Sections 80C, 80D, 80CCD(1B), and more, while also compounding wealth for the long term."
      },
      {
        type: "image",
        src: "/images/services/tax-saving-body-1.jpg",
        alt: "Calculator, tax forms and a cup of tea on a desk"
      },
      {
        type: "heading",
        text: "Instruments we consider"
      },
      {
        type: "bullets",
        items: [
          "ELSS Mutual Funds — shortest lock-in (3 years) with equity upside.",
          "PPF — EEE taxation, sovereign guarantee, 15-year horizon.",
          "NPS — additional ₹50,000 deduction under 80CCD(1B).",
          "Sukanya Samriddhi Yojana for a girl child.",
          "Term insurance and eligible health insurance for 80C / 80D."
        ]
      },
      {
        type: "paragraph",
        text: "We build tax plans that fit into your overall financial plan — not the other way round. That means considering the new vs. old regime, your marginal rate, cash-flow cycle, and long-term goals before recommending anything."
      },
      {
        type: "image",
        src: "/images/services/tax-saving-body-2.jpg",
        alt: "Advisor explaining tax-saving strategy on a whiteboard"
      },
      {
        type: "paragraph",
        text: "Every year in Q1, we run a tax review for our clients so that decisions are made calmly — not under deadline pressure."
      }
    ]
  },
  {
    slug: "pms-aif",
    title: "PMS / AIF",
    tagline: "Bespoke portfolios for serious wealth.",
    short:
      "SEBI-regulated Portfolio Management Services and Alternative Investment Funds for HNI and UHNI investors.",
    icon: "PMS",
    heroImage: "/images/services/pms-aif-hero.jpg",
    cardImage: "/images/services/pms-aif-card.jpg",
    color: "navy",
    content: [
      {
        type: "paragraph",
        text: "PMS and AIFs are professionally managed investment vehicles designed for investors with higher ticket sizes and specific mandates. They offer concentrated, high-conviction strategies that go beyond the constraints of mutual funds."
      },
      {
        type: "image",
        src: "/images/services/pms-aif-body-1.jpg",
        alt: "Boardroom with portfolio analysis on screens"
      },
      {
        type: "heading",
        text: "How PMS and AIFs differ"
      },
      {
        type: "bullets",
        items: [
          "PMS: Individually held demat portfolio, min. ₹50 lakh investment.",
          "AIF Category I — venture, SME, infrastructure funds.",
          "AIF Category II — private equity, private credit, real estate.",
          "AIF Category III — long-short, market-neutral, quant strategies.",
          "Transparent reporting, but longer lock-ins and higher minimums."
        ]
      },
      {
        type: "paragraph",
        text: "For each strategy we onboard, we evaluate the manager's track record across cycles, the transparency of the process, the fee structure (fixed + performance), and the fit within your broader asset allocation. We are strategy-agnostic — we recommend only what makes sense for you."
      },
      {
        type: "image",
        src: "/images/services/pms-aif-body-2.jpg",
        alt: "Detailed portfolio report on a tablet"
      },
      {
        type: "paragraph",
        text: "For qualifying investors, this is where alpha is genuinely available — provided the strategy is chosen with rigor. Zenvest brings that rigor."
      }
    ]
  },
  {
    slug: "child-future-saving",
    title: "Child Future Saving",
    tagline: "Because their milestones can't wait.",
    short:
      "Goal-based plans for school fees, higher education, and life milestones — built to compound over decades.",
    icon: "CF",
    heroImage: "/images/services/child-future-hero.jpg",
    cardImage: "/images/services/child-future-card.jpg",
    color: "moss",
    content: [
      {
        type: "paragraph",
        text: "Higher education abroad can cost ₹50 lakh to ₹2 crore in today's rupees — and with education inflation running above 10%, that number nearly doubles every 7 years. A child's future goal deserves its own dedicated, disciplined plan."
      },
      {
        type: "image",
        src: "/images/services/child-future-body-1.jpg",
        alt: "Parent and child looking at a graduation cap"
      },
      {
        type: "heading",
        text: "How we build a child plan"
      },
      {
        type: "bullets",
        items: [
          "Start with the goal amount, inflated to the year of need.",
          "Split into education, marriage, and freedom-fund buckets.",
          "Long-horizon SIPs in equity for the growth years.",
          "Gradual glide-path to debt as the goal date approaches.",
          "Term insurance on the earning parent to guarantee the goal."
        ]
      },
      {
        type: "paragraph",
        text: "We also consider tools like Sukanya Samriddhi Yojana, PPF in the child's name, Children's Gift mutual funds, and dedicated child-oriented SIPs — combined thoughtfully rather than dogmatically."
      },
      {
        type: "image",
        src: "/images/services/child-future-body-2.jpg",
        alt: "Piggy bank with a graduation cap"
      },
      {
        type: "paragraph",
        text: "The single biggest mistake parents make is starting late. With Zenvest, you start with a written plan, a monthly SIP, and a review calendar — so the goal moves from wish to work-in-progress."
      }
    ]
  }
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
