import SectionHeading from "../shared/SectionHeading";
import { Link } from "react-router-dom";

export default function LaunchSection() {
  return (
    <section className="section mobile-hide">
      <div className="container two-col">
        <div>
          <SectionHeading
            eyebrow="Now Available"
            title="Launching with local momentum and nationwide access"
            text="KonnectMD Access is being actively introduced in Hampton Roads, but the services are available nationwide for members across the U.S."
          />

          <p className="body-copy">
            That means whether you live in Hampton Roads or elsewhere in the
            country, you can explore membership options designed to help your
            household or business stay connected to care.
          </p>

          <p className="body-copy">
            One plan can support up to 7 members, and access follows you
            wherever you are in the United States.
          </p>

          <div className="hero-actions">
            <Link to="/get-details" className="btn btn-primary">
              Get Plan Details
            </Link>

            <Link to="/book-call" className="btn btn-secondary">
              Book a Call
            </Link>
          </div>

          <p className="nationwide-note">
            Services available nationwide across the U.S.
          </p>
        </div>

        <div>
          <img
            src="/images/business-owner.jpg"
            alt="Business owner reviewing healthcare access options"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
}