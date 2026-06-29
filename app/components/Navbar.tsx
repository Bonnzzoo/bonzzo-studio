"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useContact } from "./ContactContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openContact } = useContact();

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
          BONZZO
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
          <Link href="/#hero" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/#projects" onClick={() => setMenuOpen(false)}>
            Work
          </Link>
          <Link href="/#services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <button className="navbar-cta-mobile" onClick={() => { setMenuOpen(false); openContact(); }}>
            Let&apos;s Create
          </button>
        </div>

        <button className="navbar-cta" onClick={openContact}>Let&apos;s Create</button>
      </div>
    </nav>
  );
}
