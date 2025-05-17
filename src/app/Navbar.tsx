"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-white/50 rounded-3xl mt-6 shadow-lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 flex items-center gap-2 -ml-2">
              <img
                src="/images/Stlogo.png"
                alt="Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
              <h1 className="text-black text-xl font-bold">Super Teacher</h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-4">
            <Link
              href="#whyWeStarted"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-black hover:bg-gray-200 transition"
            >
              About
            </Link>
            <Link
              href="#mission"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-black hover:bg-gray-200 transition"
            >
              Mission
            </Link>
            <Link
              href="https://cal.com/samxt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-black hover:bg-gray-200 transition"
            >
              Talk to Founders
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-8 h-8"
              aria-label="Toggle Menu"
            >
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden bg-white px-4 py-4 space-y-3 rounded-b-3xl transition-all duration-300">
            <Link
              href="#howItWorks"
              onClick={handleClose}
              className="block text-black hover:bg-gray-100 px-4 py-2 rounded-xl text-base font-medium"
            >
              How it works
            </Link>
            <Link
              href="#ourVision"
              onClick={handleClose}
              className="block text-black hover:bg-gray-100 px-4 py-2 rounded-xl text-base font-medium"
            >
              Vision
            </Link>
            <Link
              href="#mission"
              onClick={handleClose}
              className="block text-black hover:bg-gray-100 px-4 py-2 rounded-xl text-base font-medium"
            >
              Mission
            </Link>
            <Link
              href="https://cal.com/samxt"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="block bg-black text-white text-center px-4 py-2 rounded-xl text-base font-medium hover:bg-gray-800"
            >
              Talk to Founders
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
