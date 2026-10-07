"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.howItWorks;
const steps = content.steps;

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const HowItWorks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white  pt-10 sm:pt-12  lg:pt-[41px]">
      <div className="mx-auto w-full max-w-[1280px] px-2 sm:px-4 lg:px-0">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[800px] text-center"
        >
          {/* Badge */}
          <div className="inline-flex rounded-full border border-[#d8e7fa] bg-[#f7fbff] px-5 py-[7px] text-[11px] font-medium uppercase tracking-[0.15em] text-[#1f5fd0] sm:text-[12px] lg:text-[13px]">
            {content.badge}
          </div>

          {/* Title */}
          <h2 className="mt-[16px] text-[26px] font-semibold leading-[0.97] tracking-[-0.02em] text-[#071b43] sm:text-[30px] md:text-[36px] lg:text-[clamp(26px,3.3vw,44px)]">
            {content.titleStart}
            <br className="hidden sm:block" />
            <span className="text-[#1f64dc]"> {content.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-[20px] max-w-[720px] text-[12px] leading-[1.5] text-[#5f6e84] sm:text-[13px] lg:text-[clamp(12px,1.05vw,14.5px)]">
            {content.description}
          </p>
        </motion.div>

        {/* ================= STEPS ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:mt-[4px] lg:grid-cols-4 lg:gap-y-0"
        >
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              {/* ================= SINGLE STEP ================= */}
              <motion.div
                variants={fadeIn}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="group relative z-10 mx-auto w-full max-w-[300px] text-center lg:max-w-[260px]"
              >
                {/* Circle/Image Area */}
                <div className="relative mx-auto h-[195px] w-[195px] lg:h-[clamp(150px,14.2vw,195px)] lg:w-[clamp(150px,14.2vw,195px)]">
                  {/* Outer Circle */}
                  <div className="absolute inset-0 rounded-full bg-[#eef4fd] transition-transform duration-300 group-hover:scale-[1.02]" />

                  {/* Image Circle */}
                  <div className="absolute left-[7.7%] top-[8.7%] h-[71.8%] w-[71.8%] overflow-hidden rounded-full">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 140px, 195px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Number */}
                  <div className="absolute left-0 top-[2%] z-20 flex h-[24%] w-[24%] items-center justify-center rounded-full border-[3px] border-white bg-[#1a5fdb] text-[clamp(13px,1.3vw,18px)] font-medium text-white shadow-[0_4px_12px_rgba(23,109,224,0.22)] transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="mt-[22px] text-[18px] font-medium leading-[1.25] text-[#071b43] transition-colors duration-200 group-hover:text-[#176de0] lg:text-[clamp(15px,1.4vw,19px)]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mx-auto mt-[12px] max-w-[250px] text-[12px] leading-[1.4] text-[#66748a] sm:text-[13px] lg:text-[clamp(11.5px,1.02vw,14.5px)]">
                  {step.description}
                </p>

                {/* Bottom Line */}
                <div className="mx-auto mt-[14px] h-[2px] w-[40px] bg-[#1f64dc] transition-all duration-300 group-hover:w-[55px]" />
              </motion.div>

              {/* ================= CONNECTOR ================= */}
              {index < steps.length - 1 && (
                <div
                  className="pointer-events-none absolute z-[5] hidden lg:block"
                  style={{
                    left: `${(index + 1) * 25}%`,
                    top: "clamp(52px, 5.4vw, 73px)",
                    width: "13%",
                    height: "44px",
                    transform: "translateX(-50%)",
                  }}
                >
                  {/* Curved Dashed Line */}
                  <svg
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full overflow-visible"
                  >
                    <path
                      d="M0 30 C25 4 75 4 100 30"
                      fill="none"
                      stroke="#bcd0ea"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Arrow Circle */}
                  <div className="absolute left-1/2 top-[24%] flex h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e6eefa] bg-white shadow-[0_3px_10px_rgba(50,100,160,0.08)]">
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      className="text-[#1f64dc]"
                    />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
