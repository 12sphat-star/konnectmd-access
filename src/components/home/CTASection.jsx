import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-box premium-cta">
          <p className="eyebrow">Next Step</p>
          <h2>Take a closer look at the membership options</h2>
          <p>
            The best next step is to review the plan details or schedule a quick
            call to see what may fit your situation best.
          </p>

          <div className="hero-actions">
            <Link to="/get-details" className="btn btn-primary">
              Get Plan Details
            </Link>

            <Link to="/book-call" className="btn btn-secondary">
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}