import "../Styles/EntrepreneurHealthcareResourceCenter.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const entrepreneurChallenges = [
  {
    category: "Coverage",
    title: "No Employer Benefits Department",
    text:
      "Self-employed professionals must evaluate healthcare options, costs, eligibility, family needs, and enrollment decisions without a traditional human-resources department.",
  },
  {
    category: "Time",
    title: "Time Away From Work Can Reduce Income",
    text:
      "Traveling to an appointment and waiting for care may mean missed meetings, delayed projects, canceled jobs, or fewer billable hours.",
  },
  {
    category: "Budget",
    title: "Income and Expenses May Change",
    text:
      "Entrepreneurs often need healthcare strategies that can be evaluated alongside irregular income, operating expenses, taxes, and household obligations.",
  },
  {
    category: "Family",
    title: "Healthcare Decisions Affect the Household",
    text:
      "Independent professionals may also need practical healthcare access for a spouse, children, prescriptions, counseling, caregiving, and other family needs.",
  },
  {
    category: "Wellness",
    title: "Business Pressure Can Affect Personal Health",
    text:
      "Long hours, financial pressure, isolation, client demands, and uncertainty can contribute to stress, burnout, relationship strain, and delayed care.",
  },
  {
    category: "Access",
    title: "Traditional Office Hours May Not Fit",
    text:
      "Business owners, contractors, drivers, agents, and gig workers may need healthcare access before work, after hours, while traveling, or between appointments.",
  },
];

const healthcareOptions = [
  {
    title: "Individual Marketplace Insurance",
    text:
      "Self-employed individuals without employees may explore individual and family insurance through the Health Insurance Marketplace. Eligibility for premium savings depends on household income and other factors.",
    source: "https://www.healthcare.gov/self-employed/",
  },
  {
    title: "Medicaid or Other Public Programs",
    text:
      "Eligibility may depend on household income, family size, disability, age, state rules, and other circumstances. Program availability and eligibility should be confirmed directly.",
    source: "https://www.healthcare.gov/medicaid-chip/",
  },
  {
    title: "Spouse or Partner Coverage",
    text:
      "Some entrepreneurs may qualify to join an eligible spouse’s or partner’s employer-sponsored insurance plan, subject to the plan’s enrollment and eligibility rules.",
  },
  {
    title: "Professional Association Benefits",
    text:
      "Certain professional, trade, alumni, or membership organizations may offer access to insurance, discount programs, or voluntary benefits. Terms and availability vary.",
  },
  {
    title: "Healthcare-Access Memberships",
    text:
      "A healthcare-access membership may provide virtual physicians, prescription savings, behavioral-health resources, and additional services without functioning as health insurance.",
  },
  {
    title: "A Combined Healthcare Strategy",
    text:
      "Some independent professionals combine insurance or public benefits with virtual care, prescription programs, behavioral-health resources, and other healthcare-access tools.",
  },
];

const professions = [
  "Real Estate Professionals",
  "Insurance Agents",
  "Financial Professionals",
  "Consultants",
  "Independent Contractors",
  "Construction Professionals",
  "Truck Drivers",
  "Home-Service Providers",
  "Creators and Freelancers",
  "Coaches and Trainers",
  "Photographers and Designers",
  "Gig-Economy Workers",
];

const konnectmdBenefits = [
  {
    title: "24/7 Virtual Physician Access",
    text:
      "Every KonnectMD membership includes access to licensed physicians for appropriate non-emergency healthcare concerns, helping members seek care beyond traditional office hours.",
  },
  {
    title: "Prescription Benefits",
    text:
      "Depending on the membership selected, benefits may include prescription savings, included acute medications, broader chronic-medication options, retail pickup, or home delivery where available.",
  },
  {
    title: "Behavioral Health and Life Support",
    text:
      "Qualifying memberships may provide counseling and resources involving emotional wellness, relationships, parenting, workplace pressure, financial stress, legal referrals, caregiving, and other life concerns.",
  },
  {
    title: "Household Support",
    text:
      "Qualifying memberships may include an eligible spouse and dependents, helping entrepreneurs evaluate healthcare access for more than one household member.",
  },
  {
    title: "Nationwide Availability",
    text:
      "Virtual access may support professionals who travel, work remotely, serve clients in multiple locations, or spend significant time away from home.",
  },
  {
    title: "Additional Healthcare Resources",
    text:
      "Membership levels may include access to preventive resources, specialist services, wellness benefits, laboratory savings, dental and vision discounts, and other programs.",
  },
];

