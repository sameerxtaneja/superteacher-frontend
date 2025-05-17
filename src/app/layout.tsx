import "@/assets/styles/app.css";
import { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's First AI Grading Tool for Teachers | Super Teacher",
  description:
    "SuperTeacher is India's first AI grading co-pilot built for teachers. Instantly grade handwritten exams, give feedback, and save hours every week.",
  icons: {
    icon: "/favicon.png",
  },
};

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
      <body className={dmSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
