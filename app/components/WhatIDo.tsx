"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Reveal from "./animations/Reveal";

interface ServiceItem {
  title: string;
  index: string;
  description: string[];
  cta: string;
  bg: string;
  textColor: string;
  indexColor: string;
}

const services: ServiceItem[] = [
  {
    index: "01",
    title: "Ui/Ux & Web Design\n& Full Scope Creation",
    description: [
      "I craft interfaces that balance visual clarity with purposeful interaction. Every screen, layout, and element is designed to serve the user while reinforcing the brand.",
      "From wireframes to high fidelity prototypes, my design process is built around structure, systems, and clear decision making resulting in products that feel composed and intentional.",
    ],
    cta: "Discuss design",
    bg: "#f0eeeb",
    textColor: "#0a0a0a",
    indexColor: "rgba(10,10,10,0.2)",
  },
  {
    index: "02",
    title: "Creative\nDevelopment",
    description: [
      "I design and code high performance landing pages, custom websites, and premium Shopify stores from scratch. My development process focuses on structure, performance, and clean implementation.",
      "By combining thoughtful engineering with flexible systems, I create digital platforms that are fast, scalable, and easy to maintain built to evolve over time.",
    ],
    cta: "Discuss development",
    bg: "#a8a8a0",
    textColor: "#0a0a0a",
    indexColor: "rgba(10,10,10,0.15)",
  },
  {
    index: "03",
    title: "Full Scope\nCreation",
    description: [
      "I take responsibility for the full creation of digital products from early definition to final release. The process begins with understanding the product, its goals, and the problems it needs to solve.",
      "Design and development are treated as one continuous system, allowing the product to remain coherent throughout its creation. The result is a clear, well structured digital product built to communicate value.",
    ],
    cta: "Discuss your product",
    bg: "#2b2b2b",
    textColor: "#e3e3e3",
    indexColor: "rgba(227,227,227,0.15)",
  },
];

export default function WhatIDo() {
  return (
    <section className="sirnik-services" id="services">
      {services.map((service, i) => (
        <div
          key={service.index}
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
            <Reveal direction="up" delay={0.1}>
              <h2 className="sirnik-card-title">
                {service.title.split("\n").map((line, j) => (
                  <span key={j} className="sirnik-title-line">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal direction="down" delay={0.2}>
              <span className="sirnik-card-index">{service.index}</span>
            </Reveal>
          </div>

          <Reveal delay={0.3} width="100%">
            <div className="sirnik-divider"></div>
          </Reveal>

          {/* Details area */}
          <div className="sirnik-card-bottom">
            <Reveal direction="up" delay={0.4}>
              <span className="sirnik-approach-label">Approach</span>
            </Reveal>
            <div className="sirnik-desc-grid">
              <Reveal direction="up" delay={0.5}>
                <p className="sirnik-desc-col">{service.description[0]}</p>
              </Reveal>
              <Reveal direction="up" delay={0.6}>
                <p className="sirnik-desc-col">{service.description[1]}</p>
              </Reveal>
            </div>
          </div>

          {/* CTA */}
          <Reveal direction="up" delay={0.7}>
            <div className="sirnik-card-cta">
              <Link href="/services" className="sirnik-cta-link">
                {service.cta}
                <span className="sirnik-cta-arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      ))}
    </section>
  );
}
