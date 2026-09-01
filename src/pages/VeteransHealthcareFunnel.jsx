import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/VeteransHealthcareFunnel.css";

export default function VeteransHealthcareFunnel() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    veteranStatus: "",
    primaryNeed: "",
    preferredContact: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwenw1NryQYdA0uUdULx1TEsLPEX0e6qeaMSsC1u_XEjoICtdTKWIbl4Ygm9lvxbvSf/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          veteranStatus: formData.veteranStatus,
          primaryNeed: formData.primaryNeed,
          preferredContact: formData.preferredContact,
          notes: formData.notes,
        }),
      }
    );

    setSubmitted(true);

  } catch (error) {
    console.error("Veterans funnel submission error:", error);
    alert(
      "We couldn't submit your information. Please try again."
    );
  }
};

  return (
    <main className="veterans-funnel">

      {/* =====================================================
          HERO
      ====================================================== */}
    <section className="vf-hero">
  <div className="vf-container">

    <div className="vf-hero-badge">
      FOR VETERANS &amp; MILITARY FAMILIES
    </div>

    <div className="vf-hero-layout">

      {/* HERO COPY */}
      <div className="vf-hero-content">

        <p className="vf-kicker">
          YOU EARNED YOUR HEALTHCARE.
        </p>

        <h1>
          When You Need Care,
          <span> How Long Should You Have to Wait?</span>
        </h1>

        <p className="vf-hero-lead">
          VA healthcare provides important benefits to millions of Veterans.
          But appointments, referrals and community care can take time—and
          urgent care can mean another waiting room.
          <strong>
            {" "}Sometimes you don't need different healthcare. You just
            need another way to reach a doctor.
          </strong>
        </p>

        <div className="vf-hero-actions">
          <a href="#veteran-reality" className="vf-primary-button">
            See Why Another Resource Can Matter ↓
          </a>

          <a href="#veteran-options" className="vf-secondary-button">
            Show Me the Options
          </a>
        </div>

        <p className="vf-hero-disclaimer">
          KonnectMD Access does not replace VA healthcare, TRICARE,
          CHAMPVA, Medicare, health insurance or emergency medical care.
        </p>

      </div>

      {/* VETERAN FAMILY IMAGE */}
      <div className="vf-hero-image">
        <img
          src="/images/veteran-family-healthcare-access.png"
          alt="Veteran at home with his family"
        />
      </div>

    </div>

  </div>
</section>


      {/* =====================================================
          PATTERN INTERRUPT
      ====================================================== */}
      <section id="veteran-reality" className="vf-interrupt">
        <div className="vf-container">

      <span>THE CARE MAY BE THERE.</span>

<strong>
  THE CHALLENGE CAN BE
  <br />
  GETTING TO IT WHEN YOU NEED IT.
</strong>

        </div>
      </section>


      {/* =====================================================
          REAL-LIFE ACCESS PROBLEM
      ====================================================== */}
      <section className="vf-real-life">
        <div className="vf-container">

          <div className="vf-section-heading">
            <p>THIS ISN'T ABOUT WHETHER VA HEALTHCARE IS GOOD.</p>

            <h2>
              It's About What Happens
              <br />
              When You Need Care Now.
            </h2>

            <span>
              Appointments, referrals, community care and urgent care can all
              play an important role. But sometimes the problem is much
              simpler:
            </span>
          </div>

          <div className="vf-situation-grid">

            <article className="vf-situation-card">
              <span>01</span>
              <h3>You're Sick Saturday Morning.</h3>
              <p>
                It's not an emergency. You don't want to spend hours sitting
                in urgent care. You just want to talk with a doctor.
              </p>
            </article>

            <article className="vf-situation-card">
              <span>02</span>
              <h3>Your Regular Appointment Is Weeks Away.</h3>
              <p>
                Your healthcare relationship still matters. But today's
                everyday health concern may not need to wait for your next
                scheduled appointment.
              </p>
            </article>

            <article className="vf-situation-card">
              <span>03</span>
              <h3>Community Care Takes Time to Navigate.</h3>
              <p>
                Another provider may be available through your existing
                benefits, but scheduling and coordination don't always happen
                immediately.
              </p>
            </article>

            <article className="vf-situation-card">
              <span>04</span>
              <h3>Urgent Care Means Another Waiting Room.</h3>
              <p>
                Sometimes what you really want is a convenient first step
                before deciding whether an in-person visit is necessary.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          EVIDENCE
      ====================================================== */}
      <section className="vf-evidence">
        <div className="vf-container">

          <div className="vf-evidence-intro">
            <p>THIS ISN'T JUST A MARKETING CLAIM.</p>

            <h2>
              Access &amp; Timeliness
              <br />
              Are Real Issues.
            </h2>
          </div>

          <div className="vf-stat-grid">

            <div className="vf-stat">
              <strong>93.4%</strong>
              <p>
                of Veterans surveyed reported trusting VA healthcare in
                FY2026 Q2.
              </p>
              <small>Source: U.S. Department of Veterans Affairs</small>
            </div>

            <div className="vf-stat vf-stat-emphasis">
              <strong>51%</strong>
              <p>
                of reviewed VA consults did not meet the applicable
                timeliness standard for how long it took Veterans to
                receive care.
              </p>
              <small>Source: VA Office of Inspector General, June 2026</small>
            </div>

            <div className="vf-stat">
              <strong>49%</strong>
              <p>
                of reviewed community-care consults did not meet the
                applicable timeliness standard for Veterans receiving care.
              </p>
              <small>Source: VA Office of Inspector General, June 2026</small>
            </div>

          </div>

          <div className="vf-both-true">
            <span>BOTH THINGS CAN BE TRUE.</span>

            <h3>
              You Can Value the Healthcare You've Earned
              <br />
              <strong>and Still Want Another Door Available.</strong>
            </h3>
          </div>

        </div>
      </section>


      {/* =====================================================
          FAMILY PIVOT
      ====================================================== */}
     <section className="vf-family-pivot">
  <div className="vf-container">

    <div className="vf-family-layout">

      {/* COPY */}
      <div className="vf-family-content">

        <p className="vf-kicker">
          BUT THERE'S ANOTHER QUESTION.
        </p>

        <h2>
          WHAT ABOUT
          <span> THE PEOPLE BESIDE YOU?</span>
        </h2>

        <div className="vf-family-copy">
          <p>
            Your VA healthcare benefits were earned through your service.
          </p>

          <p>
            But healthcare needs don't begin and end with the Veteran.
          </p>
        </div>

      </div>

      {/* FAMILY IMAGE */}
      <div className="vf-family-image">
        <img
          src="/images/veteran-family-beside-you.png"
          alt="Veteran spending time at home with her family"
        />
      </div>

    </div>

    <div className="vf-family-scenarios">

      <div>
        <strong>Your spouse gets sick tonight.</strong>
        <span>Where do they turn?</span>
      </div>

      <div>
        <strong>Your child wakes up sick Saturday.</strong>
        <span>How quickly can they reach care?</span>
      </div>

      <div>
        <strong>A prescription hits the household budget.</strong>
        <span>What savings resources are available?</span>
      </div>

      <div>
        <strong>The problem isn't medical at all.</strong>
        <span>
          Marriage. Parenting. Financial pressure. Grief. Caregiving.
        </span>
      </div>

    </div>

    <div className="vf-family-payoff">
      <p>
        The healthcare access you've earned as a Veteran does not
        automatically mean every person in your household has the same
        VA healthcare access.
      </p>

      <strong>
        THAT'S WHERE THE CONVERSATION CHANGES.
      </strong>
    </div>

  </div>
