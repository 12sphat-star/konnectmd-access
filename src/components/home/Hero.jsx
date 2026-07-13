import "../../Styles/Hero.css";
import { Link } from "react-router-dom";

const trustPoints = [
  "24/7 access to licensed physicians",
  "Prescription savings on thousands of medications",
  "Behavioral health, counseling, psychology & psychiatry",
  "One membership can include up to 7 family members",
];

export default function Hero() {
  return (
    <section className="hero-v2" aria-labelledby="homepage-hero-title">
      <div className="container hero-v2-grid">
        <div className="hero-v2-copy">
          <p className="hero-v2-eyebrow">
            KonnectMD Access | Healthcare Access Resource Center
          </p>

          <h1 id="homepage-hero-title" className="hero-v2-title">
            Healthcare Access
            <span> That Fits Real Life.</span>
          </h1>

          <p className="hero-v2-lead">
            Explore trusted healthcare resources and connect with nationwide
            healthcare solutions including 24/7 physician access,
            prescription savings, behavioral health services, wellness
            programs, and family healthcare—all through KonnectMD.
          </p>

          <ul
            className="hero-v2-trust-list"
            aria-label="Membership highlights"
          >
            {trustPoints.map((point) => (
              <li key={point}>
                <span className="hero-v2-check" aria-hidden="true">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="hero-v2-actions">
  <Link to="/get-details" className="btn btn-primary">
    Find My Healthcare Solution
  </Link>

  <a href="#learning-center" className="btn btn-secondary">
    Explore Resource Centers
  </a>
</div>

          <Link to="/plans" className="hero-v2-text-link">
            See how KonnectMD Access works
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <div className="hero-v2-visual">
          <div className="hero-v2-image-frame">
            <img
              src="/images/hero-healthcare-resource-center.jpg"
              alt="Families, veterans, healthcare professionals, seniors, and business owners using modern healthcare services"
              className="hero-v2-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}