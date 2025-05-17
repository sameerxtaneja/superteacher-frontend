'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn';

const ClosingCTA = () => {
  return (
    <footer className="w-full px-6 md:px-16 py-16 text-[#1f1f1f] scroll-mt-28" id="closingCta">
      <div className="max-w-5xl mx-auto text-left space-y-10">
        {/* Text Content */}
        <FadeIn>
          <div className="space-y-1 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              India’s first AI grading co-pilot
            </h2>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-gray-500">
              built for teachers.
            </h2>
          </div>
        </FadeIn>

        {/* Social Icons Section */}
        <FadeIn>
          <div className="flex gap-5 mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <img src="/images/instagram.svg" alt="Instagram" className="h-6 w-6 md:h-7 md:w-7" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform"
            >
              <img src="/images/twitter.svg" alt="Twitter" className="h-6 w-6 md:h-7 md:w-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <img src="/images/linkedin.svg" alt="LinkedIn" className="h-6 w-6 md:h-7 md:w-7" />
            </a>
          </div>
        </FadeIn>

        {/* Bottom Line */}
        <FadeIn>
          <div className="mt-10 text-sm text-gray-400">
            © {new Date().getFullYear()} Super Teacher. All rights reserved.
          </div>
          <div className="mt-1 text-sm text-gray-400">
            Built with ❤️ for teachers. 
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default ClosingCTA;
