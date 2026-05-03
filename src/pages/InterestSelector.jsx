import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const options = [
  {
    title: "Doctor Access",
    subtitle: "Talk to a provider without the waiting room.",
    text: "Good for people who want fast access to care from home.",
    path: "/get-details/telehealth",
    tag: "Most Popular",
    icon: "🩺",
    featured: true,
  },
  {
    title: "Prescription Savings",
    subtitle: "Lower everyday medication costs.",
    text: "Explore ways KonnectMD may help with medication savings.",
    path: "/get-details/rx-savings",
    tag: "Budget Relief",
    icon: "💊",
  },
  {
    title: "Mental Health Support",
    subtitle: "Care for stress, anxiety, and emotional wellness.",
    text: "Learn how KonnectMD may support whole-person care.",
    path: "/get-details/mental-health",
    tag: "Whole-Person Care",
    icon: "🧠",
  },
  {
    title: "Family Membership",
    subtitle: "Built for households, not just one person.",
    text: "One membership may include multiple eligible household members.",
    path: "/get-details/family-membership",
    tag: "Family Value",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Additional Benefits",
    subtitle: "More value beyond one feature.",
    text: "See other benefits that may be included with KonnectMD.",
    path: "/get-details/additional-benefits",
    tag: "Full Value",
    icon: "📦",
  },
];

export default function InterestSelector() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Get Plan Details | KonnectMD";
  }, []);

  return (
    <>
      <SEO
        title="Get Plan Details | KonnectMD"
        description="Compare KonnectMD options including doctor access, prescription savings, mental health support, family membership, and additional benefits."
        path="/get-details"
      />

      <main className="selector-page section">
        <div className="container">
          <div className="selector-header">
            <p className="eyebrow">Get Plan Details</p>
            <h1>What matters most to you right now?</h1>
            <p>
              Choose the area that best fits your situation. Each option opens a
              focused page so you can quickly understand how KonnectMD may help.
            </p>
          </div>

          <div className="selector-grid">
            {options.map((option) => (
              <button
                key={option.path}
                type="button"
                className={`selector-card ${option.featured ? "featured" : ""}`}
                onClick={() => navigate(option.path)}
              >
                <div className="selector-card-top">
                  <span className="selector-icon">{option.icon}</span>
                  <span className="selector-tag">{option.tag}</span>
                </div>

                <h3>{option.title}</h3>
                <h4>{option.subtitle}</h4>
                <p>{option.text}</p>

                <div className="selector-card-cta">
                  <span>Explore This Option</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>

          <div className="selector-footer">
            <p>Already know you want details?</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/contact")}
            >
              Go to Contact Form →
            </button>
          </div>
        </div>
      </main>
    </>
  );
}