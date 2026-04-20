import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RxSavingsPage() {
  useEffect(() => {
    document.title = "Rx Savings | KonnectMD";
  }, []);

  return (
    <section className="detail-lux section">
      <div className="container">
        <div className="detail-lux-hero">
          <div className="detail-lux-copy">
            <p className="detail-lux-kicker">Rx Savings</p>
            <h1>Prescription costs add up fast. Savings matter.</h1>
            <p className="detail-lux-sub">
              For many people, medication cost is one of the biggest pressure
              points. This path is for those who want better everyday value.
            </p>

            <div className="detail-lux-actions">
              <Link
                to="/contact"
                state={{ interestType: "Rx Savings" }}
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
              <span>People focused on reducing ongoing medication expense.</span>
            </div>
            <div className="detail-lux-highlight">
              <strong>Why it stands out</strong>
              <span>It speaks directly to monthly out-of-pocket pressure.</span>
            </div>
            <div className="detail-lux-highlight">
              <strong>Who uses it most</strong>
              <span>Individuals, families, and business owners who want practical savings.</span>
            </div>
          </div>
        </div>

        <div className="detail-lux-grid">
          <div className="detail-lux-card">
            <h3>Monthly value</h3>
            <p>A focused way to think about recurring healthcare costs.</p>
          </div>
          <div className="detail-lux-card">
            <h3>Simple positioning</h3>
            <p>Easy to understand for people comparing cost versus usefulness.</p>
          </div>
          <div className="detail-lux-card">
            <h3>Everyday relevance</h3>
            <p>Not just a nice feature — a real reason people look closer.</p>
          </div>
        </div>

        <div className="detail-lux-band">
          <div>
            <p className="detail-lux-kicker">Why people like this path</p>
            <h2>It focuses on one of the most painful parts of healthcare spending.</h2>
            <p>
              When the monthly cost of prescriptions keeps showing up, even small
              savings can feel big. That makes this one of the most relatable paths.
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