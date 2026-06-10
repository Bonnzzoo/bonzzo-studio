"use client";
import { motion } from "framer-motion";
import Reveal from "./animations/Reveal";

export default function AboutMe() {
  return (
    <section className="about-inline-section">
      <div className="container">
        <Reveal delay={0.2} direction="up">
          <h2 className="about-inline-title">
            THE <span className="script-text gold">story</span> SO FAR
          </h2>
        </Reveal>
        <Reveal delay={0.4} direction="up">
          <div className="about-inline-text" style={{ maxWidth: "800px" }}>
            <p>
              Though born in Egypt, I spent most of my early years crafting digital experiences and later diving deep into UI/UX design. Fast forward 4 years, I find myself partnering with leading businesses, serving their customers with insight-led, immersive, digital experiences.
            </p>
            <p>
              Outside of my day job, you'll find me exploring new creative tools, dissecting premium brand identities, or most likely looking for the next big design trend.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
