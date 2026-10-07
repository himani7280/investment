import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import HeroProvide from "./context/HeroProvide";
import { investmentContent } from "./data/investmentContent";
// import BackgroundAnimation from "./common/components/BackgroundAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: investmentContent.siteChrome.metadata.title,
  description: investmentContent.siteChrome.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <body className={`min-h-full flex flex-col ${poppins.className}`}>
        {/* <BackgroundAnimation /> */}
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
