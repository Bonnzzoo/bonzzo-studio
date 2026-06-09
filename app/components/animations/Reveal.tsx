"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function Reveal({
  children,
  width = "fit-content",
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 };
      case "down":
        return { opacity: 0, y: -50 };
      case "left":
        return { opacity: 0, x: 50 };
      case "right":
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: getInitialPosition(),
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.19, 1, 0.22, 1] as const, // ease-out-expo
        }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
