import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { plans } from "../data/plans";

export default function PlansPage() {
  return (
    <>
      <Helmet>
        <title>Membership Plans | KonnectMD Access</title>
        <meta name="description" content="Compare Silver, Gold, Platinum, and Titanium healthcare access memberships. Each plan includes everything from the tier below. Starting at $59.99/mo per family." />
      </Helmet>
      <section className="section plans-page">
        <div className="container">
          <p className="eyebrow">Plans</p>
          <h1 className="page-title">Choose the membership level that fits your needs</h1>
          <p className="section-copy">
            Whether you need simple access, stronger household value, or expanded
            support, there is a membership level designed to meet you where you are.
            Each plan builds on the one below it.
          </p>

          <div className="plans-top-actions">
            <a
              href="https://www.konnectmdagency.com/index.aspx?ReferringDealerID=817595"
              target="_blank"
              rel="noreferrer"
              className="btn btn-join-large"
            >
              Join Now
            </a>
            <Link to="/get-details" className="btn btn-secondary">
              Get Plan Details First
            </Link>
          </div>

          <div className="plans-grid four" style={{ marginTop: "2rem" }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card premium-plan ${plan.featured ? "featured" : ""}`}
              >
                {plan.featured && <div className="featured-badge">Most Popular</div>}

                <h3>{plan.name}</h3>

                {plan.bestFor && (
                  <div className="plan-best-for">
                    Best for: {plan.bestFor}
                  </div>
                )}

                <p className="plan-desc">{plan.description}</p>
                <div className="plan-price">{plan.price}</div>

                {plan.highlights && plan.highlights.length > 0 && (
                  <div className="plan-highlights">
                    {plan.highlights.map((highlight) => (
                      <span key={highlight} className="plan-highlight-chip">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link to="/get-details" className="btn btn-primary full">
                  Get Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}