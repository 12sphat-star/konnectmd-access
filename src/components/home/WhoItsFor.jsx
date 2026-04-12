import SectionHeading from "../shared/SectionHeading";

export default function WhoItsFor() {
  const audiences = [
    {
      label: "Self-Employed & Freelancers",
      img: "/images/self-employed.jpg",
      alt: "Self-employed professional working independently",
      points: [
        "You built your own income — protect it with care access that fits",
        "Skip the $1,200/mo premium and still stay connected to real care",
        "Virtual visits, prescriptions, and wellness on your schedule",
        "No HR department needed — enroll today and use it tomorrow",
      ],
    },
    {
      label: "Small Business Owners",
      img: "/images/small-business.jpg",
      alt: "Small business owner in their workplace",
      points: [
        "Attract and keep good people without a costly group plan",
        "Business pricing starts at $24.99 per employee per month",
        "First month free — low risk, high value for your team",
        "Book a business demo and we'll walk through your options",
      ],
    },
    {
      label: "Families Going Without",
      img: "/images/telehealth-family.jpg",
      alt: "Family on a telehealth video call",
      points: [
        "One membership covers up to 7 people in your household",
        "See a doctor from home — no waiting room, no co-pay on select plans",
        "Mental health support, prescriptions, and specialist access included",
        "Your coverage moves with you — nationwide, no referrals required",
      ],
    },
  ];

  return (
    <section id="who-its-for" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Who It Helps"
          title="Real People. Real Situations. Real Solutions."
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
            Not sure which situation fits you best? That's what the free call
            is for. A licensed agent — not a bot, not a rep — will review your
            specific situation and tell you what actually makes sense.
          </p>
          <a href="/book-call" className="btn btn-primary">
            Schedule a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}