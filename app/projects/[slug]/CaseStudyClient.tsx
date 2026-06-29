"use client";

import Link from "next/link";
import Footer from "@/app/components/Footer";
import type { ProjectData } from "@/app/data/projects";
import Reveal from "@/app/components/animations/Reveal";

export default function CaseStudyClient({ project }: { project: ProjectData }) {
  return (
    <>
      <main className="case-study">
        <div className="container">
          <Reveal delay={0}>
            <Link href="/#projects" className="back-link">
              ← Back to Projects
            </Link>
          </Reveal>

          {/* Hero */}
          <div className="case-hero">
            <div className="case-hero-top">
              <div>
                <Reveal direction="up" delay={0.1}>
                  <h1
                    className="case-hero-title"
                    style={
                      {
                        "--accent": project.accent,
                      } as React.CSSProperties
                    }
                  >
                    {project.title}
                  </h1>
                </Reveal>
                <Reveal direction="up" delay={0.2}>
                  <p className="case-category">
                    {project.category}
                  </p>
                </Reveal>
                <Reveal direction="up" delay={0.3}>
                  <div className="case-tags">
                    {project.tags.map((tag) => (
                      <span className="case-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal direction="left" delay={0.3}>
                <div className="case-hero-meta">
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
            </Reveal>
          </div>

            {/* Accent shape */}
            <Reveal direction="up" delay={0.1}>
              <div
                className="case-accent-shape"
                style={{
                  background: `radial-gradient(circle, ${project.accent} 0%, ${project.accent}66 40%, transparent 70%)`,
                  filter: "blur(20px)",
                  opacity: 0.3,
                  maxWidth: "400px",
                  marginTop: "40px",
                }}
              />
            </Reveal>
          </div>

          {/* About */}
          <div className="case-about">
            <Reveal direction="up" delay={0.1}>
              <h2 className="case-about-title">
                About <span>{project.title.replace(".", "")}</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2} width="100%">
              <p>{project.description}</p>
            </Reveal>
          </div>

          {/* Workflow */}
          <div className="workflow">
            <Reveal direction="up" delay={0.1}>
              <h2 className="workflow-title">
                Work <span>Flow</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2} width="100%">
              <div className="workflow-grid">
              {project.workflow && project.workflow.map((step) => (
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
            </Reveal>
          </div>

          {/* Personas */}
          {project.personas && (
            <div className="personas">
              <Reveal direction="up" delay={0.1}>
                <h2 className="personas-title">
                  User <span>Personas.</span>
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2} width="100%">
                <div style={{ overflowX: "auto" }}>
                <table className="persona-table">
                  <thead>
                    <tr>
                      {project.personas.headers.map((header: string) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.personas.rows.map((row: { label: string; values: (string | number)[] }) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        {row.values.map((val: string | number, i: number) => (
                          <td key={i}>{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </Reveal>
            </div>
          )}

          {/* Shared Behavior */}
          {project.sharedBehavior && (
            <div className="shared-behavior">
              <Reveal direction="up" delay={0.1}>
                <h2 className="shared-behavior-title">
                  Shared <span>Behavior & Needs.</span>
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2} width="100%">
                <ul className="shared-behavior-list">
                {project.sharedBehavior.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
                </ul>
              </Reveal>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
