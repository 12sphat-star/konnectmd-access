import { Link } from "react-router-dom";
import { plans } from "../data/plans";

export default function PlansPage() {
  return (
    <section className="section plans-page">
      <div className="container">
        <p className="eyebrow">Plans</p>
        <h1 className="page-title">Choose the membership level that fits your needs</h1>
        <p className="section-copy">
          Whether you need simple access, stronger household value, or expanded
          support, there is a membership level designed to meet you where you are.
        </p>

        <div className="plans-grid four" style={{ marginTop: "2rem" }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card premium-plan ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && <div className="featured-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="plan-desc">{plan.description}</p>
              <div className="plan-price">{plan.price}</div>

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
  );
}