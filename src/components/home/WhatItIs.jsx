import SectionHeading from "../shared/SectionHeading";

export default function WhatItIs() {
  return (
    <section id="what-it-is" className="section">
      <div className="container two-col">
        <div>
          <SectionHeading
            eyebrow="What KonnectMD Is"
            title="A Healthcare Membership for People Who Need Care Without the Insurance Headache"
            text="KonnectMD helps families, entrepreneurs, small business owners, and everyday people access care, savings, and support through a simple healthcare membership."
          />

          <p className="body-copy">
            Depending on the membership level, benefits may include virtual
            urgent care, prescription savings, mental health support, dental,
            vision, chiropractic access, and other healthcare services.
          </p>

          <p className="body-copy">
            One membership may include{" "}
            <strong style={{ color: "var(--text)" }}>
              up to 7 household members
            </strong>
            , making it easier for families to access care without paying more
            for each person.
          </p>

          <div
            style={{
              marginTop: "1.25rem",
              padding: "1rem 1.25rem",
              background: "rgba(45, 127, 249, 0.08)",
              border: "1px solid rgba(45, 127, 249, 0.2)",
              borderRadius: "14px",
              lineHeight: 1.7,
            }}
          >
            <strong
              style={{
                display: "block",
                marginBottom: "0.35rem",
                color: "var(--blue-soft)",
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Important to know
            </strong>

            <span style={{ color: "var(--muted)", fontSize: "0.93rem" }}>
              KonnectMD is not traditional health insurance. It is a healthcare
              membership designed to provide access to services and savings.
            </span>
          </div>
        </div>

        <div>
          <img
            src="/images/agent-trust.jpg"
            alt="KonnectMD healthcare membership options being reviewed"
            className="section-image"
          />

          <div
            style={{
              marginTop: "1.25rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
            }}
          >
            {[
              { stat: "$59.99", label: "Starting monthly option" },
              { stat: "7", label: "Household members" },
              { stat: "24/7", label: "Virtual care access" },
              { stat: "NO", label: "Open enrollment wait" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "0.9rem 1rem",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--blue-soft)",
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
                    marginTop: "0.3rem",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}