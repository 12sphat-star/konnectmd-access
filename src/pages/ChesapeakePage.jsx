import React from "react";
import CTA from "../components/CTA";
import SEO from "../components/SEO";

export default function ChesapeakePage() {
  return (
    <>
      <SEO
        title="Healthcare Options in Chesapeake VA | KonnectMD"
        description="Looking for healthcare options in Chesapeake? KonnectMD helps families, workers, and business owners explore affordable healthcare access."
        path="/locations/chesapeake-va"
      />

      <main className="page city-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Chesapeake Healthcare Access</p>

            <h1>Affordable Healthcare Options in Chesapeake</h1>

            <p className="lead">
              From Great Bridge to Greenbrier, KonnectMD helps Chesapeake
              residents explore healthcare access without high traditional
              insurance pressure.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Built for Working Chesapeake Families</h2>

            <p>
              Chesapeake is full of working households, entrepreneurs,
              contractors, commuters, and families looking for practical
              healthcare solutions.
            </p>

            <h2>Where KonnectMD May Help</h2>

            <ul>
              <li>Virtual doctor access</li>
              <li>Prescription savings</li>
              <li>Mental health support</li>
              <li>Family healthcare value</li>
              <li>Healthcare support for self-employed workers</li>
            </ul>

            <h2>Popular Searches</h2>

            <ul>
              <li>Healthcare Chesapeake VA</li>
              <li>Doctor without insurance Chesapeake</li>
              <li>Affordable healthcare Chesapeake</li>
              <li>Prescription help Chesapeake VA</li>
            </ul>

            <h2>Serving Chesapeake Areas</h2>

            <p>
              Great Bridge, Greenbrier, Deep Creek, Western Branch, Hickory,
              South Norfolk, Grassfield, and nearby communities.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}