import "../../Styles/LearningCenter.css";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "When Should I Use Telehealth?",
    text:
      "Know when virtual care can save time, money, and unnecessary trips to urgent care.",
    link: "/resource-center/telehealth",
    category: "Virtual Care",
  },
  {
    title: "How Prescription Savings Work",
    text:
      "Understand how prescription savings programs help reduce medication costs.",
    link: "/resource-center/prescription-savings",
    category: "Prescription Savings",
  },
  {
    title: "Behavioral Health & Life Support",
    text:
      "Explore counseling, emotional wellness, relationships, workplace support, financial stress resources, legal referrals, caregiving, and more.",
    link: "/resource-center/behavioral-health",
    category: "Behavioral Health",
  },
  {
    title: "Healthcare for Families",
    text:
      "Explore preventive care, children's health, virtual care, prescriptions, behavioral support, caregiving, and household membership options.",
    link: "/resource-center/family-healthcare",
    category: "Families",
  },
  {
    title: "Healthcare for Small Businesses",
    text:
      "Compare employer healthcare options, employee access, telehealth, prescriptions, behavioral support, and where KonnectMD may fit.",
    link: "/resource-center/small-business-healthcare",
    category: "Business",
  },
  {
    title: "Veterans Healthcare Resources",
    text:
      "Healthcare support that complements—not replaces—your VA benefits.",
    link: "/resource-center/veterans",
    category: "Veterans",
  },
];

export default function LearningCenter() {
  return (
    <section id="learning-center" className="learning-center">
      <div className="container">
        <div className="learning-header">
          <p className="learning-eyebrow">
            Healthcare Learning Center
          </p>

          <h2>Learn Before You Decide</h2>

          <p>
            Explore trusted healthcare resources designed to help individuals,
            families, veterans, entrepreneurs, and business owners make
            informed healthcare decisions.
          </p>
        </div>

        <div className="learning-grid">
          {resources.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="learning-card"
            >
              <span className="learning-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span className="learning-link">
                Read Resource →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}