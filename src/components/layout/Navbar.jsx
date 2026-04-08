import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          Konnect<span>MD</span> Access
        </Link>

        <nav className="nav-links">
          <Link to="/plans">Plans</Link>
          <Link to="/get-details">Get Details</Link>
          <Link to="/book-call" className="nav-cta">
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}