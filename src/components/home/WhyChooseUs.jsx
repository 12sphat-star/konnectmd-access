export default function WhyChooseUs() {
  const items = [
    {
      title: "A Practical Option When Traditional Routes Feel Out of Reach",
      text: "If traditional healthcare options do not fit your budget, that does not mean you should go without access to care.",
    },
    {
      title: "Built for Real-Life Budget Pressure",
      text: "Many households and small business owners are not refusing care — they are being priced out of traditional options.",
    },
    {
      title: "Household Value That Makes Sense",
      text: "One plan may support up to 7 members, making it easier to create value across the household.",
    },
    {
      title: "Nationwide Access and Guided Onboarding",
      text: "Members can access services across the U.S. and receive onboarding to help them understand how to use their benefits.",
    },
  ];

  return (
    <section id="why-choose-us" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Why People Are Taking a Closer Look</p>
          <h2>More than a lower-cost option — a more usable one</h2>
          <p className="section-copy">
            The value is not just in the membership itself. It is in helping
            people stay connected to care when they need a practical path
            forward.
          </p>
        </div>

        <div className="feature-grid premium-grid">
          {items.map((item) => (
            <div key={item.title} className="feature-card premium-card">
              <div className="feature-top-line"></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}