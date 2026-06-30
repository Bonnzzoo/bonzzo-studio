"use client";
import Reveal from "./animations/Reveal";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "CRETE AI LABS",
      location: "[CAIRO, EGYPT]",
      date: "2025 - CURRENT",
      role: "SENIOR UI/UX DESIGNER",
      tasks: [
        "Taking briefs directly from clients and starting workflow.",
        "Responsible for designing and testing mobile apps, websites and dashboards for multiple services and products.",
        "Responsible for assigning tasks and roles to other team members and training interns."
      ]
    },
    {
      company: "SNAPS AI",
      location: "[CAIRO, EGYPT]",
      date: "2025 - CURRENT",
      role: "PRODUCT/GRAPHIC DESIGNER",
      tasks: [
        "Helped in creating the website, using and testing multiple Ai tools.",
        "Responsible for graphic design needs and printing elements for production."
      ]
    },
    {
      company: "ZAJEL",
      location: "[CAIRO, EGYPT]",
      date: "2026 - CURRENT",
      role: "PRODUCT DESIGNER",
      tasks: [
        "Responsible for creating the website, using and testing multiple Ai tools.",
        "Responsible for fixing bugs, design issues and continues enhancements."
      ]
    },
    {
      company: "CRETE AI LABS",
      location: "[CAIRO, EGYPT]",
      date: "2023 - 2025",
      role: "JUNIOR - MID UI/UX DESIGNER",
      tasks: [
        "Participating in design briefs and brainstorming sessions.",
        "Creating wireframes, ui designs and prototypes."
      ]
    },
    {
      company: "YOUM 7",
      location: "[CAIRO, EGYPT]",
      date: "2022",
      role: "UI/UX INTERN",
      tasks: [
        "Working closely with professionals and product owners on COP 27 mobile app."
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <div className="experience-grid">
          <div className="experience-left">
            <Reveal direction="up" delay={0.1}>
              <h2 className="experience-title">
                THE <span className="script-text gold">prequel</span> <br /> TO TODAY
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="experience-desc">
                The story so far: from East to West, and wherever else good people are building great things.
              </p>
            </Reveal>
          </div>
          
          <div className="experience-right">
            {experiences.map((exp, i) => (
              <Reveal key={i} direction="up" delay={0.2 + i * 0.1} width="100%">
                <div className={`exp-item ${i === 0 ? "first-exp-item" : ""}`}>
                  <div className="exp-top-row">
                    <div className="exp-company-block">
                      <h3 className="exp-company">{exp.company}</h3>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                    <div className="exp-role-block">
                      <h4 className="exp-date">{exp.date}</h4>
                      <span className="exp-role">{exp.role}</span>
                    </div>
                  </div>
                  {exp.tasks && (
                    <ul className="exp-tasks">
                      {exp.tasks.map((task, j) => (
                        <li key={j}>— {task}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
