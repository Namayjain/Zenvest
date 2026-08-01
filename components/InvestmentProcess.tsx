"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import FallbackImage from "./FallbackImage";
import { ClipboardList, PiggyBank, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Insure - Save - Invest",
    description:
      "Prioritize acquiring a life insurance policy before making investments for your future financial goals. By doing so, you can safeguard your future wealth from potential unforeseen events. It is essential to have sufficient savings before venturing into investing for the future. Once you have built up an adequate savings cushion, our digital platforms can assist you in executing your investment decisions efficiently.",
    image: "/images/process/step-1.png",
    icon: <ShieldCheck size={32} className="text-moss-600" />
  },
  {
    title: "Choose the right scheme",
    description:
      'Navigating the multitude of investment schemes available can be overwhelming, as it can be difficult to identify the most suitable one for your needs. Recommendations such as "Best Funds" or "Top Three Funds" can also add to the confusion. However, our website and mobile application provide ample information and tools to help you make an informed decision and choose the scheme that best aligns with your preferences.',
    image: "/images/process/step-2.png",
    icon: <ClipboardList size={32} className="text-moss-600" />
  },
  {
    title: "Post Purchase Services",
    description:
      "Effectively managing investments after purchase is crucial, yet can prove to be a challenge for busy investors. At Zenvest, we are committed to offering a comprehensive suite of investment-related services to ensure seamless management of your investments. Our digital transaction options, detailed scheme-related information, and 24/7 access to your investment details, aim to enhance your overall investing experience and track your investments on-the-go, even amidst a busy schedule.",
    image: "/images/process/step-3.png",
    icon: <PiggyBank size={32} className="text-moss-600" />
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
