"use client";

import React from "react";

export default function ResumeSection() {
  return (
    <section className="resume-section container" id="resume">
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
      </div>
    </section>
  );
}
