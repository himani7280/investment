"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface MotionRevealProps extends Pick<MotionProps, "transition" | "viewport"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: "up" | "left" | "right";
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  distance = 24,
  direction = "up",
  transition,
  viewport,
}: MotionRevealProps) {
  const offset = {
    up: { y: distance, x: 0 },
    left: { y: 0, x: -distance },
    right: { y: 0, x: distance },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport ?? { once: true, amount: 0.15 }}
      transition={transition ?? { duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
