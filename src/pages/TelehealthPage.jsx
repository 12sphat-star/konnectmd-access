import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TelehealthPage() {
  useEffect(() => {
    document.title = "See a Doctor Online | KonnectMD";
  }, []);

  return (
    <section className="detail-lux section">
      <div className="container">
        <div className="detail-lux-hero">
          <div className="detail-lux-copy">
            <p className="detail-lux-kicker">Doctor Access From Home</p>
            <h1>Need to talk to a doctor without sitting in a waiting room?</h1>
            <p className="detail-lux-sub">
              KonnectMD helps members access care by phone or video for many
              common, non-emergency needs — a simple option for families,
              entrepreneurs, and busy households.
            </p>

            <div className="detail-lux-actions">
              <Link
                to="/contact"
                state={{ interestType: "Doctor Access From Home" }}
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
              <span>People who need care access without the waiting room.</span>
            </div>
            <div className="detail-lux-highlight">
              <strong>Why it matters</strong>
              <span>Healthcare should fit your day, not stop it.</span>
            </div>
            <div className="detail-lux-highlight">
              <strong>Good for</strong>
              <span>Families, entrepreneurs, self-employed people, and small business owners.</span>
            </div>
          </div>
        </div>

        <div className="detail-lux-grid">
          <div className="detail-lux-card">
            <h3>Care From Home</h3>
            <p>
              Talk with a provider by phone or video for many everyday,
              non-emergency healthcare needs.
            </p>
          </div>
          <div className="detail-lux-card">
            <h3>No Waiting Room</h3>
            <p>
              Avoid unnecessary waiting, travel, and time away from work or
              family when virtual care is appropriate.
            </p>
          </div>
          <div className="detail-lux-card">
            <h3>Useful for Families</h3>
            <p>
              A practical way for busy households to get help without making
              every situation a full office visit.
            </p>
          </div>
        </div>

        <div className="detail-lux-band">
          <div>
            <p className="detail-lux-kicker">Real-life search</p>
            <h2>“I need to see a doctor today, but I do not want a big bill.”</h2>
            <p>
              That is the problem many people are trying to solve. KonnectMD is
              not traditional health insurance. It is a healthcare membership
              designed to help members access care and savings in a simpler way.
            </p>
          </div>
        </div>

        <div className="detail-lux-grid">
          <div className="detail-lux-card">
            <h3>Common Questions</h3>
            <p>
              <strong>Is this for emergencies?</strong>
              <br />
              No. Emergency situations should use emergency medical services.
              Virtual care is for many common, non-emergency needs.
            </p>
          </div>
          <div className="detail-lux-card">
            <h3>Can I use it without insurance?</h3>
            <p>
              Yes. KonnectMD is designed to help people access healthcare
              services and savings without relying only on traditional insurance.
            </p>
          </div>
          <div className="detail-lux-card">
            <h3>What happens next?</h3>
            <p>
              Choose “Get Details” and a KonnectMD agent can help you understand
              which membership level may fit your situation.
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