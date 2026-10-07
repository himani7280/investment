// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useContext } from "react";
// import { Grid } from "lucide-react";
// import {
//   HeroContext,
//   type HeroPage,
// } from "../context/HeroProvide";
// import { investmentContent } from "../data/investmentContent";

// interface HeroProps {
//   page: HeroPage;
// }

// const Hero = ({ page }: HeroProps) => {
//   const heroData = useContext(HeroContext);

//   if (!heroData) {
//     return null;
//   }

//   const data = heroData[page];

//   if (!data) {
//     return <div>{investmentContent.siteChrome.heroDataMissingText}</div>;
//   }

//   const { title, image, parent } = data;

//   return (
//     <section className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] min-h-[260px] max-h-[600px] overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src={image}
//         alt={title}
//         fill
//         priority
//         className="object-cover object-center"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40 pointer-events-none" />

//       {/* Centered Main Title */}
//       <div className="absolute inset-0 flex items-center justify-center px-4">
//         <h1 className="text-center text-3xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight">
//           {title}
//         </h1>
//       </div>

//       {/* White Box Breadcrumb */}
//       <div className="absolute bottom-0 right-0 sm:right-6 z-10">
//         <nav
//           aria-label="Breadcrumb"
//           className="flex items-center gap-2.5 sm:gap-3 rounded-tl-lg bg-white px-4 py-2.5 sm:px-6 sm:py-3.5 shadow-lg text-sm sm:text-base"
//         >
//           <Link
//             href="/"
//             className="font-semibold text-[#1e293b] transition-colors hover:text-[#2563eb]"
//           >
//             Home
//           </Link>

//           {/* Dynamic Parent Route (e.g., Home > Service OR Home > Blog) */}
//           {parent && (
//             <>
//               <Grid className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0f172a]" />
//               <Link
//                 href={parent.href}
//                 className="font-semibold text-[#1e293b] transition-colors hover:text-[#2563eb]"
//               >
//                 {parent.label}
//               </Link>
//             </>
//           )}

//           <Grid className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0f172a]" />

//           {/* Current Page Title */}
//           <span className="font-semibold text-[#3b82f6] truncate max-w-[160px] sm:max-w-none">
//             {title}
//           </span>
//         </nav>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Grid } from "lucide-react";

import {
  HeroContext,
  type HeroPage,
} from "../context/HeroProvide";

import { investmentContent } from "../data/investmentContent";

interface HeroProps {
  page?: HeroPage;
  title?: string;
  image?: string;
  parent?: {
    label: string;
    href: string;
  };
}

const Hero = ({ page, title: customTitle, image: customImage, parent: customParent }: HeroProps) => {
  const heroData = useContext(HeroContext);

  const data = heroData && page ? heroData[page] : null;

  if (!data && !customTitle) {
    return (
      <div>
        {investmentContent.siteChrome.heroDataMissingText}
      </div>
    );
  }

  const title = customTitle || data?.title || "Service Detail";
  const image = customImage || data?.image || "/banner.png";
  const parent = customParent || data?.parent;

  return (
    <section className="relative h-[200px] w-full overflow-hidden sm:h-[280px] lg:h-[361px]">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1350px"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0b1426]/65" />

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center px-4 pb-4">
        <h1 className="text-center text-[24px] font-bold leading-tight text-white sm:text-[32px] lg:text-[40px]">
          {title}
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="absolute bottom-0 right-0 z-10 sm:right-6">
        <nav
          aria-label="Breadcrumb"
          className="
            flex
            items-center
            gap-2.5
            rounded-tl-lg
            bg-white
            px-4
            py-2.5
            text-sm
            font-medium
            shadow-lg
            sm:gap-3
            sm:px-6
            sm:py-3.5
            sm:text-base
          "
        >
          {/* Home */}
          <Link
            href="/"
            className="
              font-semibold
              text-[#1e293b]
              transition-colors
              hover:text-[#2563eb]
            "
          >
            Home
          </Link>

          {/* Parent Route */}
          {parent && (
            <>
              <Grid className="h-3.5 w-3.5 text-[#0f172a] sm:h-4 sm:w-4" />

              <Link
                href={parent.href}
                className="
                  font-semibold
                  text-[#1e293b]
                  transition-colors
                  hover:text-[#2563eb]
                "
              >
                {parent.label}
              </Link>
            </>
          )}

          {/* Current Page Separator */}
          <Grid className="h-3.5 w-3.5 text-[#0f172a] sm:h-4 sm:w-4" />

          {/* Current Page */}
          <span
            className="
              max-w-[160px]
              truncate
              font-semibold
              text-[#3b82f6]
              sm:max-w-none
            "
          >
            {title}
          </span>
        </nav>
      </div>
    </section>
  );
};

export default Hero;