import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          Konnect<span>MD</span> Access
        </Link>

        {/* Desktop Navigation */}
       <nav className="nav-links desktop-nav">
  <Link to="/plans">Plans</Link>
  <Link to="/locations">Locations</Link>
  <Link to="/insights">Insights</Link>
  <Link to="/get-details">Get Details</Link>
 <a
  href="https://konnectmdagency.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  Join the Team
</a>
  <Link to="/book-call" className="nav-cta">
    Book a Call
  </Link>
</nav>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
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

          <Link to="/locations" onClick={() => setOpen(false)}>
  Locations
</Link>

<Link to="/insights" onClick={() => setOpen(false)}>
  Insights
</Link>

<Link to="/get-details" onClick={() => setOpen(false)}>
  Get Details
</Link>

          <Link to="/get-details" onClick={() => setOpen(false)}>
            Get Details
          </Link>

<a
  href="https://konnectmdagency.com/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setOpen(false)}
>
  Join the Team
</a>

          <Link
            to="/book-call"
            onClick={() => setOpen(false)}
            className="mobile-cta"
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}