import SectionHeading from "../shared/SectionHeading";

export default function WhatItIs() {
  return (
    <section id="what-it-is" className="section">
      <div className="container two-col">
        <div>
          <SectionHeading
            eyebrow="What This Is"
            title="This is not health insurance"
            text="KonnectMD Access is a healthcare savings and virtual care solution designed to help people access care in a simpler and more affordable way."
          />
          <p className="body-copy">
            This is for people who may not be able to afford traditional health
            insurance right now but still want a practical option for staying
            connected to care.
          </p>
          <p className="body-copy">
            It is designed to support individuals, households, and businesses
            looking for more accessible healthcare support.
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