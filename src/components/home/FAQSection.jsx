import { useState } from "react";

const faqs = [
  {
    q: "Is this health insurance?",
    a: "No — KonnectMD Access is a healthcare access and savings membership, not health insurance. It provides access to licensed providers, prescriptions, wellness services, and more. It does not replace insurance but for many people it is the most practical and affordable option available.",
  },
  {
    q: "What do I actually get with a membership?",
    a: "Depending on your membership level you get access to virtual urgent care, primary care, mental health counseling, prescription savings, dental and vision discounts, lab discounts, chiropractic discounts, and more. Higher tiers add dermatology, chronic care management, preventive care, and lifestyle benefits.",
  },
  {
    q: "How much does it cost?",
    a: "Memberships start at $59.99/mo for the Silver plan and go up to $149.99/mo for Titanium. There is a one-time $30 enrollment fee. Business access starts at $24.99 per employee per month with the first month free.",
  },
  {
    q: "How many people can be on one plan?",
    a: "One membership can cover up to 7 household members. That makes it one of the strongest value options for families.",
  },
  {
    q: "Can I use this anywhere in the U.S.?",
    a: "Yes — KonnectMD Access is available nationwide. Your membership works wherever you are in the United States.",
  },
  {
    q: "How quickly can I start using it?",
    a: "Most members can access benefits the same day they enroll. After enrollment you go through a quick onboarding so you know exactly how to use every service.",
  },
  {
    q: "Do I need a license to become an agent?",
    a: "No — a license is not required to become a KonnectMD Access agent. This is not an MLM. There are no recruit-your-friends requirements and no inventory. It is a straightforward income opportunity helping people access care they otherwise couldn't afford.",
  },
  {
    q: "What if I have a medical emergency?",
    a: "If you are ever experiencing a medical emergency dial 911 immediately. KonnectMD is not appropriate for emergencies. Virtual care is designed for non-emergency consultations, primary care, mental health support, and everyday healthcare needs.",
  },
  {
    q: "Is KonnectMD HIPAA compliant?",
    a: "Yes — KonnectMD operates a secure, HIPAA-compliant platform. All services are provided by licensed professionals subject to their professional judgment.",
  },
  {
    q: "How is this different from regular telehealth apps?",
    a: "Most telehealth apps charge per visit. KonnectMD Access is a membership — you pay one monthly fee and get unlimited access to providers with $0 copays on select plans, plus prescription savings, mental health support, and more all in one place.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Got Questions?</p>
          <h2>Everything you need to know before you decide</h2>
          <p className="section-copy">
            Real answers to the questions people actually ask — including the
            ones about whether this is legit.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: "var(--panel)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                overflow: "hidden",
                transition: "border-color 0.2s ease",
                borderColor: open === index ? "rgba(45, 127, 249, 0.3)" : "var(--border)",
              }}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.1rem 1.25rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span style={{ color: "var(--blue-soft)", fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, fontWeight: 300 }}>
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div style={{ padding: "0 1.25rem 1.1rem", color: "var(--muted)", lineHeight: 1.75, fontSize: "0.95rem" }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1.25rem",
            background: "rgba(45, 127, 249, 0.06)",
            border: "1px solid rgba(45, 127, 249, 0.15)",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "var(--muted)", margin: "0 0 0.75rem", fontSize: "0.95rem" }}>
            Still have questions? Talk to a real person — not a bot.
          </p>
          <a href="/book-call" className="btn btn-primary">
            Book a Free 15-Minute Call
          </a>
        </div>
      </div>
    </section>
  );
}
