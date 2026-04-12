import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero hero-premium">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Now Available in Hampton Roads</p>

          <h1>
            Healthcare Access{" "}
            <span style={{ color: "var(--blue-soft)" }}>
              Without the Insurance Price Tag.
            </span>
          </h1>

          <p className="hero-lead">
            If you're self-employed, running a small business, or supporting a
            family — and traditional health insurance has priced you out —
            there is now a real alternative. KonnectMD Access gives you and
            your household connected care starting at{" "}
            <strong style={{ color: "var(--text)" }}>$59.99/mo.</strong>
          </p>

          <div className="hero-facts">
            <div className="hero-fact">
              <strong>Up to 7 Members</strong>
              <span>One plan covers your whole household</span>
            </div>
            <div className="hero-fact">
              <strong>Nationwide Access</strong>
              <span>Use it anywhere in the U.S.</span>
            </div>
            <div className="hero-fact">
              <strong>Starts at $59/mo</strong>
              <span>4 membership levels available</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/get-details" className="btn btn-primary">
              See My Options
            </Link>
            <Link to="/plans" className="btn btn-secondary">
              View Memberships
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
            Presented by a licensed health insurance agent. Not an MLM.
            No referral requirement. Just real options for real people.
          </p>
        </div>

        <div className="hero-image-wrap hero-image-card">
          <img
            src="/images/hero-telehealth.jpg"
            alt="Person using telehealth services on a laptop"
            className="hero-image"
          />

          <div className="floating-stat">
            <strong>$0</strong>
            <span>Virtual visit copay on select plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
