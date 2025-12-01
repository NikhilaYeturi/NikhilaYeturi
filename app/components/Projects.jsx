"use client";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <ProjCard
          title="FOPPR"
          stack="React Native • Firebase • Firestore"
          description="A swipe-to-collaborate app for developers & students. Includes matching engine, real-time interactions, and project rooms."
        />

        <ProjCard
          title="RAG-Based Blog Chat System"
          stack="Next.js • Python • LangChain • RAG"
          description="A chat assistant that reads your personal blogs/posts and answers questions using retrieval-augmented generation."
        />

        <ProjCard
          title="AI SQL Autocomplete Engine"
          stack="Node.js • Python • LLMs"
          description="An intelligent SQL assistant offering real-time suggestions, schema understanding, and context-based autocomplete."
        />

        <ProjCard
          title="Basyl Agentic Voice AI"
          stack="ASR • LLM • TTS • React • Node"
          description="Siri-like voice-to-voice healthcare assistant using a real-time ASR → LLM reasoning → TTS response pipeline."
        />

        <ProjCard
          title="Forecasting & Analytics Platform"
          stack="React • Node.js • .NET • Azure"
          description="Interactive dashboards, charting, and microservices for scientific data forecasting used by 50+ researchers."
        />

        <ProjCard
          title="Online FIR Complaint System"
          stack="React • Node.js • MongoDB"
          description="A police reporting system that files complaints, generates case IDs, and sends automated email updates."
        />

      </div>
    </section>
  );
}

function ProjCard({ title, stack, description }) {
  return (
    <div className="border border-white/10 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{stack}</p>
      <p className="text-gray-300 mt-3 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
