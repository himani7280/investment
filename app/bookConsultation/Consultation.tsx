"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  LayoutGrid,
  Calendar,
  Clock,
  MessageSquare,
  ArrowRight,
  Lock,
  Users,
  MapPin,
  ShieldCheck,
  BarChart2,
  UserCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

import { investmentContent } from "../data/investmentContent";

const content = investmentContent.consultation;
const stepIcons = { Calendar, MessageSquare, UserCheck, BarChart2 };

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const leftColumnVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const rightColumnVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stepItemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Consultation = () => {
  return (
    <section className="w-full bg-[#f8fbff] pt-10 sm:pt-12 lg:pt-14 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10">
        
        {/* ================= SECTION 1: FORM & RIGHT CARD ================= */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* LEFT: FORM CONTAINER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={leftColumnVariants}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1a5bb8]">
                  {content.badge}
                </span>
                <span className="h-[2px] w-8 bg-[#1a5bb8]" />
              </motion.div>

              {/* Title */}
              <motion.h2 variants={itemVariants} className="mt-2 text-[28px] font-bold text-[#091e42] sm:text-[36px] lg:text-[40px] leading-[1.15]">
                {content.titleStart} <span className="text-[#1a73e8]">{content.titleHighlight}</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="mt-2 text-[13px] text-[#6b7c96] sm:text-[14px]">
                {content.description}
              </motion.p>

              {/* Form Fields Grid */}
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  
                  {/* Full Name */}
                  <motion.div variants={itemVariants} className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="text"
                      placeholder={content.namePlaceholder}
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </motion.div>

                  {/* Email Address */}
                  <motion.div variants={itemVariants} className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="email"
                      placeholder={content.emailPlaceholder}
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div variants={itemVariants} className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="tel"
                      placeholder={content.phonePlaceholder}
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </motion.div>

                  {/* Select Consultation Type */}
                  <motion.div variants={itemVariants} className="relative">
                    <LayoutGrid className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <select className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-8 text-[14px] text-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] appearance-none cursor-pointer">
                      <option value="">{content.typePlaceholder}</option>
                      {content.consultationTypes.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#8fa0b5]" />
                  </motion.div>

                  {/* Preferred Date */}
                  <motion.div variants={itemVariants} className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      placeholder={content.datePlaceholder}
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </motion.div>

                  {/* Preferred Time */}
                  <motion.div variants={itemVariants} className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <select className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-8 text-[14px] text-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] appearance-none cursor-pointer">
                      <option value="">{content.timePlaceholder}</option>
                      {content.preferredTimes.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#8fa0b5]" />
                  </motion.div>
                </div>

                {/* Textarea */}
                <motion.div variants={itemVariants} className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 text-[#8fa0b5]" size={18} />
                  <textarea
                    rows={4}
                    placeholder={content.goalsPlaceholder}
                    className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants} className="pt-2">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={content.submitHref}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066ff] px-6 py-3.5 text-[14px] font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#0052cc] sm:w-auto"
                    >
                      {content.submitText}
                      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Privacy Text */}
                <motion.div variants={itemVariants} className="flex items-start gap-2 pt-1 text-[12px] text-[#5e6e82]">
                  <Lock size={14} className="mt-0.5 shrink-0 text-[#091e42]" />
                  <span>{content.privacyText}</span>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: CARD WITH IMAGE & FEATURES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={rightColumnVariants}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-blue-900/5">
              
              {/* Image Banner Container */}
              <div className="relative h-[220px] w-full sm:h-[250px] overflow-hidden">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#031127]/80 via-[#031127]/40 to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute left-6 top-6 max-w-[200px]">
                  <h3 className="text-[22px] font-bold leading-[1.2] text-white">
                    {content.imageTitle}
                  </h3>
                  <div className="mt-3 h-[3px] w-8 bg-[#1a73e8]" />
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-5 bg-[#f7fbff] p-5 sm:p-6">
                
                {/* Item 1 */}
                <motion.div variants={itemVariants} className="group flex cursor-pointer items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 group-hover:bg-[#1a73e8] group-hover:text-white"
                  >
                    <Calendar size={20} />
                  </motion.div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#091e42] transition-colors duration-200 group-hover:text-[#1a73e8]">
                      {content.benefits[0].title}
                    </h4>
                    <p className="text-[12px] text-[#6b7c96]">
                      {content.benefits[0].description}
                    </p>
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div variants={itemVariants} className="group flex cursor-pointer items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 group-hover:bg-[#1a73e8] group-hover:text-white"
                  >
                    <Users size={20} />
                  </motion.div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#091e42] transition-colors duration-200 group-hover:text-[#1a73e8]">
                      {content.benefits[1].title}
                    </h4>
                    <p className="text-[12px] text-[#6b7c96]">
                      {content.benefits[1].description}
                    </p>
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div variants={itemVariants} className="group flex cursor-pointer items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 group-hover:bg-[#1a73e8] group-hover:text-white"
                  >
                    <MapPin size={20} />
                  </motion.div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#091e42] transition-colors duration-200 group-hover:text-[#1a73e8]">
                      {content.benefits[2].title}
                    </h4>
                    <p className="text-[12px] text-[#6b7c96]">
                      {content.benefits[2].description}
                    </p>
                  </div>
                </motion.div>

                {/* Item 4 */}
                <motion.div variants={itemVariants} className="group flex cursor-pointer items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 group-hover:bg-[#1a73e8] group-hover:text-white"
                  >
                    <ShieldCheck size={20} />
                  </motion.div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#091e42] transition-colors duration-200 group-hover:text-[#1a73e8]">
                      {content.benefits[3].title}
                    </h4>
                    <p className="text-[12px] text-[#6b7c96]">
                      {content.benefits[3].description}
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* ================= SECTION 2: WHAT TO EXPECT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mt-12 text-center"
        >
          
          {/* Header Subtitle */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1a5bb8]">
              {content.processBadge}
            </span>
            <span className="h-[2px] w-8 bg-[#1a5bb8]" />
          </motion.div>

          {/* Title */}
          <motion.h3 variants={itemVariants} className="mt-2 text-[28px] font-bold text-[#091e42] sm:text-[34px]">
            {content.processTitleStart} <span className="text-[#1a73e8]">{content.processTitleHighlight}</span>
          </motion.h3>

          {/* Description */}
          <motion.p variants={itemVariants} className="mt-2 text-[13px] text-[#6b7c96] sm:text-[14px]">
            {content.processDescription}
          </motion.p>

          {/* Process Grid */}
          <motion.div
            variants={containerVariants}
            className="relative mt-12 grid grid-cols-1 gap-x-4 gap-y-8 min-[420px]:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-8"
          >
            {content.steps.map((step, idx) => {
              const Icon = stepIcons[step.icon as keyof typeof stepIcons];
              return (
                <motion.div 
                  key={idx} 
                  variants={stepItemVariants} 
                  className="group relative flex cursor-pointer flex-col items-center text-center"
                >
                  
                  {/* Dashed Connector Line Between Circle Icons (Desktop Only) */}
                  {idx < content.steps.length - 1 && (
                    <div className="pointer-events-none absolute left-[55%] right-[-45%] top-10 hidden lg:block border-t-[2px] border-dashed border-[#c0d8f8]" />
                  )}

                  {/* Soft Light-Blue Circular Icon Wrapper */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef5ff] transition-colors duration-200 group-hover:bg-[#0066ff] sm:h-20 sm:w-20"
                  >
                    <Icon size={24} className="text-[#0066ff] transition-colors duration-200 group-hover:text-white sm:hidden" />
                    <Icon size={28} className="hidden text-[#0066ff] transition-colors duration-200 group-hover:text-white sm:block" />
                  </motion.div>

                  {/* Step Title */}
                  <h4 className="mt-3 sm:mt-5 text-[14px] sm:text-[15px] font-bold text-[#091e42] transition-colors duration-200 group-hover:text-[#0066ff]">
                    <span>{step.number} </span>
                    <span>{step.title}</span>
                  </h4>

                  {/* Step Description */}
                  <p className="mt-1 sm:mt-1.5 max-w-[180px] sm:max-w-[210px] text-[12px] sm:text-[13px] leading-[1.4] text-[#6b7c96]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Consultation;