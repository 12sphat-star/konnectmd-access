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

export default function MentalHealthSupportHamptonRoadsPage() {
  const topics = [
    ["Stress & Burnout", "Support for people carrying work, family, money, and life pressure."],
    ["Anxiety Support", "Access options for people dealing with worry, overwhelm, and emotional stress."],
    ["Family Wellness", "Mental health support can help families manage pressure before it becomes crisis."],
    ["Entrepreneur Pressure", "Business owners often carry silent stress while trying to keep everything moving."],
    ["Private Virtual Access", "Virtual support may make it easier to start the conversation from home."],
    ["Healthcare Access", "KonnectMD helps members explore mental health support as part of a broader access model."],
  ];

  const cities = [
    "Norfolk",
    "Virginia Beach",
    "Chesapeake",
    "Portsmouth",
    "Hampton",
    "Newport News",
    "Suffolk",
  ];

  const faqs = [
    [
      "Does KonnectMD include mental health support?",
      "Depending on the membership level, KonnectMD may include access to mental health counseling and emotional wellness support services.",
    ],
    [
      "Can I access mental health support virtually in Hampton Roads?",
      "Yes. KonnectMD helps Hampton Roads residents explore virtual healthcare access options, including mental health and emotional wellness support where included by membership.",
    ],
    [
      "Is KonnectMD health insurance?",
      "No. KonnectMD is a healthcare access and savings membership, not traditional health insurance.",
    ],
    [
      "Who can benefit from mental health support?",
      "Families, entrepreneurs, self-employed professionals, caregivers, employees, students, and anyone carrying stress, anxiety, burnout, or emotional pressure may benefit from support.",
    ],
    [
      "Is this only for emergencies?",
      "No. If you are experiencing an emergency or may harm yourself or others, call 911 or 988 immediately. KonnectMD mental health support is for non-emergency emotional wellness and counseling access.",
    ],
  ];

  return (
    <main style={styles.page}>
      <SEO
        title="Mental Health Support in Hampton Roads | KonnectMD"
        description="KonnectMD helps Hampton Roads residents, families, entrepreneurs, and small business owners explore mental health support, virtual care, emotional wellness resources, and healthcare access options."
        path="/mental-health-support-hampton-roads"
      />

      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.grid2}>
            <div>
              <p style={styles.eyebrow}>Mental Health Support in Hampton Roads</p>

              <h1 style={styles.h1}>
                Your health is not just physical.{" "}
                <span style={styles.blue}>Your peace matters too.</span>
              </h1>

              <p style={styles.p}>
                Stress, anxiety, burnout, and emotional pressure are becoming part
                of everyday life for many families, workers, entrepreneurs, and
                small business owners across Hampton Roads. KonnectMD helps members
                explore healthcare access that may include mental health support,
                virtual care, and wellness resources.
              </p>

              <div style={styles.buttonRow}>
                <Link to="/contact" style={styles.primaryButton}>
                  Get Mental Health Access Details
                </Link>

                <Link to="/plans" style={styles.secondaryButton}>
                  View Membership Options
                </Link>
              </div>

              <p style={{ ...styles.p, fontSize: "13px", marginTop: "18px" }}>
                Not insurance. Not emergency care. A healthcare access and savings membership.
              </p>
            </div>

            <div style={styles.bigCard}>
              <p style={styles.eyebrow}>Why This Matters</p>

              <h2 style={{ ...styles.h2, fontSize: "34px" }}>
                More people are smiling in public while struggling in private.
              </h2>

              <p style={styles.p}>
                Hampton Roads families are dealing with rising costs, long wait times,
                work pressure, family responsibilities, and daily stress. Access to
                mental health support should be easier to understand and easier to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.altSection}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Common Searches</p>

          <h2 style={styles.h2}>
            What Hampton Roads residents are searching for.
          </h2>

          <div style={styles.grid3}>
            {[
              "Mental health support Hampton Roads",
              "Virtual counseling Hampton Roads",
              "Anxiety support Hampton Roads",
              "Stress and burnout support",
              "Mental health support without insurance",
              "Healthcare access with mental health support",
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
          <p style={styles.eyebrow}>Who This Helps</p>

          <h2 style={styles.h2}>
            Mental health support for real people carrying real pressure.
          </h2>

          <p style={{ ...styles.p, maxWidth: "850px", marginBottom: "34px" }}>
            Mental health support is not just for crisis moments. It can be a practical
            resource for people dealing with stress, anxiety, burnout, grief, overwhelm,
            relationship pressure, work pressure, financial pressure, or the emotional
            weight of supporting others.
          </p>

          <div style={styles.grid3}>
            {topics.map(([title, text]) => (
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
        <div style={styles.container}>
          <div style={styles.bigCard}>
            <div style={styles.grid2}>
              <div>
                <p style={styles.eyebrow}>Hampton Roads Coverage</p>

                <h2 style={styles.h2}>
                  Local awareness. Virtual access. Broader healthcare support.
                </h2>

                <p style={styles.p}>
                  From Norfolk to Virginia Beach, Chesapeake, Portsmouth, Hampton,
                  Newport News, and Suffolk, people are looking for healthcare options
                  that support the whole person — not just urgent care visits.
                </p>

                <p style={styles.p}>
                  KonnectMD helps position mental health support as part of a broader
                  healthcare access conversation for Hampton Roads families, entrepreneurs,
                  and small business owners.
                </p>
              </div>

              <div style={styles.grid3}>
                {cities.map((city) => (
                  <div key={city} style={styles.card}>
                    <h3 style={styles.h3}>{city}</h3>
                    <p style={styles.p}>Mental health and virtual care access awareness.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={{ ...styles.container, maxWidth: "920px" }}>
          <p style={styles.eyebrow}>Common Questions</p>

          <h2 style={styles.h2}>
            Mental health support questions people ask.
          </h2>

          {faqs.map(([q, a]) => (
            <div key={q} style={styles.faq}>
              <h3 style={styles.h3}>{q}</h3>
              <p style={styles.p}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.altSection}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Explore More</p>

          <h2 style={styles.h2}>More Hampton Roads healthcare access pages.</h2>

          <div style={styles.grid3}>
            {[
              ["/norfolk-telehealth", "Telehealth Doctor in Norfolk"],
              ["/virginia-beach-telehealth", "Telehealth Doctor in Virginia Beach"],
              ["/chesapeake-telehealth", "Telehealth Doctor in Chesapeake"],
              ["/business-owners-entrepreneurs-healthcare-hampton-roads", "Business Owners & Entrepreneurs"],
              ["/prescription-savings-hampton-roads", "Prescription Savings"],
              ["/family-healthcare-membership-hampton-roads", "Family Healthcare Membership"],
            ].map(([url, label]) => (
              <Link
                key={url}
                to={url}
                style={{
                  ...styles.card,
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <h3 style={styles.h3}>{label}</h3>
                <p style={styles.p}>Explore this Hampton Roads healthcare access topic.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <div style={{ ...styles.container, maxWidth: "820px" }}>
          <p style={styles.eyebrow}>Take the Next Step</p>

          <h2 style={styles.h2}>
            Mental health support starts with access and awareness.
          </h2>

          <p style={styles.p}>
            Learn how KonnectMD may help you, your family, or your business explore
            healthcare access that includes emotional wellness and support resources.
          </p>

          <Link to="/contact" style={styles.primaryButton}>
            Contact Us for Details
          </Link>
        </div>
      </section>
    </main>
  );
}