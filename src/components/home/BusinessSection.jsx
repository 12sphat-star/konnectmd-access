export default function BusinessSection() {
  return (
    <section className="section section-dark">
      <div className="container two-col">
        <div>
          <div className="section-heading">
            <p className="eyebrow">For Businesses</p>
            <h2>A virtual-first option for employers and teams</h2>
            <p className="section-copy">
              KonnectMD also presents a business-focused offer designed to help
              teams access licensed providers, prescriptions, and wellness
              services with less stress.
            </p>
          </div>

          <p className="body-copy">
            This is especially useful for employers looking for a practical
            benefit option that can support a healthier, happier team.
          </p>

          <p className="body-copy">
            Business pricing on the official page starts at $24.99 per employee
            each month.
          </p>

          <a
            href="/book-call"
            className="btn btn-primary"
          >
            Book a Business Demo
          </a>
        </div>

        <div className="business-side-card">
          <h3>Business Value Highlights</h3>
          <ul>
            <li>Virtual-first approach</li>
            <li>Unlimited licensed providers</li>
            <li>Prescriptions and wellness services nationwide</li>
            <li>Can help reduce stress and sick-day disruption</li>
            <li>Useful for small businesses wanting a modern benefit option</li>
          </ul>
        </div>
      </div>
    </section>
  );
}