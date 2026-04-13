import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const faqs = [
  {
    q: "Is this health insurance?",
    a: "No — KonnectMD is a healthcare access and savings membership, not health insurance. It provides access to licensed providers, prescriptions, wellness services, and more.",
  },
  {
    q: "How much does it cost?",
    a: "Memberships start at $59.99/mo for the Silver plan. There is a one-time $30 enrollment fee. Business access starts at $24.99 per employee per month with the first month free.",
  },
  {
    q: "How many people can be on one plan?",
    a: "One membership can cover up to 7 household members — making it one of the strongest value options for families.",
  },
  {
    q: "How quickly can I start using it?",
    a: "Most members can access benefits the same day they enroll. After enrollment you go through a quick onboarding so you know exactly how to use every service.",
  },
  {
    q: "Do I need to be a licensed agent to offer this?",
    a: "No — a license is not required to become a KonnectMD Access agent. This is not an MLM. There are no recruit-your-friends requirements and no inventory.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "You Stopped Paying for Insurance. Now What? | KonnectMD Access";
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "You Stopped Paying for Insurance. Now What? | KonnectMD Access");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Millions of self-employed workers and families have been priced out of health insurance. KonnectMD is a real alternative starting at $59.99/mo.");
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", "https://konnectmd-access.pages.dev/landing");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", "You Stopped Paying for Insurance. Now What? | KonnectMD Access");
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", "Millions of self-employed workers and families have been priced out of health insurance. KonnectMD starts at $59.99/mo.");
  }, []);

  return (
    <section className="section landing-section">
      <div className="container landing-container">

        {/* ── HERO ── */}
        <div className="landing-hero">
          <p className="eyebrow">KonnectMD — Healthcare Membership</p>

          <h1>
            You Stopped<br />
            Paying For<br />
            Insurance.<br />
            <span style={{ color: "var(--blue-soft)" }}>Now What?</span>
          </h1>

          <p className="landing-sub">
            Millions of <strong style={{ color: "var(--text)" }}>self-employed workers,
            entrepreneurs, and families</strong> have been priced out of traditional
            health insurance — especially after ACA changes pushed premiums through
            the roof. Going without care isn't a plan.{" "}
            <strong style={{ color: "var(--text)" }}>KonnectMD is.</strong>
          </p>

          <div style={{ display: "inline-block", background: "rgba(45, 127, 249, 0.14)", border: "1px solid rgba(45, 127, 249, 0.3)", borderRadius: "999px", padding: "0.6rem 1.1rem", color: "var(--blue-soft)", fontWeight: 700, fontSize: "0.92rem", marginBottom: "1.5rem" }}>
            Healthcare access starting at $59.99/mo — up to 7 members on one plan
          </div>

          <div className="landing-actions">
            <Link to="/get-details" className="btn btn-primary">See My Options</Link>
            <Link to="/book-call" className="btn btn-secondary">Schedule a Call</Link>
          </div>
        </div>

        {/* ── TRUST BADGES ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", margin: "1.5rem 0" }}>
          {[
            { icon: "🔒", label: "HIPAA Compliant", sub: "Secure & private platform" },
            { icon: "👨‍⚕️", label: "4,000+ Providers", sub: "Board-certified nationwide" },
            { icon: "✅", label: "Not an MLM", sub: "Real opportunity. No recruiting required." },
            { icon: "📍", label: "Nationwide Access", sub: "All 50 states covered" },
          ].map((item) => (
            <div key={item.label} style={{ background: "var(--panel)", border: "1px solid var(--border)", borderRadius: "14px", padding: "0.85rem 1rem", textAlign: "center" }}>
              <span style={{ fontSize: "16px", display: "block", marginBottom: "0.35rem" }}>{item.icon}</span>
              <span style={{ display: "block", fontWeight: 700, fontSize: "0.82rem", color: "var(--text)", marginBottom: "0.2rem" }}>{item.label}</span>
              <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted)" }}>{item.sub}</span>
            </div>
          ))}
        </div>

        {/* ── STAT STRIP ── */}
        <div className="landing-points">
          <div className="landing-point">
            <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 800, color: "var(--blue-soft)", lineHeight: 1 }}>7</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.3rem", display: "block" }}>Members on one plan</span>
          </div>
          <div className="landing-point">
            <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 800, color: "var(--blue-soft)", lineHeight: 1 }}>50+</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.3rem", display: "block" }}>States covered</span>
          </div>
          <div className="landing-point">
            <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 800, color: "var(--blue-soft)", lineHeight: 1 }}>4</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.3rem", display: "block" }}>Membership levels</span>
          </div>
          <div className="landing-point">
            <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>$59</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.3rem", display: "block" }}>Starting per month</span>
          </div>
        </div>

        {/* ── PAIN BLOCK ── */}
        <div className="landing-block">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Sound Familiar?</p>
          <h2>The System Wasn't Built for You</h2>
          <div className="feature-grid" style={{ marginTop: "1.25rem" }}>
            <div className="feature-card">
              <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>Premiums keep climbing</h3>
              <p>You're paying more every year for the same — or less — coverage. The math stopped making sense.</p>
            </div>
            <div className="feature-card">
              <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>Self-employed means you're on your own</h3>
              <p>No employer plan. No group rate. Just full retail price for coverage that may not even fit your life.</p>
            </div>
            <div className="feature-card">
              <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>Family coverage is brutal</h3>
              <p>Covering a whole household feels impossible on a budget. One plan covering everyone changes that.</p>
            </div>
            <div className="feature-card">
              <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>Going without feels risky</h3>
              <p>But $1,200/mo also feels wrong. Until now there was no real middle ground. There is one now.</p>
            </div>
          </div>
        </div>

        {/* ── COST COMPARISON ── */}
        <div className="landing-block">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>The Real Numbers</p>
          <h2>What Are You Actually Paying?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "1.25rem" }}>
            <div style={{ background: "rgba(229, 57, 53, 0.06)", border: "1px solid rgba(229, 57, 53, 0.2)", borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ff8a80", marginBottom: "0.75rem" }}>Traditional Insurance</div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#ff8a80", lineHeight: 1, marginBottom: "0.35rem" }}>$1,200+</div>
              <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1rem" }}>Average monthly family premium</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 2 }}>
                <li>High deductibles ($3,000–$8,000)</li>
                <li>Limited provider networks</li>
                <li>Premiums rise every year</li>
              </ul>
            </div>
            <div style={{ background: "rgba(244, 181, 68, 0.06)", border: "1px solid rgba(244, 181, 68, 0.2)", borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>Going Without</div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1, marginBottom: "0.35rem" }}>$0/mo</div>
              <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1rem" }}>Until something goes wrong</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 2 }}>
                <li>One ER visit = $2,000–$5,000+</li>
                <li>No virtual care access</li>
                <li>Full retail prescription costs</li>
              </ul>
            </div>
            <div style={{ background: "rgba(45, 127, 249, 0.08)", border: "2px solid rgba(45, 127, 249, 0.4)", borderRadius: "16px", padding: "1.25rem", position: "relative" }}>
              <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--blue)", color: "#fff", fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.85rem", borderRadius: "999px", whiteSpace: "nowrap" }}>The Smart Choice</div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue-soft)", marginBottom: "0.75rem", marginTop: "0.5rem" }}>KonnectMD</div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--blue-soft)", lineHeight: 1, marginBottom: "0.35rem" }}>$59.99</div>
              <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1rem" }}>Per family per month</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 2 }}>
                <li>Virtual care included</li>
                <li>Free prescriptions on select plans</li>
                <li>Up to 7 members covered</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── WHO IT'S FOR ── */}
        <div className="landing-block">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Who This Is Built For</p>
          <h2>If Any of These Sound Like You — Keep Reading</h2>
          <div className="steps-grid" style={{ marginTop: "1.25rem" }}>
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 style={{ margin: "0 0 0.4rem" }}>Self-Employed & Freelancers</h3>
              <p>You work for yourself and you're tired of paying insurance company prices designed for corporations.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3 style={{ margin: "0 0 0.4rem" }}>Small Business Owners</h3>
              <p>You can't afford a group plan but you need something real — for yourself and possibly your team.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3 style={{ margin: "0 0 0.4rem" }}>Families Going Without</h3>
              <p>You've been making do because nothing fit the budget. One membership can cover your whole household.</p>
            </div>
          </div>
        </div>

        {/* ── WHAT IT IS ── */}
        <div className="landing-block">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>What This Is</p>
          <h2>Not Insurance. Something That Actually Works.</h2>
          <p>
            KonnectMD is a <strong style={{ color: "var(--text)" }}>healthcare access and savings membership</strong> —
            not health insurance. It's designed to keep you and your family connected to
            real care without the complexity, gatekeepers, and crushing costs of traditional systems.
          </p>
          <p>
            Depending on the membership level, access may include virtual care,
            prescriptions, wellness support, mental health services, specialist
            access, and more — all available nationwide through a secure,
            HIPAA-compliant platform.
          </p>
          <div style={{ marginTop: "1.25rem", padding: "1rem 1.25rem", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.25)", borderRadius: "14px", color: "#ffe2e2", fontSize: "0.92rem", lineHeight: 1.65 }}>
            <strong style={{ display: "block", marginBottom: "0.3rem", color: "#ffb3b3" }}>Important disclosure</strong>
            This is not health insurance and does not replace insurance. It is a membership
            providing access to healthcare services and savings. All services are delivered
            by licensed professionals subject to their professional judgment.
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="landing-block">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Real Results</p>
          <h2>What Members and Partners Are Saying</h2>
          <div className="steps-grid" style={{ marginTop: "1.25rem" }}>
            {[
              { quote: "Working with KonnectMD has been a game-changer. Their expertise and flexibility have helped us lower high turnover and achieve significant cost savings.", name: "Jenelle Schneider", title: "Home Helpers Home Care Franchise" },
              { quote: "I highly recommend KonnectMD for their true professionalism. Their support team has always gone above and beyond — makes me feel as if we're their only client.", name: "Amy Seitz", title: "Alaska Farm Bureau" },
              { quote: "Everyone deserves quality healthcare access. We partnered with KonnectMD to find effective solutions that help reduce out-of-pocket costs for our team.", name: "Silvermoon Cashen", title: "Pulmonary & Internal Medicine Associates" },
            ].map((t) => (
              <div key={t.name} className="step-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "0.93rem", fontStyle: "italic", margin: "0 0 1rem" }}>"{t.quote}"</p>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--text)", margin: "0 0 0.2rem", fontSize: "0.9rem" }}>{t.name}</p>
                  <p style={{ color: "var(--blue-soft)", margin: 0, fontSize: "0.82rem" }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div className="landing-block">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>How It Works</p>
          <h2>Simple. Fast. Nationwide.</h2>
          <div className="steps-grid four-steps" style={{ marginTop: "1.25rem" }}>
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 style={{ margin: "0 0 0.4rem", fontSize: "1rem" }}>Choose your level</h3>
              <p>Silver, Gold, Platinum, or Titanium — starting at $59.99/mo.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3 style={{ margin: "0 0 0.4rem", fontSize: "1rem" }}>Enroll in minutes</h3>
              <p>No lengthy applications. No waiting periods. Get started today.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3 style={{ margin: "0 0 0.4rem", fontSize: "1rem" }}>Get onboarded</h3>
              <p>Access your portal and connect to care — virtual visits, prescriptions, and more.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3 style={{ margin: "0 0 0.4rem", fontSize: "1rem" }}>Use it anywhere</h3>
              <p>Nationwide access. No network boundaries, no referrals needed.</p>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="landing-block">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Got Questions?</p>
          <h2>Quick Answers Before You Decide</h2>
          <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", borderColor: openFaq === index ? "rgba(45, 127, 249, 0.3)" : "var(--border)" }}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.15rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
                  <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ color: "var(--blue-soft)", fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, fontWeight: 300 }}>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div style={{ padding: "0 1.15rem 1rem", color: "var(--muted)", lineHeight: 1.75, fontSize: "0.9rem" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div className="landing-cta" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Ready?</p>
          <h2>Stop Going Without. Start Here.</h2>
          <p>Review your options or get on a quick call — no pressure, no commitment. Just clarity on what fits your household or business.</p>
          <div className="landing-actions" style={{ marginTop: "1.5rem" }}>
            <Link to="/get-details" className="btn btn-primary">See Plan Details</Link>
            <Link to="/book-call" className="btn btn-secondary">Schedule a Call</Link>
            <a href="https://www.konnectmdagency.com/12stone" target="_blank" rel="noreferrer" className="btn btn-outline">View Full Details & Enroll</a>
          </div>

          <div style={{ marginTop: "1.5rem", padding: "0.85rem 1.25rem", background: "rgba(45, 127, 249, 0.06)", border: "1px solid rgba(45, 127, 249, 0.15)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
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
