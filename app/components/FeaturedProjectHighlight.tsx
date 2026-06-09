"use client";
import Reveal from "./animations/Reveal";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjectHighlight() {
  return (
    <section className="featured-highlight-section">
      <div className="container">
        <Reveal direction="up" delay={0.1}>
          <div className="featured-header">
            <h2 className="featured-title">READ THE NEXT STORY</h2>
            <p className="featured-subtitle">[ 1 OUT OF 10 FEATURED PROJECTS ]</p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <Link href="/projects/autoclub" className="featured-image-wrapper">
            <div className="featured-label left">AUTOCLUB</div>
            <div className="featured-label right">MOBILE APP</div>
            <div className="featured-image-container">
              <Image 
                src="/projects/ui-ux/AC.png" 
                alt="AutoClub Project" 
                fill
                style={{ objectFit: "cover" }}
                className="featured-mockup"
              />
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
