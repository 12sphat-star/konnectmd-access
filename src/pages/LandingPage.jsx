import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="section landing-section">
      <div className="container landing-container">

        {/* ── HERO ── */}
        <div className="landing-hero">
          <p className="eyebrow">KonnectMD Access — Healthcare Membership</p>

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
            <strong style={{ color: "var(--text)" }}>KonnectMD Access is.</strong>
          </p>

          <div
            style={{
              display: "inline-block",
              background: "rgba(45, 127, 249, 0.14)",
              border: "1px solid rgba(45, 127, 249, 0.3)",
              borderRadius: "999px",
              padding: "0.6rem 1.1rem",
              color: "var(--blue-soft)",
              fontWeight: 700,
              fontSize: "0.92rem",
              marginBottom: "1.5rem",
            }}
          >
            Healthcare access starting at $59.99/mo — up to 7 members on one plan
          </div>

          <div className="landing-actions">
            <Link to="/get-details" className="btn btn-primary">
              See My Options
            </Link>
            <Link to="/book-call" className="btn btn-secondary">
              Schedule a Call
            </Link>
          </div>
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
            KonnectMD Access is a <strong style={{ color: "var(--text)" }}>healthcare access and savings membership</strong> —
            not health insurance. It's designed to keep you and your family connected to
            real care without the complexity, gatekeepers, and crushing costs of traditional systems.
          </p>
          <p>
            Depending on the membership level, access may include virtual care,
            prescriptions, wellness support, mental health services, specialist
            access, and more — all available nationwide.
          </p>

          <div
            style={{
              marginTop: "1.25rem",
              padding: "1rem 1.25rem",
              background: "rgba(229, 57, 53, 0.08)",
              border: "1px solid rgba(229, 57, 53, 0.25)",
              borderRadius: "14px",
              color: "#ffe2e2",
              fontSize: "0.92rem",
              lineHeight: 1.65,
            }}
          >
            <strong style={{ display: "block", marginBottom: "0.3rem", color: "#ffb3b3" }}>
              Important disclosure
            </strong>
            This is not health insurance and does not replace insurance. It is a membership
            providing access to healthcare services and savings.
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
              <p>Silver, Gold, Platinum, or Titanium — pick what fits your household and budget. Starting at $59.99/mo.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3 style={{ margin: "0 0 0.4rem", fontSize: "1rem" }}>Enroll in minutes</h3>
              <p>No lengthy applications. No waiting periods. Get started today and access your benefits right away.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3 style={{ margin: "0 0 0.4rem", fontSize: "1rem" }}>Get onboarded</h3>
              <p>Access your member portal and connect to care — virtual visits, prescriptions, mental health, and more.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3 style={{ margin: "0 0 0.4rem", fontSize: "1rem" }}>Use it anywhere</h3>
              <p>Nationwide access. Your membership travels with you — no network boundaries, no referrals needed.</p>
            </div>
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div className="landing-cta" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Ready?</p>
          <h2>Stop Going Without. Start Here.</h2>
          <p>
            Review your options or get on a quick call — no pressure, no commitment.
            Just clarity on what fits your household or business.
          </p>

          <div className="landing-actions" style={{ marginTop: "1.5rem" }}>
            <Link to="/get-details" className="btn btn-primary">
              See Plan Details
            </Link>
            <Link to="/book-call" className="btn btn-secondary">
              Schedule a Call
            </Link>
            <a
              href="https://www.konnectmdagency.com/12stone"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              View Full Details & Enroll
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}