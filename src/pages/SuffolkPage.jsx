import React from "react";
import CTA from "../components/CTA";

export default function SuffolkPage() {
  return (
    <main className="page city-page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Suffolk Healthcare Access</p>
          <h1>Affordable Healthcare Access for Suffolk Households</h1>
          <p className="lead">
            KonnectMD helps Suffolk families, commuters, business owners, and
            growing households access care, savings, and support through a more
            flexible healthcare solution.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Healthcare That Fits Family Life</h2>
          <p>
            Suffolk continues to grow, and many households need practical
            healthcare options that fit modern schedules and real budgets.
            KonnectMD helps members access virtual care, mental health support,
            prescription savings, and family options.
          </p>

          <h2>Why Suffolk Residents Use KonnectMD</h2>
          <ul>
            <li>Online doctor access when life is busy</li>
            <li>Healthcare support for families</li>
            <li>Prescription savings tools</li>
            <li>Mental health support</li>
            <li>Up to 7 household members on some options</li>
          </ul>

          <h2>Serving Suffolk Communities</h2>
          <p>
            Harbour View, North Suffolk, Downtown Suffolk, Chuckatuck, Whaleyville,
            and surrounding communities.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}