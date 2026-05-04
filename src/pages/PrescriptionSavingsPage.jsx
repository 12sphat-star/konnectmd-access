import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTA from "../components/CTA";

export default function PrescriptionSavingsPage() {
  return (
    <>
      <SEO
        title="Prescription Savings in Hampton Roads | KonnectMD"
        description="Need help saving money on prescriptions in Hampton Roads? KonnectMD may help families, entrepreneurs, and small business owners access medication savings."
        path="/problems/prescription-savings"
      />

      <main className="page problem-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Medication Savings</p>

            <h1>Prescription Savings in Hampton Roads</h1>

            <p className="lead">
              Prescription costs can hit families every month. KonnectMD may
              help members access savings tools that make everyday medications
              more manageable.
            </p>

            <div className="hero-actions">
              <Link to="/get-details" className="btn btn-primary">
                Get Rx Savings Details
              </Link>

              <Link to="/locations" className="btn btn-secondary">
                Hampton Roads Coverage
              </Link>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Medication Costs Add Up Fast</h2>
            <p>
              A doctor visit is only part of the healthcare cost problem. If the
              medication is too expensive, people may delay filling it, skip
              doses, or go without what they need.
            </p>

            <h2>KonnectMD May Help People Looking For</h2>
            <ul>
              <li>Cheap prescriptions near me</li>
              <li>Prescription discounts without insurance</li>
              <li>Medication savings for families</li>
              <li>Help lowering monthly medication costs</li>
              <li>Healthcare savings in Hampton Roads</li>
            </ul>

            <h2>Who This Helps</h2>
            <ul>
              <li>Families managing multiple prescriptions</li>
              <li>People without traditional insurance</li>
              <li>Entrepreneurs and self-employed workers</li>
              <li>Retirees not yet on Medicare</li>
              <li>Small business owners and their households</li>
            </ul>

            <h2>Popular Hampton Roads Searches</h2>
            <ul>
              <li>Prescription savings Norfolk VA</li>
              <li>Cheap prescriptions Virginia Beach</li>
              <li>Medication discounts Chesapeake VA</li>
              <li>Prescription help Portsmouth VA</li>
              <li>Rx savings Hampton Roads</li>
            </ul>

            <h2>Common Questions</h2>

            <p>
              <strong>Can KonnectMD help with prescriptions?</strong>
              <br />
              Yes. Prescription savings may be part of the value available
              through selected KonnectMD membership options.
            </p>

            <p>
              <strong>Do I need insurance to save on prescriptions?</strong>
              <br />
              KonnectMD is not traditional health insurance. It is designed to
              help members access services and savings.
            </p>

            <p>
              <strong>What should I do next?</strong>
              <br />
              Review the available options or speak with a KonnectMD agent to
              understand what may fit your household.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}