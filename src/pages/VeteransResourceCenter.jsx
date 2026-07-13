import "../Styles/VeteransResourceCenter.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const healthcareOptions = [
  {
    label: "Earned Benefits",
    title: "VA Healthcare",
    text:
      "VA healthcare provides eligible Veterans with care through VA medical centers, outpatient clinics, telehealth services, pharmacies, and specialized Veteran programs.",
    action: "Explore VA healthcare",
    href: "https://www.va.gov/health-care/",
  },
  {
    label: "Outside VA",
    title: "Community Care",
    text:
      "Eligible Veterans may receive approved care from community providers when specific VA requirements are met. Authorization is generally required before receiving care.",
    action: "Review Community Care eligibility",
    href: "https://www.va.gov/resources/eligibility-for-community-care-outside-va/",
  },
  {
    label: "Additional Access",
    title: "Complementary Resources",
    text:
      "Veterans may also use additional healthcare resources for family access, virtual physician care, prescription savings, behavioral health, and everyday non-emergency needs.",
    action: "See where KonnectMD fits",
    href: "#where-konnectmd-fits",
    internalAnchor: true,
  },
];

const mentalHealthResources = [
  {
    title: "PTSD Support",
    text:
      "PTSD can affect sleep, relationships, work, mood, and daily life. VA offers specialized PTSD treatment and educational resources.",
    href: "https://www.ptsd.va.gov/",
  },
  {
    title: "Counseling and Therapy",
    text:
      "Veterans may explore individual counseling, group counseling, family support, and other mental health services through VA and qualified providers.",
    href: "https://www.mentalhealth.va.gov/",
  },
  {
    title: "Depression and Anxiety",
    text:
      "Persistent sadness, worry, isolation, sleep changes, and loss of interest deserve attention. Professional support may help identify appropriate next steps.",
    href: "https://www.mentalhealth.va.gov/depression/",
  },
  {
    title: "Military Sexual Trauma",
    text:
      "VA provides free treatment for physical and mental health conditions related to military sexual trauma, subject to VA program terms.",
    href: "https://www.va.gov/health-care/health-needs-conditions/military-sexual-trauma/",
  },
  {
    title: "Substance-Use Support",
    text:
      "Treatment and recovery resources are available for Veterans experiencing concerns involving alcohol, prescription medications, or other substances.",
    href: "https://www.mentalhealth.va.gov/substance-use/",
  },
  {
    title: "Veterans Crisis Line",
    text:
      "Veterans and their loved ones can receive confidential crisis support 24 hours a day, even without enrollment in VA healthcare.",
    href: "https://www.veteranscrisisline.net/",
    crisis: true,
  },
];

const prescriptionTopics = [
  {
    title: "VA Prescription Management",
    text:
      "Eligible Veterans can refill and track VA prescriptions and review medications through the My HealtheVet experience on VA.gov.",
  },
  {
    title: "Urgent-Care Prescriptions",
    text:
      "Prescriptions from eligible VA urgent-care visits may be filled at participating in-network community pharmacies when VA requirements are met.",
  },
  {
    title: "Medication Savings",
    text:
      "Veterans and their households may also explore prescription discount programs for medications obtained outside VA benefits.",
  },
  {
    title: "Home Delivery",
    text:
      "Depending on the program and medication, Veterans may have access to mail-order or home-delivery prescription options.",
  },
];

const familyQuestions = [
  {
    q: "Can my spouse use my VA healthcare benefits?",
    a:
      "VA healthcare eligibility generally applies to the eligible Veteran. Spouses and dependents may qualify for separate programs such as CHAMPVA or other benefits based on specific eligibility rules.",
  },
  {
    q: "Can KonnectMD include my family?",
    a:
      "Eligible KonnectMD household memberships may include a spouse and dependents, with up to seven family members on qualifying plans. Current membership terms determine eligibility.",
  },
  {
    q: "Does enrolling in KonnectMD affect my VA benefits?",
    a:
      "A separate healthcare-access membership does not replace VA healthcare. Veterans should continue using and protecting all VA benefits for which they are eligible.",
  },
];

