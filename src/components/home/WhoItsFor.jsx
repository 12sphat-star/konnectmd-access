import SectionHeading from "../shared/SectionHeading";

export default function WhoItsFor() {
  const audiences = [
    {
      label: "Self-Employed & Freelancers",
      img: "/images/self-employed.jpg",
      alt: "Self-employed professional working independently",
      points: [
        "No employer plan — you carry the full cost",
        "Traditional premiums can exceed your monthly profit",
        "KonnectMD gives you real access without the insurance price tag",
        "Virtual care, prescriptions, and wellness — starting at $59.99/mo",
      ],
    },
    {
      label: "Small Business Owners",
      img: "/images/small-business.jpg",
      alt: "Small business owner in their workplace",
      points: [
        "Group plans are often out of reach for small teams",
        "Offering access to care can help attract and retain people",
        "One membership per household — no complex HR setup",
        "We can discuss business-specific options on a quick call",
      ],
    },
    {
      label: "Families Going Without",
      img: "/images/telehealth-family.jpg",
      alt: "Family on a telehealth video call",
      points: [
        "Up to 7 members on one plan",
        "Cover the whole household for less than most individual insurance plans",
        "Virtual care, mental health support, prescriptions, and more",
        "Nationwide access — your coverage travels with your family",
      ],
    },
  ];

  return (
    <section id="who-its-for" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Who It Helps"
          title="Built for the people traditional insurance left behind"
          text="Whether you're on your own, running a business, or raising a family — if the cost of traditional health insurance has priced you out, this was built for you."
        />

        <div className="steps-grid" style={{ marginTop: "2rem" }}>
          {audiences.map((audience) => (
            <div key={audience.label} className="step-card premium-card">
              <img
                src={audience.img}
                alt={audience.alt}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "1.1rem",
                }}
              />
              <div className="feature-top-line"></div>
              <h3 style={{ marginTop: 0, marginBottom: "0.85rem" }}>
                {audience.label}
              </h3>
              <ul className="check-list">
                {audience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.75,
              margin: "0 0 1rem",
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Not sure if this fits your situation? That's exactly what the free
            consultation call is for. A licensed agent will walk you through
            your options — no pressure, no commitment.
          </p>
          <a href="/book-call" className="btn btn-primary">
            Schedule a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}