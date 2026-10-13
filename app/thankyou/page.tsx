import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';
import { investmentContent } from '../data/investmentContent';

export default function ThankYouPage() {
  const content = investmentContent.thankYouPage;

  return (
    <>
      <Head>
        <title>{content.title} | Investment Advisor</title>
        <meta name="description" content={content.description} />
      </Head>
      
      {/* Note: We pass page="thankyou" so the Hero component reads the correct title & image from Context/JSON */}
      <Hero page="thankyou" />
      
      <section className="flex-grow flex items-center justify-center px-4 py-12 md:p-8 md:mt-8 md:mb-8">
        <div className="text-center p-6 md:p-10 bg-white bg-opacity-80 rounded-xl shadow-lg backdrop-blur-md max-w-2xl mx-auto border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">{content.title}</h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            {content.description}
          </p>
          <Link href={content.buttonHref} className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition duration-300 w-full sm:w-auto">
            {content.buttonText}
          </Link>
        </div>
      </section>
    </>
  );
}
