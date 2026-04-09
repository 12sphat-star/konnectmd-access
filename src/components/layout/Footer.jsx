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
          </div>

          <div className="footer-links-block">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/plans">Plans</Link></li>
              <li><Link to="/get-details">Get Details</Link></li>
              <li><Link to="/book-call">Book a Call</Link></li>
              <li><Link to="/landing">Start Here</Link></li>
            </ul>
          </div>

          <div className="footer-note-block">
            <h4>Important Notice</h4>
            <p>
              KonnectMD Access is not health insurance. It is a healthcare
              savings and access membership with services available nationwide.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2026 12 Stone Agency. All rights reserved.</p>
          </div>

          <div className="footer-bottom-right">
            <p>Powered by  12 Stone Smart Website Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}