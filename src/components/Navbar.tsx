"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Achievements", href: "/achievements" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center",
          scrolled
            ? "h-[64px] md:h-[80px] bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : "h-[72px] md:h-[90px] bg-transparent border border-transparent"
        )}
        style={{ paddingLeft: "max(1.5rem, 5vw)", paddingRight: "max(1.5rem, 5vw)" }}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-[28px] md:text-[32px] font-black tracking-tight group shrink-0"
          >
            RAVINDU
            <span className="text-primary transition-opacity group-hover:opacity-70">.</span>
          </Link>

          {/* Desktop nav — centered with constrained max width to avoid overlap */}
          <nav className="hidden md:flex items-center gap-8 mx-auto max-w-[900px] justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "relative text-[15px] font-semibold uppercase tracking-wider transition-colors duration-200",
                  pathname === link.href
                    ? "text-black"
                    : "text-foreground/60 hover:text-yellow-400"
                )}
                style={{ padding: "10px 32px" }}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 w-full h-full bg-white -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              className="p-3 rounded-lg text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 w-full z-40 md:hidden"
          >
            <div className="site-container pt-2 pb-6">
              <div className="glass rounded-2xl p-6 flex flex-col gap-4 border border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-base font-bold uppercase tracking-widest py-3 px-4 rounded-lg transition-all duration-200",
                      pathname === link.href
                        ? "text-yellow-400 bg-yellow-400/10"
                        : "text-foreground/60 hover:text-yellow-400 hover:bg-yellow-400/5"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
