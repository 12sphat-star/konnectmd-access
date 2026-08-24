import "../../Styles/KonnectMDIntro.css";
import { Link } from "react-router-dom";

const benefits = [
  {
    number: "24/7",
    title: "Physician Access",
    text: "Connect with licensed physicians for many everyday healthcare needs.",
  },
  {
    number: "Mental + Life",
    title: "Support for Real Life",
    text: "Mental, emotional, family, work and everyday-life support.",
  },
  {
    number: "1,000+",
    title: "Medications",
    text: "Access to more than 1,000 medications at no additional cost.*",
  },
  {
    number: "Up to 7",
    title: "Family Members",
    text: "Help more of your family access healthcare through one membership.*",
  },
];

export default function KonnectMDIntro() {
  return (
    <section className="konnectmd-intro">
      <div className="container">

        <div className="konnectmd-intro-heading">
          <span className="konnectmd-intro-eyebrow">
            ONE PRACTICAL HEALTHCARE ACCESS OPTION
          </span>

          <h2>
            What If One Membership Could Help With Several of These Needs?
          </h2>

          <p className="konnectmd-intro-lead">
            Healthcare access can involve more than one challenge.
            KonnectMD brings several healthcare services and support resources
            together through one membership.
          </p>
        </div>

        <div className="konnectmd-intro-brand">
          Konnect<span>MD</span>
          <small> Healthcare Access</small>
        </div>

        <div className="konnectmd-intro-benefits">
          {benefits.map((benefit) => (
            <div className="konnectmd-intro-benefit" key={benefit.title}>
              <strong>{benefit.number}</strong>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="konnectmd-intro-actions">
          <Link to="/get-details" className="btn btn-primary">
            See How KonnectMD Works
          </Link>

          <Link to="/plans" className="btn btn-secondary">
            Compare Memberships
          </Link>
        </div>

        <p className="konnectmd-intro-disclaimer">
          *Benefits, medication availability and family eligibility vary by
          membership. KonnectMD is a healthcare membership and is not health
          insurance or a replacement for comprehensive major-medical coverage.
        </p>

      </div>
    </section>
  );
}