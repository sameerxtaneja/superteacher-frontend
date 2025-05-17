'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn'; // adjust path if needed

const WhyWeStarted = () => {
  return (
    <section
      id="whyWeStarted"
      className="relative w-full px-6 md:px-16 py-24 text-[#1f1f1f] scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto space-y-10 z-10 relative">
        {/* Section Label */}
        <FadeIn>
          <p className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
            Why we started
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn>
          <h2 className="font-normal text-[48px] md:text-[56px] leading-[60px] text-[#1f1f1f]">
            In March 2025, we watched a teacher grade 200 exams
            <br />
            while she was pregnant.
          </h2>
        </FadeIn>

        {/* Subline */}
        <FadeIn>
          <p className="text-[36px] leading-[48px] text-gray-400 font-light">
            She was exhausted, buried under the stacks
            <br />
            of handwritten sheets with a <span className="text-red-400">red pen</span> in hand.
          </p>
        </FadeIn>

        {/* Second Label */}
        <FadeIn>
          <p className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
            Which led us to ask:
          </p>
        </FadeIn>

        {/* Red-bar Questions */}
        <div className="space-y-6">
          {[
            'What went wrong?',
            'Why do current interventions fail?',
            'How can it be better?',
          ].map((line, idx) => (
            <FadeIn key={idx}>
              <p className="flex items-start text-[32px] md:text-[36px] font-medium leading-[44px]">
                <span className="w-1.5 h-[44px] bg-red-500 mr-4 mt-1" />
                {line}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-8 max-w-3xl">
          {[
            <p className="text-xl leading-8 font-medium text-[#1f1f1f]">
              She had no rubrics, no tech. Just memory, instinct, and a quiet sense of duty.
            </p>,

            <p className="text-lg leading-7 italic text-gray-500">
              She told us: “Sometimes I wonder if I even have time to be a mother.”
            </p>,

            <p className="text-2xl leading-9 font-bold text-black">
              That hit hard. And she wasn’t alone.
            </p>,

            <p className="text-xl leading-8 font-medium text-[#1f1f1f]">
              We started speaking to more teachers.
            </p>,

            <p className="text-xl leading-8 font-medium text-[#1f1f1f]">
              70% of them were <span className="font-bold">on the edge of burnout.</span>
            </p>,
          ].map((block, idx) => (
            <FadeIn key={idx}>{block}</FadeIn>
          ))}

          {/* Grading Stress Lines */}
          {['Grading till midnight.', 'Skipping meals.', 'Outsourcing papers just to survive the load.'].map(
            (line, idx) => (
              <FadeIn key={`line-${idx}`}>
                <p className="text-[20px] leading-8 text-[#1f1f1f]">{line}</p>
              </FadeIn>
            )
          )}

          <FadeIn>
            <p className="text-xl leading-8 text-[#1f1f1f]">
              And while they were drowning, the entire ed-tech world kept building for students.
            </p>
          </FadeIn>

          {/* Final CTA Highlight Line */}
          <FadeIn>
            <p className="text-3xl font-bold leading-[2.5rem] text-red-500 flex flex-wrap gap-2">
              That’s when we knew, <br />
              This wasn’t just another project.
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-xl leading-8 text-[#1f1f1f]">
              So we dropped everything and started building for the person the system forgot.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStarted;
