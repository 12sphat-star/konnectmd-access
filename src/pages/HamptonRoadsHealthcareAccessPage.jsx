import { Link } from "react-router-dom";
import "../styles/HamptonRoadsHealthcareAccessPage.css";

function HamptonRoadsHealthcareAccessPage() {
  const needs = [
    {
      icon: "🩺",
      title: "I Need to See a Doctor",
      text: "Explore convenient 24/7 virtual physician access.",
      link: "/resource-center/telehealth",
      cta: "Explore Virtual Care",
    },
    {
      icon: "🧠",
      title: "I Need Support",
      text: "Mental, emotional, family, work and everyday-life support.",
      link: "/resource-center/behavioral-health",
      cta: "Find Support",
    },
    {
      icon: "💊",
      title: "Medication Costs",
      text: "Explore prescription resources and ways to reduce medication costs.",
      link: "/resource-center/prescription-savings",
      cta: "Prescription Resources",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "I Need Help for My Family",
      text: "Explore healthcare resources for individuals and families.",
      link: "/resource-center/family-healthcare",
      cta: "Family Resources",
    },
    {
      icon: "🏢",
      title: "I Want to Help My Employees",
      text: "Explore healthcare-access resources for small businesses and their teams.",
      link: "/resource-center/business-healthcare",
      cta: "Business Resources",
    },
    {
      icon: "🇺🇸",
      title: "I'm a Veteran",
      text: "Explore additional healthcare resources for veterans and their families.",
      link: "/resource-center/veterans",
      cta: "Veteran Resources",
    },
  ];

  return (
    <main className="hr-access-page">

      {/* SECTION 1 — HERO */}
      <section className="hr-hero">
        <div className="hr-hero-overlay" />

        <div className="hr-container hr-hero-content">
          <p className="hr-eyebrow">
            HAMPTON ROADS HEALTHCARE ACCESS INITIATIVE
          </p>

          <h1>What Do You Need Help With Today?</h1>

          <p className="hr-hero-lead">
            Healthcare can be complicated.
            <strong> Finding help shouldn't be.</strong>
          </p>

          <p className="hr-hero-copy">
            Start with what you or your family need. We'll help you explore
            healthcare resources and practical options that may help.
          </p>

          <div className="hr-hero-actions">
            <a href="#find-help" className="hr-btn hr-btn-primary">
              Find a Resource
            </a>

            <Link to="/membership-finder" className="hr-btn hr-btn-secondary">
              Explore Healthcare Options
            </Link>
          </div>

          <div className="hr-first-100">
            <span>OUR FIRST MISSION</span>
            <strong>Help 100 Hampton Roads Individuals & Families</strong>
          </div>
        </div>
      </section>

      {/* SECTION 2 — QUICK SIGNALS */}
      <section className="hr-signals">
        <div className="hr-container hr-signal-grid">

          <div className="hr-signal">
            <strong>24/7</strong>
            <span>Physician Access</span>
          </div>

          <div className="hr-signal">
            <strong>Mental + Life</strong>
            <span>Support</span>
          </div>

          <div className="hr-signal">
            <strong>Prescription</strong>
            <span>Help</span>
          </div>

          <div className="hr-signal">
            <strong>Family</strong>
            <span>Healthcare Access</span>
          </div>

        </div>
      </section>

      {/* SECTION 3 — START WITH THE NEED */}
      <section id="find-help" className="hr-needs">
        <div className="hr-container">

          <div className="hr-section-heading">
            <p>START WITH WHAT'S HAPPENING IN YOUR LIFE</p>
            <h2>What Brought You Here Today?</h2>
            <span>
              You don't need to know which program or service you need.
              Choose what sounds most like your situation.
            </span>
          </div>

          <div className="hr-needs-grid">
            {needs.map((need) => (
              <Link
                to={need.link}
                className="hr-need-card"
                key={need.title}
              >
                <div className="hr-need-icon">{need.icon}</div>

                <div>
                  <h3>{need.title}</h3>
                  <p>{need.text}</p>
                  <span className="hr-card-link">
                    {need.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

export default HamptonRoadsHealthcareAccessPage;