'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn'; // Make sure this exists

const testimonials = [
  {
    quote: 'I used to grade till 2AM. Now I sleep by 10.',
    name: 'Mrs. Rakhi',
    subject: 'CBSE Business Studies',
    img: '/images/female.jpg',
  },
  {
    quote: 'This saved me 16 hours in one week.',
    name: 'Mr. Tarun',
    subject: 'CBSE Accountancy',
    img: '/images/male1.jpeg',
  },
  {
    quote: 'This is the first tool that actually understands how I grade.',
    name: 'Mr. Ankur',
    subject: 'CBSE Chemistry',
    img: '/images/male2.jpeg',
  },
];

const TeacherTestimonials = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f]">
            We’re building with teachers.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Real words from teachers using SuperTeacher:
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <FadeIn key={i}>
              <div className="flex flex-col items-center text-left">
                <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 max-w-md w-full text-gray-800 font-medium text-lg leading-relaxed">
                  <p>“{t.quote}”</p>
                </div>

                <div className="flex items-center space-x-4 mt-6">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherTestimonials;
