import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero hero-premium">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Affordable Healthcare Access</p>

          <h1>Healthcare access that fits real life.</h1>

          <p className="hero-lead">
            Rising healthcare costs are making it harder for self-employed
            individuals, families, and business owners to find something that
            works. KonnectMD Access offers another way to stay connected to
            care.
          </p>

          <div className="hero-facts">
            <div className="hero-fact">
              <strong>Up to 7 Members</strong>
              <span>One household plan</span>
            </div>

            <div className="hero-fact">
              <strong>Nationwide Access</strong>
              <span>Services across the U.S.</span>
            </div>

            <div className="hero-fact">
              <strong>Fast Start</strong>
              <span>Use benefits quickly</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/get-details" className="btn btn-primary">
              Get Plan Details
            </Link>

            <Link to="/plans" className="btn btn-secondary">
              View Memberships
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