import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  interestType: "Individual / Family",
  membershipInterest: "Need Help Choosing",
  householdSize: "",
  state: "",
  message: "",
};

export default function ContactPage() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch(
        import.meta.env.VITE_GHL_WEBHOOK_URL || "https://your-webhook-url-here.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source: "KonnectMD Access Website",
            submittedAt: new Date().toISOString(),
            ...formData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

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
          <p className="eyebrow">Get Plan Details</p>
          <h1 className="page-title">
            Find the right membership for your household or business
          </h1>
          <p className="section-copy">
            Fill out the form below and we’ll help you review the options that
            may best fit your needs. One plan can support up to 7 members, and
            access follows you anywhere in the U.S.
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
                <label htmlFor="interestType">Interest Type</label>
                <select
                  id="interestType"
                  name="interestType"
                  value={formData.interestType}
                  onChange={handleChange}
                >
                  <option>Individual / Family</option>
                  <option>Business</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="membershipInterest">Membership Interest</label>
                <select
                  id="membershipInterest"
                  name="membershipInterest"
                  value={formData.membershipInterest}
                  onChange={handleChange}
                >
                  <option>Silver</option>
                  <option>Gold</option>
                  <option>Platinum</option>
                  <option>Titanium</option>
                  <option>Need Help Choosing</option>
                </select>
              </div>

              <div>
                <label htmlFor="householdSize">How Many People Need Access?</label>
                <input
                  id="householdSize"
                  name="householdSize"
                  type="number"
                  min="1"
                  max="7"
                  placeholder="1 to 7"
                  value={formData.householdSize}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="state">State</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Your state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us a little about what you need..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div style={{ marginTop: "1.25rem" }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.loading}
              >
                {status.loading ? "Submitting..." : "Submit Request"}
              </button>
            </div>

            {status.success && (
              <p className="form-success">
                Thanks — your request was submitted successfully.
              </p>
            )}

            {status.error && <p className="form-error">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}