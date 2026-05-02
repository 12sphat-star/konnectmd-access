export default function TrustStrip() {
  const items = [
    {
      icon: "👨‍👩‍👧‍👦",
      label: "Up to 7 Household Members",
      sub: "One membership can help cover the family",
    },
    {
      icon: "👨‍⚕️",
      label: "24/7 Virtual Care",
      sub: "Talk to a provider without the waiting room",
    },
    {
      icon: "💊",
      label: "Prescription Savings",
      sub: "Help lower everyday medication costs",
    },
    {
      icon: "🧠",
      label: "Mental Health Support",
      sub: "Care access for stress, anxiety, and more",
    },
    {
      icon: "📍",
      label: "Nationwide Access",
      sub: "Use benefits across the U.S.",
    },
  ];

  return (
    <section className="trust-strip trust-strip-alt">
      <div className="container trust-grid-alt">
        {items.map((item) => (
          <div key={item.label} className="trust-item-alt">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ fontSize: "18px" }}>{item.icon}</span>
              <span className="trust-number">{item.label}</span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.82rem",
                color: "var(--muted)",
                fontWeight: 400,
              }}
            >
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}