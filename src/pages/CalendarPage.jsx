import { useEffect } from "react";

export default function CalendarPage() {
  useEffect(() => {
    document.title = "Book a Call | KonnectMD Access";
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="cta-box premium-cta">
          <p className="eyebrow">Book a Call</p>
          <h1 className="page-title">Schedule a time to review your options</h1>
          <p className="section-copy">
            Choose a time that works for you and we'll walk through the
            membership options that best fit your needs. Takes 15  minutes but there's 
            extra time if you need it —no pressure, no commitment.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              margin: "1.5rem 0",
              textAlign: "center",
            }}
          >
            {[
              { stat: "15 min", label: "Quick and focused" },
              { stat: "Free", label: "No cost, no obligation" },
              { stat: "Local", label: "Hampton Roads based agent" },
              { stat: "🔒", label: "HIPAA compliant platform" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "1rem",
                }}
              >
                <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 800, color: "var(--blue-soft)", lineHeight: 1 }}>
                  {item.stat}
                </span>
                <span style={{ display: "block", fontSize: "0.82rem", color: "var(--muted)", marginTop: "0.35rem" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="calendar-embed">
            <iframe
              src="https://b.12stoneboost.com/widget/bookings/system-clarity-conversation"
              title="Book a Call"
              width="100%"
              height="800"
              frameBorder="0"
            ></iframe>
          </div>

          <div style={{
            marginTop: "1.5rem",
            padding: "0.85rem 1.25rem",
            background: "rgba(45, 127, 249, 0.06)",
            border: "1px solid rgba(45, 127, 249, 0.15)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
          }}>
            <span style={{ fontSize: "16px" }}>🔒</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              Powered by <strong style={{ color: "var(--blue-soft)" }}>KonnectMD</strong> — HIPAA Compliant Telehealth. Your information is secure and will never be sold.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}