const faqs = [
  {
    q: "Does KonnectMD replace VA healthcare?",
    a:
      "No. KonnectMD Access is not affiliated with the U.S. Department of Veterans Affairs and does not replace VA healthcare, Community Care, TRICARE, CHAMPVA, Medicare, or health insurance.",
  },
  {
    q: "Can I keep using VA healthcare if I join KonnectMD?",
    a:
      "Yes. KonnectMD may be used as an additional healthcare-access resource while you continue using all VA benefits for which you are eligible.",
  },
  {
    q: "Does VA offer telehealth?",
    a:
      "Yes. VA Telehealth Services connects eligible Veterans with VA care teams from home, a clinic, or a hospital. Availability may vary by service and location.",
  },
  {
    q: "Can KonnectMD help when a VA facility is closed?",
    a:
      "Qualifying memberships may provide 24/7 virtual physician access for appropriate non-emergency concerns. KonnectMD does not provide emergency care and does not override VA referral or authorization requirements.",
  },
  {
    q: "Can I use Community Care whenever I choose?",
    a:
      "Not automatically. Community Care has eligibility and authorization requirements. In most circumstances, VA approval is required before receiving care from a community provider.",
  },
  {
    q: "Can a Veteran use both VA telehealth and KonnectMD virtual care?",
    a:
      "A Veteran may use different healthcare resources based on eligibility, clinical needs, provider availability, and program terms. Each service operates separately.",
  },
  {
    q: "Can my spouse and children use KonnectMD?",
    a:
      "Qualifying household memberships may include eligible spouses and dependents. Review current membership terms before enrollment.",
  },
  {
    q: "What should I do during a medical emergency?",
    a:
      "Call 911 or go to the nearest emergency department. Do not delay emergency care while waiting for a virtual consultation.",
  },
  {
    q: "How do I contact the Veterans Crisis Line?",
    a:
      "Dial 988 and press 1, text 838255, or use the Veterans Crisis Line online chat. Support is confidential and available 24/7.",
  },
];

const relatedResources = [
  {
    category: "Telehealth",
    title: "Telehealth for Veterans",
    text:
      "Understand how virtual care may complement existing VA and community healthcare resources.",
    link: "/insights/telehealth-for-veterans-hampton-roads",
  },
  {
    category: "Mental Health",
    title: "Veteran Mental Health Support",
    text:
      "Explore warning signs, treatment options, crisis resources, and ways to seek support.",
    link: "/insights/veteran-mental-health-support-hampton-roads",
  },
  {
    category: "Care Decisions",
    title: "Telehealth, Urgent Care, or the ER?",
    text:
      "Use this practical guide to understand which care setting may be appropriate.",
    link: "/insights/when-to-use-telehealth-vs-urgent-care-vs-er-hampton-roads",
  },
  {
  category: "VA Resources",
  title: "Official VA Healthcare Resources",
  text:
    "Locate facilities, review eligibility, prescriptions, Community Care, and benefits directly from the Department of Veterans Affairs.",
  link: "https://www.va.gov/health-care/",
  external: true,
},
];

const comparisonRows = [
  {
    topic: "Purpose",
    va: "Earned healthcare benefits for eligible Veterans.",
    konnectmd:
      "Membership-based healthcare access and savings services.",
  },
  {
    topic: "Who It Supports",
    va: "Eligible Veterans, with separate programs for certain family members.",
    konnectmd:
      "Eligible individuals, Veterans, spouses, dependents, families, and businesses.",
  },
  {
    topic: "Care Network",
    va: "VA facilities, VA telehealth, and authorized Community Care providers.",
    konnectmd:
      "Nationwide virtual access through the KonnectMD provider network and participating services.",
  },
  {
    topic: "Virtual Care",
    va: "VA telehealth services for eligible Veterans.",
    konnectmd:
      "24/7 physician access through qualifying memberships.",
  },
  {
    topic: "Prescriptions",
    va: "VA pharmacy benefits for eligible and prescribed medications.",
    konnectmd:
      "Prescription savings and included medication options that vary by membership.",
  },
  {
    topic: "Emergency Care",
    va: "Subject to VA emergency-care rules and eligibility.",
    konnectmd:
      "Not emergency care. Call 911 for life-threatening symptoms.",
  },
];

