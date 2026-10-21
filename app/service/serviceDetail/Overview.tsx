'use client'


import {
  UserRound,
  TrendingUp,
  ShieldCheck,
  UsersRound,
  Phone,
  Mail,
  ArrowRight,
  Scale,
  FileText,
  BriefcaseBusiness,
  PieChart,
  Globe2,
  Landmark,
  PiggyBank,
  CheckCircle2,
  Lock,
  BarChart3,
  Shield,
  Sprout,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { investmentContent, type ServiceDetailData } from "../../data/investmentContent";

const benefitIcons = {
  UserRound,
  TrendingUp,
  ShieldCheck,
  UsersRound,
  Scale,
  FileText,
  BriefcaseBusiness,
  PieChart,
  Globe2,
  Landmark,
  PiggyBank,
  CheckCircle2,
  Lock,
  BarChart3,
  Shield,
  Sprout,
  Handshake,
};

interface OverviewProps {
  data?: ServiceDetailData;
}

// Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const leftColVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const rightColVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Overview = ({ data }: OverviewProps) => {
  const content = data || investmentContent.serviceDetail;

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 sm:pt-12 lg:pt-14">
        <div className="grid grid-cols-1 gap-7 xl:grid-cols-[minmax(0,1fr)_315px]">
          <div>
            {/* HERO / OVERVIEW SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_325px]"
            >
              <motion.div variants={leftColVariants} className="min-w-0">
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#6883ad]">
                    {content.overviewBadge}
                  </span>

                  <span className="h-[2px] w-20 bg-[#4c9cff]" />
                </div>

                <h1 className="max-w-[540px] text-[34px] font-bold leading-[1.12] text-[#09295f] md:text-[35px]">
                  {content.titleLine1}
                  <br />
                  {content.titlePrefix}{" "}
                  <span className="text-[#1474e8]">
                    {content.titleHighlight}
                  </span>
                </h1>

                <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-[#7183a1]">
                  {content.overviewParagraphs[0]}
                </p>

                <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-[#7183a1]">
                  {content.overviewParagraphs[1]}
                </p>
              </motion.div>

              <motion.div
                variants={rightColVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-4/3 overflow-hidden rounded-xl md:aspect-3/4"
              >
                <img
                  src={content.image}
                  alt={content.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </motion.div>

            {/* BENEFITS SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="mt-10"
            >
              <div className="mb-6 flex items-center gap-5">
                <h2 className="text-[26px] font-bold text-[#09295f]">
                  {content.benefitsTitle}
                </h2>

                <span className="h-[2px] w-20 bg-[#4c9cff]" />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {content.benefits.map((benefit, index) => {
                  const Icon = benefitIcons[benefit.icon as keyof typeof benefitIcons] || ShieldCheck;

                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="group flex min-h-[120px] items-center gap-6 rounded-xl border border-[#e3eaf3] bg-white px-5 py-5 shadow-[0_2px_10px_rgba(30,80,150,0.03)] cursor-pointer"
                    >
                      <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#edf5ff] transition-colors duration-200 group-hover:bg-[#1474e8] sm:h-[76px] sm:w-[76px]">
                        <Icon
                          size={34}
                          strokeWidth={1.8}
                          className="text-[#0874ef] transition-colors duration-200 group-hover:text-white"
                        />
                      </div>

                      <div>
                        <h3 className="text-[17px] font-bold text-[#09295f]">
                          {benefit.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-5 text-[#7183a1]">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* OUR PROCESS SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="mt-10"
            >
              <div className="mb-6 flex items-center gap-5">
                <h2 className="text-[26px] font-bold text-[#09295f]">
                  {content.processTitle}
                </h2>

                <span className="h-[2px] w-20 bg-[#4c9cff]" />
              </div>

              <div className="grid grid-cols-1 gap-x-4 gap-y-8 min-[420px]:grid-cols-2 sm:gap-8 md:grid-cols-4">
                {content.process.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative text-center cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center">
                      <div
                        className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#edf5ff] text-[20px] font-bold text-[#075ed5] transition-all duration-200 group-hover:scale-108 group-hover:bg-[#1474e8] group-hover:text-white"
                      >
                        {item.number}
                      </div>

                      {/* Connecting Line (Only for large desktop view) */}
                      {index !== content.process.length - 1 && (
                        <div className="absolute left-[calc(50%+38px)] top-1/2 hidden h-[2px] w-[calc(100%-30px)] bg-[#9dcaff] xl:block" />
                      )}
                    </div>

                    <h3 className="mt-4 text-[16px] sm:text-[18px] font-bold text-[#09295f]">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[190px] text-[13px] sm:text-[14px] leading-5 text-[#7183a1]">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SIDEBAR SECTION */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={rightColVariants}
            className="space-y-6 xl:sticky xl:top-6 xl:self-start"
          >
            <div className="rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-7">
              <h2 className="text-[23px] font-bold text-[#09295f]">
                {content.adviceTitle}
              </h2>

              <div className="mb-5 mt-3 h-[2px] w-12 bg-[#4c9cff]" />

              <p className="text-[15px] leading-6 text-[#7183a1]">
                {content.adviceDescription}
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={content.adviceHref}
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-md bg-[#086df0] px-5 py-4 text-[15px] font-semibold text-white transition hover:bg-[#055dcc]"
                >
                  {content.adviceButtonText}
                  <ArrowRight size={19} />
                </Link>
              </motion.div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0874ef] text-white">
                    <Phone size={16} />
                  </div>

                  <a
                    href={content.phoneHref}
                    className="text-[14px] font-medium text-[#526887] transition-colors hover:text-[#0874ef]"
                  >
                    {content.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0874ef] text-white">
                    <Mail size={16} />
                  </div>

                  <a
                    href={content.emailHref}
                    className="break-all text-[14px] font-medium text-[#526887] transition-colors hover:text-[#0874ef]"
                  >
                    {content.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#e2eaf4] bg-white p-6">
              <h2 className="text-[22px] font-bold text-[#09295f]">
                {content.otherServicesTitle}
              </h2>

              <div className="mb-4 mt-3 h-[2px] w-12 bg-[#4c9cff]" />

              <div>
                {content.otherServices.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-4 py-3 ${
                      index !== content.otherServices.length - 1
                        ? "border-b border-[#e6edf5]"
                        : ""
                    }`}
                  >
                    <Link
                      href={service.href}
                      className="group flex flex-1 items-center gap-4"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-[70px] w-[76px] shrink-0 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                        <span className="text-[14px] font-semibold leading-5 text-[#09295f] transition-colors group-hover:text-[#0874ef]">
                          {service.title}
                        </span>

                        <div className="shrink-0 text-[#0874ef] transition-transform group-hover:translate-x-1">
                          <ArrowRight size={19} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Overview;