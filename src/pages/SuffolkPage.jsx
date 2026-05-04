import React from "react";
import CTA from "../components/CTA";
import SEO from "../components/SEO";

export default function SuffolkPage() {
  return (
    <>
      <SEO
        title="Healthcare Options in Suffolk VA | KonnectMD"
        description="Looking for healthcare options in Suffolk? KonnectMD helps families, entrepreneurs, commuters, and small business owners explore affordable healthcare access."
        path="/locations/suffolk-va"
      />

      <main className="page city-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Suffolk Healthcare Access</p>

            <h1>Affordable Healthcare Options in Suffolk</h1>

            <p className="lead">
              From North Suffolk to Downtown Suffolk, KonnectMD helps families,
              entrepreneurs, commuters, and growing households explore practical
              healthcare access options.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Built for Suffolk Families and Growth</h2>

            <p>
              Suffolk continues to grow, and many households need healthcare
              options that work for busy schedules, family budgets, and real
              everyday needs.
            </p>

            <h2>Where KonnectMD May Help</h2>

            <ul>
              <li>Virtual doctor access for common needs</li>
              <li>Prescription savings</li>
              <li>Mental health support</li>
              <li>Family membership value</li>
              <li>Support for entrepreneurs and small business owners</li>
            </ul>

            <h2>Popular Searches</h2>

            <ul>
              <li>Healthcare Suffolk VA</li>
              <li>Doctor without insurance Suffolk</li>
              <li>Affordable healthcare Suffolk VA</li>
              <li>Health insurance alternatives Suffolk</li>
            </ul>

            <h2>Serving Suffolk Areas</h2>

            <p>
              Harbour View, North Suffolk, Downtown Suffolk, Chuckatuck,
              Whaleyville, and surrounding communities.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}