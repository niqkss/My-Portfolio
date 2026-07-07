import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { InspiratorMarquee } from "@/components/InspiratorMarquee";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-panel px-8 py-4 flex items-center space-x-8 rounded-full">
          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
             <div className="w-4 h-[2px] bg-white relative before:absolute before:-top-1.5 before:w-4 before:h-[2px] before:bg-white after:absolute after:top-1.5 after:w-4 after:h-[2px] after:bg-white" />
          </div>
          <a href="#" className="text-sm font-bold tracking-widest text-white hover:text-blue-400 transition">HOME</a>
          <a href="#about" className="text-sm font-bold tracking-widest text-gray-400 hover:text-blue-400 transition">ABOUT</a>
          <a href="#skills" className="text-sm font-bold tracking-widest text-gray-400 hover:text-blue-400 transition">SKILLS</a>
          <a href="#projects" className="text-sm font-bold tracking-widest text-gray-400 hover:text-blue-400 transition">PROJECTS</a>
          <a href="#" className="text-sm font-bold tracking-widest text-gray-400 hover:text-blue-400 transition">ACCOUNT</a>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <InspiratorMarquee />
      
    </main>
  );
}
