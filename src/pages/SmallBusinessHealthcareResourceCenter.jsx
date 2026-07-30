import "../Styles/SmallBusinessHealthcareResourceCenter.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const businessChallenges = [
  {
    category: "Cost",
    title: "Traditional Coverage Can Be Expensive",
    text:
      "Premiums, employer contributions, deductibles, administrative expenses, and annual increases can place pressure on a small-business budget.",
  },
  {
    category: "Recruiting",
    title: "Workers Expect Meaningful Benefits",
    text:
      "Healthcare access can influence whether employees accept an offer, stay with a company, or view the employer as invested in their well-being.",
  },
  {
    category: "Absenteeism",
    title: "Delayed Care Can Affect Productivity",
    text:
      "When employees postpone everyday care, common health concerns may lead to missed work, reduced productivity, or unnecessary emergency and urgent-care use.",
  },
  {
    category: "Access",
    title: "Appointments Do Not Always Fit Work Schedules",
    text:
      "Employees may struggle to obtain care before work, after work, during busy seasons, or when local providers have limited availability.",
  },
  {
    category: "Family Needs",
    title: "Employee Concerns Often Extend to the Household",
    text:
      "Workers may also need healthcare access for spouses, children, prescriptions, behavioral health, caregiving, and other family responsibilities.",
  },
  {
    category: "Administration",
    title: "Small Teams Have Limited HR Capacity",
    text:
      "Business owners frequently manage enrollment, questions, employee communication, and benefit decisions without a dedicated human-resources department.",
  },
];

const employerOptions = [
  {
    title: "Traditional Group Health Insurance",
    text:
      "An employer may offer a group medical plan and contribute toward employee premiums. Coverage, participation rules, costs, networks, and employer responsibilities vary.",
    source:
      "https://www.healthcare.gov/small-businesses/choose-and-enroll/shop-marketplace-overview/",
  },
  {
    title: "SHOP Coverage",
    text:
      "Eligible small employers may explore Small Business Health Options Program coverage for employee medical and dental insurance.",
    source: "https://www.healthcare.gov/small-businesses/",
  },
  {
    title: "QSEHRA",
    text:
      "An eligible small employer may use a Qualified Small Employer Health Reimbursement Arrangement to reimburse certain medical expenses under applicable rules.",
    source:
      "https://www.healthcare.gov/small-businesses/learn-more/qsehra/",
  },
  {
    title: "Individual Coverage HRA",
    text:
      "An Individual Coverage HRA may allow an employer to reimburse eligible employees for individual health-insurance premiums and certain medical expenses.",
    source:
      "https://www.cms.gov/marketplace/private-health-insurance/health-reimbursement-arrangements",
  },
  {
    title: "Voluntary or Supplemental Benefits",
    text:
      "Employers may offer optional benefits that supplement—but do not replace—comprehensive medical insurance or government healthcare programs.",
  },
  {
    title: "Healthcare-Access Memberships",
    text:
      "A membership may provide services such as virtual physicians, counseling, prescription savings, and additional resources without functioning as health insurance.",
  },
];

const workforceSupport = [
  {
    title: "24/7 Virtual Physician Access",
    text:
      "Eligible employees may connect with licensed physicians for appropriate non-emergency concerns without relying only on traditional office hours.",
  },
  {
    title: "Prescription Savings",
    text:
      "Membership benefits may help employees reduce eligible medication costs through included benefits, participating pharmacies, or discounted pricing.",
  },
  {
    title: "Behavioral Health and Life Support",
    text:
      "Qualifying plans may include counseling and support for stress, relationships, parenting, workplace concerns, substance use, financial pressure, and caregiving.",
  },
  {
    title: "Household Support",
    text:
      "Depending on the membership structure, employees may be able to extend applicable benefits to eligible spouses and dependents.",
  },
  {
    title: "Nationwide Access",
    text:
      "Virtual services may support employees who travel, work remotely, live in different states, or lack convenient access to local providers.",
  },
  {
    title: "Simplified Access",
    text:
      "A centralized member experience may make it easier for employees to understand and use available physician, prescription, behavioral-health, and support resources.",
  },
];

