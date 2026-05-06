import React from "react";

const EVENT_URL =
  "https://www.eventbrite.com/e/the-answer-to-rising-healthcare-costs-tickets-1988397603759?aff=oddtdtcreator";

export default function LaunchPage() {
  return (
    <main style={{ background: "#020617", color: "white", overflow: "hidden" }}>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }

        .launch-hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 110px 24px 70px;
          position: relative;
          z-index: 2;
        }

        .launch-title {
          font-size: clamp(42px, 6vw, 82px);
          line-height: 1.02;
          font-weight: 900;
          letter-spacing: -2px;
          margin: 0;
        }

        .launch-image {
          width: 100%;
          max-width: 650px;
          animation: float 6s ease-in-out infinite;
          filter: drop-shadow(0 0 60px rgba(34, 211, 238, 0.45));
        }

        .launch-btn {
          display: inline-block;
          background: #22d3ee;
          color: #020617;
          padding: 18px 28px;
          border-radius: 18px;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 20px 60px rgba(34, 211, 238, 0.3);
        }

        .launch-btn:hover {
          background: white;
          transform: scale(1.04);
        }

        .launch-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .launch-card {
          background: #f8fafc;
          color: #020617;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .mobile-sticky {
          display: none;
        }

        @media (max-width: 900px) {
          .launch-hero {
            grid-template-columns: 1fr;
            padding-top: 80px;
            text-align: center;
          }

          .launch-tags,
          .launch-actions {
            justify-content: center;
          }

          .launch-grid {
            grid-template-columns: 1fr;
          }

          .mobile-sticky {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            padding: 14px;
            background: rgba(2, 6, 23, 0.85);
            backdrop-filter: blur(10px);
          }
        }
      `}</style>

      <div
        style={{
          background: "linear-gradient(90deg,#06b6d4,#2563eb)",
          textAlign: "center",
          padding: "12px 16px",
          fontWeight: 900,
        }}
      >
        ⚡ LIVE MAY 21ST @ 8PM EST • LIMITED REGISTRATION • FREE ONLINE EVENT
      </div>

      <section style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(6,182,212,.35), transparent 35%), radial-gradient(circle at bottom left, rgba(37,99,235,.35), transparent 35%)",
          }}
        />

        <div className="launch-hero">
          <div>
            <div
              style={{
                display: "inline-block",
                border: "1px solid rgba(34,211,238,.35)",
                background: "rgba(34,211,238,.12)",
                color: "#a5f3fc",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: 900,
                marginBottom: 24,
              }}
            >
              🚀 LIVE ONLINE EVENT • MAY 21ST • 8PM EST
            </div>

            <h1 className="launch-title">
              Healthcare Costs
              <span style={{ display: "block" }}>Keep Going Up.</span>
              <span style={{ display: "block", color: "#67e8f9" }}>
                Hampton Roads Needs Options.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "#cbd5e1",
                lineHeight: 1.6,
                marginTop: 24,
                maxWidth: 650,
              }}
            >
              Join the KonnectMD launch and discover how families,
              entrepreneurs, and agents are accessing healthcare support without
              waiting on open enrollment.
            </p>

            <div
              className="launch-tags"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 26,
              }}
            >
              {["Telehealth", "Mental Health", "Rx Savings", "Family Coverage"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      border: "1px solid rgba(103,232,249,.25)",
                      background: "rgba(34,211,238,.12)",
                      color: "#cffafe",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      fontWeight: 700,
                    }}
                  >
                    ✔ {tag}
                  </span>
                )
              )}
            </div>

            <div
              style={{
                marginTop: 30,
                border: "1px solid rgba(250,204,21,.25)",
                background: "rgba(250,204,21,.10)",
                color: "#fef08a",
                padding: 20,
                borderRadius: 24,
                maxWidth: 650,
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              ⚠️ Most people don’t realize there are healthcare alternatives
              available until costs become overwhelming.
            </div>

            <div
              className="launch-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                marginTop: 34,
              }}
            >
              <a className="launch-btn" href={EVENT_URL} target="_blank" rel="noreferrer">
                🚀 Register for the May 21st Launch
              </a>

              <a
                href="#details"
                style={{
                  display: "inline-block",
                  color: "white",
                  padding: "18px 28px",
                  borderRadius: 18,
                  fontWeight: 800,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "rgba(255,255,255,.06)",
                }}
              >
                Learn More
              </a>
            </div>

            <p style={{ marginTop: 18, color: "#94a3b8" }}>
              Free registration • Live Zoom event • May 21st at 8PM
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/images/launch-hero.png"
              alt="KonnectMD Launch"
              className="launch-image"
            />
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#0f172a",
          borderTop: "1px solid rgba(255,255,255,.1)",
          borderBottom: "1px solid rgba(255,255,255,.1)",
          padding: "34px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#94a3b8",
            letterSpacing: "4px",
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          HEALTHCARE • MENTAL HEALTH • TELEHEALTH • BUSINESS SOLUTIONS
        </p>

        <h3 style={{ fontSize: 24, marginTop: 18 }}>
          24/7 ACCESS • NATIONWIDE • NO OPEN ENROLLMENT • FAMILY OPTIONS
        </h3>
      </section>

      <section id="details" style={{ background: "white", color: "#020617", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.05, margin: 0 }}>
            One Launch.
            <span style={{ display: "block", color: "#0891b2" }}>
              Multiple Ways to Get Connected.
            </span>
          </h2>

          <p style={{ color: "#475569", fontSize: 19, maxWidth: 760, margin: "18px auto 0" }}>
            This event is for families, entrepreneurs, business owners, and agents
            looking for healthcare access, savings, and new opportunities in a changing market.
          </p>

          <div className="launch-grid">
            {[
              "24/7 Virtual Urgent Care",
              "Mental Health Counseling",
              "Prescription Savings",
              "Dental, Vision & Chiropractic",
              "Family Memberships Up to 7",
              "Agent & Partner Income Opportunity",
            ].map((item) => (
              <div className="launch-card" key={item}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✅</div>
                <h3 style={{ margin: 0, fontSize: 22 }}>{item}</h3>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 60,
              background: "#020617",
              color: "white",
              borderRadius: 32,
              padding: "50px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <p style={{ color: "#67e8f9", fontWeight: 900, letterSpacing: 1 }}>
              FEATURING DR. CASUAL PITTS
            </p>

            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05, margin: "12px 0" }}>
              Don’t Wait Until Healthcare
              <span style={{ display: "block", color: "#67e8f9" }}>
                Gets More Expensive.
              </span>
            </h2>

            <p style={{ color: "#cbd5e1", fontSize: 19, maxWidth: 720, margin: "20px auto" }}>
              Join us LIVE on May 21st at 8PM and discover how KonnectMD is helping
              families, business owners, and agents access healthcare support in a new way.
            </p>

            <a className="launch-btn" href={EVENT_URL} target="_blank" rel="noreferrer">
              🚀 Reserve My Free Spot Now
            </a>

            <p style={{ marginTop: 18, color: "#94a3b8" }}>
              Free registration • Live Zoom event • May 21st at 8PM
            </p>
          </div>
        </div>
      </section>

      <div className="mobile-sticky">
        <a className="launch-btn" href={EVENT_URL} target="_blank" rel="noreferrer" style={{ width: "100%", textAlign: "center" }}>
          🚀 Register Free Now
        </a>
      </div>
    </main>
  );
}