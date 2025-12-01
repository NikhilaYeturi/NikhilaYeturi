"use client";

import React from "react";
import FloatingBubbles from "./FloatingBubbles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SlideFadeWords from "./SlideFadeWords";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-white bg-black px-6 overflow-hidden"
    >
      {/* Background Bubbles */}
      <FloatingBubbles />

      {/* Content */}
      <div className="relative z-10 mt-[-80px] text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-purple-400">Nikhila</span>
        </h1>

        {/* SLIDE + FADE TEXT */}
        <p className="text-xl md:text-2xl mt-2">
          <SlideFadeWords
            words={[
              "Software Engineer",
              "Product Manager",
            ]}
            duration={2500}
          />
        </p>

        {/* SUB TEXT */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4">
          I build intelligent systems, 0→1 products, and developer-first experiences.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-8 text-3xl">
          <a href="https://github.com/nikhilayeturi" target="_blank">
            <FaGithub className="hover:text-purple-400 transition" />
          </a>
          <a href="https://linkedin.com/in/nikhilayeturi" target="_blank">
            <FaLinkedin className="hover:text-purple-400 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