const businessIndustries = [
  "Restaurants & Food Service",
  "Construction & Skilled Trades",
  "Medical & Dental Practices",
  "Retail Businesses",
  "Real Estate Companies",
  "Churches & Nonprofits",
  "Cleaning & Landscaping",
  "Home Service Businesses",
  "Transportation & Logistics",
  "Manufacturing",
  "Professional Offices",
  "Independent Business Owners",
];

const employerGoals = [
  {
    title: "Recruitment",
    text:
      "Offer a practical healthcare-access benefit that may help strengthen the total employee value proposition.",
  },
  {
    title: "Retention",
    text:
      "Demonstrate that the company is investing in employees and their households beyond wages alone.",
  },
  {
    title: "Productivity",
    text:
      "Virtual access may help employees address certain non-emergency concerns without losing as much time traveling to and waiting in a medical office.",
  },
  {
    title: "Employee Well-Being",
    text:
      "Provide access to physician, prescription, behavioral-health, and practical life-support resources through one membership experience.",
  },
];

const businessScenarios = [
  {
    title: "An Employee Wakes Up Sick Before Work",
    text:
      "24/7 virtual physician access may help an employee address an appropriate non-emergency concern without first losing hours traveling to and waiting in a medical office.",
  },
  {
    title: "An Employee Needs a Prescription",
    text:
      "Prescription benefits and participating pharmacy resources may help the employee compare eligible medication options and available pricing.",
  },
  {
    title: "A Team Member Is Struggling With Stress",
    text:
      "Qualifying behavioral-health and life-support resources may provide counseling and support involving stress, relationships, finances, caregiving, and workplace concerns.",
  },
  {
    title: "An Employee’s Child Gets Sick After Hours",
    text:
      "Eligible household access may help a parent connect with a licensed physician and determine whether virtual, in-person, urgent, or emergency care is appropriate.",
  },
  {
    title: "A Remote Employee Needs Care",
    text:
      "Nationwide virtual access may support employees working from home, traveling, or living outside the company’s immediate service area.",
  },
  {
    title: "A New Hire Is Comparing Benefits",
    text:
      "A clearly explained healthcare-access benefit may strengthen the company’s overall employee value proposition alongside compensation and other benefits.",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Identify the Business Goal",
    text:
      "Determine whether the priority is recruitment, retention, affordability, employee access, family support, or supplementing an existing benefit strategy.",
  },
  {
    number: "02",
    title: "Review the Workforce",
    text:
      "Consider the number of employees, work locations, remote workers, hourly schedules, family needs, turnover, and current benefit participation.",
  },
  {
    number: "03",
    title: "Separate Insurance From Membership Benefits",
    text:
      "Clearly explain which offering is health insurance, which is a reimbursement arrangement, and which is a healthcare-access membership.",
  },
  {
    number: "04",
    title: "Choose the Appropriate Membership",
    text:
      "Compare physician access, prescriptions, counseling, broader behavioral-health resources, household eligibility, and other included services.",
  },
  {
    number: "05",
    title: "Educate and Onboard Employees",
    text:
      "Employees need clear instructions for activating their portals, accessing services, understanding limitations, and knowing when emergency care is required.",
  },
];

const konnectmdBenefits = [
  {
    title: "24/7 Licensed Physician Access",
    text:
      "Every KonnectMD membership includes 24/7 access to licensed physicians for appropriate non-emergency healthcare concerns.",
  },
  {
    title: "Prescription Benefits",
    text:
      "Membership levels combine physician access with prescription savings, eligible acute-medication benefits, participating pharmacies, and broader chronic-medication benefits at qualifying levels.",
  },
  {
    title: "Behavioral Health and Life Support",
    text:
      "Qualifying membership levels include counseling and broader support involving emotional wellness, relationships, parenting, workplace stress, finances, legal-resource referrals, substance use, and caregiving.",
  },
  {
    title: "Family and Household Value",
    text:
      "Eligible memberships can support employees, spouses, and dependents under one household membership, subject to current eligibility terms.",
  },
  {
    title: "Nationwide Healthcare Access",
    text:
      "KonnectMD supports businesses with employees working locally, remotely, while traveling, or across multiple states, subject to provider licensing and service availability.",
  },
  {
    title: "Works Alongside Existing Benefits",
    text:
      "KonnectMD can complement employer insurance, individual insurance, Medicare, Medicaid, VA benefits, and other healthcare resources without replacing them.",
  },
];

