"use client";

import Link from "next/link";

const services = [
  "UI / Visual Design",
  "User Experience Design",
  "Creative Development",
  "Shopify Solutions",
  "Brand Identity",
];

export default function WhatIDo() {
  return (
    <section className="whatido" id="services">
      <div className="whatido-inner">
        {/* Section header */}
        <div className="whatido-header reveal">
          <span className="whatido-label">(Services)</span>
          <h2 className="whatido-title">What I do</h2>
        </div>

        {/* Service list */}
        <div className="whatido-list">
          {services.map((service, i) => (
            <Link
              href="/services"
              key={service}
              className="whatido-row reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="whatido-number">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <span className="whatido-service">{service}</span>
              <span className="whatido-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
