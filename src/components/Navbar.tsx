"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent,
    href: string,
    name: string,
    closeMobile = false
  ) => {
    e.preventDefault();
    setActive(name);
    if (closeMobile) setMobileOpen(false);

    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) {
      // fallback: update hash
      history.replaceState(null, "", href);
      return;
    }

    const header = document.querySelector("header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    // Give Achievements an extra upward offset so its content is fully visible
    const extraOffset = href === "#achievements" ? 64 : 0;

    const top = window.scrollY + el.getBoundingClientRect().top - headerHeight - extraOffset;
    window.scrollTo({ top, behavior: "smooth" });

    // update URL hash without jump
    history.replaceState(null, "", href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    // Dynamic Intersection Observer to highlight active navbar links automatically on scroll
    const sections = navLinks.map((link) => document.querySelector(link.href));
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Triggers active highlight when section occupies viewport center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const matchingLink = navLinks.find((link) => link.href === `#${id}`);
          if (matchingLink) {
            setActive(matchingLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "py-5 bg-background/85 backdrop-blur-xl border-b border-white/[0.06]"
            : "py-8 bg-transparent"
        )}
      >
        <div className="site-container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => setActive("Home")}
            className="text-2xl md:text-3xl font-black tracking-tight group shrink-0"
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
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className={cn(
                  "relative text-sm md:text-base font-black uppercase tracking-[0.18em] py-2 transition-colors duration-200",
                  active === link.name
                    ? "text-primary"
                    : "text-foreground/55 hover:text-foreground/90"
                )}
              >
                {link.name}
                {active === link.name && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full bg-primary"
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
                    onClick={(e) => handleNavClick(e, link.href, link.name, true)}
                    className={cn(
                      "text-base font-bold uppercase tracking-widest py-3 px-4 rounded-lg transition-all duration-200",
                      active === link.name
                        ? "text-primary bg-primary/10"
                        : "text-foreground/60 hover:text-foreground hover:bg-white/5"
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
