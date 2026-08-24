import "../../Styles/HomeFindHelp.css";
import { Link } from "react-router-dom";

const helpOptions = [
  {
    icon: "🩺",
    eyebrow: "CARE",
    title: "I Need to See a Doctor",
    text: "Explore physician-access and virtual-care resources.",
    cta: "Explore Doctor Access",
    link: "/resource-center/telehealth",
  },
  {
    icon: "🧠",
    eyebrow: "MENTAL + LIFE",
    title: "I Need Support",
    text: "Explore mental, emotional, family, work and everyday-life support.",
    cta: "Explore Support",
    link: "/resource-center/behavioral-health",
  },
  {
    icon: "💊",
    eyebrow: "PRESCRIPTIONS",
    title: "Medication Costs Are Too High",
    text: "Explore prescription resources and options that may help reduce costs.",
    cta: "Explore Medication Help",
    link: "/resource-center/prescription-savings",
  },
  {
    icon: "👨‍👩‍👧",
    eyebrow: "FAMILIES",
    title: "My Family Needs Healthcare Help",
    text: "Explore practical healthcare-access resources for you and your family.",
    cta: "Explore Family Resources",
    link: "/resource-center/family-healthcare",
  },
  {
    icon: "🏢",
    eyebrow: "BUSINESSES",
    title: "My Employees Need Healthcare Options",
    text: "Explore healthcare-access resources for small businesses and their teams.",
    cta: "Explore Business Resources",
    link: "/resource-center/small-business-healthcare",
  },
  {
    icon: "🇺🇸",
    eyebrow: "VETERANS",
    title: "I'm a Veteran or Military Family",
    text: "Explore healthcare resources for veterans and military families.",
    cta: "Explore Veteran Resources",
    link: "/veterans-healthcare-access",
  },
];

export default function HomeFindHelp() {
  return (
    <section
      className="home-find-help"
      aria-labelledby="home-find-help-title"
    >
      <div className="container">

        <div className="home-find-help-heading">
          <span>START WITH WHAT YOU NEED</span>

          <h2 id="home-find-help-title">
            What Kind of Help Are You Looking For?
          </h2>

          <p>
            You don't need to understand healthcare programs or memberships
            first. Start with what you're trying to solve.
          </p>
        </div>

        <div className="home-find-help-grid">
          {helpOptions.map((option) => (
            <Link
              to={option.link}
              className="home-find-help-card"
              key={option.title}
            >
              <div className="home-find-help-icon" aria-hidden="true">
                {option.icon}
              </div>

              <div className="home-find-help-card-copy">
                <span>{option.eyebrow}</span>

                <h3>{option.title}</h3>

                <p>{option.text}</p>

                <strong>
                  {option.cta} →
                </strong>
              </div>
            </Link>
          ))}
        </div>

        <div className="home-find-help-unsure">
          <div>
            <span>NOT SURE WHERE TO START?</span>

            <strong>
              That's okay. Start with what's happening in your life.
            </strong>

            <p>
              We'll help you explore healthcare resources and practical
              options that may fit your situation.
            </p>
          </div>

          <Link to="/membership-finder">
            Help Me Find a Starting Point →
          </Link>
        </div>

      </div>
    </section>
  );
}