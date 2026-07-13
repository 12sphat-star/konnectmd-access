import "../Styles/TelehealthResourceCenter.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const telehealthUses = [
  {
    title: "Everyday Illnesses",
    text: "Discuss common non-emergency concerns such as cold symptoms, allergies, sore throat, sinus concerns, and minor infections.",
  },
  {
    title: "Medication Questions",
    text: "Ask about eligible refills, medication side effects, treatment questions, and next steps.",
  },
  {
    title: "Follow-Up Care",
    text: "Review symptoms, recovery, test results, or treatment progress when an in-person examination may not be required.",
  },
  {
    title: "Behavioral Health",
    text: "Access counseling, psychology, psychiatry, and other behavioral-health services when available through the selected program.",
  },
  {
    title: "Chronic-Care Support",
    text: "Use virtual visits and remote monitoring to help manage conditions such as blood pressure, diabetes, asthma, and other ongoing needs.",
  },
  {
    title: "Care Navigation",
    text: "Get help understanding whether your concern may be appropriate for virtual care, urgent care, primary care, or emergency services.",
  },
];

const emergencySigns = [
  "Severe difficulty breathing",
  "Chest pain or pressure",
  "Possible stroke symptoms",
  "Severe bleeding",
  "Major injury or trauma",
  "Loss of consciousness",
  "Severe allergic reaction",
  "Any condition that feels life-threatening",
];

const preparationSteps = [
  "Choose a quiet, private location with reliable internet.",
  "Write down your symptoms, when they started, and what makes them better or worse.",
  "Have your medication list, allergies, and relevant health history available.",
  "Keep a thermometer, blood-pressure cuff, glucose meter, or other home device nearby when relevant.",
  "Prepare your questions before the appointment.",
  "Know the nearest urgent care center or emergency department in case the provider recommends in-person care.",
];

const relatedResources = [
  {
    category: "Decision Guide",
    title: "Telehealth, Urgent Care, or the Emergency Room?",
    text: "Compare common care settings and understand when each may be appropriate.",
    link: "/insights/when-to-use-telehealth-vs-urgent-care-vs-er-hampton-roads",
  },
  {
    category: "Veterans",
    title: "Telehealth Resources for Veterans",
    text: "Learn how virtual care may complement existing VA and community resources.",
    link: "/insights/telehealth-for-veterans-hampton-roads",
  },
  {
    category: "Healthcare Trends",
    title: "Why More Families Are Using Telehealth",
    text: "Explore the access, convenience, and affordability factors driving virtual care.",
    link: "/insights/why-telehealth-is-growing-hampton-roads",
  },
];

const faqs = [
  {
    q: "What is telehealth?",
    a: "Telehealth uses phones, computers, tablets, video visits, secure messaging, and other technologies to connect patients with healthcare professionals from a distance.",
  },
  {
    q: "Can every condition be treated through telehealth?",
    a: "No. Telehealth can be useful for many non-emergency concerns, follow-up visits, behavioral-health services, medication questions, and chronic-care support. Some symptoms require an in-person examination, testing, imaging, urgent care, or emergency treatment.",
  },
  {
    q: "Can a telehealth provider prescribe medication?",
    a: "A licensed provider may prescribe medication when clinically appropriate and legally permitted. Prescribing rules vary by medication, state law, provider judgment, and the telehealth service being used.",
  },
  {
    q: "What happens if the provider believes I need in-person care?",
    a: "The provider may recommend primary care, urgent care, specialist care, testing, imaging, or emergency evaluation based on your symptoms and clinical needs.",
  },
  {
    q: "Does KonnectMD include telehealth?",
    a: "Qualifying KonnectMD memberships include virtual physician access and related healthcare services. Exact benefits depend on the membership level and current program terms.",
  },
];

