import React from "react";
import CTA from "../components/CTA";

export default function PrescriptionSavingsPage() {
  return (
    <main className="page problem-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Lower Medication Costs</p>
          <h1>Need Help Saving Money on Prescriptions?</h1>
          <p className="lead">
            KonnectMD helps members access prescription savings options that may
            reduce the cost of everyday medications.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Prescription Costs Add Up Fast</h2>
          <p>
            A doctor visit is only part of the problem. If the medication costs
            too much, people may delay filling it or skip it completely.
            KonnectMD gives members access to tools that may help lower
            prescription costs.
          </p>

          <h2>This Helps People Searching For</h2>
          <ul>
            <li>Cheap prescriptions near me</li>
            <li>Prescription discounts without insurance</li>
            <li>Medication savings for families</li>
            <li>Help paying for prescriptions</li>
            <li>Affordable healthcare options in Hampton Roads</li>
          </ul>

          <h2>Why It Matters</h2>
          <p>
            Prescription savings can make healthcare feel more manageable for
            families, workers, retirees, and small business owners.
          </p>

          <h2>Common Questions</h2>
          <p>
            <strong>Do I need insurance to save on prescriptions?</strong>
            <br />
            KonnectMD is designed to help members access healthcare savings
            without depending only on traditional insurance.
          </p>

          <p>
            <strong>Can this help my family?</strong>
            <br />
            Yes. Families may benefit from prescription savings along with other
            healthcare access tools.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}