import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function HealthcareAlternativesPage() {
  useEffect(() => {
    document.title = "Affordable Healthcare Alternatives in Hampton Roads | KonnectMD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Affordable Healthcare Alternatives in Hampton Roads | KonnectMD"
        description="Explore affordable healthcare alternatives for Hampton Roads families, entrepreneurs, self-employed workers, and small business owners looking for care access outside traditional insurance."
        path="/healthcare-alternatives-hampton-roads"
      />

      <main className="section detail-offer-page">
        <div className="container" style={{ maxWidth: "980px" }}>
          <p className="details-kicker">Healthcare Alternatives</p>

          <h1>
            Affordable Healthcare Alternatives in Hampton Roads
          </h1>

          <p className="detail-offer-sub" style={{ maxWidth: "760px" }}>
            Many families, entrepreneurs, and small business owners in Hampton
            Roads are looking for a better way to access care without depending
            only on expensive traditional health insurance. KonnectMD is one
            option designed around access, savings, and practical support.
          </p>

          <div className="detail-offer-actions" style={{ marginTop: "1.5rem" }}>
            <Link to="/get-details" className="btn btn-primary">
              Get KonnectMD Details →
            </Link>

            <Link to="/locations" className="btn btn-outline">
              See Hampton Roads Locations
            </Link>
          </div>

          <section
            style={{
              marginTop: "3rem",
              padding: "2rem",
              borderRadius: "22px",
              background: "var(--panel)",
              border: "1px solid var(--border)",
            }}
          >
            <p className="details-kicker">The problem</p>
            <h2 style={{ marginTop: 0 }}>
              Traditional healthcare costs are pushing people to look for other options.
            </h2>
            <p className="body-copy">
              For many households, the issue is not whether healthcare matters.
              The issue is affordability, access, and confusion. People want to
              know how to see a doctor, save on prescriptions, support their
              family, and get help without feeling trapped by cost.
            </p>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <p className="details-kicker">Who is searching for alternatives?</p>

            <div style={{ display: "grid", gap: "1.6rem" }}>
              <div>
                <h2>Families trying to cover the household</h2>
                <p className="body-copy">
                  Families need care options that work for more than one person.
                  When doctor visits, medications, mental health, dental, vision,
                  and other needs add up, a membership-style option can be worth
                  reviewing.
                </p>
              </div>

              <div>
                <h2>Entrepreneurs and self-employed people</h2>
                <p className="body-copy">
                  Entrepreneurs often do not have an employer plan. They need
                  healthcare access that fits irregular income, busy schedules,
                  and real-life pressure.
                </p>
              </div>

              <div>
                <h2>Small business owners</h2>
                <p className="body-copy">
                  Many small business owners want to help their team but cannot
                  afford or manage traditional group health coverage. KonnectMD
                  can create a simpler healthcare access conversation.
                </p>
              </div>
            </div>
          </section>

          <section
            style={{
              marginTop: "3rem",
              padding: "2rem",
              borderLeft: "4px solid var(--blue-soft)",
              background: "rgba(45, 127, 249, 0.07)",
              borderRadius: "0 18px 18px 0",
            }}
          >
            <h2 style={{ marginTop: 0 }}>What makes an alternative worth considering?</h2>
            <p className="body-copy">
              A good healthcare alternative should be easy to understand, simple
              to access, practical for families, and clear about what it is and
              what it is not. KonnectMD is not traditional health insurance. It
              is a healthcare membership designed to help members access services
              and savings.
            </p>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <p className="details-kicker">Where KonnectMD may help</p>

            <div className="detail-value-grid">
              <div className="detail-value-card">
                <h3>Doctor access from home</h3>
                <p>
                  Members may access virtual care options for many common,
                  non-emergency needs.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Prescription savings</h3>
                <p>
                  Medication costs can add up quickly. KonnectMD may help members
                  access prescription savings tools.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Family value</h3>
                <p>
                  Eligible household members may receive access to the services
                  included in the selected membership level.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Mental health support</h3>
                <p>
                  Mental wellness matters. KonnectMD may help members access
                  support in a simpler, more private way.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Small business option</h3>
                <p>
                  Business owners may use KonnectMD as a practical healthcare
                  access conversation for employees, contractors, or teams.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Additional benefits</h3>
                <p>
                  Depending on the option selected, additional services may
                  include pet care, medical bill advocate support, GLP-1 support,
                  and more.
                </p>
              </div>
            </div>
          </section>

          <section
            style={{
              marginTop: "3rem",
              padding: "2rem",
              borderRadius: "22px",
              background: "var(--panel)",
              border: "1px solid var(--border)",
            }}
          >
            <p className="details-kicker">Hampton Roads focus</p>
            <h2 style={{ marginTop: 0 }}>
              Local families need options that fit real life.
            </h2>
            <p className="body-copy">
              Norfolk, Virginia Beach, Chesapeake, Portsmouth, Hampton, Newport
              News, and Suffolk are full of families, workers, entrepreneurs,
              military-connected households, and small business owners. Many are
              asking the same question: “What can I use when traditional
              healthcare feels too expensive or too complicated?”
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "1.4rem",
              }}
            >
              <Link to="/locations" className="btn btn-primary">
                View Hampton Roads Locations
              </Link>

              <Link
                to="/problems/doctor-without-insurance"
                className="btn btn-secondary"
              >
                Need a Doctor Without Insurance?
              </Link>
            </div>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <h2>Frequently asked questions</h2>

            <div style={{ display: "grid", gap: "1.3rem", marginTop: "1rem" }}>
              <div>
                <h3>Is KonnectMD health insurance?</h3>
                <p className="body-copy">
                  No. KonnectMD is not traditional health insurance. It is a
                  healthcare membership designed around access to services and
                  savings.
                </p>
              </div>

              <div>
                <h3>Who should look at healthcare alternatives?</h3>
                <p className="body-copy">
                  Families, entrepreneurs, self-employed people, small business
                  owners, and people without affordable traditional options may
                  want to review alternatives.
                </p>
              </div>

              <div>
                <h3>Can families use KonnectMD?</h3>
                <p className="body-copy">
                  Yes. Eligible household members may be able to access services
                  included in the selected membership level.
                </p>
              </div>

              <div>
                <h3>What is the next step?</h3>
                <p className="body-copy">
                  Start by reviewing the available options or speaking with a
                  KonnectMD agent who can explain what may fit your household or
                  business.
                </p>
              </div>
            </div>
          </section>

          <div
            className="detail-lux-bottom"
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link to="/get-details" className="btn btn-primary">
              Get KonnectMD Details →
            </Link>

            <Link to="/" className="btn btn-secondary">
              ← Back Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}