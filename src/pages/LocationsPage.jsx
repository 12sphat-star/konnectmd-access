import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const cities = [
  {
    name: "Norfolk",
    path: "/locations/norfolk-va",
    text: "Healthcare access options for Norfolk families, entrepreneurs, and households.",
  },
  {
    name: "Virginia Beach",
    path: "/locations/virginia-beach-va",
    text: "KonnectMD access for Virginia Beach residents and small business owners.",
  },
  {
    name: "Chesapeake",
    path: "/locations/chesapeake-va",
    text: "Practical healthcare access solutions for Chesapeake households.",
  },
  {
    name: "Portsmouth",
    path: "/locations/portsmouth-va",
    text: "Affordable healthcare access for Portsmouth families and workers.",
  },
  {
    name: "Hampton",
    path: "/locations/hampton-va",
    text: "KonnectMD options for Hampton households and entrepreneurs.",
  },
  {
    name: "Newport News",
    path: "/locations/newport-news-va",
    text: "Healthcare savings and access for Newport News families.",
  },
  {
    name: "Suffolk",
    path: "/locations/suffolk-va",
    text: "Simple healthcare access options for Suffolk residents.",
  },
];

export default function LocationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="KonnectMD in Hampton Roads | Norfolk, Virginia Beach, Chesapeake & More"
        description="KonnectMD healthcare access available across Hampton Roads including Norfolk, Virginia Beach, Chesapeake, Portsmouth, Hampton, Newport News, and Suffolk."
        path="/locations"
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "760px", marginBottom: "2rem" }}>
            <p className="eyebrow">Hampton Roads Coverage</p>

            <h1>KonnectMD Across Hampton Roads</h1>

            <p className="body-copy">
              KonnectMD helps individuals, families, entrepreneurs, and small
              business owners across Hampton Roads access healthcare services,
              savings, and virtual support in a simpler way.
            </p>
          </div>

          <div className="selector-grid">
            {cities.map((city) => (
              <Link
                key={city.name}
                to={city.path}
                className="selector-card"
                style={{ textDecoration: "none" }}
              >
                <div className="selector-card-top">
                  <span className="selector-icon">📍</span>
                  <span className="selector-tag">Local Area</span>
                </div>

                <h3>{city.name}</h3>

                <p>{city.text}</p>

                <div className="selector-card-cta">
                  <span>View {city.name}</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.75rem",
              borderRadius: "22px",
              background: "var(--panel)",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              Looking for healthcare access in your city?
            </h2>

            <p
              style={{
                color: "var(--muted)",
                maxWidth: "720px",
                margin: "0 auto 1.25rem",
                lineHeight: 1.75,
              }}
            >
              Explore your local city page or speak with a KonnectMD agent to
              learn what options may fit your household or business.
            </p>

            <Link to="/get-details" className="btn btn-primary">
              Get Plan Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}