"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Users,
  FileText,
  Trophy,
  Handshake,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.trusted;
const statIcons = { Users, FileText, Trophy, Handshake };
const stats = content.stats.map((stat) => ({
  ...stat,
  icon: statIcons[stat.icon as keyof typeof statIcons] || Trophy,
}));

const formatDisplayValue = (value: number, raw: string) => {
  const suffix = raw.includes("%") ? "%" : raw.includes("+") ? "+" : "";
  const formatted = new Intl.NumberFormat("en-US").format(value);
  return `${formatted}${suffix}`;
};

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  // once: true ka matlab hai animation sirf EK BAAR hi chalega
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [count, setCount] = useState(1);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Agar viewport me nahi aya ya animation pehle ho chuka hai toh execution rok dein
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true; // Mark as animated

    const target = Number(value.replace(/[^\d]/g, "")) || 1;
    let animationFrame = 0;
    const duration = 1200; // 1.2 seconds
    const start = performance.now();

    const updateValue = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Smooth ease-out effect
      const current = Math.max(1, Math.round(1 + (target - 1) * eased));
      
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value]);

  return <span ref={ref}>{formatDisplayValue(count, value)}</span>;
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
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

const Trusted = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12 lg:py-14 mt-18 sm:mt-10 lg:mt-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={content.image || "/building.png"}
          alt="Trusted Building Impact"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark & Gradient Overlay */}
      <div className="absolute inset-0 bg-[#062b58]/85 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#031d46]/90 via-[#073670]/85 to-[#031d46]/90" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-[36px] bg-white/70" />
            <span className="text-[9px] font-semibold tracking-[3px] text-white uppercase sm:text-[10px] sm:tracking-[3.5px]">
              {content.badge}
            </span>
            <span className="h-[1px] w-[36px] bg-white/70" />
          </div>

          <h2 className="mt-3 text-[24px] font-bold leading-[1.12] tracking-[-0.6px] text-white sm:text-[30px] md:text-[34px] lg:text-[38px]">
            {content.titleStart}{" "}
            <span className="text-[#4c9df5]">{content.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[620px] text-[11px] leading-[1.55] text-white/80 sm:text-[12px] lg:text-[13px]">
            {content.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mx-auto mt-8 grid max-w-[1080px] grid-cols-2 gap-y-6 lg:mt-10 lg:grid-cols-4 lg:gap-y-0"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.number}
                variants={fadeIn}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="relative flex flex-col items-center px-3 py-2 text-center sm:px-4"
              >
                {/* Vertical Divider for Large Screens */}
                {index !== 0 && (
                  <div className="absolute left-0 top-[15px] hidden h-[85px] w-[1px] bg-white/25 lg:block" />
                )}

                {/* Icon */}
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform duration-300 hover:scale-110 sm:h-[56px] sm:w-[56px]">
                  <Icon size={24} strokeWidth={1.8} className="text-white" />
                </div>

                {/* Number (Pehli baar scroll karne par animate hoga, baad me same rahega) */}
                <h3 className="mt-3 text-[26px] font-bold leading-none tracking-[-0.8px] text-white sm:text-[32px] lg:text-[36px]">
                  <AnimatedCounter value={stat.number} />
                </h3>

                {/* Label */}
                <p className="mt-1.5 text-[10.5px] font-medium text-white/90 sm:text-[11.5px]">
                  {stat.label}
                </p>

                {/* Bottom Line */}
                <div className="mt-2.5 h-[2px] w-[26px] bg-[#1197f5] sm:w-[30px]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Trusted;