export default function VeteransResourceCenter() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Veterans Healthcare Resource Center",
    url: "https://rukonnected.com/resource-center/veterans",
    description:
      "Educational resources for Veterans covering VA healthcare, Community Care, telehealth, mental health, prescriptions, family healthcare, and complementary KonnectMD access.",
    audience: {
      "@type": "Audience",
      audienceType: "Veterans and military families",
    },
    about: [
      {
        "@type": "Thing",
        name: "Veterans healthcare",
      },
      {
        "@type": "Thing",
        name: "VA Community Care",
      },
      {
        "@type": "Thing",
        name: "Veteran mental health",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Veterans Healthcare Resource Center | KonnectMD Access"
        description="Explore verified information about VA healthcare, Community Care, telehealth, mental health, prescriptions, family resources, and where KonnectMD may complement Veteran healthcare access."
        path="/resource-center/veterans"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      <main className="veterans-center">
        <section className="veterans-center-hero">
          <div className="container">
            <nav className="veterans-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/insights">Healthcare Resources</Link>
              <span aria-hidden="true">›</span>
              <span>Veterans Healthcare Resource Center</span>
            </nav>

            <div className="veterans-hero-grid">
              <div className="veterans-hero-copy">
                <p className="veterans-eyebrow">
                  Veterans Healthcare Resource Center
                </p>

                <h1>
                  Healthcare Guidance That Respects the Benefits You Earned.
                </h1>

                <p className="veterans-hero-lead">
                  Understand VA healthcare, Community Care, telehealth, mental
                  health services, prescription resources, family options, and
                  where additional healthcare access may complement—not
                  replace—your existing benefits.
                </p>

                <div className="veterans-hero-actions">
                  <a href="#veteran-options" className="btn btn-primary">
                    Explore Veteran Resources
                  </a>

                  <Link to="/plans" className="btn btn-secondary">
                    Compare Membership Options
                  </Link>
                </div>

                <p className="veterans-affiliation-note">
                  KonnectMD Access is not affiliated with or endorsed by the
                  U.S. Department of Veterans Affairs.
                </p>
              </div>

              <div className="veterans-hero-image-wrap">
                <img
                  src="/images/veterans-healthcare-access-hero.png"
                  alt="Veteran reviewing healthcare resources with a family member"
                  className="veterans-hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="veteran-options" className="veterans-options-section">
          <div className="container">
            <div className="veterans-section-header">
              <p className="veterans-section-eyebrow">
                Understand Your Options
              </p>

              <h2>Veteran Healthcare Is Not One Single Path</h2>

              <p>
                Your appropriate path may involve VA healthcare, authorized
                Community Care, VA telehealth, emergency services, private
                insurance, or additional healthcare-access resources.
              </p>
            </div>

            <div className="veterans-options-grid">
              {healthcareOptions.map((option) => (
                <article className="veterans-option-card" key={option.title}>
                  <span>{option.label}</span>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>

                  {option.internalAnchor ? (
                    <a href={option.href}>{option.action} →</a>
                  ) : (
                    <a
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {option.action} ↗
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="veterans-community-note">
              <strong>Important Community Care reminder</strong>
              <p>
                Community Care is not automatic access to any outside provider.
                Eligibility and authorization requirements apply, and VA
                approval is generally required before care is received.
              </p>
            </div>
          </div>
        </section>
<section className="veterans-state-section">
  <div className="container">

    <div className="veterans-section-header">
      <p className="veterans-section-eyebrow">
        VA Healthcare Enrollment
      </p>

      <h2>
        Start With the Benefits You've Earned
      </h2>

      <p>
        Every eligible Veteran should understand their VA healthcare
        eligibility before exploring additional healthcare options.
        Even if you have private insurance or Medicare, VA healthcare
        may still provide valuable benefits.
      </p>
    </div>

    <div className="veterans-options-grid">

      <article className="veterans-option-card">
        <span>Virginia</span>
        <h3>Virginia VA Healthcare</h3>

        <p>
          Locate VA Medical Centers, Community Based Outpatient Clinics,
          and additional Veteran services throughout Virginia.
        </p>

        <a
          href="https://www.va.gov/find-locations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find Virginia VA Locations →
        </a>
      </article>

      <article className="veterans-option-card">
        <span>North Carolina</span>
        <h3>North Carolina VA Healthcare</h3>

        <p>
          Veterans in Dunn, Fayetteville, Raleigh, Durham and across
          North Carolina can locate nearby VA healthcare facilities and
          Community Care resources.
        </p>

        <a
          href="https://www.va.gov/find-locations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find NC VA Locations →
        </a>
      </article>

      <article className="veterans-option-card">
        <span>Nationwide</span>
        <h3>Anywhere in America</h3>

        <p>
          Traveling or relocating? VA healthcare follows eligible
          Veterans nationwide through the VA healthcare network.
        </p>

        <a
          href="https://www.va.gov/find-locations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search All VA Facilities →
        </a>
      </article>

    </div>

  </div>
</section>
        <section className="veterans-telehealth-section">
          <div className="container veterans-feature-grid">
            <div className="veterans-feature-image-wrap">
              <img
                src="/images/doctor-call.jpg"
                alt="Veteran speaking with a healthcare provider through telehealth"
                className="veterans-feature-image"
              />
            </div>

            <div>
              <p className="veterans-section-eyebrow">
                Telehealth for Veterans
              </p>

              <h2>Virtual Care Can Extend Access Without Replacing VA Care</h2>

              <p>
                VA offers telehealth services that connect eligible Veterans
                with VA care teams from home, a clinic, or a hospital.
                Additional virtual-care memberships may provide another path
                for appropriate non-emergency needs, especially for family
                members or when convenient access matters.
              </p>

              <div className="veterans-link-stack">
                <a
                  href="https://telehealth.va.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore official VA Telehealth Services ↗
                </a>

                <Link to="/insights/telehealth-for-veterans-hampton-roads">
                  Read Our Telehealth for Veterans Guide →
                </Link>

                <Link to="/resource-center/telehealth">
                  Visit the Telehealth Resource Center →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="veterans-mental-section">
          <div className="container">
            <div className="veterans-section-header">
              <p className="veterans-section-eyebrow">
                Mental Health and Emotional Wellness
              </p>

              <h2>Support Is Available—and Asking for Help Is a Strength</h2>

              <p>
                Mental health needs can involve trauma, depression, anxiety,
                relationship stress, substance use, grief, sleep problems, and
                the challenges of transitioning from military to civilian life.
              </p>
            </div>

            <div className="veterans-mental-grid">
              {mentalHealthResources.map((resource) => (
                <article
                  className={`veterans-mental-card ${
                    resource.crisis ? "is-crisis" : ""
                  }`}
                  key={resource.title}
                >
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>

                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View official resource ↗
                  </a>
                </article>
              ))}
            </div>

            <div className="veterans-crisis-banner">
              <div>
                <strong>Veterans Crisis Line</strong>
                <p>
                  Confidential support is available 24/7 for Veterans, service
                  members, and their loved ones—even without enrollment in VA
                  healthcare.
                </p>
              </div>

              <div className="veterans-crisis-actions">
                <a href="tel:988">Call 988, then press 1</a>
                <a href="sms:838255">Text 838255</a>
              </div>
            </div>
          </div>
        </section>

        <section className="veterans-prescription-section">
          <div className="container">
            <div className="veterans-section-header">
              <p className="veterans-section-eyebrow">
                Prescription Resources
              </p>

              <h2>Understand Every Medication Resource Available to You</h2>

              <p>
                VA pharmacy benefits should remain the first resource for
                eligible VA-prescribed medications. Additional savings programs
                may be useful for household members, non-VA prescriptions, or
                medications outside an existing benefit.
              </p>
            </div>

            <div className="veterans-prescription-grid">
              {prescriptionTopics.map((topic) => (
                <article key={topic.title}>
                  <h3>{topic.title}</h3>
                  <p>{topic.text}</p>
                </article>
              ))}
            </div>

            <div className="veterans-resource-actions">
              <a
                href="https://www.va.gov/health-care/manage-prescriptions-medications/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Manage VA Prescriptions
              </a>

              <Link
                to="/problems/prescription-savings"
                className="btn btn-primary"
              >
                Explore Prescription Savings
              </Link>
            </div>
          </div>
        </section>

        <section className="veterans-family-section">
          <div className="container veterans-family-grid">
            <div>
              <p className="veterans-section-eyebrow">
                Supporting Veteran Families
              </p>

              <h2>Your Healthcare Needs May Extend Beyond the Veteran</h2>

              <p>
                VA healthcare eligibility and family eligibility are not the
                same. Spouses and dependents should review programs such as
                CHAMPVA and any benefits connected to military or Veteran
                status. A separate household membership may also help support
                eligible family members.
              </p>

              <a
                href="https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Review official CHAMPVA information ↗
              </a>
            </div>

            <div className="veterans-family-questions">
              {familyQuestions.map((item) => (
                <article key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="where-konnectmd-fits"
          className="veterans-comparison-section"
        >
          <div className="container">
            <div className="veterans-section-header veterans-light-header">
              <p className="veterans-section-eyebrow">
                Where KonnectMD Fits
              </p>

              <h2>VA Healthcare and KonnectMD Serve Different Purposes</h2>

              <p>
                The goal is not to choose one and abandon the other. The goal
                is to understand which resource fits each healthcare need.
              </p>
            </div>

            <div className="veterans-comparison-table-wrap">
              <table className="veterans-comparison-table">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>VA Healthcare</th>
                    <th>KonnectMD Access</th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.topic}>
                      <th scope="row">{row.topic}</th>
                      <td>{row.va}</td>
                      <td>{row.konnectmd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="veterans-comparison-disclaimer">
              <strong>Clear distinction</strong>
              <p>
                KonnectMD Access is an independent healthcare-access resource
                and membership pathway. It is not the Department of Veterans
                Affairs, is not VA Community Care, and does not determine
                eligibility for government benefits.
              </p>
            </div>

            <div className="veterans-membership-actions">
              <Link to="/plans" className="btn btn-primary">
                Compare KonnectMD Memberships
              </Link>

              <Link to="/get-details" className="btn btn-secondary">
                Request More Information
              </Link>
            </div>
          </div>
        </section>
<section className="veterans-benefit-section">
  <div className="container">

    <div className="veterans-section-header">
      <p className="veterans-section-eyebrow">
        Practical Everyday Benefits
      </p>

      <h2>
       How KonnectMD May Complement Your VA Benefits
      </h2>

      <p>
        Every Veteran's healthcare situation is different. Many continue using
        their earned VA benefits while adding additional healthcare resources
        that may provide greater convenience, broader household coverage, or
        another way to access care for appropriate non-emergency needs.
      </p>
    </div>

    <div className="veterans-benefit-grid">

      <article className="veterans-benefit-card">
        <h3>After-Hours Care</h3>
        <p>
          When your VA office is closed, qualifying memberships may provide
          24/7 virtual physician access for many common non-emergency concerns.
        </p>
      </article>

      <article className="veterans-benefit-card">
        <h3>Support for Your Family</h3>
        <p>
          VA healthcare primarily serves eligible Veterans, while qualifying
          KonnectMD household memberships may also include spouses and
          dependents.
        </p>
      </article>

      <article className="veterans-benefit-card">
        <h3>Prescription Savings</h3>
        <p>
          Members may receive prescription savings and medication benefits,
          depending on their membership level and current program offerings.
        </p>
      </article>

      <article className="veterans-benefit-card">
        <h3>Traveling Nationwide</h3>
        <p>
          Veterans who travel or live in different states may appreciate
          nationwide virtual healthcare access available through qualifying
          memberships.
        </p>
      </article>

      <article className="veterans-benefit-card">
        <h3>Another Healthcare Option</h3>
        <p>
          KonnectMD is designed to complement—not replace—VA healthcare by
          providing another healthcare-access resource for appropriate
          situations.
        </p>
      </article>

      <article className="veterans-benefit-card veterans-benefit-highlight">
        <h3>Our Recommendation</h3>
        <p>
          Keep every VA benefit you've earned. Understand all of your
          healthcare options, then decide how additional resources may best
          support you and your family.
        </p>
      </article>

    </div>

  </div>
</section>
        <section className="veterans-related-section">
          <div className="container">
            <div className="veterans-section-header">
              <p className="veterans-section-eyebrow">
                Continue Learning
              </p>

              <h2> Continue Your Veterans Healthcare Journey</h2>
            </div>

            <div className="veterans-related-grid">
         {relatedResources.map((resource) =>
  resource.external ? (
    <a
      key={resource.title}
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="veterans-related-card"
    >
      <span>{resource.category}</span>
      <h3>{resource.title}</h3>
      <p>{resource.text}</p>
      <strong>Visit Official Resource ↗</strong>
    </a>
  ) : (
    <Link
      key={resource.title}
      to={resource.link}
      className="veterans-related-card"
    >
      <span>{resource.category}</span>
      <h3>{resource.title}</h3>
      <p>{resource.text}</p>
      <strong>Read Resource →</strong>
    </Link>
  )
)}
            
            </div>
          </div>
        </section>

        <section className="veterans-faq-section">
          <div className="container">
            <div className="veterans-section-header">
              <p className="veterans-section-eyebrow">
                Frequently Asked Questions
              </p>

              <h2>Clear Answers for Veterans and Their Families</h2>
            </div>

            <div className="veterans-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="veterans-sources-section">
          <div className="container">
            <div className="veterans-sources-card">
              <div>
                <p className="veterans-section-eyebrow">
                  Trusted Sources
                </p>
                <p className="veterans-source-note">
Every educational statement on this page has been developed using official
U.S. Department of Veterans Affairs resources, U.S. government healthcare
resources, or official KonnectMD membership information where applicable.
</p>

                <h2>Built From Official Veteran Healthcare Resources</h2>

                <p>
                  Educational information on this page is based primarily on
                  official U.S. Department of Veterans Affairs resources,
                  including VA Healthcare, Community Care, VA Telehealth, VA
                  Mental Health, VA pharmacy resources, and the Veterans Crisis
                  Line. KonnectMD information is based on current KonnectMD
                  membership materials.
                </p>
              </div>

              <div className="veterans-sources-links">
                <a
                  href="https://www.va.gov/health-care/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VA Healthcare ↗
                </a>

                <a
                  href="https://www.va.gov/resources/eligibility-for-community-care-outside-va/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community Care Eligibility ↗
                </a>

                <a
                  href="https://telehealth.va.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VA Telehealth ↗
                </a>

                <a
                  href="https://www.veteranscrisisline.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Veterans Crisis Line ↗
                </a>
              </div>

              <p className="veterans-medical-disclaimer">
                This page is educational and is not medical, legal, insurance,
                or benefits advice. Eligibility and program rules can change.
                Confirm current information directly with VA and consult a
                qualified healthcare professional regarding personal medical
                needs.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}