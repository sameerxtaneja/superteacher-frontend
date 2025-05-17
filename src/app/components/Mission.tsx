'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn'; // ✅ Adjust path if needed

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative w-full px-6 md:px-16 py-24 text-[#1f1f1f] scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto text-left space-y-10">
        {/* Section Label */}
        <FadeIn>
          <p className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
            Our Mission
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn>
          <h2 className="font-normal text-[48px] md:text-[56px] leading-[60px] text-[#1f1f1f]">
            We give teachers their time back,
            <br />
            so they can focus on what they love,{' '}
            <span className="text-red-400">teaching.</span>
          </h2>
        </FadeIn>

        {/* Paragraphs (Optional) */}
        {/* Uncomment if needed */}
        {/* <FadeIn>
          <div className="space-y-6 max-w-3xl">
            <p className="text-xl leading-8 font-medium text-[#1f1f1f]">
              Our mission is to reduce the grading burden for every teacher. We’re
              designing tools that support their workflow, not replace them.
            </p>
            <p className="text-[20px] leading-8 text-[#1f1f1f]">
              So they can sleep earlier. Smile more. And reconnect with why they
              started teaching in the first place.
            </p>
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
};

export default Mission;
