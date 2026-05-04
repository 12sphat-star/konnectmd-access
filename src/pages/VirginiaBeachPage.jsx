import React from "react";
import CTA from "../components/CTA";
import SEO from "../components/SEO";

export default function VirginiaBeachPage() {
  return (
    <>
      <SEO
        title="Healthcare Options in Virginia Beach VA | KonnectMD"
        description="Looking for healthcare options in Virginia Beach? KonnectMD helps families, entrepreneurs, and small business owners explore affordable healthcare access."
        path="/locations/virginia-beach-va"
      />

      <main className="page city-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Virginia Beach Healthcare Access</p>

            <h1>Affordable Healthcare Options in Virginia Beach</h1>

            <p className="lead">
              From Town Center to Oceanfront, KonnectMD helps Virginia Beach
              residents explore healthcare access without the stress of high
              traditional insurance costs.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Built for Real Virginia Beach Life</h2>

            <p>
              Families, military-connected households, entrepreneurs,
              self-employed workers, and growing businesses often need a more
              practical healthcare conversation.
            </p>

            <h2>Where KonnectMD May Help</h2>

            <ul>
              <li>Doctor access from home</li>
              <li>Prescription savings</li>
              <li>Mental health support</li>
              <li>Family membership value</li>
              <li>Support for entrepreneurs and business owners</li>
            </ul>

            <h2>Popular Searches</h2>

            <ul>
              <li>Healthcare Virginia Beach</li>
              <li>Doctor without insurance Virginia Beach</li>
              <li>Affordable health options Virginia Beach</li>
              <li>Prescription savings Virginia Beach</li>
            </ul>

            <h2>Serving Virginia Beach Areas</h2>

            <p>
              Town Center, Oceanfront, Kempsville, Princess Anne, Green Run,
              Bayside, Red Mill, and surrounding communities.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}