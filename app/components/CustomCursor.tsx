"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return true;
  });

  // Premium ultra-smooth physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    if (isMobile) {
      return () => window.removeEventListener("resize", handleResize);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
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

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isMobile]);

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
        .premium-cursor-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 2147483647; /* Highest possible */
          mix-blend-mode: difference;
          /* Force hardware acceleration */
          transform: translateZ(0);
          will-change: transform;
        }
      `}} />
      
      {/* Wrapper ensures mix-blend-mode works perfectly without Safari bugs */}
      <div className="premium-cursor-wrapper">
        
        {/* Outer Ring */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            x: smoothX,
            y: smoothY,
            marginLeft: "-20px",
            marginTop: "-20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1.5px solid rgba(255, 255, 255, 0.6)",
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
          animate={{
            scale: isHovering ? 1.6 : 1,
            backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
            border: isHovering ? "0px solid rgba(255, 255, 255, 0)" : "1.5px solid rgba(255, 255, 255, 0.6)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        
        {/* Core Dot */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            x: mouseX,
            y: mouseY,
            marginLeft: "-4px",
            marginTop: "-4px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          animate={{
            opacity: isHovering ? 0 : 1,
            scale: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </div>
    </>
  );
}
