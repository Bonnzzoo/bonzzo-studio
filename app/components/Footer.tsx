"use client";

import Reveal from "./animations/Reveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-content-wrapper">
        {/* Middle Section: Hello + Form */}
        <div className="footer-middle-section">
          <Reveal delay={0.1} width="100%">
            <div className="footer-huge-hello">
              <div className="footer-hello-row">
                <span className="footer-hello-word">COME</span>
                <span className="footer-hello-script" style={{ transform: "translateY(0.1em)" }}>say</span>
              </div>
              <div className="footer-hello-row">
                <span className="footer-hello-word">HELLO</span>
                <span className="footer-hello-arabic" style={{ transform: "translateY(-0.1em)" }}>مرحبا</span>
              </div>
              <p className="footer-hello-desc">
                Have a project in mind? Let's talk about it. Fill out the form or reach out directly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} width="100%">
            <div className="footer-contact-form">
              <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                <input type="hidden" name="access_key" value="0b5b4147-4832-42c5-b2f7-3fe30f4169d3" />
                <div className="form-group">
                  <input type="text" name="name" placeholder="NAME" required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="EMAIL" required className="form-input" />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="MESSAGE" required className="form-textarea" rows={4}></textarea>
                </div>
                <button type="submit" className="form-submit">
                  SEND MESSAGE <span className="submit-arrow">↗</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Bottom links */}
        <Reveal delay={0.5} width="100%">
          <div className="footer-bottom-links">
            <div className="footer-social-links">
              <a href="https://www.linkedin.com/in/youssefsayed207/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
              <a href="https://www.instagram.com/youssefsayed_ui/" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a>
              <a href="https://www.behance.net/youssefsayed19" target="_blank" rel="noopener noreferrer">BEHANCE ↗</a>
            </div>
            
            <div className="footer-copyright">
              <span>© {new Date().getFullYear()} BONZZO. ALL RIGHTS RESERVED.</span>
              <button className="footer-back-to-top" onClick={scrollToTop}>
                BACK TO TOP ↑
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
