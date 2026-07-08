import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { InspiratorMarquee } from "@/components/InspiratorMarquee";
import { ContactSection } from "@/components/ContactSection";

import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <InspiratorMarquee />
      <ContactSection />
      
    </main>
  );
}
