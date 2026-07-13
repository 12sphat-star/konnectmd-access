import "../Styles/MentalHealthResourceCenter.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const mentalHealthTopics = [
  {
    title: "Stress",
    text:
      "Stress is a normal response to pressure or change. It may become concerning when it feels constant, affects sleep, or interferes with daily responsibilities.",
  },
  {
    title: "Anxiety",
    text:
      "Anxiety can involve persistent worry, restlessness, fear, physical tension, or difficulty concentrating beyond what the situation normally requires.",
  },
  {
    title: "Depression",
    text:
      "Depression can affect mood, energy, sleep, appetite, concentration, interest, relationships, and the ability to complete everyday activities.",
  },
  {
    title: "Burnout",
    text:
      "Burnout may involve emotional exhaustion, detachment, reduced motivation, irritability, and difficulty recovering from prolonged work or caregiving stress.",
  },
  {
    title: "Trauma and PTSD",
    text:
      "Trauma responses may include intrusive memories, avoidance, hypervigilance, sleep problems, emotional numbness, or distress connected to a past event.",
  },
  {
    title: "Grief and Loss",
    text:
      "Grief can follow the death of a loved one, illness, divorce, job loss, relocation, or another major life change. Support may help when grief becomes overwhelming.",
  },
];

const warningSigns = [
  {
    title: "Symptoms Continue",
    text:
      "Severe or distressing symptoms have lasted two weeks or longer or continue to intensify.",
  },
  {
    title: "Daily Life Is Affected",
    text:
      "Mood, worry, or emotional distress is making it difficult to work, study, care for yourself, or maintain relationships.",
  },
  {
    title: "Sleep or Appetite Changes",
    text:
      "You are sleeping much more or less than usual, experiencing appetite changes, or noticing unplanned weight changes.",
  },
  {
    title: "Loss of Interest",
    text:
      "Activities, relationships, or responsibilities you normally care about no longer feel meaningful or manageable.",
  },
  {
    title: "Substance Use Is Increasing",
    text:
      "Alcohol, prescription medications, or other substances are being used more often to cope with emotions or stress.",
  },
  {
    title: "You Feel Unsafe",
    text:
      "You are having thoughts of suicide, self-harm, harming someone else, or feel unable to remain safe.",
    urgent: true,
  },
];

const treatmentOptions = [
  {
    title: "Licensed Counselors",
    text:
      "Counselors and therapists may help people understand emotions, build coping skills, improve relationships, and work through stressful experiences.",
  },
  {
    title: "Psychologists",
    text:
      "Psychologists may provide assessment, psychological testing, diagnosis, psychotherapy, and evidence-based treatment for a range of concerns.",
  },
  {
    title: "Psychiatrists",
    text:
      "Psychiatrists are medical doctors who diagnose mental health conditions and may prescribe or manage medications when clinically appropriate.",
  },
  {
    title: "Primary Care Providers",
    text:
      "Primary care professionals can discuss symptoms, screen for common conditions, address possible physical causes, and refer patients for specialty care.",
  },
  {
    title: "Teletherapy",
    text:
      "Eligible counseling and behavioral-health visits may be delivered through secure video or telephone appointments when virtual care is appropriate.",
  },
  {
    title: "Crisis Services",
    text:
      "Crisis services provide immediate support when someone is experiencing suicidal thoughts, severe emotional distress, or another urgent behavioral-health crisis.",
  },
];

const virtualCareBenefits = [
  {
    title: "Access From Home",
    text:
      "Virtual appointments may reduce travel and allow eligible patients to connect from a private location.",
  },
  {
    title: "Flexible Scheduling",
    text:
      "Online services may provide appointment options that fit more easily around work, caregiving, school, or transportation limitations.",
  },
  {
    title: "Easier Follow-Up",
    text:
      "Virtual follow-up may help people maintain continuity when regular check-ins are part of the treatment plan.",
  },
  {
    title: "Broader Provider Reach",
    text:
      "Telehealth may help connect patients with licensed professionals who are not located nearby, subject to provider licensing and service availability.",
  },
  {
    title: "Integrated Support",
    text:
      "Behavioral-health telehealth can support coordination with primary care and other healthcare services when appropriate.",
  },
  {
    title: "Greater Privacy",
    text:
      "Some people feel more comfortable beginning counseling from a familiar, private environment.",
  },
];

