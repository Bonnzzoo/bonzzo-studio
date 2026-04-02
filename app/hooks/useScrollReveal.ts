"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal() {
  const initialized = useRef(false);

  const init = useCallback(() => {
    if (initialized.current) return;
    initialized.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timeout = setTimeout(init, 100);
    return () => clearTimeout(timeout);
  }, [init]);
}
