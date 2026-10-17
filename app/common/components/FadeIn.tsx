"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export type FadeDirection = "none" | "up" | "down" | "left" | "right";

export interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

/**
 * Reusable Framer Motion Variants for fade animations
 */
export const fadeInVariants = {
  fade: (duration = 0.5, delay = 0): Variants => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  }),
  fadeUp: (distance = 24, duration = 0.55, delay = 0): Variants => ({
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  }),
  fadeDown: (distance = 24, duration = 0.55, delay = 0): Variants => ({
    hidden: { opacity: 0, y: -distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  }),
  fadeLeft: (distance = 24, duration = 0.55, delay = 0): Variants => ({
    hidden: { opacity: 0, x: -distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  }),
  fadeRight: (distance = 24, duration = 0.55, delay = 0): Variants => ({
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  }),
  staggerContainer: (staggerChildren = 0.12, delayChildren = 0.1): Variants => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }),
};

/**
 * Reusable FadeIn Component using Framer Motion
 * Can be wrapped around any element or section for smooth fade-in effects on scroll or mount.
 */
export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.55,
  distance = 24,
  className = "",
  once = true,
  amount = 0.15,
  ...rest
}: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance, x: 0 };
      case "down":
        return { opacity: 0, y: -distance, x: 0 };
      case "left":
        return { opacity: 0, x: -distance, y: 0 };
      case "right":
        return { opacity: 0, x: distance, y: 0 };
      case "none":
      default:
        return { opacity: 0, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reusable Stagger Container for coordinating multiple FadeIn children
 */
export function FadeInStagger({
  children,
  className = "",
  staggerDelay = 0.12,
  delayChildren = 0.05,
  once = true,
  amount = 0.15,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | "some" | "all";
} & Omit<HTMLMotionProps<"div">, "children">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={fadeInVariants.staggerContainer(staggerDelay, delayChildren)}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
