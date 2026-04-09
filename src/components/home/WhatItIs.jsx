import SectionHeading from "../shared/SectionHeading";

export default function WhatItIs() {
  return (
    <section id="what-it-is" className="section">
      <div className="container two-col">
        <div>
          <SectionHeading
            eyebrow="What This Is"
            title="What is KonnectMD Access?"
            text="KonnectMD Access is a healthcare access and savings membership designed to help individuals, families, and business owners stay connected to care in a simpler way."
          />
          <p className="body-copy">
            It provides access to virtual care, prescriptions, wellness services,
            and more through a structured membership with nationwide access.
          </p>
          <p className="body-copy">
            This can be helpful for people exploring practical healthcare access
            options for themselves, their household, or their business.
          </p>
          <p className="body-copy note">
            This is not health insurance.
          </p>
        </div>

        <div>
          <img
            src="/images/business-owner.jpg"
            alt="Business owner reviewing healthcare access options"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
}