const faqs = [
  {
    q: "Is KonnectMD employer health insurance?",
    a:
      "No. KonnectMD is a healthcare-access membership, not health insurance. It does not replace comprehensive medical coverage, workers’ compensation, Medicare, Medicaid, VA benefits, or emergency care.",
  },
  {
    q: "Can a business offer KonnectMD without offering group insurance?",
    a:
      "A business may offer a healthcare-access membership as an employee benefit, but the employer should obtain appropriate legal, tax, insurance, and benefits guidance regarding its obligations and communications.",
  },
  {
    q: "Can KonnectMD be offered alongside group health insurance?",
    a:
      "Yes. KonnectMD may be positioned as an additional healthcare-access resource alongside an existing group plan, subject to the employer’s benefit strategy and applicable rules.",
  },
  {
    q: "Can employees include their families?",
    a:
      "Qualifying memberships may include eligible spouses and dependents. Household eligibility and the maximum number of included members depend on current membership terms.",
  },
  {
    q: "Does every membership include the same services?",
    a:
      "No. Physician, counseling, prescription, chronic-care, behavioral-health, and additional benefits vary by membership level.",
  },
  {
    q: "Can remote employees use the membership?",
    a:
      "Nationwide virtual access may support remote and traveling employees, subject to provider licensing, service availability, eligibility, and current program terms.",
  },
  {
    q: "Does KonnectMD handle medical emergencies?",
    a:
      "No. Employees should call 911 or seek emergency care for severe symptoms, life-threatening conditions, serious injuries, or immediate danger.",
  },
  {
    q: "What is SHOP coverage?",
    a:
      "SHOP is the Small Business Health Options Program for eligible small employers seeking employee health or dental insurance. Eligibility and availability vary by state and business circumstances.",
  },
  {
    q: "What is an HRA?",
    a:
      "A Health Reimbursement Arrangement is an employer-funded arrangement that reimburses eligible employees for certain medical expenses under specific federal rules. It is different from a healthcare-access membership.",
  },
  {
    q: "Could my company qualify for a small-business healthcare tax credit?",
    a:
      "Some qualifying small employers may be eligible. Eligibility depends on employee count, average wages, employer contributions, SHOP enrollment, tax status, and current IRS requirements.",
  },
  {
    q: "How should we introduce the benefit to employees?",
    a:
      "Use simple onboarding that explains what the membership includes, what it does not include, how to activate access, how to use each service, and when to seek in-person or emergency care.",
  },
  {
    q: "Can this help with employee retention?",
    a:
      "A useful healthcare-access benefit may strengthen the employee value proposition, but outcomes depend on workforce needs, communication, utilization, compensation, management, and the overall employment experience.",
  },
];

const relatedResources = [
  {
    category: "Virtual Care",
    title: "Telehealth Resource Center",
    text:
      "Understand how virtual physician access may support employees and their families.",
    link: "/resource-center/telehealth",
  },
  {
    category: "Prescriptions",
    title: "Prescription Savings Resource Center",
    text:
      "Explore included medications, pharmacy savings, pickup, and delivery options.",
    link: "/resource-center/prescription-savings",
  },
  {
    category: "Behavioral Health",
    title: "Behavioral Health & Life Support",
    text:
      "Learn about counseling, workplace support, financial stress, caregiving, and practical resources.",
    link: "/resource-center/behavioral-health",
  },
  {
    category: "Families",
    title: "Family Healthcare Resource Center",
    text:
      "Explore healthcare access for employees, spouses, children, and caregivers.",
    link: "/resource-center/family-healthcare",
  },
];


