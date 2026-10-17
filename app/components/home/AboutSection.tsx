"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Users,
} from "lucide-react";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.about;

const featureIcons = [BarChart3, ShieldCheck, Users];

const features = content.features.map((feature, index) => ({
  ...feature,
  icon: featureIcons[index],
}));

const Collage = () => (
  <div className="relative mx-auto aspect-[594/530] w-full max-w-[594px]">
    <Image
      src={content.image}
      alt={content.imageAlt}
      fill
      sizes="(min-width: 1024px) 594px, 100vw"
      className="object-contain"
      priority
    />
  </div>
);

const AboutSection = () => {
  return (
    <section className="relative mt-5 w-full overflow-hidden bg-white pt-6 sm:pt-8 lg:pt-10 pb-0">
      {/* Top Right Shape */}
      <div className="pointer-events-none absolute right-0 top-0 h-[150px] w-[140px] bg-gradient-to-br from-[#fafcff] to-[#e8f0fc] [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-[190px] sm:w-[170px] lg:h-[222px] lg:w-[14.6%]" />

      {/* Bottom Left Shape */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[40%] w-[18%] bg-[#f2f6fd] [clip-path:polygon(0_0,100%_100%,0_100%)] lg:block" />

      {/* Main Container Aligned With Header and Footer */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          
          {/* LEFT: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Collage />
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative z-20 w-full text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex rounded-full border border-[#c9dcf6] bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#2d6fc4] sm:text-[12px]">
              {content.badge}
            </div>

            {/* Heading */}
            <h2 className="mt-[14px] text-[28px] font-bold leading-tight tracking-tight text-[#07152f] sm:text-[34px] lg:text-[38px]">
              {content.titleStart}
              <br />
              {content.titleMiddle}{" "}
              <span className="text-[#2d6fc4]">
                {content.titleHighlight}
              </span>
            </h2>

            {/* Blue Accent Line */}
            <div className="mt-[14px] h-[3px] w-[60px] bg-[#2d6fc4]" />

            {/* Description */}
            <p className="mt-[20px] max-w-[600px] text-[14px] leading-relaxed text-[#4b5870] sm:text-[15px]">
              {content.description}
            </p>

            {/* Features Row */}
            <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-y-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className={`group flex cursor-pointer min-w-0 items-start gap-3 ${
                      index > 0
                        ? "sm:border-l sm:border-[#dce4ef] sm:pl-[14px]"
                        : "sm:pr-[10px]"
                    } ${index === 1 ? "sm:pr-[10px]" : ""}`}
                  >
                    {/* Feature Icon */}
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#e3ecfb] transition-all duration-200 group-hover:bg-[#2d6fc4]">
                      <Icon
                        size={24}
                        strokeWidth={1.9}
                        className="text-[#2d6fc4] transition-colors duration-200 group-hover:text-white"
                      />
                    </div>

                    {/* Feature Text */}
                    <div className="min-w-0 pt-[2px] text-left">
                      <h3 className="text-[14px] font-semibold leading-[1.3] text-[#17243a] sm:text-[15px]">
                        {feature.title}
                        <br />
                        {feature.subtitle}
                      </h3>

                      <p className="mt-[6px] text-[12px] leading-[1.5] text-[#5f6e84]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button + Divider + Closing Callout */}
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href={content.buttonLink || "/aboutus"}
                className="flex h-[46px] w-full max-w-[210px] items-center justify-center gap-3 rounded-[6px] bg-[#2d6fc4] px-6 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#245fa9]"
              >
                {content.buttonText}
                <ArrowRight size={18} strokeWidth={2} />
              </Link>

              {/* Vertical Divider */}
              <div className="hidden h-[34px] w-px bg-[#9ba8ba] sm:ml-2 sm:block" />

              {/* Callout */}
              <p className="text-[13px] leading-[1.5] text-[#4b5870]">
                <span className="whitespace-pre-line">
                  {content.callout}
                </span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;