import SectionHeading from "../shared/SectionHeading";
import { plans } from "../../data/plans";
import { Link } from "react-router-dom";

export default function PlansPreview() {
  return (
    <section id="plans" className="section section-dark plans-section">
      <div className="container">
        <SectionHeading
          eyebrow="Membership Options"
          title="Four levels. One gets you started. All move you forward."
          text="Each plan builds on the one below it — so as you move up, you keep everything from the previous tier and gain more. Priced per family per month."
        />

        <div className="plans-grid four">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card premium-plan ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && <div className="featured-badge">Most Popular</div>}

              <h3>{plan.name}</h3>

              {plan.bestFor && (
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--blue-soft)",
                    background: "rgba(45, 127, 249, 0.1)",
                    border: "1px solid rgba(45, 127, 249, 0.2)",
                    borderRadius: "999px",
                    padding: "0.3rem 0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Best for: {plan.bestFor}
                </div>
              )}

              <p className="plan-desc">{plan.description}</p>

              <div className="plan-price">{plan.price}</div>
              <p className="plan-subtitle">{plan.subtext}</p>

              <div className="plan-highlight-block">
                {plan.highlights.map((item) => (
                  <div key={item} className="plan-highlight-item">
                    {item}
                  </div>
                ))}
              </div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="plan-actions">
                <Link to="/get-details" className="btn btn-primary full">
                  Get Details
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
            </div>
          ))}
        </div>

        <div className="plans-note">
          <p>
            One-time enrollment fee: $30. After enrollment, every member is
            guided through onboarding so you know exactly how to access your
            portal and start using your benefits right away.
          </p>
        </div>
      </div>
    </section>
  );
}
