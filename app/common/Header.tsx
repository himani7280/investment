
"use client";

import { MdMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoYoutube } from "react-icons/bi";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.siteChrome.header;
const socialIcons = {
  LinkedIn: FaLinkedinIn,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: BiLogoYoutube,
};

const Header = () => {
  return (
    <header className="fixed top-0 z-[60] w-full bg-gradient-to-r from-[#477fbd] to-[#3f75b2] text-white shadow-sm">
      <div
        className="
          mx-auto
          flex
          min-h-[37px]
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* Left - Tagline */}
        <div
          className="
            flex
            min-w-0
            items-center
            gap-2
            py-2
          "
        >
          <span className="shrink-0 text-[14px] sm:text-[15px] md:text-[16px]">
            ↗
          </span>

          <span
            className="
              truncate
              text-[11px]
              font-medium
              tracking-[0.1px]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            {content.tagline}
          </span>
        </div>

        {/* Right - Contact + Social */}
        <div className="hidden items-center md:flex">
          {/* Email */}
          <div className="flex items-center gap-2 px-3 lg:px-4">
            <MdMailOutline className="shrink-0 text-[16px]" />

            <a
              href={content.emailHref}
              className="
                whitespace-nowrap
                text-[12px]
                transition
                hover:text-gray-200
                lg:text-[13px]
              "
            >
              {content.email}
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-white/40" />

          {/* Phone */}
          <div className="flex items-center gap-2 px-3 lg:px-4">
            <IoCall className="shrink-0 text-[15px]" />

            <a
              href={content.phoneHref}
              className="
                whitespace-nowrap
                text-[12px]
                transition
                hover:text-gray-200
                lg:text-[13px]
              "
            >
              {content.phone}
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-white/40" />

          {/* Social Icons */}
          <div className="flex items-center gap-3 px-3 lg:gap-4 lg:px-1">
            {content.socials.map((social) => {
              const Icon = socialIcons[social.platform as keyof typeof socialIcons];

              return (
              <a
              key={social.platform}
              href={social.href}
              aria-label={social.platform}
              className="
                text-[15px]
                transition-transform
                duration-200
                hover:scale-110
                lg:text-[16px]
              "
            >
              <Icon />
            </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

