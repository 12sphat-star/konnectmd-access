import "../../Styles/VideoSection.css";
import { Link } from "react-router-dom";

const videoBenefits = [
  "See how KonnectMD gives you another healthcare choice",
  "Discover healthcare services available to you and your family",
  "Find the membership option that fits your needs",
];

export default function VideoSection() {
  return (
    <section className="video-section" aria-labelledby="video-section-title">
      <div className="container video-section-shell">
        <div className="video-section-header">
          <p className="video-section-eyebrow">A Better Way to Access Care</p>

          <h2 id="video-section-title">
            Your Doctor's Office Is Closed. Now What?
          </h2>

          <p>
            Healthcare needs don't always happen during business hours.
            See how KonnectMD gives individuals and families another way
            to access healthcare when they need it.
          </p>
        </div>

        <div className="video-section-card">
          <div className="video-section-youtube">
            <iframe
             src="https://www.youtube.com/embed/1D-v4gPIH_o"
              title="Your Doctor's Office Is Closed. Now What? - KonnectMD"
              className="video-section-player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
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