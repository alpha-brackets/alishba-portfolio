'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(currentScroll / scrollHeight, 0), 1);
        setScrollProgress(progress);
      }

      // Show after scrolling past 160px
      if (currentScroll > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circumference of a circle with radius 49: 2 * PI * 49 ≈ 307.876
  const pathLength = 307.876;
  const strokeDashoffset = pathLength - (scrollProgress * pathLength);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Background circular plate with luxury dark glass */}
      <div className="absolute inset-0 rounded-full bg-[#121216]/85 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)] group-hover:border-[#fd5b38]/40 group-hover:scale-105 transition-all duration-300" />

      {/* SVG Progress Circle Path (1:1 Webfolio standard) */}
      <svg
        className="w-full h-full p-[2px] -rotate-90 transform relative z-10"
        viewBox="-1 -1 102 102"
      >
        {/* Track outline */}
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="4"
        />
        {/* Dynamic progress stroke */}
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          fill="none"
          stroke="#fd5b38"
          strokeWidth="4"
          strokeDasharray={`${pathLength} ${pathLength}`}
          style={{
            strokeDashoffset: strokeDashoffset,
            transition: 'stroke-dashoffset 20ms linear',
          }}
          strokeLinecap="round"
        />
      </svg>

      {/* Upward chevron / arrow icon */}
      <span className="absolute inset-0 flex items-center justify-center text-white/70 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200 z-10">
        <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
      </span>
    </button>
  );
};
