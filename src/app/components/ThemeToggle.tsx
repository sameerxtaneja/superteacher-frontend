"use client";

import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center">
      <label htmlFor="themeToggle" className="sr-only">
        Toggle Dark Mode
      </label>
      <input
        type="checkbox"
        id="themeToggle"
        checked={darkMode}
        onChange={toggleTheme}
        className="hidden"
      />
      <div
        onClick={toggleTheme}
        className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            darkMode ? "translate-x-6" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
