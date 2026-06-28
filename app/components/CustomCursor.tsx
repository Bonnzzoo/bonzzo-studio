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

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    if (isMobile) {
      return () => {
        window.removeEventListener("resize", handleResize);
      };
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
        .custom-cursor-outer, .custom-cursor-inner {
          position: fixed;
          top: 0;
          left: 0;
          border-radius: 50%;
          pointer-events: none;
        }
        .custom-cursor-outer {
          width: 40px;
          height: 40px;
        }
        .custom-cursor-inner {
          width: 8px;
          height: 8px;
          background-color: white;
        }
      `}} />
      
      {/* Outer Ring */}
      <motion.div
        className="custom-cursor-outer"
        style={{
          x: smoothX,
          y: smoothY,
          marginLeft: "-20px",
          marginTop: "-20px",
          zIndex: 99999,
          mixBlendMode: isHovering ? "difference" : "normal",
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
        className="custom-cursor-inner"
        style={{
          x: mouseX,
          y: mouseY,
          marginLeft: "-4px",
          marginTop: "-4px",
          zIndex: 100000,
          mixBlendMode: "difference",
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
