"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.whyChooseUs;

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Component jo string se numbers dhoond kar unhe 1 se animate karega (Only ONCE)
const InlineCounterText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayCount, setDisplayCount] = useState(1);
  const hasAnimated = useRef(false);

  // String me se pehle digits ko extract kar rahe hain (e.g. "500+ Happy Clients" -> target 500)
  const match = text.match(/\d+/);
  const targetNumber = match ? parseInt(match[0], 10) : null;

  useEffect(() => {
    // Agar element view me nahi aaya, number missing hai, ya ANIMATION PEHLE HO CHUKA HAI toh exit karein
    if (!isInView || !targetNumber || hasAnimated.current) return;

    hasAnimated.current = true; // Mark as animated so it never runs again

    let start = 1;
    const duration = 2000; // 2 seconds animation duration
    const totalSteps = 60;
    const stepTime = Math.max(Math.floor(duration / totalSteps), 16);
    const increment = (targetNumber - start) / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setDisplayCount(targetNumber);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  if (!targetNumber) return <>{text}</>;

  // String ko split karke animated number ke saath replace kar rahe hain
  const parts = text.split(match![0]);

  return (
    <span ref={ref}>
      {parts[0]}
      {displayCount}
      {parts[1]}
    </span>
  );
};

const Whychoose = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#031d46] py-10 sm:py-12 lg:py-14 mt-10 sm:mt-12 lg:mt-14">
      {/* Decorative Circles in Background */}
      <div className="absolute -left-[150px] top-[160px] h-[300px] w-[300px] rounded-full border border-[#16447f]/40 bg-[#062657]" />
      <div className="absolute -left-[105px] top-[210px] h-[205px] w-[205px] rounded-full border border-[#16447f]/30" />
      <div className="absolute left-[48%] top-[-150px] h-[300px] w-[300px] rounded-full bg-[#082b5d] opacity-60" />
      <div className="absolute left-[45%] bottom-[-130px] h-[280px] w-[280px] rounded-full bg-[#062957] opacity-70" />

      <div className="relative z-10 mx-auto flex max-w-[1440px] items-center px-4 sm:px-10 lg:px-10 xl:px-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[45%_55%] lg:gap-6 xl:gap-8">
          {/* LEFT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-20 max-w-[535px]"
          >
            {/* Small Heading Badge */}
            <motion.div variants={fadeIn} className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="block h-0 w-0 border-b-[7px] border-l-[12px] border-t-[7px] border-b-transparent border-l-[#38a8ff] border-t-transparent" />
                <span className="-ml-[4px] block h-0 w-0 border-b-[7px] border-l-[12px] border-t-[7px] border-b-transparent border-l-[#7268ff] border-t-transparent" />
              </div>
              <span className="text-[10px] font-semibold tracking-[1.5px] text-white/80 uppercase">
                {content.badge}
              </span>
              <span className="ml-1 h-[2px] w-[52px] bg-white/70" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={fadeIn}
              className="mt-4 max-w-[500px] text-[30px] font-bold leading-[1.08] tracking-[-1.2px] text-white sm:text-[38px] lg:text-[44px] xl:text-[48px]"
            >
              {content.titleLines[0]}
              <br />
              <span className="text-[#55baff]">{content.titleLines[1]}</span>
              <br />
              {content.titleLines[2]}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="mt-3.5 max-w-[470px] text-[12px] leading-[1.6] text-white/75 sm:text-[13px] lg:text-[14px]"
            >
              {content.description}
            </motion.p>

            {/* Trusted Clients (Ek baar animated counter run hoga) */}
            <motion.div
              variants={fadeIn}
              className="mt-6 flex items-center lg:mt-7"
            >
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#1554a2] lg:h-[50px] lg:w-[50px]">
                <Handshake size={22} strokeWidth={1.8} className="text-white" />
              </div>

              <div className="ml-3">
                <h3 className="text-[12px] font-bold leading-[1.3] text-white sm:text-[13px] lg:text-[14px]">
                  <span className="whitespace-pre-line">
                    <InlineCounterText text={content.trustedTitle} />
                  </span>
                </h3>
              </div>

              <div className="mx-4 h-[44px] w-[1px] bg-white/30 lg:h-[48px]" />
              <p className="max-w-[170px] text-[10px] leading-[1.45] text-white/70 sm:text-[11px] lg:text-[12px]">
                {content.trustedDescription}
              </p>
            </motion.div>

            {/* Get In Touch Button */}
            <motion.div variants={fadeIn}>
              <Link
                href={content.buttonLink}
                className="mt-6 inline-flex h-[44px] w-[210px] items-center justify-between rounded-full bg-gradient-to-r from-[#0da9f7] to-[#2565ee] pl-6 pr-2 text-[12px] font-semibold text-white shadow-[0_7px_20px_rgba(0,135,255,0.25)] transition hover:scale-[1.02] lg:h-[48px] lg:w-[225px]"
              >
                <span>{content.buttonText}</span>
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white lg:h-[36px] lg:w-[36px]">
                  <ArrowUpRight size={18} strokeWidth={2.2} className="text-[#1665d9]" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT CIRCLE COLLAGE WITH MOTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto flex h-[350px] w-full max-w-[560px] items-center sm:h-[390px] lg:h-[430px]"
          >
            {/* Top Left Circle: Image 1 */}
            <div className="absolute left-0 top-0 z-10 aspect-square w-[50%] max-w-[210px] overflow-hidden rounded-full border-[3px] border-[#48a9ff] sm:left-auto sm:right-[205px] sm:h-[195px] sm:w-[195px] lg:h-[210px] lg:w-[210px]">
              <Image
                src={content.decorativeImages[0].image}
                alt={content.decorativeImages[0].alt}
                fill
                sizes="(min-width: 1024px) 210px, (min-width: 640px) 195px, 50vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Top Right Circle: Service 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-[2%] z-20 flex h-[155px] w-[155px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#10a8f7] via-[#2175ed] to-[#3732d7] p-3 text-center shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:h-[220px] sm:w-[220px] lg:h-[235px] lg:w-[235px]"
            >
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white sm:h-[48px] sm:w-[48px] lg:h-[52px] lg:w-[52px]">
                <ShieldCheck size={24} strokeWidth={1.8} className="text-[#1766d7]" />
              </div>
              <h3 className="mt-2 text-[12px] font-bold leading-[1.15] text-white sm:text-[16px] lg:text-[18px]">
                <span className="whitespace-pre-line">{content.services[1].title}</span>
              </h3>
              <p className="mt-1 max-w-[140px] text-[8.5px] leading-[1.25] text-white/90 sm:text-[10px] lg:text-[10.5px]">
                {content.services[1].description}
              </p>
            </motion.div>

            {/* Bottom Right Circle: Image 2 */}
            <div className="absolute bottom-0 right-0 z-10 aspect-square w-[50%] max-w-[210px] overflow-hidden rounded-full border-[3px] border-[#317eea] sm:bottom-[5px] sm:right-[10px] sm:h-[195px] sm:w-[195px] lg:h-[210px] lg:w-[210px]">
              <Image
                src={content.decorativeImages[1].image}
                alt={content.decorativeImages[1].alt}
                fill
                sizes="(min-width: 1024px) 210px, (min-width: 640px) 195px, 50vw"
                className="object-cover object-right transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Bottom Left Circle: Service 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[2%] left-0 z-20 flex h-[155px] w-[155px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#13aaf7] via-[#2376ed] to-[#3630d7] p-3 text-center shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:bottom-[10px] sm:left-[70px] sm:h-[220px] sm:w-[220px] lg:h-[235px] lg:w-[235px]"
            >
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white sm:h-[48px] sm:w-[48px] lg:h-[52px] lg:w-[52px]">
                <TrendingUp size={24} strokeWidth={1.8} className="text-[#1766d7]" />
              </div>
              <h3 className="mt-2 text-[12px] font-bold leading-[1.15] text-white sm:text-[16px] lg:text-[18px]">
                <span className="whitespace-pre-line">{content.services[2].title}</span>
              </h3>
              <p className="mt-1 max-w-[140px] text-[8.5px] leading-[1.25] text-white/90 sm:text-[10px] lg:text-[10.5px]">
                {content.services[2].description}
              </p>
            </motion.div>

            {/* Decorative Spark Lines Top */}
            <div className="absolute right-0 top-2 hidden sm:block">
              <span className="absolute h-[38px] w-[3.5px] rotate-[18deg] rounded-full bg-[#6f7fff]" />
              <span className="absolute left-[18px] top-[10px] h-[30px] w-[3.5px] rotate-[42deg] rounded-full bg-[#6f7fff]" />
              <span className="absolute left-[33px] top-[24px] h-[22px] w-[3.5px] rotate-[65deg] rounded-full bg-[#6f7fff]" />
            </div>

            {/* Decorative Spark Lines Middle */}
            <div className="absolute left-[20px] top-[180px] hidden sm:block">
              <span className="absolute h-[30px] w-[3.5px] rotate-[35deg] rounded-full bg-[#3e9eff]" />
              <span className="absolute left-[15px] top-[6px] h-[24px] w-[3.5px] rotate-[55deg] rounded-full bg-[#3e9eff]" />
              <span className="absolute left-[27px] top-[16px] h-[19px] w-[3.5px] rotate-[75deg] rounded-full bg-[#3e9eff]" />
            </div>

            {/* Dot Grid */}
            <div className="absolute bottom-[8px] right-[-2px] hidden grid-cols-4 gap-[7px] sm:grid">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index} className="h-[4px] w-[4px] rounded-full bg-[#3264c3]" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;