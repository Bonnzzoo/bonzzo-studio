"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-content-wrapper">
        {/* Middle Section: Hello + Form */}
        <div className="footer-middle-section">
          <div className="footer-huge-hello">
            <div className="footer-hello-row">
              <span className="footer-hello-word">COME</span>
              <span className="footer-hello-script" style={{ transform: "translateY(0.1em)" }}>say</span>
            </div>
            <div className="footer-hello-row">
              <span className="footer-hello-word">HELLO</span>
              <span className="footer-hello-arabic" style={{ transform: "translateY(-0.1em)" }}>﹁مرحبا﹂</span>
            </div>
            <p className="footer-hello-desc">
              Have a project in mind? Let's talk about it. Fill out the form or reach out directly.
            </p>
          </div>

          <div className="footer-contact-form">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="NAME" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="EMAIL" required className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="MESSAGE" required className="form-textarea" rows={4}></textarea>
              </div>
              <button type="submit" className="form-submit">
                SEND MESSAGE <span className="submit-arrow">↗</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom links */}
        <div className="footer-bottom-links">
          <div className="footer-social-links">
            <a href="https://www.linkedin.com/in/youssefsayed207/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
            <a href="https://www.instagram.com/youssefsayed_ui/" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a>
            <a href="https://www.behance.net/youssefsayed19" target="_blank" rel="noopener noreferrer">BEHANCE ↗</a>
            <a href="https://wa.me/201017340140" target="_blank" rel="noopener noreferrer">WHATSAPP ↗</a>
          </div>

          <button className="footer-back-top" onClick={scrollToTop}>
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
