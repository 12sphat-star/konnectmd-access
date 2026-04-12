import SectionHeading from "../shared/SectionHeading";

export default function WhatItIs() {
  return (
    <section id="what-it-is" className="section">
      <div className="container two-col">
        <div>
          <SectionHeading
            eyebrow="What This Is"
            title="A Smarter Path to Care — Not Insurance, Something Better Suited for You"
            text="KonnectMD Access is a healthcare access and savings membership designed for the people traditional insurance left behind — the self-employed, small business owners, and families who need real care at a price that actually makes sense."
          />

          <p className="body-copy">
            Depending on your membership level, access includes virtual care,
            prescriptions, wellness support, mental health services, specialist
            consultations, and more — all available nationwide with no network
            restrictions.
          </p>

          <p className="body-copy">
            One plan can cover{" "}
            <strong style={{ color: "var(--text)" }}>up to 7 household members.</strong>{" "}
            Onboarding is included so you know exactly how to use every benefit
            from day one.
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
              A note on what this is
            </strong>
            <span style={{ color: "var(--muted)", fontSize: "0.93rem" }}>
              This is not health insurance. It is a membership providing access
              to healthcare services and savings. For traditional health or life
              insurance needs, we can help with that too — through a licensed
              agent conversation.
            </span>
          </div>
        </div>

        <div>
          <img
            src="/images/business-owner.jpg"
            alt="Business owner reviewing healthcare access options"
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
              { stat: "$59.99", label: "Starting per month" },
              { stat: "7", label: "Members per plan" },
              { stat: "50+", label: "States covered" },
              { stat: "4", label: "Membership levels" },
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
