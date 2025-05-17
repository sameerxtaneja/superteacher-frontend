'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn';

const testimonials = [
  {
    quote:
      'I never realized how much mental load grading was adding. SuperTeacher literally feels like an assistant who thinks like me.',
    name: 'Mrs. Rakhi Kharbanda',
    subject: 'CBSE Business Studies',
    img: '/images/female_centered.jpg',
  },
  {
    quote:
      'I used to spend weekends correcting papers. Now I can review everything in one evening. SuperTeacher is a game changer.',
    name: 'Mr. Tarun Bhartwal',
    subject: 'CBSE Accountancy',
    img: '/images/male1_centered.jpg',
  },
  {
    quote:
      'SuperTeacher saves me time and gives better consistency. I no longer worry about being unfair on tired days.',
    name: 'Mr. Ankur Dung',
    subject: 'CBSE Chemistry',
    img: '/images/male2.jpeg',
  },
  {
    quote:
      'I never realized how much burnout was coming from grading until SuperTeacher lifted that weight off me.',
    name: 'Mr. Pardeep Kamboj',
    subject: 'CBSE Mathematics',
    img: '/images/pardeep.jpg',
  },
  {
    quote:
      'I love teaching, but grading made me want to stop. SuperTeacher changed that - now I’m back to doing what I love.',
    name: 'Mrs. Meenu Beri',
    subject: 'CBSE Business Studies',
    img: '/images/meenu.jpg',
  },
  {
    quote:
      'Grading used to be the most stressful part of my job. SuperTeacher made it feel almost effortless.',
    name: 'Mrs. Jasbir Ahluwalia',
    subject: 'CBSE Economics',
    img: '/images/jasbir.jpg',
  },
];

const TeacherTestimonials = () => {
  return (
    <section className="pt-4 pb-2 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f]">
            We’re building with teachers.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Real words from teachers using SuperTeacher:
          </p>
        </FadeIn>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
          {testimonials.map((t, i) => (
            <FadeIn key={i}>
              <div className="flex flex-col items-center text-left h-full">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full text-gray-800 font-medium text-lg leading-relaxed shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <p>“{t.quote}”</p>
                </div>

                <div className="flex items-center space-x-4 mt-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover object-center"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-[#1f1f1f]">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.subject}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Button */}
        <FadeIn>
          <div className="pt-10">
            <a
              href="https://tally.so/r/w4ELKX"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105 text-lg font-medium"
            >
              <img
                src="/images/Join.png"
                alt="Join Icon"
                className="w-6 h-6 mr-2"
              />
              Join waitlist
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TeacherTestimonials;
