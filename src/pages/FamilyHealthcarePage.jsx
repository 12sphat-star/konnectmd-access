import React, { useState } from "react";
import SEO from "../components/SEO";
import "../Styles/FamilyHealthcarePage.css";

export default function FamilyHealthcarePage() {
  const [formData, setFormData] = useState({
    lookingFor: "",
    primaryNeed: "",
    familySize: "",
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
      "https://script.google.com/macros/s/AKfycbxSegCJrhBWGnUUsgJLNy45dLLEoSX75HP3JNC5aLAyD4yd_jf4Fy0cvCJHkbXQq8o/exec",
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
    console.error("Family lead submission failed:", error);
  }
};

  return (
    <>
      <SEO
        title="Affordable Healthcare Access for Individuals & Families | KonnectMD Access"
        description="Discover another way to help your family access doctors, prescription savings, dental, vision, chiropractic discounts, LifeHelp support and more with KonnectMD Access."
      />

      <main className="family-page">

      {/* SCROLL-STOPPING FAMILY HERO */}
<section className="family-impact-hero">
  <div className="family-impact-overlay" />

  <div className="container family-impact-shell">
    <div className="family-impact-copy">
      <p className="family-impact-kicker">
        REAL FAMILY. REAL LIFE. REAL HEALTHCARE NEEDS.
      </p>

      <h1>
  YOUR FAMILY DOESN&apos;T
  <span>
    SCHEDULE LIFE&apos;S
    <em>“UH-OH”</em> MOMENTS.
  </span>
</h1>

<div className="family-impact-moments">
  <p>
    <strong>10:47 PM.</strong>
    Your child wakes up with a fever.
  </p>

  <p>
    <strong>At the pharmacy.</strong>
    The price makes you look twice.
  </p>

  <p>
    <strong>That nagging tooth.</strong>
    You&apos;ve been putting off the dentist.
  </p>

  <p>
    <strong>And real life...</strong>
    Parenting, relationships, stress, money and everything in between.
  </p>
</div>

<div className="family-impact-interrupt">
  <span>SO HERE&apos;S A DIFFERENT QUESTION:</span>

  <h2>
    What if one membership could help with
    <strong> more of it?</strong>
  </h2>
</div>

      <div className="family-impact-benefits">
        <span>24/7 Doctor Access</span>
        <span>Prescription Savings</span>
        <span>Dental</span>
        <span>Vision</span>
        <span>Chiropractic</span>
        <span>LifeHelp</span>
      </div>

      <a
        href="#family-needs-form"
        className="family-impact-cta"
      >
        Show Me How
        <span aria-hidden="true">→</span>
      </a>

      <p className="family-impact-disclaimer">
        KonnectMD Access is a healthcare access and savings
        membership, not health insurance.
      </p>
    </div>

  <div className="family-impact-visual">
  <div className="family-hero-photo">
    <img
      src="/images/family-night-doctor-access-hero.png"
      alt="Mother caring for her sick child at night while using her phone"
    />

    <div className="family-hero-photo-shade" />

    <div className="family-hero-time">
      <strong>10:47</strong>
      <span>PM</span>
    </div>

    <div className="family-hero-photo-caption">
      <span>REAL LIFE DOESN&apos;T KEEP OFFICE HOURS</span>

    <p>
  Because a fever doesn&apos;t wait for the doctor&apos;s office to open.
</p>
    </div>
  </div>
</div>
  </div>
</section>

        {/* PIVOT */}
        <section className="family-pivot-section">
          <div className="container family-narrow">
            <p className="family-eyebrow">THERE IS ANOTHER WAY</p>

            <h2>
              Your Family&apos;s Healthcare Needs Don&apos;t Happen
              One at a Time.
            </h2>

            <p>
              That&apos;s why KonnectMD Access brings multiple
              everyday healthcare needs together in one membership
              experience.
            </p>

            <strong>
              Instead of thinking about one benefit, think about how
              many different moments your family may need help.
            </strong>
          </div>
        </section>

       {/* EVERYDAY HEALTHCARE MOMENTS */}
<section className="family-life-section">
  <div className="container">

    <div className="family-life-heading">
      <p className="family-eyebrow">
        BECAUSE THE FEVER ISN&apos;T THE WHOLE STORY
      </p>

      <h2>
        AND TOMORROW,
        <span>LIFE KEEPS GOING.</span>
      </h2>

      <p>
        Healthcare isn&apos;t one problem that happens once.
        It&apos;s all the everyday moments that keep showing up.
      </p>
    </div>

    <div className="family-life-grid">

      {/* PRESCRIPTIONS */}
      <article className="family-life-card family-life-rx">
        <div className="family-life-marker">
          <span>$</span>
        </div>

        <div className="family-life-card-copy">
          <p className="family-life-label">
            PRESCRIPTION SAVINGS
          </p>

          <h3>
            “It costs
            <strong> HOW MUCH?</strong>”
          </h3>

          <p>
            Prescription savings can help reduce the sting
            when medications become another household expense.
          </p>
        </div>
      </article>

      {/* DENTAL / VISION / CHIRO */}
      <article className="family-life-card family-life-care">
        <div className="family-life-marker">
          <span>+</span>
        </div>

        <div className="family-life-card-copy">
          <p className="family-life-label">
            DENTAL • VISION • CHIROPRACTIC
          </p>

          <h3>
            “We&apos;ll take care of it
            <strong> next month.</strong>”
          </h3>

          <p>
            Every plan includes dental, vision and chiropractic
            discounts — giving your family more ways to save on
            care that&apos;s easy to keep putting off.
          </p>
        </div>
      </article>

      {/* LIFEHELP */}
      <article className="family-life-card family-life-help">
        <div className="family-life-marker">
          <span>LIFE</span>
        </div>

        <div className="family-life-card-copy">
          <p className="family-life-label">
            LIFEHELP
          </p>

          <h3>
            Sometimes what hurts
            <strong> isn&apos;t physical.</strong>
          </h3>

          <p>
            Parenting. Relationships. Emotional wellness.
            Financial stress. Legal questions. Caregiving.
            Workplace concerns. Substance support.
          </p>

          <p className="family-life-emphasis">
            Real life affects health too.
          </p>
        </div>
      </article>

    </div>

    {/* 24/7 DOCTOR ACCESS ANCHOR */}
    <div className="family-life-doctor">
      <span>24/7</span>

      <div>
        <p>AND WHEN SOMEONE IS SICK...</p>

        <h3>
          You have access to a doctor.
          <strong> Day or night.</strong>
        </h3>
      </div>
    </div>

  </div>
</section>

       {/* FAMILY SIZE FEATURE */}
<section className="family-seven-section">
  <div className="container">

    <div className="family-seven-intro">
      <p className="family-eyebrow">ONE PLAN. MORE OF YOUR HOUSEHOLD.</p>

      <h2>
        YOUR FAMILY ISN&apos;T SMALL.
        <span>
          YOUR HEALTHCARE VALUE SHOULDN&apos;T BE EITHER.
        </span>
      </h2>
    </div>

    <div className="family-seven-impact">

      <div className="family-seven-primary">
        <span className="family-seven-small">START WITH</span>
        <strong>YOU</strong>
        <p>Primary Member</p>
      </div>

      <div className="family-seven-plus" aria-hidden="true">
        +
      </div>

      <div className="family-seven-household">
        <span className="family-seven-small">ADD UP TO</span>
        <strong>7</strong>
        <p>Additional Household Members</p>
      </div>

    </div>

    <div className="family-seven-message">
      <h3>
        That&apos;s up to
        <strong> 8 people </strong>
        connected through one membership.
      </h3>

      <p>
        The primary member can include up to 7 additional
        household members on one qualifying family plan —
        helping more of the people under your roof access
        healthcare support and savings.
      </p>
    </div>

  </div>
</section>
       {/* LIFEHELP */}
<section className="family-lifehelp-section">
  <div className="container family-lifehelp-shell">

    <div className="family-lifehelp-intro">
      <p className="family-eyebrow">
        BECAUSE HEALTH ISN&apos;T JUST PHYSICAL
      </p>

      <h2>
        SOMETIMES THE PROBLEM
        <span>ISN&apos;T A COLD.</span>
      </h2>

      <p>
        Families deal with a lot more than doctor visits.
        Sometimes you need help figuring out what to do when
        life itself gets complicated.
      </p>
    </div>

    <div className="family-lifehelp-wordwall">
      <span>Parenting</span>
      <span>Marriage</span>
      <span>Relationships</span>
      <span>Emotional Wellness</span>
      <span>Money</span>
      <span>Legal Questions</span>
      <span>Caregiving</span>
      <span>Workplace Concerns</span>
      <span>Family Issues</span>
      <span>Substance Support</span>
    </div>

    <div className="family-lifehelp-payoff">
      <div className="family-lifehelp-name">
        <span>LIFE</span>
        <strong>HELP</strong>
      </div>

      <div className="family-lifehelp-copy">
        <p>REAL-LIFE SUPPORT</p>

        <h3>
          Because real life
          <strong> affects health too.</strong>
        </h3>

        <p>
          LifeHelp gives members access to support and resources
          for the personal, family, financial and emotional
          challenges that don&apos;t show up on a thermometer.
        </p>
      </div>
    </div>

  </div>
</section>

        {/* VIDEO PLACEHOLDER */}
        <section className="family-video-section">
          <div className="container family-video-shell">
            <div className="family-video-copy">
            <p className="family-eyebrow">SEE IT FOR YOURSELF</p>

<h2>
  Healthcare Access
  <br />
  For Real Life.
</h2>
            <p>
  See how KonnectMD Access gives individuals and families
  more ways to handle everyday healthcare needs, savings
  and real-life support.
</p>
            </div>

           <div className="family-video-player">
  <iframe
    src="https://www.youtube.com/embed/1D-v4gPIH_o"
    title="KonnectMD Access for Individuals and Families"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>
          </div>
        </section>

        {/* FORM */}
        <section
          className="family-lead-section"
          id="family-needs-form"
        >
          <div className="container family-lead-shell">
            <div className="family-lead-copy">
              <p className="family-eyebrow">START WITH WHAT YOU NEED</p>

              <h2>
                Let&apos;s Find Out What Matters Most to Your Family.
              </h2>

              <p>
                Tell us a little about what you&apos;re looking for.
                We&apos;ll use your answers to make the next
                conversation relevant to you.
              </p>

              <div className="family-form-promise">
                <strong>No complicated questionnaire.</strong>
                <span>No obligation.</span>
                <span>Just a better place to start.</span>
              </div>
            </div>

            {submitted ? (
              <div className="family-thank-you">
                <div className="family-thank-you-check">✓</div>

                <p className="family-eyebrow">
                  WE RECEIVED YOUR INFORMATION
                </p>

                <h2>Thank You.</h2>

                <h3>
                  Now let&apos;s see what could make sense for you
                  and your family.
                </h3>

                <p>
                  We&apos;ll review what you told us about the people
                  you&apos;re looking to help and the healthcare
                  needs that matter most.
                </p>

                <p>
                  A member of the KonnectMD team will follow up using
                  your preferred contact method.
                </p>

                <strong>
                  Taking care of your family is already a big job.
                  We&apos;re looking forward to showing you another
                  way to help make healthcare access a little easier.
                </strong>
              </div>
            ) : (
           
<form
  className="family-lead-form"
  onSubmit={handleSubmit}
>
  <div className="family-form-section-heading">
    <span>01</span>

    <div>
      <p>YOUR FAMILY</p>
      <h3>First, tell us what you need.</h3>
    </div>
  </div>

  <label>
    Who are you looking for healthcare access for?
    <select
      name="lookingFor"
      value={formData.lookingFor}
      onChange={handleChange}
      required
    >
      <option value="">Select one</option>
      <option value="just-me">Just me</option>
      <option value="me-spouse">
        Me + my spouse or partner
      </option>
      <option value="family">My family</option>
    </select>
  </label>
                <label>
                  What matters most to you right now?
                  <select
                    name="primaryNeed"
                    value={formData.primaryNeed}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="doctor-access">
                      Affordable doctor access
                    </option>
                    <option value="prescriptions">
                      Prescription savings
                    </option>
                    <option value="dental-vision-chiro">
                      Dental, vision &amp; chiropractic savings
                    </option>
                    <option value="lifehelp">
                      LifeHelp &amp; real-life support
                    </option>
                    <option value="family-value">
                      More value for my family
                    </option>
                    <option value="combination">
                      A combination of benefits
                    </option>
                    <option value="not-sure">
                      I&apos;m not sure yet
                    </option>
                  </select>
                </label>

                <label>
                  How many people would you like to help?
                  <select
                    name="familySize"
                    value={formData.familySize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3-4">3–4</option>
                    <option value="5-7">5–7</option>
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

                <div className="family-form-divider" />

<div className="family-form-section-heading">
  <span>02</span>

  <div>
    <p>YOUR INFORMATION</p>
    <h3>Where should we send your options?</h3>
  </div>
</div>

<div className="family-form-row">
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

<div className="family-form-row">
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
      <option value="text">Text me</option>
      <option value="call">Call me</option>
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
                    placeholder="Optional — tell us what's been frustrating, expensive or difficult for your family."
                  />
                </label>

                <button
                  type="submit"
                  className="family-btn family-btn-primary"
                >
                  Show Me What Fits My Family
                </button>

                <p className="family-form-note">
                  No calendar. No obligation. We&apos;ll use your
                  answers to make the follow-up relevant to you.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* DISCLOSURE */}
        <section className="family-disclosure">
          <div className="container">
            <p>
              KonnectMD Access is a healthcare access and savings
              membership. It is not health insurance and does not
              replace emergency medical care. Benefits, discounts
              and availability may vary by membership.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}