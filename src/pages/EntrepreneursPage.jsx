import SEO from "../components/SEO";
import React from "react";
import { Link } from "react-router-dom";

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
  pillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
    gap: "12px",
  },
  pill: {
    background: "rgba(59,130,246,0.12)",
    border: "1px solid rgba(147,197,253,0.22)",
    borderRadius: "14px",
    padding: "14px",
    fontWeight: "900",
    color: "#dbeafe",
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

export default function BusinessOwnersEntrepreneursPage() {
  const ownerTypes = [
    ["1099 Workers", "Contractors and independent professionals who need options outside employer benefits."],
    ["Small Business Owners", "Owners who want healthcare access for themselves, their household, or their team."],
    ["Entrepreneurs", "Builders, founders, side-hustlers, and startups looking for flexible access."],
    ["Commission-Based Professionals", "Salespeople, agents, brokers, and advisors whose income may fluctuate."],
  ];

  const painPoints = [
    ["You make too much for help, but not enough to waste money.", "Many entrepreneurs get squeezed between rising healthcare costs and unpredictable income."],
    ["Traditional plans can feel built for employees, not owners.", "Business owners need access that works around real-life schedules, families, and cash flow."],
    ["Waiting for open enrollment does not help when life happens now.", "Healthcare needs do not wait for a calendar window."],
  ];

  const benefits = [
    ["Virtual Urgent Care", "Get access to providers for common everyday health concerns."],
    ["Mental Health Support", "Support for stress, anxiety, burnout, and emotional wellness."],
    ["Prescription Savings", "Help reduce medication costs where discounts are available."],
    ["Family Options", "Plan options may support multiple household members."],
    ["Small Business Friendly", "Useful for owners, independent workers, and small teams."],
    ["Not Insurance", "A healthcare access and savings membership, not traditional health insurance."],
  ];

  const cities = [
    "Norfolk",
    "Virginia Beach",
    "Chesapeake",
    "Portsmouth",
    "Hampton",
    "Newport News",
    "Suffolk",
    "Hampton Roads",
  ];

  const faqs = [
    [
      "Is this for business owners who do not have employee benefits?",
      "Yes. This page is built for business owners, entrepreneurs, self-employed professionals, 1099 workers, and families looking for healthcare access options.",
    ],
    [
      "Is KonnectMD health insurance?",
      "No. KonnectMD is not traditional health insurance. It is a healthcare access and savings membership.",
    ],
    [
      "Can this help if I am self-employed?",
      "Yes. Self-employed professionals often need healthcare access that does not depend on an employer plan.",
    ],
    [
      "Can I use this for my family?",
      "Depending on the plan, household membership options may be available.",
    ],
  ];

  return (
    <main style={styles.page}>
       <SEO
  title="Healthcare for Business Owners & Entrepreneurs in Hampton Roads | KonnectMD"
  description="KonnectMD helps Hampton Roads business owners, entrepreneurs, self-employed professionals, and 1099 workers explore healthcare access, virtual care, prescription savings, mental health support, and family-friendly options."
  path="/business-owners-entrepreneurs-healthcare-hampton-roads"
/> 
      <section style={styles.hero}>
  <div style={styles.container}>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr .85fr",
        gap: "50px",
        alignItems: "center",
      }}
    >
      {/* LEFT SIDE */}
      <div>

        <p style={styles.eyebrow}>
          Healthcare Access for Business Owners
        </p>

        <h1 style={styles.h1}>
          You Built the Business.
          <br />
          <span style={styles.blue}>
            Now Protect the People Behind It.
          </span>
        </h1>

        <p
          style={{
            ...styles.p,
            fontSize: "18px",
            maxWidth: "620px",
          }}
        >
          If you're self-employed, running a business,
          building a side hustle, or working as a 1099
          professional, healthcare can feel expensive,
          confusing, and built for somebody else.

          KonnectMD gives Hampton Roads business owners
          another way to explore healthcare access,
          virtual care, prescription savings, and
          family-friendly support.
        </p>

        <div style={styles.buttonRow}>
          <Link
            to="/contact"
            style={styles.primaryButton}
          >
            Get Healthcare Access Details
          </Link>

          <Link
            to="/plans"
            style={styles.secondaryButton}
          >
            View Plan Options
          </Link>
        </div>

        <p
          style={{
            ...styles.p,
            fontSize: "13px",
            marginTop: "18px",
          }}
        >
          Not insurance. Not an MLM.
          A healthcare access and savings membership.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div>

        <img
          src="/images/business-owner-healthcare-hero.jpg"
          alt="Business owner reviewing healthcare options"
          style={{
            width: "100%",
            borderRadius: "24px",
            display: "block",
            boxShadow: "0 25px 60px rgba(0,0,0,.35)",
          }}
        />

      </div>

    </div>

  </div>
</section>

<section style={styles.altSection}>
  <div style={styles.container}>

    <div
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto 50px",
      }}
    >
      <p style={styles.eyebrow}>Who This Helps</p>

      <h2 style={styles.h2}>
        Built for the people carrying the responsibility.
      </h2>

      <p style={styles.p}>
        Whether you're building a business by yourself or leading a growing
        team, healthcare shouldn't be another obstacle to your success.
      </p>
    </div>

    <div style={styles.grid3}>
      {ownerTypes.map(([title, text]) => (
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
          <p style={styles.eyebrow}>The Business Owner Reality</p>
          <h2 style={styles.h2}>
            Entrepreneurs do not need more confusion. They need practical options.
          </h2>

          <div style={styles.grid3}>
            {painPoints.map(([title, text]) => (
              <div key={title} style={styles.card}>
                <div style={styles.icon}>!</div>
                <h3 style={styles.h3}>{title}</h3>
                <p style={styles.p}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid2}>
            <div>
              <p style={styles.eyebrow}>How KonnectMD Helps</p>
              <h2 style={styles.h2}>
                Healthcare access that works around business ownership.
              </h2>
              <p style={styles.p}>
                Business owners are used to solving problems. But healthcare should not require a
                full-time research project. KonnectMD helps connect members with virtual care,
                prescription savings, mental health support, and additional wellness resources in a
                way that is easier to understand.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.h3}>This may be a fit if you:</h3>
              <p style={styles.p}>✓ Do not have employer-provided benefits</p>
              <p style={styles.p}>✓ Want options outside traditional enrollment windows</p>
              <p style={styles.p}>✓ Need support for your household</p>
              <p style={styles.p}>✓ Want to reduce everyday healthcare friction</p>
              <p style={styles.p}>✓ Own a business in Hampton Roads</p>
            </div>
          </div>

          <div style={{ ...styles.grid3, marginTop: "34px" }}>
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
        <div style={styles.container}>
          <div style={styles.bigCard}>
            <div style={styles.grid2}>
              <div>
                <p style={styles.eyebrow}>Hampton Roads First</p>
                <h2 style={styles.h2}>
                  Local business owners need local awareness.
                </h2>
                <p style={styles.p}>
                  From contractors and barbers to agents, consultants, restaurant owners,
                  freelancers, and family businesses — Hampton Roads is full of people working
                  hard without the same benefit structure as large employers.
                </p>
                <p style={styles.p}>
                  This page exists to help business owners across the region understand that
                  healthcare access does not have to start and end with traditional insurance.
                </p>
              </div>

              <div style={styles.pillGrid}>
                {cities.map((city) => (
                  <div key={city} style={styles.pill}>
                    {city}
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
          <h2 style={styles.h2}>Questions business owners ask before they take action.</h2>

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
          <h2 style={styles.h2}>More healthcare access pages for Hampton Roads.</h2>

          <div style={styles.grid3}>
            {[
              ["/small-business-healthcare-hampton-roads", "Small Business Healthcare"],
              ["/family-healthcare-membership-hampton-roads", "Family Healthcare Membership"],
              ["/telehealth-doctor-hampton-roads", "Telehealth Doctors"],
              ["/mental-health-support-hampton-roads", "Mental Health Support"],
              ["/prescription-savings-hampton-roads", "Prescription Savings"],
              ["/healthcare-alternatives-hampton-roads", "Healthcare Alternatives"],
            ].map(([url, label]) => (
              <Link key={url} to={url} style={{ ...styles.card, textDecoration: "none", color: "#ffffff" }}>
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
            See what healthcare access could look like for you, your family, or your business.
          </h2>
          <p style={styles.p}>
            Get the details, ask questions, and see whether KonnectMD may fit your situation.
          </p>

          <Link to="/contact" style={styles.primaryButton}>
            Contact Us for Details
          </Link>
        </div>
      </section>
    </main>
  );
}