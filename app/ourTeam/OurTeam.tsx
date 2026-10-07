"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { investmentContent } from '../data/investmentContent'

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  image: string
  profileUrl: string
}

const content = investmentContent.team
const teamMembers: TeamMember[] = content.items

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const OurTeam: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl bg-white px-4 sm:px-10 lg:px-12 pt-8 sm:pt-10 lg:pt-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#2563eb]"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1e3a8a] uppercase">
            {content.badge}
          </span>
          <span className="w-8 h-[2px] bg-[#2563eb]"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E48] tracking-tight mb-3">
          {content.titleStart} <span className="text-[#2563eb]">{content.titleHighlight}</span>
        </h2>
        <p className="text-[#64748b] text-sm sm:text-base max-w-xl mx-auto font-normal">
          {content.description}
        </p>
      </motion.div>

      {/* Team Cards Grid with Animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full bg-slate-100 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0B1E48]">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#2563eb] mt-0.5">
                  {member.role}
                </p>

                {/* Decorative underline */}
                <div className="w-6 h-[2px] bg-[#2563eb] my-3"></div>

                <p className="text-xs text-[#64748b] leading-relaxed mb-6">
                  {member.description}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={member.profileUrl}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2563eb] hover:gap-3 transition-all duration-200"
              >
                {content.profileButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default OurTeam