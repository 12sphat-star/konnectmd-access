import SectionHeading from "../shared/SectionHeading";
import { Link } from "react-router-dom";

export default function LaunchSection() {
  return (
    <section className="section mobile-hide">
      <div className="container two-col">
        <div>
          <SectionHeading
            eyebrow="Now Available in Hampton Roads"
            title="Local launch. Nationwide reach."
            text="KonnectMD is being actively introduced right here in Hampton Roads — Virginia Beach, Norfolk, Chesapeake, Suffolk, Portsmouth and beyond. But the membership works anywhere in the U.S."
          />

          <p className="body-copy">
            Whether you're a local business owner in Norfolk, a freelancer in
            Virginia Beach, or a family in Chesapeake — this was built for
            your situation. And if you're outside Hampton Roads, the same
            access is available wherever you are.
          </p>

          <p className="body-copy">
            We're building this market from the ground up — which means you get
            direct access to an agent who actually knows your community, not a
            call center.
          </p>

          <div className="hero-actions">
            <Link to="/get-details" className="btn btn-primary">
              See My Options
            </Link>
            <Link to="/book-call" className="btn btn-secondary">
              Book a Local Call
            </Link>
          </div>

          <p className="nationwide-note">
            Serving Hampton Roads and all 50 states nationwide.
          </p>
        </div>

        <div>
          <img
            src="/images/hampton-roads.jpg"
            alt="Hampton Roads Virginia skyline"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
}
