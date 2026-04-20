import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

 const options = [
  {
    title: "Telehealth / 24/7 Access",
    subtitle: "Talk to a doctor without the waiting room.",
    text: "Fast access by phone or video when convenience matters most.",
    path: "/get-details/telehealth",
    tag: "Most Popular",
    icon: "🩺",
    featured: true,
  },
  {
    title: "Rx Savings",
    subtitle: "Lower everyday medication costs.",
    text: "Help reduce monthly out-of-pocket medication expenses.",
    path: "/get-details/rx-savings",
    tag: "Budget Relief",
    icon: "💊",
  },
  {
    title: "Mental Health / Counseling",
    subtitle: "Support beyond physical care.",
    text: "Access to mental wellness support in a simpler way.",
    path: "/get-details/mental-health",
    tag: "Whole-Person Care",
    icon: "🧠",
  },
  {
    title: "Whole Family Membership",
    subtitle: "Built for more than one person.",
    text: "One membership can support your household.",
    path: "/get-details/family-membership",
    tag: "Family Value",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Additional Benefits Stack",
    subtitle: "More than one feature.",
    text: "Explore the full value beyond a single benefit.",
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
    <section className="selector-lux section">
      <div className="container">
        <div className="selector-lux-hero">
          <p className="selector-lux-kicker">Get Plan Details</p>
          <h1>Choose the area that fits what matters most to you.</h1>
          <p className="selector-lux-sub">
            Instead of sending everyone through one generic page, choose the
            path that fits your biggest concern and explore the option in a more
            focused way.
          </p>
        </div>

        <div className="selector-lux-grid">
          {options.map((option) => (
            <button
  key={option.path}
  type="button"
  className={`details-selector-card ${option.featured ? "featured" : ""}`}
  onClick={() => navigate(option.path)}
>
  <div className="details-selector-card-top">
    <span className="details-selector-icon">{option.icon}</span>
    <span className="details-selector-tag">{option.tag}</span>
  </div>

  <h3>{option.title}</h3>
  <h4>{option.subtitle}</h4>
  <p>{option.text}</p>

  <div className="details-selector-cta">
    <span>Explore This Option</span>
    <span>→</span>
  </div>
</button>
          ))}
        </div>

        <div className="selector-lux-footer">
          <p>
            Looking for the fastest next step? You can also go straight to the
            contact form.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/contact")}
          >
            Go to Contact Form →
          </button>
        </div>
      </div>
    </section>
  );
}