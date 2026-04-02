import Link from "next/link";
import { projectsData } from "../data/projects";

export default function Projects() {
  const mainProjects = Object.values(projectsData).filter(
    (p) => p.type === "project"
  );
  const landingPages = Object.values(projectsData).filter(
    (p) => p.type === "landing-page"
  );

  /* Show first 4 featured projects in the top grid */
  const featured = mainProjects.slice(0, 4);

  return (
    <section className="projects-section" id="projects">
      {/* ── FEATURED PROJECTS STICKY HEADING ── */}
      <div className="projects-heading-wrapper">
        <div className="projects-heading reveal">
          <span className="projects-heading-text">FEATURED</span>
          <div className="projects-heading-arabic">
            <span>﹁أعمالي﹂</span>
          </div>
          <span className="projects-heading-text">PROJECTS</span>
        </div>
      </div>

      <div className="container projects-container-relative">
        <div className="projects-grid">
          {featured.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="project-card reveal"
              id={`project-${project.slug}`}
            >
              <div
                className="project-card-image"
                style={project.hasImage ? {
                  backgroundImage: `url('/projects/${project.slug}.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                } : {
                  background: `
                    radial-gradient(ellipse at 30% 60%, ${project.accent}30 0%, transparent 60%),
                    radial-gradient(ellipse at 70% 40%, ${project.accent}15 0%, transparent 50%),
                    linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)
                  `,
                }}
              />
              <div className="project-card-info">
                <h3 className="project-card-title">{project.title}</h3>
                <span className="project-card-subtitle">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="projects-description reveal">
          Immersive experiences uniquely created based on user-insights and
          design thinking methodologies. Always setting you apart from the
          industry.
        </p>

        {/* CTA */}
        <div className="projects-cta reveal" style={{ marginTop: '40px' }}>
          <Link href="/work">
            VIEW ALL WORK <span className="cta-arabic">شاهد أعمالي</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
