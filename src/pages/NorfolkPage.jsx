import React from "react";
import CTA from "../components/CTA";

export default function NorfolkPage() {
  return (
    <main className="page city-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Norfolk Healthcare Access</p>
          <p className="lead">
  From Ocean View to Downtown Norfolk, KonnectMD helps families,
  entrepreneurs, students, and self-employed residents access care without
  waiting weeks or stressing over traditional insurance costs.
</p>
          <p className="lead">
            From Ocean View to Downtown Norfolk, KonnectMD helps families,
            workers, students, and self-employed residents access care without
            waiting weeks or stressing over traditional insurance costs.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Healthcare Built for Real Norfolk Life</h2>
          <p>
            Norfolk is full of working families, military-connected households,
            students, entrepreneurs, and people in transition. KonnectMD gives
            members a practical way to access virtual urgent care, mental health
            support, prescription savings, and more.
          </p>

          <h2>Popular Benefits for Norfolk Residents</h2>
          <ul>
            <li>Talk to a doctor online without sitting in a waiting room</li>
            <li>Get help when you do not have traditional insurance</li>
            <li>Access mental health support from home</li>
            <li>Save on prescriptions and everyday healthcare needs</li>
            <li>Family membership options for up to 7 household members</li>
          </ul>

          <h2>Serving Norfolk Communities</h2>
          <p>
            Downtown Norfolk, Ghent, Ocean View, Military Circle, Larchmont,
            Park Place, Norview, and surrounding areas.
          </p>

          <h2>Common Questions in Norfolk</h2>
          <p>
            <strong>Can I use KonnectMD if I do not have insurance?</strong>
            <br />
            Yes. KonnectMD is designed to help people access healthcare support
            even without relying only on traditional insurance.
          </p>

          <p>
            <strong>Can families use one membership?</strong>
            <br />
            Yes. Some KonnectMD options may cover up to 7 household members on
            one membership.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}