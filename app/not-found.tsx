import Link from 'next/link';
import { investmentContent } from './data/investmentContent';

const content = investmentContent.siteChrome.notFound;

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        
        {/* 404 Number Section */}
        <div className="relative">
          <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter select-none">
            <span className="text-[#0f2044] drop-shadow-md">4</span>
            <span className="text-[#0070f3] drop-shadow-md">0</span>
            <span className="text-[#0f2044] drop-shadow-md">4</span>
          </h1>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2044]">
            {content.titleStart} <span className="text-[#0070f3]">{content.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            {content.descriptionLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <Link
            href={content.homeHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white transition-all bg-[#0070f3] rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm hover:shadow-md w-full sm:w-auto min-w-[200px]"
          >
            {/* Home Icon SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            {content.homeButtonText}
          </Link>

        </div>
      </div>
    </div>
  );
}