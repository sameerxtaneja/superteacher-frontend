"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["whyWeStarted", "howItWorks"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveId(id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (id: string) =>
    `px-4 py-2 rounded-xl text-sm font-medium font-manrope transition ${
      activeId === id ? "bg-black text-white" : "text-black hover:bg-gray-200"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-white/50 rounded-3xl mt-6 shadow-lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 -ml-2">
              <img
                src="/images/Stlogo.png"
                alt="Logo"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-black text-lg font-semibold font-dm-sans">SuperTeacher</h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-4">
            <Link href="#whyWeStarted" className={navLinkClass("whyWeStarted")}>
              Why?
            </Link>
            <Link href="#howItWorks" className={navLinkClass("howItWorks")}>
              How?
            </Link>
            <Link
              href="https://cal.com/sameerxtaneja"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-medium font-manrope text-black hover:bg-gray-200 transition"
            >
              Talk to Founders
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden bg-white px-4 py-4 space-y-3 rounded-b-3xl transition-all duration-300">
            <Link
              href="#whyWeStarted"
              onClick={() => setIsOpen(false)}
              className="block text-black hover:bg-gray-100 px-4 py-2 rounded-xl text-base font-medium font-manrope"
            >
              Why?
            </Link>
            <Link
              href="#howItWorks"
              onClick={() => setIsOpen(false)}
              className="block text-black hover:bg-gray-100 px-4 py-2 rounded-xl text-base font-medium font-manrope"
            >
              How?
            </Link>
            <Link
              href="https://cal.com/sameerxtaneja"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block bg-black text-white text-center px-4 py-2 rounded-xl text-base font-medium font-manrope hover:bg-gray-800"
            >
              Talk to Founders
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
