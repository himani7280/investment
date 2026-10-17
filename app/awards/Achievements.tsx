'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Award, Heart, Users, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.awards;
const featureIcons = [Award, Heart, Users, ShieldCheck];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const, 
    },
  },
};

// ================= COMPONENT =================
const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = content.categories as string[];

  const filteredAwards = content.awards.filter((award) => {
    if (activeCategory === "All") return true;
    return (
      award.category?.trim().toLowerCase() ===
      activeCategory.trim().toLowerCase()
    );
  });

  return (
    <section className="w-full overflow-hidden bg-white pt-10 sm:pt-12 lg:pt-8">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* ================= TOP AREA ================= */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
                {content.featureBadge}
              </span>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-blue-600 sm:w-16"
              />
            </div>

            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-[40px]">
              {content.titleStart}
              <br className="hidden sm:block" />
              {content.titleMiddle}{" "}
              <span className="text-blue-600">
                {content.titleHighlight}
              </span>
            </h2>

            <p className="max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              {content.intro}
            </p>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-x-8 gap-y-7 rounded-2xl bg-slate-50/60 p-5 sm:grid-cols-2 sm:p-7 lg:p-8"
          >
            {content.featureItems.map((feature, index) => {
              const FeatureIcon = featureIcons[index];
              return (
                <motion.div
                  key={feature.title || index}
                  variants={itemVariants}
                  className="group flex cursor-pointer flex-col gap-2"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 transition-colors duration-200 group-hover:bg-blue-600"
                  >
                    <FeatureIcon className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white" />
                  </motion.div>

                  <h4 className="text-[16px] font-bold leading-snug text-gray-900">
                    {feature.title}
                  </h4>

                  <p className="text-sm leading-5 text-gray-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ================= AWARDS HEADING & CATEGORIES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-6 sm:mt-14 lg:mt-10 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* HEADING */}
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {content.awardsTitle}
            </h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden h-[2px] bg-blue-600 sm:block"
            />
          </div>

          {/* FILTER BUTTONS */}
          <div 
            className="flex w-full flex-wrap items-center gap-2 lg:w-auto" 
            role="group" 
            aria-label={content.filterAriaLabel}
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative cursor-pointer whitespace-nowrap text-blue-600 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-200 sm:px-5 sm:text-sm ${
                    isActive ? "text-blue-500" : "text-gray-700 hover:text-black"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 -z-10 rounded-full bg-blue-600 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ================= AWARDS GRID ================= */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredAwards.length > 0 ? (
              filteredAwards.map((award, index) => (
                <motion.div
                  key={award.id || `${award.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 sm:p-5">
                    <h4 className="mb-1 text-[15px] font-bold leading-snug text-gray-900 sm:text-[16px]">
                      {award.title}
                    </h4>

                    <span className="mb-1 block text-sm font-medium text-gray-500">
                      {award.year}
                    </span>

                    <p className="text-[13px] leading-5 text-gray-500 sm:text-[14px]">
                      {award.organization}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-10 text-center text-gray-500"
              >
                No awards found for this category.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;