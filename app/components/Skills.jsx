"use client";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-300">

        {/* Programming */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">Programming & Frameworks</h3>
          <p>
            Java, Python, Node.js, C#, C++, JavaScript, TypeScript,  
            React, Next.js, Angular, Django, .NET, .NET Core APIs,  
            HTML, CSS, TailwindCSS, REST APIs, Microservices
          </p>
        </div>

        {/* Cloud & Databases */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">Cloud & Databases</h3>
          <p>
            Azure, AWS, GCP, PostgreSQL, MySQL, MongoDB, MSSQL,  
            BigQuery, Docker, Kubernetes, Terraform, CI/CD
          </p>
        </div>

        {/* AI & ML */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">AI / ML / LLMs</h3>
          <p>
            NLP, RAG, vLLM, TensorFlow, PyTorch,  
            Multi-modal models (Image+Text),  
            LLM agents, ASR → LLM → TTS pipelines
          </p>
        </div>

      </div>

      {/* Tools Row */}
      <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl text-gray-300">
        <h3 className="text-xl font-semibold text-purple-400 mb-3">Developer Tools</h3>
        <p>
          Git, JIRA, Jenkins, Swagger, Postman,  
          Tableau, n8n, Confluence, Power BI,  
          Vite, Firebase, Vercel Deployments
        </p>
      </div>

    </section>
  );
}
