"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          BONZO
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          id="navbar-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="/info" onClick={() => setMenuOpen(false)}>
            Info
          </a>
        </div>

        <span className="navbar-year">[2026]</span>
      </div>
    </nav>
  );
}
