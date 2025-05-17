"use client";

import React from "react";
// import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative">
      <div className="text-center max-w-5xl">
        <h1 className="font-[800] text-[112px] leading-[130px] tracking-tight text-[#1f1f1f] font-dm-sans">
          India&apos;s first AI grading co-pilot <br />
          <span className=" font-[400] text-[#cccccc]">
            built for teachers.
          </span>
        </h1>

        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <a
            href="https://tally.so/r/w4ELKX"
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105 flex items-center space-x-2 font-Manrope-Medium text-lg"
          >
            {/* Join Icon */}
            <img
              src="/images/Join.png"
              alt="Join Icon"
              className="w-6 h-6 mr-2"
            />
            Join waitlist
          </a>

          {/* How it Works CTA */}
          <a
            href="#howItWorks"
            className="px-6 py-3 bg-white text-black border border-black rounded-xl hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 font-Manrope-Medium text-lg"
          >
            How it works
          </a>
        </div>
      </div>

      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default Hero;
