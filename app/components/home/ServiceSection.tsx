"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Shield,
  FileText,
  Globe2,
  Users,
  PieChart,
  Sprout,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.services;
const serviceIcons = {
  BarChart3,
  Shield,
  FileText,
  Globe2,
  Users,
  PieChart,
  Sprout,
  Handshake,
};

const services = content.items.map((item) => ({
  ...item,
  icon: serviceIcons[item.icon as keyof typeof serviceIcons] || BarChart3,
}));

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const ServiceSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 sm:pt-12 lg:pt-14">
      {/* Top Right Decorative Shape */}
      <div
        className="
          absolute right-0 top-0
          h-[180px] w-[150px]
          bg-[#f4f8fd]
          [clip-path:polygon(35%_0,100%_0,100%_100%)]
          sm:h-[260px] sm:w-[220px]
          lg:h-[350px] lg:w-[290px]
        "
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-8 xl:gap-10">
          {/* LEFT IMAGE WITH MOTION */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[443px] overflow-hidden rounded-tl-2xl rounded-bl-2xl lg:max-w-none"
          >
            <Image
              src={content.image}
              alt={content.imageAlt}
              priority
              width={443}
              height={520}
              sizes="(max-width: 1024px) 90vw, 443px"
              className="
                h-auto
                w-full
                object-contain
                transition-transform
                duration-700
                hover:scale-[1.02]
              "
            />
          </motion.div>

          {/* RIGHT CONTENT WITH MOTION */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative z-20 w-full"
          >
            {/* Label Badge */}
            <motion.div variants={fadeIn}>
              <span className="inline-flex rounded-full border border-[#d4e3f7] bg-white px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#2d6fc4] sm:text-[11px]">
                {content.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeIn}
              className="mt-3 max-w-[750px] text-[26px] font-bold leading-[1.12] tracking-[-1px] text-[#07152f] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[40px]"
            >
              <span className="whitespace-pre-line">{content.titleStart}</span>{" "}
              <span className="text-[#1264d4]">{content.titleHighlight}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="mt-3 max-w-[700px] text-[12px] leading-[1.65] text-[#53647d] sm:text-[13px] lg:text-[14px]"
            >
              {content.description}
            </motion.p>

            {/* SERVICES GRID WITH STAGGERED ITEMS */}
            <motion.div
              variants={staggerContainer}
              className="mt-6 grid grid-cols-2 gap-0.5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-3 xl:gap-3.5"
            >
              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={`${item.title}-${item.subtitle}`}
                    variants={fadeIn}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <Link
                      href={item.href || content.serviceLink}
                      className="group relative flex h-full min-h-[130px] flex-col justify-between rounded-[8px] border border-[#dfe7f1] bg-white p-3.5 shadow-[0_2px_8px_rgba(25,65,120,0.03)] transition-all duration-300 hover:border-[#bdd3f0] hover:bg-[#edf5ff] hover:shadow-[0_8px_20px_rgba(30,90,160,0.08)] sm:p-4"
                    >
                      {/* Icon + Title */}
                      <div className="flex items-start gap-1 md:gap-2">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e1edfe] transition-all duration-200 group-hover:scale-105 group-hover:bg-[#1264d4] sm:h-10 sm:w-10">
                          <Icon
                            size={18}
                            strokeWidth={1.8}
                            className="text-[#1264d4] transition-colors duration-200 group-hover:text-white"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-[12px] font-bold leading-[1.25] text-[#15233b] transition-colors duration-200 group-hover:text-[#1264d4] sm:text-[13px] xl:text-[13.5px]">
                            {item.title}
                          </h3>
                          <h4 className="text-[12px] font-bold leading-[1.25] text-[#15233b] transition-colors duration-200 group-hover:text-[#1264d4] sm:text-[13px] xl:text-[13.5px]">
                            {item.subtitle}
                          </h4>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-[9.5px] leading-[1.45] text-[#65758c] transition-colors duration-200 group-hover:text-[#1264d4] sm:text-[10px]">
                        {item.description}
                      </p>

                      {/* Arrow Icon */}
                      <div className="mt-2.5 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#d7e5fa] transition-colors duration-200 group-hover:bg-[#1264d4]">
                        <ArrowRight
                          size={13}
                          strokeWidth={2}
                          className="text-[#1264d4] transition-colors duration-200 group-hover:text-white"
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;