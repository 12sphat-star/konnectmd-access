import "../Styles/FamilyHealthcareResourceCenter.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const familyNeeds = [
  {
    category: "Children",
    title: "Pediatric and Developmental Care",
    text:
      "Children need age-appropriate care that supports growth, development, vaccinations, preventive screenings, everyday illnesses, and behavioral health.",
  },
  {
    category: "Adults",
    title: "Everyday and Preventive Care",
    text:
      "Adults may need routine checkups, screenings, medication management, acute care, behavioral-health support, and chronic-condition follow-up.",
  },
  {
    category: "Older Adults",
    title: "Healthy Aging Support",
    text:
      "Older household members may benefit from preventive care, medication reviews, chronic-condition management, fall-risk discussions, and caregiver support.",
  },
  {
    category: "Caregivers",
    title: "Support for the Person Coordinating Care",
    text:
      "Parents, spouses, and caregivers often manage appointments, prescriptions, transportation, and health decisions for multiple family members.",
  },
  {
    category: "Behavioral Health",
    title: "Emotional and Family Support",
    text:
      "Families may need help with stress, relationships, parenting, grief, child behavior, work pressure, caregiving, or other life challenges.",
  },
  {
    category: "Prescriptions",
    title: "Medication Access and Savings",
    text:
      "Prescription needs can differ across a household. Savings programs and included benefits may help reduce eligible medication costs.",
  },
];

const preventiveCareItems = [
  {
    title: "Routine Checkups",
    text:
      "Regular visits help families discuss health changes, risk factors, medications, development, and recommended preventive services.",
  },
  {
    title: "Vaccinations",
    text:
      "Recommended vaccines vary by age, health history, pregnancy status, occupation, travel, and other individual circumstances.",
  },
  {
    title: "Health Screenings",
    text:
      "Screening recommendations may include blood pressure, cholesterol, diabetes, cancer, vision, hearing, developmental, and behavioral-health checks.",
  },
  {
    title: "Dental and Vision Care",
    text:
      "Routine dental and vision care can help identify concerns early and support overall health throughout childhood and adulthood.",
  },
  {
    title: "Developmental Monitoring",
    text:
      "Parents and clinicians can track how a child plays, learns, speaks, behaves, and moves, then act early when concerns appear.",
  },
  {
    title: "Medication Reviews",
    text:
      "A healthcare professional can review prescriptions, over-the-counter products, allergies, possible interactions, and ongoing medication needs.",
  },
];

const virtualCareUses = [
  {
    title: "Common Illnesses",
    text:
      "Virtual care may be appropriate for certain cold, flu, allergy, rash, stomach, urinary, or other non-emergency concerns.",
  },
  {
    title: "Medication Questions",
    text:
      "A virtual visit may help with eligible refill questions, side-effect discussions, medication guidance, or determining whether in-person care is needed.",
  },
  {
    title: "Follow-Up Care",
    text:
      "Some follow-up appointments can be completed virtually when a physical examination, testing, or procedure is not required.",
  },
  {
    title: "Behavioral Health",
    text:
      "Counseling and behavioral-health support may be delivered by secure video or telephone when virtual care is appropriate.",
  },
  {
    title: "Parent and Caregiver Guidance",
    text:
      "Parents and caregivers may use telehealth to discuss symptoms, developmental concerns, care instructions, or next steps with a professional.",
  },
  {
    title: "Travel and After-Hours Needs",
    text:
      "Nationwide virtual access may provide another option for appropriate non-emergency concerns when the family is traveling or local offices are closed.",
  },
];

const careLevels = [
  {
    level: "Virtual Care",
    title: "Appropriate Non-Emergency Concerns",
    text:
      "Useful when a licensed provider can reasonably evaluate the concern through video, phone, history, and visible symptoms.",
  },
  {
    level: "Primary Care",
    title: "Routine and Ongoing Healthcare",
    text:
      "Appropriate for preventive care, physical examinations, chronic-condition management, vaccinations, screening, and coordinated follow-up.",
  },
  {
    level: "Urgent Care",
    title: "Problems Requiring Prompt In-Person Evaluation",
    text:
      "Useful for non-life-threatening concerns that may require examination, testing, imaging, stitches, or treatment that cannot be completed virtually.",
  },
  {
    level: "Emergency Care",
    title: "Life-Threatening or Severe Symptoms",
    text:
      "Call 911 or seek emergency care for severe breathing trouble, stroke signs, chest pain, major injuries, uncontrolled bleeding, loss of consciousness, or immediate danger.",
    emergency: true,
  },
];

