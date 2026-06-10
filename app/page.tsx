"use client";

import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import WhatIDo from "./components/WhatIDo";
import AboutMe from "./components/AboutMe";
import ExpertiseSkills from "./components/ExpertiseSkills";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <IntroSection />
        <WhatIDo />
        <Projects />
        <AboutMe />
        <ExpertiseSkills />
        <ExperienceTimeline />
      </main>
      <Footer />
    </>
  );
}
