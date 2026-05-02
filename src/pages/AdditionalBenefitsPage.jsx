import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdditionalBenefitsPage() {
  useEffect(() => {
    document.title = "Additional Benefits | KonnectMD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section detail-offer-page">
      <div className="container">
        <div className="detail-offer-hero">
          <div className="detail-offer-copy">
            <p className="details-kicker">Additional Benefits</p>

            <h1>The extra benefits are where KonnectMD starts to separate itself.</h1>

            <p className="detail-offer-sub">
              KonnectMD is not just doctor access. Depending on the option
              selected, members may also access services that support pets,
              medical bill stress, weight management, prescription needs,
              mental health, and more.
            </p>

            <div className="detail-offer-actions">
              <Link
                to="/contact"
                state={{ interestType: "Additional Benefits" }}
                className="btn btn-primary"
              >
                Get Details on These Benefits →
              </Link>

              <Link to="/get-details" className="btn btn-outline">
                Back to Options
              </Link>
            </div>
          </div>

          <div className="detail-offer-highlight">
            <div className="detail-offer-stat-card">
              <strong>Pet Care</strong>
              <span>Virtual vet support for household pets</span>
            </div>

            <div className="detail-offer-stat-card">
              <strong>Bill Help</strong>
              <span>Medical bill advocate support may be available</span>
            </div>

            <div className="detail-offer-stat-card">
              <strong>GLP-1</strong>
              <span>Weight loss support may be available by option</span>
            </div>
          </div>
        </div>

        <div className="detail-story-band">
          <h3>Why this page matters</h3>
          <p>
            Many people first notice KonnectMD because of doctor access, family
            value, or prescription savings. But the additional benefits can make
            the total membership feel much more complete.
          </p>
        </div>

        <div className="detail-value-grid">
          <div className="detail-value-card">
            <h3>Concierge Virtual Pet Care</h3>
            <p>
              Pet care can be expensive and stressful. Some KonnectMD options
              may include virtual veterinarian support for household pets,
              helping families get guidance when something does not seem right.
            </p>
          </div>

          <div className="detail-value-card">
            <h3>Medical Bill Advocate</h3>
            <p>
              Medical bills can feel confusing, overwhelming, and unfair.
              Medical bill advocate support may help members review bills and
              better understand possible savings or negotiation options.
            </p>
          </div>

          <div className="detail-value-card">
            <h3>GLP-1 Weight Loss Support</h3>
            <p>
              Weight management is a major concern for many families. Depending
              on the option selected, GLP-1 support may be available as part of
              a broader wellness conversation.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1.75rem",
            borderRadius: "22px",
            background: "rgba(45, 127, 249, 0.08)",
            border: "1px solid rgba(45, 127, 249, 0.22)",
          }}
        >
          <p className="details-kicker">The bigger picture</p>
          <h2 style={{ marginTop: 0 }}>
            KonnectMD is built around access, savings, and practical support.
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            The value is not just one benefit. It is the combination of services
            that can help a household solve more than one healthcare-related
            problem with one membership conversation.
          </p>
        </div>

        <div className="detail-value-grid">
          <div className="detail-value-card">
            <h3>Common Question</h3>
            <p>
              <strong>Are these benefits included in every option?</strong>
              <br />
              Benefits may vary by membership level or add-on option. A
              KonnectMD agent can help explain what applies.
            </p>
          </div>

          <div className="detail-value-card">
            <h3>Common Question</h3>
            <p>
              <strong>Is GLP-1 included automatically?</strong>
              <br />
              GLP-1 support may depend on the selected option, eligibility, and
              program terms.
            </p>
          </div>

          <div className="detail-value-card">
            <h3>Next Step</h3>
            <p>
              Click below and a KonnectMD agent can walk you through which
              additional benefits may fit your household or business.
            </p>
          </div>
        </div>

        <div
          className="detail-lux-bottom"
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/contact"
            state={{ interestType: "Additional Benefits" }}
            className="btn btn-primary"
          >
            Get Details on Additional Benefits →
          </Link>

          <Link to="/get-details" className="btn btn-secondary">
            ← Back to All Options
          </Link>
        </div>
      </div>
    </section>
  );
}