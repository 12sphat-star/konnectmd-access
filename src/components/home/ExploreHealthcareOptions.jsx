import { Link } from "react-router-dom";

export default function ExploreHealthcareOptions() {
  const options = [
  [
    "/telehealth-doctor-hampton-roads",
    "Telehealth Doctors",
    "Virtual care access for Hampton Roads families and professionals.",
  ],

  [
    "/mental-health-support-hampton-roads",
    "Mental Health Support",
    "Virtual mental health and emotional wellness support options for Hampton Roads families, entrepreneurs, and small business owners.",
  ],

  [
    "/prescription-savings-hampton-roads",
    "Prescription Savings",
    "Ways to reduce everyday medication costs.",
  ],

  [
    "/family-healthcare-membership-hampton-roads",
    "Family Healthcare Membership",
    "Healthcare access options for households and families.",
  ],

  [
    "/small-business-healthcare-hampton-roads",
    "Small Business Healthcare",
    "Options for owners, teams, and self-employed workers.",
  ],

  [
    "/business-owners-entrepreneurs-healthcare-hampton-roads",
    "Business Owners & Entrepreneurs",
    "Healthcare access for the people building Hampton Roads.",
  ],
];


  return (
    <section
      style={{
        background: "#071426",
        color: "#ffffff",
        padding: "84px 24px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <p
          style={{
            color: "#93c5fd",
            fontWeight: "900",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontSize: "12px",
            marginBottom: "14px",
          }}
        >
          Explore Healthcare Access
        </p>

        <h2
          style={{
            fontSize: "clamp(34px, 5vw, 58px)",
            lineHeight: "1",
            fontWeight: "950",
            letterSpacing: "-0.04em",
            marginBottom: "20px",
          }}
        >
          Find the healthcare access option that fits your situation.
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.7",
            color: "#cbd5e1",
            maxWidth: "760px",
            marginBottom: "36px",
          }}
        >
          KonnectMD helps Hampton Roads residents, families, entrepreneurs, and
          small business owners explore healthcare access outside the traditional
          insurance conversation.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "18px",
          }}
        >
          {options.map(([url, title, text]) => (
            <Link
              key={url}
              to={url}
              style={{
                background: "#0b1f36",
                border: "1px solid rgba(147,197,253,0.18)",
                borderRadius: "22px",
                padding: "24px",
                color: "#ffffff",
                textDecoration: "none",
                boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "950",
                  marginBottom: "10px",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}