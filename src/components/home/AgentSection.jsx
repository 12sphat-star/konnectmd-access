import { Link } from "react-router-dom";

export default function AgentSection() {
  return (
    <section className="section section-dark">
      <div className="container two-col">
        <div>
          <p className="eyebrow">Agent Opportunity</p>
          <h2>
            Want to build income while helping people get the care they need?
          </h2>
          <p className="body-copy">
            We're building a team of agents in Hampton Roads to introduce
            KonnectMD to individuals, families, and businesses who need a
            better option. No MLM. No inventory. No recruit-your-friends
            pressure. Just a real opportunity to do meaningful work and
            get paid well for it.
          </p>
          <p className="body-copy">
            Flexible schedule. Real commissions. Full training and support
            provided. Licensed insurance agents especially welcome.
          </p>
          <a
href="/join-the-team"
  className="..."
>
            Learn About the Opportunity
         </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {[
            { stat: "Flexible", label: "Work full time, part time, or as a side income" },
            { stat: "Real Pay", label: "Earn commissions on every membership you place" },
            { stat: "Training", label: "Onboarding, tools, and ongoing support included" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "var(--panel)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "var(--blue-soft)",
                  minWidth: "80px",
                }}
              >
                {item.stat}
              </span>
              <span style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.5 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}