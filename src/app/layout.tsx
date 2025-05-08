'use client';

import '@/assets/styles/app.css';
import { metadata } from './metadata';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="title" content={metadata.title} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
