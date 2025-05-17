"use client";

import React from "react";

const OurVision = () => {
  return (
    <section
      id="ourVision"
      className="relative w-full px-6 md:px-16 py-24 bg-[#FFFAF6] text-[#1f1f1f] scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto text-left space-y-10">
        {/* Section Label */}
        <p className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
          Our Vision
        </p>

        {/* Main Vision Text Block */}
        <div className="space-y-6 font-dm-sans text-[#303030] max-w-3xl">
          <h3 className="text-black font-bold text-[45px] leading-[56px]">
            We believe teachers are irreplaceable
          </h3>

          <p className="text-[25px] leading-[42px] font-normal">
            The world will build countless AI tutors, chatbots, and virtual
            assistants. But nothing - nothing - replaces a real teacher.
          </p>
          <p className="text-[25px] leading-[42px] font-normal">
            Teachers bring the magic of human connection, wisdom, mentorship,
            empathy, and belief.
          </p>
          <p className="text-[25px] leading-[42px] font-normal">
            They shape futures in ways no algorithm ever can.
          </p>
          <p className="text-[25px] leading-[42px] font-normal">
            At <span className="font-semibold text-black">Super Teacher</span>,
            we don’t replace teachers.
          </p>
          <p className="text-black font-bold text-[45px] leading-[56px]">
            We amplify them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
