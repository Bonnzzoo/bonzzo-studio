"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

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
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !target.tagName) return;

      const tagName = target.tagName.toLowerCase();
      if (
        tagName === "a" ||
        tagName === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        (target.classList && target.classList.contains("cursor-hover"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

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
          mixBlendMode: isHovering ? "difference" : "normal",
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          border: isHovering ? "0px solid rgba(255, 255, 255, 0)" : "2px solid rgba(255, 255, 255, 0.5)",
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
          opacity: isVisible && !isHovering ? 1 : 0
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
