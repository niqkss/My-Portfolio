"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ReflectaAI Smart Mirror Hub",
    tech: "Raspberry Pi 5, Python, FastAPI, React, AI",
    desc: "AI-powered IoT smart mirror system to facilitate highly personalized, interactive user experiences using Facial Recognition & Voice AI.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "PizzaRia Food & Blackjack App",
    tech: "Kotlin/Java, Android SDK, Firebase",
    desc: "Multi-functional Android app integrating a comprehensive pizza ordering system with a fully playable Blackjack card game.",
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "Heart Disease Prediction System",
    tech: "Python, pandas, Streamlit, ML",
    desc: "Machine learning diagnostic application utilizing the Cleveland dataset to predict cardiovascular risk factors with an interactive UI.",
    color: "from-red-600 to-orange-500"
  },
  {
    title: "Project Student Management System",
    tech: "C#, .NET, SQL Server",
    desc: "Desktop application management system to streamline Final Year Project processes for students and supervisors.",
    color: "from-green-600 to-emerald-500"
  },
  {
    title: "Smart Parking System",
    tech: "Raspberry Pi, CV, Web Dev",
    desc: "Automated, camera-based smart parking solution to monitor real-time parking space availability for LOTUS supermarket employees.",
    color: "from-indigo-600 to-blue-500"
  }
];

export function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="container mx-auto px-4 py-20 relative z-10" id="projects">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-wider text-white">My Projects</h2>
          <div className="flex items-center mt-4">
            <div className="w-2 h-2 rounded-full bg-white mr-4" />
            <div className="h-[1px] bg-glass-border flex-1" />
          </div>
        </div>
      </div>

      <div className="relative glass-panel p-6 md:p-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {projects.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                <div className="h-full glass-panel p-1 rounded-2xl group overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="relative h-full bg-black/40 backdrop-blur-xl p-6 rounded-xl flex flex-col justify-between border border-white/5 group-hover:border-white/20 transition-colors">
                    
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                          <ExternalLink size={16} className="text-white" />
                        </a>
                      </div>
                      <p className="text-sm text-gray-400 mb-6 line-clamp-3">{project.desc}</p>
                    </div>
                    
                    <div>
                      <div className="h-[1px] w-full bg-glass-border mb-4" />
                      <p className="text-xs font-mono text-blue-300">{project.tech}</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
