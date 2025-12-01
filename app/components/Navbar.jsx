"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white tracking-wide">
          Nikhila Yeturi
        </h1>

        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#certs" className="hover:text-white">Certifications</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}
