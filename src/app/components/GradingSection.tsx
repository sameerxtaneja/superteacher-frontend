"use client";

import React from "react";
import { FaRobot, FaCommentDots, FaFileAlt, FaChartLine } from "react-icons/fa";

const gradingFeatures = [
  {
    title: "Grading",
    desc: "We’re starting with grading - the most painful part.",
    icon: <FaRobot className="text-white text-xl" />,
    id: "1",
  },
  {
    title: "Feedback",
    desc: "Personalized feedback in your tone.",
    icon: <FaCommentDots className="text-white text-xl" />,
    id: "2",
  },
  {
    title: "Exam Creation",
    desc: "Question generation and exam creation.",
    icon: <FaFileAlt className="text-white text-xl" />,
    id: "3",
  },
  {
    title: "Assessment Loop",
    desc: "We’re building toward the full assessment loop.",
    icon: <FaRobot className="text-white text-xl" />,
    id: "4",
  },
  {
    title: "Performance Tracking",
    desc: "Performance tracking that’s actually useful.",
    icon: <FaChartLine className="text-white text-xl" />,
    id: "5",
  },
  {
    title: "Your Style",
    desc: "AI that understands how you grade.",
    icon: <FaCommentDots className="text-white text-xl" />,
    id: "6",
  },
];

const GradingSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm tracking-widest text-gray-500 font-mono mb-2">
          OUR 6 PILLAR APPROACH TO GRADING
        </p>
        <h2 className="text-5xl font-dm-sans font-bold text-[#1f1f1f] mb-12">
          AI-powered grading reimagined
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {gradingFeatures.map((feature, idx) => (
            <div
              key={feature.id}
              className="relative bg-white rounded-2xl shadow-md px-6 py-8 text-left border hover:shadow-xl transition"
            >
              {/* ID Badge */}
              <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 font-semibold rounded-bl-xl px-3 py-1 text-xs">
                {feature.id}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1f1f1f] mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradingSection;
