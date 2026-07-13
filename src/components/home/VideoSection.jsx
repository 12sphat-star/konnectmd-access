import "../../Styles/VideoSection.css";
import { Link } from "react-router-dom";

const videoBenefits = [
  "Learn how the membership works",
  "See what services and resources are included",
  "Understand who KonnectMD is designed to help",
];

export default function VideoSection() {
  return (
    <section className="video-section" aria-labelledby="video-section-title">
      <div className="container video-section-shell">
        <div className="video-section-header">
          <p className="video-section-eyebrow">See How It Works</p>

          <h2 id="video-section-title">
            A Quick Overview of What KonnectMD Offers
          </h2>

          <p>
            Watch this short overview to understand how KonnectMD can support
            individuals, families, veterans, entrepreneurs, and businesses.
          </p>
        </div>

        <div className="video-section-card">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/launch-hero.png"
            className="video-section-player"
          >
            <source src="/videos/launch-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-section-benefits">
          {videoBenefits.map((benefit) => (
            <div className="video-section-benefit" key={benefit}>
              <span aria-hidden="true">✓</span>
              <strong>{benefit}</strong>
            </div>
          ))}
        </div>

        <div className="video-section-actions">
          <Link to="/get-details" className="btn btn-primary">
            Find My Healthcare Solution
          </Link>

          <Link to="/plans" className="video-section-text-link">
            Compare Membership Options →
          </Link>
        </div>
      </div>
    </section>
  );
}