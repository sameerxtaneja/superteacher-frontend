'use client';

import React from 'react';

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 pt-6 sm:pt-0 pb-12 sm:pb-0 bg-white -mb-10"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-Manrope-Bold text-center -mt-4 sm:-mt-16 mb-3 sm:mb-2">
        How it works
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-500 font-normal text-center mb-10 sm:mb-20 px-2">
        a week of grading done in minutes.
      </p>

      <div className="w-full max-w-[90vw] sm:max-w-6xl aspect-video rounded-xl overflow-hidden shadow-lg mb-0">
        <iframe
          src="https://www.youtube.com/embed/H_6y-cAs2Go"
          title="How it works video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default HowItWorks;
