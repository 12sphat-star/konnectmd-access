import { useEffect, useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwm-OwvVVty1_u-Tc1gaZE4vD5E8yIEEljvh5kYLV0pkZIpi5qf_Tnbff4x1yrwNEVu/exec";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  opportunityType: "",
  hoursPerWeek: "",
  experience: "No experience — willing to learn",
  outreachMethods: [],
  whyInterested: "",
  commissionAcknowledged: "",
  attendOverview: "",
};

const outreachOptions = [
  "Personal referrals",
  "Social media",
  "Local businesses",
  "Community organizations / events",
  "Phone / text follow-up",
  "Networking",
];

export default function JoinPage() {
  useEffect(() => {
    document.title =
      "Independent Healthcare Representative Opportunity | KonnectMD Access";
  }, []);

  const [formData, setFormData] = useState(initialForm);

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOutreachChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      outreachMethods: checked
        ? [...prev.outreachMethods, value]
        : prev.outreachMethods.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.commissionAcknowledged !== "Yes") {
      setStatus({
        loading: false,
        success: false,
        error:
          "Please confirm that you understand this is an independent, commission-based opportunity before continuing.",
      });
      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    const payload = {
      source: "RuKonnected Representative Opportunity",
      submittedAt: new Date().toISOString(),
      ...formData,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setFormData(initialForm);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Applicant submission error:", error);

      setStatus({
        loading: false,
        success: false,
        error:
          "We were unable to submit your information. Please try again.",
      });
    }
  };

  if (status.success) {
    return (
      <section className="section">
        <div className="container">
          <div
            className="cta-box premium-cta"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
              padding: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            <p className="eyebrow">Application Received</p>

            <h1 className="page-title">
              Thank You for Your{" "}
              <span style={{ color: "var(--blue-soft)" }}>Interest.</span>
            </h1>

            <p
              style={{
                color: "var(--muted)",
                maxWidth: "650px",
                margin: "1rem auto",
                lineHeight: 1.75,
              }}
            >
              We've received your Representative Interest Form and will review
              your information.
            </p>

            <div
              style={{
                margin: "2rem auto",
                padding: "1.5rem",
                maxWidth: "620px",
                textAlign: "left",
                background: "rgba(45,127,249,.08)",
                border: "1px solid rgba(45,127,249,.25)",
                borderRadius: "16px",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "0.75rem",
                  fontSize: "1.3rem",
                }}
              >
                What Happens Next?
              </h2>

              <p
                style={{
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.75,
                }}
              >
               We'll review your information. Applicants selected for the next step will be contacted to learn more about the opportunity, including responsibilities, compensation, expectations, and how the representative program works.

If you decide to move forward, you'll then complete your representative enrollment and be invited to a Representative Orientation to help you get started.
              </p>
            </div>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
              }}
            >
              Please watch your email and phone for information about the next
              step.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div
          className="cta-box premium-cta"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >

          {/* HERO */}

          <div style={{ textAlign: "center" }}>
            <p className="eyebrow">
              Independent Healthcare Representative
            </p>

            <h1
              className="page-title"
              style={{
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              You Applied. Let's See If This Opportunity Is{" "}
              <span style={{ color: "var(--blue-soft)" }}>
                Right for You.
              </span>
            </h1>

            <p
              className="section-copy"
              style={{
                maxWidth: "760px",
                margin: "1rem auto",
              }}
            >
              Take a few minutes to learn what KonnectMD is, why this
              opportunity exists, and what being an Independent Healthcare
              Representative involves.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0.6rem",
                marginTop: "1.25rem",
              }}
            >
              {[
                "Remote",
                "Part-Time or Full-Time",
                "Independent",
                "Commission-Based",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "0.45rem 0.85rem",
                    border: "1px solid rgba(96,165,250,.3)",
                    borderRadius: "999px",
                    color: "var(--blue-soft)",
                    fontSize: "0.85rem",
                    background: "rgba(45,127,249,.07)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* VIDEO */}

          <div
            style={{
              marginTop: "2.25rem",
              textAlign: "center",
            }}
          >
            <p className="eyebrow">Start Here</p>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                marginBottom: "1.25rem",
              }}
            >
              Meet KonnectMD
            </h2>

            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "850px",
                margin: "0 auto",
                paddingTop: "56.25%",
                overflow: "hidden",
                borderRadius: "18px",
                border: "1px solid var(--border)",
                background: "#000",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/NMoZpv_rnU4"
                title="Discover KonnectMD"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* WHY NOW */}

          <div
            style={{
              marginTop: "2.5rem",
              padding: "clamp(1.5rem, 4vw, 2.25rem)",
              background: "rgba(45,127,249,.08)",
              border: "1px solid rgba(45,127,249,.25)",
              borderRadius: "18px",
              textAlign: "center",
            }}
          >
            <p className="eyebrow">Why Now?</p>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                marginTop: "0.25rem",
              }}
            >
              Healthcare Is Changing. The Need Is Growing.
            </h2>

            <p
              style={{
                color: "var(--muted)",
                maxWidth: "780px",
                margin: "1rem auto",
                lineHeight: 1.75,
              }}
            >
              Across America, families, workers, and small businesses are
              facing increasing uncertainty about the cost of healthcare and
              access to everyday care.
            </p>

            <p
              style={{
                color: "var(--muted)",
                maxWidth: "780px",
                margin: "1rem auto",
                lineHeight: 1.75,
              }}
            >
              As more people search for affordable healthcare solutions, there
              is a growing need for people who can educate their communities
              about available options.
            </p>

            <h3
              style={{
                color: "var(--text)",
                marginTop: "1.4rem",
                marginBottom: "0.75rem",
              }}
            >
              That's Where You Come In.
            </h3>

            <strong
              style={{
                display: "block",
                color: "var(--blue-soft)",
                fontSize: "1.05rem",
              }}
            >
              The need is real. The market is large. And the timing matters.
            </strong>
          </div>

          {/* ROLE */}

          <div style={{ marginTop: "2.75rem" }}>
            <div style={{ textAlign: "center" }}>
              <p className="eyebrow">The Role</p>

              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                }}
              >
                What Would You Actually Do?
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {[
                {
                  title: "Educate",
                  text: "Help people understand KonnectMD and the healthcare services available to members.",
                },
                {
                  title: "Connect",
                  text: "Introduce individuals, families, and businesses to available membership options.",
                },
                {
                  title: "Follow Up",
                  text: "Answer questions and help interested people take the next step.",
                },
                {
                  title: "Build",
                  text: "Grow through referrals, social media, businesses, networking, and community outreach.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="feature-card premium-card"
                  style={{ textAlign: "left" }}
                >
                  <div className="feature-top-line"></div>

                  <h3
                    style={{
                      fontSize: "1.05rem",
                      marginTop: 0,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EARNINGS */}

          <div
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
            }}
          >
            <p className="eyebrow">The Opportunity</p>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                marginBottom: "1rem",
              }}
            >
              How You Can Earn
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              {[
                "Weekly Commissions",
                "Residual Income",
                "Performance Bonuses",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "0.7rem 1rem",
                    borderRadius: "10px",
                    border: "1px solid rgba(96,165,250,.3)",
                    background: "rgba(45,127,249,.07)",
                    color: "var(--text)",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <p
              style={{
                color: "var(--muted)",
                maxWidth: "700px",
                margin: "1.25rem auto",
                lineHeight: 1.7,
              }}
            >
              Training and ongoing support are provided to help you learn the
              services, explain the benefits, approach prospects, and build your
              business.
            </p>

            <div
              style={{
                marginTop: "1.25rem",
                padding: "1.25rem",
                textAlign: "left",
                border: "1px solid rgba(96,165,250,.3)",
                borderRadius: "14px",
                background: "rgba(255,255,255,.03)",
              }}
            >
              <strong
                style={{
                  display: "block",
                  color: "var(--blue-soft)",
                  marginBottom: "0.5rem",
                }}
              >
                Important — Please Understand Before Continuing
              </strong>

              <p
                style={{
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                This is an independent, performance-based opportunity. It is
                not an hourly or salaried position, and income is not
                guaranteed. Individual results depend on activity, sales,
                follow-up, and performance. Complete compensation details are
                reviewed during the Representative Opportunity Overview.
              </p>
            </div>
          </div>

          {/* FIT */}

          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.75rem",
              textAlign: "center",
              background: "rgba(255,255,255,.03)",
              border: "1px solid var(--border)",
              borderRadius: "18px",
            }}
          >
            <p className="eyebrow">Could This Be You?</p>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                marginBottom: "1rem",
              }}
            >
              You Don't Need Healthcare Experience
            </h2>

            <p
              style={{
                color: "var(--text)",
                fontWeight: 600,
                lineHeight: 1.7,
              }}
            >
              No healthcare experience required. • No insurance license
              required to get started.
            </p>

            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              We're looking for people who can communicate, follow up, learn,
              take initiative, and are willing to build relationships.
            </p>

            <p
              style={{
                color: "var(--blue-soft)",
                fontWeight: 600,
                marginBottom: 0,
              }}
            >
              Training and ongoing support are provided.
            </p>
          </div>

          {/* FORM */}

          <div
            id="representative-interest-form"
            style={{
              marginTop: "3rem",
              scrollMarginTop: "100px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p className="eyebrow">Next Step</p>

              <h2
                style={{
                  fontSize: "clamp(1.7rem, 4vw, 2.3rem)",
                  marginBottom: "0.5rem",
                }}
              >
                Still Interested?
              </h2>

              <p
                style={{
                  color: "var(--muted)",
                  maxWidth: "680px",
                  margin: "0 auto 2rem",
                  lineHeight: 1.7,
                }}
              >
                Complete this short Representative Interest Form. Selected
                applicants will be invited to the next virtual Representative
                Opportunity Overview.
              </p>
            </div>

            <form className="basic-form" onSubmit={handleSubmit}>
              <div className="form-grid">

                <div>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Mobile Phone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city">City *</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="state">State *</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="e.g. Virginia"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <label htmlFor="opportunityType">
                  What are you looking for? *
                </label>

                <select
                  id="opportunityType"
                  name="opportunityType"
                  value={formData.opportunityType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Part-time additional income">
                    Part-time additional income
                  </option>
                  <option value="Full-time opportunity">
                    Full-time opportunity
                  </option>
                  <option value="Either">Either</option>
                </select>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <label htmlFor="hoursPerWeek">
                  How much time could you realistically commit each week? *
                </label>

                <select
                  id="hoursPerWeek"
                  name="hoursPerWeek"
                  value={formData.hoursPerWeek}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Under 5 hours">Under 5 hours</option>
                  <option value="5–10 hours">5–10 hours</option>
                  <option value="10–20 hours">10–20 hours</option>
                  <option value="20+ hours">20+ hours</option>
                </select>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <label htmlFor="experience">
                  Which best describes your background?
                </label>

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
                  <option>Business owner / entrepreneur</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <label>
                  How would you be willing to build your business?
                </label>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "0.65rem",
                    marginTop: "0.75rem",
                  }}
                >
                  {outreachOptions.map((option) => (
                    <label
                      key={option}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.75rem",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={formData.outreachMethods.includes(option)}
                        onChange={handleOutreachChange}
                        style={{
                          width: "auto",
                          margin: 0,
                        }}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <label htmlFor="whyInterested">
                  Why are you interested in this opportunity? *
                </label>

                <textarea
                  id="whyInterested"
                  name="whyInterested"
                  rows="3"
                  value={formData.whyInterested}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                style={{
                  marginTop: "1.75rem",
                  padding: "1.25rem",
                  background: "rgba(45,127,249,.07)",
                  border: "1px solid rgba(45,127,249,.25)",
                  borderRadius: "14px",
                }}
              >
                <label htmlFor="commissionAcknowledged">
                  I understand this is an independent, commission-based
                  opportunity and does not provide guaranteed hourly or
                  salaried income. *
                </label>

                <select
                  id="commissionAcknowledged"
                  name="commissionAcknowledged"
                  value={formData.commissionAcknowledged}
                  onChange={handleChange}
                  required
                  style={{ marginTop: "0.75rem" }}
                >
                  <option value="">Select one</option>
                  <option value="Yes">
                    Yes — I understand and want to continue
                  </option>
                  <option value="No">
                    No — I am looking for guaranteed hourly or salaried employment
                  </option>
                </select>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <label htmlFor="attendOverview">
                  If selected, are you willing to attend a virtual
                  Representative Opportunity Overview and Compensation? *
                </label>

                <select
                  id="attendOverview"
                  name="attendOverview"
                  value={formData.attendOverview}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <p
                style={{
                  marginTop: "1.25rem",
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                }}
              >
                Submission expresses interest in an independent representative
                opportunity and does not guarantee acceptance or income.
              </p>

              <div
                style={{
                  marginTop: "1.5rem",
                  textAlign: "center",
                }}
              >
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status.loading}
                  style={{ minWidth: "240px" }}
                >
                  {status.loading
                    ? "Submitting..."
                    : "Submit My Interest"}
                </button>
              </div>

              {status.error && (
                <p
                  className="form-error"
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  {status.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}