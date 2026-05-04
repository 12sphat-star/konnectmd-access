import React from "react";
import CTA from "../components/CTA";
import SEO from "../components/SEO";

export default function NewportNewsPage() {
  return (
    <>
      <SEO
        title="Healthcare Options in Newport News VA | KonnectMD"
        description="Looking for healthcare options in Newport News? KonnectMD helps families, entrepreneurs, workers, and small business owners explore affordable healthcare access."
        path="/locations/newport-news-va"
      />

      <main className="page city-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Newport News Healthcare Access</p>

            <h1>Healthcare Options for Newport News Families</h1>

            <p className="lead">
              From Denbigh to Oyster Point, KonnectMD helps Newport News
              residents explore healthcare access when traditional insurance
              feels too expensive or complicated.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Built for Working Newport News Households</h2>

            <p>
              Newport News has families, shipyard workers, entrepreneurs,
              commuters, and small business owners who need practical healthcare
              support that fits real life.
            </p>

            <h2>Where KonnectMD May Help</h2>

            <ul>
              <li>Doctor access from home</li>
              <li>Prescription savings</li>
              <li>Mental health support</li>
              <li>Family healthcare value</li>
              <li>Healthcare options for entrepreneurs and small businesses</li>
            </ul>

            <h2>Popular Searches</h2>

            <ul>
              <li>Healthcare Newport News VA</li>
              <li>Doctor without insurance Newport News</li>
              <li>Affordable healthcare Newport News</li>
              <li>Prescription savings Newport News</li>
            </ul>

            <h2>Serving Newport News Areas</h2>

            <p>
              Denbigh, Oyster Point, Port Warwick, Lee Hall, Hilton Village,
              Warwick, and surrounding communities.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}