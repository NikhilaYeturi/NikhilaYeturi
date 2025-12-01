"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Contact</h2>

      <p className="text-gray-300 max-w-xl mb-6">
        Let’s build something meaningful together.  
        Reach out for collaborations, hiring, or deep-tech ideas.
      </p>

      <div className="flex space-x-8 text-3xl">
        <a href="mailto:nikhilayeturi23@gmail.com" className="hover:text-purple-400">
          <FaEnvelope />
        </a>

        <a href="https://github.com" target="_blank" className="hover:text-purple-400">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/nikhilayeturi" target="_blank" className="hover:text-purple-400">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
