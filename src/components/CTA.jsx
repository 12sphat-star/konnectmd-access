import React from "react";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>See If KonnectMD Fits Your Needs</h2>
        <p>
          Affordable healthcare access for families, self-employed workers,
          small business owners, and individuals looking for better options.
        </p>

        <div className="cta-buttons">
          <a
            href="https://www.konnectmdagency.com/12stone"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Get Plan Details
          </a>

          <a href="/contact" className="btn btn-outline">
            Ask Questions
          </a>
        </div>
      </div>
    </section>
  );
}