import React, { useState } from "react";
import SEO from "../components/SEO";
import "../Styles/SeniorHealthcarePage.css";

export default function SeniorHealthcarePage() {
  const [formData, setFormData] = useState({
    primaryNeed: "",
    currentCoverage: "",
    zipCode: "",
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    frustration: "",
  });

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

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzHrdzy7MLFwBRqY-6JburNiza1Rnomr9B0ebUXv7AGCNTic_D_xx7CEyMy0g4vlCYZ/exec",
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
  } catch (error) {
    console.error("Senior lead submission error:", error);

    alert(
      "We couldn't submit your information. Please try again or call 757-335-6772."
    );
  }
};

  return (
    <>
      <SEO
        title="Senior Healthcare Access | RuKonnected"
        description="Explore convenient healthcare access, prescription savings, mental health and wellness support, and additional healthcare resources for older adults."
      />

      <main className="senior-page">

        {/* HERO */}
        <section className="senior-hero">
          <div className="senior-hero-overlay" />

          <div className="container senior-hero-shell">
            <div className="senior-hero-copy">
              <p className="senior-kicker">
                HEALTHCARE ACCESS AFTER 60
              </p>

              <h1>
                YOU HAVE HEALTH COVERAGE.
                <span>
                  BUT DOES THAT MEAN GETTING CARE IS ALWAYS EASY?
                </span>
              </h1>

              <p className="senior-hero-lead">
                Medicare or other health coverage can be an important
                part of your healthcare. But everyday needs can still
                come up between appointments.
              </p>

              <div className="senior-question-box">
                <span>SO HERE&apos;S THE QUESTION:</span>

                <h2>
                  What do you do when you need
                  <strong> help now?</strong>
                </h2>
              </div>

              <div className="senior-hero-benefits">
                <span>24/7 Doctor Access</span>
                <span>Prescription Savings</span>
                <span>Mental Health &amp; Wellness</span>
                <span>Dental &amp; Vision Savings</span>
              </div>

            <div className="senior-hero-actions">
  <a
    href="#senior-needs-form"
    className="senior-btn senior-btn-primary"
  >
    Explore Your Options
    <span aria-hidden="true">→</span>
  </a>

  <a
    href="https://konnectmdmedfinder.online/"
    target="_blank"
    rel="noopener noreferrer"
    className="senior-btn senior-btn-rx"
  >
    Check My Medication
    <span aria-hidden="true">→</span>
  </a>
</div>
            </div>

            <div
  className="senior-hero-image-placeholder"
  aria-label="Senior couple enjoying time at home with family nearby"
/>
          </div>
        </section>

        {/* IMPORTANT REASSURANCE */}
        <section className="senior-medicare-section">
          <div className="container senior-narrow">
            <p className="senior-eyebrow">
              AN IMPORTANT DISTINCTION
            </p>

            <h2>
              KEEP YOUR MEDICARE.
              <span> KEEP YOUR DOCTORS.</span>
            </h2>

            <p>
              KonnectMD is not Medicare and does not replace your
              Medicare or other health insurance coverage.
            </p>

            <strong>
              It is an additional healthcare membership designed to
              provide convenient access to healthcare services and
              savings that may complement the care and coverage you
              already have.
            </strong>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="senior-life-section">
          <div className="container">
            <div className="senior-section-heading">
              <p className="senior-eyebrow">
                COVERAGE IS ONLY PART OF THE STORY
              </p>

              <h2>
                HEALTHCARE NEEDS DON&apos;T ALWAYS
                <span> WAIT FOR YOUR NEXT APPOINTMENT.</span>
              </h2>

              <p>
                Sometimes the challenge isn&apos;t whether you have
                coverage. It&apos;s getting convenient access to the
                right kind of help when you need it.
              </p>
            </div>

            <div className="senior-pain-grid">
              <article className="senior-pain-card">
                <span className="senior-card-number">01</span>
                <h3>“I can&apos;t get an appointment right away.”</h3>
                <p>
                  Some health questions simply can&apos;t wait days
                  for the next available office visit.
                </p>
              </article>

              <article className="senior-pain-card">
                <span className="senior-card-number">02</span>
                <h3>“Another prescription expense?”</h3>
                <p>
                  Medication costs can add another concern to the
                  monthly household budget.
                </p>
              </article>

              <article className="senior-pain-card">
                <span className="senior-card-number">03</span>
                <h3>“I&apos;d rather not leave home for this.”</h3>
                <p>
                  For appropriate non-emergency concerns, being able
                  to speak with a doctor from home can make access
                  much more convenient.
                </p>
              </article>

              <article className="senior-pain-card">
                <span className="senior-card-number">04</span>
                <h3>“Sometimes I just need someone to talk to.”</h3>
                <p>
                  Stress, grief, caregiving, relationships and major
                  life changes can affect emotional wellness too.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="senior-benefits-section">
          <div className="container">
            <div className="senior-section-heading senior-heading-light">
              <p className="senior-eyebrow">
                ANOTHER LAYER OF HEALTHCARE SUPPORT
              </p>

              <h2>
                MORE WAYS TO GET HELP.
                <span> MORE WAYS TO SAVE.</span>
              </h2>
            </div>

            <div className="senior-benefits-grid">
              <article className="senior-benefit-card">
                <span>24/7</span>
                <h3>Doctor Access</h3>
                <p>
                  Access a licensed physician by phone or video for
                  appropriate non-emergency healthcare needs.
                </p>
              </article>

             

              <article className="senior-benefit-card">
                <span>LIFE</span>
                <h3>Mental Health &amp; Wellness</h3>
                <p>
                  Access support and resources for emotional wellness
                  and some of the real-life challenges that can
                  affect health.
                </p>
              </article>

              <article className="senior-benefit-card">
                <span>+</span>
                <h3>Additional Savings</h3>
                <p>
                  Membership benefits may include savings for dental,
                  vision, chiropractic and other healthcare-related
                  services.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="senior-video-section">
          <div className="container senior-video-shell">
            <div className="senior-video-copy">
              <p className="senior-eyebrow">TAKE TWO MINUTES</p>

              <h2>
                See How Healthcare Access
                <span> Can Work Differently.</span>
              </h2>

              <p>
                Watch this short overview to learn how KonnectMD can
                provide an additional layer of healthcare access and
                savings.
              </p>
            </div>

            <div className="senior-video-player">
              <iframe
                src="https://www.youtube.com/embed/1D-v4gPIH_o"
                title="KonnectMD Healthcare Access Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* FORM */}
        <section
          className="senior-lead-section"
          id="senior-needs-form"
        >
          <div className="container senior-lead-shell">
            <div className="senior-lead-copy">
              <p className="senior-eyebrow">
                START WITH WHAT MATTERS TO YOU
              </p>

              <h2>
                What Would Make Healthcare Easier For You?
              </h2>

              <p>
                Tell us what you&apos;re most interested in and
                we&apos;ll make the follow-up relevant to you.
              </p>

              <div className="senior-form-promise">
                <strong>No complicated questionnaire.</strong>
                <span>No obligation.</span>
                <span>Just a simple conversation.</span>
              </div>
            </div>

            {submitted ? (
              <div className="senior-thank-you">
                <div className="senior-thank-you-check">✓</div>

                <p className="senior-eyebrow">
                  WE RECEIVED YOUR INFORMATION
                </p>

                <h2>Thank You.</h2>

                <p>
                  We&apos;ll review what you told us and follow up
                  using your preferred contact method.
                </p>

                <strong>
                  Our goal is simply to help you understand the
                  healthcare access options available to you.
                </strong>
              </div>
            ) : (
              <form
                className="senior-lead-form"
                onSubmit={handleSubmit}
              >
                <label>
                  What would help you most right now?
                  <select
                    name="primaryNeed"
                    value={formData.primaryNeed}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="doctor-access">
                      Easier doctor access
                    </option>
                    <option value="prescriptions">
                      Prescription savings
                    </option>
                    <option value="mental-health">
                      Mental health &amp; wellness support
                    </option>
                    <option value="dental-vision">
                      Dental &amp; vision savings
                    </option>
                    <option value="spouse-family">
                      Help for my spouse or family
                    </option>
                    <option value="combination">
                      A combination of benefits
                    </option>
                    <option value="exploring">
                      I&apos;m just exploring my options
                    </option>
                  </select>
                </label>

                <label>
                  What type of health coverage do you currently have?
                  <select
                    name="currentCoverage"
                    value={formData.currentCoverage}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="medicare">Medicare</option>
                    <option value="medicare-other">
                      Medicare + additional coverage
                    </option>
                    <option value="employer">
                      Employer or retiree coverage
                    </option>
                    <option value="other">Other coverage</option>
                    <option value="none">
                      I don&apos;t currently have coverage
                    </option>
                    <option value="prefer-not">
                      Prefer not to say
                    </option>
                  </select>
                </label>

                <label>
                  ZIP code
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="23456"
                    required
                  />
                </label>

                <div className="senior-form-divider" />

                <div className="senior-form-row">
                  <label>
                    Your name
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
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
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className="senior-form-row">
                  <label>
                    Phone
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <label>
                    How would you prefer we contact you?
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select one</option>
                      <option value="call">Call me</option>
                      <option value="text">Text me</option>
                      <option value="email">Email me</option>
                    </select>
                  </label>
                </div>

                <label>
                  What&apos;s your biggest healthcare frustration
                  right now?
                  <textarea
                    name="frustration"
                    value={formData.frustration}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Optional — tell us what's been difficult, expensive or frustrating."
                  />
                </label>

                <button
                  type="submit"
                  className="senior-btn senior-btn-primary"
                >
                  Show Me My Options
                </button>

                <p className="senior-form-note">
                  No obligation. Your information will only be used
                  to follow up about the healthcare resources you
                  requested.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* DISCLOSURE */}
        <section className="senior-disclosure">
          <div className="container">
            <p>
              KonnectMD is a healthcare membership, not health
              insurance. It is not Medicare, a Medicare Supplement
              plan, or a Medicare Advantage plan and does not replace
              Medicare or other health insurance. Benefits,
              discounts and availability may vary by membership.
              This service does not replace emergency medical care.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}