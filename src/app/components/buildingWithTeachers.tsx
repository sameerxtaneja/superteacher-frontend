"use client";
import React from "react";

const testimonials = [
  {
    quote: "I used to grade till 2AM. Now I sleep by 10.",
    name: "Mrs. Rakhi",
    subject: "CBSE Business Studies",
    img: "/images/female.jpg",
  },
  {
    quote: "This saved me 16 hours in one week.",
    name: "Mr. Tarun",
    subject: "CBSE Accountancy",
    img: "/images/male1.jpeg",
  },
  {
    quote: "This is the first tool that actually understands how I grade.",
    name: "Mr. Ankur",
    subject: "CBSE Chemistry",
    img: "/images/male2.jpeg",
  },
];

const TeacherTestimonials = () => {
  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f]">
          We’re building with teachers.
        </h2>

        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
          Real words from teachers using SuperTeacher:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-left">
              {/* Quote bubble */}
              <div className="bg-[#8695ac2f] rounded-3xl p-8 max-w-md mx-auto mb-6 relative text-gray-800 font-semibold text-lg leading-relaxed">
                <p>“{t.quote}”</p>
                <div className="absolute -bottom-6 left-10 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#e6f0ff]"></div>
              </div>

              {/* Image + Name & Subject */}
              <div className="flex items-center space-x-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.subject}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherTestimonials;