const konnectmdBenefits = [
  {
    title: "Counseling Access",
    text:
      "Qualifying memberships may include counseling visits or counseling-related benefits for eligible members.",
  },
  {
    title: "Psychology and Psychiatry",
    text:
      "Higher membership levels may provide access to or discounts on psychology and psychiatric services, subject to current terms.",
  },
  {
    title: "Virtual Physician Access",
    text:
      "Members may also connect with licensed physicians who can discuss symptoms, rule out certain medical concerns, and recommend appropriate next steps.",
  },
  {
    title: "Household Support",
    text:
      "Qualifying household memberships may include eligible spouses and dependents, helping families access multiple healthcare resources through one membership.",
  },
  {
    title: "Prescription Savings",
    text:
      "Mental-health prescriptions may qualify for included-medication benefits or reduced pricing depending on the membership, formulary, dosage, and program terms.",
  },
  {
    title: "Nationwide Access",
    text:
      "Virtual services may help members connect with available licensed professionals while at home or traveling, subject to state licensing and service availability.",
  },
];

const faqs = [
  {
    q: "Is mental health treatment only for serious conditions?",
    a:
      "No. People seek support for stress, grief, relationship concerns, parenting challenges, work pressure, anxiety, depression, trauma, substance use, and many other reasons. You do not have to wait until symptoms become severe.",
  },
  {
    q: "When should I talk with a mental health professional?",
    a:
      "Consider seeking professional help when symptoms are severe, distressing, last two weeks or longer, worsen over time, or interfere with sleep, work, school, relationships, self-care, or normal daily activities.",
  },
  {
    q: "What is the difference between counseling, psychology, and psychiatry?",
    a:
      "Counselors commonly provide talk therapy and coping support. Psychologists may provide psychotherapy, evaluation, and psychological testing. Psychiatrists are physicians who can diagnose conditions and prescribe medications.",
  },
  {
    q: "Can mental health counseling be provided through telehealth?",
    a:
      "Yes. Many behavioral-health services can be delivered virtually through secure video or telephone appointments. Availability depends on the provider, state licensing, clinical appropriateness, and the selected service.",
  },
  {
    q: "Is virtual counseling confidential?",
    a:
      "Licensed professionals and healthcare platforms must follow applicable privacy requirements. Patients should use a private location, secure internet connection, headphones when needed, and review the provider's privacy practices.",
  },
  {
    q: "Can children or teenagers receive counseling?",
    a:
      "Yes, when age-appropriate services are available and parental or guardian consent requirements are satisfied. Eligibility and consent rules vary by provider, service, state, and membership.",
  },
  {
    q: "Can a counselor prescribe medication?",
    a:
      "Most counselors and therapists do not prescribe medication. Psychiatrists and certain other licensed medical professionals may prescribe when legally permitted and clinically appropriate.",
  },
  {
    q: "Does KonnectMD include mental health services?",
    a:
      "Mental-health benefits depend on the membership selected. Gold and higher levels may include counseling-related services, while higher tiers may provide broader behavioral-health support or discounts.",
  },
  {
    q: "Does KonnectMD replace health insurance?",
    a:
      "No. KonnectMD is a healthcare-access membership, not health insurance. It does not cover every healthcare expense and does not replace emergency services, insurance, Medicare, Medicaid, VA benefits, or other comprehensive coverage.",
  },
  {
    q: "When should I contact 988?",
    a:
      "Call or text 988 when you or someone else is experiencing suicidal thoughts, emotional distress, a substance-use crisis, or another mental-health crisis and needs immediate confidential support.",
  },
  {
    q: "When should I call 911 instead of 988?",
    a:
      "Call 911 when there is immediate physical danger, a serious injury, a medical emergency, violence in progress, or another situation requiring emergency responders.",
  },
];

