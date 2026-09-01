import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [healthcareOpen, setHealthcareOpen] = useState(false);

  const closeMenus = () => {
    setOpen(false);
    setHealthcareOpen(false);
  };

  const toggleHealthcare = () => {
    setHealthcareOpen((current) => !current);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* BRAND */}
        <Link to="/" className="brand" onClick={closeMenus}>
          Konnect<span>MD</span> Access
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-links desktop-nav">

          <Link to="/plans" onClick={closeMenus}>
            Plans
          </Link>

          {/* HEALTHCARE FOR DROPDOWN */}
          <div className="nav-dropdown">

            <button
              type="button"
              className="nav-dropdown-button"
              onClick={toggleHealthcare}
              aria-expanded={healthcareOpen}
              aria-haspopup="true"
            >
              Healthcare For
              <span className="nav-dropdown-arrow">
                {healthcareOpen ? "▲" : "▼"}
              </span>
            </button>

            {healthcareOpen && (
              <div className="healthcare-dropdown">

                <Link to="/family" onClick={closeMenus}>
                  Individuals &amp; Families
                </Link>

                <Link
                  to="/resource-center/business-healthcare"
                  onClick={closeMenus}
                >
                  Business Owners &amp; Self-Employed
                </Link>

                <Link
                  to="/organizations"
                  onClick={closeMenus}
                >
                  Churches, Nonprofits &amp; Organizations
                </Link>

                <Link
                  to="/veterans-healthcare-access"
                  onClick={closeMenus}
                >
                  Veterans &amp; Military Families
                </Link>

              </div>
            )}

          </div>

          <Link to="/locations" onClick={closeMenus}>
            Locations
          </Link>

          <Link to="/resource-center" onClick={closeMenus}>
            Resources
          </Link>

          <Link to="/join-the-team" onClick={closeMenus}>
            Join the Team
          </Link>

          <Link
            to="/book-call"
            className="nav-cta"
            onClick={closeMenus}
          >
            Book a Call
          </Link>

        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="hamburger"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">

          <Link to="/" onClick={closeMenus}>
            Home
          </Link>

          <Link to="/plans" onClick={closeMenus}>
            Plans
          </Link>

          <div className="mobile-menu-label">
            Healthcare For
          </div>

          <Link to="/family" onClick={closeMenus}>
            Individuals &amp; Families
          </Link>

          <Link
            to="/resource-center/business-healthcare"
            onClick={closeMenus}
          >
            Business Owners &amp; Self-Employed
          </Link>

          <Link to="/organizations" onClick={closeMenus}>
            Churches, Nonprofits &amp; Organizations
          </Link>

          <Link
            to="/veterans-healthcare-access"
            onClick={closeMenus}
          >
            Veterans &amp; Military Families
          </Link>

          <Link to="/locations" onClick={closeMenus}>
            Locations
          </Link>

          <Link to="/resource-center" onClick={closeMenus}>
            Resources
          </Link>

          <Link to="/join-the-team" onClick={closeMenus}>
            Join the Team
          </Link>

          <Link
            to="/book-call"
            className="mobile-cta"
            onClick={closeMenus}
          >
            Book a Call
          </Link>

        </div>
      )}

    </header>
  );
}