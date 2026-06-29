"use client";

import { projectsData } from "../data/projects";
import Reveal from "./animations/Reveal";
import StaggeredList, { StaggerItem } from "./animations/StaggeredList";

const categories = [
  { id: "vibe-website", title: "Landing Pages" },
  { id: "shopify", title: "Shopify Custom Stores" },
  { id: "ui-ux", title: "UI/UX Projects" },
];

export default function Projects() {
  const projects = Object.values(projectsData);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading-wrapper">
        <Reveal delay={0.1}>
          <div className="projects-heading">
            <span className="projects-heading-text">SELECTED</span>
            <div className="projects-heading-arabic">
              <span>﹁أعمالي﹂</span>
            </div>
            <span className="projects-heading-text">WORKS</span>
          </div>
        </Reveal>
      </div>

      <div className="projects-grid-wrapper">
        <div className="container projects-container-relative">
          {categories.map((cat) => {
            const categoryProjects = projects.filter((p) => p.type === cat.id);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={cat.id} className="project-category-block">
                <Reveal direction="up" delay={0.1}>
                  <h2 className="category-title">{cat.title}</h2>
                </Reveal>
                
                <StaggeredList className="projects-vibe-grid" delayOffset={0.2} staggerChildren={0.15}>
                  {categoryProjects.map((project) => (
                    <StaggerItem key={project.slug} className="vibe-card">
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
                    </StaggerItem>
                  ))}
                </StaggeredList>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
