import SectionHeading from "../shared/SectionHeading";

export default function WhoItsFor() {
  const audiences = [
    {
      label: "Entrepreneurs & Self-Employed",
      img: "/images/self-employed.jpg",
      alt: "Entrepreneur reviewing healthcare options",
      points: [
        "You do not have an employer plan to fall back on",
        "You need care access without waiting for open enrollment",
        "KonnectMD can help with virtual care, prescriptions, and wellness support",
        "A practical option when traditional insurance feels too expensive",
      ],
    },
    {
      label: "Small Business Owners",
      img: "/images/doctor-call.jpg",
      alt: "Small business owner reviewing options",
      points: [
        "Group health plans can be expensive and complicated",
        "KonnectMD can be discussed as a simple access option for teams",
        "Helpful for employees, contractors, and independent workers",
        "A smart conversation for businesses that want to offer more support",
      ],
    },
    {
      label: "Families & Households",
      img: "/images/family-care.jpg",
      alt: "Family healthcare access",
      points: [
        "Up to 7 household members may be included on one membership",
        "No added cost for each additional family member on eligible options",
        "Virtual care, mental health support, prescription savings, and more",
        "Built for families who need care without more confusion",
      ],
    },
  ];

  return (
    <section id="who-its-for" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Who This Helps"
          title="Built for People Who Need a Simpler Way to Access Care"
          text="KonnectMD is for families, entrepreneurs, small business owners, and everyday people who need care access without the stress of traditional insurance confusion."
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
              maxWidth: "680px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Not sure where you fit? That is what the call is for. A KonnectMD
            agent can walk you through the options and help you understand what
            may work for your household or business.
          </p>

          <a href="/get-details" className="btn btn-primary">
            Get Plan Details
          </a>
        </div>
      </div>
    </section>
  );
}