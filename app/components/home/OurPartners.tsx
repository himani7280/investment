"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.partners;
const partners = content.items;

const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const OurPartners = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
      {/* Background Decorative Dots */}
      <div className="absolute left-8 top-16 hidden sm:block pointer-events-none">
        <div className="grid grid-cols-5 gap-[10px]">
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="h-[4px] w-[4px] rounded-full bg-[#b8d4fa]"
            />
          ))}
        </div>
      </div>

      {/* Main Container Aligned With Header and Footer */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-[850px] text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-[44px] bg-[#2778e8]" />
            <span className="text-[11px] font-semibold tracking-wider text-[#2778e8] uppercase sm:text-[12px]">
              {content.badge}
            </span>
            <span className="h-[2px] w-[44px] bg-[#2778e8]" />
          </div>

          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#092452] sm:text-[34px] lg:text-[38px]">
            <span className="whitespace-pre-line">{content.titleStart}</span>{" "}
            <span className="text-[#1474e8]">{content.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[650px] text-[14px] leading-relaxed text-[#7385a1] sm:text-[15px]">
            {content.description}
          </p>
        </motion.div>

        {/* Partners Grid Spanning Full Container Width */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 mx-auto mt-8 w-full sm:mt-10"
        >
          <div className="grid grid-cols-2 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                variants={fadeIn}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex h-[95px] min-w-0 items-center justify-center rounded-xl border border-[#e8eff8] bg-white p-3 shadow-xs transition-all duration-300 hover:border-[#2d6fc4]/30 hover:shadow-md sm:h-[105px]"
              >
                <div className="relative flex h-full w-full items-center justify-center p-2">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="h-full max-h-[55px] w-auto max-w-full object-contain mix-blend-multiply sm:max-h-[65px]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurPartners;