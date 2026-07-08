import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

const TechIcon = ({ bg, text }: { bg: string, text: string }) => (
  <div className={`w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm shadow-lg border border-white/10 ${bg}`}>
    {text}
  </div>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const PythonLogo = () => (
  <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#3776AB] font-bold text-sm text-white shadow-lg border border-white/10">
    Py
  </div>
);

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-8 flex flex-col items-start z-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-glass-light rounded-full border border-glass-border">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
             <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">I'm a Software Engineer</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Aniq</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300">
              I build things for the web.
            </h2>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            I'm a passionate Software Engineering student specializing in building exceptional digital experiences with modern technologies, AI integrations, and robust system architectures.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
             <a href="https://github.com/niqkss" target="_blank" rel="noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold flex items-center gap-2 transition shadow-lg shadow-blue-500/25">
               View My Work
               <ArrowUpRight size={20} />
             </a>
             <a href="/Resume Aniq.pdf" target="_blank" rel="noreferrer" className="px-8 py-4 bg-glass-light hover:bg-glass-border border border-glass-border text-white rounded-xl font-bold flex items-center gap-2 transition">
               Download CV
               <Download size={20} />
             </a>
          </div>

          <div className="pt-10 w-full">
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Technologies I work with</p>
            <div className="flex flex-wrap items-center gap-4">
              <TechIcon bg="bg-[#E34F26] text-white" text="HTML" />
              <TechIcon bg="bg-[#1572B6] text-white" text="CSS" />
              <TechIcon bg="bg-[#F7DF1E] text-black" text="JS" />
              <TechIcon bg="bg-[#3178C6] text-white" text="TS" />
              <ReactLogo />
              <PythonLogo />
            </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative flex justify-center items-center lg:h-[650px]">
           {/* Huge Glowing Circle */}
           <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-xl opacity-60" />
           
           {/* Main Portrait inside the circle glow area */}
           <div 
             className="relative w-[400px] h-[550px] md:w-[500px] md:h-[680px] lg:w-[550px] lg:h-[750px] z-10 bottom-0 mt-8"
             style={{
               WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
               maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
             }}
           >
             <Image
               src="/portrait.png"
               alt="Muhammad Aniq Aiman"
               fill
               quality={100}
               unoptimized={true}
               className="object-cover object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] contrast-[1.05]"
               priority
             />
           </div>

           {/* Floating Code Panel */}
           <div className="absolute top-1/4 right-0 lg:-right-12 z-20 glass-panel p-5 rounded-2xl border border-glass-border shadow-2xl bg-[#0d1117]/90 backdrop-blur-md hidden md:block w-max">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
                 <div className="w-3 h-3 rounded-full bg-green-500" />
                 <span className="ml-2 text-xs font-mono text-gray-500">developer.ts</span>
              </div>
              <pre className="text-sm font-mono leading-relaxed">
                <span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{"{"}</span>{"\n"}
                <span className="text-gray-400">  name:</span> <span className="text-green-300">"Aniq Aiman"</span>,<span className="text-white">{"\n"}</span>
                <span className="text-gray-400">  skills:</span> <span className="text-blue-200">["React", "Next.js", "Python"]</span>,<span className="text-white">{"\n"}</span>
                <span className="text-gray-400">  passion:</span> <span className="text-green-300">"Building cool things"</span><span className="text-white">{"\n"}</span>
                <span className="text-yellow-300">{"}"}</span><span className="text-white">;</span>
              </pre>
           </div>
        </div>

      </div>
    </section>
  );
}
