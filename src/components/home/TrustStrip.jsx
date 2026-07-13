import "../../Styles/TrustStrip.css";
import { Link } from "react-router-dom";

const trustItems = [
  {
    icon: "✚",
    title: "24/7 Physician Access",
    text: "Connect with licensed physicians without the traditional waiting room.",
    link: "/resource-center/telehealth",
  },
  {
    icon: "Rx",
    title: "Prescription Savings",
    text: "Access programs designed to help lower medication costs.",
    link: "/resource-center/prescription-savings",
  },
  {
    icon: "◉",
    title: "Behavioral Health",
    text: "Counseling, psychology, psychiatry, and mental health support.",
    link: "/resource-center/behavioral-health",
  },
  {
    icon: "7+",
    title: "Up to 7 Family Members",
    text: "One membership can support your spouse and eligible dependents.",
    link: "/resource-center/family-healthcare",
  },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip-v2" aria-labelledby="trust-strip-title">
      <div className="container">
        <div className="trust-strip-heading">
          <h2 id="trust-strip-title">Start Your Healthcare Journey</h2>
          <p>Choose a topic to explore resources, services, and next steps.</p>
        </div>

        <div className="trust-strip-grid">
          {trustItems.map((item) => (
            <Link
              to={item.link}
              className="trust-strip-card"
              key={item.title}
            >
              <span className="trust-strip-icon" aria-hidden="true">
                {item.icon}
              </span>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <span className="trust-strip-link">
                Explore resources <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}