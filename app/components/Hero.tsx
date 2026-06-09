
import Reveal from "./animations/Reveal";

export default function Hero() {
  return (
    <section className="hero-lux" id="hero">
      <div className="hero-lux-bg" />

      {/* Top Meta Info */}
      <div className="hero-lux-top">
        <Reveal delay={0} direction="down">
          <span className="hero-lux-meta">PORTFOLIO [2026]</span>
        </Reveal>
        <Reveal delay={0.1} direction="down">
          <span className="hero-lux-meta">BASE: EGYPT</span>
        </Reveal>
      </div>

      <div className="hero-lux-content">
        <h1 className="hero-lux-title">
          <div className="hero-lux-title-row hero-lux-title-top">
            <Reveal delay={0} direction="up">
              <span className="hero-lux-name">BONZZO</span>
            </Reveal>
            <Reveal delay={0.3} direction="down">
              <span className="hero-lux-meta hero-lux-meta-tag">
                ✦ SENIOR UI/UX<br />DESIGNER
              </span>
            </Reveal>
          </div>
          <div className="hero-lux-title-row hero-lux-title-bottom">
            <Reveal delay={0.1} direction="up">
              <span className="hero-lux-name">STUDIO</span>
            </Reveal>
          </div>
        </h1>
        <Reveal delay={0.2} direction="up" width="100%">
          <p className="hero-lux-subtitle" style={{ maxWidth: "600px" }}>
            Senior UI/UX Designer ✦ Shopify Developer ✦ Web Designer
            <br />
            <span style={{ fontSize: "0.75rem", opacity: 0.7, margin: "12px auto 0", display: "block", maxWidth: "400px" }}>
              Crafting immersive experiences, custom Shopify stores, and vibe-coded websites.
            </span>
          </p>
        </Reveal>
      </div>

      <div className="hero-lux-bottom">
        <Reveal delay={0.6} direction="up">
          <div className="hero-lux-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
