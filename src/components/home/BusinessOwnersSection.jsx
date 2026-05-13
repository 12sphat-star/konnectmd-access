import { Link } from "react-router-dom";

export default function BusinessOwnersSection() {
  return (
    <section
      style={{
        background: "#08182d",
        color: "#ffffff",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#93c5fd",
              fontWeight: "900",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontSize: "12px",
              marginBottom: "14px",
            }}
          >
            For Business Owners & Entrepreneurs
          </p>

          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: "1",
              fontWeight: "950",
              letterSpacing: "-0.04em",
              marginBottom: "22px",
            }}
          >
            Healthcare access for the people building Hampton Roads.
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#cbd5e1",
              marginBottom: "26px",
            }}
          >
            Self-employed professionals, 1099 workers, entrepreneurs, and
            small business owners often need healthcare options outside the
            traditional employer system.
          </p>

          <Link
            to="/business-owners-entrepreneurs-healthcare-hampton-roads"
            style={{
              background: "#3b82f6",
              color: "#ffffff",
              padding: "15px 22px",
              borderRadius: "14px",
              fontWeight: "950",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Explore Business Owner Options
          </Link>
        </div>

        <div
          style={{
            background: "#0b1f36",
            border: "1px solid rgba(147,197,253,0.18)",
            borderRadius: "24px",
            padding: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "26px",
              fontWeight: "950",
              marginBottom: "24px",
            }}
          >
            Common searches this helps solve:
          </h3>

          {[
            "Healthcare for self-employed workers",
            "Healthcare for entrepreneurs",
            "Healthcare for 1099 contractors",
            "Healthcare without open enrollment",
            "Small business healthcare alternatives",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(59,130,246,0.10)",
                border: "1px solid rgba(147,197,253,0.14)",
                borderRadius: "14px",
                padding: "14px 16px",
                marginBottom: "12px",
                color: "#dbeafe",
                fontWeight: "700",
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}