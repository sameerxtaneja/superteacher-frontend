'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn';

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 sm:py-32 relative overflow-hidden bg-white"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-gridScroll">
        <div className="w-full h-full bg-[length:100px_90px] bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]" />
      </div>

      {/* Foreground content */}
      <div className="text-center max-w-5xl relative z-10 pt-12 sm:pt-20">
        {/* ^ This padding moves it down slightly */}
        <FadeIn>
          <h1 className="font-dm-sans font-[800] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px] leading-tight tracking-tight text-[#1f1f1f]">
            Let AI do the{' '}
            <span className="text-gray-300 font-[500]">grading,</span> <br />
            You do the teaching.
          </h1>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 sm:mt-12 flex justify-center items-center gap-4">
            <a
              href="#howItWorks"
              className="px-6 py-3 bg-white text-black border border-black rounded-xl hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 font-Manrope-Medium text-lg"
            >
              Watch Demo
            </a>
          </div>
        </FadeIn>
      </div>

      {/* CTA Box */}
      <FadeIn>
        <a
          href="https://www.journalpressindia.com/gbs-impact-journal-of-multi-disciplinary-research/doi/10.58419/gbs.v10i2.1022416#:~:text=This%20qualitative%20study%20explores%20the,study%20concludes%20that%20addressing%20burnout"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 mb-0 bg-white/70 backdrop-blur-lg border border-gray-100 shadow-xl rounded-2xl px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-6 max-w-5xl w-full transition hover:shadow-2xl hover:scale-[1.01] relative z-10"
        >
          <p className="text-base sm:text-lg text-center sm:text-left text-gray-400 font-normal tracking-normal leading-relaxed">
            70% of teachers reported burnout in 2025.
          </p>

          <button className="px-6 py-3 bg-black text-white rounded-xl flex items-center space-x-2 text-base sm:text-lg font-medium hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105">
            <img src="/images/Join.png" alt="Join Icon" className="w-5 h-5" />
            <span>Join waitlist</span>
          </button>
        </a>
      </FadeIn>
      {/* Gradient Fade at Bottom */}
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white z-10 pointer-events-none" />
{/* Smooth gradient fade at bottom */}
<div className="absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none bg-gradient-to-b from-white/0 to-[#FFF7F0]" />
    </section>
  );
};
export default Hero;
