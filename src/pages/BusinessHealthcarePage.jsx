import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTA from "../components/CTA";

export default function BusinessHealthcarePage() {
  return (
    <>
      <SEO
        title="Small Business Health Benefits in Hampton Roads | KonnectMD"
        description="Looking for small business health benefits in Hampton Roads? Explore healthcare alternatives for employees, contractors, and growing teams with KonnectMD."
        path="/problems/small-business-healthcare"
      />

      <main className="page problem-page">
       <section className="hero">
  <div className="container hero-grid">

    <div className="hero-content">

      <p className="eyebrow">Healthcare Options for Growing Businesses</p>

      <h1>Small Business Health Benefits in Hampton Roads</h1>

      <p className="lead">
        Many small business owners want to support their people but
        traditional group health plans can be expensive, confusing, and
        difficult to manage. KonnectMD may offer a simpler healthcare
        conversation for teams, contractors, and growing businesses.
      </p>

      <div className="hero-actions">
        <Link to="/get-details" className="btn btn-primary">
          Get Plan Details
        </Link>

        <Link to="/book-call" className="btn btn-secondary">
          Book a Business Call
        </Link>
      </div>

    </div>

<div className="business-hero-image">
  <img
    src="/images/business-owner-healthcare-hero.jpg"
    alt="Business owner reviewing healthcare options for themselves and their growing business"
    loading="eager"
  />
</div>

  </div>
</section>

        <section className="content-section">
          <div className="container">
            <h2>Why Small Businesses Need Better Options</h2>

            <p>
              Business owners are trying to compete for talent, retain good
              people, and show employees they care. But many cannot absorb the
              cost of traditional group insurance or the admin burden that comes
              with it.
            </p>

            <p>
              That is why more owners are exploring healthcare access models
              that can support their people in a more flexible way.
            </p>

            <h2>KonnectMD May Help With</h2>

            <ul>
              <li>Healthcare support conversations for employees</li>
              <li>Benefit-style value for contractors and 1099 workers</li>
              <li>Virtual doctor access options</li>
              <li>Prescription savings support</li>
              <li>Mental health support access</li>
              <li>Family-friendly household membership value</li>
              <li>Simple onboarding and easy explanation</li>
            </ul>

            <h2>Who This Is Built For</h2>

            <ul>
              <li>Small businesses with 1–50 workers</li>
              <li>Restaurants and hospitality teams</li>
              <li>Barbershops, salons, and service businesses</li>
              <li>Construction and field service companies</li>
              <li>Retail stores and local operators</li>
              <li>Growing startups and entrepreneurial teams</li>
            </ul>

            <h2>Popular Hampton Roads Searches</h2>

            <ul>
              <li>Small business health benefits Norfolk VA</li>
              <li>Affordable employee benefits Virginia Beach</li>
              <li>Healthcare for contractors Chesapeake VA</li>
              <li>Small business health insurance alternatives Hampton Roads</li>
              <li>Benefits for 1099 workers Portsmouth VA</li>
            </ul>

            <h2>Why Owners Like This Conversation</h2>

            <p>
              It gives them another option to review when traditional plans feel
              out of reach. It may also help with recruiting, retention, morale,
              and showing people they matter.
            </p>

            <h2>Serving Hampton Roads Businesses</h2>

            <p>
              KonnectMD is helping business owners in Norfolk, Virginia Beach,
              Chesapeake, Portsmouth, Hampton, Newport News, Suffolk, and nearby
              communities explore healthcare membership solutions that may fit
              their team structure and budget.
            </p>

            <h2>Common Questions</h2>

            <p>
              <strong>
                Is KonnectMD traditional small business health insurance?
              </strong>
              <br />
              No. KonnectMD is not traditional health insurance. It is a
              healthcare membership focused on access and savings.
            </p>

            <p>
              <strong>Can this help contractors and 1099 workers?</strong>
              <br />
              Yes. Many owners use this as a benefits conversation for mixed
              teams, contractors, and independent workers.
            </p>

            <p>
              <strong>Can small teams use this?</strong>
              <br />
              Yes. This can be worth reviewing for businesses of many sizes.
            </p>

            <p>
              <strong>What is the next step?</strong>
              <br />
              Book a quick call or review the available options to see what may
              fit your team.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}