"use client";

import React, { createContext, ReactNode } from "react";
import { investmentContent } from "../data/investmentContent";

export interface ParentBreadcrumb {
  label: string;
  href: string;
}

export interface HeroData {
  title: string;
  image: string;
  parent?: ParentBreadcrumb;
}

export type HeroPage =
  | "about"
  | "contact"
  | "blog"
  | "service"
  | "investment"
  | "BlogDetail"
  | "serviceDetail"
  | "missionVision"
  | "whyChooseUs"
  | "ourTeam"
  | "teamDetails"
  | "ourPartners"
  | "testimonials"
  | "faqs"
  | "awards"
  | "privacyPolicy"
  | "bookConsultation"
  | "sitemap"
  | "disclaimer"
  | "termsConditions"
  | "thankyou";

export interface HeroContextType {
  about: HeroData;
  contact: HeroData;
  blog: HeroData;
  service: HeroData;
  investment: HeroData;
  BlogDetail: HeroData;
  serviceDetail: HeroData;
  missionVision: HeroData;
  whyChooseUs: HeroData;
  ourTeam: HeroData;
  teamDetails: HeroData;
  ourPartners: HeroData;
  testimonials: HeroData;
  faqs: HeroData;
  awards: HeroData;
  privacyPolicy: HeroData;
  bookConsultation: HeroData;
  sitemap: HeroData;
  disclaimer: HeroData;
  termsConditions: HeroData;
  thankyou: HeroData;
}

export const HeroContext = createContext<HeroContextType | null>(null);

interface HeroProviderProps {
  children: ReactNode;
}

const HeroProvider = ({ children }: HeroProviderProps) => {
  const heroData: HeroContextType = investmentContent.heroes;

  return (
    <HeroContext.Provider value={heroData}>
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;