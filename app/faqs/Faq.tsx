"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.faq;
const faqsData = content.faqs;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// ================= FAQ COMPONENT =================
const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 sm:pt-12 lg:pt-14">
      <div className="mx-auto w-full max-w-7xl px-8 sm:px-10 lg:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "2.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[2px] bg-blue-600 sm:w-12"
            />

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 sm:text-sm">
              {content.badge}
            </span>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "2.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[2px] bg-blue-600 sm:w-12"
            />
          </div>

          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {content.titleStart}{" "}
            <span className="text-blue-600">{content.titleHighlight}</span>
          </h2>

          <p className="text-sm leading-6 text-gray-500 sm:text-base">
            {content.description}
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">

          {/* ================= LEFT: FAQ ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 lg:col-span-8"
          >
            {faqsData.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  variants={itemVariants}
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-blue-100 bg-blue-50/30"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-5">

                      {/* NUMBER */}
                      <motion.div
                        animate={{
                          backgroundColor: isOpen ? "#2563eb" : "#eff6ff",
                          color: isOpen ? "#ffffff" : "#2563eb",
                        }}
                        transition={{ duration: 0.25 }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:h-10 sm:w-10 sm:text-sm"
                      >
                        {faq.number}
                      </motion.div>

                      {/* QUESTION */}
                      <h3
                        className={`text-sm font-bold transition-colors duration-200 sm:text-[17px] ${
                          isOpen ? "text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* PLUS / MINUS */}
                    <div className="shrink-0">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {isOpen ? (
                          <svg
                            className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </motion.div>
                    </div>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-5 pl-16 text-sm leading-6 text-gray-500 sm:px-5 sm:pb-6 sm:pl-[84px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:col-span-4"
          >

            {/* ================= CONTACT CARD ================= */}
            <div className="rounded-2xl bg-blue-50/50 p-5 sm:p-7">
              <h3 className="mb-2 text-xl font-extrabold text-gray-900 sm:text-2xl">
                {content.contact.titleStart}{" "}
                <span className="text-blue-600">{content.contact.titleHighlight}</span>
              </h3>

              <p className="mb-6 text-sm leading-6 text-gray-500">
                {content.contact.description}
              </p>

              {/* CONTACT METHODS */}
              <div className="mb-7 flex flex-col gap-5">

                {/* CALL */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </motion.div>

                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">
                      {content.contact.phoneLabel}
                    </span>
                    <span className="text-sm text-gray-500">
                      {content.contact.phone}
                    </span>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>

                  <div className="flex min-w-0 flex-col">
                    <span className="text-sm font-bold text-gray-900">
                      {content.contact.emailLabel}
                    </span>
                    <span className="break-all text-sm text-gray-500">
                      {content.contact.email}
                    </span>
                  </div>
                </div>

                {/* LIVE CHAT */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </motion.div>

                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">
                      {content.contact.chatLabel}
                    </span>
                    <span className="text-sm text-gray-500">
                      {content.contact.chatDescription}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={content.contact.buttonLink}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-6"
                >
                  {content.contact.buttonText}

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* ================= PROMO IMAGE CARD ================= */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-[280px] overflow-hidden rounded-2xl bg-gray-900 sm:min-h-[340px] lg:min-h-[400px]"
            >
              <Image
                src={content.promo.image}
                alt={content.promo.imageAlt}
                fill
                priority
                className="object-cover object-center opacity-80 transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />

              {/* DARK GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

              {/* TEXT */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-[28px]">
                  {content.promo.title}
                </h3>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "2rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-4 h-[2px] bg-blue-500"
                />

                <p className="text-sm leading-6 text-gray-300">
                  {content.promo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;