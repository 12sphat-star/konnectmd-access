import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-box premium-cta">
          <p className="eyebrow">Ready to Move Forward?</p>
          <h2>Stop going without. Start today.</h2>
          <p>
            Thousands of self-employed workers, business owners, and families
            are already using KonnectMD to stay connected to care. The only
            question is whether it fits your situation — and that's a 15-minute
            conversation away.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              margin: "1.5rem 0",
              textAlign: "center",
            }}
          >
            {[
              { stat: "$59.99", label: "Starting per month" },
              { stat: "7", label: "Members per plan" },
              { stat: "$0", label: "Virtual visit copay on select plans" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "1rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {item.stat}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    color: "var(--muted)",
                    marginTop: "0.35rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/get-details" className="btn btn-primary">
              See My Options
            </Link>
            <Link to="/book-call" className="btn btn-secondary">
              Book My 15-Minute Call
            </Link>
            <a
              href="https://www.konnectmdagency.com/index.aspx?ReferringDealerID=817595"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              View Full Details & Enroll
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
