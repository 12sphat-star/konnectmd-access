import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdditionalBenefitsPage() {
  useEffect(() => {
    document.title = "Additional Benefits Stack | KonnectMD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section detail-offer-page">
      <div className="container">
        <div className="detail-offer-hero">
          <div className="detail-offer-copy">
            <p className="details-kicker">Additional Benefits Stack</p>
            <h1>Sometimes the bigger picture is what makes the deal.</h1>
            <p className="detail-offer-sub">
              This page is for people who want to understand the overall value,
              not just one isolated feature.
            </p>

            <div className="detail-offer-actions">
              <Link
                to="/contact"
                state={{ interestType: "Additional Benefits Stack" }}
                className="btn btn-primary"
              >
                Get Details on This Option →
              </Link>
              <Link to="/get-details" className="btn btn-outline">
                Back to Options
              </Link>
            </div>
          </div>

          <div className="detail-offer-highlight">
            <div className="detail-offer-stat-card">
              <strong>More</strong>
              <span>Than a one-feature offer</span>
            </div>
            <div className="detail-offer-stat-card">
              <strong>Broader</strong>
              <span>Value people can compare more easily</span>
            </div>
          </div>
        </div>

        <div className="detail-value-grid">
          <div className="detail-value-card">
            <h3>Better overall understanding</h3>
            <p>This helps people see why the offer can feel stronger than it first appears.</p>
          </div>
          <div className="detail-value-card">
            <h3>Useful for comparison</h3>
            <p>Especially helpful for people asking, “What all do I really get?”</p>
          </div>
          <div className="detail-value-card">
            <h3>Stronger total value story</h3>
            <p>More support, more reasons to pay attention, more practical appeal.</p>
          </div>
        </div>

        <div className="detail-story-band">
          <h3>Why people like this option</h3>
          <p>
            Because once they see the full value stack, the offer feels more
            complete and more worth considering.
          </p>
        </div>
      </div>
    </section>
  );
}