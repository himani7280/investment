"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Grid } from "lucide-react";
import { motion } from "framer-motion";

import {
  HeroContext,
  type HeroPage,
} from "../context/HeroProvide";

import { investmentContent } from "../data/investmentContent";

interface HeroProps {
  page?: HeroPage;
  title?: string;
  image?: string;
  parent?: {
    label: string;
    href: string;
  };
}

const Hero = ({ page, title: customTitle, image: customImage, parent: customParent }: HeroProps) => {
  const heroData = useContext(HeroContext);

  const data = heroData && page ? heroData[page] : null;

  if (!data && !customTitle) {
    return (
      <div>
        {investmentContent.siteChrome.heroDataMissingText}
      </div>
    );
  }

  const title = customTitle || data?.title || "Service Detail";
  const image = customImage || data?.image || "/banner.webp";
  const parent = customParent || data?.parent;

  return (
    <section className="relative h-[200px] w-full overflow-hidden sm:h-[280px] lg:h-[361px]">
      {/* Background Image with subtle fade-in and scale-in */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1350px"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-[#0b1426]/65"
      />

      {/* Centered Title with smooth fade-in */}
      <div className="absolute inset-0 flex items-center justify-center px-4 pb-4">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center text-[32px] font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-[42px] md:text-[48px] lg:text-[52px]"
        >
          {title}
        </motion.h1>
      </div>

      {/* Breadcrumb with fade-in and slide-in */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex w-full max-w-[1440px] justify-end px-4 sm:px-6 lg:px-8 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
            className="pointer-events-auto"
          >
            <nav
              aria-label="Breadcrumb"
              className="
                flex
                items-center
                gap-2.5
                rounded-tl-lg
                bg-white
                px-4
                py-2.5
                text-sm
                font-medium
                shadow-lg
                sm:gap-3
                sm:px-6
                sm:py-3.5
                sm:text-base
              "
            >
              {/* Home */}
              <Link
                href="/"
                className="
                  font-semibold
                  text-[#1e293b]
                  transition-colors
                  hover:text-[#2563eb]
                "
              >
                Home
              </Link>

              {/* Parent Route */}
              {parent && (
                <>
                  <Grid className="h-3.5 w-3.5 text-[#0f172a] sm:h-4 sm:w-4" />

                  <Link
                    href={parent.href}
                    className="
                      font-semibold
                      text-[#1e293b]
                      transition-colors
                      hover:text-[#2563eb]
                    "
                  >
                    {parent.label}
                  </Link>
                </>
              )}

              {/* Current Page Separator */}
              <Grid className="h-3.5 w-3.5 text-[#0f172a] sm:h-4 sm:w-4" />

              {/* Current Page */}
              <span
                className="
                  max-w-[160px]
                  truncate
                  font-semibold
                  text-[#3b82f6]
                  sm:max-w-none
                "
              >
                {title}
              </span>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;