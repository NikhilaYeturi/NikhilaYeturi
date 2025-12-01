import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-purple-400">Nikhila</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
        Software Engineer • Product Manager • Quantum/GenAI Researcher  
        I build intelligent systems, 0→1 products, and frontier-tech research.
      </p>

      <div className="flex space-x-6 text-3xl mt-8">
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/nikhilayeturi" target="_blank"><FaLinkedin /></a>
        <a href="mailto:nikhilayeturi23@gmail.com"><FaEnvelope /></a>
      </div>
    </section>
  );
}
