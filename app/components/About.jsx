"use client";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold mb-10">About Me</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">

          <p>
            I’m <span className="text-purple-400 font-semibold">Nikhila Yeturi</span> — 
            a full-stack engineer, product builder, and deep-tech community leader 
            passionate about creating systems that feel smooth, intelligent, and genuinely useful.
          </p>

          <p>
            Over the years, I’ve contributed to meaningful work across companies like 
            <span className="text-purple-400 font-semibold"> Basyl Health</span>, 
            <span className="text-purple-400 font-semibold"> Florence Labs</span>, 
            <span className="text-purple-400 font-semibold"> Northwestern University</span>, 
            <span className="text-purple-400 font-semibold"> Optum</span>, and 
            <span className="text-purple-400 font-semibold"> OpenText</span>, 
            wearing multiple hats across engineering, product, systems, and execution.
          </p>

          <p>
            I currently serve as the 
            <span className="text-purple-400 font-semibold"> Vice Chair of Communications for IEEE Chicago</span>, 
            working with 90+ universities and tech communities, and I’m a 
            <span className="text-purple-400 font-semibold"> Grace Hopper Celebration Brand Ambassador</span> 
            supporting women in tech globally.
          </p>

          <p>My work has been recognized through:</p>

          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Top 100 Software/CS Mentors in the US — Topmate</li>
            <li>Grace Hopper Celebration Brand Ambassador (VIP selection)</li>
            <li>Google Cloud Arcade GenAI League — Top 1% (Rank #11)</li>
            <li>BRAVO Award — UnitedHealth Group</li>
          </ul>

          <p>
            I love building products end-to-end — thinking deeply, moving fast, 
            and creating experiences that people love interacting with.
          </p>

        </div>
      </div>
    </section>
  );
}
