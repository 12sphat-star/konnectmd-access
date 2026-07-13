import "../../Styles/LatestInsights.css";
import { Link } from "react-router-dom";

const insights = [
  {
    category: "Telehealth",
    title: "Why More Families Are Exploring Telehealth",
    description:
      "Learn how virtual care is changing access to physicians, reducing unnecessary delays, and helping families receive care more conveniently.",
    link: "/insights/why-telehealth-is-growing-hampton-roads",
    readTime: "6 min read",
  },
  {
    category: "Veterans",
    title: "Understanding Mental Health Support for Veterans",
    description:
      "Explore available resources, common access challenges, and ways virtual care may complement existing veteran healthcare services.",
    link: "/insights/veteran-mental-health-support-hampton-roads",
    readTime: "7 min read",
  },
  {
    category: "Healthcare Decisions",
    title: "Telehealth, Urgent Care, or the Emergency Room?",
    description:
      "Use this practical guide to understand which care setting may be appropriate based on urgency, symptoms, and access needs.",
    link: "/insights/when-to-use-telehealth-vs-urgent-care-vs-er-hampton-roads",
    readTime: "8 min read",
  },
];

export default function LatestInsights() {
  return (
    <section
      className="latest-insights"
      aria-labelledby="latest-insights-title"
    >
      <div className="container">
        <div className="latest-insights-header">
          <div>
            <p className="latest-insights-eyebrow">Healthcare Insights</p>

            <h2 id="latest-insights-title">
              Trusted Guidance for Better Healthcare Decisions
            </h2>

            <p>
              Explore practical healthcare guides, current access issues, and
              educational resources designed to help you make informed
              decisions.
            </p>
          </div>

          <Link to="/insights" className="latest-insights-view-all">
            View All Insights →
          </Link>
        </div>

        <div className="latest-insights-grid">
          {insights.map((article) => (
            <Link
              key={article.title}
              to={article.link}
              className="latest-insight-card"
            >
              <div className="latest-insight-meta">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>

              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <span className="latest-insight-link">
                Read Article <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}