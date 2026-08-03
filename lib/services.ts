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
        alt: "Expert reviewing mutual fund performance with a client"
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
        alt: "Expert explaining tax-saving strategy on a whiteboard"
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
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    tagline: "Protect what matters most.",
    short:
      "Comprehensive life coverage to ensure your family's financial security in your absence.",
    icon: "LI",
    heroImage: "/images/services/life-insurance-hero.jpg",
    cardImage: "/images/services/life-insurance-card.jpg",
    color: "navy",
    content: [
      {
        type: "paragraph",
        text: "Life insurance is the foundation of any robust financial plan. It provides a crucial safety net, ensuring that your family's lifestyle, debts, and future goals are secure even if you are no longer around."
      },
      {
        type: "image",
        src: "/images/services/life-insurance-body-1.jpg",
        alt: "Family enjoying time together"
      },
      {
        type: "heading",
        text: "Key aspects of our life insurance planning"
      },
      {
        type: "bullets",
        items: [
          "Human Life Value (HLV) calculation to determine adequate coverage.",
          "Focus on pure term insurance for maximum protection at minimum cost.",
          "Assessment of existing liabilities like home loans or business debts.",
          "Securing future milestones like children's education and marriage.",
          "Periodic review of coverage as your income and responsibilities grow."
        ]
      },
      {
        type: "paragraph",
        text: "We help you cut through the noise of complex insurance products. We do not mix insurance with investments; instead, we recommend pure protection plans that offer the highest cover for your premium, providing true peace of mind."
      }
    ]
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    tagline: "Health comes first. Always.",
    short:
      "Comprehensive medical coverage to protect your savings from unexpected healthcare costs.",
    icon: "HI",
    heroImage: "/images/services/health-insurance-hero.png",
    cardImage: "/images/services/health-insurance-card.png",
    color: "moss",
    content: [
      {
        type: "paragraph",
        text: "A single medical emergency can wipe out years of savings if you are not adequately insured. Health insurance is not just about paying hospital bills; it's about protecting your wealth and ensuring access to the best medical care without compromise."
      },
      {
        type: "image",
        src: "/images/services/health-insurance-body-1.png",
        alt: "Doctor consulting with a patient"
      },
      {
        type: "heading",
        text: "Our approach to health insurance"
      },
      {
        type: "bullets",
        items: [
          "Evaluating individual vs. family floater plans based on your family structure.",
          "Identifying policies with no room rent capping or co-payment clauses.",
          "Adding super top-up plans for cost-effective, high-value coverage.",
          "Ensuring adequate cover for pre-existing diseases and day-care procedures.",
          "Assistance during the claims process to ensure smooth cashless or reimbursement settlements."
        ]
      },
      {
        type: "paragraph",
        text: "We analyze policies across multiple providers to find the one that offers the best coverage features, wide network hospitals, and strong claim settlement ratios, tailored to your specific health needs and budget."
      }
    ]
  },
  {
    slug: "retirement-saving",
    title: "Retirement Saving",
    tagline: "Your golden years, secured.",
    short:
      "Strategic retirement planning to build a corpus that outlives you and beats inflation.",
    icon: "RS",
    heroImage: "/images/services/retirement-saving-hero.jpg",
    cardImage: "/images/services/retirement-saving-card.jpg",
    color: "gold",
    content: [
      {
        type: "paragraph",
        text: "Retirement planning is about ensuring financial independence when your active income stops. With increasing life expectancy and rising healthcare costs, it's vital to build a retirement corpus that can provide a steady, inflation-adjusted income for 20-30 years post-retirement."
      },
      {
        type: "image",
        src: "/images/services/retirement-saving-body-1.jpg",
        alt: "Older couple enjoying a walk on the beach"
      },
      {
        type: "heading",
        text: "Building a resilient retirement portfolio"
      },
      {
        type: "bullets",
        items: [
          "Estimating future expenses considering lifestyle inflation and healthcare.",
          "Aggressive wealth accumulation strategies during your peak earning years.",
          "Systematic transition to low-risk, income-generating assets as retirement nears.",
          "Optimizing tax implications of retirement withdrawals and pension income.",
          "Setting up Systematic Withdrawal Plans (SWPs) for a predictable monthly income."
        ]
      },
      {
        type: "paragraph",
        text: "Our goal is to help you maintain your desired standard of living without the fear of outliving your savings. We design a glide path that balances growth and capital preservation, so you can enjoy your golden years with complete financial dignity."
      }
    ]
  },
  {
    slug: "loan-against-security",
    title: "Loan Against Security",
    tagline: "Instant liquidity. Zero liquidation.",
    short: "Raise instant funds against your shares, mutual funds, and insurance without selling them.",
    icon: "LAS",
    heroImage: "/images/services/las-hero.png",
    cardImage: "/images/services/las-card.png",
    color: "gold",
    content: [
      {
        type: "paragraph",
        text: "LAS (Loan Against Securities) is a loan availed against your pledged securities as collateral. It allows you to raise instant funds against shares, mutual funds, insurance etc., without selling them."
      },
      {
        type: "image",
        src: "/images/services/las-body.png",
        alt: "Illustration of overdraft facility against investments"
      },
      {
        type: "heading",
        text: "Why choose Loan Against Security?"
      },
      {
        type: "bullets",
        items: [
          "Pledge your securities and get an overdraft facility up to a certain value.",
          "Interest is calculated only on the amount withdrawn.",
          "Pay interest only for the period of utilization.",
          "Keep earning dividends and capital appreciation on your pledged investments.",
          "Quick processing with minimal documentation compared to traditional loans."
        ]
      },
      {
        type: "paragraph",
        text: "Whether it's a short-term cash flow requirement or a sudden financial need, our Loan Against Securities helps you unlock the value of your portfolio without disrupting your long-term wealth creation journey."
      }
    ]
  },
  {
    slug: "specialised-investment-fund",
    title: "Specialised Investment Fund",
    tagline: "Advanced strategies for sophisticated investors.",
    short: "Bridge the gap between mutual funds and PMS with SEBI-regulated alternative strategies.",
    icon: "SIF",
    heroImage: "/images/services/sif-hero.png",
    cardImage: "/images/services/sif-card.png",
    color: "navy",
    content: [
      {
        type: "paragraph",
        text: "A Specialised Investment Fund (SIF) is a SEBI-regulated investment category that bridges the gap between traditional mutual funds and Portfolio Management Services (PMS). It allows advanced strategies like long-short investing and derivatives."
      },
      {
        type: "image",
        src: "/images/services/sif-body.png",
        alt: "Dashboard showing advanced specialized investment fund strategies"
      },
      {
        type: "heading",
        text: "Key features of SIFs"
      },
      {
        type: "bullets",
        items: [
          "Requires a minimum investment of ₹10 lakh, making it accessible to a wider tier of investors.",
          "SEBI-regulated framework ensuring robust compliance and transparency.",
          "Access to complex strategies like long-short, market-neutral, and derivatives.",
          "Bridges the gap for investors looking to step up from mutual funds before committing to a full PMS.",
          "Potential for alpha generation in volatile or range-bound markets."
        ]
      },
      {
        type: "paragraph",
        text: "With lower entry barriers than traditional PMS but greater flexibility than standard mutual funds, Specialised Investment Funds are ideal for experienced investors looking to add tactical, absolute-return strategies to their core portfolio."
      }
    ]
  }
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
