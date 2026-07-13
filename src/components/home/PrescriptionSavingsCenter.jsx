import "../../Styles/PrescriptionSavingsCenter.css";
import { Link } from "react-router-dom";

const savingsPoints = [
  "Prescription savings on thousands of medications",
  "Access to participating pharmacies nationwide",
  "Programs that may reduce everyday medication costs",
  "Included prescription options available with qualifying memberships",
];

export default function PrescriptionSavingsCenter() {
  return (
    <section
      className="rx-center"
      aria-labelledby="prescription-savings-title"
    >
      <div className="container rx-center-grid">
        <div className="rx-center-image-wrap">
          <img
            src="/images/prescription-pharmacy.jpg"
            alt="Pharmacist helping a customer understand prescription savings"
            className="rx-center-image"
          />

          <div className="rx-center-image-label">
            <strong>Prescription Savings</strong>
            <span>A major part of the KonnectMD member experience</span>
          </div>
        </div>

        <div className="rx-center-copy">
          <p className="rx-center-eyebrow">Prescription Savings Center</p>

          <h2 id="prescription-savings-title">
            Your Medications Shouldn&apos;t Put Your Budget at Risk.
          </h2>

          <p className="rx-center-lead">
            Prescription costs can place real pressure on individuals and
            families. KonnectMD provides access to prescription savings
            resources designed to help members explore more affordable options
            for everyday medications.
          </p>

          <ul className="rx-center-list">
            {savingsPoints.map((point) => (
              <li key={point}>
                <span aria-hidden="true">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="rx-center-actions">
          <Link
  to="/resource-center/prescription-savings"
  className="btn btn-primary"
>
  Explore Prescription Savings
</Link>

            <Link to="/plans" className="rx-center-text-link">
              See which memberships include prescription benefits →
            </Link>
          </div>

          <p className="rx-center-note">
            Savings and included prescription options vary by membership,
            medication, pharmacy, availability, and program terms.
          </p>
        </div>
      </div>
    </section>
  );
}