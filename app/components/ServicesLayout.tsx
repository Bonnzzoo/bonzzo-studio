"use client";

import { useEffect, useState, useRef } from "react";
import "./ServicesLayout.css";

type ProjectConfig = {
  id: string;
  image: string;
  title: string;
  client: string;
};

type ServiceSectionData = {
  id: string;
  title: string;
  description?: string;
  tags: string[];
  projects: ProjectConfig[];
};

export default function ServicesLayout({
  sections,
}: {
  sections: ServiceSectionData[];
}) {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  // Setup Intersection Observers to track scroll progress
  useEffect(() => {
    // 1. Track which section is in view to update the active sticky nav
    const sectionElements = document.querySelectorAll(".services-section");
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // trigger when section crosses middle third
    );

    sectionElements.forEach((el) => navObserver.observe(el));

    // 2. Track masonry items for staggered reveal
    const itemElements = document.querySelectorAll(".masonry-item");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optional: stop observing once revealed
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    itemElements.forEach((el) => revealObserver.observe(el));

    return () => {
      navObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="services-page-wrap">
      {/* 1. Sticky Segmented Nav */}
      <div className="services-section-nav">
        {sections.map((section) => (
          <div
            key={`nav-${section.id}`}
            className={`services-nav-item ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.title}
            <div className="services-nav-indicator" />
          </div>
        ))}
      </div>

      {/* 2. Split Pane Sections */}
      <div className="services-content">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="services-section"
          >
            <div className="services-split">
              {/* Left Pinned Info */}
              <div className="services-left">
                <div className="services-left-sticky">
                  <h2 className="services-title">{section.title}</h2>
                  {section.description && (
                    <p className="services-description">{section.description}</p>
                  )}
                  <div className="services-tag-list">
                    {section.tags.map((tag, idx) => (
                      <div className="services-tag-row" key={idx}>
                        <span>0{idx + 1}</span>
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Scrolling Masonry */}
              <div className="services-right">
                <div className="services-masonry">
                  {section.projects.map((proj) => (
                    <div className="masonry-item" key={proj.id}>
                      <div className="masonry-img-wrapper">
                        {/* If images are missing, a CSS placeholder shows */}
                        {proj.image && (
                          <img src={proj.image} alt={proj.title} />
                        )}
                      </div>
                      <div className="masonry-caption">
                        <span>{proj.title}</span>
                        <span>{proj.client}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