const scenarios = [
  {
    title: "A Full Day of Client Appointments",
    text:
      "You wake up feeling sick but cannot easily spend half the day traveling to and waiting in a medical office. Virtual physician access may provide an appropriate first step.",
  },
  {
    title: "Business Travel Away From Home",
    text:
      "A non-emergency health concern develops while you are traveling. Nationwide virtual access may help you speak with a licensed provider, subject to state licensing and service availability.",
  },
  {
    title: "A Prescription Is Affecting Your Budget",
    text:
      "You can review available prescription savings, included medication benefits, participating pharmacies, and current program terms before filling an eligible prescription.",
  },
  {
    title: "Business Pressure Is Becoming Overwhelming",
    text:
      "Counseling and broader life-support resources may help with burnout, stress, relationships, financial pressure, career concerns, caregiving, and other challenges.",
  },
  {
    title: "Your Child Gets Sick After Hours",
    text:
      "An eligible family member may be able to use virtual physician access to discuss symptoms and determine whether home care, a prescription, in-person care, or emergency care is appropriate.",
  },
  {
    title: "You Already Have Health Insurance",
    text:
      "A healthcare-access membership may complement existing insurance by improving access to virtual care, prescription resources, behavioral support, and other everyday services.",
  },
];

const faqs = [
  {
    q: "Is KonnectMD health insurance?",
    a:
      "No. KonnectMD is a healthcare-access membership, not health insurance. It does not replace comprehensive insurance, Medicare, Medicaid, VA benefits, workers’ compensation, or emergency care.",
  },
  {
    q: "Can self-employed professionals enroll?",
    a:
      "Eligible self-employed professionals, freelancers, contractors, entrepreneurs, and business owners may enroll in available household memberships, subject to current terms.",
  },
  {
    q: "Does every membership include physician access?",
    a:
      "Yes. Every KonnectMD membership includes 24/7 access to licensed physicians for appropriate non-emergency concerns. Other services vary by membership level.",
  },
  {
    q: "Can I use KonnectMD if I already have insurance?",
    a:
      "Yes. KonnectMD may complement existing insurance by providing additional access to virtual physicians, prescription benefits, behavioral-health resources, and other services.",
  },
  {
    q: "Can my spouse and children be included?",
    a:
      "Qualifying household memberships may include an eligible spouse and dependents, with up to seven household members under current program terms.",
  },
  {
    q: "Can I use the membership while traveling?",
    a:
      "Nationwide virtual access may be available for appropriate non-emergency concerns, subject to provider licensing, eligibility, service availability, and membership terms.",
  },
  {
    q: "Does KonnectMD replace a primary-care physician?",
    a:
      "No. Members still need appropriate in-person primary care, examinations, screenings, testing, vaccinations, procedures, specialist treatment, and emergency services.",
  },
  {
    q: "Can KonnectMD help with business-owner stress or burnout?",
    a:
      "Qualifying memberships may include counseling and broader behavioral-health and life-support resources involving stress, burnout, relationships, finances, workplace concerns, and caregiving.",
  },
  {
    q: "Can I deduct the membership as a business expense?",
    a:
      "Tax treatment depends on individual and business circumstances. Do not assume membership payments are deductible. Consult a qualified tax professional before making tax decisions.",
  },
  {
    q: "Where can a self-employed person find health insurance?",
    a:
      "A self-employed person without employees may explore individual and family coverage through the Health Insurance Marketplace and determine whether income-based savings or public programs are available.",
  },
];

