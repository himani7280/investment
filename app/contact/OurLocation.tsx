"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.contactLocation;

// Animation Variants
const headerContainerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const mapVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const OurLocation = () => {
  return (
    <section className="w-full bg-white pt-10 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerContainerVariants}
          className="mb-5"
        >
          <motion.div variants={itemVariants} className="mb-2 flex items-center gap-4">
            <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
              {content.badge}
            </span>
            <span className="h-[2px] w-16 bg-[#3478e5]" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl font-bold leading-tight text-[#102b66] sm:text-4xl">
            {content.titleStart}{" "}
            <span className="text-[#1265e8]">{content.titleHighlight}</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-2 max-w-[620px] text-sm leading-6 text-[#71809d] sm:text-base">
            {content.description}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-5">

          {/* Map Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={mapVariants}
            className="relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[310px] shadow-xs"
          >
            <iframe
              src={content.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={content.mapTitle}
              className="h-full w-full"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurLocation;