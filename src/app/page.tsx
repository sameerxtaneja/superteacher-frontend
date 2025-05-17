'use client';

import Navbar from './Navbar';
import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Mission from './components/Mission';
import VaraPowered from './components/VaraPowered';
import Approach from './components/Approach';
import ClosingCTA from './components/ClosingCTA';
import PageNavigation from './components/PageNavigation';
import WhyWeStarted from './components/WhyweStarted';
import TeacherTestimonials from './components/buildingWithTeachers';
import GradingSection from './components/GradingSection';
import HeresHow from './components/Hereshow';
import FadeIn from '@/components/FadeIn';
import SectionDivider from '@/components/SectionDivider';

const Page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <PageNavigation />

      <div id="hero" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <Hero />
          </FadeIn>
        </div>
      </div>

      <SectionDivider />

      <div id="howItWorks" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <HowItWorks />
          </FadeIn>
        </div>
      </div>

      <SectionDivider />

      <div id="whyWeStarted" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <WhyWeStarted />
          </FadeIn>
        </div>
      </div>

      <SectionDivider />

      <div id="mission" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <Mission />
          </FadeIn>
        </div>
      </div>

      <SectionDivider />

      <div id="heresHow" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <HeresHow />
          </FadeIn>
        </div>
      </div>

      <SectionDivider />

      <div id="teacherTestimonials" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <TeacherTestimonials />
          </FadeIn>
        </div>
      </div>

      {/* <SectionDivider />
      <div id="grading" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <GradingSection />
          </FadeIn>
        </div>
      </div> */}

      {/* <SectionDivider />
      <div id="varaPowered" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <VaraPowered />
          </FadeIn>
        </div>
      </div> */}

      {/* <SectionDivider />
      <div id="approach" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <Approach />
          </FadeIn>
        </div>
      </div> */}

      <SectionDivider />

      <div id="closingCTA" className="py-10 md:py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <ClosingCTA />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Page;
