"use client";

import Navbar from "./Navbar";
import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Mission from "./components/Mission";
import VaraPowered from "./components/VaraPowered";
import Approach from "./components/Approach";
import ClosingCTA from "./components/ClosingCTA";
import PageNavigation from "./components/PageNavigation";
import WhyWeStarted from "./components/WhyweStarted";
import TeacherTestimonials from "./components/buildingWithTeachers";
import OurVision from "./components/OurVision";
import GradingSection from "./components/GradingSection";
import ConnectInvitation from "./components/ConnectInvitation";
import HeresHow from "./components/Hereshow";

const Page = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFF9F3",
      }}
    >
      <Navbar />
      <PageNavigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="howItWorks">
        <HowItWorks />
      </div>

      <div id="whyWeStarted">
        <WhyWeStarted />
      </div>
      <div id="mission">
        <Mission />
      </div>

      <div id="ourVision">
        <OurVision />
      </div>

      <div id="heresHow">
        <HeresHow />
      </div>

      <div id="teacherTestimonials">
        <TeacherTestimonials />
      </div>

      {/* <div id="grading">
        <GradingSection />
      </div> */}

      {/* <div id="varaPowered">
        <VaraPowered />
      </div> */}

      <div id="connect-invite">
        <ConnectInvitation />
      </div>

      {/* <div id="approach">
        <Approach />
      </div> */}
      <div id="closingCTA">
        <ClosingCTA />
      </div>
    </div>
  );
};

export default Page;
