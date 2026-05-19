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

export default function Home() {
  return (
    <main className="portfolio-page flex flex-col min-h-screen relative">
      {/* Global Interactive Particles Constellation Mesh Background */}
      <GlobalParticleNetwork />

      <Navbar />
      <div className="flex-1 relative z-10">
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </div>
      <footer className="border-t border-white/8 bg-background/50 backdrop-blur-sm text-center text-foreground/45 text-xs font-medium tracking-wider py-8 relative z-10">
        <p>© 2026 Ravindu Dilhan. All rights reserved.</p>
      </footer>
    </main>
  );
}