export default function SmallBusinessHealthcareResourceCenter() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Small Business Healthcare Resource Center",
    url: "https://rukonnected.com/resource-center/small-business-healthcare",
    description:
      "Educational resources for small-business owners comparing group health insurance, SHOP, HRAs, employee healthcare access, telehealth, prescriptions, behavioral health, and KonnectMD.",
    audience: {
      "@type": "Audience",
      audienceType:
        "Small-business owners, employers, entrepreneurs, and human-resources decision-makers",
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
        title="Small Business Healthcare Resource Center | KonnectMD Access"
        description="Compare small-business healthcare options, SHOP, HRAs, employee benefits, virtual care, prescriptions, behavioral health, and where KonnectMD may fit."
        path="/resource-center/small-business-healthcare"
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

      <main className="business-resource-page">
        <section className="business-resource-hero">
          <div className="container">
            <nav
              className="business-resource-breadcrumbs"
              aria-label="Breadcrumb"
            >
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/insights">Healthcare Resources</Link>
              <span aria-hidden="true">›</span>
              <span>Small Business Healthcare Resource Center</span>
            </nav>

            <div className="business-resource-hero-grid">
              <div className="business-resource-hero-copy">
                <p className="business-resource-eyebrow">
                  Small Business Healthcare Resource Center
                </p>

                <h1>
                  Healthcare Access Can Strengthen
                  <span> Your Workforce and Your Business.</span>
                </h1>

                <p className="business-resource-hero-lead">
                  Understand traditional group insurance, SHOP, reimbursement
                  arrangements, supplemental benefits, employee wellness, and
                  where KonnectMD may provide practical healthcare access for
                  employees and their families.
                </p>

                <div className="business-resource-hero-actions">
                  <a
                    href="#business-challenges"
                    className="btn btn-primary"
                  >
                    Explore Business Resources
                  </a>

                  <Link to="/get-details" className="btn btn-secondary">
                    Request Business Information
                  </Link>
                </div>

                <div className="business-resource-badges">
                  <span>Employer Education</span>
                  <span>Workforce Access</span>
                  <span>Nationwide Solution</span>
                </div>
              </div>

              <div className="business-resource-hero-image-wrap">
                <img
                  src="/images/small-business.jpg"
                  alt="Small business owner discussing healthcare access with employees"
                  className="business-resource-hero-image"
                />

                <div className="business-resource-hero-card">
                  <strong>Built for small-business realities</strong>
                  <span>
                    Practical access without presenting a membership as health
                    insurance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="business-stat-section">
  <div className="container">
    <div className="business-stat-header">
      <p className="business-resource-section-eyebrow">
        Small Business Healthcare Snapshot
      </p>

      <h2>Small Businesses Power America—and Healthcare Matters</h2>

      <p>
        Small employers support a major share of the American workforce while
        facing difficult decisions involving healthcare costs, employee access,
        recruiting, retention, and workforce well-being.
      </p>
    </div>

    <div className="business-stat-grid">
      <article>
        <strong>36.2 Million</strong>
        <span>Small businesses operate across the United States.</span>

        <a
          href="https://advocacy.sba.gov/2026/02/03/frequently-asked-questions-about-small-business-2026/"
          target="_blank"
          rel="noopener noreferrer"
        >
          U.S. Small Business Administration ↗
        </a>
      </article>

      <article>
        <strong>62.3 Million</strong>
        <span>
          People are employed by small businesses—45.9% of private-sector
          workers.
        </span>

        <a
          href="https://advocacy.sba.gov/2026/02/03/frequently-asked-questions-about-small-business-2026/"
          target="_blank"
          rel="noopener noreferrer"
        >
          U.S. Small Business Administration ↗
        </a>
      </article>

      <article>
        <strong>$26,993</strong>
        <span>
          Average annual premium for employer-sponsored family health coverage
          in 2025.
        </span>

        <a
          href="https://www.kff.org/health-costs/2025-employer-health-benefits-survey/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KFF Employer Health Benefits Survey ↗
        </a>
      </article>
    </div>

    <p className="business-stat-note">
      These figures provide national context and do not represent KonnectMD
      pricing, guaranteed savings, or expected results for an individual
      employer.
    </p>
  </div>
</section>

        <section
          id="business-challenges"
          className="business-challenges-section"
        >
          <div className="container">
            <div className="business-resource-section-header">
              <p className="business-resource-section-eyebrow">
                The Small-Business Challenge
              </p>

              <h2>Healthcare Decisions Affect More Than the Benefits Budget</h2>

              <p>
                Healthcare access can influence recruiting, retention,
                attendance, productivity, morale, and the financial pressure
                employees experience outside the workplace.
              </p>
            </div>

            <div className="business-challenges-grid">
              {businessChallenges.map((item) => (
                <article key={item.title}>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="business-options-section">
          <div className="container">
            <div className="business-resource-section-header business-resource-light-header">
              <p className="business-resource-section-eyebrow">
                Understand the Options
              </p>

              <h2>Not Every Employer Healthcare Strategy Works the Same Way</h2>

              <p>
                Insurance, reimbursement arrangements, voluntary benefits, and
                healthcare-access memberships serve different purposes. A
                business should understand those differences before presenting
                an option to employees.
              </p>
            </div>

            <div className="business-options-grid">
              {employerOptions.map((option) => (
                <article key={option.title}>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>

                  {option.source && (
                    <a
                      href={option.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Review official information ↗
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="business-options-notice">
              <strong>Important distinction</strong>
              <p>
                KonnectMD is a healthcare-access membership. It is not SHOP
                insurance, an HRA, a group medical plan, or comprehensive
                health insurance.
              </p>
            </div>
          </div>
        </section>

        <section className="business-workforce-section">
          <div className="container">
            <div className="business-resource-section-header">
              <p className="business-resource-section-eyebrow">
                Supporting Employees
              </p>

              <h2>Useful Benefits Address Real Workforce Needs</h2>

              <p>
                Employees are more likely to value and use a benefit when it
                helps solve practical problems involving access, timing,
                prescriptions, stress, family needs, and everyday healthcare.
              </p>
            </div>

            <div className="business-workforce-grid">
              {workforceSupport.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

<section className="business-industries-section">
  <div className="container">

    <div className="business-resource-section-header">
      <p className="business-resource-section-eyebrow">
        Industries We Support
      </p>

      <h2>
        Built for Many Types of Small Businesses
      </h2>

      <p>
        Healthcare access is important across every industry. Whether your team
        works in an office, on job sites, in restaurants, on the road, or
        remotely, convenient access to healthcare can support employees and
        their families.
      </p>
    </div>

    <div className="business-industries-grid">
      {businessIndustries.map((industry) => (
        <article key={industry}>
          <h3>{industry}</h3>
        </article>
      ))}
    </div>

  </div>
</section>

        <section className="business-goals-section">
          <div className="container">
            <div className="business-resource-section-header">
              <p className="business-resource-section-eyebrow">
                Business Outcomes
              </p>

              <h2>Start With the Outcome You Want to Improve</h2>
            </div>

            <div className="business-goals-grid">
              {employerGoals.map((goal) => (
                <article key={goal.title}>
                  <h3>{goal.title}</h3>
                  <p>{goal.text}</p>
                </article>
              ))}
            </div>

            <p className="business-outcomes-note">
              No benefit guarantees recruitment, retention, attendance, or
              productivity results. Outcomes depend on plan design, employee
              needs, communication, utilization, compensation, leadership, and
              the overall workplace experience.
            </p>
          </div>
        </section>

<section className="business-scenarios-section">
  <div className="container">
    <div className="business-resource-section-header">
      <p className="business-resource-section-eyebrow">
        Real Workforce Scenarios
      </p>

      <h2>How Employees May Use Healthcare Access in Everyday Life</h2>

      <p>
        The value of a benefit becomes clearer when employees understand how it
        may help with real healthcare, family, prescription, and workplace
        situations.
      </p>
    </div>

    <div className="business-scenarios-grid">
      {businessScenarios.map((scenario) => (
        <article key={scenario.title}>
          <h3>{scenario.title}</h3>
          <p>{scenario.text}</p>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="business-assessment-section">
  <div className="container">
    <div className="business-assessment-card">
      <div className="business-assessment-copy">
        <p className="business-resource-section-eyebrow">
          Business Healthcare Readiness Assessment
        </p>

        <h2>
          How Well Is Your Business Supporting Employee Healthcare Access?
        </h2>

        <p>
          Take this brief assessment to identify potential gaps involving
          employee access, recruiting, retention, workforce wellness, and
          healthcare benefits.
        </p>

        <div className="business-assessment-points">
          <span>Employee healthcare access</span>
          <span>Recruiting and retention priorities</span>
          <span>Current benefit challenges</span>
          <span>Workforce wellness needs</span>
        </div>
      </div>

      <div className="business-assessment-action">
        <strong>Start with a clearer picture of your business.</strong>

        <p>
          Your responses can help guide a more relevant conversation about
          healthcare-access options for your employees and their families.
        </p>

        <a
          href="https://konnectmd-business-platform.pages.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Start the Assessment
        </a>

        <small>
          This assessment is educational and does not provide legal, tax,
          insurance, or employee-benefits advice.
        </small>
      </div>
    </div>
  </div>
</section>

<section className="business-decision-section">
  <div className="container">

    <div className="business-resource-section-header">
      <p className="business-resource-section-eyebrow">
        Before You Choose Any Benefit
      </p>

      <h2>Five Questions Every Business Owner Should Ask</h2>

      <p>
        Healthcare decisions affect recruiting, retention, productivity, employee
        satisfaction, and company culture. Before selecting any benefit,
        understand what problem you're trying to solve.
      </p>
    </div>

    <div className="business-decision-grid">

      <article>
        <span>01</span>
        <h3>What problem am I trying to solve?</h3>
        <p>Recruiting, retention, absenteeism, employee satisfaction, affordability, or access?</p>
      </article>

      <article>
        <span>02</span>
        <h3>Will employees actually use it?</h3>
        <p>The most valuable benefit is one employees understand and use regularly.</p>
      </article>

      <article>
        <span>03</span>
        <h3>Can employees access care after work?</h3>
        <p>Convenient access often matters as much as the benefit itself.</p>
      </article>

      <article>
        <span>04</span>
        <h3>Does it help the employee's family?</h3>
        <p>Benefits that support spouses and children often provide greater perceived value.</p>
      </article>

      <article>
        <span>05</span>
        <h3>Can I clearly explain it?</h3>
        <p>If employees don't understand the benefit, they usually won't use it.</p>
      </article>

    </div>

  </div>
</section>

        <section className="business-konnectmd-section">
          <div className="container">
            <div className="business-resource-section-header business-resource-light-header">
              <p className="business-resource-section-eyebrow">
                The KonnectMD Business Solution
              </p>

              <h2>Practical Healthcare Access for Employees and Families</h2>

              <p>
               <p>
  KonnectMD gives businesses a practical way to provide employees and eligible
  family members with nationwide healthcare access. Every membership includes
  24/7 licensed physician access, while higher membership levels expand the
  available prescription, behavioral-health, specialist, wellness, and
  household benefits.
</p>
              </p>
            </div>

            <div className="business-konnectmd-grid">
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

            <div className="business-membership-message">
              <div>
                <strong>Help your employees understand and use their benefits.</strong>
                <p>
                  KonnectMD Access can help your business review membership options, educate
  employees, support activation, and explain how to use physician,
  prescription, behavioral-health, and household services.
                </p>
              </div>

              <div className="business-membership-actions">
                <Link to="/get-details" className="btn btn-primary">
                  Request Business Details
                </Link>

                <Link to="/book-call" className="btn btn-secondary">
                  Book a Business Conversation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="business-implementation-section">
          <div className="container">
            <div className="business-resource-section-header">
              <p className="business-resource-section-eyebrow">
                Implementation Guide
              </p>

              <h2>Five Steps Before Introducing a New Employee Benefit</h2>
            </div>

            <div className="business-implementation-grid">
              {implementationSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="business-tax-section">
          <div className="container business-tax-grid">
            <div>
              <p className="business-resource-section-eyebrow">
                Potential Tax Considerations
              </p>

              <h2>Some Small Employers May Qualify for a Tax Credit</h2>

              <p>
                The Small Business Health Care Tax Credit has specific
                requirements involving employee count, wages, employer premium
                contributions, SHOP enrollment, and tax status.
              </p>

              <p>
                A business should confirm current eligibility directly with the
                IRS and a qualified tax professional. KonnectMD membership
                payments should not be assumed to qualify for the credit.
              </p>
            </div>

            <div className="business-tax-card">
              <strong>Official resources</strong>

              <a
                href="https://www.irs.gov/affordable-care-act/employers/small-business-health-care-tax-credit-and-the-shop-marketplace"
                target="_blank"
                rel="noopener noreferrer"
              >
                IRS Small Business Health Care Tax Credit ↗
              </a>

              <a
                href="https://www.healthcare.gov/small-businesses/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HealthCare.gov SHOP Information ↗
              </a>

              <p>
                Consult a qualified tax, insurance, legal, or employee-benefits
                professional before acting.
              </p>
            </div>
          </div>
        </section>

        <section className="business-faq-section">
          <div className="container">
            <div className="business-resource-section-header">
              <p className="business-resource-section-eyebrow">
                Frequently Asked Questions
              </p>

              <h2>Small-Business Healthcare Questions, Answered Clearly</h2>
            </div>

            <div className="business-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="business-related-section">
          <div className="container">
            <div className="business-resource-section-header">
              <p className="business-resource-section-eyebrow">
                Continue Learning
              </p>

              <h2>Continue Your Healthcare Journey</h2>
            </div>

            <div className="business-related-grid">
              {relatedResources.map((resource) => (
                <Link
                  key={resource.title}
                  to={resource.link}
                  className="business-related-card"
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

        <section className="business-sources-section">
          <div className="container">
            <div className="business-sources-card">
              <div>
                <p className="business-resource-section-eyebrow">
                  Trusted Sources
                </p>

                <h2>Employer Guidance From Official Resources</h2>

                <p>
                  Employer insurance, SHOP, reimbursement arrangement, and tax
                  information on this page is based on official HealthCare.gov,
                  IRS, CMS, and U.S. Department of Labor resources. KonnectMD
                  descriptions are based on current membership materials.
                </p>
              </div>

              <div className="business-sources-links">
                <a
                  href="https://www.healthcare.gov/small-businesses/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HealthCare.gov SHOP ↗
                </a>

                <a
                  href="https://www.irs.gov/affordable-care-act/employers/small-business-health-care-tax-credit-and-the-shop-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IRS Tax Credit Information ↗
                </a>

                <a
                  href="https://www.cms.gov/marketplace/private-health-insurance/health-reimbursement-arrangements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CMS HRA Information ↗
                </a>

                <a
                  href="https://www.dol.gov/agencies/ebsa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Department of Labor EBSA ↗
                </a>
              </div>

              <div className="business-disclaimer">
                <strong>Important employer notice</strong>

                <p>
                  This page is educational and does not provide legal, tax,
                  accounting, insurance, human-resources, employee-benefits, or
                  medical advice.
                </p>

                <p>
                  KonnectMD is not health insurance and does not replace
                  comprehensive medical insurance, workers’ compensation,
                  Medicare, Medicaid, VA benefits, emergency services, or an
                  employer’s legal obligations.
                </p>

                <p>
                  Employers should obtain guidance from qualified legal, tax,
                  insurance, accounting, and employee-benefits professionals
                  before establishing or changing a benefit program.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}