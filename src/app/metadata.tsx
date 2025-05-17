// src/app/metadata.ts

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "India's First AI Grading Tool for Teachers | Super Teacher",
  description: "SuperTeacher is India's first AI grading co-pilot built for teachers. Instantly grade handwritten exams, give feedback, and save hours every week.",
  icons: {
    icon: '/favicon.png', // Make sure this file exists in the /public folder
  },
  openGraph: {
    title: "India's First AI Grading Tool for Teachers | Super Teacher",
    description: "Grade exams in minutes, not hours. SuperTeacher is India's first AI grading tool built for real classroom needs.",
    url: 'https://mysuperteacher.com',
    siteName: 'SuperTeacher',
    images: [
      {
        url: '/og-image.png', // Optional: add an og-image under /public
        width: 1200,
        height: 630,
        alt: 'SuperTeacher – AI Grading Tool for Teachers',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "India's First AI Grading Tool for Teachers | Super Teacher",
    description: "Built for real teachers. AI that grades exactly like you do.",
    images: ['/og-image.png'], // Same image, optional but helps
  },
};
