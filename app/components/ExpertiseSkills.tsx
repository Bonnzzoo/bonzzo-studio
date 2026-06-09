"use client";
import Reveal from "./animations/Reveal";
import Link from "next/link";

export default function ExpertiseSkills() {
  return (
    <section className="expertise-section">
      <div className="container">
        <div className="expertise-grid">
          <div className="expertise-left">
            <Reveal direction="up" delay={0.1}>
              <h2 className="expertise-giant-title">
                EXPERTISE <br />
                <span className="script-text gold">and</span> SKILLS
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="expertise-desc">
                Bridging emotion and clarity, my design practice generally evolves around storytelling, research and enterprise design thinking.
              </p>
              <p className="expertise-desc">
                The aim is always the same for all projects, which is to create one of a kind, human-centered experiences that leave a positive impact.
              </p>
            </Reveal>
          </div>
          
          <div className="expertise-right">
            <div className="skill-item">
              <Reveal direction="up" delay={0.2}>
                <div className="skill-num">[01]</div>
                <h3 className="skill-name">ART DIRECTION</h3>
                <div className="skill-details">
                  <p>Translating emotion into visual stories that connect, inspire, and endure.</p>
                  <div className="skill-links">
                     <span className="skill-link-title">RELATED WORK ↓</span>
                     <Link href="/projects/you-app">YOU APP</Link>
                     <Link href="/projects/autoclub">AUTOCLUB</Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="skill-item">
              <Reveal direction="up" delay={0.3}>
                <div className="skill-num">[02]</div>
                <h3 className="skill-name">UI / VISUAL DESIGN</h3>
                <div className="skill-details">
                  <p>Creating unique, accessible designs that feel natural and leave a lasting impact.</p>
                  <div className="skill-links">
                     <span className="skill-link-title">RELATED WORK ↓</span>
                     <Link href="/projects/boomroom">BOOMROOM</Link>
                     <Link href="/projects/mega-plug">MEGA PLUG</Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="skill-item">
              <Reveal direction="up" delay={0.4}>
                <div className="skill-num">[03]</div>
                <h3 className="skill-name">UX DESIGN</h3>
                <div className="skill-details">
                  <p>Designing seamless flows and enterprise experiences driven by deep research.</p>
                  <div className="skill-links">
                     <span className="skill-link-title">RELATED WORK ↓</span>
                     <Link href="/projects/zajel">ZAJEL</Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
