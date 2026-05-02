import React from "react";
import CTA from "../components/CTA";

export default function SmallBusinessHealthcarePage() {
  return (
    <main className="page problem-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">For Small Business Owners</p>
          <h1>A Healthcare Access Option for Small Businesses</h1>
          <p className="lead">
            KonnectMD helps small business owners offer practical healthcare
            access support without the cost and complexity of traditional group
            health insurance.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Small Businesses Need Better Benefit Options</h2>
          <p>
            Many owners want to help their team, but traditional group coverage
            can be expensive and hard to manage. KonnectMD may help provide a
            simple healthcare access option for employees, contractors, and
            family households.
          </p>

          <h2>Good Fit For</h2>
          <ul>
            <li>Small businesses that cannot afford group coverage</li>
            <li>Barbershops, salons, contractors, and service teams</li>
            <li>Restaurants and local employers</li>
            <li>1099 workers and independent teams</li>
            <li>Business owners who want a simple benefit conversation</li>
          </ul>

          <h2>Why Owners Pay Attention</h2>
          <ul>
            <li>Simple healthcare access benefit</li>
            <li>Potential employee retention tool</li>
            <li>Useful for workers and families</li>
            <li>Less complicated than traditional group coverage</li>
          </ul>

          <h2>Common Questions</h2>
          <p>
            <strong>Is this group health insurance?</strong>
            <br />
            No. KonnectMD is a healthcare access membership-style solution, not
            traditional group health insurance.
          </p>

          <p>
            <strong>Can I offer this to my team?</strong>
            <br />
            Yes. KonnectMD may be positioned as an affordable healthcare access
            option for teams, contractors, and workers.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}