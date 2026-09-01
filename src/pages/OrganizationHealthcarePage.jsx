import { useState } from "react";
import SEO from "../components/SEO";
import "../Styles/OrganizationHealthcarePage.css";

export default function OrganizationHealthcarePage() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    interest: "",
    approximateSize: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    preferredContact: "",
    notes: "",
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
      "https://script.google.com/macros/s/AKfycbxbUI1V35uZ5osGlGzoEU6IhNiSWnUxN7F7UtWOcSrRfE3IxLdBA1PmExxSHq89TIy_Kg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          organizationName: formData.organizationName,
          organizationType: formData.organizationType,
          interest: formData.interest,
          organizationSize: formData.approximateSize,
          name: formData.name,
          role: formData.role,
          email: formData.email,
          phone: formData.phone,
          preferredContact: formData.preferredContact,
          notes: formData.notes,
        }),
      }
    );

    setSubmitted(true);
  } catch (error) {
    console.error("Organization form submission error:", error);
    alert(
      "There was a problem submitting your information. Please try again."
    );
  }
};

  return (
    <main className="organization-page">
      <SEO
        title="Healthcare Access for Churches, Nonprofits & Organizations | KonnectMD Access"
        description="Explore how churches, nonprofits and community organizations can connect the people they serve with practical healthcare access and explore fundraising opportunities with KonnectMD."
      />

      {/* HERO */}
      <section className="organization-hero">
        <div className="container">
          <p className="organization-kicker">
            CHURCHES • NONPROFITS • COMMUNITY ORGANIZATIONS
          </p>

          <h1>
            YOU'RE ALREADY
            <br />
            HELPING PEOPLE.
          </h1>

          <p className="organization-hero-question">
            What if <strong>healthcare access</strong> could become part of
            how you do it?
          </p>

          <div className="organization-realities">
            <p>
              A member needs a doctor but doesn't want another expensive
              urgent-care visit.
            </p>

            <p>
              A family is struggling with prescription costs.
            </p>

            <p>
              Someone you're serving is dealing with stress, family problems
              or another real-life challenge.
            </p>

            <p>
              Your organization is looking for better ways to fund its mission.
            </p>
          </div>

          <div className="organization-interrupt">
  <span>ANOTHER RESOURCE.</span>
  <strong>FOR THE PEOPLE YOU SERVE.</strong>
</div>

          <a href="#organization-options" className="organization-primary-cta">
            Show Me What's Possible
          </a>
        </div>
      </section>

      {/* TWO DOORS */}
      <section
        className="organization-options-section"
        id="organization-options"
      >
        <div className="container">
          <div className="organization-section-heading">
  <p>HELPING PEOPLE IS ALREADY PART OF YOUR MISSION</p>

  <h2>
    We Want to Help You
    <br />
    Do More of It.
  </h2>
</div>

         <div className="organization-option-grid">
  <article className="organization-option organization-option-care">
    <span className="organization-option-number">01</span>

    <p className="organization-option-label">HEALTHCARE ACCESS</p>

    <h3>Another Resource for the People You Serve.</h3>

    <p>
      Give members, families, employees, volunteers and people in your
      community another practical way to access healthcare and savings.
    </p>

    <ul>
      <li>24/7 access to a doctor</li>
      <li>Prescription savings</li>
      <li>Dental, vision & chiropractic discounts</li>
      <li>LifeHelp & real-life support</li>
      <li>Individual and family membership options</li>
    </ul>
  </article>

  <article className="organization-option organization-option-fund">
    <span className="organization-option-number">02</span>

    <p className="organization-option-label">SUPPORT FOR REAL LIFE</p>

    <h3>Because the Need Isn't Always Medical.</h3>

    <p>
      Sometimes the person asking your organization for help is dealing
      with much more than a doctor's visit.
    </p>

    <p className="organization-option-emphasis">
      Emotional wellness.
      <br />
      Relationships and family.
      <br />
      Parenting and caregiving.
      <br />
      Financial and legal concerns.
    </p>
  </article>
</div>
        </div>
      </section>

      {/* MENTAL HEALTH + LIFEHELP */}
<section className="organization-lifehelp-section">
  <div className="container">
    <div className="organization-lifehelp-heading">
      <p className="organization-lifehelp-kicker">
        THE NEED ISN'T ALWAYS PHYSICAL
      </p>

      <h2>
        THE PEOPLE YOU SERVE
        <br />
        ARE CARRYING MORE
        <br />
        THAN YOU CAN SEE.
      </h2>

      <p className="organization-lifehelp-lead">
        Churches, nonprofits and community organizations are often among the
        first places people turn when life becomes difficult.
      </p>
    </div>

  <div className="organization-lifehelp-realities">
  <span>Anxiety & Emotional Stress</span>
  <span>Marriage & Relationships</span>
  <span>Parenting & Family</span>
  <span>Financial Pressure</span>
  <span>Grief & Life Changes</span>
  <span>Caregiving</span>
  <span>Substance Support</span>
  <span>Workplace Concerns</span>
  <span>Legal Support</span>
</div>

<div className="organization-lifehelp-pivot">
  <p>ANOTHER WAY TO HELP</p>

  <h3>
    GIVE YOUR LEADERS
    <br />
    ANOTHER RESOURCE
    <br />
    TO POINT PEOPLE
    <br />
    TOWARD.
  </h3>
</div>

    <div className="organization-lifehelp-bottom">
      <div className="organization-lifehelp-message">
        <p>
          Your pastors, leaders, staff and volunteers don't have to become the
          counselor, therapist, financial advisor or legal expert for every
          person who turns to them for help.
        </p>

        <p>
          KonnectMD membership includes access to <strong>LifeHelp</strong>,
          providing another resource members can turn to for counseling,
          emotional wellness and practical support through many of life's
          everyday challenges.
        </p>
      </div>

     <div className="organization-lifehelp-payoff">
  <span>WHEN SOMEONE ASKS FOR HELP</span>

  <strong>
    YOU DON'T ALWAYS
    <br />
    HAVE TO HAVE
    <br />
    THE ANSWER.
    <br />
    YOU CAN HAVE
    <br />
    A RESOURCE.
  </strong>
</div>
    </div>
  </div>
</section>

     

      {/* FORM */}
      <section className="organization-form-section">
        <div className="container">
          <div className="organization-form-intro">
            <p>LET'S START A CONVERSATION</p>

            <h2>
              What Could This Look Like
              <br />
              For Your Organization?
            </h2>

            <p>
              Tell us a little about your organization and what caught your
              attention. We'll help you understand the available options.
            </p>
          </div>

          {!submitted ? (
            <form className="organization-form" onSubmit={handleSubmit}>
              <div className="organization-form-row">
                <label>
                  Organization name
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Organization type
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="church">Church / Ministry</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="association">Association</option>
                    <option value="community">Community Organization</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <label>
                What interests you most?
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one</option>
                  <option value="community">
                    Healthcare access for our members/community
                  </option>
                  <option value="team">
                    Healthcare access for employees/team
                  </option>
                  <option value="fundraising">
                    Fundraising opportunity
                  </option>
                  <option value="both">
                    Healthcare access + fundraising
                  </option>
                  <option value="learn">
                    I want to understand the possibilities
                  </option>
                </select>
              </label>

              <label>
                Approximately how many people are connected to your
                organization?
                <select
                  name="approximateSize"
                  value={formData.approximateSize}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one</option>
                  <option value="under-50">Under 50</option>
                  <option value="50-100">50–100</option>
                  <option value="101-250">101–250</option>
                  <option value="251-500">251–500</option>
                  <option value="500-plus">500+</option>
                </select>
              </label>

              <div className="organization-form-divider" />

              <p className="organization-form-step">YOUR INFORMATION</p>

              <div className="organization-form-row">
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
                  Your role
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Pastor, Director, Board Member..."
                    required
                  />
                </label>
              </div>

              <div className="organization-form-row">
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
              </div>

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

              <label>
                Anything you'd like us to know? (optional)
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                />
              </label>

              <button type="submit" className="organization-submit">
                Show Me What's Possible
              </button>

              <p className="organization-form-disclaimer">
                No obligation. We'll simply help you understand how the
                available KonnectMD options may fit your organization.
              </p>
            </form>
          ) : (
            <div className="organization-thank-you">
              <p>THANK YOU</p>
              <h2>We've Received Your Information.</h2>
              <p>
                We'll review what you shared and follow up using your preferred
                contact method.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="organization-disclosure">
        <div className="container">
          <p>
            KonnectMD Access is a healthcare access and savings membership. It
            is not health insurance and does not replace emergency medical
            care. Benefits, discounts and availability may vary by membership.
            Fundraising opportunities are subject to applicable program terms
            and organizational eligibility.
          </p>
        </div>
      </section>
    </main>
  );
}