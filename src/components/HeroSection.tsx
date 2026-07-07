import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Toolbar & Info */}
        <div className="lg:col-span-3 space-y-6 hidden lg:flex flex-col items-end">
          <div className="glass-panel p-4 flex flex-col items-center space-y-6">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aniqamn715@gmail.com" target="_blank" rel="noreferrer" className="p-3 bg-glass-light rounded-full hover:bg-blue-500/30 transition text-gray-300 hover:text-white" title="Email">
              <Mail size={24} />
            </a>
            <a href="https://github.com/niqkss" target="_blank" rel="noreferrer" className="p-3 bg-glass-light rounded-full hover:bg-blue-500/30 transition text-gray-300 hover:text-white" title="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aniq-aiman-357410344/" target="_blank" rel="noreferrer" className="p-3 bg-glass-light rounded-full hover:bg-blue-500/30 transition text-gray-300 hover:text-white" title="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
            <a href="tel:+601110016360" className="p-3 bg-glass-light rounded-full hover:bg-blue-500/30 transition text-gray-300 hover:text-white" title="Phone">
              <Phone size={24} />
            </a>
          </div>
        </div>

        {/* Center: Main Portrait & Heading */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          <div className="glass-panel px-8 py-4 mb-8 flex justify-between items-center space-x-12 relative z-20">
             <div className="flex space-x-2">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-yellow-500" />
               <div className="w-3 h-3 rounded-full bg-green-500" />
             </div>
             <h1 className="text-xl font-bold tracking-[0.3em] uppercase text-gray-300">Portfolio</h1>
             <div className="w-6" /> {/* spacer */}
          </div>

          <div className="relative w-[320px] h-[450px] md:w-[400px] md:h-[550px] rounded-[3rem] overflow-hidden border-4 border-glass-border shadow-2xl">
            <Image
              src="/portrait.png"
              alt="Muhammad Aniq Aiman"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight shadow-sm mb-1">
                Aniq Aiman
              </h2>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin size={14} />
                <span>Rawang, Selangor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: floating panels */}
        <div className="lg:col-span-3 space-y-6 hidden lg:block">
          <div className="glass-panel p-6">
             <h3 className="text-lg font-bold mb-3 uppercase tracking-wider text-blue-400">What&apos;s Up Guys</h3>
             <p className="text-sm text-gray-300 leading-relaxed">
               I am Muhammad Aniq Aiman. I am a Software Engineering student passionate about full-stack development, AI, and building impactful digital solutions.
             </p>
          </div>
          <div className="glass-panel p-4 flex gap-4">
             <div className="w-16 h-16 rounded-xl overflow-hidden relative border border-glass-border">
                <Image src="/portrait.png" alt="thumbnail" fill className="object-cover opacity-70" />
             </div>
             <div className="w-16 h-16 rounded-xl overflow-hidden relative border border-glass-border">
                <Image src="/portrait.png" alt="thumbnail" fill className="object-cover opacity-70" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
