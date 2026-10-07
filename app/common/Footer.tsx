"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

// Animation Variants
const footerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const bottomBarVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Footer = () => {
  const content = investmentContent.siteChrome.footer;
  const socialIcons = {
    LinkedIn: FaLinkedinIn,
    Facebook: FaFacebookF,
    Instagram: FaInstagram,
    YouTube: FaYoutube,
  };

  return (
    <footer className="w-full bg-white font-sans text-[#52637e] overflow-hidden">
      {/* ================= Main Footer ================= */}
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-10 sm:pt-12 lg:pt-14 sm:px-10 pb-10 sm:pb-12 lg:pb-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={footerContainerVariants}
          className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1.1fr] lg:gap-8"
        >
          
          {/* ================= Column 1: Logo & Info ================= */}
          <motion.div variants={columnVariants} className="flex h-full flex-col justify-between pr-0 lg:pr-2">
            <div>
              {/* Logo */}
              <div className="mb-4 -ml-2 ">
                <Link href={investmentContent.siteChrome.header.navigation.items[0].href} aria-label={`${investmentContent.siteChrome.brandName} Home`}>
                  <Image
                    src={investmentContent.siteChrome.logo}
                    alt={investmentContent.siteChrome.brandName}
                    width={285}
                    height={55}
                    className="h-auto w-[220px] object-contain sm:w-[250px]"
                    priority
                  />
                </Link>
              </div>

              {/* Description */}
              <p className="max-w-[320px] text-[14px] leading-[1.6] text-[#5c6d88] sm:text-[15px]">
                {content.descriptionLines.map((line) => (
                  <Fragment key={line}>{line}<br /></Fragment>
                ))}
              </p>
            </div>

            {/* Social Media Circular Buttons */}
            <div className="mt-4 flex items-center gap-3 pt-2 lg:mt-auto">
              {content.socials.map((social) => {
                const Icon = socialIcons[social.platform as keyof typeof socialIcons];

                return (
                  <motion.a
                    key={social.platform}
                    href={social.href}
                    aria-label={social.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "#0052cc", color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f7fc] text-[#0b2855] shadow-sm"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* ================= Column 2: Quick Links ================= */}
          <motion.div variants={columnVariants} className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-8">
            <h3 className="mb-2 text-[18px] font-bold text-[#021838]">
              {content.quickLinksTitle}
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <ul className="space-y-2.5">
              {content.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[14px] text-[#52637e] transition-colors duration-200 hover:text-[#0052cc]"
                  >
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2"
                    >
                      <FaChevronRight
                        size={10}
                        className="text-[#0052cc] transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= Column 3: Our Services ================= */}
          <motion.div variants={columnVariants} className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-8">
            <h3 className="mb-2 text-[18px] font-bold text-[#021838]">
              {content.servicesTitle}
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <ul className="space-y-2.5">
              {content.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[14px] text-[#52637e] transition-colors duration-200 hover:text-[#0052cc]"
                  >
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2"
                    >
                      <FaChevronRight
                        size={10}
                        className="text-[#0052cc] transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= Column 4: Contact Us ================= */}
          <motion.div variants={columnVariants} className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-8">
            <h3 className="mb-2 text-[18px] font-bold text-[#021838]">
              {content.contactTitle}
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <div className="space-y-3.5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[#0052cc]">
                  <FaMapMarkerAlt size={15} />
                </div>
                <p className="pt-0.5 text-[14px] leading-snug text-[#52637e]">
                  {content.addressLines.map((line) => (
                    <Fragment key={line}>{line}<br /></Fragment>
                  ))}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[#0052cc]">
                  <FaPhoneAlt size={14} />
                </div>
                <div className="pt-0.5 text-[14px] leading-relaxed text-[#52637e]">
                  <a
                    href={content.phoneHref}
                    className="block transition-colors hover:text-[#0052cc]"
                  >
                    {content.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[#0052cc]">
                  <FaEnvelope size={14} />
                </div>
                <a
                  href={content.emailHref}
                  className="text-[14px] text-[#52637e] transition-colors hover:text-[#0052cc]"
                >
                  {content.email}
                </a>
              </div>

              {/* Hours */}
              {/* <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[#0052cc]">
                  <FaClock size={14} />
                </div>
                <p className="text-[14px] text-[#52637e]">
                  {content.hours}
                </p>
              </div> */}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ================= Bottom Bar ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bottomBarVariants}
        className="bg-[#021838] py-3 text-white"
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-3 px-3 text-center sm:px-10 lg:flex-row lg:text-left">
          <p className="text-[13px] text-slate-300">
            {content.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-slate-300">
            {content.legalLinks.map((link, index) => (
              <Fragment key={link.name}>
                {index > 0 && <span className="hidden h-4 w-px bg-slate-600 sm:block" />}
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.name}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;