"use client";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>

      <div className="space-y-12">

        <ExpItem
          role="Founding Software Engineer (I wear multiple Hats)"
          company="Basyl Health"
          time="Aug 2025 – Present"
          summary="Founding engineer leading engineering, product, design, and early build–measure–learn cycles while architecting the core platform and AI systems."
        />

        <ExpItem
          role="Product Manager & AI Software Engineer"
          company="Florence Quantum Labs"
          time="Aug 2024 – Aug 2025"
          summary="Led product strategy and engineering for a next-gen forecasting platform while collaborating with research, UX, and cloud infrastructure teams."
        />

        <ExpItem
          role="Graduate Research Engineer"
          company="Northwestern University"
          time="Mar 2024 – Aug 2024"
          summary="Designed multi-modal AI systems and ML optimization workflows as part of a sustainability-focused research initiative."
        />

        <ExpItem
          role="Software Engineer / Product Developer"
          company="Optum (UnitedHealth Group)"
          time="Jul 2021 – Jun 2023"
          summary="Developed internal platforms, optimized operational workflows, and contributed to major efficiency and cost improvements."
        />

        <ExpItem
          role="Product Intern"
          company="OpenText"
          time="Mar 2021 – Jul 2021"
          summary="Supported product experimentation, user onboarding, and UX optimization for enterprise platforms."
        />

      </div>
    </section>
  );
}

function ExpItem({ role, company, time, summary }) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
      <h3 className="text-2xl font-semibold text-white">{role}</h3>
      <p className="text-purple-400 text-sm mb-2">{company} • {time}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{summary}</p>
    </div>
  );
}
