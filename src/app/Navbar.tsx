"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-white/50 rounded-3xl mt-8 shadow-lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 flex items-center gap-2 -ml-2">
              <img
                src="/images/Stlogo.png"
                alt="Logo"
                className="w-13 h-13 object-contain rounded-full"
              />
              <h1 className="text-black text-2xl">Super Teacher</h1>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-6">
            <Link
              href="#whyWeStarted"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-black shadow hover:shadow-md transition-all duration-300 hover:bg-gray-200"
            >
              About
            </Link>
            <Link
              href="#mission"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-black shadow hover:shadow-md transition-all duration-300 hover:bg-gray-200"
            >
              Mission
            </Link>
            <Link
              href=" https://cal.com/samxt"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-black shadow hover:shadow-md transition-all duration-300 hover:bg-gray-200"
            >
              Talk to Founders
            </Link>
          </div>

          {/* Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-8 h-8"
            >
              <span
                className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-black transition-all duration-300 my-1 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        {isOpen && (
          <div className="sm:hidden bg-gray-100 rounded-b-3xl px-4 py-4 space-y-3">
            <Link
              href="/Vision"
              className="block text-black bg-white hover:text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-xl text-base font-semibold"
            >
              Vision
            </Link>
            <Link
              href="#"
              className="block text-black bg-white hover:text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-xl text-base font-semibold"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="block text-black bg-white hover:text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-xl text-base font-semibold"
            >
              Talk to Founders
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
