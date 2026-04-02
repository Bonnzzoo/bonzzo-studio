"use client";

import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
