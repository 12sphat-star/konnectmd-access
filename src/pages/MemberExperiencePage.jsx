import "./../Styles/MemberExperiencePage.css";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BENEFITS = [
  {
    title: "24/7 Physician Access",
    text: "Connect with licensed physicians for appropriate non-emergency healthcare concerns, day or night.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.2 2" />
      </svg>
    ),
  },
  {
    title: "Prescription Resources",
    text: "Review eligible included medications, prescription savings, retail pharmacy access, and available delivery options based on the selected membership.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="9.5" width="17" height="7" rx="3.5" transform="rotate(-45 12 13)" />
        <line x1="9.5" y1="13" x2="14.5" y2="13" transform="rotate(-45 12 13)" />
      </svg>
    ),
  },
  {
    title: "Behavioral Health Support",
    text: "Access eligible counseling, mental wellness, and emotional support resources.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 11c-2.5 4.65-9.5 9-9.5 9z" />
        <path d="M6 12h2.5l1.5-2.5 2 4L13.5 11H18" />
      </svg>
    ),
  },
  {
    title: "Family Management",
    text: "Manage eligible household members and available family benefits from one account.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8.5" cy="8" r="2.75" />
        <circle cx="16" cy="9" r="2.25" />
        <path d="M3 19c.4-3 2.6-5 5.5-5s5.1 2 5.5 5" />
        <path d="M14.2 14.3c2.3.3 4 2.1 4.3 4.7" />
      </svg>
    ),
  },
  {
    title: "Health Information",
    text: "Maintain important health details and records to support a more informed care experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
        <path d="M14 3.5V8h4" />
        <line x1="8.5" y1="12.5" x2="15.5" y2="12.5" />
        <line x1="8.5" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    title: "Additional Member Benefits",
    text: "Access eligible lab, specialist, wellness, diabetic-supply, and other healthcare resources depending on membership level.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3.5l7 2.6v5.4c0 4.6-3 7.9-7 9-4-1.1-7-4.4-7-9V6.1l7-2.6z" />
        <line x1="12" y1="9" x2="12" y2="15" />
        <line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    ),
  },
];

const TOUR_CATEGORIES = [
  { title: "Dashboard", text: "A single home base for eligible benefits and account activity." },
  { title: "Virtual Care", text: "Request a physician visit for appropriate non-emergency needs." },
  { title: "Prescription Benefits", text: "Review eligible medications, savings, and pharmacy options." },
  { title: "Behavioral Health", text: "Explore eligible counseling and mental wellness resources." },
  { title: "Family and Dependents", text: "View and manage eligible household members." },
  { title: "Health Records", text: "Keep key health information in one secure place." },
  { title: "Lab and Wellness Resources", text: "Access eligible lab, specialist, and wellness resources." },
  { title: "Member Notifications", text: "Stay current on account and membership updates." },
];

const STEPS = [
  { title: "Choose Your Membership", text: "Compare available membership levels and select the plan that fits your needs." },
  { title: "Complete Enrollment", text: "Finish the enrollment process to activate your KonnectMD membership." },
  { title: "Activate Your Member Portal", text: "Set up secure access to your personal Member Portal account." },
  { title: "Complete Your Profile", text: "Add your information so your portal experience is ready to use." },
  { title: "Add Eligible Family Members", text: "Include qualifying household members under your membership, if applicable." },
  { title: "Begin Using Your Benefits", text: "Start accessing physician care, prescriptions, and other eligible resources." },
];

const FAQS = [
  {
    q: "Is KonnectMD health insurance?",
    a: "No. KonnectMD is a healthcare access membership, not health insurance. It is designed to provide convenient access to eligible healthcare resources and is not a substitute for insurance coverage.",
  },
  {
    q: "Does every membership include the same portal benefits?",
    a: "No. Portal access and available benefits vary by membership level. The Member Portal demonstration shown on this page reflects a Titanium membership experience.",
  },
  {
    q: "Can eligible family members be added?",
    a: "Many memberships allow eligible household members to be added. Availability depends on the selected membership level and current program terms.",
  },
  {
    q: "Are the 1,000+ chronic medications included in every plan?",
    a: "No. Access to 1,000+ eligible chronic medications is tied to qualifying Titanium-level benefits and current program terms, and is not included with every membership.",
  },
  {
    q: "How do I get help choosing a membership?",
    a: "You can compare membership plans directly or request plan details, and a KonnectMD Access representative can help you review current plan documents and options.",
  },
];

