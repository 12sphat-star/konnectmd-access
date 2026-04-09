import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="landing-page landing-page-clean">
      <div className="container landing-wrap">
        <p className="eyebrow">Affordable Healthcare Access</p>

       <h1 className="landing-title">
  Healthcare access that actually fits real life
</h1>

<p>
  Many people today are either paying more than they expected for coverage,
  or still trying to find something that fits.

  This gives individuals and households another option to explore —
  especially when traditional routes feel out of reach or incomplete.
</p>

     <div className="landing-points">
  <div className="landing-point">Up to 7 people on one plan</div>
  <div className="landing-point">Nationwide access</div>
  <div className="landing-point">Multiple membership levels</div>
  <div className="landing-point">Use benefits quickly</div>
</div>

       <div className="landing-actions">
  <Link to="/get-details" className="btn btn-primary">
    Get Plan Details
  </Link>

  <Link to="/plans" className="btn btn-secondary">
    View Membership Options
  </Link>
</div>

        <div className="landing-card">
          <h2>Why people are taking a closer look</h2>
       <h2>Choose a membership level that fits your situation</h2>

<p>
  Whether you need a simple starting point or more complete support for your
  household, each level is designed to give you access without the complexity
  of traditional plans.
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

         <h2>Take a closer look at your options</h2>

<p>
  The best way to understand if this fits your situation is to review the
  details or schedule a quick call.
</p>

<div className="landing-actions">
  <Link to="/get-details" className="btn btn-primary">
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
       

       <p className="landing-note">
  KonnectMD Access is not health insurance. It is a healthcare access and savings membership.
</p>
      </div>
    </section>
  );
}
