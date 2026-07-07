import { Code2, Globe, Smartphone, BrainCircuit, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    skills: ["Python", "TypeScript", "JavaScript", "C++", "C#", "Java", "Dart", "PHP", "SQL", "HTML/CSS"]
  },
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Flask"]
  },
  {
    title: "Mobile & IoT",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    skills: ["Flutter", "React Native", "Native Android", "Raspberry Pi 5", "Smart Home Tech"]
  },
  {
    title: "AI & Automation",
    icon: <BrainCircuit className="w-8 h-8 text-pink-400" />,
    skills: ["Facial Recognition", "Voice AI", "Machine Learning", "Predictive Modeling", "pandas"]
  },
  {
    title: "Databases",
    icon: <Database className="w-8 h-8 text-green-400" />,
    skills: ["MySQL", "SQLite", "SQL Server", "Firebase"]
  },
  {
    title: "Core Competencies",
    icon: <Wrench className="w-8 h-8 text-orange-400" />,
    skills: ["System Architecture", "Software Testing", "API Integration", "OOP", "Advanced Data Structures"]
  }
];

export function SkillsSection() {
  return (
    <section className="container mx-auto px-4 py-20 relative z-10" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black uppercase tracking-wider text-white">Technical Skills</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-glass-light rounded-xl">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-200">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-black/30 border border-glass-border rounded-full text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
