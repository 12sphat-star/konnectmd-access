import React from "react";
import CTA from "../components/CTA";

export default function NewportNewsPage() {
  return (
    <main className="page city-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Newport News Healthcare Access</p>
          <h1>Healthcare Access That Works for Newport News Families</h1>
          <p className="lead">
            KonnectMD helps Newport News workers, families, entrepreneurs, and
            busy households access care and savings without the normal stress.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Made for Working People</h2>
          <p>
            Newport News is full of hardworking people balancing jobs, family,
            and daily responsibilities. KonnectMD gives members easier access to
            care through virtual urgent care, prescription savings, mental
            health support, and more.
          </p>

          <h2>Popular Benefits in Newport News</h2>
          <ul>
            <li>Doctor access from home</li>
            <li>Affordable care support</li>
            <li>Prescription savings</li>
            <li>Mental health support</li>
            <li>Family membership options</li>
          </ul>

          <h2>Serving Newport News Communities</h2>
          <p>
            Denbigh, Oyster Point, Port Warwick, Lee Hall, Hilton Village,
            Warwick, and surrounding communities.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}