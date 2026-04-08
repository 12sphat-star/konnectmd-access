import SectionHeading from "../shared/SectionHeading";
import { plans } from "../../data/plans";
import { Link } from "react-router-dom";

export default function PlansPreview() {
  return (
    <section id="plans" className="section section-dark plans-section">
      <div className="container">
        <SectionHeading
          eyebrow="Membership Options"
          title="Choose the level of access that fits your life"
          text="Each membership is priced per family per month, with stronger benefits as you move up."
        />

        <div className="plans-grid four">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card premium-plan ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && <div className="featured-badge">Most Popular</div>}

              <h3>{plan.name}</h3>
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
                  href="https://www.konnectmdagency.com/index.aspx?ReferringDealerID=817595"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary full"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>

                <div className="plans-note">
          <p>
            One-time enrollment fee: $30. After enrollment, members are guided
            through onboarding so they can understand their benefits, access
            their client portal, and begin using the membership as smoothly as
            possible.
          </p>
        </div>
      </div>
    </section>
  );
}