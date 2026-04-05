
export default function Hero() {
  return (
    <section className="hero-lux" id="hero">
      <div className="hero-lux-bg" />

      {/* Top Meta Info */}
      <div className="hero-lux-top">
        <span className="hero-lux-meta slide-down">PORTFOLIO [2026]</span>
        <span className="hero-lux-meta slide-down" style={{ animationDelay: "0.1s" }}>BASE: EGYPT</span>
      </div>

      <div className="hero-lux-content">
        <h1 className="hero-lux-title">
          <div className="hero-lux-title-row hero-lux-title-top">
            <span className="hero-lux-name fade-up">BONZO</span>
            <span className="hero-lux-meta slide-down hero-lux-meta-tag" style={{ animationDelay: "0.3s" }}>
              ✦ SENIOR UI/UX<br />DESIGNER
            </span>
          </div>
          <div className="hero-lux-title-row hero-lux-title-bottom">
            <span className="hero-lux-name fade-up" style={{ animationDelay: "0.1s" }}>STUDIO</span>
          </div>
        </h1>
        <p className="hero-lux-subtitle fade-up" style={{ animationDelay: "0.2s" }}>
          Senior UI/UX Designer crafting immersive digital <br className="hidden-mobile" /> experiences and luxury editorial platforms.
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
