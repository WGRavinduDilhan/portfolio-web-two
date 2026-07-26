import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-400/20 bg-background/50 backdrop-blur-sm text-yellow-400/70 text-xs font-medium tracking-wider py-16 relative z-10 w-full mt-auto">
      <br />
      <div className="site-container flex flex-col items-center justify-center gap-6 text-center w-full">
        {/* <p className="font-mono text-sm text-yellow-400">[Undergraduate]</p> */}
        <p className="text-sm text-yellow-400/70 w-full">© 2026 · Created by Ravindu Dilhan.</p>

        {/*  
        <div className="flex items-center gap-4">
          <a href="https://github.com/WgRavinduDilhan" target="_blank" rel="noopener noreferrer" className="text-yellow-400/70 hover:text-yellow-400 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/ravindu-dilhan" target="_blank" rel="noopener noreferrer" className="text-yellow-400/70 hover:text-yellow-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:dilhanwgr2002@gmail.com" className="text-yellow-400/70 hover:text-yellow-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
           */}
      </div>
      <br />
    </footer>
  );
}
