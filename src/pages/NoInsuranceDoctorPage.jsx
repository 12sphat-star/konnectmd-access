import React from "react";
import CTA from "../components/CTA";

export default function NoInsuranceDoctorPage() {
  return (
    <main className="page problem-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Care Without Traditional Insurance</p>
          <h1>Need to See a Doctor Without Insurance?</h1>
          <p className="lead">
            If you are uninsured, between jobs, self-employed, or tired of
            expensive healthcare costs, KonnectMD may help you access care
            without the usual stress.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>What Do You Do When You Need Care Now?</h2>
          <p>
            Many people wait too long because they do not have traditional
            insurance or they are afraid of the bill. KonnectMD gives members a
            practical way to access virtual urgent care, prescription savings,
            mental health support, and family healthcare options.
          </p>

          <h2>This Page Is For People Searching</h2>
          <ul>
            <li>Need a doctor without insurance</li>
            <li>See a doctor online today</li>
            <li>Doctor visit without health insurance</li>
            <li>Affordable healthcare in Hampton Roads</li>
            <li>Healthcare options for self-employed workers</li>
          </ul>

          <h2>KonnectMD May Help With</h2>
          <ul>
            <li>Online doctor visits for common care needs</li>
            <li>Virtual urgent care access</li>
            <li>Prescription savings</li>
            <li>Mental health support</li>
            <li>Family membership options</li>
          </ul>

          <h2>Common Questions</h2>
          <p>
            <strong>Can I use KonnectMD if I do not have insurance?</strong>
            <br />
            Yes. KonnectMD is designed to help people access care and savings
            even if they do not have traditional health insurance.
          </p>

          <p>
            <strong>Is this good for someone between jobs?</strong>
            <br />
            Yes. Many people look for alternatives while between jobs,
            self-employed, or waiting for other coverage.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}