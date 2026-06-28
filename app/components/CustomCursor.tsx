"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash, then check

  // Smooth follow physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch or small screen
    if (window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }
    
    setIsMobile(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (hover: hover) and (pointer: fine) {
          body, * {
            cursor: none !important;
          }
        }
      `}} />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          marginLeft: "-20px",
          marginTop: "-20px",
          zIndex: 99999,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          border: isHovering ? "0px solid rgba(255, 255, 255, 0)" : "2px solid rgba(255, 255, 255, 0.5)",
          mixBlendMode: isHovering ? "difference" : "normal"
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          marginLeft: "-4px",
          marginTop: "-4px",
          zIndex: 100000,
        }}
        animate={{
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
