import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTA from "../components/CTA";

export default function FamilyCoveragePage() {
  return (
    <>
      <SEO
        title="Family Healthcare Alternatives in Hampton Roads | KonnectMD"
        description="Explore family healthcare alternatives in Hampton Roads. KonnectMD may help households access doctor support, prescription savings, mental health support, and more."
        path="/problems/family-healthcare"
      />

      <main className="page problem-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Family Healthcare Options</p>

            <h1>Family Healthcare Alternatives in Hampton Roads</h1>

            <p className="lead">
              KonnectMD helps families explore healthcare access options when
              traditional coverage feels too expensive, confusing, or out of
              reach.
            </p>

            <div className="hero-actions">
              <Link to="/get-details" className="btn btn-primary">
                Get Family Details
              </Link>

              <Link to="/locations" className="btn btn-secondary">
                Hampton Roads Coverage
              </Link>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Why Families Are Looking for Options</h2>

            <p>
              Families are dealing with rising costs, busy schedules, medication
              needs, mental health concerns, and the pressure of caring for more
              than one person. Many households need a simpler way to access care
              and savings.
            </p>

            <h2>Where KonnectMD May Help</h2>

            <ul>
              <li>Doctor access from home for common non-emergency needs</li>
              <li>Prescription savings support</li>
              <li>Mental health support options</li>
              <li>Dental, vision, and chiropractic access depending on plan</li>
              <li>Additional benefits that may support the household</li>
              <li>Eligible family members may access services in the selected membership level</li>
            </ul>

            <h2>Who This Helps</h2>

            <ul>
              <li>Parents trying to protect the household budget</li>
              <li>Families without affordable traditional coverage</li>
              <li>Entrepreneurs supporting spouses or children</li>
              <li>Households with prescription or mental health needs</li>
              <li>Families between jobs or waiting on other options</li>
            </ul>

            <h2>Popular Hampton Roads Searches</h2>

            <ul>
              <li>Affordable family healthcare Hampton Roads</li>
              <li>Family health insurance alternatives Norfolk VA</li>
              <li>Healthcare for family without insurance Virginia Beach</li>
              <li>Family doctor access Chesapeake VA</li>
              <li>Healthcare options for families Portsmouth VA</li>
            </ul>

            <h2>Built for More Than One Person</h2>

            <p>
              The value of KonnectMD becomes easier to understand when a
              household has more than one person who may need care, savings, or
              support. Instead of thinking person by person, families can review
              membership options that may support the household.
            </p>

            <h2>Common Questions</h2>

            <p>
              <strong>Can family members use KonnectMD?</strong>
              <br />
              Eligible household members may be able to access the services
              included in the selected membership level.
            </p>

            <p>
              <strong>Is KonnectMD health insurance?</strong>
              <br />
              No. KonnectMD is not traditional health insurance. It is a
              healthcare membership focused on access and savings.
            </p>

            <p>
              <strong>Can this help if my family does not have insurance?</strong>
              <br />
              Yes. KonnectMD may be worth reviewing for families looking for
              healthcare access without relying only on traditional coverage.
            </p>

            <p>
              <strong>What should I do next?</strong>
              <br />
              Start by reviewing the plan details or speak with a KonnectMD
              agent to understand what may fit your household.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}