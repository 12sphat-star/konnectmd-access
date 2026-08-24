import "../../Styles/HealthcareReality.css";

const realityStats = [
  {
    number: "19.2M",
    label: "Marketplace Enrollment",
    text: "People had effectuated ACA Marketplace coverage in 2026, compared with 21.8 million in 2025.",
    source: "KFF",
    sourceUrl:
      "https://www.kff.org/affordable-care-act/how-has-aca-marketplace-enrollment-changed-across-states-in-2026/",
  },
  {
    number: "58%",
    label: "Higher Premium Payments",
    text: "Average consumer premium payments increased among Marketplace enrollees in 2026.",
    source: "KFF",
    sourceUrl:
      "https://www.kff.org/affordable-care-act/what-we-know-so-far-about-2026-aca-marketplace-enrollment-premiums-and-deductibles/",
  },
  {
    number: "$1,000+",
    label: "Higher Deductibles",
    text: "Average Marketplace deductibles increased by more than $1,000 per person in 2026.",
    source: "KFF",
    sourceUrl:
      "https://www.kff.org/affordable-care-act/what-we-know-so-far-about-2026-aca-marketplace-enrollment-premiums-and-deductibles/",
  },
  {
    number: "4 in 10",
    label: "Prescription Affordability",
    text: "Adults report changing how they take prescription medicine because of cost.",
    source: "KFF",
    sourceUrl:
      "https://www.kff.org/health-costs/americans-challenges-with-health-care-costs/",
  },
];

export default function HealthcareReality() {
  return (
    <section
      className="healthcare-reality"
      aria-labelledby="healthcare-reality-title"
    >
      <div className="container">
        <div className="healthcare-reality-heading">
          <span>WHY THIS RESOURCE CENTER EXISTS</span>

          <h2 id="healthcare-reality-title">
            The Healthcare Landscape Is Changing.
          </h2>

          <p>
            Changes in coverage and rising healthcare costs are creating new
            questions for individuals, families and businesses.
          </p>
        </div>

        <div className="healthcare-reality-grid">
          {realityStats.map((stat) => (
            <article className="healthcare-reality-card" key={stat.label}>
              <strong>{stat.number}</strong>

              <h3>{stat.label}</h3>

              <p>{stat.text}</p>

              <a
                href={stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: {stat.source} ↗
              </a>
            </article>
          ))}
        </div>

        <div className="healthcare-reality-message">
          <strong>
            Behind every number is someone trying to figure out what to do
            next.
          </strong>

          <p>
            That's why KonnectMD Access is focused on making healthcare
            information, resources and practical options easier to understand.
          </p>
        </div>
      </div>
    </section>
  );
}