const relatedResources = [
  {
    category: "Small Business",
    title: "Small Business Healthcare Resource Center",
    text:
      "Explore employer healthcare strategies, workforce access, employee benefits, SHOP, HRAs, and where KonnectMD may fit.",
    link: "/resource-center/small-business-healthcare",
  },
  {
    category: "Family Healthcare",
    title: "Family Healthcare Resource Center",
    text:
      "Understand healthcare access for children, adults, spouses, older relatives, and caregivers.",
    link: "/resource-center/family-healthcare",
  },
  {
    category: "Behavioral Health",
    title: "Behavioral Health & Life Support",
    text:
      "Explore counseling, relationships, workplace stress, financial pressure, caregiving, and practical life resources.",
    link: "/resource-center/behavioral-health",
  },
  {
    category: "Virtual Care",
    title: "Telehealth Resource Center",
    text:
      "Learn when virtual care may be appropriate and when in-person or emergency care is necessary.",
    link: "/resource-center/telehealth",
  },
];

export default function EntrepreneurHealthcareResourceCenter() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Entrepreneur and Self-Employed Healthcare Resource Center",
    url: "https://rukonnected.com/resource-center/entrepreneurs",
    description:
      "Healthcare education for entrepreneurs, freelancers, contractors, self-employed professionals, gig workers, and independent business owners.",
    audience: {
      "@type": "Audience",
      audienceType:
        "Entrepreneurs, self-employed professionals, freelancers, independent contractors, sole proprietors, and gig workers",
    },
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
        title="Healthcare for Entrepreneurs & Self-Employed Professionals | KonnectMD Access"
        description="Explore healthcare options for entrepreneurs, freelancers, contractors, gig workers, and self-employed professionals, including insurance, virtual care, prescriptions, behavioral health, family access, and KonnectMD."
        path="/resource-center/entrepreneurs"
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

      <main className="entrepreneur-center">
        <section className="entrepreneur-hero">
          <div className="container">
            <nav className="entrepreneur-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <a href="/#learning-center">Healthcare Resources</a>
              <span aria-hidden="true">›</span>
              <span>Entrepreneur & Self-Employed Resource Center</span>
            </nav>

            <div className="entrepreneur-hero-grid">
              <div className="entrepreneur-hero-copy">
                <p className="entrepreneur-eyebrow">
                  Entrepreneur & Self-Employed Resource Center
                </p>

                <h1>
                  You Built Your Business.
                  <span>
                    Now Build a Healthcare Strategy That Works for You.
                  </span>
                </h1>

                <p className="entrepreneur-hero-lead">
                  Running your own business means making healthcare decisions
                  without a traditional benefits department. Explore insurance,
                  virtual care, prescription resources, behavioral health,
                  family support, and where KonnectMD may fit into a broader
                  healthcare strategy.
                </p>

                <div className="entrepreneur-hero-actions">
                  <a href="#entrepreneur-challenges" className="btn btn-primary">
                    Explore Healthcare Options
                  </a>

                  <Link to="/plans" className="btn btn-secondary">
                    Compare Memberships
                  </Link>
                </div>

                <div className="entrepreneur-badges">
                  <span>Self-Employed Professionals</span>
                  <span>Independent Contractors</span>
                  <span>Nationwide Resource</span>
                  <span>Education First</span>
                </div>
              </div>

              <div className="entrepreneur-hero-image-wrap">
                <img
                  src="/images/entrepreneur-healthcare-resource-center-hero.jpg"
                  alt="Diverse entrepreneurs and self-employed professionals working in a modern collaborative environment"
                  className="entrepreneur-hero-image"
                />

                <div className="entrepreneur-hero-card">
                  <strong>Built for independent professionals</strong>
                  <span>
                    Healthcare education for people building businesses,
                    careers, income, and families on their own terms.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="entrepreneur-stat-section">
          <div className="container entrepreneur-stat-grid">
            <div>
              <strong>29.8 million</strong>
              <span>
                U.S. nonemployer businesses were reported in the Census
                Bureau’s 2022 data.
              </span>
            </div>

            <div>
              <strong>$1.7 trillion</strong>
              <span>
                In economic activity was generated by those businesses in
                2022.
              </span>
            </div>

            <div>
              <strong>No employees?</strong>
              <span>
                HealthCare.gov generally considers a business owner without
                employees self-employed for Marketplace purposes.
              </span>
            </div>
          </div>

          <div className="container entrepreneur-stat-sources">
            <a
              href="https://www.census.gov/library/stories/2025/05/smallest-businesses.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Census Bureau Nonemployer Statistics ↗
            </a>

            <a
              href="https://www.healthcare.gov/self-employed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HealthCare.gov Self-Employed Guidance ↗
            </a>
          </div>
        </section>

        <section
          id="entrepreneur-challenges"
          className="entrepreneur-challenges-section"
        >
          <div className="container">
            <div className="entrepreneur-section-header">
              <p className="entrepreneur-section-eyebrow">
                The Independent-Work Reality
              </p>

              <h2>Healthcare Looks Different When You Work for Yourself</h2>

              <p>
                Independence creates flexibility and opportunity, but it also
                places healthcare research, budgeting, access, and family
                decisions directly on the business owner.
              </p>
            </div>

            <div className="entrepreneur-challenges-grid">
              {entrepreneurChallenges.map((item) => (
                <article key={item.title}>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="entrepreneur-options-section">
          <div className="container">
            <div className="entrepreneur-section-header entrepreneur-light-header">
              <p className="entrepreneur-section-eyebrow">
                Understand Your Options
              </p>

              <h2>A Healthcare Strategy May Include More Than One Resource</h2>

              <p>
                Insurance, public programs, family coverage, professional
                associations, and healthcare-access memberships serve different
                purposes. Understanding those differences helps prevent
                confusion and unrealistic expectations.
              </p>
            </div>

            <div className="entrepreneur-options-grid">
              {healthcareOptions.map((option) => (
                <article key={option.title}>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>

                  {option.source && (
                    <a
                      href={option.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Review official guidance ↗
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="entrepreneur-options-notice">
              <strong>Important distinction</strong>
              <p>
                KonnectMD is a healthcare-access membership. It is not health
                insurance and should not be presented as a replacement for
                comprehensive insurance, public programs, or emergency care.
              </p>
            </div>
          </div>
        </section>

        <section className="entrepreneur-professions-section">
          <div className="container">
            <div className="entrepreneur-section-header">
              <p className="entrepreneur-section-eyebrow">
                Built for Independent Work
              </p>

              <h2>Healthcare Access Matters Across Many Professions</h2>

              <p>
                The need for convenient healthcare does not depend on one
                industry. Independent professionals across the country face
                similar challenges involving schedules, travel, family needs,
                prescriptions, and healthcare costs.
              </p>
            </div>

            <div className="entrepreneur-professions-grid">
              {professions.map((profession) => (
                <div key={profession}>{profession}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="entrepreneur-konnectmd-section">
          <div className="container">
            <div className="entrepreneur-section-header entrepreneur-light-header">
              <p className="entrepreneur-section-eyebrow">
                Where KonnectMD May Fit
              </p>

              <h2>Healthcare Access Designed Around Real Life and Work</h2>

              <p>
                KonnectMD may complement insurance or other healthcare
                resources by helping entrepreneurs and eligible family members
                access everyday services through one membership experience.
              </p>
            </div>

            <div className="entrepreneur-konnectmd-grid">
              {konnectmdBenefits.map((benefit) => (
                <article key={benefit.title}>
                  <span aria-hidden="true">✓</span>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="entrepreneur-membership-message">
              <div>
                <strong>
                  Membership levels include different services and benefits.
                </strong>

                <p>
                  Prescription options, counseling, psychology, psychiatry,
                  specialist services, preventive resources, family eligibility,
                  visit limits, and additional benefits vary by membership and
                  current program terms.
                </p>
              </div>

              <div className="entrepreneur-membership-actions">
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

        <section className="entrepreneur-scenarios-section">
          <div className="container">
            <div className="entrepreneur-section-header">
              <p className="entrepreneur-section-eyebrow">
                Everyday Entrepreneur Scenarios
              </p>

              <h2>Healthcare Needs Do Not Wait for a Convenient Workday</h2>
            </div>

            <div className="entrepreneur-scenarios-grid">
              {scenarios.map((scenario) => (
                <article key={scenario.title}>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="entrepreneur-assessment-section">
          <div className="container">
            <div className="entrepreneur-assessment-card">
              <div>
                <p className="entrepreneur-section-eyebrow">
                  Coming Soon
                </p>

                <h2>Entrepreneur Healthcare Readiness Assessment</h2>

                <p>
                  A future assessment will help independent professionals
                  identify priorities involving physician access,
                  prescriptions, behavioral health, family needs, insurance,
                  budgeting, and healthcare planning.
                </p>
              </div>

              <div className="entrepreneur-assessment-status">
                <strong>In Development</strong>
                <p>
                  The current Membership Finder can help you begin comparing
                  KonnectMD membership levels today.
                </p>

                <Link to="/#plans" className="btn btn-primary">
                  Use the Membership Finder
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="entrepreneur-faq-section">
          <div className="container">
            <div className="entrepreneur-section-header">
              <p className="entrepreneur-section-eyebrow">
                Frequently Asked Questions
              </p>

              <h2>Self-Employed Healthcare Questions, Answered Clearly</h2>
            </div>

            <div className="entrepreneur-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="entrepreneur-related-section">
          <div className="container">
            <div className="entrepreneur-section-header">
              <p className="entrepreneur-section-eyebrow">
                Continue Learning
              </p>

              <h2>Continue Your Healthcare Journey</h2>
            </div>

            <div className="entrepreneur-related-grid">
              {relatedResources.map((resource) => (
                <Link
                  key={resource.title}
                  to={resource.link}
                  className="entrepreneur-related-card"
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

        <section className="entrepreneur-sources-section">
          <div className="container">
            <div className="entrepreneur-sources-card">
              <p className="entrepreneur-section-eyebrow">
                Trusted Sources
              </p>

              <h2>Official Guidance and Educational Information</h2>

              <p>
                Self-employment and insurance information on this page is based
                on U.S. Census Bureau and HealthCare.gov resources. KonnectMD
                descriptions are based on current membership information and
                should be confirmed before enrollment.
              </p>

              <div className="entrepreneur-source-links">
                <a
                  href="https://www.census.gov/library/stories/2025/05/smallest-businesses.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  U.S. Census Bureau ↗
                </a>

                <a
                  href="https://www.healthcare.gov/self-employed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HealthCare.gov Self-Employed Guidance ↗
                </a>

                <a
                  href="https://www.healthcare.gov/medicaid-chip/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medicaid and CHIP Guidance ↗
                </a>
              </div>

              <div className="entrepreneur-disclaimer">
                <strong>Important notice</strong>

                <p>
                  This page is educational and does not provide medical, tax,
                  legal, accounting, insurance, or financial advice.
                </p>

                <p>
                  KonnectMD is not health insurance. Membership benefits,
                  eligibility, provider access, prescriptions, visit limits,
                  pricing, and service availability vary by membership and
                  current program terms.
                </p>

                <p>
                  Consult qualified medical, insurance, tax, legal, and
                  financial professionals before making decisions based on your
                  individual circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}