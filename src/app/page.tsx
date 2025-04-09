import ProjectsSection from "./components/ProjectsSection";
import { Github, Mail, MapPin, Send } from "lucide-react";
import { NavigationBar } from "./components/NavigationBar";
import LinkedIn from "./components/icons/LinkedIn";
// import Image from 'next/image';
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <NavigationBar />

      <div className="relative pt-20 pb-5 overflow-clip">
        <div className="absolute inset-x-0 -inset-y-40 max-w-6xl mx-auto">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 transform rotate-12 blur-3xl opacity-20 animate-pulse duration-1000"></div> */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 transform rotate-12 blur-3xl opacity-20 [animation:pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-12">
          {/* About Card */}
          <div id="about" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
            <div className="relative backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  {/* <Image
                    src="/pfp.png"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="relative rounded-full object-cover border-2 border-white/50 dark:border-white/20"
                    priority
                  /> */}
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl py-3 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Vaibhav Madan
                  </h1>
                  <p className="text-2xl text-zinc-700 dark:text-zinc-300 mb-3">
                    Full Stack Developer
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl">
                    19-year-old friendly neighbourhood coder from India.
                  </p>
                  <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-2 backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-none py-2 px-4 border border-white/20 dark:border-white/10 transition-all duration-300 hover:border-blue-500/50">
                      <MapPin className="w-4 h-4" />
                      <span>Ludhiana, India</span>
                    </div>
                    <div className="flex items-center gap-2 backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-none py-2 px-4 border border-white/20 dark:border-white/10 transition-all duration-300 hover:border-blue-500/50">
                      <Mail className="w-4 h-4" />
                      <a
                        href="mailto:vaibhav.madan.20@gmail.com"
                        className="hover:text-zinc-700 dark:hover:text-zinc-300"
                      >
                        vaibhav.madan.20@gmail.com
                      </a>
                    </div>

                    {/* Resume Section */}
                    <div className="w-full">
                      <a
                        href="https://drive.google.com/file/d/1JWo0DGsq9yyxggw0Tk-jvE3or-_32xyD/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <Send className="w-4 h-4" />
                        <span>View Resume</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-16">
            <ProjectsSection />
          </div>

          {/* Skills section */}
          <Skills />

          {/* Contact Section */}
          <div id="contact" className="mt-16 mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Let&apos;s Connect
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/vaibhav1565",
                },
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:vaibhav.madan.20@gmail.com",
                },
                {
                  icon: LinkedIn,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/vaibhav-madan-25057527a/",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-xl p-6
                    border border-white/20 dark:border-white/10 transition-all duration-300
                    hover:border-blue-500/50 flex flex-col items-center gap-3"
                >
                  <item.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors" />
                  <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
