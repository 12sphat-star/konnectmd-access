import React from "react";
import CTA from "../components/CTA";

export default function ChesapeakePage() {
  return (
    <main className="page city-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Chesapeake Healthcare Access</p>
          <h1>Affordable Healthcare Access for Chesapeake Families</h1>
          <p className="lead">
            KonnectMD helps Chesapeake families, homeowners, small business
            owners, and independent workers get access to care without making
            healthcare feel complicated or out of reach.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>A Practical Option for Chesapeake Households</h2>
          <p>
            Chesapeake is filled with working families and growing households.
            KonnectMD gives members access to virtual urgent care, mental health
            support, prescription savings, and family healthcare tools that fit
            modern life.
          </p>

          <h2>Helpful For</h2>
          <ul>
            <li>Families trying to control healthcare costs</li>
            <li>Self-employed residents and contractors</li>
            <li>People between jobs or without traditional insurance</li>
            <li>Parents who want easier care access for the household</li>
            <li>Small business owners looking for a practical benefit option</li>
          </ul>

          <h2>Serving Chesapeake Communities</h2>
          <p>
            Greenbrier, Great Bridge, Deep Creek, Western Branch, South Norfolk,
            Hickory, and surrounding areas.
          </p>

          <h2>Common Questions in Chesapeake</h2>
          <p>
            <strong>Can KonnectMD help my whole household?</strong>
            <br />
            Yes. Some membership options may include up to 7 household members.
          </p>

          <p>
            <strong>Is this good for self-employed people?</strong>
            <br />
            Yes. KonnectMD can be a practical option for contractors,
            entrepreneurs, and independent workers.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}