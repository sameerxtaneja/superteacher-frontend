"use client";

import React from "react";

const hereHowFeatures = [
  {
    title: "Fast & Accurate Grading",
    smallText: "Private Beta",
    desc: "Grades like you do - fast, reliable, and stress-free. Save hours every week.",
    badge: "1",
  },
  {
    title: "Personalized Feedback",
    smallText: "Launching Soon",
    desc: "Every student gets clear, helpful feedback. No extra work for you.",
    badge: "2",
  },
  {
    title: "Instant Question Papers",
    smallText: "Launching Soon",
    desc: "Pick a topic. Get a perfect CBSE-style paper in minutes.",
    badge: "3",
  },
  {
    title: "Actionable Class Insights",
    smallText: "Launching Soon",
    desc: "See how your classes are doing, spot patterns, and teach smarter - all from your phone.",
    badge: "4",
  },
];

const HeresHow = () => {
  return (
    <section
      id="heresHow"
      className="relative w-full px-6 md:px-16 py-24 bg-[#FFFAF6] text-[#1f1f1f] scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto text-left space-y-10">
        {/* Section Label */}
        <p className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
          Here’s how
        </p>

        {/* Heading */}
        <h2 className="font-dm-sans font-normal text-[45px] leading-[56px] max-w-3xl">
          We’re building an end-to-end exam automation co-pilot, powered by AI
          that understands <em>you</em>.
        </h2>

        {/* Features list - centered horizontally */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {hereHowFeatures.map((feature) => (
            <div
              key={feature.badge}
              className="relative rounded-2xl px-8 py-10 text-left border border-white/20 bg-white/30 backdrop-blur-md shadow-md hover:shadow-xl transition"
            >
              {/* Title with small text */}
              <h3 className="text-xl font-semibold text-[#1f1f1f] mb-3 flex items-center gap-2">
                {feature.title}
                <span className="italic text-gray-500 text-sm font-normal">
                  ({feature.smallText})
                </span>
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Book a Demo Button - centered */}
        <div className="flex justify-center">
          <a
            href="https://cal.com/samxt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-4 bg-black text-white rounded-xl text-lg font-semibold hover:bg-gray-800 transition transform hover:scale-105"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeresHow;
