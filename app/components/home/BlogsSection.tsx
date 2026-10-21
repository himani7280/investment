"use client";


import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

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

const content = investmentContent.blog;
const blogs: Blog[] = content.items;
const detailLink = "/blog/BlogDetail";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const BlogsSection = () => {
  return (
    <section className="w-full bg-white pt-2 sm:pt-10 lg:pt-14">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-blue-600 sm:w-10"></span>
            <span className="text-[11px] font-semibold tracking-wider text-blue-600 uppercase sm:text-[12px]">
              {content.badge}
            </span>
            <span className="h-[2px] w-9 bg-blue-600 sm:w-10"></span>
          </div>

          <h2 className="mx-auto max-w-[900px] text-[28px] font-bold leading-tight tracking-tight text-[#0b2454] sm:text-[34px] lg:text-[38px]">
            {content.titleStart}{" "}
            <span className="text-blue-600">{content.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[650px] text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            {content.description}
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Link
                href={blog.href || detailLink}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#dbe5f0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#bcd7f7] hover:shadow-[0_10px_25px_rgba(0,75,160,0.10)] cursor-pointer"
              >
                <div>
                  <div className="relative mx-1.5 mt-1.5 h-[175px] overflow-hidden rounded-[9px] sm:h-[185px]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Date Badge */}
                    <div className="absolute left-3.5 top-3.5 flex h-[52px] w-[62px] flex-col items-center justify-center rounded-lg bg-blue-600 text-white shadow-md transition-transform duration-700 ease-out group-hover:rotate-[360deg] group-hover:scale-105">
                      <span className="text-[20px] font-bold leading-none">
                        {blog.date}
                      </span>
                      <span className="mt-[3px] text-[8.5px] font-semibold uppercase tracking-wide">
                        {blog.month} {blog.year}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 pb-3 pt-3.5 sm:px-5">
                    <div className="mb-2">
                      <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-[3px] text-[8.5px] font-bold uppercase tracking-wide text-blue-600">
                        {blog.category}
                      </span>
                    </div>

                    <h3 className="line-clamp-2 text-[16px] font-bold leading-[1.3] text-[#0b2454] transition-colors duration-200 group-hover:text-blue-600 sm:text-[17px]">
                      {blog.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[12px] leading-[1.55] text-slate-600 sm:text-[13px]">
                      {blog.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
                  <div className="inline-flex items-center gap-2 text-[12.5px] font-bold text-blue-600 transition-all duration-300 group-hover:gap-3">
                    {content.readMoreText}
                    <ArrowRight
                      size={16}
                      strokeWidth={2.2}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
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

export default BlogsSection;