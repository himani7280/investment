"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main
      className="fixed inset-0 z-100 flex min-h-screen items-center justify-center bg-white"
      aria-label="Loading"
      role="status"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#dceaff]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#2d6fc4]"
          />
        </div>
        <span className="text-xs font-semibold tracking-[0.22em] text-[#2d6fc4]">
          LOADING
        </span>
      </motion.div>
    </main>
  );
}