export default function MemberExperiencePage() {
  const pageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/member-experience`
      : "/member-experience";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "KonnectMD Member Portal Experience",
    description:
      "Explore the KonnectMD Member Portal and learn how members access 24/7 physician care, prescription resources, behavioral health, family tools, health records, and eligible membership benefits.",
    url: pageUrl,
  };

  return (
    <>
      <SEO
        title="KonnectMD Member Portal Experience | KonnectMD Access"
        description="Explore the KonnectMD Member Portal and learn how members access 24/7 physician care, prescription resources, behavioral health, family tools, health records, and eligible membership benefits."
        path="/member-experience"
      />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <main className="member-experience-page">
        {/* HERO */}
        <section className="member-hero">
          <div className="container">
            <div className="member-hero-content">
              <div className="member-hero-copy">
                <span className="member-eyebrow">YOUR KONNECTMD MEMBER PORTAL</span>

                <h1>Experience Your KonnectMD Member Portal.</h1>

                <p>
                 Your secure KonnectMD Member Portal gives eligible members one convenient place to access
                  physician care, prescription resources, behavioral health support, family management, 
                  health information, and additional healthcare resources included with their membership.
                </p>

                <div className="member-hero-actions">
                  <Link to="/plans" className="btn btn-primary">
                    Compare Membership Plans
                  </Link>
                  <Link to="/get-details" className="btn btn-secondary">
                    Get Plan Details
                  </Link>
                </div>
              </div>

              <div className="member-hero-image">
                <div className="member-portal-frame">
                  <div className="member-portal-frame-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <img
                    src="/images/member-portal-demo.webp"
                    alt="KonnectMD Member Portal demonstration dashboard showing healthcare benefits, virtual care, prescription savings, behavioral health, family management, and member tools."
                    className="member-portal-image"
                  />
                </div>

                <p className="member-demo-note">
                  Demonstration portal shown for illustration. Features, services, and
                  benefits vary by membership level and current program terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="member-trust-strip">
          <div className="container">
            <div className="member-trust-grid">
              <div className="member-trust-item">
                <span className="member-trust-number">24/7</span>
                <span className="member-trust-label">Physician Access</span>
              </div>
              <div className="member-trust-item">
                <span className="member-trust-number">70,000+</span>
                <span className="member-trust-label">Participating Pharmacies</span>
              </div>
              <div className="member-trust-item">
                <span className="member-trust-number">1,000+</span>
                <span className="member-trust-label">
                  *Available through qualifying Titanium membership benefits.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* MEMBER PORTAL BENEFITS */}
        <section className="member-benefits">
          <div className="container">
            <h2 className="member-experience-heading">
              One Membership. Multiple Ways to Access Care.
            </h2>

            <div className="member-benefits-grid">
              {BENEFITS.map((b) => (
                <div className="member-experience-benefit-card" key={b.title}>
                  <div className="member-benefit-icon">{b.icon}</div>
                  <h3 className="member-benefit-title">{b.title}</h3>
                  <p className="member-benefit-text">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTAL TOUR */}
        <section className="member-tour">
          <div className="container">
            <h2 className="member-experience-heading">Explore the KonnectMD Member Portal</h2>

            <div className="member-tour-content">
              <div className="member-tour-image-wrap">
                <img
                  src="/images/member-portal-demo.webp"
                  alt="Overview of the KonnectMD Member Portal dashboard used to demonstrate available member tools."
                  className="member-tour-image"
                />
              </div>

              <div className="member-tour-categories">
                {TOUR_CATEGORIES.map((c) => (
                  <div className="member-tour-category" key={c.title}>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS AFTER YOU JOIN */}
        <section className="member-steps">
          <div className="container">
            <h2 className="member-experience-heading">From Enrollment to Healthcare Access</h2>

            <ol className="member-steps-timeline">
              {STEPS.map((s, i) => (
                <li className="member-step" key={s.title}>
                  <span className="member-step-number">{i + 1}</span>
                  <h3 className="member-step-title">{s.title}</h3>
                  <p className="member-step-text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TITANIUM FEATURE PANEL */}
        <section className="member-titanium">
          <div className="container">
            <div className="member-titanium-content">
              <h2 className="member-experience-heading">A Look at the Titanium Member Experience</h2>

              <p>
                The Member Portal shown on this page demonstrates a Titanium membership
                experience. Titanium is a higher-tier KonnectMD membership that may 
                provide access to additional prescription, chronic medication, specialist,
                behavioral health, lab, wellness, and other eligible resources.
              </p>

              <p>
                Specific benefits depend on current plan documents, formularies,
                quantities, availability, and program terms. Review current membership
                plans before enrolling to see what is included at each level.
              </p>

              <Link to="/plans" className="btn btn-primary member-titanium-cta">
                Compare All Membership Levels
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="member-faq">
          <div className="container">
            <h2 className="member-experience-heading">Frequently Asked Questions</h2>

            <div className="member-faq-list">
              {FAQS.map((f) => (
                <details className="member-faq-item" key={f.q}>
                  <summary className="member-faq-question">{f.q}</summary>
                  <p className="member-faq-answer">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="member-final-cta">
          <div className="container">
            <h2>Ready to See Which KonnectMD Membership Fits Your Needs?</h2>
            <p>Compare current membership levels or request plan details from KonnectMD Access.</p>

            <div className="member-final-cta-actions">
              <Link to="/plans" className="btn btn-primary">
                Compare Membership Plans
              </Link>
              <Link to="/get-details" className="btn btn-secondary">
                Request Plan Information
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}