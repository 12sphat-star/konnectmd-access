import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function WhenToUseTelehealthVsUrgentCarePage() {
  return (
    <main style={{ background: "#071426", color: "#fff", minHeight: "100vh" }}>
      <SEO
        title="Telehealth vs Urgent Care vs ER | Hampton Roads Guide"
        description="A practical guide for Hampton Roads families, veterans, workers, and business owners on when to use telehealth, urgent care, or the emergency room."
        path="/insights/when-to-use-telehealth-vs-urgent-care-vs-er-hampton-roads"
      />

      <section style={{ padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ color: "#93c5fd", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Healthcare Decision Guide
          </p>

          <h1 style={{ fontSize: "clamp(42px, 7vw, 72px)", lineHeight: 0.95, fontWeight: 950 }}>
            When to Use Telehealth vs. Urgent Care vs. the ER
          </h1>

          <p style={{ color: "#cbd5e1", fontSize: "18px", lineHeight: 1.7, maxWidth: "850px" }}>
            For families, veterans, workers, and business owners in Hampton Roads, knowing where to go
            for care can save time, reduce stress, and help avoid delays when the situation is serious.
          </p>

          <div style={{ marginTop: "28px", padding: "22px", borderRadius: "18px", background: "#0b1f36", border: "1px solid rgba(147,197,253,0.20)" }}>
            <strong style={{ color: "#fca5a5" }}>Important:</strong>{" "}
            <span style={{ color: "#cbd5e1" }}>
              This guide is educational only. If you believe someone is having a medical emergency,
              call 911 immediately.
            </span>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "22px" }}>
          <DecisionCard
            title="Use Telehealth When"
            items={[
              "Symptoms are mild or non-emergency",
              "You need guidance for cold, flu, sinus, or allergy symptoms",
              "You need help deciding your next step",
              "You need mental health or counseling support",
              "You need prescription guidance or a refill conversation",
            ]}
          />

          <DecisionCard
            title="Use Urgent Care When"
            items={[
              "You may need an in-person exam",
              "You may need stitches, X-rays, or lab testing",
              "Symptoms are not life-threatening but need attention soon",
              "You have a minor injury, sprain, cut, or persistent infection",
              "Your primary doctor is unavailable",
            ]}
          />

          <DecisionCard
            title="Use the ER / Call 911 When"
            warning
            items={[
              "Chest pain, pressure, or shortness of breath",
              "Stroke-like symptoms such as face drooping, arm weakness, or speech trouble",
              "Severe bleeding, severe injury, or major trauma",
              "Difficulty breathing",
              "Suicidal thoughts, crisis, or immediate danger",
            ]}
          />
        </div>
      </section>

      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 950 }}>Quick Comparison</h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", color: "#cbd5e1" }}>
              <thead>
                <tr style={{ background: "#0b1f36" }}>
                  <th style={cell}>Situation</th>
                  <th style={cell}>Telehealth</th>
                  <th style={cell}>Urgent Care</th>
                  <th style={cell}>ER / 911</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cold, flu, allergies", "Often helpful", "Sometimes", "Usually no"],
                  ["Medication questions", "Often helpful", "Sometimes", "Usually no"],
                  ["Minor cut or sprain", "May guide next step", "Often helpful", "If severe"],
                  ["Chest pain or trouble breathing", "No", "No", "Yes"],
                  ["Mental health support", "Often helpful", "Sometimes", "If crisis or immediate danger"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((item) => (
                      <td key={item} style={cell}>{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 950 }}>How KonnectMD Access Fits</h2>

          <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "18px", maxWidth: "880px" }}>
            KonnectMD Access is not a replacement for emergency care. It is designed to help people
            get faster access to virtual care, mental health support, prescription savings, and family
            healthcare resources when the situation is appropriate for non-emergency support.
          </p>

          <div style={{ marginTop: "26px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="https://konnectmdnow.com/"
              target="_blank"
              rel="noreferrer"
              style={button}
            >
              Join Now
            </a>

            <Link
              to="/veterans-healthcare-access"
              style={outlineButton}
            >
              Veterans Healthcare Access
            </Link>

            <Link
              to="/insights"
              style={outlineButton}
            >
              More Insights
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 24px 90px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 950 }}>FAQs</h2>

          <FAQ
            q="Can telehealth replace the emergency room?"
            a="No. Telehealth should not be used for life-threatening symptoms. For emergencies, call 911 or go to the nearest emergency room."
          />

          <FAQ
            q="Can telehealth help me decide what to do next?"
            a="Yes, for many non-emergency situations, a virtual provider may help you understand symptoms and decide whether additional care is needed."
          />

          <FAQ
            q="Is this useful for veterans and military families?"
            a="Yes. Veterans and military families in Hampton Roads often manage busy schedules, stress, and access challenges. Telehealth may be one helpful option for non-emergency care."
          />

          <div style={{ marginTop: "28px", padding: "22px", borderRadius: "18px", background: "#0b1f36", border: "1px solid rgba(147,197,253,0.20)" }}>
            <p style={{ color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>
              Veterans in crisis can call <strong>988 and press 1</strong>, text <strong>838255</strong>,
              or contact the Veterans Crisis Line. If there is immediate danger, call 911.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function DecisionCard({ title, items, warning }) {
  return (
    <div style={{ background: "#0b1f36", border: warning ? "1px solid rgba(252,165,165,0.55)" : "1px solid rgba(147,197,253,0.20)", borderRadius: "22px", padding: "26px" }}>
      <h2 style={{ fontSize: "26px", fontWeight: 950, color: warning ? "#fca5a5" : "#fff" }}>
        {title}
      </h2>

      <ul style={{ color: "#cbd5e1", lineHeight: 1.8, paddingLeft: "20px" }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div style={{ marginTop: "18px", padding: "22px", borderRadius: "18px", background: "#0b1f36", border: "1px solid rgba(147,197,253,0.20)" }}>
      <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 900 }}>{q}</h3>
      <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>{a}</p>
    </div>
  );
}

const cell = {
  border: "1px solid rgba(147,197,253,0.18)",
  padding: "16px",
  textAlign: "left",
};

const button = {
  background: "#2563eb",
  color: "#fff",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 900,
};

const outlineButton = {
  color: "#93c5fd",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 900,
  border: "1px solid rgba(147,197,253,0.35)",
};