</section>


      {/* =====================================================
          KONNECTMD REVEAL
      ====================================================== */}
      <section className="vf-reveal">
        <div className="vf-container">

          <div className="vf-reveal-heading">
            <p>ANOTHER RESOURCE. ANOTHER DOOR.</p>

            <h2>Meet KonnectMD Access.</h2>

            <span>
              An additional healthcare access, savings and real-life support
              membership for individuals and families.
            </span>
          </div>

          <div className="vf-not-replacement">

            <div>
              <span>NOT THIS</span>
              <h3>Replace the Benefits You've Earned.</h3>
              <p>
                Keep using your VA healthcare, TRICARE, CHAMPVA, Medicare,
                employer coverage or other healthcare resources available
                to you.
              </p>
            </div>

            <div>
              <span>THIS</span>
              <h3>Add Another Resource to Your Toolbox.</h3>
              <p>
                Give yourself and qualifying household members another way
                to access everyday healthcare, savings and real-life support.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="vf-benefits">
        <div className="vf-container">

          <div className="vf-section-heading">
            <p>MORE THAN ANOTHER DOCTOR OPTION</p>

            <h2>
              One Resource.
              <br />
              Several Everyday Needs.
            </h2>
          </div>

          <div className="vf-benefits-grid">

            <article>
              <span>24/7</span>
              <h3>Physician Access</h3>
              <p>
                Covered members can access a physician 24 hours a day,
                7 days a week for many common everyday healthcare needs.
              </p>
            </article>

            <article>
              <span>Rx</span>
              <h3>Prescription Benefits &amp; Savings</h3>
              <p>
                Prescription resources can help households reduce medication
                costs. Specific benefits vary by membership.
              </p>
            </article>

            <article>
              <span>+</span>
              <h3>Dental • Vision • Chiropractic</h3>
              <p>
                Discount resources that can help with healthcare expenses
                beyond the doctor's office.
              </p>
            </article>

            <article>
              <span>LIFE</span>
              <h3>Real-Life Support</h3>
              <p>
                Because some of life's biggest challenges aren't solved with
                a prescription or a doctor's appointment.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          LIFEHELP
      ====================================================== */}
      <section className="vf-lifehelp">
        <div className="vf-container">

          <div className="vf-lifehelp-heading">
            <p>HEALTHCARE IS ONLY PART OF LIFE.</p>

            <h2>
              SOMETIMES
              <br />
              THE WEIGHT
              <br />
              <span>ISN'T PHYSICAL.</span>
            </h2>
          </div>

          <p className="vf-lifehelp-intro">
            LifeHelp provides resources for the real-life challenges that can
            affect individuals, Veterans and families.
          </p>

          <div className="vf-lifehelp-grid">
            <span>Emotional Wellness</span>
            <span>Marriage &amp; Relationships</span>
            <span>Parenting &amp; Family</span>
            <span>Financial Pressure</span>
            <span>Grief &amp; Life Changes</span>
            <span>Caregiving</span>
            <span>Legal Support</span>
            <span>Workplace Concerns</span>
            <span>Substance Support</span>
          </div>

          <div className="vf-lifehelp-payoff">
            <strong>
              Because supporting a Veteran household can mean more than
              treating an illness.
            </strong>
          </div>

        </div>
      </section>


      {/* =====================================================
          HOUSEHOLD
      ====================================================== */}
      <section className="vf-household">
        <div className="vf-container">

          <p>ONE QUALIFYING FAMILY MEMBERSHIP</p>

          <h2>
            UP TO
            <strong> 8 PEOPLE.</strong>
          </h2>

          <h3>
            Primary member + up to 7 additional household members
            on one qualifying family plan.
          </h3>

          <div className="vf-people-row" aria-label="Up to eight people">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
          </div>

          <strong className="vf-household-payoff">
            ONE HOUSEHOLD. ONE ADDITIONAL RESOURCE.
          </strong>

        </div>
      </section>


      {/* =====================================================
          VA + KONNECTMD
      ====================================================== */}
      <section className="vf-together">
        <div className="vf-container">

          <div className="vf-together-heading">
            <p>THIS DOESN'T HAVE TO BE EITHER / OR.</p>

            <h2>Keep the Benefits You've Earned.</h2>

            <strong>Add Another Tool to the Toolbox.</strong>
          </div>

          <div className="vf-comparison">

            <article>
              <span>YOUR EXISTING RESOURCES</span>
              <h3>VA &amp; Other Healthcare Benefits</h3>
              <p>
                Continue using the healthcare benefits, providers,
                prescriptions, specialty care and other services available
                through the programs for which you qualify.
              </p>
            </article>

            <div className="vf-plus">+</div>

            <article>
              <span>AN ADDITIONAL RESOURCE</span>
              <h3>KonnectMD Access</h3>
              <p>
                24/7 physician access, qualifying household access,
                prescription resources, dental/vision/chiropractic discounts
                and real-life support.
              </p>
            </article>

          </div>

          <div className="vf-toolbox-line">
            <strong>
              KonnectMD doesn't need to replace something valuable
              to be valuable.
            </strong>
          </div>

        </div>
      </section>


      {/* =====================================================
          LEAD FORM
      ====================================================== */}
      <section id="veteran-options" className="vf-form-section">
        <div className="vf-container">

          <div className="vf-form-layout">

            <div className="vf-form-copy">
              <p>NO PRESSURE. JUST INFORMATION.</p>

              <h2>
                Could This Help
                <br />
                Your Household?
              </h2>

              <span>
                Tell us a little about what you're looking for. We'll help
                you understand the available options and whether KonnectMD
                Access makes sense alongside the healthcare resources you
                already have.
              </span>
            </div>

            <div className="vf-form-card">

              {!submitted ? (
                <form onSubmit={handleSubmit}>

                  <div className="vf-form-row">
                    <label>
                      First Name
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    <label>
                      Last Name
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

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
                    />
                  </label>

                  <label>
                    Which best describes you?
                    <select
                      name="veteranStatus"
                      value={formData.veteranStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select one</option>
                      <option value="Veteran">Veteran</option>
                      <option value="Retired Military">Retired Military</option>
                      <option value="Active Duty / Military Family">
                        Active Duty / Military Family
                      </option>
                      <option value="Veteran Spouse / Family Member">
                        Veteran Spouse / Family Member
                      </option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label>
                    What would be most helpful to you?
                    <select
                      name="primaryNeed"
                      value={formData.primaryNeed}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select one</option>
                      <option value="Healthcare access for my family">
                        Healthcare access for my family
                      </option>
                      <option value="Another 24/7 doctor resource">
                        Another 24/7 doctor resource
                      </option>
                      <option value="Prescription savings">
                        Prescription savings
                      </option>
                      <option value="Dental vision chiropractic savings">
                        Dental / vision / chiropractic savings
                      </option>
                      <option value="Real-life support">
                        Mental, emotional or real-life support
                      </option>
                      <option value="All benefits">
                        I want to understand all of the benefits
                      </option>
                      <option value="Not sure">
                        I'm not sure yet
                      </option>
                    </select>
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
                      <option value="Phone">Phone</option>
                      <option value="Text">Text</option>
                      <option value="Email">Email</option>
                    </select>
                  </label>

                  <label>
                    Anything you'd like us to know? <span>(Optional)</span>
                    <textarea
                      name="notes"
                      rows="4"
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </label>

                  <button type="submit" className="vf-submit">
                    SHOW ME MY OPTIONS →
                  </button>

                  <small className="vf-form-note">
                    No obligation. KonnectMD Access is not health insurance.
                  </small>

                </form>
              ) : (
                <div className="vf-success">
                  <span>THANK YOU.</span>

                  <h3>We've received your information.</h3>

                  <p>
                    We'll follow up with information to help you understand
                    the options that may fit your situation.
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL PATTERN INTERRUPT
      ====================================================== */}
      <section className="vf-final">
        <div className="vf-container">

          <p>YOU SERVED.</p>

          <h2>YOU EARNED YOUR BENEFITS.</h2>

          <strong>KEEP THEM.</strong>

          <span>We're simply asking one more question:</span>

          <h3>
            DOES YOUR HOUSEHOLD
            <br />
            HAVE EVERYTHING IT NEEDS?
          </h3>

          <a href="#veteran-options" className="vf-final-button">
            Explore Another Resource →
          </a>

        </div>
      </section>


      {/* =====================================================
          SOURCES / DISCLOSURE
      ====================================================== */}
      <section className="vf-sources">
        <div className="vf-container">

          <h2>Facts, Sources &amp; Important Information</h2>

          <p>
            Statistics regarding Veteran trust and healthcare-access
            timeliness are based on publicly available information from the
            U.S. Department of Veterans Affairs and the VA Office of
            Inspector General.
          </p>

          <div className="vf-source-links">
            <a
              href="https://department.va.gov/veterans-experience/wp-content/uploads/sites/2/2026/06/VA-FY2026-Q2-Trust-Report-508.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VA FY2026 Q2 Veteran Trust Report ↗
            </a>

            <a
              href="https://www.vaoig.gov/reports/audit/audit-consult-timeliness-va-and-community-care"
              target="_blank"
              rel="noreferrer"
            >
              VA OIG — Consult Timeliness Audit, June 2026 ↗
            </a>

            <a
              href="https://www.va.gov/initiatives/va-health-connect/"
              target="_blank"
              rel="noreferrer"
            >
              VA Health Connect ↗
            </a>
          </div>

          <p className="vf-disclosure">
            RuKonnected.com is an independent healthcare access resource.
            KonnectMD Access is not health insurance and is not presented as
            a replacement for VA healthcare, TRICARE, CHAMPVA, Medicare,
            health insurance, emergency medical services or any healthcare
            benefits for which an individual may qualify.
          </p>

          <Link to="/resource-center">
            Return to Healthcare Resources →
          </Link>

        </div>
      </section>

    </main>
  );
}