import { BookOpen } from "lucide-react";

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-20 relative z-10" id="about">
      <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
           <BookOpen size={120} />
        </div>
        
        <h2 className="text-3xl font-black uppercase tracking-wider mb-6 text-blue-400">Introduce My Self</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
          <p>
            Innovative final-year Software Engineering student with a CGPA of 3.69 and strong technical skills in full-stack development, system architecture, software testing, and AI integration.
          </p>
          <p>
            Proficient in React, Next.js, Python, C#, and SQL, with hands-on experience in predictive modeling, robust API development, and cross-platform design. Proven developer with experience managing full software development lifecycles, coordinating complex databases, and integrating IoT hardware.
          </p>
          <p>
            Recognized for strong problem-solving, analytical thinking, and delivering high-impact outcomes like the ReflectaAI Smart Mirror Hub. Passionate about applying software engineering and AI expertise in real-world, collaborative environments.
          </p>
        </div>
      </div>
    </section>
  );
}
