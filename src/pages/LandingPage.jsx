import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "../components/SEO";

const faqs = [
  {
    q: "Is this health insurance?",
    a: "No — this is a healthcare access and savings membership, not health insurance.",
  },
  {
    q: "How much does it cost?",
    a: "Memberships start at $59.99/mo with a one-time enrollment fee.",
  },
  {
    q: "How many people can be on one plan?",
    a: "Up to 7 household members depending on the plan.",
  },
  {
    q: "How quickly can I use it?",
    a: "Most members can begin using benefits the same day.",
  },
  {
    q: "Is this an MLM?",
    a: "No. There is no recruiting requirement, no inventory, and no downlines.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    document.title = "Priced Out of Health Insurance? Start Here Instead.";
  }, []);

  return (
    <>
    <SEO
  title="Affordable Healthcare Access in Hampton Roads | KonnectMD"
  description="KonnectMD helps Hampton Roads families, entrepreneurs, and small business owners access virtual care, prescription savings, mental health support, family membership options, and more."
  path="/"
/>
      {showBanner && (
        <div className="landing-top-banner">
          <div className="landing-top-banner-inner">
            <div className="landing-top-banner-copy">
              <span className="landing-banner-badge">Now Hiring</span>
              <span>
                Become an Agent — <strong>No License Required.</strong>{" "}
                <strong>Not an MLM.</strong> No recruiting. No inventory.
              </span>
            </div>

            <div className="landing-top-banner-actions">
              <Link to="/join-the-team" className="landing-banner-link">
                Join Us
              </Link>

              <button
                type="button"
                onClick={() => setShowBanner(false)}
                className="landing-banner-close"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      <section
        className="landing-rebuild"
        style={{ paddingTop: showBanner ? "2.25rem" : undefined }}
      >
        <div className="container">
          <div className="landing-rebuild-shell">

            {/* HERO */}
            <div className="landing-rebuild-hero">

              {/* LEFT */}
              <div className="landing-rebuild-left">
                <p className="landing-kicker">Healthcare Membership</p>

                <h1 className="landing-rebuild-title">
                  Priced Out of Health Insurance?
                  <br />
                  <span>Start Here Instead.</span>
                </h1>

                <p className="landing-rebuild-sub">
                  A simpler, more affordable way to stay connected to care without
                  traditional insurance pricing.
                </p>

                <p className="landing-rebuild-audience">
                  Individuals. Families. Business owners. Covered.
                </p>

                <div className="landing-rebuild-hero-actions">
                  <Link to="/contact" className="btn btn-primary">
                    Get Plan Details →
                  </Link>

                  <a href="#video-section" className="btn btn-outline">
                    Watch 2-Min Video
                  </a>
                </div>

                <div className="landing-rebuild-mini-points">
                  <div className="landing-mini-point">
                    <strong>No Insurance Required</strong>
                  </div>
                  <div className="landing-mini-point">
                    <strong>Real Doctors. Real Savings.</strong>
                  </div>
                  <div className="landing-mini-point">
                    <strong>Not an MLM.</strong>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="landing-rebuild-right">

                <div className="landing-before-after">
                  <img
                    src="/images/before-after-konnectmd.png"
                    alt="Before waiting room vs after telehealth"
                  />
                </div>

                <div className="landing-side-stack">
                  <p className="landing-kicker">Why People Choose It</p>

                  <h3>
                    Built for real life — not insurance company pricing.
                  </h3>

                  <div className="landing-side-points">

                    <div className="landing-side-point">
                      <strong>Up to 7 household members</strong>
                      <span>One plan can support your entire household.</span>
                    </div>

                    <div className="landing-side-point">
                      <strong>Great for individuals, families, and business owners</strong>
                      <span>Flexible for different life situations.</span>
                    </div>

                    <div className="landing-side-point">
                      <strong>Doctor access from home</strong>
                      <span>No waiting rooms. No long delays.</span>
                    </div>

                    <div className="landing-side-point">
                      <strong>Prescription savings</strong>
                      <span>Reduce out-of-pocket medication costs.</span>
                    </div>

                    <div className="landing-side-point">
                      <strong>Not an MLM</strong>
                      <span>No recruiting. No inventory. No nonsense.</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* STATS */}
            <div className="landing-rebuild-stats">
              <div className="landing-stat">
                <strong>Up to 7</strong>
                <span>Members Per Plan</span>
              </div>

              <div className="landing-stat">
                <strong>Use It</strong>
                <span>Anywhere in the U.S.</span>
              </div>

              <div className="landing-stat">
                <strong>Plans Start</strong>
                <span>$59.99/mo</span>
              </div>

              <div className="landing-stat">
                <strong>No Insurance</strong>
                <span>Required</span>
              </div>
            </div>

            {/* VIDEO */}
{/* VIDEO */}
<div className="landing-video-embed">
  <p
    style={{
      textAlign: "center",
      marginBottom: "12px",
      fontWeight: "900",
      color: "white",
      background: "#2563eb",
      padding: "12px 18px",
      borderRadius: "999px",
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: "0 10px 30px rgba(37,99,235,.35)",
    }}
  >
    ▶ WATCH THE 2-MINUTE OVERVIEW
  </p>

  <video
    controls
    playsInline
    preload="metadata"
    poster="/images/launch-hero.png"
    style={{
      width: "100%",
      borderRadius: "24px",
      boxShadow: "0 20px 60px rgba(0,0,0,.25)",
      cursor: "pointer",
    }}
  >
    <source src="/videos/launch-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

            {/* FINAL CTA */}
            <div className="landing-final-cta">
              <h2>Get the Details and See What Fits</h2>
              <p>No pressure. No commitment. Just clarity.</p>

              <div className="landing-rebuild-hero-actions landing-final-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get Plan Details →
                </Link>

                <Link to="/book-call" className="btn btn-outline">
                  Schedule a Call
                </Link>
              </div>

              <p className="landing-final-note">
                Not insurance. Not an MLM. Just a smarter option.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}