"use client";

import { useScrollReveal } from "./hooks/useScrollReveal";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <main>
        <Hero />
        <IntroSection />
        <WhatIDo />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
