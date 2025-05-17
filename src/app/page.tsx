'use client';

import React from 'react';
import Navbar from './Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import VaraPowered from './components/VaraPowered';
import Approach from './components/Approach';
import ClosingCTA from './components/ClosingCTA';
import PageNavigation from './components/PageNavigation';
import WhyWeStarted from './components/WhyweStarted';
import TeacherTestimonials from './components/buildingWithTeachers';
import GradingSection from './components/GradingSection';
import FadeIn from '@/components/FadeIn';
import SectionDivider from '@/components/SectionDivider';

const Page = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <PageNavigation />

      {/* HERO - full-bleed with animated background grid */}
      <div id="hero" className="relative">
        <Hero />
      </div>

      {/* WHY WE STARTED - full-bleed gradient background */}
      <div id="whyWeStarted" className="relative">
        <WhyWeStarted />

        {/* Smooth fade into white before How it Works */}
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10 bg-gradient-to-b from-[#FFF7F0] to-white" />
      </div>

      {/* HOW IT WORKS */}
      <div id="howItWorks" className="py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <HowItWorks />
          </FadeIn>
        </div>
      </div>

      <SectionDivider />

      {/* TEACHER TESTIMONIALS */}
      <div id="teacherTestimonials" className="py-16 bg-white rounded-t-[32px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <TeacherTestimonials />
          </FadeIn>
        </div>
      </div>

      <SectionDivider />

      {/* CLOSING CTA */}
      <div id="closingCTA" className="py-16 bg-white rounded-t-[32px]">
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
