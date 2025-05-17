'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn';

const WhyWeStarted = () => {
  return (
    <section
      id="whyWeStarted"
      className="relative w-full py-32 text-[#1f1f1f] scroll-mt-28 bg-gradient-to-br from-[#FFF9F3] via-[#FFF6F0] to-[#FFEDD5]"
    >
      <div className="w-full max-w-7xl px-6 md:px-16 mx-auto space-y-10 z-10 relative text-left">
        <FadeIn>
          <p className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
            Why we started
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="font-normal text-[52px] md:text-[64px] leading-[72px] text-[#1f1f1f]">
            In March 2025, we watched a teacher grade 200 exams
            <br />
            while she was pregnant.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="text-[40px] leading-[56px] text-gray-400 font-light">
            She was exhausted, buried under the stacks
            <br />
            of handwritten sheets with a <span className="text-red-400">red pen</span> in hand.
          </p>
        </FadeIn>

        <FadeIn>
          <p className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
            Which led us to ask:
          </p>
        </FadeIn>

        <div className="space-y-6">
          {[
            'What went wrong?',
            'Why do current interventions fail?',
            'How can it be better?',
          ].map((line, idx) => (
            <FadeIn key={idx}>
              <p className="flex items-start text-[36px] md:text-[40px] font-medium leading-[48px]">
                <span className="w-1.5 h-[48px] bg-red-500 mr-4 mt-1" />
                {line}
              </p>
            </FadeIn>
          ))}
        </div>

        <div className="pt-0" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none z-10" />
    </section>
  );
};

export default WhyWeStarted;
