import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isLaunchPage = location.pathname === "/launch";

  return (
    <header className={isLaunchPage ? "navbar launch-navbar" : "navbar"}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          Konnect<span>MD</span> Access
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links desktop-nav">
          <Link to="/plans">Plans</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/get-details">Get Details</Link>
          <Link to="/join-the-team">Join the Team</Link>

          <Link to="/launch" className="nav-cta">
            May 21 Launch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/plans" onClick={() => setOpen(false)}>
            Plans
          </Link>

          <Link to="/locations" onClick={() => setOpen(false)}>
            Locations
          </Link>

          <Link to="/get-details" onClick={() => setOpen(false)}>
            Get Details
          </Link>

          <Link to="/join-the-team" onClick={() => setOpen(false)}>
            Join the Team
          </Link>

          <Link
            to="/launch"
            onClick={() => setOpen(false)}
            className="mobile-cta"
          >
            May 21 Launch
          </Link>
        </div>
      )}
    </header>
  );
}