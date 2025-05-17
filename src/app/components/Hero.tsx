'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn';

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 py-20 sm:py-32 relative">
      <div className="text-center max-w-5xl">
        <FadeIn>
          <h1 className="font-[800] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px] leading-tight tracking-tight text-[#1f1f1f] font-dm-sans">
            India&apos;s first AI grading co-pilot <br />
            <span className="font-[400] text-[#cccccc]">built for teachers.</span>
          </h1>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://tally.so/r/w4ELKX"
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105 flex items-center space-x-2 font-Manrope-Medium text-lg"
            >
              <img src="/images/Join.png" alt="Join Icon" className="w-6 h-6 mr-2" />
              Join waitlist
            </a>

            <a
              href="#howItWorks"
              className="px-6 py-3 bg-white text-black border border-black rounded-xl hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 font-Manrope-Medium text-lg"
            >
              How it works
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
