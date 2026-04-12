import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  experience: "No experience — willing to learn",
  whyInterested: "",
};

export default function JoinPage() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    const payload = {
      source: "KonnectMD Agent Opportunity",
      submittedAt: new Date().toISOString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      experience: formData.experience,
      whyInterested: formData.whyInterested,
    };

    try {
    const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/E6kJjCkXCeOgpU5OhZJh/webhook-trigger/0f783b89-e7fe-4030-a5cd-301c238a3fd2",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) throw new Error("Submission failed");

      setStatus({ loading: false, success: true, error: "" });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="cta-box premium-cta">

          <p className="eyebrow">Agent Opportunity</p>
          <h1 className="page-title">
            Help People. Build Income.{" "}
            <span style={{ color: "var(--blue-soft)" }}>Do Something That Matters.</span>
          </h1>

          <p className="section-copy">
            Hampton Roads has a healthcare access problem. Millions of
            self-employed workers, small business owners, and families are
            going without care because traditional insurance costs too much.
            We're building a team of agents to change that — one household
            and one business at a time.
          </p>

          {/* What this is not */}
          <div
            style={{
              margin: "1.5rem 0",
              padding: "1rem 1.25rem",
              background: "rgba(45, 127, 249, 0.08)",
              border: "1px solid rgba(45, 127, 249, 0.2)",
              borderRadius: "14px",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "var(--blue-soft)",
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Let's be clear about what this is
            </strong>
            <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.75, fontSize: "0.95rem" }}>
              This is not an MLM. There are no recruit-your-friends requirements,
              no inventory to buy, and no pyramid structure. This is a real
              income opportunity helping real people access healthcare they
              otherwise couldn't afford. You represent a product that genuinely
              solves a problem — and you get paid well to do it.
            </p>
          </div>

          {/* What you get */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              {
                title: "Flexible Schedule",
                text: "Work full time, part time, or as a side income. You set your pace.",
              },
              {
                title: "Real Commissions",
                text: "Earn on every membership you place. The more you help, the more you earn.",
              },
              {
                title: "Training & Support",
                text: "We don't hand you a link and wish you luck. You get onboarding, tools, and backup.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="feature-card premium-card"
                style={{ textAlign: "left" }}
              >
                <div className="feature-top-line"></div>
                <h3 style={{ fontSize: "1rem", marginTop: 0, marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Who we're looking for */}
          <div
            style={{
              margin: "1.5rem 0",
              padding: "1.25rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "var(--text)",
                marginBottom: "0.75rem",
                fontSize: "1rem",
              }}
            >
              Who we're looking for
            </strong>
            <ul className="check-list" style={{ margin: 0 }}>
              <li>People who genuinely want to help their community</li>
              <li>Self-starters who don't need to be micromanaged</li>
              <li>Anyone with a network in Hampton Roads — or beyond</li>
              <li>Experience in sales, healthcare, or community outreach is a plus — not a requirement</li>
              <li>Licensed health insurance agents welcome — additional earning opportunity available</li>
            </ul>
          </div>

          {/* Form */}
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>
              Tell us about yourself
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Fill out the form below and someone will reach out within one
              business day to set up a quick conversation.
            </p>

            <form className="basic-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="location">City / Area</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="e.g. Norfolk, Virginia Beach"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="experience">Background</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <option>No experience — willing to learn</option>
                    <option>Sales background</option>
                    <option>Healthcare background</option>
                    <option>Licensed insurance agent</option>
                    <option>Community outreach / networking</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <label htmlFor="whyInterested">Why are you interested?</label>
                <textarea
                  id="whyInterested"
                  name="whyInterested"
                  rows="4"
                  placeholder="Tell us a little about what draws you to this opportunity..."
                  value={formData.whyInterested}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "var(--muted)" }}>
                We don't sell your information. Expect a response within one business day.
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status.loading}
                >
                  {status.loading ? "Submitting..." : "Submit My Interest"}
                </button>
              </div>

              {status.success && (
                <p className="form-success">
                  Thanks — we received your submission and will be in touch within one business day.
                </p>
              )}

              {status.error && (
                <p className="form-error">{status.error}</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}