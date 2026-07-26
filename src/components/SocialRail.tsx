"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function SocialRail() {
  const socials = [
    {
      icon: <FaGithub size={18} />,
      url: "https://github.com/WgRavinduDilhan",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={18} />,
      url: "https://linkedin.com/in/ravindu-dilhan",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={18} />,
      url: "mailto:dilhanwgr2002@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      {socials.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/20 flex items-center justify-center text-white/80 hover:text-yellow-400 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-200"
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
