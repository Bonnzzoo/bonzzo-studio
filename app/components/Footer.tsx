"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      {/* Top bar */}
      <div className="footer-top-bar">
        <span className="footer-name">[BONZO STUDIO]</span>
        <span className="footer-copyright">[COPYRIGHT 2026]</span>
      </div>

      {/* Main content */}
      <div className="footer-main">
        {/* COME SAY HELLO */}
        <div className="footer-hello">
          <div className="footer-hello-text">
            <span className="footer-hello-line">COME</span>
            <span className="footer-hello-line script-line">say</span>
            <span className="footer-hello-line">HELLO</span>
          </div>
          <span className="footer-hello-arabic">﹁مرحبا﹂</span>
        </div>

        {/* Empty center column for spacing */}
        <div />

        {/* Right column — socials + back to top */}
        <div className="footer-right">
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/youssefsayed207/"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="arrow">→</span> LINKEDIN
            </a>
            <a
              href="https://www.instagram.com/youssefsayed_ui/"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="arrow">→</span> INSTAGRAM
            </a>
            <a
              href="https://www.behance.net/youssefsayed19"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="arrow">→</span> BEHANCE
            </a>
            <a
              href="https://wa.me/201017340140"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="arrow">→</span> WHATSAPP
            </a>
          </div>

          <button className="footer-back-top" onClick={scrollToTop}>
            Back to top ↑
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© 2026 BONZO</span>
      </div>
    </footer>
  );
}
