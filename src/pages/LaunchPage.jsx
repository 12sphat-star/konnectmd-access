import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function LaunchPage() {
  return (
    <main style={{ background: "#020617", color: "white", overflow: "hidden" }}>
      <SEO
        title="Nationwide Healthcare Access | KonnectMD Access"
        description="KonnectMD Access helps individuals, families, entrepreneurs, and small business owners explore telehealth, mental health support, prescription savings, family healthcare options, and wellness services nationwide."
        path="/launch"
      />

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
            padding: 55px 18px 40px;
            text-align: center;
            gap: 28px;
            min-height: auto;
          }

          .launch-title {
            font-size: 38px;
            line-height: 1.05;
            letter-spacing: -1px;
          }

          .launch-hero p {
            font-size: 17px !important;
            line-height: 1.45 !important;
          }

          .launch-tags,
          .launch-actions {
            justify-content: center;
          }

          .launch-actions {
            flex-direction: column;
          }

          .launch-btn {
            width: 100%;
            box-sizing: border-box;
            text-align: center;
          }

          .launch-image {
            max-width: 360px;
            margin-top: -10px;
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
            padding: 12px;
            background: rgba(2, 6, 23, 0.88);
            backdrop-filter: blur(10px);
          }

          main {
            padding-bottom: 82px;
          }
        }
      `}</style>

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
              Nationwide Healthcare Access • Hampton Roads Presence
            </div>

            <h1 className="launch-title">
              Healthcare Costs
              <span style={{ display: "block" }}>Keep Going Up.</span>
              <span style={{ display: "block", color: "#67e8f9" }}>
                Families Need Better Access.
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
              KonnectMD Access helps individuals, families, entrepreneurs, and
              small business owners explore healthcare access options including
              telehealth, mental health support, prescription savings, family
              membership options, and wellness services.
            </p>

            <p
              style={{
                color: "#93c5fd",
                fontWeight: 800,
                fontSize: 18,
                marginTop: 16,
              }}
            >
              Available nationwide throughout the United States and U.S. territories.
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
              {[
                "Telehealth",
                "Mental Health Support",
                "Prescription Savings",
                "Family Options",
                "Small Business Friendly",
                "Nationwide Access",
              ].map((tag) => (
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
              ))}
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
              Many families are looking for healthcare access that is easier to
              use, easier to understand, and available when they need it.
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
              <a
                className="launch-btn"
                href="https://konnectmdnow.com/"
                target="_blank"
                rel="noreferrer"
              >
                Explore Membership Options
              </a>

              <Link
                to="/book-call"
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
                Book a 30-Minute Call
              </Link>
            </div>

            <p style={{ marginTop: 18, color: "#94a3b8" }}>
              Not health insurance • Healthcare access membership • Nationwide availability
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/images/launch-hero.png"
              alt="KonnectMD healthcare access"
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
          TELEHEALTH • MENTAL HEALTH • PRESCRIPTION SAVINGS • FAMILY OPTIONS
        </p>

        <h3 style={{ fontSize: 24, marginTop: 18 }}>
          24/7 ACCESS • NATIONWIDE • NO OPEN ENROLLMENT • HOUSEHOLD OPTIONS
        </h3>
      </section>

      <section
        id="details"
        style={{ background: "white", color: "#020617", padding: "80px 24px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.05, margin: 0 }}>
            One Membership.
            <span style={{ display: "block", color: "#0891b2" }}>
              Multiple Ways To Access Care.
            </span>
          </h2>

          <p
            style={{
              color: "#475569",
              fontSize: 19,
              maxWidth: 760,
              margin: "18px auto 0",
            }}
          >
            KonnectMD Access is designed for families, entrepreneurs, business owners,
            self-employed professionals, and households looking for healthcare access,
            savings, and wellness support in a changing market.
          </p>

          <div className="launch-grid">
            {[
              "24/7 Virtual Urgent Care",
              "Mental Health Support",
              "Prescription Savings",
              "Dental, Vision & Chiropractic Savings",
              "Family Membership Options",
              "Small Business Friendly",
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
              HEALTHCARE ACCESS DESIGNED FOR MODERN LIFE
            </p>

            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.05,
                margin: "12px 0",
              }}
            >
              Don’t Wait Until Healthcare
              <span style={{ display: "block", color: "#67e8f9" }}>
                Gets More Expensive.
              </span>
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: 19,
                maxWidth: 720,
                margin: "20px auto",
              }}
            >
              Explore how KonnectMD Access may help you, your family, or your
              business access healthcare support in a more practical way.
            </p>

            <a
              className="launch-btn"
              href="https://konnectmdnow.com/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Membership Options
            </a>

            <p style={{ marginTop: 18, color: "#94a3b8" }}>
              Available nationwide throughout the United States and U.S. territories.
            </p>
          </div>
        </div>
      </section>

      <div className="mobile-sticky">
        <a
          className="launch-btn"
          href="https://konnectmdnow.com/"
          target="_blank"
          rel="noreferrer"
          style={{ width: "100%", textAlign: "center" }}
        >
          Explore Membership Options
        </a>
      </div>
    </main>
  );
}