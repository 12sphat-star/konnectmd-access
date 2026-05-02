import React from "react";
import CTA from "../components/CTA";

export default function PortsmouthPage() {
  return (
    <main className="page city-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Portsmouth Healthcare Access</p>
          <h1>Healthcare Access Portsmouth Families Can Actually Use</h1>
          <p className="lead">
            KonnectMD helps Portsmouth residents, workers, families, and small
            business owners get access to care, savings, and support without
            being blocked by high costs or complicated systems.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Built for Working People and Families</h2>
          <p>
            Many Portsmouth residents need healthcare options that are simple,
            affordable, and easy to understand. KonnectMD helps members access
            virtual urgent care, mental health support, prescription savings,
            and family healthcare benefits.
          </p>

          <h2>What Portsmouth Members May Appreciate</h2>
          <ul>
            <li>Access to virtual urgent care</li>
            <li>Help when traditional insurance is too expensive</li>
            <li>Prescription savings for common medications</li>
            <li>Mental health support from home</li>
            <li>Family membership options for up to 7 household members</li>
          </ul>

          <h2>Serving Portsmouth Communities</h2>
          <p>
            Churchland, Olde Towne, Cradock, Midtown, Port Norfolk, Cavalier
            Manor, and surrounding communities.
          </p>

          <h2>Common Questions in Portsmouth</h2>
          <p>
            <strong>Can I use KonnectMD if I am between jobs?</strong>
            <br />
            Yes. KonnectMD may be useful for people between jobs, uninsured, or
            looking for additional healthcare access.
          </p>

          <p>
            <strong>Does this help with prescriptions?</strong>
            <br />
            Yes. Prescription savings are part of the value for many KonnectMD
            members.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}