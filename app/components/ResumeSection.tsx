"use client";

import React from "react";

export default function ResumeSection() {
  return (
    <section className="resume-section container" id="resume">
      <div className="resume-header reveal">
        <h2 className="resume-title">
          <span className="resume-title-arabic">مرحباً</span>
          <span className="resume-title-en">HELLO<span className="resume-accent">!</span></span>
        </h2>
        <div className="resume-contact">
          <a href="tel:+201017340140" className="contact-link">+201017340140</a>
          <span className="contact-separator">|</span>
          <a href="mailto:yousefsayed207@gmail.com" className="contact-link">yousefsayed207@gmail.com</a>
        </div>
      </div>

      <div className="resume-grid">
        <div className="resume-col-left reveal">
          <div className="resume-block">
            <h3 className="resume-block-title">Education</h3>
            <p className="resume-block-text">
              Faculty of Applied Arts, Digital Advertising Department.<br />
              <strong>Bachelor Degree <span className="resume-blue-text">(2023)</span></strong>
            </p>
          </div>

          <div className="resume-block">
            <h3 className="resume-block-title">Softwares</h3>
            <div className="resume-software-groups">
              <div className="resume-software-group">
                <span className="resume-software-label">UI/UX Softwares</span>
                <div className="resume-software-icons">
                  <span className="resume-icon-badge">Figma</span>
                  <span className="resume-icon-badge">Xd</span>
                  <span className="resume-icon-badge">Webflow</span>
                </div>
              </div>
              <div className="resume-software-group">
                <span className="resume-software-label">Design Softwares</span>
                <div className="resume-software-icons">
                  <span className="resume-icon-badge">Ps</span>
                  <span className="resume-icon-badge">Ae</span>
                  <span className="resume-icon-badge">Pr</span>
                  <span className="resume-icon-badge">Id</span>
                  <span className="resume-icon-badge">Ai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-block">
            <h3 className="resume-block-title">Skills</h3>
            <div className="resume-skills-groups">
              <div className="resume-skills-group">
                <span className="resume-skills-label">UI/UX</span>
                <ul className="resume-skills-list">
                  <li>UX Research for apps and websites</li>
                  <li>Business Development Support</li>
                  <li>UI Design for apps and websites</li>
                </ul>
              </div>
              <div className="resume-skills-group">
                <span className="resume-skills-label">Design</span>
                <ul className="resume-skills-list">
                  <li>Logo & Brand Identity Design</li>
                  <li>Packaging Design</li>
                  <li>Digital & Print Graphics</li>
                  <li>Social Media Visuals</li>
                  <li>Video Editing / Motion Graphics</li>
                  <li>Company Profiles & Presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-col-right reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="resume-block">
            <h3 className="resume-block-title">Experience</h3>
            <ul className="resume-experience-list">
              <li className="resume-exp-item">
                <div className="resume-exp-header">
                  <span className="resume-company">Crete Digital Solutions</span>
                  <span className="resume-date resume-blue-text">(2026 - Current)</span>
                </div>
                <span className="resume-job">Senior UI/UX Designer</span>
              </li>
              <li className="resume-exp-item">
                <div className="resume-exp-header">
                  <span className="resume-company">Snaps Ai</span>
                  <span className="resume-date resume-blue-text">(2025 - Current)</span>
                </div>
                <span className="resume-job">Product/Graphic Designer</span>
              </li>
              <li className="resume-exp-item">
                <div className="resume-exp-header">
                  <span className="resume-company">Mungiz</span>
                  <span className="resume-date resume-blue-text">(2026 - Current)</span>
                </div>
                <span className="resume-job">Product Designer</span>
              </li>
              <li className="resume-exp-item">
                <div className="resume-exp-header">
                  <span className="resume-company">Crete Digital Solutions</span>
                  <span className="resume-date resume-blue-text">(2023 - Current)</span>
                </div>
                <span className="resume-job">Junior - Mid UI/UX Designer</span>
              </li>
              <li className="resume-exp-item">
                <div className="resume-exp-header">
                  <span className="resume-company">Internship at Youm7</span>
                  <span className="resume-date resume-blue-text">(2022)</span>
                </div>
                <span className="resume-job">UI/UX Intern</span>
              </li>
              <li className="resume-exp-item">
                <div className="resume-exp-header">
                  <span className="resume-company">Vision22</span>
                  <span className="resume-date resume-blue-text">(2019)</span>
                </div>
                <span className="resume-job">Graphic Designer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
