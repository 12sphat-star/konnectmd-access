import React from "react";
import CTA from "../components/CTA";

export default function FamilyCoveragePage() {
  return (
    <main className="page problem-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Healthcare for Families</p>
          <h1>Affordable Family Healthcare Access in Hampton Roads</h1>
          <p className="lead">
            KonnectMD helps families access care, savings, and support without
            the pressure of expensive traditional healthcare options.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Built for Real Families</h2>
         <p>
            Many families need help with doctor visits, prescriptions, mental health,
            dental, vision, and everyday healthcare needs. KonnectMD offers a practical
            membership-style healthcare access option that can cover up to 7 family
            members on one plan, without increasing the monthly cost for each additional
            household member.
         </p>
         <p>
            Many families need help with doctor visits, prescriptions, mental health,
            dental, vision, and everyday healthcare needs. KonnectMD offers a practical
            membership-style healthcare access option that can cover up to 7 family
            members on one plan, without increasing the monthly cost for each additional
            household member.
         </p>

          <h2>Family Benefits May Include</h2>
          <ul>
            <li>24/7 virtual urgent care</li>
            <li>Mental health support</li>
            <li>Prescription savings</li>
            <li>Dental, vision, and chiropractic access</li>
            <li>Options for multiple household members</li>
          </ul>

          <h2>Common Questions</h2>
          <p>
            <strong>Can my family use KonnectMD?</strong>
            <br />
            Yes, KonnectMD is designed to help individuals and families access
            care and savings.
          </p>

          <p>
            <strong>Is this only for people without insurance?</strong>
            <br />
            No. Some people use it as an additional healthcare access tool.
          </p>
          <p className="small-note">
           *Benefits and membership details subject to current KonnectMD plan terms.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}