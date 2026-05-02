import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FamilyMembershipPage() {
  useEffect(() => {
    document.title = "Family Membership | KonnectMD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section detail-offer-page">
      <div className="container">
        <div className="detail-offer-hero">
          <div className="detail-offer-copy">
            <p className="details-kicker">Family Membership</p>
            <h1>One membership can help support the whole household.</h1>
            <p className="detail-offer-sub">
  KonnectMD may allow one household membership to include multiple eligible
  family members. Even better, each included member receives access to the
  services available within that membership level — creating real value for
  the whole household.
</p>

            <div className="detail-offer-actions">
              <Link
                to="/contact"
                state={{ interestType: "Family Membership" }}
                className="btn btn-primary"
              >
                Get Family Membership Details →
              </Link>

              <Link to="/get-details" className="btn btn-outline">
                Back to Options
              </Link>
            </div>
          </div>

          <div className="detail-offer-highlight">
  <div className="detail-offer-stat-card">
    <strong>Whole Household</strong>
    <span>With one membership add up to 7 eligible family members</span>
  </div>

  <div className="detail-offer-stat-card">
    <strong>Shared Value</strong>
    <span>Each included member can access plan services</span>
  </div>

  <div className="detail-offer-stat-card">
    <strong>Smarter Fit</strong>
    <span>Designed for real family budgets and real family needs</span>
  </div>
</div>
        </div>

        <div className="detail-story-band">
          <h3>Why this matters for families</h3>
          <p>
            Healthcare gets expensive fast when every person feels like a
            separate problem. KonnectMD gives families a simpler way to think
            about care access, savings, and support under one membership.
          </p>
        </div>

        <div className="detail-value-grid">
          <div className="detail-value-card">
            <h3>Built for households</h3>
            <p>
              Parents, spouses, children, and eligible household members may be
              included depending on membership terms.
            </p>
          </div>

          <div className="detail-value-card">
       <h3>More Value Per Household</h3>
<p>
  When multiple family members can use the services included in the plan,
  the household value becomes easier to understand.
</p>
          </div>

          <div className="detail-value-card">
            <h3>More than one benefit</h3>
            <p>
              Families may be looking for doctor access, prescription savings,
              mental health support, dental, vision, chiropractic access, and
              more.
            </p>
          </div>
        </div>

        <div className="detail-story-band">
          <h3>The simple question</h3>
          <p>
            If one membership may help support multiple people in your household,
            why keep trying to solve healthcare person by person?
          </p>
        </div>

        <div className="detail-value-grid">
          <div className="detail-value-card">
            <h3>Common Question</h3>
            <p>
              <strong>Can one membership include my family?</strong>
              <br />
              Yes. Eligible KonnectMD options may include up to 7 household
              members on one membership.
            </p>
          </div>

          <div className="detail-value-card">
            <h3>Common Question</h3>
            <p>
              <strong>Does it cost more for each person?</strong>
              <br />
              Eligible household members may be added with no additional monthly
              cost for each added family member, depending on current plan terms.
            </p>
          </div>

          <div className="detail-value-card">
            <h3>Next Step</h3>
            <p>
              Click below and a KonnectMD agent can explain the family
              membership option and what may fit your household.
            </p>
          </div>
        </div>
        <div className="detail-story-band">
  <h3>Why families pay attention</h3>
  <p>
    This is not one person getting benefits while everyone else waits.
    Each eligible household member can access the services included in
    the selected membership level.
  </p>
</div>

        <div
          className="detail-lux-bottom"
          style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <Link
            to="/contact"
            state={{ interestType: "Family Membership" }}
            className="btn btn-primary"
          >
            Get Family Membership Details →
          </Link>

          <Link to="/get-details" className="btn btn-secondary">
            ← Back to All Options
          </Link>
        </div>
      </div>
    </section>
  );
}