
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Hero from "../../components/Hero";
import AboutMarry from "../../teamDetails/AboutMarry";
import {
  getTeamBySlug,
  getAllTeamSlugs,
  investmentContent,
} from "../../data/investmentContent";

export async function generateStaticParams() {
  const slugs = getAllTeamSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamBySlug(slug);

  if (!member) {
    return {
      title: `Team Member Not Found | ${investmentContent.siteChrome.metadata.title}`,
    };
  }

  return {
    title: `${member.name} | ${investmentContent.siteChrome.metadata.title}`,
    description: member.bio || investmentContent.siteChrome.metadata.description,
  };
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <div>
      <Hero
        page="ourTeam"
        title={member.name}
        image="/banner.webp"
        parent={{ label: "Our Team", href: "/ourTeam" }}
      />
      <AboutMarry data={member} />
    </div>
  );
}
