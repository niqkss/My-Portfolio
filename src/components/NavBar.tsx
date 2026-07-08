"use client";

import { useEffect, useState } from "react";

export function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is in the top 30% of the screen, we consider it active
          if (rect.top <= window.innerHeight * 0.3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    // Run once to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section;
    return `text-sm font-bold tracking-widest transition ${
      isActive ? "text-white" : "text-gray-400 hover:text-blue-400"
    }`;
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <div className="glass-panel px-8 py-4 flex items-center space-x-8 rounded-full shadow-lg border border-white/10 bg-[#0d1117]/80 backdrop-blur-md">
        
        {/* Custom Gradient Code Logo */}
        <div className="flex items-center justify-center cursor-pointer mr-2">
           <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#code-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition">
             <defs>
               <linearGradient id="code-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#c084fc" /> {/* Purple 400 */}
                 <stop offset="100%" stopColor="#60a5fa" /> {/* Blue 400 */}
               </linearGradient>
             </defs>
             <polyline points="16 18 22 12 16 6"></polyline>
             <polyline points="8 6 2 12 8 18"></polyline>
             <line x1="10" y1="20" x2="14" y2="4" strokeWidth="2.5"></line>
           </svg>
        </div>

        <a href="#home" className={getLinkClass("home")}>HOME</a>
        <a href="#about" className={getLinkClass("about")}>ABOUT</a>
        <a href="#skills" className={getLinkClass("skills")}>SKILLS</a>
        <a href="#projects" className={getLinkClass("projects")}>PROJECTS</a>
        <a href="#contact" className={getLinkClass("contact")}>CONTACT</a>
      </div>
    </nav>
  );
}
