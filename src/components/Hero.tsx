"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

// Typewriter config
const ROLE_PREFIX = "Developer & ";
const ROLE_SUFFIX = " Enthusiast";
const CYCLE_WORDS = ["DevOps", "SRE", "DevOps", "SRE"]; // pattern to cycle
const TYPE_DELAY_MS = 900;  // delay before typing starts
const CHAR_INTERVAL = 60;   // ms per character
const CYCLE_INTERVAL = 1800; // ms each word stays visible

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
  const [typeDone, setTypeDone] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);

  // Typewriter effect — types the full initial text once
  useEffect(() => {
    const fullText = ROLE_PREFIX + CYCLE_WORDS[0] + ROLE_SUFFIX;
    const startTimer = setTimeout(() => {
      setTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(interval);
          setTyping(false);
          setTypeDone(true);
        }
      }, CHAR_INTERVAL);
      return () => clearInterval(interval);
    }, TYPE_DELAY_MS);
    return () => clearTimeout(startTimer);
  }, []);

  // Cycling effect — kicks in after typewriter is done
  useEffect(() => {
    if (!typeDone) return;
    const cycle = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % CYCLE_WORDS.length);
    }, CYCLE_INTERVAL);
    return () => clearInterval(cycle);
  }, [typeDone]);

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

          {/* ── Role line: typewriter → cycling DevOps/SRE ── */}
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0 0.3em",
            }}
          >
            {!typeDone ? (
              /* Typewriter phase */
              <span>
                I&apos;m a{" "}
                <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
                  {displayed}
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
              </span>
            ) : (
              /* Cycling phase — per-character vertical stagger */
              <span style={{ color: "rgba(255,255,255,0.45)" }}>
                I&apos;m a&nbsp;
                <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
                  Developer &amp;&nbsp;

                  {/* Each letter slides in vertically with stagger */}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={CYCLE_WORDS[wordIdx]}
                      style={{
                        display: "inline-flex",
                        overflow: "hidden",
                        fontWeight: 800,
                        color: "#ffffff",
                        whiteSpace: "nowrap",
                      }}
                      variants={{
                        enter: { transition: { staggerChildren: 0.045 } },
                        exit:  { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                      }}
                      initial="enter"
                      animate="enter"
                      exit="exit"
                    >
                      {CYCLE_WORDS[wordIdx].split("").map((char, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            enter: {
                              opacity: [0, 1],
                              y: [20, 0],
                              transition: { duration: 0.35, ease: "easeOut" },
                            },
                            exit: {
                              opacity: [1, 0],
                              y: [0, -20],
                              transition: { duration: 0.25, ease: "easeIn" },
                            },
                          }}
                          style={{ display: "inline-block" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  </AnimatePresence>

                  &nbsp;Enthusiast
                </span>
              </span>
            )}
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
          <br /><br />

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
          <br /><br />

          {/* ── Stats row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.5 }}
            className="flex items-center justify-center gap-12"
          >
            {[
              { value: "10+", label: "Projects" },
              { value: "3+", label: "CI/CD Pipelines" },
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
