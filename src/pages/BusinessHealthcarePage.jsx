import React, { useState } from "react";
import SEO from "../components/SEO";
import "../Styles/BusinessHealthcarePage.css";

export default function BusinessHealthcarePage() {
 const [formData, setFormData] = useState({
  teamSize: "",
  priority: "",
  currentGap: "",
  name: "",
  businessName: "",
  email: "",
  phone: "",
  preferredContact: "",
  challenge: "",
});

const [submitting, setSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);

const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };


const handleSubmit = async (event) => {
  event.preventDefault();
  setSubmitting(true);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzVi3DNoqrf9b7k-aFBA-HjY8igPYekeSm7g65DsfaUmSZFYk5wMsuCNU4Q8nuOaFYW3A/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      }
    );

    setSubmitted(true);

    setFormData({
      teamSize: "",
      priority: "",
      currentGap: "",
      name: "",
      businessName: "",
      email: "",
      phone: "",
      preferredContact: "",
      challenge: "",
    });
  } catch (error) {
    console.error("Business lead submission failed:", error);
    alert(
      "We couldn't submit your information. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
};
  return (
    <>
      <SEO
        title="Affordable Employee Healthcare Benefits | KonnectMD for Business"
        description="Explore an affordable healthcare-access benefit for employees and families with 24/7 doctor access, mental health support, prescription benefits, and more."
        path="/resource-center/business-healthcare"
      />

      <main className="business-funnel">

        {/* PAIN FIRST */}
        <section className="business-stat-section">
          <div className="container business-stat-shell">
            <p className="business-eyebrow">
              THE COST OF TAKING CARE OF YOUR PEOPLE KEEPS RISING
            </p>

            <div className="business-stat-number">$26,054</div>

            <h1>
              Average annual family health-plan premium at businesses
              with 10–199 workers.
            </h1>

            <p className="business-stat-source">
              KFF 2025 Employer Health Benefits Survey
            </p>

            <p className="business-stat-support">
              And among smaller businesses that do not offer health benefits,
              the most common reason is simple:
            </p>

            <div className="business-stat-punch">
              <strong>THE COST IS TOO HIGH.</strong>
            </div>
          </div>
        </section>

        {/* OWNER QUESTION */}
        <section className="business-question-section">
          <div className="container business-question-shell">
            <p className="business-eyebrow">SO WHAT DO YOU DO?</p>

            <h2>
              WHAT DO YOU TELL A GREAT EMPLOYEE
              <span>WHEN THEY ASK, “WHAT BENEFITS DO YOU OFFER?”</span>
            </h2>

            <p>
              You want to take care of your people.
              But traditional health benefits may not fit your business
              or your budget.
            </p>

            <h3>Offering nothing does not have to be your only answer.</h3>
          </div>
        </section>

        {/* REAL-LIFE PAIN */}
        <section className="business-pain-section">
          <div className="container">
            <div className="business-section-heading">
              <p className="business-eyebrow">YOUR PEOPLE HAVE REAL LIVES</p>
              <h2>Their healthcare problems do not stop when they clock in.</h2>
            </div>

            <div className="business-pain-grid">

              <article className="business-pain-card">
                <span>9:30 PM</span>
                <h3>The doctor's office is closed.</h3>
                <p>
                  An employee or family member needs care and now has to decide
                  whether to wait, miss work tomorrow, or find another option.
                </p>
              </article>

              <article className="business-pain-card">
                <span>REAL LIFE</span>
                <h3>One of your best people is struggling.</h3>
                <p>
                  Stress, anxiety, relationships, grief, family problems and
                  financial pressure can follow people into the workplace.
                </p>
              </article>

              <article className="business-pain-card">
                <span>WORKDAY</span>
                <h3>Routine care can cost hours away from the job.</h3>
                <p>
                  Getting appropriate everyday care should not always require
                  losing half a workday in a waiting room.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* SOLUTION REVEAL */}
        <section className="business-solution-intro">
          <div className="container business-solution-shell">
            <p className="business-eyebrow">ANOTHER CHOICE</p>

            <h2>WHAT IF $2 A DAY COULD HELP CHANGE THAT?</h2>

            <p className="business-solution-lead">
              KonnectMD gives businesses another way to provide meaningful
              healthcare access, mental health support and everyday healthcare
              value to employees and their families.
            </p>

            <p className="business-not-insurance">
              KonnectMD is not health insurance.
            </p>
          </div>
        </section>

        {/* PAIN -> SOLUTION */}
        <section className="business-benefits-section">
          <div className="container">

            <div className="business-benefit-row">
              <div>
                <p className="business-problem-label">
                  THE DOCTOR'S OFFICE IS CLOSED
                </p>
                <h3>24/7 Doctor Access</h3>
              </div>

              <p>
                Every KonnectMD plan provides 24/7 virtual doctor access for
                appropriate non-emergency healthcare needs.
              </p>
            </div>

            <div className="business-benefit-row featured">
              <div>
                <p className="business-problem-label">
                  LIFE IS HITTING HARD
                </p>
                <h3>Mental Health Support</h3>
              </div>

              <p>
                LifeHelp provides counseling and support resources for stress,
                anxiety, relationships, family challenges, grief, financial
                pressures and other real-life concerns.
              </p>
            </div>

            <div className="business-benefit-row">
              <div>
                <p className="business-problem-label">
                  MEDICATION COSTS ADD UP
                </p>
                <h3>Prescription Benefits</h3>
              </div>

              <p>
                KonnectMD includes prescription benefits designed to help
                members access eligible medications and additional savings.
              </p>
            </div>

            <div className="business-benefit-row">
              <div>
                <p className="business-problem-label">
                  HEALTHCARE GOES BEYOND THE DOCTOR
                </p>
                <h3>Dental • Vision • Chiropractic</h3>
              </div>

              <p>
                Every KonnectMD plan includes dental, vision and chiropractic
                discount benefits.
              </p>
            </div>

            <div className="business-benefit-row family">
              <div>
                <p className="business-problem-label">
                  BENEFITS THAT REACH HOME
                </p>
                <h3>Add Up to 7 Family Members</h3>
              </div>

              <p>
                One qualifying membership can extend value beyond the employee
                by allowing up to seven additional family members on the plan.
              </p>
            </div>

            <div className="business-benefit-row pet">
              <div>
                <p className="business-problem-label">
                  AND YES — EVEN THE FUR BABIES
                </p>
                <h3>Pet Services</h3>
              </div>

              <p>
                Ask about KonnectMD membership options that include veterinary
                and pet-related services.
              </p>
            </div>

          </div>
        </section>

        {/* OWNER PAYOFF */}
        <section className="business-owner-value">
          <div className="container business-owner-value-shell">
            <p className="business-eyebrow">THIS IS BIGGER THAN A BENEFIT LIST</p>

            <h2>
              YOU DO NOT HAVE TO BE A BIG COMPANY
              <span>TO OFFER A BENEFIT THAT FEELS BIG.</span>
            </h2>

            <div className="business-owner-points">
              <div>Give a good employee another reason to stay.</div>
              <div>Give a strong applicant another reason to say yes.</div>
              <div>Give employees and families another way to access care.</div>
              <div>Give yourself a better answer when someone asks about benefits.</div>
            </div>
          </div>
        </section>

        {/* B2B VIDEO */}
        <section className="business-video-section">
          <div className="container business-video-shell">
            <div className="business-section-heading">
              <p className="business-eyebrow">HEAR THE BUSINESS CASE</p>

              <h2>
                Can something this affordable really provide meaningful value?
              </h2>

              <p>
                Hear Dr. Pitts explain how businesses can use KonnectMD and why
                healthcare access can matter to employers and their people.
              </p>
            </div>

            <div className="business-video-frame">
              <iframe
                src="https://www.youtube.com/embed/NwsNH-pY3-0"
                title="KonnectMD for Business - Dr. Pitts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* QUALIFICATION / LEAD FORM */}
        <section className="business-lead-section">
          <div className="container business-lead-shell">

            <div className="business-lead-copy">
              <p className="business-eyebrow">
                LET'S START WITH YOUR BUSINESS
              </p>

              <h2>What would make the biggest difference for your team?</h2>

              <p>
                Tell us a little about what you're trying to solve.
                We'll follow up with information that matches your situation.
              </p>
            </div>
  
{submitted ? (
  <div className="business-thank-you">
    <div className="business-thank-you-check">✓</div>

    <p className="business-eyebrow">
      WE RECEIVED YOUR INFORMATION
    </p>

    <h2>Thank You.</h2>

    <h3>
      Now let's see what could make sense for your team.
    </h3>

    <p>
      We'll review what you told us about your business, your team,
      and the benefits that matter most to you.
    </p>

    <p>
      A member of the KonnectMD team will follow up using your
      preferred contact method.
    </p>

    <strong>
      Your people take care of your business. We're looking forward
      to showing you another way to take care of them.
    </strong>
  </div>
) : (
  <form className="business-lead-form" onSubmit={handleSubmit}>

    <label>
      How many people are on your team?
      <select
        name="teamSize"
        value={formData.teamSize}
        onChange={handleChange}
        required
      >
        <option value="">Choose one</option>
        <option value="1-5">1–5</option>
        <option value="6-10">6–10</option>
        <option value="11-25">11–25</option>
        <option value="26-50">26–50</option>
        <option value="51+">51+</option>
      </select>
    </label>

    <label>
      What matters most to you?
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        required
      >
        <option value="">Choose one</option>
        <option value="affordability">
          Offering a meaningful benefit affordably
        </option>
        <option value="retention">
          Keeping good employees
        </option>
        <option value="recruiting">
          Recruiting new employees
        </option>
        <option value="doctor-access">
          24/7 healthcare access
        </option>
        <option value="mental-health">
          Mental health support
        </option>
        <option value="prescriptions">
          Prescription costs
        </option>
        <option value="family">
          Benefits for employees and families
        </option>
      </select>
    </label>

    <label>
      What would you most like to provide that you are not providing today?
      <select
        name="currentGap"
        value={formData.currentGap}
        onChange={handleChange}
        required
      >
        <option value="">Choose one</option>
        <option value="healthcare-access">Better healthcare access</option>
        <option value="mental-health">Mental health support</option>
        <option value="prescription-help">Prescription savings</option>
        <option value="family-value">Family healthcare value</option>
        <option value="employee-benefit">A meaningful employee benefit</option>
        <option value="not-sure">I'm not sure yet</option>
      </select>
    </label>

    <div className="business-form-grid">
      <label>
        Your name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Business name
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
    </div>

    <label>
      How should we follow up?
      <select
        name="preferredContact"
        value={formData.preferredContact}
        onChange={handleChange}
        required
      >
        <option value="">Choose one</option>
        <option value="text">Text me</option>
        <option value="call">Call me</option>
        <option value="email">Email me</option>
      </select>
    </label>

    <label>
      What's the biggest benefits challenge you're trying to solve?
      <textarea
        name="challenge"
        rows="4"
        value={formData.challenge}
        onChange={handleChange}
        placeholder="Optional"
      />
    </label>

    <button
      type="submit"
      className="btn btn-primary"
      disabled={submitting}
    >
      {submitting ? "Sending..." : "Show Me My Business Options"}
    </button>

    <p className="business-form-note">
      No calendar. No obligation. We'll use your answers to make the
      follow-up relevant to your business.
    </p>

    </form>
  )}

        </div>
      </section>

    </main>
  </>
);
}