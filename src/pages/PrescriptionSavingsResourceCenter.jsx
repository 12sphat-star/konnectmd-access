import "../Styles/PrescriptionSavingsResourceCenter.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const costFactors = [
  {
    title: "Brand vs. Generic",
    text:
      "FDA-approved generic medications contain the same active ingredients and must meet FDA standards for quality, strength, safety, effectiveness, and performance. They often cost less than brand-name medications.",
  },
  {
    title: "Pharmacy Pricing",
    text:
      "The same medication may have different prices at different pharmacies because of network contracts, location, purchasing arrangements, and available discount pricing.",
  },
  {
    title: "Insurance Is Not Always the Lowest Price",
    text:
      "Your insurance copay or coinsurance may not always be the lowest available price. Compare your plan cost with any eligible cash or prescription-savings price before purchasing.",
  },
  {
    title: "Pharmacy Benefit Managers",
    text:
      "Pharmacy benefit managers help negotiate prescription pricing among manufacturers, pharmacies, and health plans. These arrangements can influence formularies, pharmacy networks, and what patients pay.",
  },
  {
    title: "Manufacturer Assistance",
    text:
      "Some pharmaceutical manufacturers offer savings cards or patient-assistance programs for qualifying medications and patients. Eligibility and program restrictions vary.",
  },
  {
    title: "KonnectMD Prescription Benefits",
    text:
      "KonnectMD combines prescription savings, participating retail pharmacies, included medication benefits, and home-delivery options. Exact benefits depend on the membership selected and current program terms.",
  },
];

const prescriptionMyths = [
  {
    myth: "Generic medications are lower quality.",
    fact:
      "FDA-approved generic medications must meet the same standards for quality, strength, safety, effectiveness, and performance as brand-name medications.",
  },
  {
    myth: "Every pharmacy charges the same price.",
    fact:
      "Prescription prices can vary by pharmacy, network contracts, location, available discount pricing, dosage, and quantity.",
  },
  {
    myth: "Insurance always gives the lowest prescription price.",
    fact:
      "Not always. Depending on the medication, deductible, copay, and available savings programs, another eligible price may cost less.",
  },
  {
    myth: "Prescription savings programs are only for people without insurance.",
    fact:
      "People with insurance may also compare their insurance price with an eligible savings-program price and choose the better option for that fill.",
  },
  {
    myth: "Telehealth providers cannot prescribe medications.",
    fact:
      "Licensed providers may prescribe many medications when medically appropriate and legally permitted. Some medications require an in-person evaluation.",
  },
  {
    myth: "A lower price means a medication is less effective.",
    fact:
      "Price does not determine effectiveness. Approved generic medications can provide the same clinical benefit as their brand-name equivalents.",
  },
];

const savingsSteps = [
  {
    number: "01",
    title: "Ask About a Generic",
    text:
      "Ask your healthcare provider or pharmacist whether an FDA-approved generic alternative is clinically appropriate for you.",
  },
  {
    number: "02",
    title: "Compare Pharmacy Prices",
    text:
      "Before filling a prescription, compare eligible prices at nearby participating pharmacies.",
  },
  {
    number: "03",
    title: "Review Available Programs",
    text:
      "Check insurance benefits, manufacturer programs, prescription assistance, and membership-based savings options.",
  },
  {
    number: "04",
    title: "Consider a 90-Day Supply",
    text:
      "For eligible maintenance medications, ask whether a longer supply could reduce trips, fees, or overall costs.",
  },
  {
    number: "05",
    title: "Compare Pickup and Delivery",
    text:
      "Retail pickup may be better when medication is needed quickly, while mail order may help with eligible ongoing prescriptions.",
  },
  {
    number: "06",
    title: "Review Medications Regularly",
    text:
      "Talk with your provider before changing or stopping medication. Periodic reviews may identify duplicates, alternatives, or unnecessary expenses.",
  },
];

