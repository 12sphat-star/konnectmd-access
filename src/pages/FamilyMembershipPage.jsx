import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FamilyMembershipPage() {
  useEffect(() => {
    document.title = "Whole Family Membership | KonnectMD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section detail-offer-page">
      <div className="container">
        <div className="detail-offer-hero">
          <div className="detail-offer-copy">
            <p className="details-kicker">Whole Family Membership</p>
            <h1>One option that can support more than one person.</h1>
            <p className="detail-offer-sub">
              This is where people really start to see the value when they are
              thinking beyond just themselves.
            </p>

            <div className="detail-offer-actions">
              <Link
                to="/contact"
                state={{ interestType: "Whole Family Membership" }}
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
              <strong>Up to 7</strong>
              <span>Household members on one plan</span>
            </div>
            <div className="detail-offer-stat-card">
              <strong>Value</strong>
              <span>Stronger for households than piecing things together</span>
            </div>
          </div>
        </div>

        <div className="detail-value-grid">
          <div className="detail-value-card">
            <h3>Household-friendly</h3>
            <p>Designed for people planning around real family needs and budgets.</p>
          </div>
          <div className="detail-value-card">
            <h3>Simpler than juggling options</h3>
            <p>One conversation can cover more than one person.</p>
          </div>
          <div className="detail-value-card">
            <h3>High perceived value</h3>
            <p>This is one of the easiest parts of the offer for families to understand and appreciate.</p>
          </div>
        </div>

        <div className="detail-story-band">
          <h3>Why people like this option</h3>
          <p>
            Because supporting a whole household with one path feels smarter
            than trying to solve everything person by person.
          </p>
        </div>
      </div>
    </section>
  );
}