import "../Styles/BehavioralHealthResourceCenter.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const supportAreas = [
  {
    category: "Emotional Wellness",
    title: "Stress, Anxiety, Grief, and Emotional Health",
    text:
      "Support may be available for stress, anxiety, low mood, grief, trauma, burnout, emotional exhaustion, and other concerns affecting daily life.",
  },
  {
    category: "Relationships & Family",
    title: "Marriage, Parenting, and Family Support",
    text:
      "Counseling and guidance may address marriage, communication, parenting stress, child behavior, family conflict, co-parenting, separation, and major household changes.",
  },
  {
    category: "Addiction & Recovery",
    title: "Alcohol, Drugs, Gambling, and Behavioral Addictions",
    text:
      "Resources may help with alcohol use, drugs, prescription-medication concerns, gambling, gaming, internet use, compulsive behavior, and recovery support.",
  },
  {
    category: "Workplace Wellness",
    title: "Career Stress, Burnout, and Workplace Concerns",
    text:
      "Support may include workplace conflict, harassment, bullying, career uncertainty, leadership pressure, burnout, job stress, and work-life balance.",
  },
  {
    category: "Practical Life Support",
    title: "Financial, Legal, Caregiving, and Daily-Living Resources",
    text:
      "Members may receive information or referrals involving financial pressure, legal concerns, child care, elder care, housing, transportation, caregiving, and basic needs.",
  },
  {
    category: "Health-Related Support",
    title: "Chronic Illness, Recovery, and Major Life Changes",
    text:
      "Support may help people manage the emotional and practical effects of chronic illness, pain, medical recovery, disability, caregiving, and significant life transitions.",
  },
];

const lifeChallenges = [
  {
    title: "“I’ve been overwhelmed lately.”",
    text:
      "Stress, anxiety, grief, burnout, and emotional exhaustion can affect sleep, relationships, work, physical health, and everyday decisions.",
  },
  {
    title: "“My relationship is struggling.”",
    text:
      "Couples and families may need support with communication, conflict, trust, separation, parenting, co-parenting, or major changes at home.",
  },
  {
    title: "“I’m worried about my child.”",
    text:
      "Parents may seek guidance involving behavior, school concerns, emotional changes, family routines, social pressures, and communication.",
  },
  {
    title: "“Work is becoming too much.”",
    text:
      "Workplace pressure, conflict, harassment, job uncertainty, leadership demands, and work-life imbalance can affect the entire household.",
  },
  {
    title: "“I’m caring for someone else.”",
    text:
      "Caregiving for children, aging parents, a spouse, or another loved one may create emotional, financial, legal, and practical challenges.",
  },
  {
    title: "“Money and daily life are causing stress.”",
    text:
      "Debt, housing, legal concerns, child care, elder care, transportation, and unexpected expenses may affect emotional wellness and family stability.",
  },
];

const professionalSupport = [
  {
    title: "Licensed Counseling",
    text:
      "Counselors may help with emotional wellness, stress, grief, relationships, parenting, family conflict, workplace concerns, substance use, and life transitions.",
  },
  {
    title: "Psychology",
    text:
      "Psychologists may provide assessments, psychotherapy, behavioral treatment, and support for more complex emotional or psychological concerns.",
  },
  {
    title: "Psychiatry",
    text:
      "Psychiatrists are medical doctors who may diagnose mental-health conditions and prescribe or manage medication when clinically appropriate.",
  },
  {
    title: "Life and Resource Support",
    text:
      "Some concerns may benefit from financial guidance, legal referrals, career coaching, caregiving resources, child-care support, elder-care navigation, or community assistance.",
  },
];

