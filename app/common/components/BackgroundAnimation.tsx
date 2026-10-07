"use client";

import { motion } from "framer-motion";

// Floating shape configs
const floatingShapes = [
  {
    className:
      "absolute top-[5%] right-[10%] h-20 w-20 rounded-full bg-blue-100/40 blur-xl sm:h-28 sm:w-28 lg:h-36 lg:w-36",
    animate: { y: [0, -25, 0], x: [0, 12, 0], scale: [1, 1.1, 1] },
    duration: 8,
  },
  {
    className:
      "absolute top-[20%] -left-6 h-16 w-16 rounded-full bg-blue-200/30 blur-lg sm:h-24 sm:w-24 lg:h-32 lg:w-32",
    animate: { y: [0, 20, 0], x: [0, -10, 0], scale: [1, 1.15, 1] },
    duration: 10,
  },
  {
    className:
      "absolute top-[45%] right-[5%] h-14 w-14 rounded-full bg-indigo-100/30 blur-lg sm:h-20 sm:w-20 lg:h-28 lg:w-28",
    animate: { y: [0, 18, 0], x: [0, -15, 0], scale: [1, 1.08, 1] },
    duration: 9,
  },
  {
    className:
      "absolute top-[15%] left-[40%] h-10 w-10 rounded-full bg-sky-100/40 blur-md sm:h-16 sm:w-16 lg:h-20 lg:w-20",
    animate: { y: [0, -15, 0], x: [0, 8, 0], scale: [1, 1.12, 1] },
    duration: 7,
  },
  {
    className:
      "absolute top-[60%] left-[25%] h-12 w-12 rounded-full bg-blue-50/50 blur-lg sm:h-18 sm:w-18 lg:h-24 lg:w-24",
    animate: { y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.05, 1] },
    duration: 11,
  },
  {
    className:
      "absolute top-[75%] right-[20%] h-16 w-16 rounded-full bg-blue-100/25 blur-xl sm:h-24 sm:w-24 lg:h-32 lg:w-32",
    animate: { y: [0, 22, 0], x: [0, -12, 0], scale: [1, 1.1, 1] },
    duration: 9.5,
  },
  {
    className:
      "absolute top-[90%] left-[10%] h-14 w-14 rounded-full bg-indigo-50/35 blur-lg sm:h-20 sm:w-20 lg:h-28 lg:w-28",
    animate: { y: [0, -18, 0], x: [0, 14, 0], scale: [1, 1.07, 1] },
    duration: 8.5,
  },
  // Small geometric dots & diamonds
  {
    className:
      "absolute top-[8%] right-[22%] h-3 w-3 rotate-45 rounded-sm bg-blue-300/20 sm:h-4 sm:w-4",
    animate: { y: [0, -12, 0], rotate: [45, 90, 45], opacity: [0.2, 0.5, 0.2] },
    duration: 6,
  },
  {
    className:
      "absolute top-[35%] right-[15%] h-2.5 w-2.5 rotate-12 rounded-sm bg-indigo-300/25 sm:h-3.5 sm:w-3.5",
    animate: { y: [0, 10, 0], rotate: [12, -30, 12], opacity: [0.25, 0.5, 0.25] },
    duration: 7.5,
  },
  {
    className:
      "absolute top-[55%] left-[8%] h-2 w-2 rounded-full bg-blue-400/20 sm:h-3 sm:w-3",
    animate: { y: [0, -8, 0], x: [0, 6, 0], opacity: [0.2, 0.6, 0.2] },
    duration: 5,
  },
  {
    className:
      "absolute top-[70%] right-[35%] h-2 w-2 rounded-full bg-sky-400/15 sm:h-3 sm:w-3",
    animate: { y: [0, 12, 0], x: [0, -5, 0], opacity: [0.15, 0.45, 0.15] },
    duration: 6.5,
  },
  {
    className:
      "absolute top-[85%] left-[45%] h-3 w-3 rotate-45 rounded-sm bg-blue-200/20 sm:h-4 sm:w-4",
    animate: { y: [0, -10, 0], rotate: [45, 135, 45], opacity: [0.2, 0.45, 0.2] },
    duration: 8,
  },
];

const BackgroundAnimation = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft pulsing radial gradient — top left */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 40% at 15% 30%, rgba(219,234,254,0.45) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 40% at 20% 25%, rgba(199,220,252,0.55) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 40% at 15% 30%, rgba(219,234,254,0.45) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft pulsing radial gradient — right side */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(ellipse 45% 50% at 85% 40%, rgba(224,231,255,0.3) 0%, transparent 70%)",
            "radial-gradient(ellipse 45% 50% at 80% 45%, rgba(199,210,254,0.4) 0%, transparent 70%)",
            "radial-gradient(ellipse 45% 50% at 85% 40%, rgba(224,231,255,0.3) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom center gradient */}
      <motion.div
        className="absolute inset-0 opacity-35"
        animate={{
          background: [
            "radial-gradient(ellipse 50% 35% at 50% 85%, rgba(219,234,254,0.3) 0%, transparent 70%)",
            "radial-gradient(ellipse 50% 35% at 55% 80%, rgba(199,220,252,0.4) 0%, transparent 70%)",
            "radial-gradient(ellipse 50% 35% at 50% 85%, rgba(219,234,254,0.3) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top-right decorative triangle */}
      <div
        className="
          absolute right-0 top-0
          h-[180px] w-[140px]
          bg-gradient-to-bl from-blue-50/50 to-transparent
          [clip-path:polygon(40%_0,100%_0,100%_100%)]
          sm:h-[250px] sm:w-[200px]
          lg:h-[350px] lg:w-[280px]
        "
      />

      {/* Floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={shape.className}
          animate={shape.animate}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
