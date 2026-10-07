"use client";

import { motion, Variants } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

const processStepIcons = [
  {
    icon: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 17.5C10 12.253 14.477 8 20 8H28C33.523 8 38 12.253 38 17.5C38 22.747 33.523 27 28 27H22L15 33V27.5C11.993 25.78 10 22.62 10 17.5Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="19" cy="18" r="1.8" fill="currentColor" />
        <circle cx="24" cy="18" r="1.8" fill="currentColor" />
        <circle cx="29" cy="18" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 6H29L36 13V42H14V6Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M29 6V14H36"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M19 21H31M19 27H31M19 33H27"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 7L27 10.5L32 9.5L34 14L39 16L37.5 21L41 24L37.5 27L39 32L34 34L32 39L27 37.5L24 41L21 37.5L16 39L14 34L9 32L10.5 27L7 24L10.5 21L9 16L14 14L16 9.5L21 10.5L24 7Z"
          fill="currentColor"
        />
        <circle cx="24" cy="24" r="6" fill="white" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 39V27H17V39H9Z" fill="currentColor" />
        <path d="M20 39V20H28V39H20Z" fill="currentColor" />
        <path d="M31 39V12H39V39H31Z" fill="currentColor" />
        <path
          d="M9 19L18 14L25 17L38 8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 8H38V13"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="15"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r="6"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M24 9V18M39 24H30M24 39V30M9 24H18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M24 24L34 14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M30 14H34V18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const processSteps = investmentContent.investmentProcess.steps.map(
  (step, index) => ({ ...step, icon: processStepIcons[index].icon })
);

// Explicitly typing Framer Motion Variants resolves TypeScript easing errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: 0.35,
      ease: "easeOut",
    },
  },
};

const OurProcess = () => {
  return (
    <section className="w-full bg-white pt-10 sm:pt-12 lg:pt-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-18" />

            <span className="text-sm font-semibold tracking-wide text-[#6382ae]">
              {investmentContent.investmentProcess.badge}
            </span>

            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-18" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#102e65] sm:text-4xl lg:text-[42px]">
            {investmentContent.investmentProcess.titleStart}{" "}
            <span className="text-[#1769e0]">
              {investmentContent.investmentProcess.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[#61799e] sm:text-base sm:leading-7">
            {investmentContent.investmentProcess.description}
          </p>
        </motion.div>

        {/* ================= PROCESS STEPS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-x-4 gap-y-10 min-[380px]:grid-cols-2 sm:gap-x-6 lg:grid-cols-5 lg:gap-0"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex min-w-0 flex-col items-center px-1 text-center group"
            >
              {/* ================= ICON ================= */}
              <div className="relative mb-4 sm:mb-5">
                {/* NUMBER BADGE */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="
                    absolute
                    -left-1
                    -top-5
                    z-20
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-white
                    bg-[#1769e0]
                    text-xs
                    font-bold
                    text-white
                    shadow-md
                    sm:-top-6
                    sm:h-11
                    sm:w-11
                    sm:text-base
                  "
                >
                  {step.number}
                </motion.div>

                {/* ICON CIRCLE */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="
                    flex
                    h-[76px]
                    w-[76px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#eaf3ff]
                    text-[#1769e0]
                    shadow-sm
                    transition-colors
                    duration-300
                    group-hover:bg-[#1769e0]
                    group-hover:text-white
                    group-hover:shadow-lg
                    sm:h-[92px]
                    sm:w-[92px]
                    cursor-pointer
                  "
                >
                  <div className="scale-85 sm:scale-100 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </motion.div>
              </div>

              {/* ================= TITLE ================= */}
              <h3 className="mb-1 text-lg font-bold text-[#102e65] sm:mb-2 sm:text-xl transition-colors duration-200 group-hover:text-[#1769e0]">
                {step.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}
              <p className="max-w-[190px] text-xs leading-4 text-[#60789e] sm:text-sm sm:leading-5">
                {step.description}
              </p>

              {/* ================= ARROW / CONNECTOR ================= */}
              {index < processSteps.length - 1 && (
                <div
                  className="
                    absolute
                    left-[calc(100%_-_1px)]
                    top-[46px]
                    hidden
                    w-[70px]
                    lg:block
                  "
                >
                  <div className="relative flex w-full justify-center items-center right-8">
                    {/* ANIMATED LINE */}
                    <motion.div
                      variants={lineVariants}
                      className="h-[2px] w-full bg-[#8ebeff] origin-left"
                    />

                    {/* ARROW */}
                    <motion.span
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                      className="
                        absolute
                        right-0
                        top-1/2
                        flex
                        h-5
                        w-5
                        -translate-y-1/2
                        items-center
                        justify-center
                        bg-white
                        text-[#1769e0]
                      "
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6H10M6 2L10 6L6 10"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;