export default function TelehealthResourceCenter() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Telehealth Resource Center",
    url: "https://rukonnected.com/resource-center/telehealth",
    description:
      "A practical guide to telehealth, including when to use virtual care, when to seek emergency treatment, appointment preparation, FAQs, and KonnectMD access options.",
    about: {
      "@type": "MedicalTherapy",
      name: "Telehealth",
    },
  };

  return (
    <>
      <SEO
        title="Telehealth Resource Center | KonnectMD Access"
        description="Learn what telehealth is, when to use virtual care, when not to use it, how to prepare for a visit, and how KonnectMD helps members access care."
        path="/resource-center/telehealth"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      <main className="telehealth-center">
        <section className="telehealth-center-hero">
          <div className="container">
            <nav className="telehealth-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/insights">Healthcare Resources</Link>
              <span aria-hidden="true">›</span>
              <span>Telehealth Resource Center</span>
            </nav>

            <div className="telehealth-hero-grid">
              <div className="telehealth-hero-copy">
                <p className="telehealth-eyebrow">
                  Telehealth Resource Center
                </p>

                <h1>
                  Understand Virtual Care Before You Need It.
                </h1>

                <p className="telehealth-hero-lead">
                  Learn what telehealth can help with, when an in-person visit
                  may be better, how to prepare for a virtual appointment, and
                  how KonnectMD connects members with licensed healthcare
                  professionals.
                </p>

                <div className="telehealth-hero-actions">
                  <a href="#when-to-use" className="btn btn-primary">
                    When to Use Telehealth
                  </a>

                  <Link to="/plans" className="btn btn-secondary">
                    Review Membership Options
                  </Link>
                </div>

                <p className="telehealth-emergency-note">
                  Medical emergency? Call 911 or go to the nearest emergency
                  department.
                </p>
              </div>

              <div className="telehealth-hero-image-wrap">
                <img
                  src="/images/telehealth-family.jpg"
                  alt="Family speaking with a healthcare provider through a virtual visit"
                  className="telehealth-hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="telehealth-definition">
          <div className="container telehealth-definition-grid">
            <div>
              <p className="telehealth-section-eyebrow">Telehealth Explained</p>
              <h2>What Is Telehealth?</h2>
            </div>

            <div>
              <p>
                Telehealth is the use of communications technology to receive
                healthcare from a distance. Depending on the service, this can
                include video visits, telephone consultations, secure
                messaging, remote monitoring, and access to health information.
              </p>

              <p>
                It can make care easier to reach, but it is not appropriate for
                every symptom or situation. The provider determines what can be
                handled virtually and when an in-person evaluation is needed.
              </p>

              <div className="telehealth-source-links">
                <a
                  href="https://telehealth.hhs.gov/patients/why-use-telehealth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HHS Telehealth Guidance ↗
                </a>

                <a
                  href="https://medlineplus.gov/telehealth.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MedlinePlus Telehealth Overview ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="when-to-use"
          className="telehealth-use-section"
        >
          <div className="container">
            <div className="telehealth-section-header">
              <p className="telehealth-section-eyebrow">
                Common Uses
              </p>

              <h2>When Telehealth May Be a Good Starting Point</h2>

              <p>
                A virtual visit may be useful when the concern is not
                life-threatening and a physical examination, imaging, or
                immediate procedure may not be required.
              </p>
            </div>

            <div className="telehealth-use-grid">
              {telehealthUses.map((item) => (
                <article className="telehealth-use-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <p className="telehealth-clinical-note">
              A healthcare professional must determine whether telehealth is
              appropriate for your specific symptoms.
            </p>
          </div>
        </section>

        <section className="telehealth-emergency-section">
          <div className="container telehealth-emergency-grid">
            <div>
              <p className="telehealth-danger-eyebrow">
                Emergency Warning
              </p>

              <h2>When Not to Rely on Telehealth</h2>

              <p>
                Virtual care should not delay emergency treatment. Call 911 or
                seek immediate emergency care for serious or life-threatening
                symptoms.
              </p>
            </div>

            <div className="telehealth-emergency-list">
              {emergencySigns.map((item) => (
                <div key={item}>
                  <span aria-hidden="true">!</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="telehealth-prepare-section">
          <div className="container telehealth-prepare-grid">
            <div className="telehealth-prepare-image-wrap">
              <img
                src="/images/doctor-call.jpg"
                alt="Patient preparing for an online healthcare appointment"
                className="telehealth-prepare-image"
              />
            </div>

            <div>
              <p className="telehealth-section-eyebrow">
                Prepare for Your Visit
              </p>

              <h2>How to Get More Value From a Virtual Appointment</h2>

              <ol className="telehealth-prepare-list">
                {preparationSteps.map((step, index) => (
                  <li key={step}>
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="telehealth-konnectmd-section">
          <div className="container telehealth-konnectmd-grid">
            <div>
              <p className="telehealth-section-eyebrow">
                Where KonnectMD Fits
              </p>

              <h2>Healthcare Access That Extends Beyond One Video Visit</h2>

              <p>
                KonnectMD memberships may combine virtual physician access with
                prescription savings, behavioral health services, family
                access, care navigation, discounts, preventive resources, and
                additional benefits depending on the selected membership.
              </p>

              <div className="telehealth-konnectmd-actions">
                <Link to="/plans" className="btn btn-primary">
                  Compare Memberships
                </Link>

                <Link to="/get-details" className="btn btn-secondary">
                  Get More Information
                </Link>
              </div>
            </div>

            <div className="telehealth-konnectmd-points">
              <div>
                <strong>24/7 Physician Access</strong>
                <span>Connect with licensed providers when eligible.</span>
              </div>

              <div>
                <strong>Prescription Savings</strong>
                <span>Explore medication savings available by plan.</span>
              </div>

              <div>
                <strong>Behavioral Health</strong>
                <span>Access counseling and related services by membership.</span>
              </div>

              <div>
                <strong>Household Memberships</strong>
                <span>Eligible plans may include up to seven family members.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="telehealth-related-section">
          <div className="container">
            <div className="telehealth-section-header">
              <p className="telehealth-section-eyebrow">
                Continue Learning
              </p>

              <h2>Related Telehealth Resources</h2>
            </div>

            <div className="telehealth-related-grid">
              {relatedResources.map((item) => (
                <Link
                  to={item.link}
                  className="telehealth-related-card"
                  key={item.title}
                >
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <strong>Read Resource →</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="telehealth-faq-section">
          <div className="container">
            <div className="telehealth-section-header">
              <p className="telehealth-section-eyebrow">
                Frequently Asked Questions
              </p>

              <h2>Telehealth Questions, Answered Clearly</h2>
            </div>

            <div className="telehealth-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="telehealth-guide-placeholder">
          <div className="container">
            <div className="telehealth-guide-card">
              <div>
                <p className="telehealth-section-eyebrow">
                  Free Guide Coming Soon
                </p>

                <h2>The Smart Healthcare Decision Guide</h2>

                <p>
                  A practical guide covering telehealth, prescription savings,
                  mental health resources, family healthcare, veterans
                  resources, and membership comparison.
                </p>
              </div>

              <Link to="/get-details" className="btn btn-primary">
                Request Guide Notification
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}