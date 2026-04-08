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

          <div className="hero-badges">
            <span>Up to 7 Household Members</span>
            <span>Use Benefits Fast</span>
            <span>Cancel Anytime</span>
          </div>

          <div className="hero-actions">
            <Link to="/plans" className="btn btn-primary">
              View Memberships
            </Link>

            <Link to="/get-details" className="btn btn-secondary">
              Get Plan Details
            </Link>

            <a
              href="https://www.konnectmdagency.com/index.aspx?ReferringDealerID=817595"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Join Now
            </a>
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