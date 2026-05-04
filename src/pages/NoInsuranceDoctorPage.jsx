import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTA from "../components/CTA";

export default function NoInsuranceDoctorPage() {
  return (
    <>
      <SEO
        title="Need a Doctor Without Insurance in Hampton Roads | KonnectMD"
        description="Need to see a doctor without insurance in Hampton Roads? KonnectMD may help with virtual doctor access, prescription savings, family support, and healthcare membership options."
        path="/problems/doctor-without-insurance"
      />

      <main className="page problem-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Doctor Access Without Traditional Insurance</p>

            <h1>Need a Doctor Without Insurance in Hampton Roads?</h1>

            <p className="lead">
              If you are uninsured, between jobs, self-employed, or tired of
              expensive healthcare costs, KonnectMD may help you access care
              without waiting weeks or dealing with traditional insurance
              confusion.
            </p>

            <div className="hero-actions">
              <Link to="/get-details" className="btn btn-primary">
                Get Plan Details
              </Link>

              <Link to="/locations" className="btn btn-secondary">
                See Hampton Roads Locations
              </Link>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>What Do You Do When You Need Care but Do Not Have Insurance?</h2>

            <p>
              Many people delay care because they are worried about the bill.
              Some are self-employed. Some are between jobs. Some missed open
              enrollment. Others simply cannot afford traditional coverage.
            </p>

            <p>
              KonnectMD is not traditional health insurance. It is a healthcare
              membership designed to help members access services and savings in
              a simpler way.
            </p>

            <h2>KonnectMD May Help With</h2>

            <ul>
              <li>Doctor access from home for many common non-emergency needs</li>
              <li>Virtual urgent care options</li>
              <li>Prescription savings</li>
              <li>Mental health support</li>
              <li>Family membership value</li>
              <li>Additional healthcare savings and support options</li>
            </ul>

            <h2>Who This Page Is For</h2>

            <ul>
              <li>People without health insurance</li>
              <li>Entrepreneurs and self-employed workers</li>
              <li>Families trying to control healthcare costs</li>
              <li>People between jobs</li>
              <li>Small business owners looking for practical options</li>
              <li>Anyone searching for doctor access in Hampton Roads</li>
            </ul>

            <h2>Popular Searches This Page Answers</h2>

            <ul>
              <li>Doctor without insurance Hampton Roads</li>
              <li>Need a doctor without insurance Norfolk VA</li>
              <li>Online doctor without insurance Virginia Beach</li>
              <li>Affordable doctor visit Chesapeake VA</li>
              <li>Doctor access without health insurance Portsmouth VA</li>
            </ul>

            <h2>Serving Hampton Roads</h2>

            <p>
              KonnectMD helps people across Norfolk, Virginia Beach, Chesapeake,
              Portsmouth, Hampton, Newport News, Suffolk, and surrounding areas
              review healthcare membership options that may fit their household
              or business.
            </p>

            <h2>Common Questions</h2>

            <p>
              <strong>Can I use KonnectMD if I do not have insurance?</strong>
              <br />
              Yes. KonnectMD is designed to help members access healthcare
              services and savings without relying only on traditional health
              insurance.
            </p>

            <p>
              <strong>Is KonnectMD health insurance?</strong>
              <br />
              No. KonnectMD is not traditional health insurance. It is a
              healthcare membership focused on access and savings.
            </p>

            <p>
              <strong>Can I talk to a doctor online?</strong>
              <br />
              Depending on the selected membership option, members may have
              access to virtual care for many common non-emergency needs.
            </p>

            <p>
              <strong>What should I do next?</strong>
              <br />
              Start by reviewing the available options or speaking with a
              KonnectMD agent who can explain what may fit your situation.
            </p>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}