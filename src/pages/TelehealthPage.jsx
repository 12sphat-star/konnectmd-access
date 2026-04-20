import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TelehealthPage() {
  useEffect(() => {
    document.title = "Telehealth / 24-7 Access | KonnectMD";
  }, []);

  return (
    <section className="detail-lux section">
      <div className="container">
        <div className="detail-lux-hero">
          <div className="detail-lux-copy">
            <p className="detail-lux-kicker">Telehealth / 24-7 Access</p>
            <h1>Talk to a doctor without sitting in a waiting room.</h1>
            <p className="detail-lux-sub">
              Built for people who want speed, convenience, and access that fits
              real life. This is one of the strongest reasons people start here.
            </p>

            <div className="detail-lux-actions">
              <Link
                to="/contact"
                state={{ interestType: "Telehealth / 24/7 Access" }}
                className="btn btn-primary"
              >
                Get Details on This Option →
              </Link>
              <Link to="/book-call" className="btn btn-outline">
                Schedule a Call
              </Link>
            </div>
          </div>

          <div className="detail-lux-panel">
            <div className="detail-lux-highlight">
              <strong>Best for</strong>
              <span>People who want fast, simple doctor access from home.</span>
            </div>
            <div className="detail-lux-highlight">
              <strong>Why it stands out</strong>
              <span>No waiting room. No long delays. More convenience.</span>
            </div>
            <div className="detail-lux-highlight">
              <strong>Who uses it most</strong>
              <span>Busy adults, families, self-employed workers, and small business owners.</span>
            </div>
          </div>
        </div>

        <div className="detail-lux-grid">
          <div className="detail-lux-card">
            <h3>24/7 access</h3>
            <p>Talk to a doctor by phone or video when timing matters.</p>
          </div>
          <div className="detail-lux-card">
            <h3>Convenience</h3>
            <p>Get support without driving across town or sitting around sick people.</p>
          </div>
          <div className="detail-lux-card">
            <h3>Everyday usefulness</h3>
            <p>A practical option for many common, non-emergency needs.</p>
          </div>
        </div>

        <div className="detail-lux-band">
          <div>
            <p className="detail-lux-kicker">Why people like this path</p>
            <h2>It turns healthcare access into something that fits your day.</h2>
            <p>
              This is one of the simplest ways to understand the value quickly:
              easier access, less friction, and more control over how you get help.
            </p>
          </div>
        </div>

        <div className="detail-lux-bottom">
          <Link to="/get-details" className="btn btn-secondary">
            ← Back to All Options
          </Link>
        </div>
      </div>
    </section>
  );
}