const konnectmdBenefits = [
  {
    title: "One Household Membership",
    text:
      "Qualifying memberships may support the member, an eligible spouse, and eligible dependents, with up to seven household members under current program terms.",
  },
  {
    title: "24/7 Virtual Physician Access",
    text:
      "Members may connect with licensed physicians for appropriate non-emergency concerns without relying only on traditional office hours.",
  },
  {
    title: "Prescription Benefits",
    text:
      "Memberships may include acute-medication benefits, prescription savings, and broader chronic-medication benefits depending on the selected level.",
  },
  {
    title: "Behavioral Health and Life Support",
    text:
      "Qualifying plans may include counseling and resources involving stress, relationships, parenting, work, financial pressure, legal referrals, and caregiving.",
  },
  {
    title: "Nationwide Access",
    text:
      "Virtual healthcare and participating benefit resources may be accessed nationwide, subject to provider licensing, availability, and program terms.",
  },
  {
    title: "Additional Health Savings",
    text:
      "Membership benefits may include savings or resource access for dental, vision, labs, chiropractic care, and other eligible services.",
  },
];

const familyScenarios = [
  {
    title: "A Child Gets Sick After Hours",
    text:
      "A parent may use virtual physician access to discuss symptoms and determine whether home care, a prescription, urgent care, or emergency care is appropriate.",
  },
  {
    title: "A Parent Needs a Prescription",
    text:
      "The family can review current medication benefits, participating pharmacies, and available pricing before filling an eligible prescription.",
  },
  {
    title: "A Spouse Needs Counseling",
    text:
      "An eligible household member may use applicable counseling or behavioral-health resources included in the selected membership.",
  },
  {
    title: "A Caregiver Feels Overwhelmed",
    text:
      "Behavioral-health and practical life-support resources may help with stress, elder care, family responsibilities, financial pressure, and resource navigation.",
  },
];

const faqs = [
  {
    q: "Can one KonnectMD membership cover my whole family?",
    a:
      "Qualifying household memberships may include the primary member, an eligible spouse, and eligible dependents, with up to seven household members under current program rules. Confirm eligibility before enrollment.",
  },
  {
    q: "Is KonnectMD health insurance?",
    a:
      "No. KonnectMD is a healthcare-access membership, not health insurance. It does not replace comprehensive insurance, Medicare, Medicaid, VA benefits, emergency care, or other coverage.",
  },
  {
    q: "Can children use virtual care?",
    a:
      "Children may receive age-appropriate virtual care when the service is available and the concern is suitable for telehealth. A provider may direct the child to in-person or emergency care.",
  },
  {
    q: "Does virtual care replace pediatric or primary care visits?",
    a:
      "No. Children and adults still need appropriate in-person preventive care, examinations, screenings, vaccinations, testing, procedures, and ongoing primary care.",
  },
  {
    q: "Can my family use the prescription benefits?",
    a:
      "Eligible household members may use applicable prescription benefits. Included medications, discounts, pharmacy options, quantities, and formularies vary by membership and current terms.",
  },
  {
    q: "Are behavioral-health services available for families?",
    a:
      "Qualifying memberships may provide counseling and support involving emotional wellness, relationships, parenting, child behavior, grief, workplace stress, substance use, caregiving, and practical life concerns.",
  },
  {
    q: "Can my family use KonnectMD while traveling?",
    a:
      "Nationwide virtual access may be available for appropriate non-emergency concerns, subject to provider licensing, service availability, and membership terms.",
  },
  {
    q: "How quickly can members begin using services?",
    a:
      "Access timing depends on enrollment, activation, the selected membership, and the specific service. Members should complete onboarding and review their portals before care is needed.",
  },
  {
    q: "What should we do during a medical emergency?",
    a:
      "Call 911 or go to the nearest emergency department. Do not wait for a virtual consultation when someone has severe or life-threatening symptoms.",
  },
  {
    q: "How do I know which membership is appropriate?",
    a:
      "Compare your household's priorities, including physician access, counseling, chronic medications, preventive care, and additional benefits. Current plan materials should guide the decision.",
  },
];

const relatedResources = [
  {
    category: "Virtual Care",
    title: "Telehealth Resource Center",
    text:
      "Understand when virtual care may be appropriate for children, adults, and caregivers.",
    link: "/resource-center/telehealth",
  },
  {
    category: "Prescription Savings",
    title: "Prescription Savings Resource Center",
    text:
      "Learn how included medications, pharmacy discounts, and home delivery may help a household.",
    link: "/resource-center/prescription-savings",
  },
  {
    category: "Behavioral Health",
    title: "Behavioral Health & Life Support",
    text:
      "Explore emotional, family, workplace, financial, legal, caregiving, and counseling resources.",
    link: "/resource-center/behavioral-health",
  },
  {
    category: "Memberships",
    title: "Compare KonnectMD Memberships",
    text:
      "Review Silver, Gold, Platinum, and Titanium based on your household's priorities.",
    link: "/plans",
  },
];

