import React from "react";
import CTA from "../components/CTA";

export default function HamptonPage() {
  return (
    <main className="page city-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Hampton Healthcare Access</p>
          <h1>Affordable Healthcare Access for Hampton Families</h1>
          <p className="lead">
            KonnectMD helps Hampton residents, military-connected families,
            workers, retirees, and small business owners access practical care
            without depending only on expensive traditional insurance.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Built for Real Hampton Life</h2>
          <p>
            Between work schedules, family responsibilities, and rising costs,
            getting healthcare should be easier. KonnectMD helps members access
            virtual urgent care, mental health support, prescription savings,
            and family healthcare options.
          </p>

          <h2>Why Hampton Residents Like KonnectMD</h2>
          <ul>
            <li>Talk to a doctor online for common needs</li>
            <li>Help when traditional insurance feels out of reach</li>
            <li>Mental health support from home</li>
            <li>Prescription savings tools</li>
            <li>Membership options for up to 7 household members</li>
          </ul>

          <h2>Serving Hampton Communities</h2>
          <p>
            Downtown Hampton, Phoebus, Buckroe Beach, Coliseum Central, Fox Hill,
            and surrounding communities.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}