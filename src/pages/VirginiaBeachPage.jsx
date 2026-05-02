import React from "react";
import CTA from "../components/CTA";

export default function VirginiaBeachPage() {
  return (
    <main className="page city-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Virginia Beach Healthcare Access</p>
          <h1>Healthcare Access for Busy Virginia Beach Families</h1>
          <p className="lead">
            Virginia Beach families, small business owners, military-connected
            households, and independent workers need care that fits real life.
            KonnectMD helps make healthcare access simpler and more affordable.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Care That Moves at Your Speed</h2>
          <p>
            Between work, traffic, school, family schedules, and rising costs,
            getting care can feel harder than it should. KonnectMD helps members
            access virtual care, mental health support, prescription savings,
            and family healthcare options from wherever they are.
          </p>

          <h2>Why Virginia Beach Residents Use KonnectMD</h2>
          <ul>
            <li>Online doctor access for common urgent care needs</li>
            <li>Support for families with busy schedules</li>
            <li>Mental health support without the usual friction</li>
            <li>Prescription savings for everyday medications</li>
            <li>Membership options that may include up to 7 household members</li>
          </ul>

          <h2>Serving Virginia Beach Communities</h2>
          <p>
            Town Center, Kempsville, Lynnhaven, Oceanfront, Princess Anne,
            Red Mill, Bayside, and surrounding communities.
          </p>

          <h2>Common Questions in Virginia Beach</h2>
          <p>
            <strong>Can I talk to a doctor from home?</strong>
            <br />
            Yes. KonnectMD includes virtual care access depending on the
            membership selected.
          </p>

          <p>
            <strong>Is KonnectMD only for uninsured people?</strong>
            <br />
            No. Some people use it even if they already have coverage because
            they want additional access and savings.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}