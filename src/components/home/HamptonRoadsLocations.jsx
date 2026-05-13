import { Link } from "react-router-dom";

const cities = [
  {
    name: "Norfolk",
    path: "/norfolk-telehealth",
    desc: "Telehealth access, virtual urgent care, and healthcare support for Norfolk residents.",
  },
  {
    name: "Virginia Beach",
    path: "/virginia-beach-telehealth",
    desc: "Healthcare access options for Virginia Beach families and entrepreneurs.",
  },
  {
    name: "Chesapeake",
    path: "/chesapeake-telehealth",
    desc: "Telehealth and healthcare access support for Chesapeake residents.",
  },
  {
    name: "Portsmouth",
    path: "/portsmouth-telehealth",
    desc: "Healthcare membership and virtual care access in Portsmouth.",
  },
  {
    name: "Hampton",
    path: "/hampton-telehealth",
    desc: "Healthcare access solutions for Hampton families and business owners.",
  },
  {
    name: "Newport News",
    path: "/newport-news-telehealth",
    desc: "Telehealth access and healthcare support for Newport News residents.",
  },
  {
    name: "Suffolk",
    path: "/suffolk-telehealth",
    desc: "Virtual healthcare access and prescription savings in Suffolk.",
  },
];

export default function HamptonRoadsLocations() {
  return (
    <section
      style={{
        background: "#071426",
        padding: "90px 24px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p
            style={{
              color: "#60a5fa",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "12px",
              marginBottom: "18px",
            }}
          >
            Hampton Roads Healthcare Access
          </p>

          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: "1",
              fontWeight: "950",
              marginBottom: "24px",
            }}
          >
            Telehealth Access Across Hampton Roads
          </h2>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            KonnectMD helps families, entrepreneurs, self-employed professionals,
            and small business owners across Hampton Roads explore healthcare access,
            telehealth support, prescription savings, mental health support, and
            virtual care options.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {cities.map((city) => (
            <Link
              key={city.name}
              to={city.path}
              style={{
                background: "#0b1f36",
                border: "1px solid rgba(96,165,250,0.18)",
                borderRadius: "24px",
                padding: "28px",
                textDecoration: "none",
                color: "#fff",
                transition: "0.3s ease",
                boxShadow: "0 20px 40px rgba(0,0,0,0.20)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
                  background: "rgba(59,130,246,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  fontWeight: "900",
                  color: "#93c5fd",
                  fontSize: "20px",
                }}
              >
                +
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  marginBottom: "14px",
                }}
              >
                Telehealth Doctor in {city.name}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                  fontSize: "15px",
                }}
              >
                {city.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}