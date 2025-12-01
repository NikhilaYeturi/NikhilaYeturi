"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

    </div>
  );
}
