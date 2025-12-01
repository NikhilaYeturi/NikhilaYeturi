"use client";

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">

        <div className="border border-white/10 p-6 rounded-xl bg-white/5">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Cloud Certifications
          </h3>
          <ul className="space-y-1">
            <li>• Google Cloud Professional Data Engineer</li>
            <li>• Google Cloud Digital Leader</li>
            <li>• Microsoft Azure Fundamentals</li>
          </ul>
        </div>

        <div className="border border-white/10 p-6 rounded-xl bg-white/5">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            AI / ML Certifications
          </h3>
          <ul className="space-y-1">
            <li>• Deep Learning Specialization — DeepLearning.AI / Stanford</li>
            <li>• Microsoft Technology Associate — Python</li>
          </ul>
        </div>

        <div className="border border-white/10 p-6 rounded-xl bg-white/5 md:col-span-2">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Awards & Recognitions
          </h3>
          <ul className="space-y-1">
            <li>• Top 100 CS Mentors in the US — Topmate</li>
            <li>• VIP Pass + Scholarship + Brand Ambassador — Grace Hopper 2025</li>
            <li>• Global Rank #11 — Google Cloud Arcade GenAI League</li>
            <li>• BRAVO Diamond Award — UnitedHealth Group</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
