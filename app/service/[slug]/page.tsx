import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Hero from "../../components/Hero";
import Overview from "../serviceDetail/Overview";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  investmentContent,
} from "../../data/investmentContent";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: `Service Not Found | ${investmentContent.siteChrome.metadata.title}`,
    };
  }

  return {
    title: `${service.title} | ${investmentContent.siteChrome.metadata.title}`,
    description:
      service.overviewParagraphs?.[0] ||
      investmentContent.siteChrome.metadata.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Hero
        page="serviceDetail"
        title={service.title}
        image="/banner.png"
      />
      <Overview data={service} />
    </div>
  );
}
