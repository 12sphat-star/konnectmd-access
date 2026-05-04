import React from "react";
import CTA from "../components/CTA";
import SEO from "../components/SEO";

export default function HamptonPage() {
  return (
    <>
      <SEO
        title="Healthcare Options in Hampton VA | KonnectMD"
        description="Looking for healthcare options in Hampton? KonnectMD helps families, entrepreneurs, military-connected households, and business owners explore affordable healthcare access."
        path="/locations/hampton-va"
      />

      <main className="page city-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Hampton Healthcare Access</p>

            <h1>Affordable Healthcare Options in Hampton</h1>

            <p className="lead">
              From Phoebus to Coliseum Central, KonnectMD helps Hampton
              residents explore healthcare access for families, entrepreneurs,
              and households looking for practical support.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Built for Hampton Families and Households</h2>

            <p>
              Hampton is home to military-connected families, retirees,
              entrepreneurs, workers, and small business owners who need simpler
              healthcare access conversations.
            </p>

            <h2>Where KonnectMD May Help</h2>

            <ul>
              <li>Virtual doctor access for common needs</li>
              <li>Prescription savings</li>
              <li>Mental health support</li>
              <li>Family membership value</li>
              <li>Support for entrepreneurs and small businesses</li>
            </ul>

            <h2>Popular Searches</h2>

            <ul>
              <li>Healthcare Hampton VA</li>
              <li>Doctor without insurance Hampton</li>
              <li>Affordable healthcare Hampton VA</li>
              <li>Health insurance alternatives Hampton</li>
            </ul>

            <h2>Serving Hampton Areas</h2>

            <p>
              Downtown Hampton, Phoebus, Buckroe Beach, Coliseum Central, Fox
              Hill, Wythe, and surrounding communities.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}