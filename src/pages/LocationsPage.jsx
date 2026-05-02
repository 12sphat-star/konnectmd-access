import React from "react";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";
import CTA from "../components/CTA";

export default function LocationsPage() {
  return (
    <main className="page locations-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Serving Hampton Roads</p>
          <h1>KonnectMD Healthcare Access Locations</h1>
          <p className="lead">
            Find affordable healthcare access options across Norfolk, Virginia
            Beach, Chesapeake, Portsmouth, Hampton, Newport News, Suffolk, and
            surrounding Hampton Roads communities.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Choose Your City</h2>

          <div className="card-grid">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="info-card"
              >
                <h3>{location.city}</h3>
                <p>{location.intro}</p>
                <span>View healthcare options →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}