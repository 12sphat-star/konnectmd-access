import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const styles = {
  page: {
    background: "#071426",
    color: "#ffffff",
    fontFamily: "Inter, Arial, sans-serif",
  },
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
  },
  hero: {
    padding: "120px 24px 84px",
    background:
      "radial-gradient(circle at top right, rgba(59,130,246,0.30), transparent 34%), linear-gradient(135deg, #071426 0%, #08182d 60%, #0b1f36 100%)",
  },
  section: {
    padding: "84px 24px",
  },
  altSection: {
    padding: "84px 24px",
    background: "#08182d",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "42px",
    alignItems: "center",
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "18px",
  },
  eyebrow: {
    color: "#93c5fd",
    fontWeight: "900",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontSize: "12px",
    marginBottom: "14px",
  },
  h1: {
    fontSize: "clamp(44px, 7vw, 74px)",
    lineHeight: "0.92",
    fontWeight: "950",
    letterSpacing: "-0.05em",
    margin: "0 0 22px",
  },
  h2: {
    fontSize: "clamp(32px, 5vw, 52px)",
    lineHeight: "1",
    fontWeight: "950",
    letterSpacing: "-0.04em",
    margin: "0 0 20px",
  },
  h3: {
    fontSize: "20px",
    fontWeight: "950",
    margin: "0 0 10px",
  },
  p: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#cbd5e1",
    margin: "0 0 18px",
  },
  blue: {
    color: "#60a5fa",
  },
  buttonRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "26px",
  },
  primaryButton: {
    background: "#3b82f6",
    color: "#ffffff",
    padding: "15px 22px",
    borderRadius: "14px",
    fontWeight: "950",
    textDecoration: "none",
    display: "inline-block",
    boxShadow: "0 16px 34px rgba(59,130,246,0.28)",
  },
  secondaryButton: {
    background: "#0b1f36",
    border: "1px solid rgba(147,197,253,0.28)",
    color: "#ffffff",
    padding: "15px 22px",
    borderRadius: "14px",
    fontWeight: "900",
    textDecoration: "none",
    display: "inline-block",
  },
  card: {
    background: "#0b1f36",
    border: "1px solid rgba(147,197,253,0.20)",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
  },
  bigCard: {
    background:
      "linear-gradient(145deg, rgba(11,31,54,0.98), rgba(7,20,38,0.98))",
    border: "1px solid rgba(147,197,253,0.22)",
    borderRadius: "28px",
    padding: "32px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.36)",
  },
  icon: {
    width: "42px",
    height: "42px",
    borderRadius: "14px",
    background: "rgba(59,130,246,0.18)",
    color: "#93c5fd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "950",
    marginBottom: "14px",
  },
  faq: {
    background: "#0b1f36",
    border: "1px solid rgba(147,197,253,0.18)",
    borderRadius: "18px",
    padding: "22px",
    marginBottom: "14px",
  },
  cta: {
    padding: "90px 24px",
    textAlign: "center",
    background:
      "radial-gradient(circle at top, rgba(59,130,246,0.36), transparent 35%), #08182d",
  },
};

