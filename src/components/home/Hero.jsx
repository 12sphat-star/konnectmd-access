import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero hero-premium">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Affordable Healthcare Access</p>

          <h1>Healthcare access that fits real life.</h1>

          <p className="hero-lead">
            Rising healthcare costs are pushing many self-employed families and
            small business owners to look for a more practical option.
          </p>

          <div className="hero-facts">
            <div className="hero-fact">
              <strong>Up to 7 Members</strong>
              <span>One household plan</span>
            </div>

            <div className="hero-fact">
              <strong>Fast Access</strong>
              <span>Use benefits quickly</span>
            </div>

            <div className="hero-fact">
              <strong>Flexible</strong>
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/plans" className="btn btn-primary">
              View Memberships
            </Link>

            <Link to="/get-details" className="btn btn-secondary">
              Get Plan Details
            </Link>
          </div>
        </div>

        <div className="hero-image-wrap hero-image-card">
          <img
            src="/images/hero-telehealth.jpg"
            alt="Person using telehealth services on a laptop"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}