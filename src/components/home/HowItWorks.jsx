import SectionHeading from "../shared/SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Pick Your Level",
      text: "Silver, Gold, Platinum, or Titanium — each tier builds on the last. Start where your budget is today and upgrade anytime. Not sure which fits? A quick 15-minute call solves that.",
    },
    {
      number: "02",
      title: "Enroll in Minutes",
      text: "No lengthy applications. No medical exams. No waiting periods. Complete enrollment online and you're in — same day access on most plans.",
    },
    {
      number: "03",
      title: "Get Onboarded",
      text: "We don't just hand you a card and wish you luck. Every member gets onboarding so you know exactly how to use your benefits, access your portal, and get the most out of your membership from day one.",
    },
    {
      number: "04",
      title: "Use It Anywhere",
      text: "Virtual care, prescriptions, wellness support and more — available nationwide. Your membership travels with you wherever life takes you.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="From enrollment to care in four simple steps"
          text="No confusing paperwork. No runaround. Just a clear path to getting the care you and your household need."
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