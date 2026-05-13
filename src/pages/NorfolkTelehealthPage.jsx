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

export default function NorfolkTelehealthPage() {
  const benefits = [
    [
      "Virtual Urgent Care",
      "Access care for common non-emergency health concerns without sitting in a waiting room.",
    ],
    [
      "Doctor Access Without Traditional Insurance Confusion",
      "KonnectMD is not insurance. It is a healthcare access and savings membership.",
    ],
    [
      "Support for Families",
      "Membership options may support multiple household members depending on the plan.",
    ],
    [
      "Prescription Savings",
      "Members may be able to reduce medication costs where savings are available.",
    ],
    [
      "Mental Health Support",
      "Access support for stress, anxiety, burnout, and emotional wellness.",
    ],
    [
      "Useful for Business Owners",
      "Helpful for self-employed professionals, entrepreneurs, and small business owners in Norfolk.",
    ],
  ];

  const faqs = [
    [
      "Can I use KonnectMD for telehealth in Norfolk?",
      "Yes. KonnectMD can help Norfolk residents explore virtual care access, prescription savings, mental health support, and healthcare membership options.",
    ],
    [
      "Is KonnectMD health insurance?",
      "No. KonnectMD is not traditional health insurance. It is a healthcare access and savings membership.",
    ],
    [
      "Can I use telehealth if I do not have insurance?",
      "Yes. KonnectMD may be an option for people who want healthcare access outside the traditional insurance system.",
    ],
    [
      "Is this only for Norfolk?",
      "No. KonnectMD is available beyond Norfolk, but this page is focused on helping Norfolk residents understand the option locally.",
    ],
  ];

  return (
    <main style={styles.page}>
      <SEO
        title="Telehealth Doctor in Norfolk, VA | KonnectMD Healthcare Access"
        description="KonnectMD helps Norfolk residents explore telehealth doctors, virtual urgent care, prescription savings, mental health support, and healthcare access options without traditional insurance confusion."
        path="/norfolk-telehealth"
      />

      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.grid2}>
            <div>
              <p style={styles.eyebrow}>Norfolk Telehealth Access</p>

              <h1 style={styles.h1}>
                Telehealth Doctors for{" "}
                <span style={styles.blue}>Norfolk Residents</span>
              </h1>

              <p style={styles.p}>
                Norfolk families, entrepreneurs, and small business owners need
                healthcare access that is easier to understand and easier to use.
                KonnectMD helps members explore virtual care, prescription savings,
                mental health support, and family-friendly healthcare access options.
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
                Not insurance. Not an MLM. A healthcare access and savings membership.
              </p>
            </div>

            <div style={styles.bigCard}>
              <p style={styles.eyebrow}>Built for Real Life</p>
              <h2 style={{ ...styles.h2, fontSize: "34px" }}>
                When you need care access without the waiting-room headache.
              </h2>
              <p style={styles.p}>
                From Ocean View to Downtown Norfolk, Ghent, Norview, and Military
                Circle, healthcare access should not feel impossible. KonnectMD gives
                Norfolk residents another way to start the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.altSection}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Why Norfolk Residents Search for This</p>
          <h2 style={styles.h2}>
            Healthcare costs are rising. People are looking for practical options.
          </h2>

          <div style={styles.grid3}>
            {[
              "Doctor without insurance in Norfolk",
              "Telehealth doctor Norfolk VA",
              "Virtual urgent care Norfolk",
              "Affordable healthcare Norfolk",
              "Prescription savings Norfolk",
              "Mental health support Norfolk",
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
          <h2 style={styles.h2}>Healthcare access designed around everyday life.</h2>

          <div style={styles.grid3}>
            {benefits.map(([title, text]) => (
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
          <p style={styles.eyebrow}>Common Questions</p>
          <h2 style={styles.h2}>Norfolk telehealth questions people ask.</h2>

          {faqs.map(([q, a]) => (
            <div key={q} style={styles.faq}>
              <h3 style={styles.h3}>{q}</h3>
              <p style={styles.p}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Explore More</p>
          <h2 style={styles.h2}>More Hampton Roads healthcare access pages.</h2>

          <div style={styles.grid3}>
            {[
              ["/mental-health-support-hampton-roads", "Mental Health Support"],
              ["/prescription-savings-hampton-roads", "Prescription Savings"],
              ["/family-healthcare-membership-hampton-roads", "Family Healthcare Membership"],
              ["/business-owners-entrepreneurs-healthcare-hampton-roads", "Business Owners & Entrepreneurs"],
              ["/healthcare-alternatives-hampton-roads", "Healthcare Alternatives"],
              ["/locations", "Hampton Roads Locations"],
            ].map(([url, label]) => (
              <Link
                key={url}
                to={url}
                style={{ ...styles.card, color: "#ffffff", textDecoration: "none" }}
              >
                <h3 style={styles.h3}>{label}</h3>
                <p style={styles.p}>Explore this healthcare access topic.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <div style={{ ...styles.container, maxWidth: "820px" }}>
          <p style={styles.eyebrow}>Norfolk Healthcare Access</p>
          <h2 style={styles.h2}>
            See if KonnectMD may fit your healthcare access needs.
          </h2>
          <p style={styles.p}>
            Get the details, ask questions, and learn how KonnectMD may help you,
            your family, or your business explore care access.
          </p>

          <Link to="/contact" style={styles.primaryButton}>
            Contact Us for Details
          </Link>
        </div>
      </section>
    </main>
  );
}