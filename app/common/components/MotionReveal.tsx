"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface MotionRevealProps extends Pick<MotionProps, "transition" | "viewport"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: "up" | "left" | "right" | "down" | "fade" | "none";
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
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { y: 0, x: -distance };
      case "right":
        return { y: 0, x: distance };
      case "fade":
      case "none":
      default:
        return { y: 0, x: 0 };
    }
  };

  const offset = getOffset();

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
