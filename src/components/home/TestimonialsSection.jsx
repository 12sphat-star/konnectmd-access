import "../../Styles/TestimonialsSection.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "Working with KonnectMD has been a game-changer. Their expertise and flexibility have helped us lower high turnover and achieve significant cost savings.",
    name: "Jenelle Schneider",
    title: "Home Helpers Home Care Franchise",
    category: "Small Business",
  },
  {
    quote:
      "I highly recommend KonnectMD for their true professionalism and dedication to client success. Their support team has always gone above and beyond—it makes me feel as if we're their only client.",
    name: "Amy Seitz",
    title: "Alaska Farm Bureau",
    category: "Employer Partner",
  },
  {
    quote:
      "Our goal is to offer the best benefits to our healthcare providers. We've partnered with KonnectMD to explore alternative options that help reduce out-of-pocket costs. Everyone deserves quality healthcare access.",
    name: "Silvermoon Cashen",
    title: "Pulmonary & Internal Medicine Associates",
    category: "Medical Practice",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="member-stories"
      aria-labelledby="member-stories-title"
    >
      <div className="container">
        <div className="member-stories-header">
          <p className="member-stories-eyebrow">Real Experiences</p>

          <h2 id="member-stories-title">
            Why Organizations Choose KonnectMD
          </h2>

          <p>
            Hear from businesses and organizations that have used KonnectMD to
            strengthen healthcare access, support their people, and explore
            practical alternatives.
          </p>
        </div>

        <div className="member-stories-grid">
          {testimonials.map((testimonial) => (
            <article
              className="member-story-card"
              key={testimonial.name}
            >
              <span className="member-story-category">
                {testimonial.category}
              </span>

              <div
                className="member-story-quote-mark"
                aria-hidden="true"
              >
                “
              </div>

              <blockquote>{testimonial.quote}</blockquote>

              <div className="member-story-person">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.title}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="member-video-callout">
          <div>
            <p className="member-video-eyebrow">Coming Next</p>

            <h3>Real Member Video Stories</h3>

            <p>
              We are building a video library featuring families, veterans,
              business owners, and members sharing how they use KonnectMD
              services in real life.
            </p>
          </div>

          <Link to="/contact" className="btn btn-secondary">
            Share Your Experience
          </Link>
        </div>

        <p className="member-stories-source">
          Testimonials sourced from official KonnectMD materials. Individual
          experiences may vary.
        </p>
      </div>
    </section>
  );
}