import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function InsightsPage() {
  return (
    <main
      style={{
        background: "#071426",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <SEO
        title="Healthcare Insights & Resources | RuKonnected"
        description="Trusted healthcare insights for Virginia families, individuals, veterans, business owners and communities. Understand Medicaid changes, telehealth, mental health, prescription costs and healthcare access."
        path="/insights"
      />

      <section style={{ padding: "120px 24px 90px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          
          {/* PAGE INTRO */}
          <p
            style={{
              color: "#93c5fd",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            RuKonnected Insights
          </p>

          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 72px)",
              lineHeight: 0.98,
              fontWeight: 950,
              maxWidth: "1000px",
              marginBottom: "28px",
            }}
          >
            Healthcare Information That Helps You Understand What Comes Next.
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "820px",
            }}
          >
            Healthcare can be complicated. RuKonnected Insights breaks down
            important healthcare news, changes and options into practical
            information for individuals, families, veterans and business owners.
          </p>

          {/* FEATURED ARTICLE */}
          <div
            style={{
              marginTop: "55px",
              background: "#ffffff",
              borderRadius: "26px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              boxShadow: "0 25px 70px rgba(0,0,0,.22)",
            }}
          >
            <div
              style={{
                minHeight: "360px",
                backgroundImage:
                  "url('/images/virginia-medicaid-changes-2027.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div
              style={{
                padding: "45px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#0b73b8",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Featured • Virginia Healthcare Update
              </p>

              <h2
                style={{
                  color: "#082b50",
                  fontSize: "clamp(30px, 4vw, 43px)",
                  lineHeight: 1.08,
                  fontWeight: 950,
                  margin: "8px 0 18px",
                }}
              >
                Virginia Medicaid Changes: What Families Need to Know for 2027
              </h2>

              <p
                style={{
                  color: "#475569",
                  fontSize: "17px",
                  lineHeight: 1.7,
                  marginBottom: "25px",
                }}
              >
                New federal requirements are coming. Learn who may be affected,
                what counts as qualifying activity, important exemptions,
                six-month renewals and what Virginia Medicaid members can do now.
              </p>

              <Link
                to="/insights/virginia-medicaid-changes-2027"
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  background: "#0b73b8",
                  color: "#fff",
                  padding: "15px 23px",
                  borderRadius: "10px",
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                Read the Full Guide →
              </Link>
            </div>
          </div>

          {/* MORE INSIGHTS */}
          <div style={{ marginTop: "75px" }}>
            <p
              style={{
                color: "#93c5fd",
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              More Insights
            </p>

            <h2
              style={{
                fontSize: "38px",
                fontWeight: 950,
                marginTop: "8px",
                marginBottom: "30px",
              }}
            >
              Explore Healthcare Topics
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "22px",
              }}
            >
              {/* TELEHEALTH */}
              <Link
                to="/insights/why-telehealth-is-growing-hampton-roads"
                style={{
                  background: "#0b1f36",
                  border: "1px solid rgba(147,197,253,0.20)",
                  borderRadius: "22px",
                  padding: "28px",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <p style={{ color: "#93c5fd", fontWeight: 800 }}>
                  Telehealth
                </p>

                <h3 style={{ fontSize: "25px", fontWeight: 950 }}>
                  Why More Hampton Roads Families Are Exploring Telehealth in
                  2026
                </h3>

                <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                  Rising healthcare costs, wait times and changing family needs
                  are making virtual care more important.
                </p>

                <p style={{ color: "#93c5fd", fontWeight: 900 }}>
                  Read Article →
                </p>
              </Link>

              {/* VETERAN MENTAL HEALTH */}
              <Link
                to="/insights/veteran-mental-health-support-hampton-roads"
                style={{
                  background: "#0b1f36",
                  border: "1px solid rgba(147,197,253,0.20)",
                  borderRadius: "22px",
                  padding: "28px",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <p style={{ color: "#93c5fd", fontWeight: 800 }}>
                  Veterans &amp; Mental Health
                </p>

                <h3 style={{ fontSize: "25px", fontWeight: 950 }}>
                  Veteran Mental Health Support in Hampton Roads
                </h3>

                <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                  Veterans, military families, spouses and caregivers often
                  carry unique emotional pressure. Access to support matters.
                </p>

                <p style={{ color: "#93c5fd", fontWeight: 900 }}>
                  Read Article →
                </p>
              </Link>

              {/* VETERANS TELEHEALTH */}
              <Link
                to="/insights/telehealth-for-veterans-hampton-roads"
                style={{
                  background: "#0b1f36",
                  border: "1px solid rgba(147,197,253,0.20)",
                  borderRadius: "22px",
                  padding: "28px",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <p style={{ color: "#93c5fd", fontWeight: 800 }}>
                  Veterans &amp; Telehealth
                </p>

                <h3 style={{ fontSize: "25px", fontWeight: 950 }}>
                  Telehealth for Veterans in Hampton Roads
                </h3>

                <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                  Learn what telehealth may help treat, what requires urgent or
                  emergency care and how veterans and military families can
                  think about healthcare access.
                </p>

                <p style={{ color: "#93c5fd", fontWeight: 900 }}>
                  Read Article →
                </p>
              </Link>
            </div>
          </div>

          {/* INSIGHTS PURPOSE */}
          <div
            style={{
              marginTop: "75px",
              padding: "38px",
              background: "#0b1f36",
              border: "1px solid rgba(147,197,253,.18)",
              borderRadius: "22px",
            }}
          >
            <p
              style={{
                color: "#93c5fd",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: ".1em",
              }}
            >
              Why RuKonnected Insights?
            </p>

            <h2
              style={{
                fontSize: "32px",
                fontWeight: 950,
                margin: "10px 0 15px",
              }}
            >
              Healthcare information shouldn't require a medical dictionary.
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "17px",
                lineHeight: 1.75,
                maxWidth: "850px",
                marginBottom: 0,
              }}
            >
              Our goal is simple: take important healthcare topics and explain
              them in language people can actually use. When a topic involves
              government programs, eligibility or changing regulations, we
              point readers toward official sources for individual guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}