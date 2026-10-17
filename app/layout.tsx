import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import HeroProvide from "./context/HeroProvide";
import { investmentContent } from "./data/investmentContent";
import InitialLoader from "./common/components/InitialLoader";
// import BackgroundAnimation from "./common/components/BackgroundAnimation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: investmentContent.siteChrome.metadata.title,
  description: investmentContent.siteChrome.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-sans ${poppins.className}`}>
        <InitialLoader />
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
