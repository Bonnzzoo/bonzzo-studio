"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useVelocity, useTransform } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth follow physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Scroll velocity for stretch effect
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityScale = useTransform(smoothVelocity, [-1000, 0, 1000], [1.15, 1, 1.15]);
  const velocityScaleX = useTransform(smoothVelocity, [-1000, 0, 1000], [0.85, 1, 0.85]);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
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

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

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
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          marginLeft: "-20px",
          marginTop: "-20px",
          scaleX: velocityScaleX,
          scaleY: velocityScale,
          zIndex: 99999,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          border: isHovering ? "0px solid rgba(255, 255, 255, 0)" : "2px solid rgba(255, 255, 255, 0.5)",
          mixBlendMode: isHovering ? "difference" : "normal"
        }}
        transition={{
          scale: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
          border: { duration: 0.2 }
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full flex items-center justify-center text-black text-[8px] font-bold tracking-widest opacity-0"
          animate={{
            opacity: isHovering ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        >
        </motion.div>
      </motion.div>
      
      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          marginLeft: "-3px",
          marginTop: "-3px",
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