export default function ChesapeakeTelehealthPage() {
  return (
    <main style={styles.page}>
    <SEO
  title="Telehealth Doctor in Chesapeake, VA | KonnectMD Healthcare Access"
  description="KonnectMD helps Chesapeake residents explore telehealth doctors, virtual urgent care, prescription savings, mental health support, and healthcare access options."
  path="/chesapeake-telehealth"
/>

      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.grid2}>
            <div>
              <p style={styles.eyebrow}>Chesapeake Telehealth Access</p>

              <h1 style={styles.h1}>
                Virtual Healthcare Access for{" "}
                <span style={styles.blue}>Chesapeake Residents</span>
              </h1>

              <p style={styles.p}>
                KonnectMD helps Chesapeake families, entrepreneurs, and
                professionals explore telehealth access, prescription savings,
                mental health support, and healthcare membership options designed
                around real-life needs.
              </p>

              <div style={styles.buttonRow}>
                <Link to="/contact" style={styles.primaryButton}>
                  Get Healthcare Access Details
                </Link>

                <Link to="/plans" style={styles.secondaryButton}>
                  View Plan Options
                </Link>
              </div>

              <p style={{ ...styles.p, fontSize: "13px", marginTop: "18px" }}>
                Not insurance. A healthcare access and savings membership.
              </p>
            </div>

            <div style={styles.bigCard}>
              <p style={styles.eyebrow}>Healthcare Access in Chesapeake</p>

              <h2 style={{ ...styles.h2, fontSize: "34px" }}>
                Healthcare should be easier to access and easier to understand.
              </h2>

              <p style={styles.p}>
              From Greenbrier to Great Bridge, Western Branch, Deep Creek, Hickory, and South Norfolk — 
              Chesapeake residents are looking for healthcare options that fit modern life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.altSection}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Common Searches</p>

          <h2 style={styles.h2}>
            What Chesapeake residents are searching for.
          </h2>

          <div style={styles.grid3}>
            {[
             [
  "Telehealth doctor Chesapeake",
  "Virtual urgent care Chesapeake",
  "Doctor without insurance Chesapeake",
  "Affordable healthcare Chesapeake",
  "Prescription savings Chesapeake",
  "Mental health support Chesapeake",
]
            ].map((item) => (
              <div key={item} style={styles.card}>
                <div style={styles.icon}>✓</div>
                <h3 style={styles.h3}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>How KonnectMD Helps</p>

          <h2 style={styles.h2}>
            Healthcare access designed for modern families and professionals.
          </h2>

          <div style={styles.grid3}>
            {[
              [
                "Virtual Urgent Care",
                "Access care for common everyday health concerns without long waiting room delays.",
              ],
              [
                "Mental Health Support",
                "Support for stress, anxiety, burnout, and emotional wellness.",
              ],
              [
                "Prescription Savings",
                "Help lower medication costs where discounts are available.",
              ],
              [
                "Family-Friendly Options",
                "Membership options may support multiple household members.",
              ],
              [
                "Useful for Entrepreneurs",
                "Helpful for self-employed professionals and small business owners.",
              ],
              [
                "Healthcare Access Without Confusion",
                "A simpler healthcare access conversation for people exploring alternatives.",
              ],
            ].map(([title, text]) => (
              <div key={title} style={styles.card}>
                <div style={styles.icon}>✓</div>
                <h3 style={styles.h3}>{title}</h3>
                <p style={styles.p}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.altSection}>
        <div style={{ ...styles.container, maxWidth: "920px" }}>
          <p style={styles.eyebrow}>Questions Chesapeake Residents Ask</p>

          <h2 style={styles.h2}>
            Common telehealth and healthcare access questions.
          </h2>

          {[
            [
              "Can I use KonnectMD in Chesapeake?",
              "Yes. KonnectMD can help Chesapeake residents explore healthcare access, telehealth, prescription savings, and wellness support.",
            ],
            [
              "Is KonnectMD traditional insurance?",
              "No. KonnectMD is a healthcare access and savings membership, not traditional health insurance.",
            ],
            [
              "Can entrepreneurs use KonnectMD?",
              "Yes. Many entrepreneurs, 1099 workers, and self-employed professionals explore KonnectMD as a healthcare access option.",
            ],
            [
              "Can this help families?",
              "Depending on the membership selected, options may support multiple household members.",
            ],
          ].map(([q, a]) => (
            <div key={q} style={styles.faq}>
              <h3 style={styles.h3}>{q}</h3>
              <p style={styles.p}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.cta}>
        <div style={{ ...styles.container, maxWidth: "820px" }}>
          <p style={styles.eyebrow}>Chesapeake Healthcare Access</p>

          <h2 style={styles.h2}>
            Explore whether KonnectMD may fit your healthcare access needs.
          </h2>

          <p style={styles.p}>
            Learn more about telehealth access, healthcare membership options,
            prescription savings, and support services available through KonnectMD.
          </p>

          <Link to="/contact" style={styles.primaryButton}>
            Contact Us for Details
          </Link>
        </div>
      </section>
    </main>
  );
}