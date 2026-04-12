"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface ServiceItem {
  title: string;
  index: string;
  description: [string, string];
  cta: string;
  bg: string;
  textColor: string;
  indexColor: string;
}

const services: ServiceItem[] = [
  {
    title: "UI/UX &\nWeb Design",
    index: "01",
    description: [
      "We craft interfaces that balance visual clarity with purposeful interaction. Every screen, layout, and element is designed to serve the user while reinforcing the brand.",
      "From wireframes to high-fidelity prototypes, the design process is built around structure, systems, and clear decision-making — resulting in products that feel composed and intentional.",
    ],
    cta: "Discuss design",
    bg: "#f0eeeb",
    textColor: "#0a0a0a",
    indexColor: "rgba(10,10,10,0.2)",
  },
  {
    title: "Creative\nDevelopment",
    index: "02",
    description: [
      "We build websites and digital products using Next.js, React, and modern frameworks. Our development process focuses on structure, performance, and clean implementation.",
      "By combining thoughtful engineering with flexible systems, we create digital platforms that are fast, scalable, and easy to maintain — built to evolve over time.",
    ],
    cta: "Discuss development",
    bg: "#a8a8a0",
    textColor: "#0a0a0a",
    indexColor: "rgba(10,10,10,0.15)",
  },
  {
    title: "Full-Scope\nCreation",
    index: "03",
    description: [
      "We take responsibility for the full creation of digital products — from early definition to final release. The process begins with understanding the product, its goals, and the problems it needs to solve.",
      "Design and development are treated as one continuous system, allowing the product to remain coherent throughout its creation. The result is a clear, well-structured digital product built to communicate value.",
    ],
    cta: "Discuss your product",
    bg: "#2b2b2b",
    textColor: "#e3e3e3",
    indexColor: "rgba(227,227,227,0.15)",
  },
];

export default function WhatIDo() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sirnik-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sirnik-services" id="services">
      {services.map((service, i) => (
        <div
          key={service.index}
          ref={(el) => { sectionRefs.current[i] = el; }}
          className="sirnik-card"
          style={
            {
              "--card-bg": service.bg,
              "--card-text": service.textColor,
              "--card-index": service.indexColor,
            } as React.CSSProperties
          }
        >
          {/* Title area */}
          <div className="sirnik-card-top">
            <h2 className="sirnik-card-title">
              {service.title.split("\n").map((line, j) => (
                <span key={j} className="sirnik-title-line">
                  {line}
                </span>
              ))}
            </h2>
            <span className="sirnik-card-index">{service.index}</span>
          </div>

          {/* Divider */}
          <div className="sirnik-divider" />

          {/* Details area */}
          <div className="sirnik-card-bottom">
            <span className="sirnik-approach-label">Approach</span>
            <div className="sirnik-desc-grid">
              <p className="sirnik-desc-col">{service.description[0]}</p>
              <p className="sirnik-desc-col">{service.description[1]}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="sirnik-card-cta">
            <Link href="/services" className="sirnik-cta-link">
              {service.cta}
              <span className="sirnik-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
