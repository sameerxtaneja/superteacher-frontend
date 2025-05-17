'use client';

import React from 'react';

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="min-h-screen w-full flex flex-col justify-center items-center px-4 pt-0 pb-0 md:px-10 bg-white -mb-10"
    >
      <h2 className="text-4xl md:text-6xl font-Manrope-Bold text-center -mt-16 mb-12">
        How it works
      </h2>

      <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-lg mb-0">
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
