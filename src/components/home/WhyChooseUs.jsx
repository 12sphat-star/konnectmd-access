import SectionHeading from "../shared/SectionHeading";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "⏱️",
      title: "No Open Enrollment Wait",
      text: "KonnectMD gives people a way to access care without waiting for a traditional enrollment window.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Built for Households",
      text: "Eligible membership options may include up to 7 household members, making it practical for families.",
    },
    {
      icon: "🏠",
      title: "Care From Home",
      text: "Members can access virtual care options without sitting in a waiting room for common needs.",
    },
    {
      icon: "💊",
      title: "More Than Doctor Visits",
      text: "KonnectMD may help with prescription savings, mental health support, dental, vision, chiropractic access, and more.",
    },
    {
      icon: "💼",
      title: "Small Business Friendly",
      text: "A practical conversation for business owners who want to support employees, contractors, or independent teams.",
    },
    {
      icon: "✅",
      title: "Simple to Understand",
      text: "KonnectMD is not traditional health insurance. It is a healthcare membership designed around access and savings.",
    },
  ];

  return (
    <section id="why-choose-us" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Why People Choose KonnectMD"
          title="A Simpler Way to Access Care When Traditional Options Feel Too Expensive"
          text="KonnectMD is built for people who need practical healthcare access, clear options, and a faster way to get help."
        />

        <div className="why-grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="feature-card premium-card">
              <div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                {reason.icon}
              </div>

              <div className="feature-top-line"></div>

              <h3
                style={{
                  fontSize: "1rem",
                  margin: "0.4rem 0",
                }}
              >
                {reason.title}
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}