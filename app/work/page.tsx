"use client";

import Link from "next/link";
import { useEffect } from "react";
import { projectsData } from "../data/projects";
import Footer from "../components/Footer";
import "./WorkPage.css";

export default function WorkPage() {
  const allProjects = Object.values(projectsData);

  // Setup the reveal observer for cards on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".work-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="work-page-dark">
      
      <main>
        {/* HERO SECTION */}
        <div className="work-hero">
          <div className="work-filter-label">Industry: All</div>
          <h1 className="work-hero-title">Our Work</h1>
        </div>

        {/* STAGGERED GRID SECTION */}
        <div className="work-grid">
          {allProjects.map((project, index) => {
            // Apply the 6-step repeating pattern for aspect ratios
            const patternIndex = index % 6;

            return (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className={`work-card work-card-ar-${patternIndex}`}
              >
                <div className="work-img-container">
                  {project.hasImage || project.slug === "you-app" ? (
                    // In a real scenario you would have project.image mapped, 
                    // for now we use placeholder path or generic placeholder 
                    // if it doesn't exist in data
                    <div className="work-img-placeholder">
                      {project.title.toUpperCase()} — VIEW PROJECT
                    </div>
                  ) : (
                    <div className="work-img-placeholder">
                      {project.title.toUpperCase()} — VIEW PROJECT
                    </div>
                  )}
                </div>

                <div className="work-card-meta">
                  <h3 className="work-card-title">{project.title}</h3>
                  <div className="work-card-tags">
                    {project.tags.slice(0, 3).join(" / ")}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Adjust Footer margin/colors if needed for dark mode, 
          but usually Footer handles itself or we wrap it. */}
      <Footer />
    </div>
  );
}
