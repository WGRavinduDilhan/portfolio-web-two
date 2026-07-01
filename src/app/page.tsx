import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import GlobalParticleNetwork from "@/components/GlobalParticleNetwork";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="portfolio-page flex flex-col min-h-screen relative">
      {/* Global Interactive Particles Constellation Mesh Background */}
      <GlobalParticleNetwork />

      <Navbar />
      <div className="portfolio-stack flex-1 relative z-10 space-y-24">
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </div>
      <footer className="border-t border-white/8 bg-background/50 backdrop-blur-sm text-foreground/45 text-xs font-medium tracking-wider py-16 relative z-10">
        <br />
        <div className="site-container flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="font-mono text-sm text-foreground/60">[Undergraduate]</p>
          <p className="text-sm text-foreground/40">© 2026 · Created by Ravindu Dilhan. </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/WgRavinduDilhan" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/ravindu-dilhan" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:dilhanwgr2002@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <br />
      </footer>
    </main>
  );
}
