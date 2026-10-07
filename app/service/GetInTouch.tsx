"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.services.getInTouch;

// Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const GetInTouch = () => {
  return (
    <section className="w-full bg-white pt-10 sm:pt-12 lg:pt-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="
            relative
            min-h-[310px]
            overflow-hidden
            rounded-xl
            bg-[#edf5ff]
            bg-cover
            bg-center
            sm:min-h-[300px]
            md:min-h-[280px]
            lg:min-h-[220px]
          "
          style={{
            backgroundImage: `url('${content.image}')`,
          }}
        >
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-center
              gap-6
              px-5
              py-8
              sm:px-8
              md:px-10
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-8
              lg:px-12
              lg:py-8
            "
          >
            <motion.div variants={itemVariants} className="min-w-0 lg:max-w-[68%]">
              {/* Top Label */}
              <div className="mb-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="text-[10px] font-semibold tracking-wide text-[#607ba5] sm:text-xs md:text-sm">
                  {content.badge}
                </span>

                <span className="h-[2px] w-10 shrink-0 bg-[#1769e0] sm:w-16" />
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold leading-tight text-[#102e65] sm:text-3xl lg:text-[34px]">
                {content.title}
              </h2>

              {/* Description */}
              <p className="mt-2 max-w-[580px] text-sm leading-5 text-[#60789e] sm:text-base sm:leading-6">
                {content.description}
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-0
                w-full
                sm:w-fit
                lg:absolute
                lg:right-[23%]
                lg:top-1/2
                lg:shrink-0
                lg:-translate-y-1/2
              "
            >
              <Link
                href={content.href}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  bg-[#1769e0]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-md
                  transition-colors
                  duration-200
                  hover:bg-[#0f56c5]
                  sm:w-fit
                "
              >
                {content.buttonText}

                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M4 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M14 7L19 12L14 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;