import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-premium">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <h3>KonnectMD</h3>
            <p>
              Affordable healthcare access for individuals, households,
              entrepreneurs, and small businesses seeking a more practical
              option.
            </p>
          </div>

<div className="footer-links-block">
  <h4>Explore</h4>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/plans">Plans</Link></li>
    <li><Link to="/get-details">Get Details</Link></li>
    <li><Link to="/insights">Insights</Link></li>

    <li>
      <Link to="/locations">Hampton Roads Locations</Link>
    </li>

    <li>
      <Link to="/healthcare-alternatives-hampton-roads">
        Health Insurance Alternatives
      </Link>
    </li>

    <li><Link to="/book-call">Book a Call</Link></li>
    <li><a
  href="https://konnectmdagency.com//"
  target="_blank"
  rel="noopener noreferrer"
>
  Join the Team
</a></li>
  </ul>
</div>

          <div className="footer-links-block">
            <h4>Popular Help</h4>
            <ul>
              <li><Link to="/problems/doctor-without-insurance">Doctor Without Insurance</Link></li>
              <li><Link to="/problems/family-healthcare">Family Healthcare</Link></li>
              <li><Link to="/problems/prescription-savings">Prescription Savings</Link></li>
              <li><Link to="/problems/small-business-healthcare">Small Business Healthcare</Link></li>
            </ul>
          </div>

    <div className="footer-links-block">
  <h4>Hampton Roads Locations</h4>

  <ul>
    <li>
      <Link to="/norfolk-telehealth">
        Norfolk Telehealth
      </Link>
    </li>

    <li>
      <Link to="/virginia-beach-telehealth">
        Virginia Beach Telehealth
      </Link>
    </li>

    <li>
      <Link to="/chesapeake-telehealth">
        Chesapeake Telehealth
      </Link>
    </li>

    <li>
      <Link to="/portsmouth-telehealth">
        Portsmouth Telehealth
      </Link>
    </li>

    <li>
      <Link to="/hampton-telehealth">
        Hampton Telehealth
      </Link>
    </li>

    <li>
      <Link to="/newport-news-telehealth">
        Newport News Telehealth
      </Link>
    </li>

    <li>
      <Link to="/suffolk-telehealth">
        Suffolk Telehealth
      </Link>
    </li>
  </ul>
</div>

          <div className="footer-note-block">
            <h4>Important Notice</h4>
            <p>
              KonnectMD is not health insurance. It is a healthcare savings and
              access membership with services available nationwide. Services are
              rendered subject to the licensed professional’s judgment. If you
              are experiencing a medical emergency, dial 911 immediately.
            </p>
 <p
  style={{
    marginTop: "18px",
    color: "#94a3b8",
    fontSize: "14px",
    lineHeight: "1.6",
  }}
>
  KonnectMD Access is available nationwide throughout the United States and U.S. territories.
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