"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { investmentContent } from "@/app/data/investmentContent";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 300);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex min-h-screen items-center justify-center bg-white/95 backdrop-blur-sm"
          aria-label="Loading"
          role="status"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
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
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-xs font-semibold tracking-[0.22em] text-[#2d6fc4]"
            >
              {investmentContent.siteChrome.loaderText || "LOADING"}
            </motion.span>
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