const medicationTypes = [
  {
    title: "Acute Medications",
    text:
      "Short-term prescriptions used for eligible illnesses, infections, seasonal conditions, and other immediate healthcare needs.",
  },
  {
    title: "Chronic Medications",
    text:
      "Ongoing prescriptions commonly used to manage eligible long-term conditions such as blood pressure, cholesterol, thyroid, diabetes, and other needs.",
  },
  {
    title: "Preventive Medications",
    text:
      "Certain preventive medications may be included through qualifying programs, membership levels, or applicable healthcare requirements.",
  },
  {
    title: "Discounted Medications",
    text:
      "Medications that are not included at no additional cost may still qualify for reduced pricing through participating pharmacy and savings programs.",
  },
];

const programSteps = [
  {
    number: "1",
    title: "Activate Your Membership Portal",
    text:
      "Use your membership information to create or access your secure prescription portal.",
  },
  {
    number: "2",
    title: "Search Your Medication",
    text:
      "Enter the medication name and review available pricing, dosage, quantity, pickup, and delivery information.",
  },
  {
    number: "3",
    title: "Compare Your Options",
    text:
      "Review eligible included-medication benefits, retail discounts, mail-order pricing, or additional assistance programs.",
  },
  {
    number: "4",
    title: "Choose Pickup or Delivery",
    text:
      "Use a participating retail pharmacy when medication is needed promptly or select eligible home delivery when appropriate.",
  },
  {
    number: "5",
    title: "Present a Valid Prescription",
    text:
      "A valid prescription from a licensed healthcare professional is required for prescription medications.",
  },
];

const konnectmdBenefits = [
  {
    title: "70,000+ Participating Pharmacies",
    text:
      "Members can access a broad nationwide retail pharmacy network, subject to current network participation.",
  },
  {
    title: "Included Acute Medications",
    text:
      "Qualifying KonnectMD memberships include eligible acute medications according to the current formulary, dosage, and quantity requirements.",
  },
  {
  title: "1,000+ Chronic Medications at No Additional Medication Cost",
  text:
    "Qualifying Platinum and Titanium memberships may provide access to more than 1,000 commonly prescribed chronic medications at no additional medication cost, subject to the current formulary, dosage, quantity, availability, and program terms.",
},
  {
    title: "Additional Prescription Discounts",
    text:
      "Thousands of other medications may be available at reduced pricing when they are not included in the applicable formulary.",
  },
  {
    title: "Retail and Home Delivery Options",
    text:
      "Eligible prescriptions may be available through participating retail pharmacies or designated mail-order services.",
  },
  {
    title: "Additional Support Programs",
    text:
      "Depending on eligibility and program terms, members may access prescription assistance and diabetic-supply resources.",
  },
];

const faqs = [
  {
    q: "Is the KonnectMD prescription program health insurance?",
    a:
      "No. It is a pharmacy subscription and medication-savings benefit available through qualifying KonnectMD memberships. It is not health insurance and does not replace Medicare, Medicaid, VA benefits, employer coverage, or another prescription drug plan.",
  },
  {
    q: "Are all medications free with every membership?",
    a:
      "No. Prescription benefits vary by membership level. Silver and Gold have different medication benefits from Platinum and Titanium. Medication, dosage, quantity, formulary status, and program rules determine the available price.",
  },
  {
    q: "Which memberships include more than 1,000 chronic medications?",
    a:
      "The broader chronic-medication benefit is associated with qualifying higher-tier memberships. Review the current Platinum and Titanium benefits and formulary before enrolling or filling a prescription.",
  },
  {
    q: "Can I use my local pharmacy?",
    a:
      "The program includes access to more than 70,000 participating retail pharmacies nationwide. Members should search the current portal to confirm participating pharmacies and available prices.",
  },
  {
    q: "Can I use a prescription savings program with insurance?",
    a:
      "A discount or subscription price generally cannot be combined with insurance for the same purchase. Compare the available options and choose the one that provides the best eligible price for that fill.",
  },
  {
    q: "Are generic medications safe?",
    a:
      "FDA-approved generic medications must meet FDA standards for quality, strength, safety, effectiveness, and performance. Ask your healthcare provider whether a generic is appropriate for your specific prescription.",
  },
  {
    q: "Do I need a valid prescription?",
    a:
      "Yes. Prescription medications require a valid prescription from an appropriately licensed healthcare professional.",
  },
  {
    q: "How does home delivery work?",
    a:
      "Eligible prescriptions may be transferred to a designated mail-order pharmacy. Processing and delivery times vary, so retail pickup may be more appropriate when medication is needed immediately.",
  },
  {
    q: "Can my household use the prescription benefits?",
    a:
      "Qualifying household members may use applicable membership benefits. Eligibility depends on the selected membership and current household-member rules.",
  },
  {
    q: "Can medication prices or formularies change?",
    a:
      "Yes. Formularies, participating pharmacies, quantities, medication pricing, and program terms may change. Members should confirm current information in their portal before filling a prescription.",
  },
];

