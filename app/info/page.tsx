"use client";

import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import BioSection from "../components/BioSection";
import ExpertiseSection from "../components/ExpertiseSection";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function InfoPage() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="info-page" style={{ paddingTop: "140px", minHeight: "100vh", background: "var(--bg-dark)" }}>
        <InfoSection />
        <BioSection />
        <ExpertiseSection />
      </main>
      <Footer />
    </>
  );
}
