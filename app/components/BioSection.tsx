export default function BioSection() {
  return (
    <section className="bio-section" id="bio">
      <div className="bio-section-bg" />
      <div className="bio-content">
        <div className="bio-text-block reveal">
          <p className="bio-role">
            SR UI/UX DESIGNER <span>@ CRETE DIGITAL SOLUTIONS</span>
          </p>
          <p className="bio-location">BASED IN CAIRO</p>
          <p className="bio-description">
            I partner with brands, companies and entrepreneurs to transform
            visions into captivating experiences, all designed with the users at
            the helm.
          </p>
        </div>

        <div className="bio-scroll-indicators reveal reveal-delay-2">
          <span className="bio-indicator">[NICE TO MEET YOU]</span>
          <span className="bio-indicator bio-indicator-arabic">
            「مرحبا بك」
          </span>
          <span className="bio-indicator">[SCROLL ↓ DOWN]</span>
        </div>
      </div>
    </section>
  );
}
