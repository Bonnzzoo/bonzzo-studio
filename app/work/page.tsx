"use client";

import Link from "next/link";
import { projectsData } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function WorkPage() {
  useScrollReveal();

  const mainProjects = Object.values(projectsData).filter(
    (p) => p.type === "project"
  );
  const landingPages = Object.values(projectsData).filter(
    (p) => p.type === "landing-page"
  );

  return (
    <>
      <Navbar />
      <main className="work-page" style={{ paddingTop: "140px", minHeight: "100vh", paddingBottom: "100px", background: "var(--bg-cream)" }}>
        <div className="container">
          
          <div className="projects-heading reveal" style={{ justifyContent: "flex-start", marginBottom: "40px" }}>
            <span className="projects-heading-text" style={{ fontSize: "clamp(3rem, 8vw, 8rem)", color: "var(--text-dark)", opacity: 1 }}>WORK</span>
          </div>

          {/* ── ALL PROJECTS LIST ── */}
          <div className="projects-list-heading reveal">
            <span className="projects-list-label">[ALL PROJECTS]</span>
          </div>

          <div className="projects-list">
            {mainProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="project-list-item reveal"
                id={`list-${project.slug}`}
              >
                <div className="project-list-left">
                  <h3 className="project-list-title">{project.title}</h3>
                  <span className="project-list-category">
                    {project.category}
                  </span>
                </div>
                <div className="project-list-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span className="project-list-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-list-year">{project.year}</span>
                <span className="project-list-arrow">→</span>
              </Link>
            ))}
          </div>

          {/* ── LANDING PAGES ── */}
          <div className="projects-list-heading reveal" style={{ marginTop: "100px" }}>
            <span className="projects-list-label">[LANDING PAGES]</span>
          </div>

          <div className="projects-list">
            {landingPages.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="project-list-item reveal"
                id={`list-${project.slug}`}
              >
                <div className="project-list-left">
                  <h3 className="project-list-title">{project.title}</h3>
                  <span className="project-list-category">
                    {project.category}
                  </span>
                </div>
                <div className="project-list-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span className="project-list-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-list-year">{project.year}</span>
                <span className="project-list-arrow">→</span>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
