import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="portfolio-stack relative z-10 space-y-24">
      <Hero />
      <About />
      <Education />
      <Skills />
    </div>
  );
}
