"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

interface HeroSectionProps {
  data?: typeof investmentContent.homeHero;
}

const featureIcons = [BarChart3, ShieldCheck, Users];

const defaultFeatureLines = [
  ["Tailored to your unique goals."],
  ["Guidance from experienced", "financial advisors."],
  ["Building sustainable wealth", "for future generations."],
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const content = data || investmentContent.homeHero;

  const features = (content.features || []).map((feature, index) => ({
    ...feature,
    icon: featureIcons[index] || BarChart3,
    lines: defaultFeatureLines[index] ?? [feature.description],
  }));

  return (
    <section className="home-hero relative w-full overflow-hidden bg-white">
      {/* LEFT WHITE GRADIENT ONLY (Text backing) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-full bg-gradient-to-r from-white via-white/95 to-transparent md:block md:w-[60%] lg:w-[55%]" />

      {/* Right Artwork: Businessman, Laptop, Cityscape (Shifted slightly right on 768px+) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden aspect-[792/572] h-full md:block">
        <Image
          src="/hero-right.png"
          alt={content.imageAlt || "Plan, invest, grow, achieve with PrimeCore"}
          fill
          priority
          sizes="(min-width: 768px) 800px, 100vw"
          className="object-cover object-[82%_bottom]"
        />
      </div>

      <div className="section-container relative z-20 flex min-h-[440px] flex-col justify-between pt-4 pb-0 sm:pb-0 md:pb-4 lg:min-h-[480px] lg:pt-0 lg:pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[560px] pt-4 sm:pt-6 md:pt-[20px] lg:pt-[24px] xl:pt-[28px]"
        >
          {/* Badge */}
          <motion.p
            variants={fadeIn}
            className="text-[10px] font-medium tracking-[2.5px] text-[#33415c] sm:text-[11px] sm:tracking-[3px] uppercase"
          >
            {content.badge}
          </motion.p>

          {/* Accent Blue Underline */}
          <motion.div
            variants={fadeIn}
            className="mb-[16px] mt-[12px] h-[2px] w-[34px] bg-[#2d6fc4] sm:mb-[20px]"
          />

          {/* Main Title */}
          <motion.h1
            variants={fadeIn}
            className="text-[36px] font-bold leading-[1.05] tracking-[-1.2px] text-[#07122e] sm:text-[46px] lg:text-[54px] xl:text-[58px] lg:leading-[54px] xl:leading-[58px]"
          >
            {content.titleStart}
            <br />
            {content.titleBeforeHighlight ? `${content.titleBeforeHighlight} ` : "with "}
            <span className="text-[#2d6fc4]">{content.titleHighlight}</span>
            <br />
            {content.titleEnd}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="mt-[14px] max-w-[465px] text-[14px] leading-[22px] text-[#3f4f6b] lg:text-[14.8px]"
          >
            {content.description ||
              "At PrimeCore, we provide expert investment advisory services designed to help you achieve your financial goals and create a more secure tomorrow."}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeIn}
            className="mt-[24px] flex flex-col gap-3 min-[426px]:flex-row"
          >
            <Link
              href={content.primaryLink || "/bookConsultation"}
              className="flex h-[40px] w-full items-center justify-center gap-2.5 rounded-[4px] bg-[#2d6fc4] px-5 text-[13.5px] font-medium text-white transition hover:bg-[#245fa9] min-[426px]:w-[215px] shadow-[0_4px_12px_rgba(45,111,196,0.25)]"
            >
              {content.primaryButton}
              <ArrowRight size={15} strokeWidth={1.8} />
            </Link>
            <Link
              href={content.secondaryLink || "/service"}
              className="flex h-[40px] w-full items-center justify-center rounded-[4px] border border-[#7d8798] bg-white/60 px-5 text-[13.5px] font-medium text-[#0b1a33] transition hover:bg-white min-[426px]:w-[195px]"
            >
              {content.secondaryButton}
            </Link>
          </motion.div>
        </motion.div>

        {/* Small Screens Artwork Display (Only below 768px) */}
        <div
          className="relative -mx-5 mt-5 aspect-[792/572] sm:-mx-8 md:hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 14%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, #000 14%)",
          }}
        >
          <Image
            src="/hero-right.png"
            alt={content.imageAlt || "Plan, invest, grow, achieve with PrimeCore"}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-2 pb-6 pt-5 sm:grid-cols-3 sm:gap-1.5 lg:max-w-[680px] lg:grid-cols-[200px_215px_auto] max-xl:lg:rounded-md  max-xl:lg:py-2.5 max-xl:lg:backdrop-blur-sm md:mb-0 md:pb-2 md:pt-4 lg:mb-[16px] lg:-ml-[7px] lg:pb-0 lg:pt-5"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group cursor-pointer rounded-lg p-2.5 transition-all duration-300 md:bg-white md:shadow-sm md:border md:border-[#e2e8f0] hover:bg-[#eaf2fc]/70 ${
                  index !== 0
                    ? "sm:border-l sm:border-[#d3deec] lg:border-l-0 lg:pl-[14px]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2.5 lg:gap-[13px]">
                  {/* Icon Wrapper with Hover Animation */}
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#dce9f9] transition-all duration-300 group-hover:bg-[#2d6fc4] group-hover:shadow-md">
                    <Icon size={22} strokeWidth={1.6} className="text-[#2d6fc4] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Text Container */}
                  <div className="min-h-[44px] flex flex-col justify-center">
                    <h3 className="whitespace-nowrap text-[11px] font-semibold leading-[15px] text-[#0b1a33] transition-colors duration-200 group-hover:text-[#2d6fc4]">
                      {feature.title}
                    </h3>
                    <p className="mt-[2px] text-[9.2px] leading-[14px] text-[#5d6c82]">
                      {feature.lines.map((line: string, i: number) => (
                        <span key={i} className="block whitespace-nowrap">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;