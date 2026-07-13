import "../../Styles/HealthcareNavigator.css";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "I Need Care Today",
    description:
      "Connect with virtual care, urgent care, primary care, and healthcare guidance when you need it most.",
    image: "/images/hero-telehealth.jpg",
    link: "/telehealth",
  },
  {
    title: "My Prescriptions Cost Too Much",
    description:
      "Discover prescription savings programs and medication resources that can help reduce healthcare costs.",
    image: "/images/hero-telehealth.jpg",
    link: "/prescription-savings",
  },
  {
    title: "I'm Looking for Mental Health Support",
    description:
      "Explore counseling, psychology, psychiatry, and behavioral health resources for you and your family.",
    image: "/images/hero-telehealth.jpg",
    link: "/mental-health",
  },
  {
    title: "Healthcare for My Family",
    description:
      "Healthcare solutions designed for spouses, children, and dependents—all in one membership.",
    image: "/images/hero-telehealth.jpg",
    link: "/family-healthcare",
  },
  {
    title: "Healthcare for My Business",
    description:
      "Affordable healthcare access for entrepreneurs, business owners, and employees.",
    image: "/images/hero-telehealth.jpg",
    link: "/business-healthcare",
  },
  {
    title: "I'm a Veteran",
    description:
      "Access veteran-focused healthcare resources, behavioral health support, and healthcare navigation.",
    image: "/images/hero-telehealth.jpg",
    link: "/veterans",
  },
  {
    title: "Help Me Understand My Options",
    description:
      "Decision guides and educational resources to help you make informed healthcare decisions.",
    image: "/images/hero-telehealth.jpg",
    link: "/decision-guides",
  },
  {
    title: "I'm Focused on My Health",
    description:
      "Explore wellness, physician-guided weight management, prevention, and healthier living resources.",
    image: "/images/hero-telehealth.jpg",
    link: "/wellness",
  },
];
export default function HealthcareNavigator() {
  return (
    <section className="healthcare-navigator">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">START HERE</span>

          <h2>Choose Your Healthcare Journey</h2>

          <p>
            Everyone's healthcare needs are different. Select the option below
            that best describes your situation and explore trusted healthcare
            resources designed to help you make informed decisions.
          </p>
        </div>

        <div className="navigator-grid">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="navigator-card"
            >
              <div className="navigator-image">
                <img src={card.image} alt={card.title} />
              </div>

              <div className="navigator-content">
                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <span className="navigator-link">
                  Explore Resources →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}