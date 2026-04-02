"use client";

import Link from "next/link";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { ProjectData } from "@/app/data/projects";

export default function CaseStudyClient({ project }: { project: ProjectData }) {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="case-study">
        <div className="container">
          <Link href="/#projects" className="back-link reveal">
            ← Back to Projects
          </Link>

          {/* Hero */}
          <div className="case-hero">
            <div className="case-hero-top">
              <div>
                <h1
                  className="case-hero-title reveal"
                  style={
                    {
                      "--accent": project.accent,
                    } as React.CSSProperties
                  }
                >
                  {project.title}
                </h1>
                <p className="case-category reveal reveal-delay-1">
                  {project.category}
                </p>
                <div className="case-tags reveal reveal-delay-2">
                  {project.tags.map((tag) => (
                    <span className="case-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="case-hero-meta reveal reveal-delay-2">
                <div className="case-meta-item">
                  <span className="case-meta-label">Company</span>
                  <span className="case-meta-value">{project.company}</span>
                </div>
                <div className="case-meta-item">
                  <span className="case-meta-label">Tools</span>
                  <span className="case-meta-value">{project.tools}</span>
                </div>
                <div className="case-meta-item">
                  <span className="case-meta-label">Year</span>
                  <span className="case-meta-value">{project.year}</span>
                </div>
                <div className="case-meta-item">
                  <span className="case-meta-label">Duration</span>
                  <span className="case-meta-value">{project.duration}</span>
                </div>
                {project.prototypeUrl ? (
                  <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className="case-prototype-btn" style={{ textDecoration: 'none', display: 'inline-flex', padding: 0 }}>
                    ▶ Check Prototype
                  </a>
                ) : (
                  <button className="case-prototype-btn" onClick={() => alert("Prototype link coming soon!")}>
                    ▶ Check Prototype
                  </button>
                )}
              </div>
            </div>

            {/* Accent shape */}
            <div
              className="case-accent-shape reveal"
              style={{
                background: `radial-gradient(circle, ${project.accent} 0%, ${project.accent}66 40%, transparent 70%)`,
                filter: "blur(20px)",
                opacity: 0.3,
                maxWidth: "400px",
                marginTop: "40px",
              }}
            />
          </div>

          {/* About */}
          <div className="case-about">
            <h2 className="case-about-title reveal">
              About <span>{project.title.replace(".", "")}</span>
            </h2>
            <p className="reveal reveal-delay-1">{project.description}</p>
          </div>

          {/* Workflow */}
          <div className="workflow">
            <h2 className="workflow-title reveal">
              Work <span>Flow</span>
            </h2>
            <div className="workflow-grid reveal reveal-delay-1">
              {project.workflow.map((step, i) => (
                <div
                  className={`workflow-cell workflow-step`}
                  key={step.number}
                  style={
                    {
                      "--step-accent": project.accent,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="workflow-step-number"
                    style={{ color: project.accent }}
                  >
                    {step.number}
                  </div>
                  <div className="workflow-step-label">{step.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personas */}
          {project.personas && (
            <div className="personas">
              <h2 className="personas-title reveal">
                User <span>Personas.</span>
              </h2>
              <div className="reveal reveal-delay-1" style={{ overflowX: "auto" }}>
                <table className="persona-table">
                  <thead>
                    <tr>
                      {project.personas.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.personas.rows.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        {row.values.map((val, i) => (
                          <td key={i}>{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Shared Behavior */}
          {project.sharedBehavior && (
            <div className="shared-behavior">
              <h2 className="shared-behavior-title reveal">
                Shared <span>Behavior & Needs.</span>
              </h2>
              <ul className="shared-behavior-list reveal reveal-delay-1">
                {project.sharedBehavior.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
