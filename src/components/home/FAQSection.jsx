import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/FAQSection.css";

const faqs = [
  {
    category: "Membership",
    q: "Is KonnectMD health insurance?",
    a: "No. KonnectMD is a healthcare access membership, not health insurance. It can help members access virtual care, prescription savings, behavioral health services, wellness resources, and other benefits. It does not provide insurance coverage for every medical expense.",
  },
  {
    category: "Membership",
    q: "What is included with a KonnectMD membership?",
    a: "Benefits depend on the membership level selected. Available services may include 24/7 physician access, virtual urgent care, primary care, counseling, prescription savings, dental and vision discounts, lab benefits, chiropractic discounts, dermatology, preventive care, chronic-care support, pet-health resources, and lifestyle benefits.",
  },
  {
    category: "Pricing",
    q: "How much does membership cost?",
    a: "Current household membership levels range from $59.99 per month for Silver to $149.99 per month for Titanium. A one-time enrollment fee may apply. Business pricing and eligibility may differ from household membership pricing.",
  },
  {
    category: "Family",
    q: "How many family members can be included?",
    a: "One eligible household membership may include up to seven family members, subject to current membership terms and eligibility requirements.",
  },
  {
    category: "Access",
    q: "Is KonnectMD available nationwide?",
    a: "KonnectMD provides nationwide healthcare access through participating providers and services. Availability for specific services can vary by state, provider licensing, membership level, and program terms.",
  },
  {
    category: "Access",
    q: "How quickly can I begin using the membership?",
    a: "Many services may become available soon after enrollment and onboarding. Activation timing can vary by service, membership level, and account setup requirements.",
  },
  {
    category: "Telehealth",
    q: "Does KonnectMD include virtual urgent care?",
    a: "Virtual urgent care and physician access are available through qualifying memberships for many common non-emergency healthcare concerns.",
  },
  {
    category: "Behavioral Health",
    q: "Does KonnectMD include mental health support?",
    a: "Depending on the membership level, members may have access to counseling, psychology, psychiatry, crisis support, emotional wellness resources, and other behavioral health services.",
  },
  {
    category: "Prescription Savings",
    q: "How do prescription savings work?",
    a: "KonnectMD memberships may include discounted medications, an acute medication formulary, and broader prescription benefits depending on the plan selected. Savings vary by medication, pharmacy, availability, and program terms.",
  },
  {
    category: "Business",
    q: "Can small businesses use KonnectMD?",
    a: "Yes. KonnectMD offers healthcare access options for business owners, entrepreneurs, employees, and organizations seeking an alternative or supplemental healthcare benefit.",
  },
  {
    category: "Self-Employed",
    q: "Can entrepreneurs and self-employed people use KonnectMD?",
    a: "Yes. Self-employed professionals, independent contractors, entrepreneurs, and small business owners can enroll in eligible household memberships or explore available business options.",
  },
  {
    category: "Insurance",
    q: "Can I use KonnectMD if I already have health insurance?",
    a: "Yes. Many members use KonnectMD alongside existing insurance to improve access to virtual care, prescription savings, behavioral health services, and other resources.",
  },
  {
    category: "Enrollment",
    q: "Do I need to wait for open enrollment?",
    a: "No. KonnectMD membership enrollment is separate from traditional health insurance open-enrollment periods.",
  },
  {
    category: "Safety",
    q: "What should I do during a medical emergency?",
    a: "Call 911 or go to the nearest emergency department. KonnectMD virtual services are not a replacement for emergency medical care.",
  },
  {
    category: "Privacy",
    q: "Is the KonnectMD platform secure?",
    a: "KonnectMD states that its healthcare platform uses privacy and security practices designed for healthcare services. Members should review the current privacy policy, platform terms, and provider information for complete details.",
  },
  {
    category: "Telehealth",
    q: "How is this different from a typical telehealth app?",
    a: "KonnectMD combines virtual care with additional services such as prescription savings, behavioral health, care navigation, family access, discounts, and specialty programs. Exact benefits depend on the membership selected.",
  },
];

const popularQuestions = [
  "Is KonnectMD health insurance?",
  "What is included with a KonnectMD membership?",
  "How much does membership cost?",
  "How many family members can be included?",
  "Is KonnectMD available nationwide?",
];

const categories = [
  "Popular",
  "Membership",
  "Access",
  "Prescription Savings",
  "Behavioral Health",
  "Family",
  "Business",
  "Telehealth",
];

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    let results =
      activeCategory === "Popular"
        ? faqs.filter((faq) => popularQuestions.includes(faq.q))
        : faqs.filter((faq) => faq.category === activeCategory);

    if (normalizedSearch) {
      results = faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(normalizedSearch) ||
          faq.a.toLowerCase().includes(normalizedSearch) ||
          faq.category.toLowerCase().includes(normalizedSearch)
      );
    }

    return results;
  }, [activeCategory, searchTerm]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const selectCategory = (category) => {
    setActiveCategory(category);
    setSearchTerm("");
    setOpenQuestion(null);
  };

  return (
    <section className="faq-center" aria-labelledby="faq-center-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="faq-center-header">
          <p className="faq-center-eyebrow">Healthcare Knowledge Center</p>

          <h2 id="faq-center-title">How Can We Help You Today?</h2>

          <p>
            Search for an answer or choose a healthcare topic to quickly find
            the information you need.
          </p>
        </div>

        <div className="faq-search-wrap">
          <label htmlFor="faq-search" className="faq-search-label">
            Search frequently asked questions
          </label>

          <div className="faq-search-box">
            <span aria-hidden="true">⌕</span>

            <input
              id="faq-search"
              type="search"
              value={searchTerm}
              placeholder="Search membership, telehealth, prescriptions, family..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setOpenQuestion(null);
              }}
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setOpenQuestion(null);
                }}
                aria-label="Clear FAQ search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="faq-category-bar" aria-label="FAQ categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`faq-category-button ${
                activeCategory === category && !searchTerm ? "is-active" : ""
              }`}
              onClick={() => selectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="faq-center-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openQuestion === faq.q;

              return (
                <article
                  key={`${faq.category}-${faq.q}`}
                  className={`faq-center-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-center-question"
                    onClick={() =>
                      setOpenQuestion(isOpen ? null : faq.q)
                    }
                    aria-expanded={isOpen}
                  >
                    <span>
                      <small>{faq.category}</small>
                      <strong>{faq.q}</strong>
                    </span>

                    <span className="faq-center-toggle" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-center-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </article>
              );
            })
          ) : (
            <div className="faq-no-results">
              <h3>No matching answer was found.</h3>
              <p>Try another search term or select a category above.</p>
            </div>
          )}
        </div>

        <div className="faq-center-cta">
          <div>
            <h3>Still have questions?</h3>
            <p>
              Speak with a KonnectMD Access advisor and get help understanding
              the membership options.
            </p>
          </div>

          <Link to="/book-call" className="btn btn-primary">
            Book a 30-Minute Call
          </Link>
        </div>
      </div>
    </section>
  );
}