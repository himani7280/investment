import data from "./investment.json";

const sections = data.Investment.sections;

export const investmentTemplate =
  data.Investment.templateComponents["template-1"];

export const investmentContent = {
  heroes: {
    about: sections.Hero.variants.InvestmentAboutHero1,
    contact: sections.Hero.variants.InvestmentContactHero1,
    blog: sections.Hero.variants.InvestmentBlogHero1,
    service: sections.Hero.variants.InvestmentServicesHero1,
    investment: sections.Hero.variants.InvestmentProcessHero1,
    BlogDetail: {
      ...sections.Hero.variants.InvestmentBlogDetailHero1,
      parent: {
        label: "Blog",
        href: "/blog",
      },
    },
    serviceDetail: {
      ...sections.Hero.variants.InvestmentServiceDetailHero1,
      parent: {
        label: "Service",
        href: "/service",
      },
    },
    missionVision: sections.Hero.variants.InvestmentMissionVisionHero1,
    whyChooseUs: sections.Hero.variants.InvestmentWhyChooseUsHero1,
    ourTeam: sections.Hero.variants.InvestmentOurTeamHero1,
    teamDetails: sections.Hero.variants.InvestmentTeamDetailsHero1,
    ourPartners: sections.Hero.variants.InvestmentPartnersHero1,
    testimonials: sections.Hero.variants.InvestmentTestimonialsHero1,
    faqs: sections.Hero.variants.InvestmentFaqHero1,
    awards: sections.Hero.variants.InvestmentAwardsHero1,
    privacyPolicy: sections.Hero.variants.InvestmentPrivacyHero1,
    bookConsultation: sections.Hero.variants.InvestmentConsultationHero1,
    sitemap: sections.Hero.variants.InvestmentSitemapHero1,
    disclaimer: sections.Hero.variants.InvestmentDisclaimerHero1,
    termsConditions: sections.Hero.variants.InvestmentTermsHero1,
    thankyou: sections.Hero.variants.InvestmentThankYouHero1,
  },
  homeHero: sections.HomeHero.variants.InvestmentHomeHero1,
  about: sections.About.variants.InvestmentAbout1,
  services: sections.Services.variants.InvestmentServices1,
  howItWorks: sections.HowItWorks.variants.InvestmentHowItWorks1,
  trusted: sections.Trusted.variants.InvestmentTrusted1,
  whyChooseUs: sections.WhyChooseUs.variants.InvestmentWhyChooseUs1,
  testimonials: sections.Testimonials.variants.InvestmentTestimonials1,
  blog: sections.Blog.variants.InvestmentBlog1,
  partners: sections.Partners.variants.InvestmentPartners1,
  faq: sections.Faq.variants.InvestmentFaq1,
  awards: sections.Awards.variants.InvestmentAwards1,
  reviews: sections.Reviews.variants.InvestmentReviews1,
  privacyPolicy: sections.PrivacyPolicy.variants.InvestmentPrivacyPolicy1,
  team: sections.Team.variants.InvestmentTeam1,
  aboutPage: sections.AboutPage.variants.InvestmentAboutPage1,
  blogPage: sections.BlogPage.variants.InvestmentBlogPage1,
  blogDetail: sections.BlogDetailContent.variants.InvestmentBlogDetail1,
  missionVision: sections.MissionVisionContent.variants.InvestmentMissionVision1,
  siteChrome: sections.SiteChromeContent.variants.InvestmentSiteChrome1,
  contactForm: sections.ContactFormContent.variants.InvestmentContactForm1,
  consultation: sections.ConsultationContent.variants.InvestmentConsultation1,
  teamProfile: sections.TeamProfileContent.variants.InvestmentTeamProfile1.members,
  serviceDetail: sections.ServiceDetailContent.variants.InvestmentServiceDetail1,
  contactLocation: sections.ContactLocation.variants.InvestmentLocation1,
  investmentProcess: sections.InvestmentProcess.variants.InvestmentProcess1,
  processWork: sections.ProcessWork.variants.InvestmentProcessWork1,
  thankYouPage: sections.ThankYouContent.variants.InvestmentThankYou1,
};

export type TeamMemberData = (typeof sections.TeamProfileContent.variants.InvestmentTeamProfile1.members)["mary-merrill"];

export const getAllTeamSlugs = (): string[] => {
  const members = sections.TeamProfileContent.variants.InvestmentTeamProfile1.members;
  return members ? Object.keys(members) : [];
};

export const getTeamBySlug = (slug: string): TeamMemberData | null => {
  const members = sections.TeamProfileContent.variants.InvestmentTeamProfile1.members as Record<string, TeamMemberData> | undefined;
  if (!members) return null;
  const normalized = slug.toLowerCase();
  return normalized in members ? members[normalized] : null;
};

export type ServiceDetailData = (typeof sections.ServiceDetailContent.variants.InvestmentServiceDetail1.services)["wealth-management"];

export const getAllServiceSlugs = (): string[] => {
  const services = sections.ServiceDetailContent.variants.InvestmentServiceDetail1.services;
  return services ? Object.keys(services) : [];
};

export const getServiceBySlug = (slug: string): ServiceDetailData | null => {
  const services = sections.ServiceDetailContent.variants.InvestmentServiceDetail1.services as Record<string, ServiceDetailData> | undefined;
  if (!services) return null;
  const normalized = slug.toLowerCase();
  if (normalized in services) {
    return services[normalized];
  }
  if (normalized === "tax-consulting" && "tax-planning" in services) {
    return services["tax-planning"];
  }
  if (normalized === "business-advisory" && "business-financial-advisory" in services) {
    return services["business-financial-advisory"];
  }
  return null;
};

export type BlogDetailData = (typeof sections.BlogDetailContent.variants.InvestmentBlogDetail1.blogs)["smart-investment-strategies-for-long-term-wealth"];

export const getAllBlogSlugs = (): string[] => {
  const blogs = sections.BlogDetailContent.variants.InvestmentBlogDetail1.blogs;
  return blogs ? Object.keys(blogs) : [];
};

export const getBlogBySlug = (slug: string): BlogDetailData | null => {
  const blogs = sections.BlogDetailContent.variants.InvestmentBlogDetail1.blogs as Record<string, BlogDetailData> | undefined;
  if (!blogs) return null;
  const normalized = slug.toLowerCase();
  if (normalized in blogs) {
    return blogs[normalized];
  }
  if (normalized === "smart-investment-strategies" && "smart-investment-strategies-for-long-term-wealth" in blogs) {
    return blogs["smart-investment-strategies-for-long-term-wealth"];
  }
  if (normalized === "how-to-plan-finances" && "how-to-plan-your-finances-in-a-changing-economy" in blogs) {
    return blogs["how-to-plan-your-finances-in-a-changing-economy"];
  }
  if (normalized === "benefits-of-financial-advisor" && "key-benefits-of-working-with-a-financial-advisor" in blogs) {
    return blogs["key-benefits-of-working-with-a-financial-advisor"];
  }
  if (normalized === "mastering-risk-and-return" && "mastering-risk-and-return-in-volatile-markets" in blogs) {
    return blogs["mastering-risk-and-return-in-volatile-markets"];
  }
  if (normalized === "proactive-tax-strategies" && "proactive-tax-strategies-to-maximize-returns" in blogs) {
    return blogs["proactive-tax-strategies-to-maximize-returns"];
  }
  if (normalized === "bulletproof-retirement-plan" && "building-a-bulletproof-retirement-income-plan" in blogs) {
    return blogs["building-a-bulletproof-retirement-income-plan"];
  }
  return null;
};