"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const ROLE_TEXT = "Developer & DevOps Enthusiast";
const TYPE_DELAY_MS = 900; // ms after mount before typing starts
const CHAR_INTERVAL_MS = 60; // ms per character

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    // Start typing after the name animation has finished
    const startTimer = setTimeout(() => {
      setTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(ROLE_TEXT.slice(0, i));
        if (i >= ROLE_TEXT.length) {
          clearInterval(interval);
          setTyping(false);
        }
      }, CHAR_INTERVAL_MS);
      return () => clearInterval(interval);
    }, TYPE_DELAY_MS);
    return () => clearTimeout(startTimer);
  }, []);

  return (
    <section
      id="home"
      className="portfolio-section relative overflow-hidden"
      style={{
        minHeight: "100svh",
        paddingTop: 0,
        paddingBottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="site-container w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
          style={{ maxWidth: "780px", width: "100%" }}
        >

          {/* ── "Hi, I'm" intro line ── */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.01em",
              marginBottom: "0.35rem",
              lineHeight: 1.2,
            }}
          >
            Hi, I&apos;m
          </motion.p>

          {/* ── Big bold name ── */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.06, y: -6 }}
            transition={{ delay: 0.25, duration: 0.65 }}
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "1rem",
              whiteSpace: "nowrap",
              cursor: "default",
              display: "inline-block",
              transformOrigin: "center",
            }}
          >
            Ravindu Dilhan
          </motion.h1>

          {/* ── Role line with typewriter ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.05rem, 2.5vw, 1.45rem)",
              fontWeight: 600,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.01em",
              marginBottom: "2rem",
              lineHeight: 1.4,
              minHeight: "2em",
            }}
          >
            I&apos;m a{" "}
            <span
              style={{
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {displayed}
              {/* Blinking cursor — only shows while typing */}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.1em",
                  background: "rgba(255,255,255,0.8)",
                  marginLeft: "2px",
                  verticalAlign: "text-bottom",
                  borderRadius: "1px",
                  animation: typing ? "blink 0.7s step-end infinite" : "none",
                  opacity: typing ? 1 : 0,
                }}
              />
            </span>
          </motion.p>

          {/* ── Status badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.48, duration: 0.45 }}
            className="inline-flex items-center gap-2 mb-8"
            style={{
              padding: "0.45rem 1.1rem",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.06em",
              }}
            >
              Available for new opportunities
            </span>
          </motion.div>
          <br/><br/>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            
            <a href="#contact" className="btn-secondary" style={{ borderRadius: "8px" }}>
              Let&apos;s Talk <ArrowRight className="w-4 h-4" />
            </a>

            <a href="/W.G.Ravindu Dilhan CV.pdf" download className="btn-primary" style={{ borderRadius: "8px" }}>
              Download My CV <Download className="w-4 h-4" />
            </a>
          </motion.div>
          <br/><br/>

          {/* ── Stats row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.5 }}
            className="flex items-center justify-center gap-12"
          >
            {[
              { value: "10+", label: "Projects" },
              { value: "5+", label: "CI/CD Pipelines" },
            ].map((s, i) => (
              <div key={s.label} className="flex flex-col items-center">
                <div
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "0.35rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}
