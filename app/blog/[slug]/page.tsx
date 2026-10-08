import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Hero from "../../components/Hero";
import BlogContent from "../BlogDetail/BlogContent";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  investmentContent,
} from "../../data/investmentContent";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: `Blog Not Found | ${investmentContent.siteChrome.metadata.title}`,
    };
  }

  return {
    title: `${blog.title} | ${investmentContent.siteChrome.metadata.title}`,
    description:
      blog.introduction?.[0] ||
      investmentContent.siteChrome.metadata.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <Hero
        page="BlogDetail"
        title={blog.title}
        image="/banner.jpg"
      />
      <BlogContent data={blog} />
    </div>
  );
}
