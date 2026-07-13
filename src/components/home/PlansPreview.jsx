import "../../Styles/PlansPreview.css";
import { Link } from "react-router-dom";
import { plans } from "../../data/plans";

export default function PlansPreview() {
  return (
    <section
      id="plans"
      className="plans-preview"
      aria-labelledby="plans-preview-title"
    >
      <div className="container">
        <div className="plans-preview-header">
          <p className="plans-preview-eyebrow">Membership Options</p>

          <h2 id="plans-preview-title">
            Four Membership Levels. One Designed to Fit Your Needs.
          </h2>

          <p>
            Each level builds on the membership below it, adding more
            healthcare services, prescription benefits, preventive support,
            and household resources.
          </p>
        </div>

        <div className="plans-preview-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plans-preview-card ${
                plan.featured ? "is-featured" : ""
              }`}
            >
              {plan.featured && (
                <div className="plans-preview-featured">Most Popular</div>
              )}

              <div className="plans-preview-card-header">
                <p className="plans-preview-best-for">
                  Best for: {plan.bestFor}
                </p>

                <h3>{plan.name}</h3>

                <div className="plans-preview-price">{plan.price}</div>

                <p className="plans-preview-subtext">{plan.subtext}</p>

                <p className="plans-preview-description">
                  {plan.description}
                </p>
              </div>

              <div className="plans-preview-highlights">
                {plan.highlights.map((highlight) => (
                  <div key={highlight}>
                    <span aria-hidden="true">✓</span>
                    <strong>{highlight}</strong>
                  </div>
                ))}
              </div>

              <ul className="plans-preview-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="plans-preview-actions">
                <Link to="/get-details" className="btn btn-secondary">
                  Review Details
                </Link>

                <a
                  href="https://konnectmdnow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Join Now
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="plans-preview-footer">
          <p>
            A one-time $30 enrollment fee may apply. Memberships are not health
            insurance. Benefits, services, prescription options, and
            availability vary by membership level and program terms.
          </p>

          <Link to="/plans" className="plans-preview-compare">
            Compare Complete Membership Details →
          </Link>
        </div>
      </div>
    </section>
  );
}