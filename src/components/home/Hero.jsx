import "../../Styles/Hero.css";
import { Link } from "react-router-dom";

const accessChallenges = [
  "Rising healthcare and out-of-pocket costs",
  "Changes affecting Marketplace coverage and affordability",
  "Prescription costs putting pressure on household budgets",
  "Individuals, families and small businesses looking for practical options",
];

export default function Hero() {
  return (
    <section className="hero-v2" aria-labelledby="homepage-hero-title">
      <div className="container hero-v2-grid">

        <div className="hero-v2-copy">
          <p className="hero-v2-eyebrow">
            KonnectMD Access | Healthcare Access Resource Center
          </p>

          <h1 id="homepage-hero-title" className="hero-v2-title">
            Healthcare Is Changing.
            <span> Knowing Your Options Matters.</span>
          </h1>

          <p className="hero-v2-lead">
            Healthcare costs are rising, coverage is changing, and many
            individuals, families and small businesses are trying to understand
            what they can afford and where to turn for help.
          </p>

          <p className="hero-v2-resource-statement">
            <strong>KonnectMD Access is here to help.</strong> Explore healthcare
            resources, understand your options and discover practical solutions
            for accessing care.
          </p>

          <ul
            className="hero-v2-trust-list"
            aria-label="Healthcare access challenges"
          >
            {accessChallenges.map((point) => (
              <li key={point}>
                <span className="hero-v2-check" aria-hidden="true">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="hero-v2-actions">
            <a href="#learning-center" className="btn btn-primary">
              Explore Healthcare Resources
            </a>

            <Link
              to="/hampton-roads-healthcare-access"
              className="btn btn-secondary"
            >
              Hampton Roads Initiative
            </Link>
          </div>

          <p className="hero-v2-small-note">
            Start with information. Understand your options. Then decide what
            makes sense for you.
          </p>
        </div>

        <div className="hero-v2-visual">
          <div className="hero-v2-image-frame">
            <img
              src="/images/hero-healthcare-resource-center.jpg"
              alt="Individuals and families exploring healthcare access resources"
              className="hero-v2-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}