const relatedResources = [
  {
    category: "Virtual Care",
    title: "Telehealth Resource Center",
    text:
      "Understand how virtual healthcare works and when an online appointment may be appropriate.",
    link: "/resource-center/telehealth",
  },
  {
    category: "Veterans",
    title: "Veterans Healthcare Resource Center",
    text:
      "Explore official VA mental-health services, crisis support, telehealth, and complementary healthcare resources.",
    link: "/resource-center/veterans",
  },
  {
    category: "Prescription Savings",
    title: "Prescription Savings Resource Center",
    text:
      "Learn how medication formularies, included benefits, pharmacy savings, and home delivery may work.",
    link: "/resource-center/prescription-savings",
  },
  {
    category: "Membership Options",
    title: "Compare KonnectMD Memberships",
    text:
      "Review which membership levels include counseling and broader behavioral-health services.",
    link: "/plans",
  },
];

export default function MentalHealthResourceCenter() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Mental Health Resource Center",
    url: "https://rukonnected.com/resource-center/mental-health",
    description:
      "Educational guidance about stress, anxiety, depression, trauma, counseling, virtual behavioral healthcare, crisis support, and KonnectMD mental-health benefits.",
    about: [
      {
        "@type": "MedicalCondition",
        name: "Anxiety",
      },
      {
        "@type": "MedicalCondition",
        name: "Depression",
      },
      {
        "@type": "MedicalCondition",
        name: "Post-traumatic stress disorder",
      },
      {
        "@type": "MedicalTherapy",
        name: "Mental health counseling",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Mental Health Resource Center | KonnectMD Access"
        description="Learn about stress, anxiety, depression, trauma, counseling, psychiatry, virtual behavioral healthcare, crisis resources, and KonnectMD mental-health membership benefits."
        path="/resource-center/mental-health"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      <main className="mental-center">
        <section className="mental-center-hero">
          <div className="container">
            <nav className="mental-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/insights">Healthcare Resources</Link>
              <span aria-hidden="true">›</span>
              <span>Mental Health Resource Center</span>
            </nav>

            <div className="mental-hero-grid">
              <div className="mental-hero-copy">
                <p className="mental-eyebrow">
                  Mental Health Resource Center
                </p>

                <h1>
                  Mental Health Is Healthcare.
                  <span> Understanding Your Options Starts Here.</span>
                </h1>

                <p className="mental-hero-lead">
                  Learn about common emotional and behavioral-health concerns,
                  treatment options, virtual counseling, crisis support, and
                  where KonnectMD may complement your mental healthcare journey.
                </p>

                <div className="mental-hero-actions">
                  <a href="#understanding-mental-health" className="btn btn-primary">
                    Explore Mental Health Resources
                  </a>

                  <Link to="/plans" className="btn btn-secondary">
                    Review Membership Options
                  </Link>
                </div>

                <div
                  className="mental-resource-badges"
                  aria-label="Resource standards"
                >
                  <span>Evidence-Based</span>
                  <span>Educational Resource</span>
                  <span>Reviewed Regularly</span>
                </div>
              </div>

              <div className="mental-hero-image-wrap">
                <img
                  src="/images/doctor-call.jpg"
                  alt="Person speaking privately with a behavioral healthcare professional through a virtual appointment"
                  className="mental-hero-image"
                />

                <div className="mental-hero-support-card">
                  <strong>Need immediate emotional support?</strong>
                  <span>Call or text 988 in the United States.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="understanding-mental-health"
          className="mental-topics-section"
        >
          <div className="container">
            <div className="mental-section-header">
              <p className="mental-section-eyebrow">
                Understanding Mental Health
              </p>

              <h2>Emotional Health Can Affect Every Part of Life</h2>

              <p>
                Mental health includes emotional, psychological, and social
                well-being. Concerns can affect thoughts, feelings, physical
                health, relationships, decisions, and daily functioning.
              </p>
            </div>

            <div className="mental-topics-grid">
              {mentalHealthTopics.map((topic) => (
                <article className="mental-topic-card" key={topic.title}>
                  <h3>{topic.title}</h3>
                  <p>{topic.text}</p>
                </article>
              ))}
            </div>

            <p className="mental-clinical-note">
              Only a qualified healthcare professional can diagnose a mental
              health condition. Similar symptoms can have different causes.
            </p>
          </div>
        </section>

        <section className="mental-help-section">
          <div className="container">
            <div className="mental-section-header mental-light-header">
              <p className="mental-section-eyebrow">
                When to Seek Professional Help
              </p>

              <h2>You Do Not Have to Wait Until Life Feels Unmanageable</h2>

              <p>
                Consider speaking with a qualified professional when emotional
                symptoms continue, intensify, or begin interfering with your
                health, responsibilities, safety, or relationships.
              </p>
            </div>

            <div className="mental-warning-grid">
              {warningSigns.map((sign) => (
                <article
                  className={`mental-warning-card ${
                    sign.urgent ? "is-urgent" : ""
                  }`}
                  key={sign.title}
                >
                  <span aria-hidden="true">
                    {sign.urgent ? "!" : "✓"}
                  </span>

                  <div>
                    <h3>{sign.title}</h3>
                    <p>{sign.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mental-strength-message">
              <strong>Seeking help is a sign of strength.</strong>
              <p>
                You do not need a diagnosis or a crisis before speaking with a
                counselor, physician, or another qualified professional.
              </p>
            </div>
          </div>
        </section>

        <section className="mental-treatment-section">
          <div className="container">
            <div className="mental-section-header">
              <p className="mental-section-eyebrow">
                Understanding Treatment Options
              </p>

              <h2>Different Professionals Serve Different Needs</h2>

              <p>
                The appropriate type of support depends on the symptoms,
                severity, treatment goals, medical history, age, and personal
                circumstances.
              </p>
            </div>

            <div className="mental-treatment-grid">
              {treatmentOptions.map((option) => (
                <article className="mental-treatment-card" key={option.title}>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mental-virtual-section">
          <div className="container mental-virtual-grid">
            <div className="mental-virtual-copy">
              <p className="mental-section-eyebrow">
                Virtual Behavioral Healthcare
              </p>

              <h2>Why Many People Choose Online Counseling</h2>

              <p>
                Telehealth can expand access to behavioral-health services and
                may make it easier to receive counseling, follow-up support, and
                medication management when virtual care is clinically
                appropriate.
              </p>

              <p>
                Virtual care is not the right setting for every person or every
                situation. Providers may recommend an in-person assessment,
                testing, emergency services, or another level of care.
              </p>

              <div className="mental-source-links">
                <a
                  href="https://telehealth.hhs.gov/patients/additional-resources/telehealth-and-behavioral-health"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HHS Behavioral Telehealth Guidance ↗
                </a>

                <a
                  href="https://www.nimh.nih.gov/health/find-help"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIMH Help for Mental Illnesses ↗
                </a>
              </div>
            </div>

            <div className="mental-virtual-benefits">
              {virtualCareBenefits.map((benefit) => (
                <article key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mental-crisis-section">
          <div className="container mental-crisis-grid">
            <div>
              <p className="mental-crisis-eyebrow">
                Immediate Crisis Support
              </p>

              <h2>You Are Not Alone.</h2>

              <p>
                The 988 Suicide &amp; Crisis Lifeline provides free,
                confidential emotional support 24 hours a day across the United
                States and its territories.
              </p>

              <p>
                Contact 988 for suicidal thoughts, emotional distress,
                substance-use concerns, or when you need immediate crisis
                support. Call 911 when there is immediate physical danger or a
                medical emergency.
              </p>
            </div>

            <div className="mental-crisis-actions">
              <a href="tel:988">Call 988</a>
              <a href="sms:988">Text 988</a>

              <a
                href="https://988lifeline.org/chat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Online ↗
              </a>

              <a
                href="https://www.veteranscrisisline.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Veterans: Call 988, Press 1 ↗
              </a>
            </div>
          </div>
        </section>

        <section className="mental-konnectmd-section">
          <div className="container">
            <div className="mental-section-header mental-light-header">
              <p className="mental-section-eyebrow">
                Where KonnectMD May Fit
              </p>

              <h2>Another Path to Mental Healthcare Access</h2>

              <p>
                KonnectMD does not replace emergency services, comprehensive
                insurance, or an existing treatment relationship. Qualifying
                memberships may provide another way to access counseling,
                behavioral-health support, physicians, medication savings, and
                household healthcare resources.
              </p>
            </div>

            <div className="mental-konnectmd-grid">
              {konnectmdBenefits.map((benefit) => (
                <article className="mental-konnectmd-card" key={benefit.title}>
                  <span aria-hidden="true">✓</span>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mental-membership-message">
              <div>
                <strong>Mental-health benefits vary by membership.</strong>
                <p>
                  Review current Gold, Platinum, and Titanium benefits before
                  enrolling. Provider availability, visit limits, pricing,
                  licensing, and program terms may change.
                </p>
              </div>

              <div className="mental-membership-actions">
                <Link to="/plans" className="btn btn-primary">
                  Compare Memberships
                </Link>

                <Link to="/get-details" className="btn btn-secondary">
                  Request More Information
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mental-faq-section">
          <div className="container">
            <div className="mental-section-header">
              <p className="mental-section-eyebrow">
                Frequently Asked Questions
              </p>

              <h2>Mental Health Questions, Answered Clearly</h2>
            </div>

            <div className="mental-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mental-related-section">
          <div className="container">
            <div className="mental-section-header">
              <p className="mental-section-eyebrow">
                Continue Learning
              </p>

              <h2>Continue Your Healthcare Journey</h2>
            </div>

            <div className="mental-related-grid">
              {relatedResources.map((resource) => (
                <Link
                  key={resource.title}
                  to={resource.link}
                  className="mental-related-card"
                >
                  <span>{resource.category}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>
                  <strong>Explore Resource →</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mental-sources-section">
          <div className="container">
            <div className="mental-sources-card">
              <div>
                <p className="mental-section-eyebrow">Trusted Sources</p>

                <h2>Educational Guidance From Recognized Authorities</h2>

                <p>
                  Educational information on this page is based on guidance
                  from the National Institute of Mental Health, the Substance
                  Abuse and Mental Health Services Administration, HHS
                  Telehealth, the 988 Suicide &amp; Crisis Lifeline, and other
                  official resources. KonnectMD benefit information is based on
                  current membership materials.
                </p>
              </div>

              <div className="mental-sources-links">
                <a
                  href="https://www.nimh.nih.gov/health"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Institute of Mental Health ↗
                </a>

                <a
                  href="https://www.samhsa.gov/find-help"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAMHSA Find Help ↗
                </a>

                <a
                  href="https://988lifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  988 Suicide &amp; Crisis Lifeline ↗
                </a>

                <a
                  href="https://telehealth.hhs.gov/patients/additional-resources/telehealth-and-behavioral-health"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HHS Behavioral Telehealth ↗
                </a>
              </div>

              <div className="mental-disclaimer">
                <strong>Educational and safety notice</strong>

                <p>
                  This resource is educational and is not a diagnosis,
                  treatment plan, or substitute for care from a qualified
                  healthcare professional. Mental-health symptoms and treatment
                  needs vary by individual.
                </p>

                <p>
                  If you or someone else is in immediate physical danger, call
                  911. For suicidal thoughts, emotional distress, substance-use
                  concerns, or crisis support in the United States, call or text
                  988.
                </p>

                <p>
                  KonnectMD mental-health benefits vary by membership level,
                  provider availability, state licensing, eligibility, visit
                  limits, and current program terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}