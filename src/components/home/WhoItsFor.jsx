import SectionHeading from "../shared/SectionHeading";

export default function WhoItsFor() {
  const audiences = [
    {
  label: "The Solo Operator",
      img: "/images/self-employed.jpg",
      alt: "Self-employed professional working independently",
      points: [
        "Your business runs on you — one health scare shouldn't derail everything",
        "Access virtual care, prescriptions and wellness without a corporate plan",
        "Use benefits the same day you enroll — no waiting periods",
        "Plans start at $59.99/mo — less than most people spend on one ER visit",
      ],
    },
    {
      label: "The Business That Wants to Do Right by Its Team",
      img: "/images/small-business.jpg",
      alt: "Small business owner in their workplace",
      points: [
        "You can't afford a group plan but you want to offer something real",
        "Business access starts at $24.99 per employee per month",
        "No complex HR setup — simple enrollment, immediate value",
        "First month free — book a demo and see how it fits your team",
      ],
    },
    {
      label: "The Family Holding It Together",
      img: "/images/telehealth-family.jpg",
      alt: "Family on a telehealth video call",
      points: [
        "Insurance quotes felt impossible — this was designed for exactly that moment",
        "One plan covers up to 7 household members nationwide",
        "Doctor visits from your couch — mental health, prescriptions, specialist access",
        "No referrals, no networks, no runaround — just care when you need it",
      ],
    },
  ];

  return (
    <section id="who-its-for" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Who It Helps"
          title="The healthcare system wasn't built for you. This was."
          text="Three very different situations. One common problem — healthcare that costs too much or covers too little. Here's how KonnectMD Access fits each one."
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
           Ready to stop going without? Pick a time that works for you and
            let's figure out the right fit together. Takes 15 minutes —
            and it could save you thousands every year.
          </p>
          <a href="/book-call" className="btn btn-primary">
            Schedule a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}