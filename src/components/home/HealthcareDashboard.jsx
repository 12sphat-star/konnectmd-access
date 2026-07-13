import "../../Styles/HealthcareDashboard.css";
import { Link } from "react-router-dom";

const issues = [
  {
    tag: "Access",
    title: "Doctor Shortages",
    text:
      "Many communities face long waits for primary care and limited access to specialists.",
    help:
      "24/7 virtual physician access may provide another option for appropriate non-emergency needs.",
    link: "/resource-center/telehealth",
  },
  {
    tag: "Affordability",
    title: "Prescription Costs",
    text:
      "Medication costs remain one of the biggest healthcare concerns for individuals and families.",
    help:
      "Prescription savings, included medication benefits, and participating pharmacy options may help reduce eligible costs.",
    link: "/resource-center/prescription-savings",
  },
  {
    tag: "Behavioral Health",
    title: "Mental Health Demand",
    text:
      "Demand for counseling, psychology, psychiatry, and practical life-support resources continues to grow.",
    help:
      "Qualifying memberships may include counseling and broader behavioral-health and life-support resources.",
    link: "/resource-center/behavioral-health",
  },
  {
    tag: "Virtual Care",
    title: "Telehealth Growth",
    text:
      "Virtual care is becoming an important way for people to access healthcare more conveniently.",
    help:
      "Members may connect with licensed healthcare professionals through qualifying virtual-care services.",
    link: "/resource-center/telehealth",
  },
  {
    tag: "Families",
    title: "Family Healthcare",
    text:
      "Families need practical healthcare access for children, adults, prescriptions, behavioral support, and caregiving.",
    help:
      "Qualifying household memberships may support eligible spouses and dependents through one membership.",
    link: "/resource-center/family-healthcare",
  },
  {
    tag: "Employees",
    title: "Small Business Healthcare",
    text:
      "Small businesses are looking for practical healthcare benefits that support employees and their families.",
    help:
      "KonnectMD may supplement an employer benefit strategy with virtual care, prescriptions, and behavioral-health resources.",
    link: "/resource-center/small-business-healthcare",
  },
  {
    tag: "Veterans",
    title: "Veterans Healthcare Access",
    text:
      "Veterans may benefit from healthcare resources that complement—not replace—their earned VA benefits.",
    help:
      "KonnectMD may provide additional access for non-emergency care, prescriptions, behavioral health, and eligible family members.",
    link: "/resource-center/veterans",
  },
  {
    tag: "Wellness",
    title: "Preventive Wellness Care",
    text:
      "More people are looking for practical ways to manage their health before small concerns become larger.",
    help:
      "Preventive education, virtual access, prescription resources, and behavioral support may help members stay engaged with their health.",
    link: "/resource-center/family-healthcare",
  },
];

export default function HealthcareDashboard() {
  return (
    <section className="healthcare-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <p className="dashboard-eyebrow">Healthcare in America</p>

          <h2>What&apos;s Changing—and Why It Matters</h2>

          <p>
            Rising costs, provider shortages, behavioral-health demand, and the
            growth of virtual care are changing how people access healthcare.
            Understanding these challenges is the first step toward finding
            better options.
          </p>
        </div>

        <div className="dashboard-grid dashboard-grid-eight">
          {issues.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="dashboard-card dashboard-card-link"
            >
              <span className="dashboard-tag">{item.tag}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="dashboard-help">
                <strong>How KonnectMD may help</strong>
                <span>{item.help}</span>
              </div>

              <span className="dashboard-link">
                Explore resource →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}