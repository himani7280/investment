'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  Link as LinkIcon,
  Users,
  Settings,
  TrendingUp,
  Award,
  GraduationCap,
  Check,
} from 'lucide-react'
import { type TeamMemberData } from '../data/investmentContent'

const expertiseIcons = { Users, Settings, TrendingUp, Award };

interface AboutMarryProps {
  data: TeamMemberData;
}


// Motion Variants
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const rightColVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Animated Counter Component with Scroll Trigger (Only Trigger 1 Time)
const AnimatedMetricCounter = ({
  target,
  suffix,
}: {
  target: number
  suffix: string
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [count, setCount] = useState(1)

  useEffect(() => {
    if (!isInView) return

    let animationFrame: number
    const duration = 1200 
    const start = performance.now()

    const updateValue = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) 
      const current = Math.max(1, Math.round(1 + (target - 1) * eased))

      setCount(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue)
      }
    }

    animationFrame = requestAnimationFrame(updateValue)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// Custom SVGs for Brand Social Icons (LinkedIn, Facebook, X/Twitter)
const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TwitterXIcon = () => (
  <svg className="w-5 h-5 fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function AboutMarry({ data }: AboutMarryProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined') {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className="mx-auto w-full max-w-[1440px] bg-white px-4 sm:px-6 lg:px-8 xl:px-10 font-sans antialiased text-slate-800 pt-10 sm:pt-12 lg:pt-14 overflow-hidden">
      {/* ==================== SECTION 1: TOP HERO ROW ==================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="mb-6 grid grid-cols-1 items-start gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-12"
      >
        {/* Left Column: Image + Integrated Stats Card */}
        <motion.div
          variants={leftColVariants}
          className="flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-[#F5F8FF] md:col-span-1 lg:col-span-4"
        >
          <div className="relative w-full h-[290px] overflow-hidden">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 py-5 text-center divide-x divide-blue-200/60 bg-[#F5F8FF]">
            <div className="px-1">
              <div className="text-xl font-extrabold text-[#0B1E48] sm:text-2xl">
                <AnimatedMetricCounter
                  target={data.metrics[0].target}
                  suffix={data.metrics[0].suffix}
                />
              </div>
              <div className="text-[11px] text-gray-500 font-medium leading-tight mt-1">
                {data.metrics[0].labelLines.map((line) => <span key={line} className="block">{line}</span>)}
              </div>
            </div>
            <div className="px-1">
              <div className="text-xl sm:text-2xl font-extrabold text-[#0B1E48]">
                <AnimatedMetricCounter
                  target={data.metrics[1].target}
                  suffix={data.metrics[1].suffix}
                />
              </div>
              <div className="text-[11px] text-gray-500 font-medium leading-tight mt-1">
                {data.metrics[1].labelLines.map((line) => <span key={line} className="block">{line}</span>)}
              </div>
            </div>
            <div className="px-1">
              <div className="text-xl sm:text-2xl font-extrabold text-[#0B1E48]">
                <AnimatedMetricCounter
                  target={data.metrics[2].target}
                  suffix={data.metrics[2].suffix}
                />
              </div>
              <div className="text-[11px] text-gray-500 font-medium leading-tight mt-1">
                {data.metrics[2].labelLines.map((line) => <span key={line} className="block">{line}</span>)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Column: Bio & Direct Contact Details */}
        <motion.div variants={itemVariants} className="flex h-full min-w-0 flex-col justify-between pt-1 md:col-span-1 lg:col-span-5">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] tracking-tight">{data.name}</h1>
            <p className="text-blue-600 font-semibold text-base mt-1 mb-2">{data.role}</p>
            <div className="w-8 h-[2px] bg-blue-600 mb-5"></div>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
              {data.bio}
            </p>
          </div>

          {/* Direct Contact Links */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <span className="text-gray-700">{data.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <span className="min-w-0 break-all text-gray-700">{data.email}</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-gray-700">{data.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Share Profile & Let's Connect Card */}
        <motion.div variants={rightColVariants} className="flex h-full min-w-0 flex-col justify-between pt-1 md:col-span-2 lg:col-span-3">


          {/* Let's Connect Card */}
          <div className="bg-[#F5F8FF] border border-blue-100 rounded-2xl p-6 mt-6 lg:mt-0 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1E48] mb-1">{data.connect.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                {data.connect.description}
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={data.connect.href}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                {data.connect.buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ==================== SECTION 2: MIDDLE ROW (ABOUT & SKILLS) ==================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mb-6 grid grid-cols-1 gap-6 border-t border-gray-100 pt-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-12"
      >
        {/* Left: About Paragraphs */}
        <motion.div variants={leftColVariants} className="md:col-span-1 lg:col-span-6 pr-0 lg:pr-4">
          <h2 className="text-lg font-bold text-[#0B1E48] mb-1">{data.aboutTitle}</h2>
          <div className="w-8 h-[2px] bg-blue-600 mb-4"></div>

          {data.aboutParagraphs.map((paragraph, index) => (
            <p key={paragraph} className={`text-gray-500 text-xs sm:text-sm leading-relaxed ${index === 0 ? "mb-4" : ""}`}>
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Right: Key Skills Progress Bars */}
        <motion.div variants={rightColVariants} className="md:col-span-1 lg:col-span-6">
          <h2 className="text-lg font-bold text-[#0B1E48] mb-1">{data.skillsTitle}</h2>
          <div className="w-8 h-[2px] bg-blue-600 mb-6"></div>

          <div className="space-y-5">
            {data.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs font-bold text-[#0B1E48] mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}{data.skillSuffix}</span>
                </div>
                <div className="w-full bg-blue-50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
                    className="bg-blue-600 h-full rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ==================== SECTION 3: BOTTOM ROW (EXPERTISE, QUOTE & EXPERIENCE) ==================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid grid-cols-1 items-stretch gap-6 border-t border-gray-100 pt-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-12"
      >
        {/* Column 1: Areas of Expertise */}
        <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-4 flex flex-col justify-start">
          <h2 className="text-lg font-bold text-[#0B1E48] mb-1">{data.expertiseTitle}</h2>
          <div className="w-8 h-[2px] bg-blue-600 mb-6"></div>

          <div className="space-y-4">
            {data.expertise.map((item) => {
              const Icon = expertiseIcons[item.icon as keyof typeof expertiseIcons];

              return (
                /* Individual Item Wrapper: Clicking or hovering on text/icon highlights specific icon to bg-blue-600 */
                <div
                  key={item.title}
                  className="group/item flex cursor-pointer items-center gap-3 transition-transform duration-200"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:shadow-sm">
                    <Icon className="h-4 w-4 transition-colors duration-300 group-hover/item:text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 leading-snug transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:text-[#0B1E48] sm:text-sm">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Column 2: Quote Box */}
        <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-4 bg-[#F5F8FF] border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="text-blue-600 text-5xl font-roboto font-bold leading-none mb-3">“</div>
            <p className="text-base sm:text-lg font-bold text-[#0B1E48] leading-snug mb-8">
              {data.quote}
            </p>
          </div>
          <div>
            <div className="w-8 h-[2px] bg-blue-600 mb-2"></div>
            <p className="text-xs font-bold text-[#0B1E48]">{data.quoteAuthor}</p>
          </div>
        </motion.div>

        {/* Column 3: Experience Timeline & Education */}
        <motion.div variants={rightColVariants} className="md:col-span-2 lg:col-span-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#0B1E48] mb-1">{data.experienceTitle}</h2>
            <div className="w-8 h-[2px] bg-blue-600 mb-6"></div>

            {/* Timeline with Inline Date Column */}
            <div className="relative border-l-2 border-blue-600 pl-4 space-y-5 ml-1">
              {data.experiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className="relative flex items-start gap-3">
                  {/* Blue Timeline Node */}
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600"></div>

                  <span className="text-[11px] font-semibold text-gray-400 shrink-0 w-20 pt-0.5">
                    {exp.period}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#0B1E48]">{exp.company}</div>
                    <div className="text-[11px] text-gray-500">{exp.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Pill */}
          <div className="flex items-center gap-3 pt-2">
            <div className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-200 hover:scale-110 hover:bg-blue-600 hover:text-white">
              <GraduationCap className="h-5 w-5 transition-colors group-hover:text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0B1E48]">
                {data.education.degree}
              </div>
              <div className="text-[11px] text-gray-500">{data.education.institution}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
