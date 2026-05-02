import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RxSavingsPage() {
  useEffect(() => {
    document.title = "Prescription Savings | KonnectMD";
  }, []);

  return (
    <section className="detail-lux section">
      <div className="container">
        <div className="detail-lux-hero">
          <div className="detail-lux-copy">
            <p className="detail-lux-kicker">Prescription Savings</p>
            <h1>Need help lowering the cost of everyday medications?</h1>
            <p className="detail-lux-sub">
              KonnectMD may help members access prescription savings that can
              make medications more affordable for individuals, families, and
              small business households.
            </p>

            <div className="detail-lux-actions">
              <Link
                to="/contact"
                state={{ interestType: "Prescription Savings" }}
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
              <span>People paying too much for prescriptions.</span>
            </div>
            <div className="detail-lux-highlight">
              <strong>Why it matters</strong>
              <span>Medication costs can hit every month.</span>
            </div>
            <div className="detail-lux-highlight">
              <strong>Good for</strong>
              <span>Families, retirees, entrepreneurs, and uninsured households.</span>
            </div>
          </div>
        </div>

        <div className="detail-lux-grid">
          <div className="detail-lux-card">
            <h3>Lower Everyday Costs</h3>
            <p>
              Prescription savings can help reduce out-of-pocket medication
              expenses for common prescriptions.
            </p>
          </div>
          <div className="detail-lux-card">
            <h3>Useful With or Without Insurance</h3>
            <p>
              Some people use savings tools even when they already have coverage
              because medication prices can still be high.
            </p>
          </div>
          <div className="detail-lux-card">
            <h3>Family Value</h3>
            <p>
              When more than one person in a household needs medication, savings
              can become a major reason to look closer.
            </p>
          </div>
        </div>

        <div className="detail-lux-band">
          <div>
            <p className="detail-lux-kicker">Real-life search</p>
            <h2>“How can I save money on prescriptions without insurance?”</h2>
            <p>
              That is one of the most common healthcare cost problems people
              face. KonnectMD is designed to help members access care and
              savings without relying only on traditional health insurance.
            </p>
          </div>
        </div>

        <div className="detail-lux-grid">
          <div className="detail-lux-card">
            <h3>Common Questions</h3>
            <p>
              <strong>Can KonnectMD help with prescriptions?</strong>
              <br />
              Yes. Prescription savings are part of the value many members look
              for when reviewing KonnectMD options.
            </p>
          </div>
          <div className="detail-lux-card">
            <h3>Do I need insurance?</h3>
            <p>
              KonnectMD is not traditional health insurance. It is designed to
              help members access services and savings.
            </p>
          </div>
          <div className="detail-lux-card">
            <h3>What happens next?</h3>
            <p>
              Choose “Get Details” and a KonnectMD agent can help you understand
              which membership may fit your situation.
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