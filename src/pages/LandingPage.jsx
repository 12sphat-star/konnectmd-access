import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="landing-page landing-page-clean">
      <div className="container landing-wrap">
        <p className="eyebrow">Affordable Healthcare Access</p>

        <h1 className="landing-title">
          Can’t afford traditional health insurance? You still have options.
        </h1>

        <p className="landing-sub">
          Rising healthcare costs are putting pressure on self-employed families,
          households, and small business owners. KonnectMD Access offers a
          practical path to care with flexible membership options, household
          value, and nationwide access.
        </p>

        <div className="landing-points">
          <div className="landing-point">Up to 7 members on one plan</div>
          <div className="landing-point">4 membership tiers</div>
          <div className="landing-point">Services available nationwide</div>
          <div className="landing-point">Use benefits fast</div>
        </div>

        <div className="landing-actions">
          <Link to="/plans" className="btn btn-primary">
            Explore Memberships
          </Link>

          <Link to="/get-details" className="btn btn-secondary">
            Get Plan Details
          </Link>
        </div>

        <div className="landing-card">
          <h2>Why people are taking a closer look</h2>
          <p>
            One urgent care visit, one prescription, or one unexpected need can
            cost more than people expect. This gives households and business
            owners another way to stay connected to care without the full weight
            of traditional insurance pricing.
          </p>

          <div className="landing-mini-grid">
            <div className="landing-mini-card">
              <h3>Silver</h3>
              <p>Simple family-focused access</p>
            </div>

            <div className="landing-mini-card">
              <h3>Gold</h3>
              <p>Expanded value with wellness support</p>
            </div>

            <div className="landing-mini-card">
              <h3>Platinum</h3>
              <p>Broader care and preventive value</p>
            </div>

            <div className="landing-mini-card">
              <h3>Titanium</h3>
              <p>Premium bundled membership value</p>
            </div>
          </div>

          <div className="landing-card-actions">
            <a
              href="https://www.konnectmdagency.com/index.aspx?ReferringDealerID=817595"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Join Now
            </a>

            <Link to="/book-call" className="btn btn-secondary">
              Book a Call
            </Link>
          </div>
        </div>

        <p className="landing-note">
          KonnectMD Access is not health insurance. It is a healthcare savings
          and access membership.
        </p>
      </div>
    </section>
  );
}
