import SectionHeading from "../shared/SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a membership",
      text: "Review the membership options and choose the level that best fits your household, budget, or business.",
    },
    {
      number: "02",
      title: "Complete enrollment",
      text: "Enroll in the membership and get set up with a simple onboarding process.",
    },
    {
      number: "03",
      title: "Get onboarded",
      text: "After enrollment, members are shown how to understand their benefits, access their portal, and use the membership with less confusion.",
    },
    {
      number: "04",
      title: "Use services nationwide",
      text: "Once setup is complete, members can begin using services and accessing benefits across the U.S.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear path from enrollment to using your benefits"
          text="The process is designed to feel simple, guided, and easy to understand."
        />

        <div className="steps-grid four-steps">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}