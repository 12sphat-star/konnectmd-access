export default function TrustStrip() {
  const items = [
    "Same-day use after enrollment",
    "No traditional enrollment window",
    "Household-friendly options",
    "Virtual care convenience",
  ];

  return (
    <section className="trust-strip trust-strip-alt">
      <div className="container trust-grid-alt">
        {items.map((item, index) => (
          <div key={item} className="trust-item-alt">
            <span className="trust-number">0{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}