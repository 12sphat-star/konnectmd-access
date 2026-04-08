import SectionHeading from "../shared/SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a membership",
      text: "Review the plan options and choose the level of access that best fits your household, budget, or business.",
    },
    {
      number: "02",
      title: "Enroll",
      text: "Complete enrollment and get started quickly with a simple setup process.",
    },
    {
      number: "03",
      title: "Get onboarded",
      text: "After enrollment, clients are guided through their membership details so they understand what they have, how to use it, and where to access their client portal and benefits.",
    },
    {
      number: "04",
      title: "Use your benefits",
      text: "Once set up, members can access services with less confusion and less stress, wherever they are in the U.S.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple path from enrollment to using your benefits"
          text="The process is built to make getting started feel clear, guided, and easy to use."
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