"use client";

import Link from "next/link";
import { projectsData } from "../data/projects";

const categories = [
  { id: "vibe-website", title: "Landing Pages" },
  { id: "shopify", title: "Shopify Custom Stores" },
  { id: "ui-ux", title: "UI/UX Projects" },
];

export default function Projects() {
  const projects = Object.values(projectsData);

  return (
    <section className="projects-section reveal" id="projects">
      <div className="projects-heading-wrapper">
        <div className="projects-heading reveal">
          <span className="projects-heading-text">SELECTED</span>
          <div className="projects-heading-arabic">
            <span>﹁أعمالي﹂</span>
          </div>
          <span className="projects-heading-text">WORKS</span>
        </div>
      </div>

      <div className="projects-grid-wrapper">
        <div className="container projects-container-relative">
          {categories.map((cat) => {
            const categoryProjects = projects.filter((p) => p.type === cat.id);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={cat.id} className="project-category-block">
                <h2 className="category-title reveal">{cat.title}</h2>
                <div className="projects-vibe-grid">
                  {categoryProjects.map((project, index) => (
                    <div key={project.slug} className="vibe-card reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
                      <div className="vibe-card-image-wrapper">
                        {project.liveLink ? (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="vibe-card-image" style={project.hasImage ? { backgroundImage: `url('${encodeURI(project.image || `/projects/${project.slug}.png`)}')` } : { background: project.accent }}>
                            <span className="live-link-badge">Live Link ↗</span>
                          </a>
                        ) : (
                          <div className="vibe-card-image" style={project.hasImage ? { backgroundImage: `url('${encodeURI(project.image || `/projects/${project.slug}.png`)}')` } : { background: project.accent }}>
                          </div>
                        )}
                      </div>
                      <div className="vibe-card-content">
                        <div className="vibe-card-header">
                          <h3 className="vibe-card-title">{project.title}</h3>
                          <span className="vibe-card-category">{project.category}</span>
                        </div>
                        <p className="vibe-card-desc">{project.description}</p>
                        <div className="vibe-card-tags">
                          {project.tags.map(tag => (
                            <span key={tag} className="vibe-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
