"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, FolderOpen, UserRound } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.blogDetail;

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const BlogHeroDetail = () => {
  return (
    <section className="w-full bg-white pt-10 sm:pt-12 lg:pt-14 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-10">
          
          {/* Main Article Content */}
          <motion.article 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-w-0"
          >
            {/* Meta Info Bar */}
            <motion.div variants={fadeInUp} className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-[#31558f] sm:gap-x-5 sm:text-sm">
              <div className="group flex items-center gap-2">
                <CalendarDays size={20} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{content.date}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <UserRound size={20} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{content.authorPrefix} {content.author}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <FolderOpen size={20} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{content.category}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <Clock3 size={20} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{content.readTime}</span>
              </div>
            </motion.div>

            {/* Main Featured Image */}
            <motion.div variants={imageVariants} className="relative mb-5 h-[230px] overflow-hidden rounded-lg sm:h-[320px] md:h-[390px] lg:h-[410px]">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </motion.div>

            {/* Introduction Paragraphs */}
            {content.introduction.map((paragraph, idx) => (
              <motion.p key={idx} variants={fadeInUp} className="mb-4 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
                {paragraph}
              </motion.p>
            ))}

            {/* First Section */}
            {content.sections.slice(0, 1).map((section) => (
              <motion.div key={section.heading} variants={fadeInUp}>
                <h2 className="mb-1 text-xl font-bold text-[#102d63] sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="mb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}

            {/* Quote Block */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-6 rounded-lg bg-[#edf6ff] px-5 py-5 sm:px-8 sm:py-6 border-l-4 border-[#1769e0]"
            >
              <div className="flex gap-4">
                <div className="text-5xl font-bold leading-none text-[#72b4ff]">
                  “
                </div>
                <p className="pt-1 text-sm font-semibold leading-6 text-[#17417e] sm:text-base">
                  {content.quote}
                </p>
              </div>
            </motion.div>

            {/* Remaining Sections */}
            {content.sections.slice(1).map((section) => (
              <motion.div key={section.heading} variants={fadeInUp}>
                <h2 className="mb-1 text-xl font-bold text-[#102d63] sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="mb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}

            {/* Closing */}
            <motion.p variants={fadeInUp} className="border-b border-[#dce6f3] pb-5 text-[15px] leading-6 text-[#536b91] sm:text-base sm:leading-7">
              {content.closing}
            </motion.p>
          </motion.article>

          {/* Sidebar */}
          <motion.aside 
            initial="hidden"
            animate="visible"
            variants={sidebarVariants}
            className="space-y-6"
          >
            {/* Recent Posts */}
            <div className="rounded-lg bg-[#f4f8fd] p-5 sm:p-6">
              <h3 className="mb-5 text-xl font-bold text-[#102d63]">
                {content.recentPostsTitle}
              </h3>

              <div className="space-y-5">
                {content.recentPosts.map((post) => (
                  <Link key={post.title} href={post.href} className="group flex gap-3">
                    <div className="relative h-[72px] w-24 shrink-0 overflow-hidden rounded-md sm:h-[82px] sm:w-[120px] xl:w-[135px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-108"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold leading-5 text-[#102d63] transition-colors duration-200 group-hover:text-[#1769e0]">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#3982e8]">
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Advice / CTA Box */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1675e8] to-[#083b86] p-7 text-white shadow-md"
            >
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
                <div className="h-full w-full -skew-x-12 bg-white" />
              </div>

              <div className="relative">
                <div className="mb-3 h-[2px] w-12 bg-[#9ccfff]" />

                <p className="mb-1 text-sm font-medium text-[#dcecff]">
                  {content.advice.eyebrow}
                </p>

                <h3 className="mb-3 text-2xl font-bold leading-8">
                  {content.advice.titleLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </h3>

                <p className="mb-5 text-sm leading-5 text-[#dcecff]">
                  {content.advice.description}
                </p>

                <Link
                  href={content.advice.href}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#1769e0] transition duration-300 hover:bg-[#f0f6ff] sm:w-auto sm:px-7"
                >
                  <span>{content.advice.buttonText}</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Categories */}
            <div className="rounded-lg bg-[#f4f8fd] p-5 sm:p-6">
              <h3 className="mb-4 text-xl font-bold text-[#102d63]">
                {content.categoriesTitle}
              </h3>

              <div className="divide-y divide-[#dce6f3]">
                {content.categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="group -mx-2 flex items-center justify-between rounded-md px-2 py-3 text-sm text-[#31558f] transition-all duration-200 hover:bg-[#1769e0] hover:text-white"
                  >
                    <span>{category.name}</span>
                    <ArrowRight size={18} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-white group-hover:text-[#1769e0]" />
                  </Link>
                ))}
              </div>
            </div>

          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroDetail;