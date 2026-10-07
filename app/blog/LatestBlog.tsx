"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

interface Blog {
  id: number;
  date: string;
  month: string;
  year: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

const content = investmentContent.blogPage;
const blogs: Blog[] = content.items;

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const LatestBlog = () => {
  return (
    <section className="w-full bg-white pt-10 sm:pt-12 lg:pt-14 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-12">
        {/* Animated Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="mb-9 text-center sm:mb-10"
        >
          {/* Badge */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-blue-600 sm:w-11"></span>
            <span className="text-[11px] font-bold tracking-[1.5px] text-blue-600 sm:text-xs uppercase">
              {content.badge}
            </span>
            <span className="h-[2px] w-10 bg-blue-600 sm:w-11"></span>
          </div>

          {/* Title */}
          <h2 className="mx-auto max-w-[900px] text-[28px] font-bold leading-[1.2] text-[#0b2454] sm:text-[34px] md:text-[38px] lg:text-[40px]">
            {content.titleStart}{" "}
            <span className="text-blue-600">{content.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[650px] text-[14px] leading-5 text-slate-600 sm:text-[15px] sm:leading-6">
            {content.description}
          </p>
        </motion.div>

        {/* Animated Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full"
            >
              <Link
                href={blog.href || content.detailLink}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#dbe5f0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-blue-400 hover:shadow-[0_10px_30px_rgba(0,75,160,0.12)] cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative mx-1 mt-1 h-[175px] overflow-hidden rounded-[10px] sm:h-[185px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* 2D Flat 360 Rotation Date Badge */}
                  <div className="absolute left-4 top-4 flex h-[56px] w-[66px] flex-col items-center justify-center rounded-lg bg-blue-600 text-white shadow-md transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
                    <span className="text-[22px] font-bold leading-5">
                      {blog.date}
                    </span>
                    <span className="mt-[2px] text-[9px] font-semibold uppercase tracking-wide">
                      {blog.month} {blog.year}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col px-4 pb-5 pt-3 sm:px-5 sm:pb-6">
                  {/* Category */}
                  <div className="mb-2">
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-[4px] text-[9px] font-bold uppercase tracking-wide text-blue-600">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="min-h-[56px] text-[18px] font-bold leading-[1.35] text-[#0b2454] sm:text-[19px] transition-colors duration-200 group-hover:text-blue-600">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 flex-1 line-clamp-3 text-[13px] leading-[1.55] text-slate-600 sm:text-[14px]">
                    {blog.description}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                    <span>{content.readMoreText}</span>
                    <ArrowRight size={18} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlog;