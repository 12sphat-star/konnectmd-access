import SectionHeading from "../shared/SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Get Your Options",
      text: "Start by reviewing the KonnectMD membership levels online or speak with an agent for guidance. We help you understand what may fit your household, budget, or business.",
    },
    {
      number: "02",
      title: "Choose & Enroll",
      text: "Select the membership that fits your needs and complete enrollment online in minutes. No complicated process and no traditional insurance-style confusion.",
    },
    {
      number: "03",
      title: "Start Using Benefits",
      text: "Use your membership for virtual care, prescription savings, mental health support, and other eligible services depending on your plan.",
    },
  ];

  return (
    <section id="how-it-works" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple to Start. Easy to Use."
          text="KonnectMD was built to remove confusion and help people access care faster."
        />

        <div className="why-grid">
          {steps.map((step) => (
            <div key={step.number} className="feature-card premium-card">
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "var(--blue-soft)",
                  marginBottom: "0.6rem",
                }}
              >
                {step.number}
              </div>

              <div className="feature-top-line"></div>

              <h3
                style={{
                  fontSize: "1rem",
                  margin: "0.45rem 0",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <a href="/get-details" className="btn btn-primary">
            Get Plan Details
          </a>
        </div>
      </div>
    </section>
  );
}