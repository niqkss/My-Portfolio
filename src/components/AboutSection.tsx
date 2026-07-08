import { BookOpen, Code, Cpu, CalendarDays, User } from "lucide-react";

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-24 relative z-10" id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        
        {/* Left Side: About Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-glass-light rounded-full border border-glass-border">
             <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            I'm passionate about creating digital solutions
          </h2>
          
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg pt-4">
            <p>
              With a CGPA of 3.69, I'm an innovative final-year Software Engineering student with strong technical skills in full-stack development, system architecture, and AI integration.
            </p>
            <p>
              I help businesses and individuals bring their ideas to life through clean, efficient, and user-friendly code. From managing complex databases to integrating real-world IoT hardware like the ReflectaAI Smart Mirror, I thrive on solving complex problems.
            </p>
          </div>


        </div>

        {/* Right Side: Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           {/* Stat 1 */}
           <div className="glass-panel p-6 flex flex-col justify-center border-l-4 border-l-purple-500">
             <div className="flex items-center gap-4 mb-2">
               <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
                 <BookOpen size={28} />
               </div>
               <h3 className="text-3xl font-black text-white">3.69</h3>
             </div>
             <p className="text-gray-400 text-sm font-medium pl-16 -mt-2">Cumulative GPA</p>
           </div>

           {/* Stat 2 */}
           <div className="glass-panel p-6 flex flex-col justify-center border-l-4 border-l-blue-500">
             <div className="flex items-center gap-4 mb-2">
               <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                 <Code size={28} />
               </div>
               <h3 className="text-3xl font-black text-white">7</h3>
             </div>
             <p className="text-gray-400 text-sm font-medium pl-16 -mt-2">Projects Completed</p>
           </div>

           {/* Stat 3 */}
           <div className="glass-panel p-6 flex flex-col justify-center border-l-4 border-l-green-500">
             <div className="flex items-center gap-4 mb-2">
               <div className="p-3 bg-green-500/20 text-green-400 rounded-xl">
                 <Cpu size={28} />
               </div>
               <h3 className="text-3xl font-black text-white">IoT & AI</h3>
             </div>
             <p className="text-gray-400 text-sm font-medium pl-16 -mt-2">Integration Focus</p>
           </div>

           {/* Stat 4 */}
           <div className="glass-panel p-6 flex flex-col justify-center border-l-4 border-l-orange-500">
             <div className="flex items-center gap-4 mb-2">
               <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                 <CalendarDays size={28} />
               </div>
               <h3 className="text-3xl font-black text-white">3+</h3>
             </div>
             <p className="text-gray-400 text-sm font-medium pl-16 -mt-2">Years Coding</p>
           </div>

        </div>

      </div>
    </section>
  );
}