const konnectmdBenefits = [
  {
    title: "Counseling and Emotional Support",
    text:
      "Qualifying memberships may provide access to counseling for stress, grief, relationships, parenting, family concerns, substance use, work pressure, and everyday life challenges.",
  },
  {
    title: "Psychology and Psychiatry",
    text:
      "Depending on the membership level, members may have access to or discounts on psychology and psychiatric services, subject to provider availability and program terms.",
  },
  {
    title: "Marriage and Family Resources",
    text:
      "Available support may include marriage, couples, parenting, family conflict, child-behavior concerns, communication, and household transitions.",
  },
  {
    title: "Workplace and Career Support",
    text:
      "Resources may help with job stress, workplace conflict, harassment, burnout, career decisions, leadership pressure, and work-life balance.",
  },
  {
    title: "Practical Life Navigation",
    text:
      "Members may receive information or referrals involving financial concerns, legal resources, child care, elder care, caregiving, housing, and daily-living needs.",
  },
  {
    title: "Household Access",
    text:
      "Qualifying memberships may support eligible spouses and dependents, allowing different members of the household to access resources for different needs.",
  },
];

const faqs = [
  {
    q: "Is this only for diagnosed mental-health conditions?",
    a:
      "No. Support may address emotional wellness, relationships, marriage, parenting, workplace stress, substance use, caregiving, financial concerns, legal referrals, child care, elder care, and other practical life challenges.",
  },
  {
    q: "What kinds of counseling concerns may be addressed?",
    a:
      "Depending on the membership and provider, counseling may address stress, anxiety, low mood, grief, trauma, family conflict, relationships, parenting, workplace concerns, substance use, burnout, and major life changes.",
  },
  {
    q: "Can couples and families use the services?",
    a:
      "Qualifying services may include marriage, relationship, parenting, family, and child-behavior support. Availability and eligibility depend on the membership and provider.",
  },
  {
    q: "Does the program include psychology and psychiatry?",
    a:
      "Some membership levels may include access to or discounts on psychology and psychiatric services. Current pricing, visit limits, eligibility, and provider availability should be confirmed before use.",
  },
  {
    q: "Can the program help with alcohol, drugs, gambling, or gaming?",
    a:
      "Support may be available for alcohol use, drug-related concerns, prescription-medication concerns, gambling, gaming, internet use, and other behavioral addictions. Specialized or intensive treatment may require additional services.",
  },
  {
    q: "Can it help with workplace or career concerns?",
    a:
      "Yes. Resources may address workplace stress, burnout, conflict, bullying, harassment, job pressure, leadership challenges, career uncertainty, and work-life balance.",
  },
  {
    q: "Can it help with financial or legal stress?",
    a:
      "Members may receive educational guidance, resource navigation, or referrals involving financial and legal concerns. These services do not replace advice from a licensed financial professional or attorney.",
  },
  {
    q: "Are child-care and elder-care resources included?",
    a:
      "Resource navigation may be available for child care, elder care, caregiving, senior support, daily living, and community assistance, depending on the program.",
  },
  {
    q: "Is virtual counseling confidential?",
    a:
      "Licensed providers and participating platforms follow applicable privacy requirements. Members should use a private location and review the provider’s current privacy practices.",
  },
  {
    q: "What should I do during an immediate crisis?",
    a:
      "Call or text 988 for suicidal thoughts, severe emotional distress, or an urgent behavioral-health or substance-use crisis. Call 911 when there is immediate physical danger or a medical emergency.",
  },
];

const relatedResources = [
  {
    category: "Family Healthcare",
    title: "Family Healthcare Resource Center",
    text:
      "Explore healthcare access, family support, prescriptions, virtual care, caregiving, and household membership options.",
    link: "/resource-center/family-healthcare",
  },
  {
    category: "Small Business",
    title: "Small Business Healthcare Resource Center",
    text:
      "Learn how behavioral-health and life-support resources may strengthen an employee benefit strategy.",
    link: "/resource-center/small-business-healthcare",
  },
  {
    category: "Veterans",
    title: "Veterans Healthcare Resource Center",
    text:
      "Explore VA resources, crisis support, telehealth, family needs, and complementary healthcare-access options.",
    link: "/resource-center/veterans",
  },
  {
    category: "Memberships",
    title: "Compare KonnectMD Memberships",
    text:
      "Review which membership levels include counseling and broader behavioral-health and life-support resources.",
    link: "/plans",
  },
];

