import "../../Styles/CTASection.css";
import { Link } from "react-router-dom";

const nextSteps = [
  {
    title: "Keep Exploring",
    text: "Review healthcare guides, membership options, and resource centers before making a decision.",
    action: "Explore Resources",
    to: "#learning-center",
    type: "internal",
  },
  {
    title: "Talk With an Advisor",
    text: "Get help understanding which KonnectMD membership may fit your household or business.",
    action: "Book a 30-Minute Call",
    to: "/book-call",
    type: "internal",
  },
  {
    title: "Become a Member",
    text: "Ready to move forward? Review the enrollment page and choose your membership.",
    action: "View Memberships & Enroll",
    to: "https://konnectmdnow.com/",
    type: "external",
  },
];

export default function CTASection() {
  return (
    <section
      id="contact"
      className="final-cta"
      aria-labelledby="final-cta-title"
    >
      <div className="container">
        <div className="final-cta-header">
          <p className="final-cta-eyebrow">Choose Your Next Step</p>

          <h2 id="final-cta-title">
            Wherever You Are in Your Healthcare Journey, We&apos;re Here to Help.
          </h2>

          <p>
            Continue learning, speak with a KonnectMD Access advisor, or review
            the available membership options when you&apos;re ready.
          </p>
        </div>

        <div className="final-cta-grid">
          {nextSteps.map((item) => (
            <article className="final-cta-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

{item.type === "external" ? (
  <a
    href={item.to}
    target="_blank"
    rel="noopener noreferrer"
    className="final-cta-link"
  >
    {item.action} <span aria-hidden="true">→</span>
  </a>
) : item.to.startsWith("#") ? (
  <a href={item.to} className="final-cta-link">
    {item.action} <span aria-hidden="true">→</span>
  </a>
) : (
  <Link to={item.to} className="final-cta-link">
    {item.action} <span aria-hidden="true">→</span>
  </Link>
)}
            </article>
          ))}
        </div>

        <div className="final-cta-trust">
          <p>
            KonnectMD Access provides education and guidance to help people
            understand and access services available through KonnectMD.
            Memberships are not health insurance and do not replace emergency
            care.
          </p>
        </div>
      </div>
    </section>
  );
}