const relatedResources = [
  {
    category: "Virtual Care",
    title: "Telehealth Resource Center",
    text:
      "Learn when virtual care may be appropriate and how to prepare for an online visit.",
    link: "/resource-center/telehealth",
  },
  {
    category: "Veterans",
    title: "Veterans Healthcare Resource Center",
    text:
      "Explore how prescription resources and KonnectMD may complement eligible VA benefits.",
    link: "/resource-center/veterans",
  },
  {
    category: "Membership Guide",
    title: "Compare KonnectMD Memberships",
    text:
      "Review the differences between Silver, Gold, Platinum, and Titanium.",
    link: "/plans",
  },
];

export default function PrescriptionSavingsResourceCenter() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Prescription Savings Resource Center",
    url: "https://rukonnected.com/resource-center/prescription-savings",
    description:
      "Learn how prescription savings programs, generic medications, pharmacy comparison, retail pickup, home delivery, and KonnectMD medication benefits work.",
    about: [
      {
        "@type": "Thing",
        name: "Prescription savings",
      },
      {
        "@type": "Thing",
        name: "Generic medications",
      },
      {
        "@type": "Thing",
        name: "Pharmacy discount programs",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Prescription Savings Resource Center | KonnectMD Access"
        description="Learn how to lower prescription costs, compare pharmacies, understand generic medications, and explore plan-specific KonnectMD medication benefits."
        path="/resource-center/prescription-savings"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

     <main className="rx-resource-page">
        <section className="rx-center-hero">
          <div className="container">
            <nav className="rx-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/insights">Healthcare Resources</Link>
              <span aria-hidden="true">›</span>
              <span>Prescription Savings Resource Center</span>
            </nav>

            <div className="rx-hero-grid">
              <div className="rx-hero-copy">
                <p className="rx-eyebrow">
                  Prescription Savings Resource Center
                </p>

                <h1>
                  Understand Prescription Savings Before You Spend Another
                  Dollar.
                </h1>

              <p className="rx-hero-lead">
  Learn how qualifying KonnectMD memberships may provide eligible
  acute medications, prescription discounts, access to more than
  70,000 participating pharmacies, and more than 1,000 commonly
  prescribed chronic medications at no additional medication cost
  through qualifying higher-tier memberships.
</p>

                <div className="rx-hero-actions">
                  <a href="#save-on-prescriptions" className="btn btn-primary">
                    Explore Prescription Savings
                  </a>

                  <Link to="/plans" className="btn btn-secondary">
                    Review Membership Options
                  </Link>
                </div>

                <p className="rx-hero-note">
                  Never stop, reduce, split, or change a prescribed medication
                  without speaking with a qualified healthcare professional.
                </p>
              </div>

              <div className="rx-hero-image-wrap">
<img
  src="/images/prescription-savings.jpg"
  alt="Customer reviewing prescription medication savings at a pharmacy"
  className="rx-hero-image"
/>

<div className="rx-hero-stat-card">
  <strong>70,000+</strong>
  <span>Participating retail pharmacies nationwide</span>
</div>
              </div>
            </div>
          </div>
        </section>


<section className="rx-trust-strip">
  <div className="container">
    <div className="rx-trust-items">

      <div className="rx-trust-item">
        <div className="rx-trust-number">70,000+</div>
        <div className="rx-trust-text">
          Participating Pharmacies Nationwide
        </div>
      </div>

      <div className="rx-trust-divider"></div>

      <div className="rx-trust-item">
        <div className="rx-trust-number">1,000+</div>
        <div className="rx-trust-text">
          Included Chronic Medications*
        </div>
      </div>

      <div className="rx-trust-divider"></div>

      <div className="rx-trust-item">
        <div className="rx-trust-number">24/7</div>
        <div className="rx-trust-text">
          Physician Access
        </div>
      </div>

    </div>
  </div>
</section>

 <section className="rx-cost-section">
  <div className="container">
    <div className="rx-section-header">
      ...
    </div>

    <div className="rx-cost-grid">
      {costFactors.map((factor) => (
        <article className="rx-info-card" key={factor.title}>
          {factor.category && (
            <span className="rx-info-category">
              {factor.category}
            </span>
          )}

          <h3>{factor.title}</h3>
          <p>{factor.text}</p>

          {factor.link ? (
            factor.link.startsWith("/") ? (
              <Link to={factor.link} className="rx-info-link">
                Explore resource →
              </Link>
            ) : (
              <a href={factor.link} className="rx-info-link">
                Explore resource →
              </a>
            )
          ) : null}
        </article>
      ))}
    </div>

    <div className="rx-cost-highlight">
      <strong>
        The lowest prescription price is not always found at the closest pharmacy.
      </strong>

      <p>
        Comparing pharmacy prices, asking about an appropriate generic alternative,
        and reviewing available insurance, assistance, and membership benefits may
        help reduce medication costs.
      </p>
    </div>

  </div>
</section>

        <section id="save-on-prescriptions" className="rx-savings-section">
          <div className="container">
            <div className="rx-section-header rx-light-header">
              <p className="rx-section-eyebrow">
                Practical Savings Strategies
              </p>

              <h2>Six Responsible Ways to Lower Medication Costs</h2>

              <p>
                Cost-saving decisions should support your prescribed treatment,
                not interfere with it.
              </p>
            </div>

            <div className="rx-savings-grid">
              {savingsSteps.map((step) => (
                <article className="rx-step-card" key={step.title}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rx-generic-section">
          <div className="container rx-generic-grid">
            <div className="rx-generic-image-wrap">
           <img
  src="/images/pharmacist-discussing-medication-options.jpg"
  alt="Pharmacist discussing generic medication options with a customer"
  className="rx-generic-image"
/>
            </div>

            <div>
              <p className="rx-section-eyebrow">
                Brand Name and Generic Medications
              </p>

              <h2>Generic Does Not Mean Lower Quality</h2>

              <p>
                FDA-approved generic medications must provide the same clinical
                benefits and risks as the approved brand-name medication. They
                contain the same active ingredient and must meet FDA standards
                for quality, strength, stability, and performance.
              </p>

              <p>
                A generic may look different or contain different inactive
                ingredients. Your healthcare provider or pharmacist can help
                determine whether an available generic is appropriate for you.
              </p>

              <div className="rx-source-links">
                <a
                  href="https://www.fda.gov/drugs/generic-drugs/generic-drugs-questions-answers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FDA Generic Drug Information ↗
                </a>

                <a
                  href="https://medlineplus.gov/ency/patientinstructions/000863.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MedlinePlus Savings Guidance ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="rx-medication-types-section">
          <div className="container">
            <div className="rx-section-header">
              <p className="rx-section-eyebrow">
                Understanding Medication Benefits
              </p>

              <h2>Included and Discounted Medications Are Not the Same</h2>

              <p>
                Some prescriptions may be included through a qualifying
                membership, while others receive a discounted price. The
                current formulary determines which benefit applies.
              </p>
            </div>

            <div className="rx-medication-types-grid">
              {medicationTypes.map((type) => (
                <article key={type.title}>
                  <h3>{type.title}</h3>
                  <p>{type.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
<section className="rx-myths-section">
  <div className="container">
    <div className="rx-section-header">
      <p className="rx-section-eyebrow">
        Prescription Myths and Facts
      </p>

      <h2>Common Prescription Assumptions That Can Cost You Money</h2>

      <p>
        Understanding how medication pricing, generics, insurance, telehealth,
        and savings programs work can help you make more informed decisions.
      </p>
    </div>

    <div className="rx-myths-grid">
      {prescriptionMyths.map((item) => (
        <article key={item.myth}>
          <span>Myth</span>
          <h3>{item.myth}</h3>

          <strong>Fact</strong>
          <p>{item.fact}</p>
        </article>
      ))}
    </div>
  </div>
</section>
        <section className="rx-konnectmd-section">
          <div className="container">
            <div className="rx-section-header rx-light-header">
              <p className="rx-section-eyebrow">
                Where KonnectMD Fits
              </p>

              <h2>Multiple Ways to Reduce Prescription Costs</h2>

     <p>
  Every KonnectMD membership includes 24/7 access to licensed
  physicians for appropriate non-emergency healthcare concerns.
  Depending on the membership selected, members may also receive
  eligible acute medications, prescription discounts, qualifying
  chronic medication benefits, retail pharmacy access, home-delivery
  options, and secure online access to review applicable prescription
  resources. Benefits expand as membership levels increase.
</p>
            </div>

            <div className="rx-highlight-grid">
              {konnectmdBenefits.map((benefit) => (
                <article className="rx-benefit-card" key={benefit.title}>
                  <span aria-hidden="true">✓</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="rx-plan-message">
              <div>
                <strong>Choose the membership that best fits your healthcare needs.</strong>
             <p>
  Every KonnectMD membership includes 24/7 physician access. Prescription
  benefits expand as membership levels increase. Review the available
  membership options to compare included medications, chronic medication
  benefits, prescription savings resources, and additional healthcare services.
</p>
              </div>

           <Link to="/plans" className="btn btn-primary">
  Find the Right Membership for Your Prescription Needs
</Link>
            </div>
          </div>
        </section>

        <section className="rx-process-section">
          <div className="container">
            <div className="rx-section-header">
              <p className="rx-section-eyebrow">
                Member Experience
              </p>

              <h2>How the KonnectMD Prescription Process Works</h2>
            </div>

            <div className="rx-process-grid">
              {programSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rx-faq-section">
          <div className="container">
            <div className="rx-section-header">
              <p className="rx-section-eyebrow">
                Frequently Asked Questions
              </p>

              <h2>Prescription Savings Questions, Answered Clearly</h2>
            </div>

            <div className="rx-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rx-related-section">
          <div className="container">
            <div className="rx-section-header">
              <p className="rx-section-eyebrow">
                Continue Learning
              </p>

              <h2>Continue Your Healthcare Journey</h2>
            </div>

            <div className="rx-related-grid">
              {relatedResources.map((resource) => (
                <Link
                  to={resource.link}
                  className="rx-related-card"
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

        <section className="rx-sources-section">
          <div className="container">
            <div className="rx-sources-card">
              <div>
                <p className="rx-section-eyebrow">Trusted Sources</p>

                <h2>Educational Guidance From Recognized Authorities</h2>

                <p>
                  Medication education on this page is based on FDA,
                  MedlinePlus, and federal healthcare resources. KonnectMD
                  membership information is based on current official program
                  documents and should be confirmed through the member portal.
                </p>
              </div>

              <div className="rx-sources-links">
                <a
                  href="https://www.fda.gov/drugs/generic-drugs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FDA Generic Drugs ↗
                </a>

                <a
                  href="https://medlineplus.gov/medicines.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MedlinePlus Medicines ↗
                </a>

                <a
                  href="https://www.healthcare.gov/glossary/formulary/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Healthcare.gov Formulary Definition ↗
                </a>
              </div>

              <div className="rx-disclaimer">
                <strong>Prescription benefit disclaimer</strong>

                <p>
                  Prescription benefits vary by membership level. Included
                  medications, quantities, pharmacy options, home delivery,
                  chronic and acute medication benefits, and savings programs
                  are subject to the selected membership, current formulary,
                  participating pharmacies, valid prescription requirements,
                  dosage limits, availability, and current program terms.
                  Prices and formularies may change. Always confirm current
                  benefits before filling a prescription.
                </p>

                <p>
                  This page is educational and is not medical or pharmaceutical
                  advice. Never change, stop, split, or reduce medication
                  without guidance from a qualified healthcare professional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}