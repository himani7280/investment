import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroProvide from "./context/HeroProvide";
import { investmentContent, investmentFonts as fonts } from "@/data/investmentContent";
import InitialLoader from "@/components/common/InitialLoader";

const { metadata: siteMetadata } = investmentContent.siteChrome;

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={fonts.variables as CSSProperties}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fonts.stylesheet} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <InitialLoader />
        <HeroProvide>
          <Header />
          <Navbar />
          <main className="pt-[103px] lg:pt-[117px] flex-1">
            {children}
          </main>
          <Footer />
        </HeroProvide>
      </body>
    </html>
  );
}
