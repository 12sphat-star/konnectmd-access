import { Link } from "react-router-dom";

export default function LatestInsights() {
  return (
    <section
      style={{
        background: "#071426",
        padding: "90px 24px",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <p
          style={{
            color: "#93c5fd",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            marginBottom: "12px",
          }}
        >
          Latest Insights
        </p>

        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 60px)",
            lineHeight: 1,
            fontWeight: 950,
            marginBottom: "18px",
          }}
        >
          Healthcare trends, telehealth growth, and wellness insights.
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: 1.8,
            maxWidth: "760px",
            fontSize: "18px",
            marginBottom: "42px",
          }}
        >
          Learn why more Hampton Roads families, entrepreneurs, and small
          business owners are exploring modern healthcare access solutions.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <Link
            to="/insights/why-telehealth-is-growing-hampton-roads"
            style={{
              background: "#0b1f36",
              border: "1px solid rgba(147,197,253,0.18)",
              borderRadius: "22px",
              padding: "28px",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <p
              style={{
                color: "#93c5fd",
                fontWeight: 800,
                marginBottom: "10px",
              }}
            >
              Telehealth
            </p>

            <h3
              style={{
                fontSize: "28px",
                lineHeight: 1.1,
                fontWeight: 950,
                marginBottom: "14px",
              }}
            >
              Why More Hampton Roads Families Are Exploring Telehealth in 2026
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.7,
              }}
            >
              Rising healthcare costs, mental health demand, and virtual care
              accessibility are reshaping how families access healthcare.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}