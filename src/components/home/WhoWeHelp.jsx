import "../../Styles/WhoWeHelp.css";

const audiences = [
  {
    icon: "❤️",
    title: "Individuals",
    text: "Whether you're uninsured, changing jobs, retiring early, or simply looking for another healthcare option, KonnectMD may provide a smarter way to access care.",
    link: "/membership-finder",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Families",
    text: "Affordable healthcare solutions designed to help families access physicians, behavioral health, and prescription savings from one convenient membership.",
    link: "/resource-center/family-healthcare",
  },
  {
    icon: "🏢",
    title: "Businesses",
    text: "Support employee recruitment, retention, and wellness with healthcare solutions designed for today's small business.",
    link: "/resource-center/business-healthcare",
  },
  {
    icon: "💼",
    title: "Entrepreneurs",
    text: "Healthcare options for self-employed professionals, freelancers, consultants, independent contractors, and growing startups.",
    link: "/resource-center/entrepreneurs",
  },
  {
    icon: "🇺🇸",
    title: "Veterans",
    text: "Learn how KonnectMD can complement your existing healthcare options and provide additional access to virtual care and behavioral health resources.",
    link: "/resource-center/veterans",
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
            <a
              key={item.title}
              href={item.link}
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

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}