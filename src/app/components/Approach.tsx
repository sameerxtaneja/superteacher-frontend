'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn'; // ✅ Make sure path is correct

const Approach = () => {
  return (
    <section className="w-full flex items-center justify-center py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl sm:text-6xl font-Manrope-Bold text-black mb-16">
            Our Approach
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* First Box */}
          <FadeIn>
            <div className="w-full md:w-1/3 rounded-lg flex flex-col items-center text-center mb-10 md:mb-0">
              <img
                src="/images/Approach1.png"
                alt="Approach Image"
                className="w-full h-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-Manrope-SemiBold mb-2">
                Built for simplicity
              </h3>
              <p className="max-w-[300px] mx-auto">
                Scan, grade, done—no training needed.
              </p>
            </div>
          </FadeIn>

          {/* Second Box */}
          <FadeIn>
            <div className="w-full md:w-1/3 rounded-lg flex flex-col items-center text-center mb-10 md:mb-0">
              <img
                src="/images/Approach2.png"
                alt="Approach Image"
                className="w-full h-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-Manrope-SemiBold mb-2">
                Designed for teachers
              </h3>
              <p className="max-w-[200px] mx-auto">
                Every tap saves time, every screen feels familiar
              </p>
            </div>
          </FadeIn>

          {/* Third Box */}
          <FadeIn>
            <div className="w-full md:w-1/3 rounded-lg flex flex-col items-center text-center">
              <img
                src="/images/Approach3.png"
                alt="Approach Image"
                className="w-full h-auto mb-4 rounded-md"
              />
              <div className="max-w-sm mx-auto">
                <h3 className="text-xl font-Manrope-SemiBold mb-2">
                  Brings joy back to teaching
                </h3>
                <p className="max-w-[270px] mx-auto">
                  Less grunt work, more connection with students.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Approach;
