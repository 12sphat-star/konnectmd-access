import React from "react";
import CTA from "../components/CTA";
import SEO from "../components/SEO";

export default function PortsmouthPage() {
  return (
    <>
      <SEO
        title="Healthcare Options in Portsmouth VA | KonnectMD"
        description="Looking for healthcare options in Portsmouth? KonnectMD helps families, entrepreneurs, and small business owners explore affordable healthcare access."
        path="/locations/portsmouth-va"
      />

      <main className="page city-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Portsmouth Healthcare Access</p>

            <h1>Healthcare Options for Portsmouth Families</h1>

            <p className="lead">
              From Churchland to Olde Towne, KonnectMD helps Portsmouth
              residents explore healthcare access when traditional insurance
              feels too expensive or confusing.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Built for Real Portsmouth Needs</h2>

            <p>
              Portsmouth has working families, entrepreneurs, retirees,
              self-employed residents, and small business owners who need
              practical ways to access care and savings.
            </p>

            <h2>Where KonnectMD May Help</h2>

            <ul>
              <li>Doctor access from home</li>
              <li>Prescription savings</li>
              <li>Mental health support</li>
              <li>Family healthcare value</li>
              <li>Healthcare access for people without traditional insurance</li>
            </ul>

            <h2>Popular Searches</h2>

            <ul>
              <li>Healthcare Portsmouth VA</li>
              <li>Doctor without insurance Portsmouth</li>
              <li>Affordable healthcare Portsmouth VA</li>
              <li>Prescription savings Portsmouth</li>
            </ul>

            <h2>Serving Portsmouth Areas</h2>

            <p>
              Churchland, Olde Towne, Cradock, Midtown, Port Norfolk, Cavalier
              Manor, and surrounding communities.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}