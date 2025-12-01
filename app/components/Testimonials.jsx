"use client";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <TestimonialCard
          name="Shashank Guda"
          role="Senior Consultant @ EY | Data Modernization & Engineering"
          text={`Nikhila is a great engineer and a truly product-oriented professional. Her fast-paced development style and quick grasp of new concepts make her stand out in any team. She has strong DSA skills, learns complex ideas rapidly, and brings a sharp product mindset. With clear communication and a collaborative spirit, she is an amazing professional to work with.`}
        />

        <TestimonialCard
          name="Sai Nikhilesh Krishnamurthy"
          role="Engineer @ Ford, Ex-employee at Tesla"
          text={`I worked with Nikhila on a protein repurposing project using ML techniques, and I was genuinely impressed by her strong engineering fundamentals and her exceptional ability to pick up complex concepts. She approaches problems with clarity, adapts them to multiple domains, and combines technical depth with seamless communication — making collaboration effortless and effective.`}
        />

      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
      <p className="text-gray-300 italic leading-relaxed">“{text}”</p>

      <div className="mt-4">
        <p className="text-purple-400 font-semibold">{name}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
}
