"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import FallbackImage from "./FallbackImage";
import { Target, Map, TrendingUp, RefreshCw } from "lucide-react";

const steps = [
  {
    title: "Know Your Goals",
    description:
      "Understand your financial aspirations, current financial position, and risk profile.",
    image: "/images/process/step-1.webp",
    icon: <Target size={32} className="text-moss-600" />
  },
  {
    title: "Create Your Financial Roadmap",
    description:
      "Develop a personalized, goal-based investment plan tailored to your timeline and priorities.",
    image: "/images/process/step-2.webp",
    icon: <Map size={32} className="text-moss-600" />
  },
  {
    title: "Invest Smartly",
    description:
      "Choose suitable mutual fund solutions and start investing systematically to build long-term wealth.",
    image: "/images/process/step-3.webp",
    icon: <TrendingUp size={32} className="text-moss-600" />
  },
  {
    title: "Review & Stay on Track",
    description:
      "Monitor your portfolio regularly, review progress, and make adjustments as your goals or circumstances evolve.",
    image: "/images/process/step-4.webp",
    icon: <RefreshCw size={32} className="text-moss-600" />
  }
];

export default function InvestmentProcess() {
  return (
    <section className="relative py-24 bg-navy-50/30">
      <Container>
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={index}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24"
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-100 bg-gold-50 shadow-sm">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                      Step 0{index + 1}
                    </span>
                  </div>
                  <h3 className="mb-5 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-navy-700 md:text-lg">
                    {step.description}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white shadow-soft border border-navy-100">
                    <FallbackImage
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-contain p-8"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
