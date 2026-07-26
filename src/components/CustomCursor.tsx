"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse positions
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverBounds, setHoverBounds] = useState({ width: 0, height: 0, x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer, .glass-hover, .group');
      
      if (interactive) {
        setIsHovering(true);
        const rect = interactive.getBoundingClientRect();
        setHoverBounds({
          width: rect.width,
          height: rect.height,
          x: rect.left,
          y: rect.top,
        });
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Smooth springs for the outer ring/bracket
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);
  const cursorWidth = useSpring(32, springConfig);
  const cursorHeight = useSpring(32, springConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x - 16);
    cursorY.set(mousePosition.y - 16);
    cursorWidth.set(32);
    cursorHeight.set(32);
  }, [mousePosition, cursorX, cursorY, cursorWidth, cursorHeight]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-yellow-400 rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: 1,
        }}
        transition={{ duration: 0, ease: "linear" }} // instant follow
      />

      {/* Outer Ring / Bracket Box */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99]"
        style={{
          x: cursorX,
          y: cursorY,
          width: cursorWidth,
          height: cursorHeight,
        }}
      >
        <motion.div
          className="w-full h-full relative"
          animate={{
            borderRadius: "999px",
            border: "1px solid rgba(255, 211, 0, 0.4)", // yellow-400
          }}
          transition={{ duration: 0.2 }}
        >
        </motion.div>
      </motion.div>
    </>
  );
}
