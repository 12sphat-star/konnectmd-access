import "../../Styles/MemberPortalPreview.css";
import { Link } from "react-router-dom";

export default function MemberPortalPreview() {
  return (
    <section className="portal-preview">
      <div className="container">

        <div className="portal-preview-grid">

          {/* LEFT */}

          <div className="portal-preview-content">

            <span className="portal-preview-eyebrow">
              MEMBER PORTAL PREVIEW
            </span>

          <h2>
  Your Healthcare Services—
  <br />
  In One Secure Dashboard.
</h2>

          <p>
  KonnectMD brings the healthcare services included with your membership
  together through the member portal, making it easier to access physician
  care, prescription resources, behavioral health support, family services,
  and other available benefits from one convenient location.
</p>

            <div className="portal-preview-list">

              <div className="portal-preview-item">
                <span>✓</span>
                <p>24/7 Physician Access</p>
              </div>

              <div className="portal-preview-item">
                <span>✓</span>
                <p>70,000+ Participating Pharmacies</p>
              </div>

              <div className="portal-preview-item">
                <span>✓</span>
                <p>
                  1,000+ Eligible Chronic Medications through qualifying
                  Titanium membership benefits*
                </p>
              </div>

              <div className="portal-preview-item">
                <span>✓</span>
                <p>Behavioral Health Support</p>
              </div>

              <div className="portal-preview-item">
                <span>✓</span>
                <p>Family Management</p>
              </div>

            </div>

            <div className="portal-preview-buttons">

              <Link
                to="/member-experience"
                className="btn btn-primary"
              >
                Preview the Member Portal
              </Link>

              <Link
                to="/plans"
                className="btn btn-secondary"
              >
                Compare Membership Plans
              </Link>

            </div>

            <p className="portal-preview-note">
              *Available through qualifying Titanium membership benefits.
              Features and services vary by membership level and current
              program terms.
            </p>

          </div>

          {/* RIGHT */}

          <div className="portal-preview-image">

            <div className="portal-browser">

              <div className="portal-browser-top">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <img
                src="/images/member-portal-demo.webp"
                alt="KonnectMD Member Portal preview"
              />

            </div>

            <div className="portal-image-caption">

              <h3>
                KonnectMD Member Portal
              </h3>

              <p>
                Demonstration Titanium Member Dashboard
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}