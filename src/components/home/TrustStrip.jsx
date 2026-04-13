export default function TrustStrip() {
  const items = [
    {
      icon: "🔒",
      label: "HIPAA Compliant",
      sub: "Secure & private platform",
    },
    {
      icon: "👨‍⚕️",
      label: "4,000+ Providers",
      sub: "Board-certified nationwide",
    },
    {
      icon: "📍",
      label: "Nationwide Access",
      sub: "All 50 states covered",
    },
    {
      icon: "✅",
      label: "Not an MLM",
      sub: "Licensed agent presented",
    },
  ];

  return (
    <section className="trust-strip trust-strip-alt">
      <div className="container trust-grid-alt">
        {items.map((item) => (
          <div key={item.label} className="trust-item-alt">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span className="trust-number">{item.label}</span>
            </div>
            <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--muted)", fontWeight: 400 }}>
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}