import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function InsightsPage() {
  return (
    <main style={{ background: "#071426", color: "#fff", minHeight: "100vh" }}>
      <SEO
        title="Healthcare Access Insights | KonnectMD"
        description="Articles and insights about telehealth, mental health support, prescription savings, and healthcare access for Hampton Roads and nationwide."
        path="/insights"
      />

      <section style={{ padding: "120px 24px 80px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p style={{ color: "#93c5fd", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            KonnectMD Insights
          </p>

          <h1 style={{ fontSize: "clamp(44px, 7vw, 72px)", lineHeight: 0.95, fontWeight: 950 }}>
            Healthcare access education for real families, workers, and business owners.
          </h1>

          <p style={{ color: "#cbd5e1", fontSize: "18px", lineHeight: 1.7, maxWidth: "820px" }}>
            Learn about telehealth, mental health support, prescription savings, and healthcare access options serving Hampton Roads locally and people nationwide.
          </p>

          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "22px" }}>
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
              <p style={{ color: "#93c5fd", fontWeight: 800 }}>Telehealth</p>
              <h2 style={{ fontSize: "26px", fontWeight: 950 }}>
                Why More Hampton Roads Families Are Exploring Telehealth in 2026
              </h2>
              <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                Rising healthcare costs, wait times, and changing family needs are making virtual care more important.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}