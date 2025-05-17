'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn'; // adjust the path if needed

const ConnectInvitation = () => {
  return (
    <section
      id="connectInvitation"
      className="relative w-full px-6 md:px-16 py-24 text-[#1f1f1f] scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto space-y-10 z-10 relative text-left">
        <FadeIn>
          <p className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
            Connect with us
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="font-normal text-[48px] md:text-[56px] leading-[60px] text-[#1f1f1f]">
            We’re early. We’re building fast.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="text-[36px] leading-[48px] text-gray-600 font-light max-w-3xl">
            We’re listening more than we’re talking.
          </p>
        </FadeIn>

        <FadeIn>
          <p className="text-[24px] leading-[36px] font-normal max-w-3xl">
            If you’re a teacher, a school, or just curious –{' '}
            <span className="text-red-500 font-semibold">we’d love to talk.</span>
          </p>
        </FadeIn>

        <FadeIn>
          <a
            href="https://cal.com/samxt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-4 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition transform hover:scale-105"
          >
            Talk to Founders
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default ConnectInvitation;
