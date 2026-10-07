"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.main
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-100 flex min-h-screen items-center justify-center bg-white"
          aria-label="Loading"
          role="status"
        >
          <div className="flex flex-col items-center gap-4">
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
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
