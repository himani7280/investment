"use client";

import Link from "next/link";
import Image from "next/image";
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

/* =========================
   Collage
========================= */

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

/* =========================
   About Section
========================= */

const AboutSection = () => {
  return (
    <section
      className={`relative mt-5 w-full overflow-hidden bg-white px-4 pt-6 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10`}
    >
      {/* Top Right Shape */}
      <div className="pointer-events-none absolute right-0 top-0 h-[150px] w-[140px] bg-gradient-to-br from-[#fafcff] to-[#e8f0fc] [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-[190px] sm:w-[170px] lg:h-[222px] lg:w-[14.6%]" />

      {/* Bottom Left Shape */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[40%] w-[18%] bg-[#f2f6fd] [clip-path:polygon(0_0,100%_100%,0_100%)] lg:block" />

      {/* Main Container */}
      <div className="page-gutter relative z-10 mx-auto w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* =========================
              LEFT IMAGE
          ========================= */}

          <Collage />

          {/* =========================
              RIGHT CONTENT
          ========================= */}

          <div className="relative z-20 w-full text-left">

            {/* Eyebrow */}
            <div className="inline-flex rounded-full border border-[#c9dcf6] bg-white px-[19px] py-[5px] text-[13px] font-medium tracking-[0.3px] text-[#2d6fc4]">
              {content.badge}
            </div>

            {/* Heading */}
            <h2 className="mt-[14px] text-[clamp(28px,3.4vw,46px)] font-bold leading-[1.13] tracking-[-0.01em] text-[#07152f]">
              {content.titleStart}
              <br />
              {content.titleMiddle}{" "}
              <span className="text-[#2d6fc4]">
                {content.titleHighlight}
              </span>
            </h2>

            {/* Blue Line */}
            <div className="mt-[14px] h-[3px] w-[60px] bg-[#2d6fc4]" />

            {/* Description */}
            <p className="mt-[26px] max-w-[600px] text-[15px] leading-[1.6] text-[#4b5870] lg:text-[15.5px]">
              {content.description}
            </p>

            {/* =========================
                FEATURES
            ========================= */}

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
                    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#e3ecfb] transition-all duration-200 group-hover:bg-[#2d6fc4] lg:h-[clamp(46px,4.3vw,58px)] lg:w-[clamp(46px,4.3vw,58px)]">
                      <Icon
                        size={26}
                        strokeWidth={1.9}
                        className="text-[#2d6fc4] transition-colors duration-200 group-hover:text-white"
                      />
                    </div>

                    {/* Feature Text */}
                    <div className="min-w-0 pt-[2px] text-left">
                      <h3 className="text-[14px] font-semibold leading-[1.3] text-[#17243a] lg:text-[clamp(12px,1.1vw,15px)]">
                        {feature.title}
                        <br />
                        {feature.subtitle}
                      </h3>

                      <p className="mt-[10px] text-[12px] leading-[1.5] text-[#5f6e84] lg:text-[clamp(10px,0.82vw,11.5px)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =========================
                BUTTON + DIVIDER + TEXT
            ========================= */}

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">

              {/* Dynamic Button */}
              <Link
                href={content.buttonLink}
                className="flex h-[50px] w-full max-w-[221px] items-center justify-center gap-5 rounded-[4px] bg-[#2d6fc4] px-6 text-[15px] font-medium text-white transition hover:bg-[#245fa9]"
              >
                {content.buttonText}

                <ArrowRight
                  size={19}
                  strokeWidth={1.8}
                />
              </Link>

              {/* Vertical Divider */}
              <div className="hidden h-[34px] w-px bg-[#9ba8ba] sm:ml-2 sm:block" />

              {/* Dynamic Closing Text */}
              <p className="text-[13px] leading-[1.5] text-[#4b5870]">
                <span className="whitespace-pre-line">
                  {content.callout}
                </span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;