export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Working with KonnectMD has been a game-changer. Their expertise and flexibility have helped us lower high turnover and achieve significant cost savings.",
      name: "Jenelle Schneider",
      title: "Home Helpers Home Care Franchise",
    },
    {
      quote: "I highly recommend KonnectMD for their true professionalism and dedication to client success. Their support team has always gone above and beyond — makes me feel as if we're their only client.",
      name: "Amy Seitz",
      title: "Alaska Farm Bureau",
    },
    {
      quote: "Our goal is to offer the best benefits to our healthcare providers. We've partnered with KonnectMD to explore alternative options that help reduce out-of-pocket costs. Everyone deserves quality healthcare access.",
      name: "Silvermoon Cashen",
      title: "Pulmonary & Internal Medicine Associates",
    },
  ];

  const stats = [
    { stat: "4,000+", label: "Board-certified providers nationwide" },
    { stat: "60%", label: "Reduction in doctor office visits" },
    { stat: "$0", label: "Copays for telehealth on select plans" },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Real Results</p>
          <h2>What people are saying about KonnectMD</h2>
          <p className="section-copy">
            From franchise owners to farm bureaus to medical practices —
            here's what members and partners have experienced.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="feature-card premium-card"
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <div className="feature-top-line"></div>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "0.95rem", fontStyle: "italic", margin: "0 0 1.25rem" }}>
                "{t.quote}"
              </p>
              <div>
                <p style={{ fontWeight: 700, color: "var(--text)", margin: "0 0 0.2rem", fontSize: "0.95rem" }}>
                  {t.name}
                </p>
                <p style={{ color: "var(--blue-soft)", margin: 0, fontSize: "0.85rem" }}>
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginTop: "1.5rem",
            padding: "1.5rem",
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            textAlign: "center",
          }}
        >
          {stats.map((item) => (
            <div key={item.label}>
              <span style={{ display: "block", fontSize: "2rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>
                {item.stat}
              </span>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--muted)", marginTop: "0.4rem", lineHeight: 1.5 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "0.8rem",
            color: "var(--muted)",
            opacity: 0.7,
          }}
        >
          Testimonials sourced from KonnectMD.com. Stats provided by KonnectMD.
        </p>
      </div>
    </section>
  );
}