export default function BehavioralHealthResourceCenter() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Behavioral Health, Wellness and Life Support Resource Center",
    url: "https://rukonnected.com/resource-center/behavioral-health",
    description:
      "Educational resources covering counseling, psychology, psychiatry, emotional wellness, relationships, parenting, workplace stress, substance use, financial stress, legal resources, caregiving, child care, elder care, and practical life support.",
  };

  return (
    <>
      <SEO
        title="Behavioral Health & Life Support Resource Center | KonnectMD Access"
        description="Explore counseling, psychology, psychiatry, emotional wellness, marriage, parenting, workplace stress, addiction support, financial guidance, legal referrals, caregiving, and practical life resources."
        path="/resource-center/behavioral-health"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      <main className="behavioral-center">
        <section className="behavioral-hero">
          <div className="container">
            <nav className="behavioral-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/#learning-center">Healthcare Resources</Link>
              <span aria-hidden="true">›</span>
              <span>Behavioral Health & Life Support</span>
            </nav>

            <div className="behavioral-hero-grid">
              <div>
                <p className="behavioral-eyebrow">
                  Behavioral Health, Wellness & Life Support
                </p>

                <h1>
                  Support for Your Mind, Family, Career, and Everyday Life.
                </h1>

                <p className="behavioral-lead">
                  Life’s challenges are not limited to a diagnosis. Explore
                  counseling, psychology, psychiatry, marriage and parenting
                  support, workplace resources, addiction support, financial
                  guidance, legal referrals, caregiving assistance, and
                  practical resources for everyday life.
                </p>

                <div className="behavioral-hero-actions">
                  <a href="#support-areas" className="btn btn-primary">
                    Explore Support Resources
                  </a>

                  <Link to="/plans" className="btn btn-secondary">
                    Review Membership Options
                  </Link>
                </div>

                <div className="behavioral-badges">
                  <span>Emotional Wellness</span>
                  <span>Family Support</span>
                  <span>Workplace Resources</span>
                  <span>Practical Life Assistance</span>
                </div>
              </div>

              <div className="behavioral-hero-image-wrap">
                <img
                  src="/images/behavioral-health-counseling-session.jpg"
                  alt="Licensed counselor meeting with an adult during a professional behavioral-health session"
                  className="behavioral-hero-image"
                />

                <div className="behavioral-hero-card">
                  <strong>More than counseling</strong>
                  <span>
                    Emotional, family, workplace, financial, legal, caregiving,
                    addiction, and practical life support.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="support-areas"
          className="behavioral-support-section"
        >
          <div className="container">
            <div className="behavioral-section-header">
              <p className="behavioral-section-eyebrow">
                Life Does Not Always Go According to Plan
              </p>

              <h2>Support for Life’s Challenges—Not Just Mental Health</h2>

              <p>
                Emotional wellness is only one part of a healthy life.
                Relationships, parenting, work, finances, caregiving,
                addiction, health concerns, and major changes can all affect
                personal and family well-being.
              </p>
            </div>

            <div className="behavioral-support-grid">
              {supportAreas.map((item) => (
                <article key={item.title}>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="behavioral-practical-section">
          <div className="container">
            <div className="behavioral-section-header behavioral-light-header">
              <p className="behavioral-section-eyebrow">
                You Are Not Alone
              </p>

              <h2>You Do Not Have to Face Life’s Challenges Alone</h2>

              <p>
                People often wait until a situation becomes overwhelming before
                asking for help. Support may begin with counseling, family
                guidance, practical resources, workplace assistance, or simply
                speaking with someone who can help identify the next step.
              </p>
            </div>

            <div className="behavioral-practical-grid">
              {lifeChallenges.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="behavioral-professional-section">
          <div className="container">
            <div className="behavioral-section-header">
              <p className="behavioral-section-eyebrow">
                Choosing the Right Support
              </p>

              <h2>Understanding the Different Types of Help</h2>

              <p>
                The right resource depends on the concern, severity, treatment
                goals, medical history, family situation, and whether practical
                assistance, therapy, medication, or crisis intervention may be
                needed.
              </p>
            </div>

            <div className="behavioral-professional-grid">
              {professionalSupport.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="behavioral-crisis-section">
          <div className="container behavioral-crisis-grid">
            <div>
              <p className="behavioral-crisis-eyebrow">
                Immediate Crisis Support
              </p>

              <h2>Help Is Available Right Now</h2>

              <p>
                Call or text 988 for suicidal thoughts, severe emotional
                distress, or an urgent substance-use or behavioral-health
                crisis. Call 911 when there is immediate physical danger or a
                medical emergency.
              </p>
            </div>

            <div className="behavioral-crisis-actions">
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
                href="https://www.samhsa.gov/find-help"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Local Support ↗
              </a>
            </div>
          </div>
        </section>

        <section className="behavioral-konnectmd-section">
          <div className="container">
            <div className="behavioral-section-header behavioral-light-header">
              <p className="behavioral-section-eyebrow">
                Where KonnectMD May Help
              </p>

              <h2>A Broader Support System for Individuals and Families</h2>

              <p>
                Qualifying KonnectMD memberships may combine counseling,
                behavioral-health access, family resources, practical life
                support, virtual physician access, prescription savings, and
                other healthcare services through one membership experience.
              </p>
            </div>

            <div className="behavioral-konnectmd-grid">
              {konnectmdBenefits.map((item) => (
                <article key={item.title}>
                  <span aria-hidden="true">✓</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="behavioral-membership-message">
              <div>
                <strong>
                  One membership may support different needs across the
                  household.
                </strong>

                <p>
                  Counseling, psychology, psychiatry, visit limits, family
                  eligibility, resource navigation, provider access, pricing,
                  and available services vary by membership level and current
                  program terms.
                </p>
              </div>

              <div className="behavioral-membership-actions">
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

        <section className="behavioral-faq-section">
          <div className="container">
            <div className="behavioral-section-header">
              <p className="behavioral-section-eyebrow">
                Frequently Asked Questions
              </p>

              <h2>Behavioral Health and Life Support Questions</h2>
            </div>

            <div className="behavioral-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="behavioral-related-section">
          <div className="container">
            <div className="behavioral-section-header">
              <p className="behavioral-section-eyebrow">
                Continue Learning
              </p>

              <h2>Continue Your Healthcare Journey</h2>
            </div>

            <div className="behavioral-related-grid">
              {relatedResources.map((resource) => (
                <Link
                  key={resource.title}
                  to={resource.link}
                  className="behavioral-related-card"
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

        <section className="behavioral-sources-section">
          <div className="container">
            <div className="behavioral-sources-card">
              <div>
                <p className="behavioral-section-eyebrow">
                  Trusted Sources
                </p>

                <h2>Educational Guidance and Program Information</h2>

                <p>
                  General behavioral-health information is based on recognized
                  national mental-health, substance-use, and crisis-support
                  resources. KonnectMD service descriptions are based on
                  current program information and should be confirmed through
                  current membership materials.
                </p>
              </div>

              <div className="behavioral-source-links">
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
                  988 Lifeline ↗
                </a>
              </div>

              <div className="behavioral-disclaimer">
                <strong>Important notice</strong>

                <p>
                  This page is educational and does not provide medical,
                  psychological, legal, financial, or emergency advice.
                  Professional services and referrals vary by membership,
                  location, eligibility, provider availability, and current
                  program terms.
                </p>

                <p>
                  Financial and legal resource support does not replace advice
                  from a licensed financial professional or attorney.
                </p>

                <p>
                  If you or someone else is in immediate physical danger, call
                  911. For suicidal thoughts, severe emotional distress, or
                  urgent behavioral-health support, call or text 988.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}