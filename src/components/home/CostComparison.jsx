import { Link } from "react-router-dom";

export default function CostComparison() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">The Real Cost of Going Without</p>
          <h2>What are you actually paying — and what are you getting?</h2>
          <p className="section-copy">
            For self-employed workers, families, and small business owners,
            the math on traditional insurance stopped making sense years ago.
            Here's what the numbers actually look like.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          {/* Traditional Insurance */}
          <div
            style={{
              background: "rgba(229, 57, 53, 0.06)",
              border: "1px solid rgba(229, 57, 53, 0.2)",
              borderRadius: "20px",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ff8a80",
                marginBottom: "1rem",
              }}
            >
              Traditional Insurance
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "#ff8a80",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              $1,200+
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginBottom: "1.25rem",
              }}
            >
              Average monthly premium for a family of 4
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 2,
              }}
            >
              <li>✗ High deductibles ($3,000–$8,000)</li>
              <li>✗ Limited provider networks</li>
              <li>✗ Referrals required for specialists</li>
              <li>✗ Premiums rise every year</li>
              <li>✗ No employer = full cost on you</li>
              <li>✗ Open enrollment windows only</li>
            </ul>
          </div>

          {/* Going Without */}
          <div
            style={{
              background: "rgba(244, 181, 68, 0.06)",
              border: "1px solid rgba(244, 181, 68, 0.2)",
              borderRadius: "20px",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              Going Without
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "var(--gold)",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              $0/mo
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginBottom: "1.25rem",
              }}
            >
              Until something goes wrong
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 2,
              }}
            >
              <li>✗ One ER visit = $2,000–$5,000+</li>
              <li>✗ No access to virtual care</li>
              <li>✗ Prescriptions at full retail cost</li>
              <li>✗ No mental health support</li>
              <li>✗ Medical debt affects your credit</li>
              <li>✗ One health scare can derail everything</li>
            </ul>
          </div>

          {/* KonnectMD */}
          <div
            style={{
              background: "rgba(45, 127, 249, 0.08)",
              border: "2px solid rgba(45, 127, 249, 0.4)",
              borderRadius: "20px",
              padding: "1.5rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--blue)",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.3rem 1rem",
                borderRadius: "999px",
                whiteSpace: "nowrap",
              }}
            >
              The Smart Middle Ground
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--blue-soft)",
                marginBottom: "1rem",
                marginTop: "0.5rem",
              }}
            >
              KonnectMD Access
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "var(--blue-soft)",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              $59.99
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginBottom: "1.25rem",
              }}
            >
              Per family per month — up to 7 members
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 2,
              }}
            >
              <li>✓ Virtual care included</li>
              <li>✓ Free & discounted prescriptions</li>
              <li>✓ Mental health support</li>
              <li>✓ No network restrictions nationwide</li>
              <li>✓ Enroll any time — use same day</li>
              <li>✓ Covers up to 7 household members</li>
            </ul>
          </div>
        </div>

        {/* Stats bar */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          {[
            { stat: "$22,000+", label: "Avg. annual family insurance premium" },
            { stat: "30M+", label: "Americans uninsured or underinsured" },
            { stat: "60%", label: "Of bankruptcies tied to medical bills" },
            { stat: "$59.99", label: "KonnectMD Access starting monthly cost" },
          ].map((item) => (
            <div key={item.label}>
              <span
                style={{
                  display: "block",
                  fontSize: "1.6rem",
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
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  marginTop: "0.4rem",
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/get-details" className="btn btn-primary">
            See Which Plan Fits My Budget
          </Link>
        </div>
      </div>
    </section>
  );
}
