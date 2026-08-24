import "../../Styles/HamptonRoadsInitiative.css";
import { Link } from "react-router-dom";

export default function HamptonRoadsInitiative() {
  return (
    <section
      className="home-initiative"
      aria-labelledby="home-initiative-title"
    >
      <div className="container home-initiative-grid">

        <div className="home-initiative-number">
          <span>OUR FIRST COMMUNITY MISSION</span>

          <strong>100</strong>

          <p>
            Hampton Roads individuals &amp; families
          </p>
        </div>

        <div className="home-initiative-content">
          <span className="home-initiative-eyebrow">
            STARTING HERE IN HAMPTON ROADS
          </span>

          <h2 id="home-initiative-title">
            We're Turning Information Into Action.
          </h2>

          <p className="home-initiative-lead">
            The Hampton Roads Healthcare Access Initiative is our first local
            effort to help individuals and families better understand their
            healthcare-access options and connect them with practical
            information and resources.
          </p>

          <div className="home-initiative-purpose">
            <strong>Help starts with understanding your options.</strong>

            <p>
              Whether someone needs help finding care, managing medication
              costs, supporting their family or exploring another healthcare
              option, the first step is knowing where to start.
            </p>
          </div>

          <Link
            to="/hampton-roads-healthcare-access"
            className="home-initiative-button"
          >
            Explore the Hampton Roads Initiative →
          </Link>
        </div>

      </div>
    </section>
  );
}