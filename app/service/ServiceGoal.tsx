"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  Scale,
  Shield,
  TrendingUp,
  Users,
  UsersRound,
} from "lucide-react";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.services.servicePage;
const serviceIcons = {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  Scale,
  Shield,
  TrendingUp,
  Users,
  UsersRound,
};

// Animation Variants
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ServiceGoal = () => {
  return (
    <section className="w-full bg-white pt-10 sm:pt-12 lg:pt-14">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Animated Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
          className="mb-9 text-center sm:mb-11 lg:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-[68px]" />

            <span className="text-sm font-semibold tracking-wide text-[#6682ad]">
              {content.badge}
            </span>

            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-[68px]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#102e65] sm:text-4xl lg:text-[42px]">
            {content.titleStart}{" "}
            <span className="text-[#1769e0]">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#62799e] sm:text-base sm:leading-7">
            {content.description}
          </p>
        </motion.div>

        {/* Animated Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {content.items.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col cursor-pointer overflow-hidden rounded-lg border border-[#e2eaf5] bg-white shadow-sm transition-all duration-300 hover:border-[#1769e0] hover:shadow-lg"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col px-5 pb-5 pt-12">
                    {/* Floating Icon Container */}
                    <div
                      className="absolute -top-8 left-5 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-white shadow-sm transition-colors duration-300 bg-[#e8f2ff] text-[#1769e0] group-hover:bg-[#1769e0] group-hover:text-white"
                    >
                      <Icon size={31} strokeWidth={1.8} />
                    </div>

                    <h3 className="min-h-12 text-lg font-bold leading-6 text-[#102e65] transition-colors duration-200 group-hover:text-[#1769e0]">
                      {service.title}
                    </h3>

                    <p className="mt-2 min-h-[68px] flex-1 text-sm leading-6 text-[#61799e]">
                      {service.description}
                    </p>

                    <div className="mt-4 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#1769e0] transition-all duration-200 group-hover:gap-4">
                      {content.readMoreText}
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
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
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGoal;