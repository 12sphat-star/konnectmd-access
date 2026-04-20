import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MentalHealthPage() {
  useEffect(() => {
    document.title = "Mental Health / Counseling | KonnectMD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section detail-offer-page">
      <div className="container">
        <div className="detail-offer-hero">
          <div className="detail-offer-copy">
            <p className="details-kicker">Mental Health / Counseling</p>
            <h1>Health support should include your mind too.</h1>
            <p className="detail-offer-sub">
              This option matters for people who want a more complete approach to
              support, not just physical care.
            </p>

            <div className="detail-offer-actions">
              <Link
                to="/contact"
                state={{ interestType: "Mental Health / Counseling" }}
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
              <strong>Support</strong>
              <span>More than just physical care</span>
            </div>
            <div className="detail-offer-stat-card">
              <strong>Access</strong>
              <span>Explore a broader care conversation</span>
            </div>
          </div>
        </div>

        <div className="detail-value-grid">
          <div className="detail-value-card">
            <h3>Whole-person value</h3>
            <p>This helps people feel like they are looking at the bigger picture.</p>
          </div>
          <div className="detail-value-card">
            <h3>More complete support</h3>
            <p>A better fit for households wanting more than one narrow benefit.</p>
          </div>
          <div className="detail-value-card">
            <h3>Important conversation</h3>
            <p>Mental wellness matters, and many people want easier access to that support.</p>
          </div>
        </div>

        <div className="detail-story-band">
          <h3>Why people like this option</h3>
          <p>
            It feels more human. More complete. More aligned with what real life
            actually looks like.
          </p>
        </div>
      </div>
    </section>
  );
}