import "../../Styles/WhoWeHelp.css";
import { Link } from "react-router-dom";

const audiences = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Families",
    text: "Affordable healthcare solutions designed to help families access physicians, behavioral health, and prescription savings from one convenient membership.",
    link: "/resource-center/family-healthcare",
  },
  {
    icon: "🏢",
    title: "Business Owners & Entrepreneurs",
    text: "Healthcare access for small business owners, entrepreneurs, self-employed professionals, freelancers, and independent contractors.",
    link: "/resource-center/entrepreneurs",
  },
  {
    icon: "🇺🇸",
    title: "Veterans",
    text: "Learn how KonnectMD can complement your existing healthcare options and provide additional access to virtual care and behavioral health resources.",
    link: "/resource-center/veterans",
  },
  {
    icon: "🧭",
    title: "Not Sure Where You Fit?",
    text: "Whether you're an individual, retiree, changing jobs, or simply exploring your options, our Personalized Membership Guide can help you discover which KonnectMD membership may best fit your needs.",
    link: "/membership-finder",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="who-help">
      <div className="container">

        <div className="section-heading">

          <p className="eyebrow">
            WHO WE HELP
          </p>

          <h2>
            Who Can KonnectMD Help?
          </h2>

          <p className="section-intro">
            KonnectMD offers healthcare membership solutions for individuals,
            families, entrepreneurs, veterans, and businesses. Choose the
            category that best fits your situation to learn more.
          </p>

        </div>

        <div className="who-grid">

          {audiences.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="who-card"
            >
              <div className="who-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span>
                Learn More →
              </span>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}