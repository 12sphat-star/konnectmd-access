export default function WhyChooseUs() {
  const items = [
    {
      title: "Built for Real Budget Pressure",
      text: "Many households and small business owners are not refusing care — they are being priced out of traditional options. This gives them a more practical path to stay connected to support.",
    },
    {
      title: "Household Value Changes the Math",
      text: "Instead of thinking one person at a time, this membership can create stronger value across the household, which makes the monthly cost easier to justify.",
    },
    {
      title: "Layered Membership Options",
      text: "From basic urgent care access to broader support that can include behavioral health, primary care, labs, and more, people can choose the level that fits their real needs.",
    },
    {
      title: "A Simpler Decision for People Who Need Something Now",
      text: "For many people, the biggest win is not having to stay stuck. This gives them another option to explore now instead of going without care altogether.",
    },
  ];

  return (
    <section id="why-choose-us" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Why People Are Taking a Closer Look</p>
          <h2>More than a lower-cost option — a more usable one</h2>
          <p className="section-copy">
            The value is not just in the price. It is in giving people a clearer,
            more practical way to access care when traditional options feel out of reach.
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