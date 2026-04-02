export default function InfoSection() {
  return (
    <section className="info-section" id="info">
      {/* Massive IN FO heading */}
      <div className="info-heading reveal">
        <span className="info-heading-text">IN</span>
        <div className="info-heading-arabic">
          <span>﹁نبذة﹂</span>
        </div>
        <span className="info-heading-text">FO</span>
      </div>

      {/* Portrait */}
      <div className="info-portrait reveal reveal-delay-1">
        <div className="info-portrait-img">
          <img src="/portrait.png" alt="Youssef Sayed Portrait" />
        </div>
      </div>

      {/* Mixed-font headline */}
      <div className="info-headline reveal reveal-delay-2">
        <h2 className="info-headline-text">
          A <span className="bracket-text">[multi-disciplinary]</span>{" "}
          perspective shaped by{" "}
          <span className="script">Egyptian</span> roots and a{" "}
          <span className="script">creative</span> upbringing
        </h2>
      </div>

      {/* Body text */}
      <div className="info-body reveal reveal-delay-3">
        <p className="info-body-text">
          A design approach led by curiosity, emotion, and empathy.
        </p>
        <p className="info-body-text">
          All digital experiences created are crafted to be intuitive,
          meaningful, and quietly delightful.
        </p>
        <a href="mailto:yousefsayed207@gmail.com" className="info-cta">
          READ MY STORY <span className="cta-arabic">قصتي</span>
        </a>
      </div>
    </section>
  );
}
