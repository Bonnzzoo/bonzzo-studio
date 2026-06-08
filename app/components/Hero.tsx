
export default function Hero() {
  return (
    <section className="hero-lux reveal" id="hero">
      <div className="hero-lux-bg" />

      {/* Top Meta Info */}
      <div className="hero-lux-top">
        <span className="hero-lux-meta slide-down">PORTFOLIO [2026]</span>
        <span className="hero-lux-meta slide-down" style={{ animationDelay: "0.1s" }}>BASE: EGYPT</span>
      </div>

      <div className="hero-lux-content">
        <h1 className="hero-lux-title">
          <div className="hero-lux-title-row hero-lux-title-top">
            <span className="hero-lux-name fade-up">BONZZO</span>
            <span className="hero-lux-meta slide-down hero-lux-meta-tag" style={{ animationDelay: "0.3s" }}>
              ✦ SENIOR UI/UX<br />DESIGNER
            </span>
          </div>
          <div className="hero-lux-title-row hero-lux-title-bottom">
            <span className="hero-lux-name fade-up" style={{ animationDelay: "0.1s" }}>STUDIO</span>
          </div>
        </h1>
        <p className="hero-lux-subtitle fade-up" style={{ animationDelay: "0.2s", maxWidth: "600px" }}>
          Senior UI/UX Designer ✦ Shopify Developer ✦ Web Designer
          <br />
          <span style={{ fontSize: "0.75rem", opacity: 0.7, margin: "12px auto 0", display: "block", maxWidth: "400px" }}>
            Crafting immersive experiences, custom Shopify stores, and vibe-coded websites.
          </span>
        </p>
      </div>

      <div className="hero-lux-bottom">
        <div className="hero-lux-scroll fade-in-slow">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
}
