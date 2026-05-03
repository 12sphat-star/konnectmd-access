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
            <div id="video-section" className="landing-video-wrap">
              <div className="landing-video-card">

                <div className="landing-video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/N9u1RxR6wD4?rel=0&modestbranding=1"
                    title="2 minute overview"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="landing-video-copy">
                  <p className="landing-kicker">See How It Works</p>
                  <h2>2 Minutes That Could Change Everything</h2>
                  <p>
                    Learn how this works and why more people are choosing a
                    different path to care.
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="landing-cta-band">
              <div>
                <h3>Ready to Get Started?</h3>
                <p>Tell us what you need and we’ll guide you.</p>
              </div>

              <Link to="/contact" className="btn btn-primary">
                Go to Contact Form →
              </Link>
            </div>

            {/* FAQ */}
            <div className="landing-faq-block">
              <p className="landing-kicker">Quick Answers</p>
              <h2>Frequently Asked Questions</h2>

              <div className="landing-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="landing-faq-item">
                    <button
                      type="button"
                      className="landing-faq-question"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span>{faq.q}</span>
                      <span>{openFaq === index ? "−" : "+"}</span>
                    </button>

                    {openFaq === index && (
                      <div className="landing-faq-answer">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
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