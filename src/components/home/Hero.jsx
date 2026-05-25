import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero hero-premium">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Now Launching in Hampton Roads</p>

          <h1>
            Healthcare Access for Real Life —{" "}
            <span style={{ color: "var(--blue-soft)" }}>
              Not Insurance Confusion.
            </span>
          </h1>

          <p className="hero-lead">
            Need a doctor without waiting weeks? Trying to cover your family
            without getting crushed by cost? KonnectMD helps individuals,
            families, self-employed workers, and small business owners get
            connected care starting at{" "}
            <strong style={{ color: "var(--text)" }}>$59.99/mo.</strong>
            Available nationwide with a growing Hampton Roads presence.
          </p>

          <div className="hero-facts">
  <div className="hero-fact">
    <strong>Care From Home</strong>
    <span>Talk to a provider without the waiting room</span>
  </div>

  <div className="hero-fact">
    <strong>Fast Access</strong>
    <span>Simple options when you need help now</span>
  </div>

  <div className="hero-fact">
    <strong>Not an MLM</strong>
    <span>No referrals required to use benefits</span>
  </div>
</div>

          <div className="hero-actions">
   <Link to="/get-details" className="btn btn-primary">
  Get Plan Details
</Link>

<Link to="/locations" className="btn btn-secondary">
  See Hampton Roads Locations
</Link>
          </div>

          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.85rem",
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            Built for Hampton Roads families, entrepreneurs, small business owners, and
everyday people who need a smarter way to access care.
          </p>
        </div>

        <div className="hero-image-wrap hero-image-card">
          <img
            src="/images/hero-telehealth.jpg"
            alt="Family using online doctor visit from home"
            className="hero-image"
          />

    <div className="floating-stat">
  <strong>No</strong>
  <span>
    Open enrollment wait or preexisting condition stress
  </span>
</div>
        </div>
      </div>
    </section>
  );
}