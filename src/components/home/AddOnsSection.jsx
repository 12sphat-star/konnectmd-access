import { addons } from "../../data/addons";

export default function AddOnsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Premium Services</p>
          <h2>Add-on services that increase the value</h2>
          <p className="section-copy">
            Beyond the core memberships, there are additional services that can
            expand support for pets, medical bills, and weight management.
          </p>
        </div>

        <div className="addon-grid">
          {addons.map((addon) => (
            <div key={addon.name} className="addon-card">
              <h3>{addon.name}</h3>
              <div className="plan-price">{addon.price}</div>
              <p className="plan-subtitle">{addon.subtext}</p>
              <p className="addon-desc">{addon.description}</p>

              <ul>
                {addon.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <a
                href="https://www.konnectmdagency.com/index.aspx?ReferringDealerID=817595"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary full"
              >
                Learn More / Join
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}