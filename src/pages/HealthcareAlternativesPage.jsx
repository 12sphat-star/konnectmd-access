import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function HealthcareAlternativesPage() {
  useEffect(() => {
    document.title =
      "Health Insurance Alternatives in Hampton Roads | KonnectMD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Health Insurance Alternatives in Hampton Roads | KonnectMD"
        description="Looking for health insurance in Hampton Roads? Learn about healthcare alternatives for families, entrepreneurs, self-employed workers, and small business owners."
        path="/healthcare-alternatives-hampton-roads"
      />

      <main className="section detail-offer-page">
        <div className="container" style={{ maxWidth: "980px" }}>
          <p className="details-kicker">Hampton Roads Healthcare Options</p>

          <h1>
            Looking for Health Insurance in Hampton Roads? There May Be Another
            Option.
          </h1>

          <p className="detail-offer-sub" style={{ maxWidth: "780px" }}>
            Many people searching for health insurance are really looking for
            affordable healthcare access, doctor visits, prescription savings,
            mental health support, and family value. KonnectMD is not
            traditional health insurance — it is a healthcare membership built
            around access, savings, and practical support.
          </p>

          <div className="detail-offer-actions" style={{ marginTop: "1.5rem" }}>
            <Link to="/get-details" className="btn btn-primary">
              Explore KonnectMD Options →
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
            <p className="details-kicker">The real search intent</p>
            <h2 style={{ marginTop: 0 }}>
              People may search “health insurance,” but what they often need is
              affordable access to care.
            </h2>
            <p className="body-copy">
              Rising premiums, high deductibles, limited networks, and confusing
              plan options have many families and small business owners looking
              for a different conversation. They want to know how to see a
              doctor, save on prescriptions, support their household, and get
              help without feeling trapped by cost.
            </p>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <p className="details-kicker">Who this helps</p>

            <div className="detail-value-grid">
              <div className="detail-value-card">
                <h3>Families</h3>
                <p>
                  Households looking for healthcare access that can support more
                  than one person.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Entrepreneurs</h3>
                <p>
                  Business-minded people who do not have an employer plan to
                  fall back on.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Self-Employed Workers</h3>
                <p>
                  Independent earners who need flexible healthcare access
                  options.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Small Business Owners</h3>
                <p>
                  Owners who want to support their team without the complexity of
                  traditional group coverage.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>People Without Insurance</h3>
                <p>
                  Individuals who need doctor access, savings, and healthcare
                  support without traditional coverage.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Budget-Conscious Households</h3>
                <p>
                  Families trying to reduce healthcare stress and understand
                  practical alternatives.
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
            <h2 style={{ marginTop: 0 }}>
              Important: KonnectMD is not traditional health insurance.
            </h2>
            <p className="body-copy">
              KonnectMD is a healthcare membership designed to help members
              access services and savings. That distinction matters. This page
              is for people who are comparing healthcare options and want to
              understand what may be available outside the traditional insurance
              box.
            </p>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <p className="details-kicker">Where KonnectMD may help</p>

            <div className="detail-value-grid">
              <div className="detail-value-card">
                <h3>Doctor Access From Home</h3>
                <p>
                  Members may access virtual care options for many common,
                  non-emergency healthcare needs.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Prescription Savings</h3>
                <p>
                  Medication costs add up quickly. KonnectMD may help members
                  access prescription savings tools.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Family Household Value</h3>
                <p>
                  Eligible household members may receive access to the services
                  included in the selected membership level.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Mental Health Support</h3>
                <p>
                  Mental wellness matters. KonnectMD may help members access
                  support in a simpler, more private way.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Small Business Option</h3>
                <p>
                  Business owners may use KonnectMD as a practical healthcare
                  access conversation for employees, contractors, or teams.
                </p>
              </div>

              <div className="detail-value-card">
                <h3>Additional Benefits</h3>
                <p>
                  Depending on the selected option, additional services may
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
              News, and Suffolk are full of families, entrepreneurs,
              military-connected households, commuters, retirees, and small
              business owners. Many are asking the same question: “What can I
              use when traditional healthcare feels too expensive or too
              complicated?”
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
                <h3>
                  Can this help if I searched for health insurance in Hampton
                  Roads?
                </h3>
                <p className="body-copy">
                  Yes. If what you really need is affordable healthcare access,
                  doctor support, prescription savings, and family value,
                  KonnectMD may be worth reviewing.
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