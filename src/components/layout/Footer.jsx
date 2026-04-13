import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-premium">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <h3>KonnectMD Access</h3>
            <p>
              Affordable healthcare access for individuals, households, and small
              businesses seeking a more practical option.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "0.85rem",
                padding: "0.5rem 0.85rem",
                background: "rgba(45, 127, 249, 0.08)",
                border: "1px solid rgba(45, 127, 249, 0.2)",
                borderRadius: "999px",
                fontSize: "0.78rem",
                color: "var(--blue-soft)",
                fontWeight: 700,
              }}
            >
              Powered by KonnectMD — HIPAA Compliant Telehealth
            </div>
          </div>

          <div className="footer-links-block">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/plans">Plans</Link></li>
              <li><Link to="/get-details">Get Details</Link></li>
              <li><Link to="/book-call">Book a Call</Link></li>
              <li><Link to="/landing">Start Here</Link></li>
              <li>
                <Link
                  to="/join-the-team"
                  style={{ color: "var(--gold)", fontWeight: 700 }}
                >
                  Join the Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-note-block">
            <h4>Important Notice</h4>
            <p>
              KonnectMD Access is not health insurance. It is a healthcare
              savings and access membership with services available nationwide.
              All services are delivered through a secure, HIPAA-compliant
              platform by licensed professionals. Services are rendered subject
              to the licensed professionals judgment. If you are experiencing
              a medical emergency, dial 911 immediately.
            </p>
            <a
              href="https://www.konnectmd.com/_files/ugd/523e5b_a002539b6c86403196de1ea736bad54a.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "0.75rem",
                fontSize: "0.8rem",
                color: "var(--blue-soft)",
              }}
            >
              Terms, Conditions and Disclosures
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>2026 12 Stone Agency. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <p>Powered by 12 Stone Smart Website Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}