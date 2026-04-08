import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-box premium-cta">
          <p className="eyebrow">Next Step</p>
          <h2>Review the right membership for your household or business</h2>
          <p>
            Get plan details, compare options, and take the next step with a
            quick form or a scheduled call.
          </p>

          <div className="hero-actions">
            <Link to="/get-details" className="btn btn-primary">
              Get Plan Details
            </Link>

            <Link to="/book-call" className="btn btn-secondary">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}