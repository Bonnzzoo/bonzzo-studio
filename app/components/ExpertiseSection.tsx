export default function ExpertiseSection() {
  const services = [
    "Art direction",
    "UI / Visual Design",
    "User Experience Design",
    "Creative Development",
    "Shopify Solutions",
    "Brand Identity",
  ];

  return (
    <section className="expertise-section" id="expertise">
      {/* Divider with Arabic anchor */}
      <div className="expertise-divider">
        <div className="expertise-divider-line" />
        <span className="expertise-divider-arabic">﹁مهارات﹂</span>
        <div className="expertise-divider-line" />
      </div>

      <div className="expertise-content">
        {/* Left column — image + philosophy */}
        <div className="expertise-left reveal">
          <div className="expertise-image">
            <img src="/workspace.png" alt="Creative Workspace" />
          </div>

          <h3 className="expertise-philosophy-title">
            Quietly <span className="script">powerful</span>
            <br />
            Digital Experiences
          </h3>

          <p className="expertise-philosophy-text">
            Design to me is a bridge between emotion and function. My goal has
            always been to elevate everyday interactions into something more
            meaningful — quietly threading in moments of joy that catch us by
            surprise and stay with us for years to come.
          </p>

          <a href="mailto:yousefsayed207@gmail.com" className="expertise-cta">
            READ MY STORY <span className="cta-arabic">قصتي</span>
          </a>
        </div>

        {/* Right column — services list */}
        <div className="expertise-right reveal reveal-delay-1">
          <div className="expertise-label">[EXPERTISE AND SERVICES]</div>
          <div className="expertise-list">
            {services.map((service) => (
              <div className="expertise-item" key={service}>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="expertise-tagline reveal reveal-delay-2">
        [FUELED BY CURIOSITY, SHAPED BY INSIGHT]
      </div>
    </section>
  );
}
