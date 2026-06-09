import Reveal from "./animations/Reveal";

export default function IntroSection() {
  return (
    <section className="intro-section" id="intro">
      <div className="intro-section-bg" />
      <div className="intro-content">
        <Reveal delay={0.1}>
          <span className="intro-label">[PHILOSOPHY]</span>
        </Reveal>
        <Reveal delay={0.2} width="100%">
          <div className="intro-text-block">
            <h2 className="intro-line" style={{ display: "block" }}>
              Shaping impactful digital products through data-driven research and <span className="script" style={{ padding: "0 0.2em", fontSize: "2.5em", textTransform: "lowercase", display: "inline-block", verticalAlign: "middle", transform: "translateY(-0.15em)", lineHeight: "0.5" }}>luxury</span> interaction design.
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
