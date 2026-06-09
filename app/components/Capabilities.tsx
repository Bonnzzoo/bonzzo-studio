"use client";

import Reveal from "./animations/Reveal";

export default function Capabilities() {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="intro-section-bg" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="capabilities-grid">
          
          <div className="capabilities-col">
            <Reveal direction="up" delay={0.2} width="100%">
              <div className="cap-block">
                <h2 className="cap-title">Education</h2>
                <div>
                  <p className="cap-text">Faculty of Applied Arts, Digital Advertising Department.</p>
                  <p className="cap-bold">Bachelor Degree <span className="cap-accent">(2023)</span></p>
                </div>
              </div>
            </Reveal>


          </div>

          <div className="capabilities-col">
            <Reveal direction="up" delay={0.4} width="100%">
              <div className="cap-block">
                <h2 className="cap-title">Skills</h2>
                <div className="cap-split">
                  <div>
                    <span className="cap-label">Design</span>
                    <ul className="cap-list">
                      <li>UI Design for Web & Mobile</li>
                      <li>UX Research & Prototyping</li>
                      <li>Shopify Theme Design</li>
                      <li>Landing Page Design</li>
                      <li>Design Systems & Wireframing</li>
                    </ul>
                  </div>
                  <div>
                    <span className="cap-label">Development</span>
                    <ul className="cap-list">
                      <li>Custom Shopify Theme Development</li>
                      <li>Landing Page Development</li>
                      <li>Front-End Engineering (React, Next.js)</li>
                      <li>Responsive Web Development</li>
                      <li>E-Commerce Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
