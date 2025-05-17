"use client";

import "@/assets/styles/app.css";
import { metadata } from "./metadata";
import { ReactNode } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

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
      <body className={dmSans.className}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