export default function FamilyHealthcareResourceCenter() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Family Healthcare Resource Center",
    url: "https://rukonnected.com/resource-center/family-healthcare",
    description:
      "Educational guidance about family healthcare, preventive care, pediatric needs, healthy aging, telehealth, prescriptions, behavioral health, and KonnectMD household benefits.",
    audience: {
      "@type": "Audience",
      audienceType: "Families, parents, caregivers, and households",
    },
    about: [
      {
        "@type": "Thing",
        name: "Family healthcare",
      },
      {
        "@type": "Thing",
        name: "Preventive care",
      },
      {
        "@type": "Thing",
        name: "Pediatric telehealth",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Family Healthcare Resource Center | KonnectMD Access"
        description="Explore preventive care, pediatric and adult healthcare, virtual care, prescriptions, behavioral health, caregiving, and how a qualifying KonnectMD membership may support your household."
        path="/resource-center/family-healthcare"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="family-center">
        <section className="family-hero">
          <div className="container">
            <nav className="family-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/insights">Healthcare Resources</Link>
              <span aria-hidden="true">›</span>
              <span>Family Healthcare Resource Center</span>
            </nav>

            <div className="family-hero-grid">
              <div className="family-hero-copy">
                <p className="family-eyebrow">
                  Family Healthcare Resource Center
                </p>

                <h1>
                  One Family.
                  <span>Different Healthcare Needs.</span>
                </h1>

                <p className="family-hero-lead">
                  Understand preventive care, children's health, adult and
                  senior needs, virtual care, prescriptions, behavioral health,
                  caregiving, and where KonnectMD may help your household stay
                  connected to care.
                </p>

                <div className="family-hero-actions">
                  <a href="#family-needs" className="btn btn-primary">
                    Explore Family Resources
                  </a>

                  <Link to="/plans" className="btn btn-secondary">
                    Compare Family Memberships
                  </Link>
                </div>

                <div className="family-badges">
                  <span>Whole-Household Focus</span>
                  <span>Educational Resource</span>
                  <span>Nationwide Access</span>
                </div>
              </div>

              <div className="family-hero-image-wrap">
                <img
                  src="/images/family-care.jpg"
                  alt="Multi-generational family reviewing healthcare options together"
                  className="family-hero-image"
                />

                <div className="family-hero-card">
                  <strong>Up to 7 household members</strong>
                  <span>
                    Subject to membership eligibility and current program
                    terms.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="family-needs" className="family-needs-section">
          <div className="container">
            <div className="family-section-header">
              <p className="family-section-eyebrow">
                Whole-Family Healthcare
              </p>

              <h2>Every Stage of Life Brings Different Needs</h2>

              <p>
                A strong family healthcare plan considers preventive care,
                everyday illness, medications, emotional wellness, development,
                aging, and the needs of the person coordinating care.
              </p>
            </div>

            <div className="family-needs-grid">
              {familyNeeds.map((item) => (
                <article className="family-info-card" key={item.title}>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="family-preventive-section">
          <div className="container">
            <div className="family-section-header family-light-header">
              <p className="family-section-eyebrow">
                Preventive Care
              </p>

              <h2>Healthcare Is More Than Treating Illness</h2>

              <p>
                Preventive services can help identify health concerns earlier,
                monitor development, reduce risk, and support healthier
                decisions across every stage of life.
              </p>
            </div>

            <div className="family-preventive-grid">
              {preventiveCareItems.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="family-source-row">
              <a
                href="https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/preventive-care"
                target="_blank"
                rel="noopener noreferrer"
              >
                Healthy People 2030 Preventive Care ↗
              </a>

              <a
                href="https://www.cdc.gov/act-early/milestones/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC Developmental Milestones ↗
              </a>
            </div>
          </div>
        </section>

        <section className="family-virtual-section">
          <div className="container">
            <div className="family-section-header">
              <p className="family-section-eyebrow">
                Virtual Care for Families
              </p>

              <h2>Convenient Care Without Treating Every Concern the Same</h2>

              <p>
                Telehealth may help with many appropriate non-emergency needs,
                but it does not replace physical examinations, testing,
                vaccinations, procedures, or emergency care.
              </p>
            </div>

            <div className="family-virtual-grid">
              {virtualCareUses.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="family-virtual-action">
              <Link
                to="/resource-center/telehealth"
                className="btn btn-primary"
              >
                Visit the Telehealth Resource Center
              </Link>

              <a
                href="https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-infants-and-toddlers/types-telehealth-services-infants"
                target="_blank"
                rel="noopener noreferrer"
              >
                Review HHS Family Telehealth Guidance ↗
              </a>
            </div>
          </div>
        </section>

        <section className="family-care-levels-section">
          <div className="container">
            <div className="family-section-header">
              <p className="family-section-eyebrow">
                Choosing the Right Level of Care
              </p>

              <h2>Virtual Care, Primary Care, Urgent Care, or the ER?</h2>

              <p>
                The best care setting depends on the symptoms, age, severity,
                medical history, and whether examination, testing, treatment,
                or emergency intervention is required.
              </p>
            </div>

            <div className="family-care-levels-grid">
              {careLevels.map((item) => (
                <article
                  className={item.emergency ? "is-emergency" : ""}
                  key={item.level}
                >
                  <span>{item.level}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="family-emergency-note">
              <strong>Do not delay emergency care.</strong>
              <p>
                Call 911 for life-threatening symptoms, severe injuries, or
                immediate danger. A virtual service is not an emergency
                response system.
              </p>
            </div>
          </div>
        </section>

        <section className="family-konnectmd-section">
          <div className="container">
            <div className="family-section-header family-light-header">
              <p className="family-section-eyebrow">
                Where KonnectMD May Help
              </p>

              <h2>One Membership Can Connect a Household to Multiple Resources</h2>

              <p>
                KonnectMD may provide a practical way to combine virtual
                physician access, prescription benefits, behavioral-health
                support, and additional healthcare savings for eligible
                household members.
              </p>
            </div>

            <div className="family-konnectmd-grid">
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

            <div className="family-membership-message">
              <div>
                <strong>Membership benefits are not identical.</strong>
                <p>
                  Physician access, counseling, prescriptions, chronic-care
                  benefits, household eligibility, visit limits, and additional
                  services vary by membership level and current program terms.
                </p>
              </div>

              <div className="family-membership-actions">
                <Link to="/plans" className="btn btn-primary">
                  Compare Memberships
                </Link>

                <Link to="/get-details" className="btn btn-secondary">
                  Request Family Information
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="family-scenarios-section">
          <div className="container">
            <div className="family-section-header">
              <p className="family-section-eyebrow">
                Practical Family Scenarios
              </p>

              <h2>How a Household May Use Different Benefits</h2>
            </div>

            <div className="family-scenarios-grid">
              {familyScenarios.map((scenario) => (
                <article key={scenario.title}>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="family-faq-section">
          <div className="container">
            <div className="family-section-header">
              <p className="family-section-eyebrow">
                Frequently Asked Questions
              </p>

              <h2>Family Healthcare Questions, Answered Clearly</h2>
            </div>

            <div className="family-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="family-related-section">
          <div className="container">
            <div className="family-section-header">
              <p className="family-section-eyebrow">
                Continue Learning
              </p>

              <h2>Continue Your Healthcare Journey</h2>
            </div>

            <div className="family-related-grid">
              {relatedResources.map((resource) => (
                <Link
                  to={resource.link}
                  className="family-related-card"
                  key={resource.title}
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

        <section className="family-sources-section">
          <div className="container">
            <div className="family-sources-card">
              <div>
                <p className="family-section-eyebrow">Trusted Sources</p>

                <h2>Educational Guidance From Recognized Authorities</h2>

                <p>
                  Family-health education on this page is based on guidance
                  from Healthy People 2030, CDC, HHS Telehealth, MedlinePlus,
                  and other official healthcare resources. KonnectMD
                  descriptions are based on current membership information.
                </p>
              </div>

              <div className="family-sources-links">
                <a
                  href="https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/preventive-care"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Healthy People 2030 ↗
                </a>

                <a
                  href="https://www.cdc.gov/act-early/milestones/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC Developmental Milestones ↗
                </a>

                <a
                  href="https://telehealth.hhs.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HHS Telehealth ↗
                </a>

                <a
                  href="https://medlineplus.gov/choosingadoctororhealthcareservice.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MedlinePlus Healthcare Guidance ↗
                </a>
              </div>

              <div className="family-disclaimer">
                <strong>Important family-health notice</strong>

                <p>
                  This page is educational and does not provide diagnosis,
                  treatment, insurance, legal, or emergency advice. Healthcare
                  needs vary by age, symptoms, medical history, and individual
                  circumstances.
                </p>

                <p>
                  KonnectMD benefits, household eligibility, provider access,
                  included medications, visit limits, savings programs, and
                  service availability vary by membership and current program
                  terms.
                </p>

                <p>
                  Call 911 for severe symptoms, life-threatening conditions,
                  serious injuries, or immediate danger.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}