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
    a: "No — a license is not required to become a KonnectMD agent. This is not an MLM. There are no recruit-your-friends requirements and no inventory. It is a straightforward income opportunity helping people access care they otherwise couldn't afford.",
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
    a: "Most telehealth apps charge per visit. KonnectMD is a membership — you pay one monthly fee and get unlimited access to providers with $0 copays on select plans, plus prescription savings, mental health support, and more all in one place.",
  },
  {
  q: "Can entrepreneurs and self-employed people use KonnectMD Access?",
  a: "Yes — KonnectMD Access is becoming a popular healthcare access option for entrepreneurs, self-employed professionals, 1099 workers, and small business owners in Hampton Roads who need flexible healthcare support outside traditional employer plans.",
},
{
  q: "Does KonnectMD Access work for small business owners?",
  a: "Yes — many small business owners use KonnectMD Access to explore affordable healthcare access options for themselves, their families, and in some cases their employees.",
},
{
  q: "Does KonnectMD Access include mental health support?",
  a: "Depending on the membership level, KonnectMD Access may include access to mental health counseling and emotional wellness support services.",
},
{
  q: "Can I use KonnectMD Access in Hampton Roads?",
  a: "Yes — KonnectMD Access is available throughout Hampton Roads including Norfolk, Virginia Beach, Chesapeake, Portsmouth, Hampton, Newport News, and Suffolk.",
},
{
  q: "Do I have to wait for open enrollment?",
  a: "No — KonnectMD Access is not tied to traditional health insurance open enrollment periods.",
},
{
  q: "Does KonnectMD Access include virtual urgent care?",
  a: "Yes — depending on the membership selected, members may receive access to virtual urgent care services for common non-emergency health concerns.",
},
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
  return (
    <section className="section section-dark">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
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
