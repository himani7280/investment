"use client";

import React, { useState } from "react";
import Image from "next/image";
import { investmentContent } from "../data/investmentContent";

interface ReviewType {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const content = investmentContent.reviews;
const reviewsData: ReviewType[] = content.items;

interface ReviewCardProps {
  review: ReviewType;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
      {/* Quote Icon */}
      <div className="pointer-events-none absolute right-5 top-5 text-blue-50 sm:right-6 sm:top-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* User Info */}
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Avatar */}
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:h-14 sm:w-14">
          <Image
            src={review.image}
            alt={review.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        {/* Name + Location + Rating */}
        <div className="min-w-0 pr-8">
          <h3 className="text-[16px] font-bold text-gray-900 sm:text-[17px]">
            {review.name}
          </h3>

          <p className="text-xs text-gray-500 sm:text-sm">{review.location}</p>

          {/* Stars */}
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: review.rating }).map((_, index) => (
              <svg
                key={index}
                className="h-3.5 w-3.5 fill-yellow-400 sm:h-4 sm:w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-relaxed">
        &quot;{review.text}&quot;
      </p>
    </div>
  );
};

const Review = () => {
  // Base items setup to form columns
  const baseReviews = reviewsData.length > 0 ? reviewsData : [];
  const minRequired = 12;
  const extendedReviews =
    baseReviews.length >= minRequired
      ? baseReviews
      : [...baseReviews, ...baseReviews, ...baseReviews, ...baseReviews];

  // Number of unique columns (each column contains 2 stacked cards)
  const totalColumns = Math.max(3, Math.floor(extendedReviews.length / 2));

  // Base columns set
  const baseCols = Array.from({ length: totalColumns }, (_, colIdx) => [
    extendedReviews[(colIdx * 2) % extendedReviews.length],
    extendedReviews[(colIdx * 2 + 1) % extendedReviews.length],
  ]);

  // Infinite Seamless Set: [Clone Set 1, Active Set, Clone Set 2]
  const displayColumns = [...baseCols, ...baseCols, ...baseCols];

  // Start at the middle set (offset index = totalColumns)
  const [currentIndex, setCurrentIndex] = useState(totalColumns);
  const [isAnimating, setIsAnimating] = useState(true);

  const handleNext = () => {
    if (!isAnimating) setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isAnimating) setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless jump without animation when boundaries are hit
  const handleTransitionEnd = () => {
    if (currentIndex >= totalColumns * 2) {
      setIsAnimating(false);
      setCurrentIndex(currentIndex - totalColumns);
    } else if (currentIndex < totalColumns) {
      setIsAnimating(false);
      setCurrentIndex(currentIndex + totalColumns);
    }
  };

  // Active page indicator calculation (1, 2, 3...)
  const activeDotIndex = (currentIndex % totalColumns) % 3;

  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 pb-0 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-8">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4">
            <div className="h-[2px] w-10 bg-blue-600 sm:w-12" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 sm:text-sm">
              {content.badge}
            </span>
            <div className="h-[2px] w-10 bg-blue-600 sm:w-12" />
          </div>

          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:mb-4 sm:text-4xl lg:text-5xl">
            {content.titleStart}{" "}
            <span className="text-blue-600">{content.titleHighlight}</span>
          </h2>

          <p className="text-sm leading-6 text-gray-500 sm:text-base lg:text-lg">
            {content.description}
          </p>
        </div>

        {/* ================= INFINITE 1-COLUMN SMOOTH SCROLL CAROUSEL ================= */}
        <div className="relative overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${
              isAnimating ? "transition-transform duration-500 ease-out" : ""
            }`}
            style={{
              // Move exactly 1 column per index shift (33.3333% on Desktop for 3 visible cols)
              transform: `translateX(-${currentIndex * 33.3333}%)`,
            }}
          >
            {displayColumns.map((colCards, colIdx) => (
              <div
                key={colIdx}
                className="w-full shrink-0 px-2.5 sm:w-1/2 lg:w-1/3"
              >
                <div className="flex flex-col gap-5 sm:gap-6">
                  {colCards.map((review, cardIdx) => (
                    <ReviewCard
                      key={`${review.id}-${colIdx}-${cardIdx}`}
                      review={review}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CONTROLS ================= */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-xs transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:h-11 sm:w-11"
            aria-label="Previous Column"
          >
            &#8592;
          </button>

          {/* Page Indicators (1, 2, 3) */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(totalColumns + num);
                }}
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-all sm:h-11 sm:w-11 sm:text-base ${
                  activeDotIndex === num
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {num + 1}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-xs transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:h-11 sm:w-11"
            aria-label="Next Column"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;