import "../../Styles/KonnectMDFeatures.css";


const features = [
  {
    icon: "🩺",
    title: "24/7 Virtual Doctor",
    text: "Speak with a licensed physician anytime for many everyday healthcare concerns—without waiting weeks for an appointment.",
  },
  {
    icon: "💊",
    title: "Prescription Savings",
    text: "Reduce the cost of many common prescriptions through included pharmacy savings available with eligible memberships.",
  },
  {
    icon: "🧠",
    title: "Behavioral Health",
    text: "Access mental wellness and counseling resources designed to support your overall health and well-being.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Coverage",
    text: "Many membership options allow you to include your spouse and dependents, making healthcare easier for the entire family.",
  },
  {
    icon: "❤️",
    title: "Healthcare Guidance",
    text: "Educational tools and healthcare resources help you better understand and make the most of your membership.",
  },
  {
    icon: "🌎",
    title: "Nationwide Access",
    text: "Your KonnectMD membership is available nationwide, helping you stay connected wherever life takes you.",
  },
];

export default function KonnectMDFeatures() {
  return (
    <section className="konnect-features">
      <div className="container">

        <div className="section-heading">
         <p className="eyebrow">MEMBERSHIP BENEFITS</p>

<h2>Everything You Need... One Membership.</h2>

<p>
Access physicians, behavioral health, prescription savings, family coverage, and healthcare resources through one simple membership designed to make healthcare easier to navigate.
</p>
        </div>

        <div className="features-grid">
          {features.map((item) => (
            <div className="feature-card" key={item.title}>
              <div className="feature-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}