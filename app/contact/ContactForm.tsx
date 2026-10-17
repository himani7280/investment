"use client";

import React from "react";
import {
  User,
  Mail,
  Phone,
  Grid2X2,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  MapPin,
  Headphones,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.contactForm;

// Animation Variants
const formContainerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const infoContainerVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.2,
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

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="w-full bg-white pt-8 sm:pt-10 lg:pt-12 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-[#f8fbff] lg:grid-cols-[1.25fr_0.85fr] shadow-sm border border-[#e6f0fa]">
          
          {/* Form Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={formContainerVariants}
            className="p-5 sm:p-8 md:p-10 lg:p-8 xl:p-10"
          >
            {/* Form Header */}
            <motion.div variants={itemVariants} className="mb-7">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
                  {content.formBadge}
                </span>
                <span className="h-[2px] w-16 bg-[#3478e5]" />
              </div>

              <h2 className="text-2xl font-bold leading-tight text-[#102b66] sm:text-4xl">
                {content.formTitleStart}{" "}
                <span className="text-[#1265e8]">{content.formTitleHighlight}</span>
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#71809d] sm:text-base">
                {content.formDescription}
              </p>
            </motion.div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Email */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <User
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder={content.namePlaceholder}
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#5d6e89] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={content.emailPlaceholder}
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#5d6e89] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>
              </motion.div>

              {/* Row 2: Phone & Interest */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <Phone
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={content.phonePlaceholder}
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#5d6e89] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>

                <div className="relative">
                  <Grid2X2
                    size={18}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />
                  <select
                    name="interest"
                    defaultValue=""
                    className="h-[52px] w-full appearance-none rounded-md border border-[#dce7f7] bg-white pl-12 pr-11 text-sm text-[#5d6e89] outline-none transition focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  >
                    <option value="" disabled>
                      {content.interestPlaceholder}
                    </option>
                    {content.interestOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={19}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#587096]"
                  />
                </div>
              </motion.div>

              {/* Message Area */}
              <motion.div variants={itemVariants} className="relative">
                <MessageSquare
                  size={19}
                  strokeWidth={1.8}
                  className="absolute left-4 top-4 text-[#7184a7]"
                />
                <textarea
                  name="message"
                  placeholder={content.messagePlaceholder}
                  required
                  rows={6}
                  className="min-h-[150px] w-full resize-y rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 pt-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#5d6e89] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10 sm:min-h-[170px]"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-md bg-[#1168ed] px-7 text-sm font-semibold text-white shadow-md transition hover:bg-[#095bd5] sm:w-[250px]"
                >
                  <span>{content.submitText}</span>
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={infoContainerVariants}
            className="border-t border-[#dce7f7] bg-white p-5 sm:p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-8 xl:p-10"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-7">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
                  {content.contactBadge}
                </span>
                <span className="h-[2px] w-16 bg-[#3478e5]" />
              </div>

              <h2 className="text-2xl font-bold leading-tight text-[#102b66] sm:text-4xl">
                {content.contactTitleStart}{" "}
                <span className="text-[#1265e8]">{content.contactTitleHighlight}</span>
              </h2>

              <p className="mt-2 max-w-[430px] text-sm leading-6 text-[#71809d] sm:text-base">
                {content.contactDescription}
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <motion.div variants={itemVariants} className="flex gap-3 sm:gap-5 group">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 group-hover:bg-[#1265e8] sm:h-[66px] sm:w-[66px]"
                >
                  <Phone
                    size={28}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </motion.div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#102b66]">
                    {content.callTitle}
                  </h3>
                  <a
                    href={content.phoneHref}
                    className="mt-1 block text-[15px] font-medium text-[#314b7b] transition-colors hover:text-[#1265e8]"
                  >
                    {content.phone}
                  </a>
                  {/* <p className="mt-1 text-sm text-[#71809d]">
                    {content.callHours}
                  </p> */}
                </div>
              </motion.div>

              {/* Mail Card */}
              <motion.div variants={itemVariants} className="flex gap-3 sm:gap-5 group">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 group-hover:bg-[#1265e8] sm:h-[66px] sm:w-[66px]"
                >
                  <Mail
                    size={28}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </motion.div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#102b66]">
                    {content.emailTitle}
                  </h3>
                  <a
                    href={content.emailHref}
                    className="mt-1 block break-all text-[15px] font-medium text-[#314b7b] transition-colors hover:text-[#1265e8]"
                  >
                    {content.email}
                  </a>
                  <p className="mt-1 text-sm text-[#71809d]">
                    {content.emailResponse}
                  </p>
                </div>
              </motion.div>

              {/* Office Card */}
              <motion.div variants={itemVariants} className="flex gap-3 sm:gap-5 group">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 group-hover:bg-[#1265e8] sm:h-[66px] sm:w-[66px]"
                >
                  <MapPin
                    size={28}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </motion.div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#102b66]">
                    {content.officeTitle}
                  </h3>
                  <p className="mt-1 text-[15px] leading-6 text-[#314b7b]">
                    {content.addressLines.map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                 
                </div>
              </motion.div>

              {/* Support Card */}
              <motion.div variants={itemVariants} className="flex gap-3 sm:gap-5 group">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 group-hover:bg-[#1265e8] sm:h-[66px] sm:w-[66px]"
                >
                  <Headphones
                    size={28}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </motion.div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#102b66]">
                    {content.supportTitle}
                  </h3>
                  <p className="mt-1 text-[15px] text-[#314b7b]">
                    {content.supportDescription}
                  </p>

                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;